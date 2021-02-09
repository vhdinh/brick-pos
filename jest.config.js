module.exports = {
    // The root of your source code, typically /src
    // `<rootDir>` is a token Jest substitutes
    roots: ['<rootDir>/src'],

    // Jest transformations -- this adds support for TypeScript
    // using ts-jest
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },

    // Runs special logic, such as cleaning up components
    // when using React Testing Library and adds special
    // extended assertions to Jest
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
        'jest-extended'
    ],
    testMatch: [
        '**/*.test.(ts|tsx)',
    ],
    testPathIgnorePatterns: [
        'node_modules/',
        './src/App/*',
        './src/utils/*',
        './src/components/withErrorBoundary.tsx'
    ],
    coveragePathIgnorePatterns: [
        './src/styles',
        './src/index.tsx',
        './src/App/*',
        './src/utils/*',
        './src/components/withErrorBoundary.tsx'
    ],
    collectCoverageFrom: [
        'src/**/**/{!(*.style),}.tsx'
    ],

    reporters: [
        "default",
        ["./node_modules/jest-html-reporter", {
            "pageTitle": "Test Report"
        }]
    ],

    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    },
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mock__/fileMock.js'
    },

    // Module file extensions for importing
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx']

};
