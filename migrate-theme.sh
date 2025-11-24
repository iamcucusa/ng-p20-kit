#!/bin/bash

# Theme Library Migration Script
# Migrates projects/theme from ng-p20-kit to pegasus repository
# Usage: ./migrate-theme.sh [--dry-run]

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
SOURCE_REPO="/Users/gracielafernandez/CLOUD/workspaces/BI/Pegasus Migration/ng-p20-kit"
TARGET_REPO="/Users/gracielafernandez/CLOUD/workspaces/BI/pegasus"
SOURCE_THEME="$SOURCE_REPO/projects/theme"
TARGET_THEME="$TARGET_REPO/projects/theme"

# Check if dry-run mode
DRY_RUN=false
if [[ "$1" == "--dry-run" ]]; then
    DRY_RUN=true
    echo -e "${YELLOW}Running in DRY-RUN mode (no changes will be made)${NC}\n"
fi

# Function to print step header
print_step() {
    echo -e "\n${GREEN}=== $1 ===${NC}\n"
}

# Function to execute command (with dry-run check)
execute() {
    if [ "$DRY_RUN" = true ]; then
        echo -e "${YELLOW}[DRY-RUN]${NC} $*"
    else
        echo -e "${GREEN}[EXEC]${NC} $*"
        eval "$@"
    fi
}

# Function to check if directory exists
check_dir() {
    if [ ! -d "$1" ]; then
        echo -e "${RED}Error: Directory $1 does not exist${NC}"
        return 1
    fi
    return 0
}

# Function to check if command exists
check_command() {
    if ! command -v "$1" &> /dev/null; then
        echo -e "${RED}Error: $1 is not installed${NC}"
        return 1
    fi
    return 0
}

# Pre-flight checks
print_step "Pre-flight Checks"

check_dir "$SOURCE_REPO" || exit 1
check_dir "$TARGET_REPO" || exit 1
check_dir "$SOURCE_THEME" || exit 1
check_command "ng" || exit 1
check_command "npm" || exit 1

echo -e "${GREEN}✓ All pre-flight checks passed${NC}"

# Step 1: Create library project structure
print_step "Step 1: Creating Library Project Structure"

if [ ! -d "$TARGET_THEME" ]; then
    echo "Creating theme library project..."
    cd "$TARGET_REPO"
    execute "ng generate library theme --prefix=pg --project-root=projects --skip-package-json=false"
else
    echo -e "${YELLOW}Theme directory already exists, skipping library generation${NC}"
fi

# Step 2: Copy source files
print_step "Step 2: Copying Source Files"

echo "Copying src directory..."
execute "cp -r '$SOURCE_THEME/src' '$TARGET_THEME/'"

echo "Copying configuration files..."
execute "cp '$SOURCE_THEME/ng-package.json' '$TARGET_THEME/'"
execute "cp '$SOURCE_THEME/README.md' '$TARGET_THEME/'"
execute "cp '$SOURCE_THEME/tailwind.config.js' '$TARGET_THEME/'"
execute "cp '$SOURCE_THEME/tsconfig.lib.json' '$TARGET_THEME/'"
execute "cp '$SOURCE_THEME/tsconfig.lib.prod.json' '$TARGET_THEME/'"
execute "cp '$SOURCE_THEME/tsconfig.spec.json' '$TARGET_THEME/'"

# Step 3: Update package.json
print_step "Step 3: Updating package.json"

if [ "$DRY_RUN" = false ]; then
    cat > "$TARGET_THEME/package.json" << 'EOF'
{
  "name": "@pegasus/theme",
  "version": "0.0.1",
  "peerDependencies": {
    "@angular/common": "^20.3.0",
    "@angular/core": "^20.3.0"
  },
  "sideEffects": false,
  "devDependencies": {
    "tsx": "^4.20.6"
  }
}
EOF
    echo "✓ Updated package.json"
else
    echo "[DRY-RUN] Would update package.json"
fi

# Step 4: Update tailwind.config.js
print_step "Step 4: Updating tailwind.config.js"

if [ "$DRY_RUN" = false ]; then
    # Update content paths in tailwind.config.js
    sed -i.bak "s|'./projects/\*\*/\*.{html,ts,mdx}'|'./projects/pegasus-ui/\*\*/\*.{html,ts}', './projects/\*\*/\*.{html,ts,mdx}'|g" "$TARGET_THEME/tailwind.config.js"
    rm -f "$TARGET_THEME/tailwind.config.js.bak"
    echo "✓ Updated tailwind.config.js content paths"
else
    echo "[DRY-RUN] Would update tailwind.config.js content paths"
fi

# Step 5: Install dependencies
print_step "Step 5: Installing Dependencies"

cd "$TARGET_REPO"

echo "Installing production dependencies..."
execute "npm install --save-exact @primeuix/styles@^1.2.5 @primeuix/themes@^1.2.5 primeng@^20.2.0 tailwindcss-primeui@^0.6.1"

echo "Installing dev dependencies..."
execute "npm install --save-dev tailwindcss@^4.1.14 @tailwindcss/postcss@^4.1.14 ng-packagr@^20.3.0 tsx@^4.20.6 postcss@^8.5.6 autoprefixer@^10.4.21"

# Step 6: Update angular.json
print_step "Step 6: Updating angular.json"

if [ "$DRY_RUN" = false ]; then
    # Check if theme project already exists in angular.json
    if grep -q '"theme":' "$TARGET_REPO/angular.json"; then
        echo -e "${YELLOW}Theme project already exists in angular.json${NC}"
    else
        echo -e "${YELLOW}⚠ Manual update required: Add theme project to angular.json${NC}"
        echo "See THEME-MIGRATION-PLAN.md Phase 3, Step 3.1 for configuration"
    fi
else
    echo "[DRY-RUN] Would check/update angular.json"
fi

# Step 7: Ensuring Sass include paths (theme + app utilities)
print_step "Step 7: Configuring Sass include paths"

if [ "$DRY_RUN" = false ]; then
    node <<'NODE'
const fs = require('fs');
const path = require('path');
const angularPath = path.join(process.cwd(), 'angular.json');
const angular = JSON.parse(fs.readFileSync(angularPath, 'utf8'));
const PROJECT = 'pegasus-ui';
const includePaths = [
  'projects/theme/src/lib',
  'projects/pegasus-ui/src/styles',
  'projects/pegasus-ui/src'
];

function ensurePaths(target) {
  if (!target) return false;
  target.stylePreprocessorOptions ??= { includePaths: [] };
  target.stylePreprocessorOptions.includePaths ??= [];
  const arr = target.stylePreprocessorOptions.includePaths;
  let changed = false;
  for (const ip of includePaths) {
    if (!arr.includes(ip)) {
      arr.push(ip);
      changed = true;
    }
  }
  return changed;
}

let changed = false;
const project = angular.projects?.[PROJECT]?.architect;
if (project?.build?.options) changed = ensurePaths(project.build.options) || changed;
if (project?.test?.options) changed = ensurePaths(project.test.options) || changed;

if (changed) {
  fs.writeFileSync(angularPath, JSON.stringify(angular, null, 2) + '\n');
  console.log('✓ Updated stylePreprocessorOptions include paths');
} else {
  console.log('stylePreprocessorOptions were already configured');
}
NODE
else
    echo "[DRY-RUN] Would configure stylePreprocessorOptions include paths in angular.json"
fi

# Step 8: (Manual) Prepare local style alias wrappers
print_step "Step 8: Preparing local style alias wrappers"
echo -e "${YELLOW}Reminder:${NC} Copy any reusable SCSS utilities (e.g., card, step-container, assumptions-layout) into the target repo and create thin wrappers such as 'projects/pegasus-ui/src/app-styles/card.scss' that @forward the real files. Update your SCSS files to import them via an alias (for example, @use 'app-styles/card.scss';). See THEME-MIGRATION-PLAN.md Phase 2.3 for exact commands."

# Step 9: Update tsconfig.json paths
print_step "Step 9: Updating TypeScript Paths"

if [ "$DRY_RUN" = false ]; then
    # Check if paths already exist
    if grep -q "@pegasus/theme" "$TARGET_REPO/tsconfig.json"; then
        echo -e "${YELLOW}Theme paths already exist in tsconfig.json${NC}"
    else
        echo -e "${YELLOW}⚠ Manual update required: Add theme paths to tsconfig.json${NC}"
        echo "Add to compilerOptions.paths:"
        echo '  "@pegasus/theme": ["./projects/theme/src/public-api.ts"]'
        echo '  "@pegasus/theme/*": ["./projects/theme/src/lib/*"]'
    fi
else
    echo "[DRY-RUN] Would check/update tsconfig.json paths"
fi

# Step 10: Create postcss.config.js
print_step "Step 10: Creating PostCSS Configuration"

if [ "$DRY_RUN" = false ]; then
    if [ -f "$TARGET_REPO/postcss.config.js" ]; then
        echo -e "${YELLOW}postcss.config.js already exists${NC}"
    else
        cat > "$TARGET_REPO/postcss.config.js" << 'EOF'
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {}
  }
};
EOF
        echo "✓ Created postcss.config.js"
    fi
else
    echo "[DRY-RUN] Would create postcss.config.js"
fi

# Step 11: Add npm scripts
print_step "Step 11: Adding NPM Scripts"

if [ "$DRY_RUN" = false ]; then
    # Check if scripts already exist
    if grep -q "build:theme" "$TARGET_REPO/package.json"; then
        echo -e "${YELLOW}Theme scripts already exist in package.json${NC}"
    else
        echo -e "${YELLOW}⚠ Manual update required: Add theme scripts to package.json${NC}"
        echo "Add these scripts:"
        echo '  "build:theme": "ng build theme"'
        echo '  "watch:theme": "ng build theme --watch --configuration development"'
        echo '  "theme:generate": "tsx projects/theme/src/lib/scripts/generate-theme-assets.ts"'
        echo '  "generate-spacing": "node projects/theme/src/lib/scripts/generate-spacing-scss.js"'
        echo '  "generate-typography": "node projects/theme/src/lib/scripts/generate-typography.js"'
    fi
else
    echo "[DRY-RUN] Would check/add npm scripts"
fi

# Step 12: Build verification
print_step "Step 12: Build Verification"

if [ "$DRY_RUN" = false ]; then
    cd "$TARGET_REPO"
    echo "Building theme library..."
    execute "npm run build:theme" || echo -e "${YELLOW}⚠ Build failed - check errors above${NC}"
    
    echo "Generating theme assets..."
    execute "npm run theme:generate" || echo -e "${YELLOW}⚠ Theme generation failed - check errors above${NC}"
else
    echo "[DRY-RUN] Would run build:theme and theme:generate"
fi

# Summary
print_step "Migration Summary"

if [ "$DRY_RUN" = true ]; then
    echo -e "${YELLOW}This was a dry-run. No changes were made.${NC}"
    echo -e "${YELLOW}Review the output above and run without --dry-run to execute.${NC}"
else
    echo -e "${GREEN}✓ File migration completed${NC}"
    echo -e "${YELLOW}⚠ Manual steps required:${NC}"
    echo "  1. Update angular.json with theme project configuration (if not already present)"
    echo "  2. Verify stylePreprocessorOptions include the theme path plus your app-level alias paths"
    echo "  3. Copy/rename local utility styles and create the alias wrappers (e.g., app-styles/*)"
    echo "  4. Update tsconfig.json with theme path aliases"
    echo "  5. Add npm scripts to package.json"
    echo "  6. Update styles.scss to use the new theme + utility aliases"
    echo "  7. Configure PrimeNG in app.config.ts or app.module.ts"
    echo ""
    echo -e "${GREEN}Next steps:${NC}"
    echo "  1. Review THEME-MIGRATION-PLAN.md for detailed instructions"
    echo "  2. Complete manual configuration steps"
    echo "  3. Test build and runtime"
    echo "  4. Verify visual parity with PrimeNG 17 theme"
fi

echo -e "\n${GREEN}Migration script completed!${NC}"

