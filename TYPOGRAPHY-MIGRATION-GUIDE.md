# Typography Migration Guide: PrimeFlex → Tailwind CSS

## 🎯 Quick Reference

### **Font Size Classes**

| PrimeFlex | Tailwind CSS | Size | Usage |
|-----------|--------------|------|-------|
| `p-text-xs` | `text-xs` | 12px | Small labels, captions |
| `p-text-sm` | `text-sm` | 14px | Body text, descriptions |
| `p-text-base` | `text-base` | 16px | Default body text |
| `p-text-lg` | `text-lg` | 18px | Large body text |
| `p-text-xl` | `text-xl` | 20px | Small headings |
| `p-text-2xl` | `text-2xl` | 24px | Medium headings |
| `p-text-3xl` | `text-3xl` | 30px | Large headings |
| `p-text-4xl` | `text-4xl` | 36px | Extra large headings |
| `p-text-5xl` | `text-5xl` | 48px | Display headings |

### **Font Weight Classes**

| PrimeFlex | Tailwind CSS | Weight | Usage |
|-----------|--------------|--------|-------|
| `p-text-bold` | `font-bold` | 700 | Bold headings |
| `p-text-normal` | `font-normal` | 400 | Normal body text |
| `p-text-light` | `font-light` | 300 | Light text |
| `p-text-italic` | `italic` | - | Italic text |

### **Text Alignment Classes**

| PrimeFlex | Tailwind CSS | Usage |
|-----------|--------------|-------|
| `p-text-left` | `text-left` | Left align text |
| `p-text-center` | `text-center` | Center align text |
| `p-text-right` | `text-right` | Right align text |
| `p-text-justify` | `text-justify` | Justify text |

### **Text Wrapping Classes**

| PrimeFlex | Tailwind CSS | Usage |
|-----------|--------------|-------|
| `p-text-nowrap` | `whitespace-nowrap` | Prevent text wrapping |
| `p-text-wrap` | `whitespace-normal` | Allow text wrapping |
| `p-text-truncate` | `truncate` | Truncate with ellipsis |

### **Text Transformation Classes**

| PrimeFlex | Tailwind CSS | Usage |
|-----------|--------------|-------|
| `p-text-lowercase` | `lowercase` | Convert to lowercase |
| `p-text-uppercase` | `uppercase` | Convert to uppercase |
| `p-text-capitalize` | `capitalize` | Capitalize first letter |

### **Line Height Classes**

| PrimeFlex | Tailwind CSS | Value | Usage |
|-----------|--------------|-------|-------|
| `p-leading-none` | `leading-none` | 1 | Tight line spacing |
| `p-leading-tight` | `leading-tight` | 1.25 | Tight line spacing |
| `p-leading-snug` | `leading-snug` | 1.375 | Snug line spacing |
| `p-leading-normal` | `leading-normal` | 1.5 | Normal line spacing |
| `p-leading-relaxed` | `leading-relaxed` | 1.625 | Relaxed line spacing |
| `p-leading-loose` | `leading-loose` | 2 | Loose line spacing |

## 🔄 Migration Examples

### **Before: PrimeFlex Classes**

```html
<!-- PrimeFlex typography -->
<h1 class="p-text-4xl p-text-bold p-text-center">
  Main Heading
</h1>

<p class="p-text-lg p-text-normal p-leading-relaxed">
  Body text with relaxed line height
</p>

<div class="p-text-sm p-text-light p-text-uppercase">
  Small uppercase text
</div>
```

### **After: Tailwind CSS Classes**

```html
<!-- Tailwind CSS typography -->
<h1 class="text-4xl font-bold text-center">
  Main Heading
</h1>

<p class="text-lg font-normal leading-relaxed">
  Body text with relaxed line height
</p>

<div class="text-sm font-light uppercase">
  Small uppercase text
</div>
```

## 🎨 Advanced Typography Patterns

### **Responsive Typography**

```html
<!-- Responsive headings -->
<h1 class="text-2xl md:text-3xl lg:text-4xl font-bold">
  Responsive Heading
</h1>

<h2 class="text-xl md:text-2xl lg:text-3xl font-semibold">
  Responsive Subheading
</h2>

<p class="text-sm md:text-base lg:text-lg leading-relaxed">
  Responsive paragraph text
</p>
```

### **Typography with Colors**

```html
<!-- Colored typography -->
<h1 class="text-3xl font-bold text-blue-600">
  Blue Heading
</h1>

<p class="text-base text-gray-600">
  Gray body text
</p>

<span class="text-sm font-medium text-green-600">
  Success message
</span>
```

### **Typography with Spacing**

```html
<!-- Typography with margins -->
<h1 class="text-4xl font-bold mb-4">
  Heading with bottom margin
</h1>

<p class="text-lg leading-relaxed mb-6">
  Paragraph with bottom margin
</p>

<div class="text-sm text-gray-500 mt-2">
  Small text with top margin
</div>
```

## 🔧 SCSS Migration

### **Before: PrimeFlex SCSS**

```scss
// PrimeFlex SCSS
.heading {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.25;
  text-align: center;
}

.body-text {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
}
```

### **After: Tailwind CSS with Design Tokens**

```scss
// Tailwind CSS with design tokens
.heading {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  text-align: center;
}

.body-text {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-normal);
}
```

### **After: Tailwind CSS with @apply**

```scss
// Tailwind CSS with @apply
.heading {
  @apply text-2xl font-bold leading-tight text-center;
}

.body-text {
  @apply text-base font-normal leading-normal;
}
```

## 🚀 Component Migration Examples

### **Header Component**

```html
<!-- Before: PrimeFlex -->
<header class="p-text-center">
  <h1 class="p-text-3xl p-text-bold">Dashboard</h1>
  <p class="p-text-lg p-text-light">Welcome to the system</p>
</header>

<!-- After: Tailwind CSS -->
<header class="text-center">
  <h1 class="text-3xl font-bold">Dashboard</h1>
  <p class="text-lg font-light">Welcome to the system</p>
</header>
```

### **Card Component**

```html
<!-- Before: PrimeFlex -->
<div class="card">
  <h2 class="p-text-2xl p-text-bold p-text-center">Card Title</h2>
  <p class="p-text-base p-text-normal p-leading-relaxed">
    Card content with proper line height
  </p>
  <span class="p-text-sm p-text-light p-text-uppercase">
    Card footer
  </span>
</div>

<!-- After: Tailwind CSS -->
<div class="card">
  <h2 class="text-2xl font-bold text-center">Card Title</h2>
  <p class="text-base font-normal leading-relaxed">
    Card content with proper line height
  </p>
  <span class="text-sm font-light uppercase">
    Card footer
  </span>
</div>
```

### **Navigation Component**

```html
<!-- Before: PrimeFlex -->
<nav class="p-text-center">
  <ul class="p-text-lg p-text-bold">
    <li class="p-text-uppercase">Home</li>
    <li class="p-text-uppercase">About</li>
    <li class="p-text-uppercase">Contact</li>
  </ul>
</nav>

<!-- After: Tailwind CSS -->
<nav class="text-center">
  <ul class="text-lg font-bold">
    <li class="uppercase">Home</li>
    <li class="uppercase">About</li>
    <li class="uppercase">Contact</li>
  </ul>
</nav>
```

## 📱 Responsive Typography Patterns

### **Mobile-First Typography**

```html
<!-- Mobile-first responsive typography -->
<h1 class="text-2xl md:text-3xl lg:text-4xl font-bold">
  Responsive Heading
</h1>

<p class="text-sm md:text-base lg:text-lg leading-relaxed">
  Responsive paragraph
</p>

<div class="text-xs md:text-sm lg:text-base font-medium">
  Responsive small text
</div>
```

### **Breakpoint-Specific Typography**

```html
<!-- Breakpoint-specific typography -->
<h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
  Breakpoint-specific heading
</h1>

<p class="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
  Breakpoint-specific paragraph
</p>
```

## 🎯 Best Practices

### **1. Use Semantic HTML**

```html
<!-- Good: Semantic HTML with typography -->
<h1 class="text-4xl font-bold">Main Heading</h1>
<h2 class="text-3xl font-semibold">Section Heading</h2>
<p class="text-base leading-relaxed">Body text</p>
<small class="text-sm text-gray-600">Small text</small>
```

### **2. Consistent Typography Scale**

```html
<!-- Consistent typography hierarchy -->
<h1 class="text-4xl font-bold">H1 - Main Title</h1>
<h2 class="text-3xl font-semibold">H2 - Section Title</h2>
<h3 class="text-2xl font-medium">H3 - Subsection Title</h3>
<h4 class="text-xl font-medium">H4 - Minor Heading</h4>
<p class="text-base font-normal">Body text</p>
<small class="text-sm font-normal">Small text</small>
```

### **3. Accessibility Considerations**

```html
<!-- Accessible typography -->
<h1 class="text-4xl font-bold text-gray-900">
  High contrast heading
</h1>

<p class="text-base font-normal leading-relaxed text-gray-700">
  Readable body text with good line height
</p>

<small class="text-sm font-normal text-gray-600">
  Accessible small text
</small>
```

## 🔧 Migration Checklist

### **Pre-Migration**
- [ ] Audit current PrimeFlex typography usage
- [ ] Document typography patterns
- [ ] Plan responsive typography strategy
- [ ] Set up Tailwind typography config

### **During Migration**
- [ ] Replace PrimeFlex classes with Tailwind equivalents
- [ ] Update SCSS to use design tokens
- [ ] Implement responsive typography
- [ ] Test typography across breakpoints

### **Post-Migration**
- [ ] Validate accessibility
- [ ] Test typography consistency
- [ ] Optimize bundle size
- [ ] Update documentation

## 🚀 Advanced Features

### **Typography Plugin Integration**

```javascript
// tailwind.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

```html
<!-- Prose typography -->
<article class="prose prose-lg max-w-none">
  <h1>Article Title</h1>
  <p>Article content with beautiful typography...</p>
</article>
```

### **Custom Typography Utilities**

```scss
// Custom typography utilities
@layer utilities {
  .text-heading-1 {
    @apply text-4xl font-bold leading-tight;
  }
  
  .text-heading-2 {
    @apply text-3xl font-semibold leading-snug;
  }
  
  .text-body {
    @apply text-base font-normal leading-relaxed;
  }
}
```

This migration guide provides everything needed to transition from PrimeFlex typography to our enhanced Tailwind CSS + PrimeNG 20 solution! 🎉
