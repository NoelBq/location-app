# 🚀 Location Test

## ✨ Demos

### Destop:

### Mobile:

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

### 🐳 Docker Setup

To set up the development environment using Docker, follow these steps:

Prerequisites
Ensure you have Docker and Docker Compose installed on your machine. You can download and install them from the Docker website.

Build and Start the Development Environment
Use Docker Compose to build and start the development environment:

```
docker-compose -f docker-compose.dev.yml up --build
```

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
