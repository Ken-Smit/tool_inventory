 let totalCost = 0;  

document.querySelector('#tool-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get input values
  const toolName = document.getElementById('tool-name');
  const quantity = document.getElementById('quantity');
  const price = document.getElementById('price');

  //Parse input values
  const quantityValue = parseInt(quantity.value);
  const priceValue = parseFloat(price.value);
  const priceHasTooManyDecimals = (
  price.value.includes('.') && price.value.split('.')[1].length > 2
);

  //Validate input values
  if (!toolName.value || 
      isNaN(quantityValue) || quantityValue <= 0 || 
      isNaN(priceValue) || priceValue <= 0 || 
      priceHasTooManyDecimals) {

    alert("Please enter a valid tool name, a quantity greater than 0, and a price greater than 0 with up to 2 decimal places.");
    return;
  }


  // Get table body
  const tableBody = document.querySelector('#tool-table tbody');

  // Create a new table row
  const newRow = tableBody.insertRow();

  // Create table cells
    const toolNameCell = newRow.insertCell();
    const quantityCell = newRow.insertCell();
    const priceCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

  // Populate cells with data
  toolNameCell.textContent = toolName.value;
  quantityCell.textContent = quantity.value;
  priceCell.textContent = `$${priceValue.toFixed(2)}`;


  //Ccalculate total cost
  const itemTotal = quantityValue * priceValue;
  totalCost += itemTotal;
  updateTotalCost();

   //Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', function () {
    //Subtract this row's cost
    totalCost -= itemTotal;
    updateTotalCost();
    newRow.remove();
  });

  deleteCell.appendChild(deleteBtn);

  // Display total cost
document.getElementById('total-cost-display').textContent = `Total Cost: $${totalCost.toFixed(2)}`;

  // Clear the input fields after adding to the table (optional)
  toolName.value = '';
  quantity.value = '';
  price.value = '';
});

function updateTotalCost() {
  document.getElementById('total-cost-display').textContent =
    `Total Cost: $${totalCost.toFixed(2)}`;
}

