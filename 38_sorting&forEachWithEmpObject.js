class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infosys");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_vinay = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infosys");

let arrayOfEmployees = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_vinay,
  emp_mahi,
];
console.log(
  `1. Sorting employees in ascending order according to Employee ID `
);
arrayOfEmployees.sort((emp1, emp2) => {
  return emp1.emp_id > emp2.emp_id ? 1 : -1;
});
arrayOfEmployees.forEach((value) => {
  console.log(
    `ID= ${value.emp_id}, Name= ${value.emp_name}, Department= ${value.emp_dept}`
  );
});
console.log(
  `===================================================================`
);
console.log(
  `2. Sorting employees in ascending order according to Employee department `
);
arrayOfEmployees.sort((emp1, emp2) => {
  return emp1.emp_dept > emp2.emp_dept ? 1 : -1;
});
arrayOfEmployees.forEach((value) => {
  console.log(
    `ID= ${value.emp_id},  Department= ${value.emp_dept}, Company= ${value.emp_company}`
  );
});
console.log(
  `===================================================================`
);
console.log(
  `3. Sorting employees in descending order according to Employee salary `
);
arrayOfEmployees.sort((emp1, emp2) => {
  return emp1.emp_salary > emp2.emp_salary ? -1 : 1;
});
arrayOfEmployees.forEach((value) => {
  console.log(
    `Name= ${value.emp_name},  Salary= ${value.emp_salary}, Company= ${value.emp_company}`
  );
});
console.log(
  `===================================================================`
);
