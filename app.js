// Get references to the button and table container
var showTableBtn = document.getElementById("showTableButt");
var tableContainer = document.getElementById("tableContainer");

// Add click event listener to the button
showTableBtn.addEventListener("click", function() {
    // Toggle the 'hidden' class on the table container
    tableContainer.classList.toggle("hidden");
});