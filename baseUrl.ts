const getDevPort = () => {
  // Check if PORT is explicitly set (e.g., via -p flag or PORT env var)
  const port = process.env.PORT || "3000";
  return `http://localhost:${port}`;
};

export const baseURL =
  process.env.NODE_ENV == "development"
    ? getDevPort()
    : "https://" +
      (process.env.VERCEL_ENV === "production"
        ? process.env.VERCEL_PROJECT_PRODUCTION_URL
        : process.env.VERCEL_BRANCH_URL || process.env.VERCEL_URL);
