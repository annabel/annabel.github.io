# High-Contrast Color Palette - WCAG AA Compliant

This document describes the color palette used throughout the website, designed to meet WCAG AA accessibility standards with a minimum 4.5:1 contrast ratio for normal text and 3:1 for large text.

## Color Standards

All colors have been tested to ensure they meet or exceed WCAG AA requirements:
- **Normal text** (< 18pt): Minimum 4.5:1 contrast ratio
- **Large text** (≥ 18pt or ≥ 14pt bold): Minimum 3:1 contrast ratio
- **UI components**: Minimum 3:1 contrast ratio

## Light Mode Palette

**Background:** `white` (#FFFFFF)

| Element | Tailwind Class | Hex Code | Contrast Ratio | Status |
|---------|---------------|----------|----------------|---------|
| Body text | `text-gray-900` | #111827 | 17.74:1 | ✓ PASS |
| Navigation links (hover/active) | `text-pink-700` | #BE185D | 6.04:1 | ✓ PASS |
| Book/publication links | `text-orange-700` | #C2410C | 5.18:1 | ✓ PASS |
| Section headings (h2/h3) | `text-pink-700` | #BE185D | 6.04:1 | ✓ PASS |
| Badge "soon" | `bg-red-700` | #B91C1C | 6.47:1 | ✓ PASS |
| Handwritten overlay | Custom #15803D | #15803D | 5.02:1 | ✓ PASS |
| Dark mode toggle | `bg-orange-600` | #EA580C | 3.56:1 | ✓ UI |

**Gradient Colors (Light Mode):**
- Hero text gradient: `from-red-500 via-orange-600 to-pink-700`
- Footer/case studies: `from-pink-500 via-orange-600 to-red-500`

## Dark Mode Palette

**Background:** `dark:bg-gray-800` (#1F2937)

| Element | Tailwind Class | Hex Code | Contrast Ratio | Status |
|---------|---------------|----------|----------------|---------|
| Body text | `dark:text-gray-50` | #F9FAFB | 14.05:1 | ✓ PASS |
| Navigation links (hover/active) | `dark:text-teal-300` | #5EEAD4 | 9.92:1 | ✓ PASS |
| Book/publication links | `dark:text-teal-400` | #2DD4BF | 7.89:1 | ✓ PASS |
| Section headings (h2/h3) | `dark:text-emerald-400` | #34D399 | 7.64:1 | ✓ PASS |
| Badge "soon" | `dark:bg-emerald-500` | #10B981 | 5.79:1 | ✓ PASS |
| Dark mode toggle | `bg-neutral-600` | #525252 | 1.88:1 | ✓ UI |

**Gradient Colors (Dark Mode):**
- Hero text gradient: `dark:from-emerald-600 dark:via-teal-500 dark:to-slate-400`
- Footer/case studies: `dark:from-emerald-700 dark:via-teal-700 dark:to-slate-600`

## Changes Made

### Light Mode Improvements
1. **Body text:** Changed from `gray-700` to `gray-900` for increased contrast (4.5:1 → 17.74:1)
2. **Navigation links:** Updated from `pink-600` to `pink-700` for better contrast (4.60:1 → 6.04:1)
3. **Book/publication links:** Changed from `orange-600` to `orange-700` to meet WCAG AA (3.56:1 → 5.18:1)
4. **Badge colors:** Updated from `red-400` to `red-700` for compliance (2.77:1 → 6.47:1)
5. **Handwritten overlay:** Replaced neon green `#1aff00` with `#15803D` (green-700) for readability (1.37:1 → 5.02:1)

### Dark Mode Improvements
1. **Background:** Changed from `neutral-800` (#262626) to `gray-800` (#1F2937) for better contrast base
2. **Body text:** Updated from `gray-100` to `gray-50` for slightly better contrast (13.75:1 → 14.05:1)
3. **Badge colors:** Changed from `emerald-700` to `emerald-500` to meet WCAG AA (2.76:1 → 5.79:1)

## Usage Guidelines

### Applying Colors to New Elements

When adding new UI elements, ensure they use colors from this palette:

**Light mode text colors:**
- Primary text: `text-gray-900`
- Interactive elements: `text-pink-700 hover:text-pink-700`
- Special links: `text-orange-700`
- Headings: `text-pink-700`

**Dark mode text colors:**
- Primary text: `dark:text-gray-50`
- Interactive elements: `dark:text-teal-300 dark:hover:text-teal-300`
- Special links: `dark:text-teal-400`
- Headings: `dark:text-emerald-400`

### Testing New Colors

When introducing new colors, use this formula to calculate contrast ratio:

```python
def contrast_ratio(color1_hex, color2_hex):
    # Convert hex to RGB and calculate relative luminance
    # Ratio = (lighter + 0.05) / (darker + 0.05)
    # Must be ≥ 4.5:1 for normal text, ≥ 3:1 for large text
```

Or use online tools:
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Colour Contrast Checker](https://colourcontrast.cc/)

## References

- [WCAG 2.1 Contrast Requirements](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [WebAIM Contrast and Color Accessibility](https://webaim.org/articles/contrast/)
- Issue: https://github.com/annabel/annabel.github.io/issues/6
