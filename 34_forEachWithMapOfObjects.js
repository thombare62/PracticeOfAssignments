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
  
  let map_Employees = new Map();
  map_Employees.set(emp_anil.emp_id, emp_anil);
  map_Employees.set(emp_radha.emp_id, emp_radha);
  map_Employees.set(emp_rishi.emp_id, emp_rishi);
  map_Employees.set(emp_sonali.emp_id, emp_sonali);
  map_Employees.set(emp_monika.emp_id, emp_monika);
  map_Employees.set(emp_vinay.emp_id, emp_vinay);
  map_Employees.set(emp_mahi.emp_id, emp_mahi);
  
  map_Employees.forEach((value, key) => {
    console.log(
      `Emp ID= ${key} ===> Name= ${value.emp_name}, Department= ${value.emp_dept}, Salary= ${value.emp_salary}, Company= ${value.emp_company}`
    );
  });
  