module.exports = {
    collectCoverageFrom: ['src/components/**/*.{ts,tsx}', '!src/apis/**/*.ts', '!src/utils/**/*.ts'],
    coverageReporters: ['html', 'text'],
    coverageThreshold: {
        global: {
            branches: 90,
            functions: 90,
            lines: 90,
            statements: 90
        }
    },
    snapshotSerializers: ['enzyme-to-json/serializer'],
    setupTestFrameworkScriptFile: '<rootDir>/src/setupTests.ts'
};
