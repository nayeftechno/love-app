//we are using Mobx@v4 to support internet explorer, because Mobx@v5 is using Proxy API
import { makeObservable, observable, computed, action, autorun } from "mobx";
import { computedFn } from "mobx-utils";
class EmployeeStore {
  employees = [];
  loading = false;
  adding = false;
  constructor() {
    makeObservable(this, {
      employees: observable,
      loading: observable,
      adding: observable,
      getEmployees: computed,
      getLoading: computed,
      getAdding: computed,
      getTotal: computed,
      getExists: computed,
      getNotExists: computed,
      fetch: action,
      addEmployee: action,
      deleteEmployee: action,
      setChecked: action,
    });
    this.fetch();
    autorun(() => {
      console.log(`From Store : ${this.employees.length}`);
    });
  }
  get getEmployees() {
    return this.employees;
  }
  get getLoading() {
    return this.loading;
  }
  get getAdding() {
    return this.adding;
  }
  get getTotal() {
    return this.employees.length;
  }
  get getExists() {
    return this.employees.filter((emp) => {
      return emp.exist === true;
    }).length;
  }
  get getNotExists() {
    return this.employees.filter((emp) => {
      return emp.exist === false;
    }).length;
  }
  searchWithTerm = computedFn((term) => {
    const $term = term.toLowerCase();
    return this.employees.filter((emp) => {
      return emp.name.toLowerCase().includes($term);
    }).length;
  });
  fetch = async () => {
    this.loading = true;
    const response = await fetch("http://localhost:4000/employees");
    const employees = await response.json();
    this.employees = employees;
    this.loading = false;
  };
  addEmployee = (employee) => {
    this.adding = true;
    fetch("http://localhost:4000/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.adding = false;
        this.employees.push(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  deleteEmployee = (employee) => {
    fetch(`http://localhost:4000/employees/${employee.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.employees = this.employees.filter((emp) => {
          return emp.id !== employee.id;
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  setChecked = (employee) => {
    const currentEmployee = this.employees.find((emp) => {
      return emp.id === employee.id;
    });
    currentEmployee.exist = !employee.exist;
    currentEmployee.id = employee.id;
    currentEmployee.name = employee.name;
    fetch(`http://localhost:4000/employees/${employee.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(currentEmployee),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        const index = this.employees.findIndex((emp) => {
          return emp.id === employee.id;
        });
        this.employees[index] = response;
      })
      .catch((error) => {
        console.error(error);
      });
  };
}
export default EmployeeStore;
