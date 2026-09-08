document.addEventListener("DOMContentLoaded", () => {
  // Define navigation links central structure
  const primaryLinks = [
    { name: "Home", url: "index.html" },
    { name: "About", url: "#about" },
    { name: "Services", url: "#services" },
    { name: "Contact", url: "#contact" }
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

  // 1. Render Top Header Navigators
  const topPrimaryNav = document.getElementById("top-primary-nav");
  const topSecondaryNav = document.getElementById("top-secondary-nav");

  if (topPrimaryNav) {
    topPrimaryNav.innerHTML = buildNavList(primaryLinks);
  }
  if (topSecondaryNav) {
    topSecondaryNav.innerHTML = buildNavList(secondaryLinks);
  }

  // 2. Render Left Sidebar Navigators
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
