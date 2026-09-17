document.addEventListener("DOMContentLoaded", () => {
  // Primary Navigation Links
  const primaryLinks = [
    { name: "Home", url: "index.html" },
    { name: "About Me", url: "about.html" },
    { name: "My Work", url: "work.html" },
    { name: "Education", url: "education.html" }
  ];

  // Secondary Navigation Links - Support points directly to Google Form
  const secondaryLinks = [
    { name: "Contact", url: "contact.html" },
    { name: "Support", url: "https://docs.google.com/forms/d/e/1FAIpQLSf1FjYObF4FmcFsLiQDp7AJ7fylDb8EmoK6mnkLrepKrkWAZA/viewform?usp=header", external: true },
    { name: "Terms", url: "terms.html" }
  ];

  // Helper function to render <ul> links
  function buildNavList(links, className = "nav-list") {
    return `<ul class="${className}">` + 
      links.map(link => {
        const targetAttr = link.external ? 'target="_blank" rel="noopener noreferrer"' : '';
        return `<li><a href="${link.url}" ${targetAttr}>${link.name}</a></li>`;
      }).join("") + 
      `</ul>`;
  }

  // 1. Inject Top Navigation Elements
  const topPrimaryNav = document.getElementById("top-primary-nav");
  const topSecondaryNav = document.getElementById("top-secondary-nav");

  if (topPrimaryNav) topPrimaryNav.innerHTML = buildNavList(primaryLinks, "nav-list");
  if (topSecondaryNav) topSecondaryNav.innerHTML = buildNavList(secondaryLinks, "nav-list");

  // 2. Inject Left Sidebar Navigation Elements
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
});
