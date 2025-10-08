# ng-p20-kit

> Angular 20 + PrimeNG 20 design system with token-based theming, Tailwind CSS integration, and automated asset generation.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build theme library
npm run build-showcase

# Generate theme assets
npm run theme:generate
```

## 📦 Project Structure

```
projects/
├── showcase/          # Angular demo application
└── theme/            # Design system library
    ├── colors/        # Color tokens
    ├── presets/       # Theme presets
    ├── scripts/       # Generation scripts
    └── styles/        # Auto-generated styles
```

## 🎨 Features

- **Token-based theming** with centralized color management
- **Tailwind CSS integration** with custom spacing scale
- **Automated asset generation** from design tokens
- **PrimeNG 20 components** with custom styling
- **SCSS variables** for consistent spacing
- **TypeScript** throughout

## ⚙️ Generation System

All theme assets are auto-generated from centralized tokens:

- **Colors**: Generated from `saga-blue-colors.ts`
- **Spacing**: Tailwind-compatible scale with CSS variables
- **Tailwind config**: Auto-generated with custom spacing
- **SCSS variables**: Generated from Tailwind config

See [GENERATION-FLOW.md](./GENERATION-FLOW.md) for details.

## 🛠️ Available Scripts

```bash
npm start                    # Start showcase app
npm run build-showcase      # Build showcase
npm run theme:generate      # Generate theme assets
npm run generate-spacing    # Generate spacing SCSS
```

## 📚 Documentation

- [Generation Flow](./GENERATION-FLOW.md) - Automated asset generation
- [AI Best Practices](./docs/ai/best-practices.md) - LLM development guidelines

## 🏗️ Architecture

- **Monorepo structure** with Angular workspace
- **Theme library** as separate package
- **Centralized tokens** for design consistency
- **Automated generation** prevents manual drift
- **Tailwind + PrimeNG** hybrid approach

## 🎯 Use Cases

- Enterprise Angular applications
- Design system development
- PrimeNG customization
- Token-based theming
- Component library development
