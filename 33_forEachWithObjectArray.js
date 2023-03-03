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
  
  const arrayOfEmployees = [
    emp_anil,
    emp_radha,
    emp_rishi,
    emp_sonali,
    emp_monika,
    emp_vinay,
    emp_mahi,
  ];
  console.log(`1. To find TCS employee details.`);
  arrayOfEmployees.forEach((emp) => {
    if (emp.emp_company == "TCS") {
      console.log(
        `Employee Name= ${emp.emp_name}, Company Name= ${emp.emp_company}`
      );
    }
  });
  console.log(
    `======================================================================`
  );
  console.log(`2. To find employees with salary>=50000`);
  arrayOfEmployees.forEach((emp) => {
    if (emp.emp_salary >= 50000) {
      console.log(
        `ID= ${emp.emp_id}, Name= ${emp.emp_name}, Department= ${emp.emp_dept}, Salary= ${emp.emp_salary}, Company= ${emp.emp_company}`
      );
    }
  });
  console.log(
    `======================================================================`
  );
  console.log(`3. To find sum of all employees salary`);
  let sum = 0;
  arrayOfEmployees.forEach((emp) => {
    sum = sum + emp.emp_salary;
  });
  console.log(`Sum of all employee salary= ${sum} INR`);
  console.log(
    `======================================================================`
  );
  console.log(`4. To find average salary of all employees`);
  console.log(`Average Salary= ${sum / arrayOfEmployees.length} INR`);
  console.log(
    `======================================================================`
  );
  console.log(`5. To find IT or HR department employees whose salary>=75000`);
  arrayOfEmployees.forEach((emp) => {
    if (
      (emp.emp_dept == "IT" || emp.emp_dept == "HR") &&
      emp.emp_salary >= 75000
    ) {
      console.log(
        `ID= ${emp.emp_id}, Name= ${emp.emp_name}, Department= ${emp.emp_dept}, Salary= ${emp.emp_salary}, Company= ${emp.emp_company}`
      );
    }
  });
  console.log(
    `======================================================================`
  );
  