import {
  RegistrationRecord,
  RegistrationFormData,
  GetRegistrationsQuery,
  DashboardMetrics,
} from "../types/registration";
import { AdminAuditLog } from "../types/admin";
import { registrationService } from "../services/registrationService";
import { resolveTrack } from "../config/tracks";

const inMemoryAuditLogs: AdminAuditLog[] = [];

/**
 * Creates a new registration document using the standalone registration service.
 */
export async function createRegistrationDocument(
  formData: RegistrationFormData
): Promise<RegistrationRecord> {
  const canonicalTrack = resolveTrack(formData.preferredTrack);
  const normalizedFormData: RegistrationFormData = {
    ...formData,
    preferredTrack: canonicalTrack ? (canonicalTrack.title as any) : formData.preferredTrack,
  };

  return registrationService.createRegistration(normalizedFormData);
}

/**
 * Computes authoritative summit metrics across registrations.
 */
export async function calculateAuthoritativeMetricsFromDb(): Promise<DashboardMetrics> {
  const all = registrationService.getAllRegistrations();
  return registrationService.calculateMetrics(all);
}

/**
 * Retrieves registrations with filtering, sorting, pagination, and metrics.
 */
export async function getRegistrationsFromDb(query: GetRegistrationsQuery = {}): Promise<{
  registrations: RegistrationRecord[];
  total: number;
  filteredTotal: number;
  page: number;
  pageSize: number;
  totalPages: number;
  metrics: DashboardMetrics;
}> {
  let all = registrationService.getAllRegistrations();
  const total = all.length;

  if (query.category && query.category !== "all") {
    all = all.filter((r) => r.categorySlug === query.category);
  }

  if (query.track && query.track !== "all") {
    const canonicalTrack = resolveTrack(query.track);
    const trackTitle = canonicalTrack ? canonicalTrack.title : query.track;
    all = all.filter((r) => {
      const c = resolveTrack(r.preferredTrack);
      return (
        r.preferredTrack === trackTitle ||
        r.preferredTrack === query.track ||
        (c && c.title === trackTitle) ||
        r.preferredTrackSlug === query.track
      );
    });
  }

  if (query.search) {
    const q = query.search.toLowerCase().trim();
    all = all.filter((r) => {
      return (
        r.fullName.toLowerCase().includes(q) ||
        r.email.toLowerCase().includes(q) ||
        r.phone.toLowerCase().includes(q) ||
        r.organization.toLowerCase().includes(q) ||
        r.referenceId.toLowerCase().includes(q) ||
        (r.teamName && r.teamName.toLowerCase().includes(q)) ||
        (r.projectName && r.projectName.toLowerCase().includes(q))
      );
    });
  }

  if (query.pickup === "pickup-requested") {
    all = all.filter((r) => r.travel?.pickupRequired);
  } else if (query.pickup === "self-arranged") {
    all = all.filter((r) => !r.travel?.pickupRequired);
  }

  if (query.sortBy === "oldest") {
    all.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  } else if (query.sortBy === "name") {
    all.sort((a, b) => a.fullName.localeCompare(b.fullName));
  } else {
    all.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  const limit = Math.min(query.limit || 500, 1000);
  const offset = query.offset && query.offset > 0 ? query.offset : 0;
  const paginated = all.slice(offset, offset + limit);

  const metrics = registrationService.calculateMetrics(registrationService.getAllRegistrations());
  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.max(1, Math.ceil(all.length / limit));

  return {
    registrations: paginated,
    total,
    filteredTotal: all.length,
    page: currentPage,
    pageSize: limit,
    totalPages,
    metrics,
  };
}

/**
 * Retrieves a single registration by Document ID or Reference ID
 */
export async function getRegistrationByIdFromDb(idOrRef: string): Promise<RegistrationRecord | null> {
  const record = registrationService.getRegistrationById(idOrRef);
  return record || null;
}

/**
 * Updates internal admin notes for a registration
 */
export async function updateRegistrationNotesInDb(
  id: string,
  adminNotes: string
): Promise<RegistrationRecord | null> {
  return registrationService.updateAdminNotes(id, adminNotes);
}

/**
 * Deletes a registration document permanently
 */
export async function deleteRegistrationFromDb(id: string): Promise<boolean> {
  return registrationService.deleteRegistration(id);
}

/**
 * Records an administrative activity log
 */
export async function recordAdminAuditLog(log: Omit<AdminAuditLog, "id">): Promise<void> {
  inMemoryAuditLogs.unshift({
    id: `log-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    ...log,
    timestamp: log.timestamp || new Date().toISOString(),
  });
  if (inMemoryAuditLogs.length > 500) {
    inMemoryAuditLogs.pop();
  }
}

/**
 * Retrieves recent administrative audit logs
 */
export async function getAdminAuditLogs(limitCount = 50): Promise<AdminAuditLog[]> {
  return inMemoryAuditLogs.slice(0, limitCount);
}
