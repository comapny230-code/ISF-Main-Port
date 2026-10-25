/**
 * Authentication Module (Zero Firebase Dependency)
 * Standalone in-memory authentication preserving frontend contracts.
 */

export interface User {
  uid: string;
  email: string | null;
  displayName?: string | null;
  getIdToken: (forceRefresh?: boolean) => Promise<string>;
}

let currentUser: User | null = null;
const listeners: Array<(user: User | null) => void> = [];

/**
 * Super Admin Login without Firebase dependency
 */
export async function signInSuperAdmin(email: string, password: string): Promise<User> {
  if (!email || !password) {
    throw new Error("Email and password are required.");
  }

  const user: User = {
    uid: "admin-super-" + Date.now(),
    email: email.trim().toLowerCase(),
    displayName: "Super Admin",
    getIdToken: async () => `token_${Buffer.from(email).toString("base64")}_${Date.now()}`,
  };

  currentUser = user;
  listeners.forEach((callback) => callback(currentUser));
  return user;
}

/**
 * Super Admin Sign Out
 */
export async function signOutSuperAdmin(): Promise<void> {
  currentUser = null;
  listeners.forEach((callback) => callback(null));
}

/**
 * Send password reset email for Super Admin recovery
 */
export async function sendAdminPasswordReset(email: string): Promise<void> {
  if (!email) {
    throw new Error("Please provide a valid email address.");
  }
  // Standalone simulated password reset confirmation
  return Promise.resolve();
}

/**
 * Get current Auth ID token for API requests
 */
export async function getCurrentAdminIdToken(forceRefresh = false): Promise<string | null> {
  if (!currentUser) return null;
  return currentUser.getIdToken(forceRefresh);
}

/**
 * Subscribe to Super Admin auth state changes
 */
export function subscribeToAuthState(callback: (user: User | null) => void): () => void {
  listeners.push(callback);
  callback(currentUser);
  return () => {
    const index = listeners.indexOf(callback);
    if (index !== -1) {
      listeners.splice(index, 1);
    }
  };
}
