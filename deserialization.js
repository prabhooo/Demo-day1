const fs = require('fs');

// Read JSON file
const jsonData = fs.readFileSync('emp_details.json', 'utf8');

// Deserialization
const data = JSON.parse(jsonData);

// Get employee
const emp = data.employees[0];

// Check API skill
if (emp.skills.includes('API')) {
    console.log(emp.name + " has API skill");
}