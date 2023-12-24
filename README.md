
# OpenHouse.AI - Front End Web Development Coding Exercise

Web App presents a collection of geographic communities in alphabetical order. Each geographic community is to be displayed with the minimum following information:
- Community name 
- Image for the community
- The average price of all the homes associated with that community

# Basic implementation

- Fetch in done inside respective component and data is handled via useState
- Errors are cached and displayed to user in a simple way
- loading data may be handled with loading message
- displayed data in simple grid list
- average price is calculated in a separate util function
- types are made through interfaces

# What can be done to improve

- move errors and loading messages to separate components
- create redux state
- make lazy loading when there is more data
- use react query to fetch and handle API requests in a more effective way
- add animation
- handle price currencies and format
- add additional data for real estate if needed

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
