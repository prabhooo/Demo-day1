const fs = require('fs');

// JavaScript Object
const empData = {
    employees: [
        {
            empId: 101,
            name: "Prabhu",
            designation: "QA Engineer",
            salary: "75k",
            skills: ["java", "python", "javascript", "API"]
        }
    ]
};

// Add skill dynamically
empData.employees[0].skills.push("Gen-AI");

// Serialization
const jsonData = JSON.stringify(empData, null, 2);

// Write into JSON file
fs.writeFileSync('emp_details.json', jsonData);

console.log("JSON file created successfully");