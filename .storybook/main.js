module.exports = {
    stories: [
        "../packages/**/*.@(story|stories).mdx",
        "../packages/**/*.@(story|stories).@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    framework: "@storybook/react",
};
