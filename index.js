const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchResults = document.getElementById("searchResults");
const searchIcon = document.getElementById("searchIcon");

// Add an event listener to the search button
searchButton.addEventListener("click", function (event) {
	event.preventDefault(); // Prevent the form from submitting

	// Get the search term from the input field
	const searchTerm = searchInput.value.trim();

	// Perform your search logic here, and display results in searchResults div
	// You can use an AJAX request or any search mechanism you prefer

	// For now, let's display a simple message as an example
	searchResults.innerHTML = `You searched for: "${searchTerm}"`;
});

// Add an event listener to the search icon for mobile devices
searchInput.addEventListener("keydown", function (event) {
	if (event.key === "Enter") {
		event.preventDefault(); // Prevent the form from submitting
		performSearch(); // Call the search function when Enter is pressed
	}
});
