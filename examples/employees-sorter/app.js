import employeesJSON from './data/employees.js';
import Employee from './models/Employee.js';
import * as comparators from "./utils/compare.js";
import {sortBy} from "./utils/sortBy.js";

const employees = employeesJSON.map(e => new Employee(e));

const elements = {
    viewer: document.getElementById('viewer'),
    employeeTemplate: document.getElementById('employee'),
};

const appListeners = {
    onDOMContentLoaded() {
        elements.viewer.addEventListener('click', appListeners.onTableClick);
        displayEmployees(employees);
    },
    onTableClick(e) {
        if (e.target.matches('th[data-prop]')) {
            appListeners.onTableHeaderClick(e.target)
        }
    },
    onTableHeaderClick(th) {
        const selector = new Function('e', `return ${th.dataset.prop}`);
        const comparator = comparators[th.dataset.type];
        const sortedEmployees = sortBy(employees, selector, comparator);

        displayEmployees(sortedEmployees);
    },
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', appListeners.onDOMContentLoaded);
} else {
  appListeners.onDOMContentLoaded();
}

function displayEmployees(employees) {
    const viewerBody = elements.viewer.tBodies[0];
    viewerBody.innerHTML = '';
    viewerBody.append(...employees.map(createEmployeeRecord));
}

function createEmployeeRecord(employee) {
    const template = elements.employeeTemplate;
    const row = document.importNode(template.content, true).children[0];

    row.cells[0].textContent = employee.empId;
    row.cells[1].textContent = employee.namePrefix;
    row.cells[2].textContent = employee.firstName + ' '+ employee.lastName;
    row.cells[3].getElementsByTagName('a')[0].href += employee.eMail;
    row.cells[3].getElementsByTagName('a')[0].textContent = employee.eMail;
    row.cells[4].textContent = employee.dateOfBirth.toLocaleDateString();

    return row;
}
