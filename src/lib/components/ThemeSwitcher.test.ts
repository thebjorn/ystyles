import { render, fireEvent } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import ThemeSwitcher from './ThemeSwitcher.svelte';

describe('ThemeSwitcher', () => {
  it('renders theme and mode selectors', () => {
    const { getByRole } = render(ThemeSwitcher);
    
    const themeSelect = getByRole('combobox', { name: /theme/i });
    const modeSelect = getByRole('combobox', { name: /mode/i });
    
    expect(themeSelect).toBeInTheDocument();
    expect(modeSelect).toBeInTheDocument();
  });

  it('changes theme when selected', async () => {
    const { getByRole } = render(ThemeSwitcher);
    const themeSelect = getByRole('combobox', { name: /theme/i });
    
    await fireEvent.change(themeSelect, { target: { value: 'rainbow' } });
    
    expect(document.documentElement.getAttribute('data-theme')).toBe('rainbow');
  });

  it('changes mode when selected', async () => {
    const { getByRole } = render(ThemeSwitcher);
    const modeSelect = getByRole('combobox', { name: /mode/i });
    
    await fireEvent.change(modeSelect, { target: { value: 'dark' } });
    
    expect(document.documentElement.getAttribute('data-mode')).toBe('dark');
  });
}); 