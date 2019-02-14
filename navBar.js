class Navbar {
    constructor(element) {
        // Assign this.element to the navBar element
        this.element = element;

        // Get the element with the ".navBar-button" class found in the navBar element (look at the HTML for context)
        this.button = this.element.querySelector(".navBar-button");

        // assign the reference to the ".navBar-content" class found in the navBar element
        this.content = this.element.querySelector(".navBar-content");

        // Add a click handler to the button reference and call the toggleContent method.
        this.button.addEventListener("click", () => this.toggleContent());
    }

    toggleContent() {
        // Toggle the ".navBar-hidden" class off and on
        this.content.classList.toggle("navBar-hidden");
        //add animation to get the navBar to slide in and out
        //look at the documentation
        const drop = document.querySelector(".navBar-content");
        if (this.content.classList.contains("navBar-hidden")) {
            TweenMax.to(drop, 1, { top: -340 });
        } else {
            TweenMax.to(drop, 1, { top: 60 });
        }
    }
}

// Nothing to do here, just study what the code is doing and move on to the navBar class
let navBars = document.querySelectorAll('.navBar').forEach(navBar => new Navbar(navBar));