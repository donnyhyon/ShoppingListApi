module.exports = {
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
    transformIgnorePatterns: [
        "<rootDir>/node_modules/@testing-library/*",
        "<rootDir>/node_modules/@adobe/*"
      ],
    }