# RefunJS

🚀 Quick start for React applications with TypeScript, file-based routing, and modern development tools.

## Features

- ⚡ **Quick Start** — ready-to-use React + TypeScript with minimal configuration
- 🎯 **File-based Routing** — automatic routing based on the `pages/` folder structure
- 🎨 **CSS Modules** — isolated styles with CSS variables and dark theme support
- 📦 **Pre-installed Libraries** — React Query, Zustand, React Router included
- 🔧 **TypeScript** — full TypeScript support with pre-configuration
- 🚀 **Vite** — blazingly fast dev server and optimized build
- 🌍 **i18n (optional)** — multi-language support
- 🧪 **Tests (optional)** — Jest with testing configuration

## Quick Start

Create a new project with a single command:

```bash
npx refunjs my-app
cd my-app
npm run dev
```

## Usage

### Creating a Project

```bash
npx refunjs <project-name>
```

During project creation, you can select additional features:

- **Tests (Jest)** — configuration for unit testing
- **i18n** — localization support

### CLI Commands

#### `create`

Creates a new project with base structure.

```bash
npx refunjs create my-app
# or simply
npx refunjs my-app
```

#### `add-page`

Adds a new page with proper file structure.

```bash
# Simple page
npx refunjs add-page about

# Nested page
npx refunjs add-page blog/article

# Dynamic route (use escape characters to properly generate pages)
npx refunjs add-page blog/\[id\]
```

Creates:

- `src/pages/<name>/index.tsx` — React page component
- `src/pages/<name>/<name>.module.css` — CSS module

**Note:** page names should be in kebab-case format (e.g., `my-page`, `user-profile`)

#### `add-component`

Adds a new component.

```bash
npx refunjs add-component Button
```

Creates:

- `src/components/<ComponentName>/<ComponentName>.tsx`
- `src/components/<ComponentName>/<ComponentName>.module.css`

**Note:** component names should be in PascalCase format (e.g., `UserCard`, `NavBar`)

#### `help`

Shows help for available commands.

```bash
npx refunjs help
```

## Project Structure

```
my-app/
├── src/
│   ├── .refunjs/         # Framework system files
│   ├── components/     # Reusable components
│   │   ├── Button/
│   │   ├── Card/
│   │   └── Header/
│   ├── pages/          # File-based routing
│   │   └── index.tsx   # Home page (/)
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Helper functions
│   ├── styles/         # Global styles
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Entry point
├── public/             # Static files
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## File-based Routing

The `pages/` folder structure is automatically converted to routes:

```
src/pages/
├── index.tsx           → /
├── about/
│   └── index.tsx       → /about
├── blog/
│   ├── index.tsx       → /blog
│   └── [id]/
│       └── index.tsx   → /blog/:id
└── users/
    └── [userId]/
        └── profile/
            └── index.tsx → /users/:userId/profile
```

## Available Scripts

After creating a project, the following commands are available:

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check code with ESLint
npm run format   # Format code with Prettier
npm run test     # Run tests (if selected during creation)
```

## Technologies

- **React** — library for building UI
- **TypeScript** — JavaScript with types
- **Vite** — build tool
- **React Router** — routing
- **React Query** — server state management
- **Zustand** — client state management
- **CSS Modules** — modular styles
- **ESLint** — code linting
- **Prettier** — code formatting

### Optional Features

- **Jest** — testing framework
- **i18next** — internationalization

## Usage Examples

### Creating a Simple Page

```bash
npx refunjs add-page contact
```

Generated file `src/pages/contact/index.tsx`:

```tsx
import React from "react";
import styles from "./contact.module.css";

const Contact = () => {
  return <h1>Contact</h1>;
};

export default Contact;
```

### Creating a Component

```bash
npx refunjs add-component UserCard
```

Generated file `src/components/UserCard/UserCard.tsx`:

```tsx
import React from "react";
import styles from "./UserCard.module.css";

const UserCard = () => {
  return <div>UserCard</div>;
};

export default UserCard;
```

## Localization (i18n)

If you selected the i18n feature during project creation:

```typescript
import { useTranslation } from "react-i18next";

const MyComponent = () => {
  const { t } = useTranslation();

  return <h1>{t("home.title")}</h1>;
};
```

Translation files are located in `src/locales/`:

- `src/locales/en.json`
- `src/locales/uk.json`

## Testing

If you selected the Tests feature during project creation:

```bash
npm run test
```

Example test:

```typescript
import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

test("renders home page", () => {
  render(<HomePage />);
  expect(screen.getByText(/Build React applications/i)).toBeInTheDocument();
});
```
