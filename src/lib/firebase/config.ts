/**
 * Configuration Validator (Zero Firebase Dependency)
 * ISF Startup Jathara 2026
 */

export interface FirebaseClientConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

export interface FirebaseAdminConfig {
  projectId: string;
  clientEmail: string;
  privateKey: string;
  superAdminEmail: string;
}

export function getFirebaseClientConfig(): {
  config: FirebaseClientConfig | null;
  missingKeys: string[];
  isConfigured: boolean;
} {
  return {
    config: null,
    missingKeys: [],
    isConfigured: false,
  };
}

export function getFirebaseAdminConfig(): {
  config: FirebaseAdminConfig | null;
  missingKeys: string[];
  isConfigured: boolean;
} {
  const superAdminEmail = (process.env.SUPER_ADMIN_EMAIL || "admin@isfjathara.org").trim();
  return {
    config: {
      projectId: "local",
      clientEmail: "admin@isfjathara.org",
      privateKey: "",
      superAdminEmail,
    },
    missingKeys: [],
    isConfigured: true,
  };
}
