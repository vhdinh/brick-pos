module.exports = function (plop) {
    plop.setGenerator('component', {
        prompts: [
            {
                type: 'input',
                name: 'componentName',
                message: 'What is the name of your component?',
            },
        ],
        actions: [
            // TEST
            {
                type: 'add',
                path: './src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.test.tsx',
                templateFile: '.templates/component/Component.test.tsx.hbs',
            },
            // STYLE
            {
                type: 'add',
                path: './src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.style.tsx',
                templateFile: '.templates/component/Component.style.tsx.hbs',
            },
            // COMPONENT
            {
                type: 'add',
                path: './src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.tsx',
                templateFile: '.templates/component/Component.tsx.hbs',
            },
            // TYPE
            {
                type: 'add',
                path: './src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.types.ts',
                templateFile: '.templates/component/Component.types.ts.hbs',
            },
        ],
    });
};
