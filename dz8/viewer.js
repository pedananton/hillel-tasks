import employees from './data/employees.js';

const elements = {
  viewer: document.getElementById('viewer'),
  employeeTemplate: document.getElementById('employee'),
};

function displayEmployees() {
  const template = elements.employeeTemplate;
  const viewerBody = elements.viewer.tBodies[0];
  const fragment = document.createDocumentFragment();

  for (const employee of employees) {
    const row = document.importNode(template.content, true).children[0];

    row.cells[0].textContent = employee.empId;
    row.cells[1].textContent = employee.namePrefix;
    row.cells[2].textContent = employee.firstName + ' '+ employee.lastName;
    row.cells[3].getElementsByTagName('a')[0].href += employee.eMail;
    row.cells[3].getElementsByTagName('a')[0].textContent = employee.eMail;
    row.cells[4].textContent = employee.dateOfBirth;

    fragment.appendChild(row);
  }

  viewerBody.innerHTML = '';
  viewerBody.appendChild(fragment);
}

displayEmployees();
