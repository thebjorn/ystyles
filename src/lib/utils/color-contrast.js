// Utility function to calculate color contrast
export function getContrastColor(hexColor) {
  // Remove '#' if present
  hexColor = hexColor.replace('#', '');

  // Parse hex color components
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  // Calculate relative luminance
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

  // Determine contrast color (black or white)
  return luminance > 0.179 ? '#000000' : '#ffffff'; // WCAG formula adjustment
}

// Function to generate CSS variables for on-colors (not used directly in SCSS)
export function generateOnColors(colorName, shades) {
    let cssVariables = '';
    for (const shade in shades) {
        if (Object.hasOwn(shades, shade)) {
            const hexColor = shades[shade];
            const contrastColor = getContrastColor(hexColor);
            cssVariables += `  --on-${colorName}-${shade}: ${contrastColor};\n`;
        }
    }
    return cssVariables;
} 