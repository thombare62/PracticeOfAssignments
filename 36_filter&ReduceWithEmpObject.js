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
  console.log(`1. Finding employees of Wipro Company.`);
  arrayOfEmployees.filter((value) => {
    if (value.emp_company == "Wipro") {
      console.log(
        `ID= ${value.emp_id}, Name= ${value.emp_name}, Department= ${value.emp_dept}, Salary= ${value.emp_salary}, Company= ${value.emp_company}`
      );
    }
  });
  console.log(
    `=======================================================================`
  );
  console.log(`2. Finding employees from IT & HR department.`);
  arrayOfEmployees.filter((value) => {
    if (value.emp_dept == "IT" || value.emp_dept == "HR") {
      console.log(
        `ID= ${value.emp_id}, Name= ${value.emp_name}, Department= ${value.emp_dept}, Salary= ${value.emp_salary}, Company= ${value.emp_company}`
      );
    }
  });
  console.log(
    `=======================================================================`
  );
  console.log(`3. Finding employees whose emp ID is greater than 50.`);
  arrayOfEmployees.filter((value) => {
    if (value.emp_id > 50) {
      console.log(
        `ID= ${value.emp_id}, Name= ${value.emp_name}, Department= ${value.emp_dept}, Salary= ${value.emp_salary}, Company= ${value.emp_company}`
      );
    }
  });
  console.log(
    `=======================================================================`
  );
  console.log(`4. Finding employees whose name starts with 'A' 'V' or 'M'.`);
  arrayOfEmployees.filter((value) => {
    if (
      value.emp_name.startsWith("A") ||
      value.emp_name.startsWith("V") ||
      value.emp_name.startsWith("M")
    ) {
      console.log(
        `ID= ${value.emp_id}, Name= ${value.emp_name}, Department= ${value.emp_dept}, Salary= ${value.emp_salary}, Company= ${value.emp_company}`
      );
    }
  });
  console.log(
    `=======================================================================`
  );
  console.log(`5. Finding average salary of all the employees.`);
  let average = arrayOfEmployees.reduce((runTotal, value) => {
    return runTotal + value.emp_salary;
  }, 0);
  console.log(
    `Average salary of all employees= ${average / arrayOfEmployees.length}`
  );
  
  console.log(
    `=======================================================================`
  );
  console.log(`6. Finding average salary of IT department employees.`);
  let arrayOfIt = [];
  let sum = arrayOfEmployees.filter((value, index, array) => {
    if (value.emp_dept == "IT") {
      arrayOfIt.push(value.emp_salary);
    }
  });
  let sum2 = arrayOfIt.reduce((runningTotal, value) => {
    return runningTotal + value;
  });
  console.log(`Average IT employee salary= ${sum2 / arrayOfIt.length}`);
  