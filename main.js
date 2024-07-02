function handleEnterPress(event) {
  // Check if Enter key was pressed and target is the text input with id="textInsert"
  if (event.keyCode === 13 && event.target.id === "textInsert") {
    // Get the value entered in the text input
    const userInput = event.target.value;

    // Build the Google search URL with user input as the search query
    const baseUrl = "https://www.google.com/search?q=";
    const encodedUserInput = encodeURIComponent(userInput); // Encode for special chars
    const searchUrl = baseUrl + encodedUserInput + "&sourceid=chrome&ie=UTF-8";

    // Send the user to the built search URL
    window.location.href = searchUrl;
  }
}

// Add event listener to the text input element with id="textInsert"
const textInput = document.getElementById("textInsert");
textInput.addEventListener("keyup", handleEnterPress);
