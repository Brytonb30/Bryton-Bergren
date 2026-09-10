document.addEventListener("DOMContentLoaded", () => {
  // Primary Navigation Links with updated Capitalization ("About Me" and "My Work")
  const primaryLinks = [
    { name: "Home", url: "index.html" },
    { name: "About Me", url: "about.html" },
    { name: "My Work", url: "work.html" },
    { name: "Education", url: "education.html" }
  ];

  // Secondary Navigation Links
  const secondaryLinks = [
    { name: "Contact", url: "#contact" },
    { name: "Support", url: "#support" },
    { name: "Terms", url: "#terms" }
  ];

  // Helper function to render <ul> links
  function buildNavList(links, className = "nav-list") {
    return `<ul class="${className}">` + 
      links.map(link => `<li><a href="${link.url}">${link.name}</a></li>`).join("") + 
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
