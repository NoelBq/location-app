# 🚀 Location Test

## ✨ Demos

## Live:
https://noelia-location-app.netlify.app/

### Destop:

<img width="1440" alt="Screenshot 2024-09-23 at 9 16 23 AM" src="https://github.com/user-attachments/assets/b6cf889f-e364-487d-94a0-eab78e7ccd2b">

### Mobile:

<img width="342" alt="Screenshot 2024-09-23 at 9 17 39 AM" src="https://github.com/user-attachments/assets/5b349eab-90d1-42ec-a19f-f346a8fc90f3">

## 🏁 Getting Started

### 📦 Install Dependencies

```zsh
yarn install
```

🖥️ Start the development server

```zsh
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## 📚 Primary Libraries

- **React**: [https://reactjs.org/](https://reactjs.org/)
- **Vite**: [https://vitejs.dev/](https://vitejs.dev/)
- **TypeScript**: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
- **Material UI**: [https://mui.com/](https://mui.com/)
- **React Router DOM**: [https://reactrouter.com/](https://reactrouter.com/)

### 🧱 Components

The components under `app/components` should be UI only and reusable. Each component should have its own folder with a
`index.ts` + a very simple `.test.ts` + the component file.

This helps ensure that the components at least renders, and that we can see how it behaves outside the app so that new
devs can easily see all the components available.

### 🏠 Layouts

Layouts are a special type of component meant to wrap the whole page. Different from `components/` that are UI only.

### 🎨 Theme

The `src/theme` folder configures the Material UI theme. These configurations come mostly from the [Minimal UI Template](https://minimals.cc/)

## 🛠️ Development

### 🎨 Prettier

We use prettier to format the files + `@trivago/prettier-plugin-sort-imports` to automatically sort the imports.

### 🔍 Eslint

We use [AirBnb's](https://www.npmjs.com/package/eslint-config-airbnb) ESLint Typescript rules + prettier rules for linting
the project.

You can lint the whole project with `yarn lint`.

## 🎨 Design

## 🧪 Testing

We use [Jest](https://jestjs.io/) for unit testing.

To run tests in watch mode, use:

```
yarn test --watch
```

ℹ️ This command will start Jest in watch mode, which automatically reruns tests related to changed files
