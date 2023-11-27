// Scroll to Top Button Functionality
window.addEventListener('scroll', function() {
    const scrollBtn = document.getElementById('scrollBtn');
    scrollBtn.style.display = window.pageYOffset > 200 ? 'block' : 'none';
});

document.getElementById('scrollBtn').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Common functionality for closing modals
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});

// Common functionality for Escape key
window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(function(modal) {
            modal.style.display = 'none';
        });
    }
});

// Function to open a modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

// Function to close a modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Initialize the game
let currentAnswer = ""; // To store the current correct answer

function startGame() {
    const codeSnippets = [{
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
    let randomIndex = Math.floor(Math.random() * codeSnippets.length);
    let selectedSnippet = codeSnippets[randomIndex];

    document.getElementById('code-snippet').textContent = selectedSnippet.snippet;
    document.getElementById('game-result').textContent = "";
    currentAnswer = selectedSnippet.answer;
}

function checkAnswer(userGuess) {
    document.getElementById('game-result').textContent = userGuess === currentAnswer ? "Correct!" : "Wrong! Try Again.";
}

// Event listeners for buttons
document.getElementById("contactBtn").addEventListener('click', function() {
    openModal('contactModal');
});

document.getElementById("openGameModal").addEventListener('click', function() {
    openModal('gameModal');
    startGame();
});

// Close modals when the close button is clicked
document.querySelectorAll('.modal .close').forEach(function(closeBtn) {
    closeBtn.addEventListener('click', function() {
        this.closest('.modal').style.display = 'none';
    });
});
