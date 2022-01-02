module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-controls",
    "@storybook/addon-links",
    {
      "name": "@storybook/addon-essentials",
      "options": {
        "backgrounds": "false",
      }
    },
    "@react-theming/storybook-addon",
    "@storybook/preset-create-react-app",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}