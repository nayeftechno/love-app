import { makeObservable, observable, computed, action } from 'mobx';
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
            fetch : action
        });
    };
    get getEmployees() {
        return this.employees;
    };
    get getLoading() {
        return this.loading;
    };
    get getAdding() {
        return this.adding;
    };
    get getTotal() {
        return this.employees.length;
    };
    get getExists() {
        return this.employees.filter((emp) => { return emp.exist === true }).length;
    };
    get getNotExists() {
        return this.employees.filter((emp) => { return emp.exist === false }).length;
    };
    fetch=async()=> {
        this.loading = true;
        const response = await fetch('http://localhost:4000/employees');
        const employees = await response.json();
        this.employees = employees;
        this.loading = false;
    };
};
export default EmployeeStore;