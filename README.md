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
