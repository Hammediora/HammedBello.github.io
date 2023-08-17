$(document).ready(function () {
    // Smooth scrolling when clicking on navigation links
    $('a.nav-link').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800
            );
        }
    });

    // Show/hide the "Scroll to top" button based on the scroll position
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#scrollBtn').fadeIn();
        } else {
            $('#scrollBtn').fadeOut();
        }
    });

    // Scroll to top when the "Scroll to top" button is clicked
    $('#scrollBtn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});

// Get the modal, button, and span elements
const modal = document.getElementById("gameModal");
const span = document.getElementsByClassName("close")[0];
const closeSpan = document.querySelector(".close");

// When the close button (x) is clicked, close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Add event listener for the close button
closeSpan.addEventListener('click', closeModal);

function closeModal() {
    modal.style.display = "none";
}

const codeSnippets = [
    {
        snippet: `
public static void main(String[] args) {
    System.out.println("Hello, World!");
}`,
        answer: "java",
        name: "Java"
    },
    {
        snippet: `
class Animal {
    private String name;

    public Animal(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }
}`,
        answer: "java",
        name: "Java"
    },
    {
        snippet: `
print("Hello, World!")`,
        answer: "python",
        name: "Python"
    },
    {
        snippet: `
def add_numbers(a, b):
    return a + b`,
        answer: "python",
        name: "Python"
    },
    {
        snippet: `
console.log("Hello, World!");`,
        answer: "javascript",
        name: "JavaScript"
    },
    {
        snippet: `
function greet(name) {
    return "Hello, " + name + "!";
}`,
        answer: "javascript",
        name: "JavaScript"
    }
];

const openGameButton = document.getElementById("openGameModal");  // assuming your button has this ID
openGameButton.addEventListener('click', openGameModal);

function startGame() {
    let randomIndex = Math.floor(Math.random() * codeSnippets.length);
    let selectedSnippet = codeSnippets[randomIndex];

    document.getElementById('code-snippet').textContent = selectedSnippet.snippet;
    document.getElementById('game-result').textContent = "";  // Reset result from previous game
    currentAnswer = selectedSnippet.answer;  // Store the current answer to compare later
}

let currentAnswer = "";  // To store the current correct answer

function checkAnswer(userGuess) {
    if (userGuess === currentAnswer) {
        document.getElementById('game-result').textContent = "Correct!";
    } else {
        document.getElementById('game-result').textContent = "Wrong! Try Again.";
    }
}

