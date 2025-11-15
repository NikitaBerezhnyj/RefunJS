# RefunJS

Repository has a [English :uk:](#refunjs-uk) and [Ukrainian :ukraine:](#refunjs-ukraine) localization.

## RefunJS :uk:

🚀 A modern React framework with file-based routing, built-in tooling, and zero-config setup. Create production-ready React applications in seconds.

### Overview

RefunJS is a CLI tool and framework that streamlines React application development by providing:

- **Zero-config setup** — Start coding immediately without spending hours on configuration
- **File-based routing** — Automatic route generation based on your folder structure
- **Modern tooling** — Pre-configured TypeScript, Vite, ESLint, and Prettier
- **Smart defaults** — Carefully selected libraries and patterns that work together seamlessly
- **Optional features** — Add testing (Jest) and internationalization (i18n) when you need them

RefunJS eliminates the repetitive setup work while maintaining full flexibility and control over your codebase.

### Features

- ⚡ **Instant Setup** — Create a full-featured React project with one command
- 🎯 **File-based Routing** — Automatic routing from `pages/` folder structure, including dynamic routes
- 🎨 **CSS Modules** — Scoped styling with CSS variables and dark mode support out of the box
- 📦 **Pre-installed Stack** — React Query, Zustand, React Router pre-configured and ready to use
- 🔧 **Full TypeScript** — Type safety across the entire project with optimized tsconfig
- 🚀 **Vite Powered** — Lightning-fast HMR and optimized production builds
- 🌍 **i18n Ready** — Optional multi-language support with i18next integration
- 🧪 **Testing Setup** — Optional Jest configuration with React Testing Library
- 📝 **Code Quality** — ESLint and Prettier pre-configured with sensible rules
- 🛠️ **CLI Tools** — Generate pages and components with proper structure and naming conventions

### Technologies Used

#### Core Framework

- **React** — Latest React with modern features
- **TypeScript** — Type-safe development
- **Vite** — Next-generation frontend tooling

#### State & Routing

- **React Router** — Declarative routing for React
- **React Query** — Powerful data synchronization and caching
- **Zustand** — Lightweight state management

#### Development Tools

- **ESLint** — Pluggable linting utility
- **Prettier** — Opinionated code formatter
- **Jest** (optional) — Delightful JavaScript testing
- **i18next** (optional) — Internationalization framework

#### Styling

- **CSS Modules** — Component-scoped CSS
- **Lucide React** — Beautiful & consistent icon toolkit

## Getting Started

To get started with RefunJS development, follow these steps:

#### 1. Clone the Repository

```bash
git clone https://github.com/NikitaBerezhnyj/RefunJS.git
cd refunjs
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Build the CLI

```bash
npm run build
```

#### 4. Link Locally for Testing

```bash
npm link
```

Now you can use the `refunjs` command globally on your system for testing:

```bash
refunjs my-test-app
cd my-test-app
npm run dev
```

#### 5. Project Structure

```
refunjs/
├── src/
│   ├── commands/           # CLI command implementations
│   │   ├── createProject.js
│   │   ├── addPage.js
│   │   ├── addComponent.js
│   │   ├── installCommand.js
│   │   └── helpCommand.js
│   ├── utils/             # Helper functions
│   │   ├── copyDir.js
│   │   ├── replaceInFiles.js
│   │   ├── installDependencies.js
│   │   ├── mergeFiles.js
│   │   └── namingUtils.js
│   └── index.js           # CLI entry point
├── core/                  # Base project template
│   ├── src/
│   │   ├── .refunjs/       # Framework system files
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── hooks/        # Custom hooks
│   │   ├── utils/        # Utilities
│   │   └── styles/       # Global styles
│   ├── public/
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
├── features/              # Optional feature modules
│   ├── test/             # Jest testing setup
│   └── i18n/             # Internationalization
├── package.json
└── README.md
```

### Usage

Once the project is set up for development, you can:

#### 1. Test CLI Commands

Create a test project to verify changes:

```bash
refunjs create test-project
cd test-project
npm run dev
```

#### 2. Modify the Core Template

Edit files in the `core/` directory to change the default project structure:

- Update `core/src/` to modify the base application
- Add new components in `core/src/components/`
- Modify styling in `core/src/styles/`
- Update dependencies in `core/package.json`

#### 3. Add or Modify Features

Work on optional features in the `features/` directory:

- **Testing setup**: `features/test/`
- **Internationalization**: `features/i18n/`

Each feature module contains:

- Component modifications/additions
- Configuration files
- Dependencies in `package.json`

#### 4. Update CLI Commands

Modify command implementations in `src/commands/`:

- `createProject.js` — Project initialization logic
- `addPage.js` — Page generation with file-based routing
- `addComponent.js` — Component scaffolding
- `installCommand.js` — Dependency management
- `helpCommand.js` — CLI help documentation

#### 5. Test Changes

Before submitting changes:

```bash
# Build the CLI
npm run build

# Test in a clean directory
cd /tmp
refunjs test-app
cd test-app
npm run dev
npm run build
npm run test  # If test feature was selected
```

#### 6. Code Quality

Maintain code quality:

```bash
# Format code
npm run format

# Lint code (if configured)
npm run lint
```

### Development Workflow

1. **Make Changes** — Edit files in `src/`, `core/`, or `features/`
2. **Build** — Run `npm run build` to compile changes
3. **Test** — Create a test project and verify functionality
4. **Commit** — Use clear, descriptive commit messages
5. **Submit PR** — Open a pull request with your changes

### Building and Publishing

#### Prerequisites

Before publishing to npm, ensure you have:

- An npm account (create one at [npmjs.com](https://www.npmjs.com/signup))
- Logged into npm CLI: `npm login`
- Proper version number updated in `package.json`

#### Build for Production

Build the project before publishing:

```bash
npm run build
```

This compiles the source code from `src/` to `dist/` using Babel.

#### Version Management

Update the version number following [Semantic Versioning](https://semver.org/):

```bash
# Patch release (1.0.5 → 1.0.6) - bug fixes
npm version patch

# Minor release (1.0.5 → 1.1.0) - new features, backward compatible
npm version minor

# Major release (1.0.5 → 2.0.0) - breaking changes
npm version major
```

#### Publishing to npm

Publish the package to npm registry:

```bash
npm publish --access public
```

The `--access public` flag is required for scoped packages or first-time publishing.

#### Automated Publishing Workflow

The `package.json` includes automated scripts that run during publishing:

- `prepublishOnly` — Backs up and replaces README with docs version
- `postpublish` — Restores the original README

#### Manual Publishing Steps

1. **Update version**:

   ```bash
   npm version patch  # or minor/major
   ```

2. **Build the project**:

   ```bash
   npm run build
   ```

3. **Test the build locally**:

   ```bash
   npm link
   refunjs test-app
   ```

4. **Publish to npm**:

   ```bash
   npm publish --access public
   ```

5. **Verify publication**:
   - Check on [npmjs.com/package/refunjs](https://www.npmjs.com/package/refunjs)
   - Test installation: `npm install -g refunjs`

### License & Community Guidelines

- [License](LICENSE) — project license
- [Code of Conduct](CODE_OF_CONDUCT.md) — expected behavior for contributors
- [Contributing Guide](CONTRIBUTING.md) — how to help the project
- [Security Policy](SECURITY.md) — reporting security issues

---

## RefunJS :ukraine:

🚀 Сучасний React фреймворк з file-based роутингом, вбудованим інструментарієм та налаштуванням без конфігурації. Створюйте готові до продакшену React-додатки за лічені секунди.

### Огляд

RefunJS — це CLI інструмент та фреймворк, який спрощує розробку React-додатків, надаючи:

- **Налаштування без конфігурації** — Почніть кодувати одразу, не витрачаючи години на налаштування
- **File-based роутинг** — Автоматична генерація маршрутів на основі структури папок
- **Сучасний інструментарій** — Преконфігуровані TypeScript, Vite, ESLint та Prettier
- **Розумні налаштування за замовчуванням** — Ретельно підібрані бібліотеки та патерни, які безперешкодно працюють разом
- **Опціональні функції** — Додавайте тестування (Jest) та інтернаціоналізацію (i18n), коли вам це потрібно

RefunJS усуває повторювану роботу з налаштування, зберігаючи повну гнучкість та контроль над вашою кодовою базою.

### Особливості

- ⚡ **Миттєве налаштування** — Створіть повнофункціональний React-проєкт однією командою
- 🎯 **File-based роутинг** — Автоматичний роутинг із структури папки `pages/`, включаючи динамічні маршрути
- 🎨 **CSS Modules** — Ізольована стилізація зі змінними CSS та підтримкою темної теми з коробки
- 📦 **Преінстальований стек** — React Query, Zustand, React Router преконфігуровані та готові до використання
- 🔧 **Повна підтримка TypeScript** — Типобезпека у всьому проєкті з оптимізованим tsconfig
- 🚀 **На основі Vite** — Блискавично швидкий HMR та оптимізовані production збірки
- 🌍 **Готовність до i18n** — Опціональна підтримка багатомовності з інтеграцією i18next
- 🧪 **Налаштування тестування** — Опціональна конфігурація Jest з React Testing Library
- 📝 **Якість коду** — ESLint та Prettier преконфігуровані з розумними правилами
- 🛠️ **CLI інструменти** — Генеруйте сторінки та компоненти з правильною структурою та конвенціями іменування

### Використані технології

#### Основний фреймворк

- **React** — Найновіший React з сучасними можливостями
- **TypeScript** — Типобезпечна розробка
- **Vite** — Інструментарій фронтенду нового покоління

#### Стан та роутинг

- **React Router** — Декларативний роутинг для React
- **React Query** — Потужна синхронізація та кешування даних
- **Zustand** — Легке управління станом

#### Інструменти розробки

- **ESLint** — Утиліта для лінтингу з підтримкою плагінів
- **Prettier** — Опініонований форматувач коду
- **Jest** (опціонально) — Чудовий фреймворк для тестування JavaScript
- **i18next** (опціонально) — Фреймворк інтернаціоналізації

#### Стилізація

- **CSS Modules** — CSS з областю видимості компонента
- **Lucide React** — Красивий та консистентний набір іконок

### Початок роботи

Щоб почати розробку RefunJS, виконайте наступні кроки:

#### 1. Клонуйте репозиторій

```bash
git clone https://github.com/NikitaBerezhnyj/RefunJS.git
cd refunjs
```

#### 2. Встановіть залежності

```bash
npm install
```

#### 3. Зберіть CLI

```bash
npm run build
```

#### 4. Зв'яжіть локально для тестування

```bash
npm link
```

Тепер ви можете використовувати команду `refunjs` глобально у вашій системі для тестування:

```bash
refunjs my-test-app
cd my-test-app
npm run dev
```

#### 5. Структура проєкту

```
refunjs/
├── src/
│   ├── commands/               # Реалізації CLI команд
│   │   ├── createProject.js
│   │   ├── addPage.js
│   │   ├── addComponent.js
│   │   ├── installCommand.js
│   │   └── helpCommand.js
│   ├── utils/                  # Допоміжні функції
│   │   ├── copyDir.js
│   │   ├── replaceInFiles.js
│   │   ├── installDependencies.js
│   │   ├── mergeFiles.js
│   │   └── namingUtils.js
│   └── index.js                # Точка входу CLI
├── core/                       # Базовий шаблон проєкту
│   ├── src/
│   │   ├── .refunjs/             # Системні файли фреймворку
│   │   ├── components/         # Компоненти для повторного використання
│   │   ├── pages/              # Компоненти сторінок
│   │   ├── hooks/              # Кастомні хуки
│   │   ├── utils/              # Утиліти
│   │   └── styles/             # Глобальні стилі
│   ├── public/
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
├── features/                   # Модулі опціональних функцій
│   ├── test/                   # Налаштування тестування Jest
│   └── i18n/                   # Інтернаціоналізація
├── package.json
└── README.md
```

### Використання

Після налаштування проєкту для розробки, ви можете:

#### 1. Тестувати CLI команди

Створіть тестовий проєкт для перевірки змін:

```bash
refunjs create test-project
cd test-project
npm run dev
```

#### 2. Модифікувати основний шаблон

Редагуйте файли в директорії `core/` для зміни структури проєкту за замовчуванням:

- Оновіть `core/src/` для модифікації базового додатку
- Додайте нові компоненти в `core/src/components/`
- Змініть стилізацію в `core/src/styles/`
- Оновіть залежності в `core/package.json`

#### 3. Додавати або модифікувати функції

Працюйте над опціональними функціями в директорії `features/`:

- **Налаштування тестування**: `features/test/`
- **Інтернаціоналізація**: `features/i18n/`

Кожен модуль функції містить:

- Модифікації/доповнення компонентів
- Конфігураційні файли
- Залежності в `package.json`

#### 4. Оновлювати CLI команди

Модифікуйте реалізації команд в `src/commands/`:

- `createProject.js` — Логіка ініціалізації проєкту
- `addPage.js` — Генерація сторінок з file-based роутингом
- `addComponent.js` — Створення каркасу компонентів
- `installCommand.js` — Управління залежностями
- `helpCommand.js` — Довідкова документація CLI

#### 5. Тестувати зміни

Перед відправкою змін:

```bash
# Зберіть CLI
npm run build

# Протестуйте в чистій директорії
cd /tmp
refunjs test-app
cd test-app
npm run dev
npm run build
npm run test  # Якщо була обрана функція тестування
```

#### 6. Якість коду

Підтримуйте якість коду:

```bash
# Форматуйте код
npm run format

# Перевірте код лінтером
npm run lint
```

### Робочий процес розробки

1. **Внесіть зміни** — Редагуйте файли в `src/`, `core/` або `features/`
2. **Зберіть** — Запустіть `npm run build` для компіляції змін
3. **Протестуйте** — Створіть тестовий проєкт та перевірте функціональність
4. **Зробіть коміт** — Використовуйте чіткі, описові повідомлення коміту
5. **Відправте PR** — Відкрийте pull request з вашими змінами

### Збірка та публікація

#### Передумови

Перед публікацією в npm, переконайтеся що у вас є:

- Обліковий запис npm (створіть на [npmjs.com](https://www.npmjs.com/signup))
- Виконаний вхід в npm CLI: `npm login`
- Оновлений номер версії в `package.json`

#### Збірка для продакшену

Зберіть проєкт перед публікацією:

```bash
npm run build
```

Це компілює вихідний код з `src/` в `dist/` використовуючи Babel.

#### Управління версіями

Оновіть номер версії дотримуючись [Семантичного версіонування](https://semver.org/):

```bash
# Patch реліз (1.0.5 → 1.0.6) - виправлення помилок
npm version patch

# Minor реліз (1.0.5 → 1.1.0) - нові функції, зворотна сумісність
npm version minor

# Major реліз (1.0.5 → 2.0.0) - критичні зміни
npm version major
```

#### Публікація в npm

Опублікуйте пакет в реєстр npm:

```bash
npm publish --access public
```

Прапорець `--access public` обов'язковий для scoped пакетів або першої публікації.

#### Автоматизований процес публікації

`package.json` включає автоматизовані скрипти, які виконуються під час публікації:

- `prepublishOnly` — Створює резервну копію та замінює README версією з docs
- `postpublish` — Відновлює оригінальний README

#### Ручні кроки публікації

1. **Оновіть версію**:

   ```bash
   npm version patch  # або minor/major
   ```

2. **Зберіть проєкт**:

   ```bash
   npm run build
   ```

3. **Протестуйте збірку локально**:

   ```bash
   npm link
   refunjs test-app
   ```

4. **Опублікуйте в npm**:

   ```bash
   npm publish --access public
   ```

5. **Перевірте публікацію**:
   - Перевірте на [npmjs.com/package/refunjs](https://www.npmjs.com/package/refunjs)
   - Протестуйте встановлення: `npm install -g refunjs`

### Ліцензія та правила спільноти

- [Ліцензія](LICENSE) — ліцензія проєкту
- [Кодекс поведінки](CODE_OF_CONDUCT.md) — очікувана поведінка для контриб'юторів
- [Посібник з внеску](CONTRIBUTING.md) — як допомогти проєкту
- [Політика безпеки](SECURITY.md) — повідомлення про проблеми безпеки
