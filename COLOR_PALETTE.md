# Everforest-Inspired Color Palette Documentation

## Overview

This warm, nature-inspired color palette draws from the Everforest theme, creating a modern, elegant portfolio website. The colors evoke the tranquility and vitality of a lush forest while maintaining excellent readability and accessibility.

## Color Categories

### Primary Colors - Forest Foundation

These colors form the base of your design, representing the depth and richness of a forest:

- **Forest Deep** (`#232A2E`) - The deepest forest background
- **Pine Dark** (`#2D353B`) - Secondary dark backgrounds
- **Forest Mid** (`#343F44`) - Medium tone for cards and sections
- **Sage** (`#3D484D`) - Lighter neutral for interactive elements

### Accent Colors - Nature Highlights

Vibrant, natural colors that add life and personality:

- **Snow** (`#D3C6AA`) - Primary text color, warm cream
- **Mist** (`#A7C080`) - Secondary text, soft sage green
- **Spring** (`#83C092`) - Green accent for links and highlights
- **Bloom** (`#E67E80`) - Coral accent for special elements

### Neutral Colors - Natural Grays

Functional grays with warm undertones:

- **Stone** (`#4F585E`) - Dark gray for borders and dividers
- **Bark** (`#859289`) - Medium gray for secondary text
- **Moss** (`#9DA9A0`) - Light gray for subtle text
- **Fog** (`#C5CDD0`) - Very light gray for backgrounds

### Functional Colors

Status and feedback colors with nature theming:

- **Success** (`#A7C080`) - Forest green for success states
- **Warning** (`#DBBC7F`) - Golden amber for warnings
- **Error** (`#E67E80`) - Coral red for errors

## Gradients

### Primary Gradients

- **Forest Gradient**: `linear-gradient(135deg, #232A2E 0%, #2D353B 50%, #343F44 100%)`
- **Spring Gradient**: `linear-gradient(135deg, #83C092 0%, #A7C080 100%)`
- **Mist Gradient**: `linear-gradient(135deg, #D3C6AA 0%, #A7C080 100%)`

## Usage Guidelines

### Typography

- **Headers**: Use `text-spring` or `text-snow` for maximum impact
- **Body Text**: Use `text-snow` for primary content, `text-mist` for secondary
- **Captions**: Use `text-moss` or `text-fog`

### Backgrounds

- **Page Background**: `bg-forest-deep`
- **Card Backgrounds**: `bg-pine-dark` or `bg-forest-mid`
- **Interactive Elements**: `bg-sage` with hover states

### Interactive Elements

- **Primary Buttons**: `bg-forest-mid` with `hover:bg-sage`
- **Secondary Buttons**: `border-spring text-spring` with `hover:bg-spring hover:text-forest-deep`
- **Links**: `text-spring` with `hover:text-bloom`

### Borders and Dividers

- **Subtle Borders**: `border-forest-mid/30`
- **Emphasis Borders**: `border-spring`
- **Dividers**: `border-stone`

## Accessibility

- All color combinations meet WCAG AA standards for contrast
- Text colors on dark backgrounds provide excellent readability
- Interactive elements have clear hover and focus states

## Implementation

### CSS Custom Properties

All colors are available as CSS custom properties in `src/index.css`:

```css
:root {
  --color-forest-deep: #232a2e;
  --color-snow: #d3c6aa;
  /* ... etc */
}
```

### Tailwind Classes

Extended Tailwind configuration in `tailwind.config.js` provides utility classes:

```html
<div class="bg-forest-deep text-snow">
  <h1 class="text-spring">Everforest Portfolio</h1>
</div>
```

## Best Practices

1. **Hierarchy**: Use darker colors for backgrounds, lighter for foregrounds
2. **Contrast**: Always test text readability against backgrounds
3. **Consistency**: Stick to the defined palette for cohesive design
4. **Accents**: Use spring and bloom sparingly for maximum impact
5. **Gradients**: Apply gradients to create depth and visual interest

## Animation Considerations

- Use subtle glow effects with spring/bloom colors
- Implement gentle sway animations for natural movement
- Add breathing effects for organic elements
- Consider smooth transitions for forest-like serenity
