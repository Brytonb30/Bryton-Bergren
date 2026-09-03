// Create the navigation bar
const navigation = document.createElement("nav");

// Create the navigation menu
navigation.innerHTML = `
    <div class="navigation-menu">
        <a href="index.html">Home</a>
        <a href="about.html">About Me</a>
        <a href="education.html">Education</a>
        <a href="work.html">Work Experience</a>
        <a href="projects.html">Projects</a>
    </div>
`;

// Add the navigation bar to the top of the webpage
document.body.prepend(navigation);
