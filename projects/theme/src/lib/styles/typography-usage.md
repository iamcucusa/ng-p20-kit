# Typography System

## Available Classes

### Font Sizes
- `text-xs`: 0.75rem (12px)
- `text-sm`: 0.875rem (14px)
- `text-base`: 1rem (16px)
- `text-lg`: 1.125rem (18px)
- `text-xl`: 1.25rem (20px)
- `text-2xl`: 1.5rem (24px)
- `text-3xl`: 1.875rem (30px)
- `text-4xl`: 2.25rem (36px)
- `text-5xl`: 3rem (48px)
- `text-6xl`: 3.75rem (60px)
- `text-7xl`: 4.5rem (72px)
- `text-8xl`: 6rem (96px)
- `text-9xl`: 8rem (128px)

### Font Weights
- `font-thin`: 100
- `font-extralight`: 200
- `font-light`: 300
- `font-normal`: 400
- `font-medium`: 500
- `font-semibold`: 600
- `font-bold`: 700
- `font-extrabold`: 800
- `font-black`: 900

### Line Heights
- `leading-none`: 1
- `leading-tight`: 1.25
- `leading-snug`: 1.375
- `leading-normal`: 1.5
- `leading-relaxed`: 1.625
- `leading-loose`: 2

## Usage Examples

```html
<!-- Headings -->
<h1 class="text-4xl font-bold leading-tight">Main Heading</h1>
<h2 class="text-2xl font-semibold leading-snug">Section Heading</h2>
<h3 class="text-xl font-medium leading-normal">Subsection</h3>

<!-- Body Text -->
<p class="text-base font-normal leading-relaxed">Body text</p>
<p class="text-sm font-normal leading-normal">Small text</p>

<!-- Responsive Typography -->
<h1 class="text-2xl md:text-3xl lg:text-4xl font-bold">
  Responsive Heading
</h1>
```

## SCSS Usage

```scss
@import '../../theme/src/lib/styles/typography.scss';

.heading {
  @include text-2xl;
  @include font-bold;
  @include leading-tight;
}

.body-text {
  @include text-base;
  @include font-normal;
  @include leading-relaxed;
}
```
