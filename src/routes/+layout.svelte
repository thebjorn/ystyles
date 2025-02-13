<script lang="ts">
  import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
  import '../scss/main.scss';
</script>

<div class="app">
  <header>
    <nav>
      <a href="/" class="logo">Company CSS Framework</a>
      <div class="nav-links">
        <a href="/installation">Installation</a>
        <a href="/quickstart">Quickstart</a>
        <a href="/colors">Colors</a>
        <a href="/typography">Typography</a>
        <a href="/components">Components</a>
        <a href="/theme">Theming</a>
      </div>
      <ThemeSwitcher />
    </nav>
  </header>

  <main>
    <slot />
  </main>

  <footer>
    <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
  </footer>
</div>

<style lang="scss">
  .app {
    font-family: var(--font-family-sans-serif) sans-serif;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: var(--background-color);
    color: var(--text-color);
  }

  header {
    background-color: var(--color-light);
    border-bottom: 1px solid var(--color-secondary);
    
    nav {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  main {
    flex: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    width: 100%;
  }

  footer {
    background-color: var(--color-light);
    border-top: 1px solid var(--color-secondary);
    padding: 1rem;
    text-align: center;
  }
</style> 