module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@react-theming/storybook-addon",
    "@storybook/addon-links",
    {
      "name": "@storybook/addon-essentials",
      "options": {
        "backgrounds": "false",
      }
    },
    "@storybook/preset-create-react-app",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}