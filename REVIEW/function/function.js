var salary = salaryCalculation(35, 8, 70, 2);
var calculated = 0;

/**
 * @desc The calculation of the salary
 * @param {*} regularHourlyWage the hourly wage
 * @param {*} regularHoursWorked the number of hours worker
 * @param {*} overTimeHourlyWage the overtime hourly wage
 * @param {*} overTimeHoursWorked the overtime hours worked
 * @returns the calculation of the salary
 */
function salaryCalculation(regularHourlyWage, regularHoursWorked, overTimeHourlyWage, overTimeHoursWorked) {
    calculated = (regularHourlyWage * regularHoursWorked) + (overTimeHourlyWage * overTimeHoursWorked);
    if(calculated > 1000) {
        return "You got paid a lot this time!";
    } else if (calculated > 500) {
        return "You got paid average this time.";
    } else {
        return "You did not get paid enough";
    }
}

console.log(salary);
