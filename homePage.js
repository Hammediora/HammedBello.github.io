window.addEventListener('scroll', function() {
    const scrollBtn = document.getElementById('scrollBtn');

    if (window.pageYOffset > 200) {
        scrollBtn.style.display = 'block';  // or 'inline' or 'inline-block' depending on your design
    } else {
        scrollBtn.style.display = 'none';
    }
});

document.getElementById('scrollBtn').addEventListener('click', function(event) {
    event.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



// Get the modal, button, and span elements
    const modal = document.getElementById("gameModal");
    const span = document.getElementsByClassName("close")[0];
    const closeSpan = document.querySelector(".close");

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

    const openGameButton = document.getElementById("openGameModal");
    openGameButton.addEventListener('click', openGameModal);

    function openGameModal() {
        modal.style.display = "block";
        startGame();
    }

    function startGame() {
        let randomIndex = Math.floor(Math.random() * codeSnippets.length);
        let selectedSnippet = codeSnippets[randomIndex];

        document.getElementById('code-snippet').textContent = selectedSnippet.snippet;
        document.getElementById('game-result').textContent = ""; // Reset result from previous game
        currentAnswer = selectedSnippet.answer; // Store the current answer to compare later
    }

    let currentAnswer = ""; // To store the current correct answer

    function checkAnswer(userGuess) {
        if (userGuess === currentAnswer) {
            document.getElementById('game-result').textContent = "Correct!";
        } else {
            document.getElementById('game-result').textContent = "Wrong! Try Again.";
        }
    }
