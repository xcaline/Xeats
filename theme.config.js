/** @type {const} */
const themeColors = {
  primary: { light: '#FF6B35', dark: '#FF6B35' }, // Orange
  primaryDark: { light: '#E55100', dark: '#E55100' }, // Dark orange for pressed states
  background: { light: '#FFFFFF', dark: '#0F0F0F' }, // White / Deep black
  surface: { light: '#F5F5F5', dark: '#1A1A1A' }, // Light gray / Dark surface
  foreground: { light: '#1A1A1A', dark: '#FFFFFF' }, // Black / White text
  muted: { light: '#999999', dark: '#B0B0B0' }, // Gray secondary text
  border: { light: '#E5E7EB', dark: '#334155' }, // Light / Dark borders
  success: { light: '#22C55E', dark: '#4ADE80' },
  warning: { light: '#F59E0B', dark: '#FBBF24' },
  error: { light: '#EF4444', dark: '#F87171' },
};

module.exports = { themeColors };
