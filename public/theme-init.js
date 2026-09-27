try {
  if (localStorage.getItem('navdeep-theme') === 'dark') {
    document.documentElement.dataset.theme = 'dark';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#0b192b');
  }
} catch {
  // The light theme remains available when storage is blocked.
}
