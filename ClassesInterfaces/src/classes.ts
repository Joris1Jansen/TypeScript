abstract class Department {
  // private id: string;
  // private name: string;
  static fiscalYear = 2020;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // readonly variable can't be changed after initialisation
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartement extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT Departement - ID: " + this.id);
  }
}

class AccountingDepartement extends Department {
  private lastReport: string;
  private static instance: AccountingDepartement;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please enter a valid report");
    }
    this.addReports(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartement.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartement("d2", []);
    return this.instance;
  }

  addEmployee(name: string) {
    if (name === "Joris") {
      return;
    }
    this.employees.push(name);
  }

  addReports(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printRepports() {
    console.log(this.reports);
  }

  describe() {
    console.log("Accountant Departement - ID: " + this.id);
  }
}

const it = new ITDepartement("d2", ["Joris"]);
console.log(it);

// const accounting = new AccountingDepartement("d1", []);
const accounting = AccountingDepartement.getInstance();
const accounting2 = AccountingDepartement.getInstance();
console.log(accounting, accounting2);

accounting.addEmployee("Joris");
accounting.addEmployee("Soof");
accounting.addReports("New Repport");
accounting.mostRecentReport = "New New Report";
console.log(accounting.mostRecentReport);

// accounting.employees[2] = "Test";

accounting.describe();
accounting.printEmployeeInformation();
console.log(accounting);

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();

const employee1 = Department.createEmployee("Joris");
console.log(employee1, Department.fiscalYear);

accounting.describe();
