# DirectAvenue UI Project

This project uses **Vite** with **React** and **TypeScript**, configured with **ESLint**, **Prettier**, **Material UI**, **Husky**, and unit testing setup.

### Content:

1. **Technologies Used**: Lists and explains the key technologies and tools used in the project.
2. **Prerequisites** - Requirements needed to work with this project
3. **Installation**: Step-by-step instructions to clone the repository, install dependencies, and get started.
4. **Available Scripts**: All commands you can run to develop, build, format, lint, test, etc.
5. **Tool Configurations**: Provides details on each major tool included in the project (Vite, React, TypeScript, ESLint, Prettier, Material UI, Husky).
6. **Project Structure**: Project folder structure.
7. **Storybook**: Frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. It's open source and free.

## Technologies Used

- **Vite**: A fast and optimized bundler for modern web development.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that provides static types.
- **Material UI**: A popular React component library that implements Google's Material Design.
- **ESLint**: A tool for identifying and fixing problems in your JavaScript/TypeScript code.
- **Prettier**: A code formatter that ensures consistent code style across your project.
- **Husky**: A tool for managing Git hooks, ensuring code quality before commits and pushes.
- **Yarn**: A fast and reliable package manager for managing dependencies.
- **Jest & React Testing Library**: Tools for unit and integration testing.

## Prerequisites

- **Node.js** (version 14 or later)
- **Yarn** (recommended for managing dependencies)

## Installation

Follow these steps to get the project up and running:

1. Clone this repository to your local machine.
   ```bash
   git clone ...
   ```
2. Navigate to the project directory.
   ```bash
   cd repository
   ```
3. Project dependencies installation using Yarn.
   ```
   yarn Install
   ```

## Scripts Available

1. Builds production project (optimized and minified).
   ```
   yarn Build
   ```
2. Starts the development server with hot-reloading.
   ```
   yarn Dev
   ```
3. Install the project dependencies using Yarn.
   ```
   yarn Install
   ```
4. Previews the production build locally.
   ```
   yarn preview
   ```
5. Runs ESLint to check for code quality and possible errors.
   ```
   yarn lint
   ```
6. Run unit and integration testing.
   ```
   yarn test
   ```
7. Trigger script before every commit and push to ensure code quality.
   ```
   yarn prepare
   ```
8. Starts Storybook in development mode
   ```
   yarn storybook
   ```
9. Builds the Storybook for production (
   ```
   yarn build-storybook
   ```

## Tool Configurations

### Vite

Vite is a fast build tool and development server. It's preconfigured for React and TypeScript. Vite configuration is located in vite.config.ts. The development server runs by default on localhost:3000.

### TypeScript

The configuration is found in tsconfig.json.
The "jsx": "react-jsx" setting allows React 17+ features, meaning you don't need to import React in every file using JSX.

### ESLint

ESLint is used to enforce code quality and best practices.The configuration is located in .eslintrc.js.

### Prettier

Prettier is a code formatter that ensures a consistent coding style across your project.Prettier configuration is located in .prettierrc.
Prettier is integrated with ESLint, so it will automatically format the code before committing or pushing.

### Material UI

Material UI is a React component library that follows Material Design principles.

### Husky

Husky is used for managing Git hooks that ensure code quality before commits and pushes.

1. **Pre-commit hook**: Runs ESLint and Prettier on staged files to ensure code quality before committing.
2. **Pre-push hook**: Runs unit tests with Jest to ensure everything is working before pushing to the repository.
   Husky and Lint-Staged are configured in .husky/pre-commit and .husky/pre-push.

### Project Structure:

- **`public/`**: Contains static assets like images, etc.
- **`src/`**: Contains the main source code of the application:
  - **`components/`**: UI components used across the app.
  - **`hooks/`**: Custom hooks for logic reuse.
  - **`pages/`**: Pages that represent different routes in the app.
  - **`App.tsx`**: The main component that bootstraps the application.
  - **`main.tsx`**: The entry point where React is mounted.
  - **`theme.ts`**: Material UI theme configuration.
- **`.eslintrc.js`**: Configuration file for ESLint.
- **`.prettierrc`**: Configuration file for Prettier.
- **`tsconfig.json`**: TypeScript configuration file.
- **`vite.config.ts`**: Vite configuration file.
- **`package.json`**: Contains project dependencies and scripts.

# Storybook

## 📘 What is Storybook?

Storybook is a tool for developing UI components in isolation. It allows you to build, test, and document your React components interactively, making it easier to create reusable and robust components.

---

## 🚀 Run Storybook

Follow these steps to run Storybook for this project:

- Run the next command to install all the dependencies needed:

```bash
npm install
```

- Run the following command to start storybook server:

```bash
npm run storybook
```

## How to Add a New Storybook Component?

Follow these steps to add a new component to Storybook:

1. **Create the Story File**  
   Inside the same folder as the component you want to add, create a new file.  
   Name the file following this pattern:  
   `<ComponentName>.stories.tsx`  
   _(For example: if your component file is `Button.tsx`, the story file should be `Button.stories.tsx`)_

2. **Set Up the Story**  
   Add the necessary Storybook configuration to the new file. Here's a basic template:

   ```tsx
   import React from 'react';
   import { ComponentName } from './ComponentName';

   export default {
     title: 'Components/ComponentName',
     component: ComponentName,
   };

   const Template = (args) => <ComponentName {...args} />;

   export const Default = Template.bind({});
   Default.args = {
     // Add default props here
   };
   ```
