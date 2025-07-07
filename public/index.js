document.querySelector('#tool-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get input values
  const toolName = document.getElementById('tool-name');
  const quanity = document.getElementById('quanity');
  const price = document.getElementById('price');


  // Get table body
  const tableBody = document.querySelector('#tool-table tbody');

  // Create a new table row
  const newRow = tableBody.insertRow();

  // Create table cells
    const toolNameCell = newRow.insertCell();
    const quanityCell = newRow.insertCell();
    const priceCell = newRow.insertCell();

  // Populate cells with data
  toolNameCell.textContent = toolName.value;
  quanityCell.textContent = quanity.value;
  priceCell.textContent = price.value;

  // Clear the input fields after adding to the table (optional)
  toolName.value = '';
  quanity.value = '';
  price.value = '';
});
