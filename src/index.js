// import your function
import {User, Admin} from './User.js';
import './style.css';
import Icon from './icon.png';

function component(user) {
  const element = document.createElement('div');
  element.textContent = user.printString();
element.classList.add('hello');
	  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

const usersContainer = document.querySelector("#users");
  usersContainer.appendChild(element);

  // use your function!

  // console.log(user);
  // console.log(admin);
  // console.log(userString);
  // console.log(adminString);

  // console.log(user.__proto__ == admin.__proto__);
  // console.log(user.__proto__); // proto obj
  // console.log(user.__proto__.__proto__); // anscestor obj
  // console.log(user.__proto__.__proto__.__proto__); // Object.prototype or {}
  // console.log(user.__proto__.__proto__.__proto__.__proto__); // null

  // console.log(user.log);
  // console.log(admin.log);
}

function render(moduleName,user, admin) {
  const element = document.createElement('div');
  element.id = moduleName;
  document.body.appendChild(element);
  component(user);
  component(admin);
}

const user = User("tom", 26);
const admin = Admin('pixie', 9);

render('users',user, admin);
