function openTab(tabName) {
  // Hide all tabs
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });

  // Deactivate all buttons
  document.querySelectorAll('.tab-button').forEach(button => {
    button.classList.remove('active');
  });

  // Activate selected tab
  document.getElementById(tabName).classList.add('active');
  event.currentTarget.classList.add('active');
}
fetch('projects.md')
  .then(response => response.text())
  .then(markdown => {
    // Convert Markdown to HTML (using marked.js)
    document.getElementById('projects-details').innerHTML = marked.parse(markdown);
  });
