import { createDefaultPreset } from "ts-jest";

const tsJestPreset = createDefaultPreset();

const config = {
  ...tsJestPreset,
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(t|j)sx?$": ["ts-jest", { tsconfig: "tsconfig.test.json" }],
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  collectCoverage: true,
  coverageDirectory: "<rootDir>/coverage",
  coverageProvider: "v8",
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/types/**",
    "!src/stores/**",
    "!src/.refunjs/**",
    "!src/**/index.{ts,tsx}",
    "!src/main.{ts,tsx}",
  ],
  coverageReporters: ["text", "lcov", "html"],
};

export default config;
