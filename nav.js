document.addEventListener("DOMContentLoaded", () => {
  // Navigation structure - Updated Primary Links
  const primaryLinks = [
    { name: "Home", url: "index.html" },
    { name: "About me", url: "#about" },
    { name: "My work", url: "#work" },
    { name: "Education", url: "#education" }
  ];

  const secondaryLinks = [
    { name: "FAQ", url: "#faq" },
    { name: "Support", url: "#support" },
    { name: "Terms", url: "#terms" }
  ];

  // Helper function to build <ul> HTML string
  function buildNavList(links, className = "nav-list") {
    return `<ul class="${className}">` + 
      links.map(link => `<li><a href="${link.url}">${link.name}</a></li>`).join("") + 
      `</ul>`;
  }

  // 1. Render Top Header Navigation
  const topPrimaryNav = document.getElementById("top-primary-nav");
  const topSecondaryNav = document.getElementById("top-secondary-nav");

  if (topPrimaryNav) topPrimaryNav.innerHTML = buildNavList(primaryLinks, "nav-list");
  if (topSecondaryNav) topSecondaryNav.innerHTML = buildNavList(secondaryLinks, "nav-list");

  // 2. Render Left Sidebar Navigation
  const leftSidebarNav = document.getElementById("left-sidebar-nav");

  if (leftSidebarNav) {
    leftSidebarNav.innerHTML = `
      <div class="nav-group">
        <h3>Primary Navigation</h3>
        ${buildNavList(primaryLinks, "sidebar-list")}
      </div>
      <div class="nav-group">
        <h3>Secondary Navigation</h3>
        ${buildNavList(secondaryLinks, "sidebar-list")}
      </div>
    `;
  }

  // 3. Add interactive hover indicators to key page blocks
  const hoverableBlocks = document.querySelectorAll('.hero-image, .info-graphics, .main-content');
  hoverableBlocks.forEach(block => {
    block.classList.add('interactive-hover');
  });
});
