const { test, expect } = require('@playwright/test');
const fs = require('fs');

test('Read employee JSON', async () => {

    const data = JSON.parse(
        fs.readFileSync('./testdata/emp_details.json', 'utf8')
    );

    const prabhu = data.employees.find(
        emp => emp.name === 'Prabhu'
    );

    console.log(`Salary of ${prabhu.name} is ${prabhu.salary}`);

    expect(prabhu.salary).toBe('75k');
});