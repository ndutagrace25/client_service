module.exports = {
  preset: "ts-jest",
  testEnvironment: "node", // or 'jsdom' if you're testing frontend code
  setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"], // Adjust if needed
  moduleFileExtensions: ["ts", "js", "json", "node"],
  transform: {
    "^.+\\.ts$": "ts-jest", // Transforms TypeScript files
  },
  testPathIgnorePatterns: ["/node_modules/", "/dist/"], // Ignore node_modules and dist folder
};
