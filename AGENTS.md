# AGENTS.md - Development Guidelines

## Build Commands

```bash
# Development server (default)
npm run dev

# Development build
npm run build:dev

# Production build
npm run build

# Preview production build locally
npm run preview

# Lint codebase
npm run lint
```

## Code Style Guidelines

### TypeScript
- Use explicit types for function parameters and return values
- Enable strict mode (currently disabled - consider enabling)
- Avoid `any` type; use `unknown` or proper types instead

### React
- Use functional components with hooks
- Use `tsx` extension for all React components
- Destructure props properly
- Use proper key props in lists

### Tailwind CSS
- Use custom color palette defined in tailwind.config.ts
- Apply `hover:`, `focus:`, and responsive variants
- Use `transition-all duration-300` for smooth animations
- Follow the cyber theme: cyber-purple (#5A2D82), cyber-neon (#00FF41)

### Imports
- Use `@/` alias for src imports: `import Component from "@/components/Component"`
- Group imports: React → Third Party → Internal → UI Components
- Use named imports for UI components

### Naming Conventions
- **Components**: PascalCase (e.g., `HeroSection.tsx`)
- **Variables/functions**: camelCase (e.g., `isOpen`, `handleSubmit`)
- **Constants**: SCREAMING_SNAKE_CASE for config values
- **Files**: kebab-case for non-component files

### Error Handling
- Use try-catch for async operations
- Display user-friendly error messages
- Log errors with context for debugging

### Accessibility
- Add `aria-label` to icon-only buttons
- Use semantic HTML elements
- Ensure keyboard navigation works
- Maintain color contrast ratios

### Performance
- Use `React.memo()` for components that rarely update
- Lazy load non-critical sections
- Optimize images (use WebP, proper sizing)
- Avoid inline function definitions in render

## Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui components
│   ├── sections/     # Page sections
│   ├── Layout.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── pages/
│   ├── Index.tsx
│   └── NotFound.tsx
├── hooks/
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/
│   └── utils.ts      # cn() utility
├── App.tsx
└── main.tsx
```

## Key Dependencies

- **React 18** with TypeScript
- **Vite** for bundling
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Radix UI** for accessible primitives
- **Lucide React** for icons
- **React Query** for data fetching
- **React Hook Form** with Zod validation
