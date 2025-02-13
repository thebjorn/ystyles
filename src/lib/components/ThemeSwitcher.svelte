<script lang="ts">
  import { onMount } from 'svelte';
  
  const themes = ['subtle', 'vivid', 'pony', 'rainbow'];
  let currentTheme = 'subtle';
  let currentMode = 'light';
  
  onMount(() => {
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      currentMode = 'dark';
    }
    
    // Apply initial theme and mode
    updateTheme(currentTheme);
    updateMode(currentMode);
  });
  
  function updateTheme(theme: string) {
    document.documentElement.setAttribute('data-theme', theme);
    currentTheme = theme;
  }
  
  function updateMode(mode: string) {
    document.documentElement.setAttribute('data-mode', mode);
    currentMode = mode;
  }
</script>

<div class="theme-switcher">
  <select bind:value={currentTheme} on:change={() => updateTheme(currentTheme)}>
    {#each themes as theme}
      <option value={theme}>{theme}</option>
    {/each}
  </select>
  
  <select bind:value={currentMode} on:change={() => updateMode(currentMode)}>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>
</div>

<style lang="scss">
  .theme-switcher {
    position: fixed;
    top: 1rem;
    right: 1rem;
    display: flex;
    gap: 0.5rem;
    
    select {
      padding: 0.5rem;
      border-radius: 0.25rem;
      border: 1px solid var(--color-light);
      background-color: var(--background-color);
      color: var(--text-color);
    }
  }
</style> 