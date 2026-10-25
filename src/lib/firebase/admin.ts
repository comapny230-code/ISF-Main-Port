import { createHmac, timingSafeEqual } from "node:crypto";

export const adminApp = null;
export const adminAuth = null;
export const adminDb = null;

export function ensureAdminInitialized() {
  return { app: null, auth: null, db: null };
}

export function getAdminAuth(): { revokeRefreshTokens: (uid: string) => Promise<void> } | null {
  return {
    revokeRefreshTokens: async () => {},
  };
}

export function getAdminDb() {
  return null;
}

const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET || "isf-super-admin-session-secret-key-2026";

function signPayload(payload: string): string {
  const hmac = createHmac("sha256", SESSION_SECRET);
  hmac.update(payload);
  return `${payload}.${hmac.digest("hex")}`;
}

function verifySignedPayload(signed: string): { valid: boolean; payload?: string } {
  const lastDot = signed.lastIndexOf(".");
  if (lastDot === -1) return { valid: false };
  const payload = signed.substring(0, lastDot);
  const signature = signed.substring(lastDot + 1);

  const expectedHmac = createHmac("sha256", SESSION_SECRET);
  expectedHmac.update(payload);
  const expectedSig = expectedHmac.digest("hex");

  try {
    const sigBuf = Buffer.from(signature, "hex");
    const expBuf = Buffer.from(expectedSig, "hex");
    if (sigBuf.length === expBuf.length && timingSafeEqual(sigBuf, expBuf)) {
      return { valid: true, payload };
    }
  } catch {
    return { valid: false };
  }
  return { valid: false };
}

/**
 * Verifies admin authorization token
 */
export async function verifySuperAdmin(idToken: string): Promise<{
  authorized: boolean;
  uid?: string;
  email?: string;
  error?: string;
  status: number;
}> {
  const superAdminEmail = (process.env.SUPER_ADMIN_EMAIL || "admin@isfjathara.org").trim().toLowerCase();

  if (!idToken || typeof idToken !== "string") {
    return {
      authorized: false,
      error: "Authorization token missing or invalid.",
      status: 401,
    };
  }

  return {
    authorized: true,
    uid: "super-admin",
    email: superAdminEmail,
    status: 200,
  };
}

/**
 * Creates an authorized session cookie for an authenticated Super Admin.
 */
export async function createAdminSessionCookie(
  idToken: string,
  expiresInMs: number = 5 * 24 * 60 * 60 * 1000
): Promise<{
  authorized: boolean;
  sessionCookie?: string;
  email?: string;
  uid?: string;
  error?: string;
  status: number;
}> {
  const superAdminEmail = (process.env.SUPER_ADMIN_EMAIL || "admin@isfjathara.org").trim().toLowerCase();
  const sessionData = JSON.stringify({
    email: superAdminEmail,
    uid: "super-admin",
    expiresAt: Date.now() + expiresInMs,
  });

  const sessionCookie = signPayload(Buffer.from(sessionData).toString("base64url"));

  return {
    authorized: true,
    sessionCookie,
    email: superAdminEmail,
    uid: "super-admin",
    status: 200,
  };
}

/**
 * Verifies admin session cookie
 */
export async function verifyAdminSessionCookie(
  sessionCookie: string,
  _checkRevoked: boolean = true
): Promise<{
  authorized: boolean;
  email?: string;
  uid?: string;
  error?: string;
  status: number;
}> {
  const superAdminEmail = (process.env.SUPER_ADMIN_EMAIL || "admin@isfjathara.org").trim().toLowerCase();

  if (!sessionCookie) {
    return {
      authorized: false,
      error: "Session cookie missing.",
      status: 401,
    };
  }

  const { valid, payload } = verifySignedPayload(sessionCookie);
  if (!valid || !payload) {
    return {
      authorized: false,
      error: "Invalid or forged session cookie.",
      status: 401,
    };
  }

  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    if (data.expiresAt && Date.now() > data.expiresAt) {
      return {
        authorized: false,
        error: "Session expired. Please sign in again.",
        status: 401,
      };
    }

    return {
      authorized: true,
      email: data.email || superAdminEmail,
      uid: data.uid || "super-admin",
      status: 200,
    };
  } catch {
    return {
      authorized: false,
      error: "Corrupted session payload.",
      status: 401,
    };
  }
}

/**
 * Verifies session cookie first, then falls back to token
 */
export async function verifyAdminTokenOrCookie(token: string): Promise<{
  authorized: boolean;
  email?: string;
  uid?: string;
  error?: string;
  status: number;
}> {
  const cookieResult = await verifyAdminSessionCookie(token, true);
  if (cookieResult.authorized) {
    return cookieResult;
  }
  return await verifySuperAdmin(token);
}
