// Assignment 1 | COMP1073 Client-Side JavaScript

// Make sure all DOM did fully load
window.addEventListener('load', (event) => {
  // Call the coffeeOrder method to output your coffee order to the screen as text inside the paragraph element.
  // createContent();
});

var employee = {
  name: ['Biff', 'Henderson'],
  employeeNumber: 30573,
  department: 'Reponsessions',
  interests: ['the Mob', 'fast cars', 'baseball'],
  active: true,
};
// Write a short script that creates an interesting sentence by concatenating members of the above employee object together (using either dot notation or bracket notation). Include as much information about the employee as you can. Output the resulting content as text inside the paragraph element.
const para = document.querySelector('p');

for (let prop in employee) {
  const contentText = document.createElement('span');
  let contentPara = prop + ':' + ' ' + employee[prop] + '. ';

  contentText.textContent = contentPara;
  para.appendChild(contentText);
}
