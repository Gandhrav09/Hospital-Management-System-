// Patient Management
const patientForm = document.getElementById('patientForm');
const patientList = document.getElementById('patientList');

patientForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('patientName').value;
  const age = document.getElementById('patientAge').value;
  const gender = document.getElementById('patientGender').value;

  const patientItem = document.createElement('li');
  patientItem.textContent = `Name: ${name}, Age: ${age}, Gender: ${gender}`;
  patientList.appendChild(patientItem);

  patientForm.reset();
});

// Doctor Scheduling
const doctorForm = document.getElementById('doctorForm');
const doctorList = document.getElementById('doctorList');

doctorForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('doctorName').value;
  const specialization = document.getElementById('doctorSpecialization').value;
  const schedule = document.getElementById('doctorSchedule').value;

  const doctorItem = document.createElement('li');
  doctorItem.textContent = `Name: ${name}, Specialization: ${specialization}, Schedule: ${schedule}`;
  doctorList.appendChild(doctorItem);

  doctorForm.reset();
});

// Billing
const billingForm = document.getElementById('billingForm');
const billingList = document.getElementById('billingList');

billingForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const patientId = document.getElementById('patientId').value;
  const amount = document.getElementById('amount').value;
  const paymentMethod = document.getElementById('paymentMethod').value;

  const billingItem = document.createElement('li');
  billingItem.textContent = `Patient ID: ${patientId}, Amount: ${amount}, Payment Method: ${paymentMethod}`;
  billingList.appendChild(billingItem);

  billingForm.reset();
});

// Inventory Tracking
const inventoryForm = document.getElementById('inventoryForm');
const inventoryList = document.getElementById('inventoryList');

inventoryForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const itemName = document.getElementById('itemName').value;
  const quantity = document.getElementById('itemQuantity').value;
  const category = document.getElementById('itemCategory').value;

  const inventoryItem = document.createElement('li');
  inventoryItem.textContent = `Item: ${itemName}, Quantity: ${quantity}, Category: ${category}`;
  inventoryList.appendChild(inventoryItem);

  inventoryForm.reset();
});