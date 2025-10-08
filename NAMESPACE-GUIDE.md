# TypeScript Namespace Guide

## 🎯 Overview

This guide explains how to use TypeScript path mapping namespaces in the ng-p20-kit project for cleaner, more maintainable imports.

## 📁 Current Namespaces

### **@core/* - Core Components**
Maps to: `./projects/showcase/src/app/core/*`

```typescript
// Available imports
import { DashboardComponent } from '@core/dashboard.component';
import { HeaderComponent } from '@core/header.component';
import { LayoutComponent } from '@core/layout.component';
import { SpacingTestComponent } from '@core/spacing-test.component';

// Or use the barrel export
import { 
  DashboardComponent, 
  HeaderComponent, 
  LayoutComponent, 
  SpacingTestComponent 
} from '@core';
```

## 🚀 Usage Examples

### **Before: Relative Imports**
```typescript
// Old way - relative imports
import { HeaderComponent } from './header.component';
import { SpacingTestComponent } from './spacing-test.component';
import { DashboardComponent } from './dashboard.component';
```

### **After: Namespace Imports**
```typescript
// New way - namespace imports
import { HeaderComponent } from '@core/header.component';
import { SpacingTestComponent } from '@core/spacing-test.component';
import { DashboardComponent } from '@core/dashboard.component';
```

### **Barrel Export Usage**
```typescript
// Clean barrel export
import { 
  HeaderComponent, 
  SpacingTestComponent, 
  DashboardComponent 
} from '@core';
```

## 🔧 Configuration

### **tsconfig.json**
```json
{
  "compilerOptions": {
    "paths": {
      "@core/*": ["./projects/showcase/src/app/core/*"]
    }
  }
}
```

### **Barrel Export (index.ts)**
```typescript
// projects/showcase/src/app/core/index.ts
export { DashboardComponent } from './dashboard.component';
export { HeaderComponent } from './header.component';
export { LayoutComponent } from './layout.component';
export { SpacingTestComponent } from './spacing-test.component';
```

## 📊 Suggested Additional Namespaces

### **@shared/* - Shared Components**
```json
"@shared/*": ["./projects/showcase/src/app/shared/*"]
```

**Use cases:**
- Reusable UI components
- Common form components
- Shared utilities
- Generic layouts

### **@features/* - Feature Modules**
```json
"@features/*": ["./projects/showcase/src/app/features/*"]
```

**Use cases:**
- Feature-specific components
- Business logic components
- Domain-specific modules

### **@services/* - Services**
```json
"@services/*": ["./projects/showcase/src/app/services/*"]
```

**Use cases:**
- API services
- Business logic services
- Utility services
- State management

### **@models/* - Models & Interfaces**
```json
"@models/*": ["./projects/showcase/src/app/models/*"]
```

**Use cases:**
- TypeScript interfaces
- Data models
- Type definitions
- Enums

### **@utils/* - Utilities**
```json
"@utils/*": ["./projects/showcase/src/app/utils/*"]
```

**Use cases:**
- Helper functions
- Utility classes
- Common algorithms
- Validation functions

### **@constants/* - Constants**
```json
"@constants/*": ["./projects/showcase/src/app/constants/*"]
```

**Use cases:**
- Application constants
- Configuration values
- Environment variables
- Static data

## 🎨 Complete Namespace Configuration

### **Full tsconfig.json paths**
```json
{
  "compilerOptions": {
    "paths": {
      "@ng-p20-kit/theme": ["./projects/theme/src/public-api.ts"],
      "@ng-p20-kit/theme/*": ["./projects/theme/src/*"],
      "@ng-p20-kit/showcase/*": ["./projects/showcase/src/*"],
      "@core/*": ["./projects/showcase/src/app/core/*"],
      "@shared/*": ["./projects/showcase/src/app/shared/*"],
      "@features/*": ["./projects/showcase/src/app/features/*"],
      "@services/*": ["./projects/showcase/src/app/services/*"],
      "@models/*": ["./projects/showcase/src/app/models/*"],
      "@utils/*": ["./projects/showcase/src/app/utils/*"],
      "@constants/*": ["./projects/showcase/src/app/constants/*"]
    }
  }
}
```

## 📱 Real-World Usage Examples

### **Component with Multiple Imports**
```typescript
// Before
import { HeaderComponent } from './header.component';
import { DashboardComponent } from './dashboard.component';
import { UserService } from '../services/user.service';
import { UserModel } from '../models/user.model';
import { ApiConstants } from '../constants/api.constants';

// After
import { HeaderComponent, DashboardComponent } from '@core';
import { UserService } from '@services/user.service';
import { UserModel } from '@models/user.model';
import { ApiConstants } from '@constants/api.constants';
```

### **Feature Module Structure**
```typescript
// features/user-management/user-list.component.ts
import { Component } from '@angular/core';
import { UserService } from '@services/user.service';
import { UserModel } from '@models/user.model';
import { ButtonComponent } from '@shared/button.component';
import { UserConstants } from '@constants/user.constants';
```

### **Service with Dependencies**
```typescript
// services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConstants } from '@constants/api.constants';
import { UserModel } from '@models/user.model';
import { LoggerService } from '@services/logger.service';
```

## 🎯 Benefits

### **1. Cleaner Imports**
- No more `../../../` relative paths
- Consistent import structure
- Easier to refactor and move files

### **2. Better Organization**
- Clear separation of concerns
- Logical grouping of related files
- Easier to understand project structure

### **3. Improved Maintainability**
- Less brittle imports
- Easier to rename and move files
- Better IDE support and autocomplete

### **4. Team Collaboration**
- Consistent import patterns
- Easier code reviews
- Reduced merge conflicts

## 🚀 Migration Strategy

### **Phase 1: Core Components (✅ Complete)**
- [x] Add `@core/*` namespace
- [x] Create barrel export
- [x] Update existing imports
- [x] Test build system

### **Phase 2: Additional Namespaces**
- [ ] Add `@shared/*` for shared components
- [ ] Add `@services/*` for services
- [ ] Add `@models/*` for interfaces
- [ ] Add `@utils/*` for utilities
- [ ] Add `@constants/*` for constants

### **Phase 3: Feature Modules**
- [ ] Add `@features/*` for feature modules
- [ ] Organize components by feature
- [ ] Create feature-specific barrel exports

## 🔧 IDE Configuration

### **VS Code Settings**
```json
{
  "typescript.preferences.includePackageJsonAutoImports": "on",
  "typescript.suggest.autoImports": true,
  "typescript.updateImportsOnFileMove.enabled": "always"
}
```

### **WebStorm/IntelliJ**
- Enable TypeScript path mapping
- Configure module resolution
- Enable auto-import suggestions

## 📊 Performance Considerations

### **Bundle Size Impact**
- **Minimal**: Namespaces are resolved at compile time
- **Tree Shaking**: Unused imports are eliminated
- **Build Time**: Slightly faster due to better module resolution

### **Development Experience**
- **Faster Imports**: IDE autocomplete works better
- **Refactoring**: Safer file moves and renames
- **Debugging**: Clearer import paths in stack traces

## 🎯 Best Practices

### **1. Consistent Naming**
```typescript
// Good: Consistent namespace usage
import { UserService } from '@services/user.service';
import { UserModel } from '@models/user.model';

// Avoid: Mixing namespace and relative imports
import { UserService } from '@services/user.service';
import { UserModel } from '../models/user.model';
```

### **2. Barrel Exports**
```typescript
// Create index.ts files for clean imports
// @core/index.ts
export { HeaderComponent } from './header.component';
export { DashboardComponent } from './dashboard.component';
```

### **3. Namespace Organization**
```
src/app/
├── core/           # @core/*
├── shared/         # @shared/*
├── features/       # @features/*
├── services/       # @services/*
├── models/         # @models/*
├── utils/          # @utils/*
└── constants/      # @constants/*
```

## 🚀 Next Steps

1. **Add more namespaces** as the project grows
2. **Create barrel exports** for each namespace
3. **Update existing imports** to use namespaces
4. **Document namespace conventions** for the team
5. **Set up IDE configuration** for optimal development experience

The namespace system provides a solid foundation for scalable Angular development! 🎉
