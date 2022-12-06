'use strict';

// *****Globals*****

let hours = ['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM'];
let cityArr = [];
let seattle = new City('Seattle', 23, 65, 6.3);
let tokyo = new City('Tokyo', 3, 24, 1.2);
let dubai = new City('Dubai', 11, 38, 6.3);
let paris = new City('Paris', 20, 38, 2.3);
let lima = new City('Lima', 2, 16, 4.6);
cityArr.push(seattle, tokyo, dubai, paris, lima);

// *****DOM Windows*****

// let citySection = document.getElementById('city');
let salesTable = document.getElementById('sales');


// *****Helper Functions/Utilities******

function randomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function renderAll() {
  for (let i = 0; i < cityArr.length; i++) {
    cityArr[i].getCookiesSold();
    cityArr[i].render();
  }
}

// ******Object Literals******

function City(name, minCustomer, maxCustomer, averageCookie) {

  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.averageCookie = averageCookie;
  this.cookiesSold = [];
}

City.prototype.getCookiesSold = function () {
  let totalCookies = 0;
  let ranNum = 0;
  for (let i = 0; i < hours.length; i++) {
    ranNum = Math.floor(randomCustomer(this.minCustomer, this.maxCustomer) * this.averageCookie);
    this.cookiesSold.push(ranNum);
    totalCookies = ranNum + totalCookies;

    if (i === hours.length - 1) {
      this.cookiesSold.push(`Total: ${totalCookies}`);
    }
  }
};

function tableHeader() {
  let row1 = document.createElement('tr');
  salesTable.appendChild(row1);
  let blank = document.createElement('th');
  row1.appendChild(blank);
  for (let i = 0; i < hours.length; i++) {
    let thElem = document.createElement('th');
    thElem.innerText = hours[i];
    row1.appendChild(thElem);
  }
  let totalLocation = document.createElement('th');
  totalLocation.innerText = 'Daily Location Total';
  row1.appendChild(totalLocation);

}

City.prototype.render = function () {
  let row2 = document.createElement('tr');
  salesTable.appendChild(row2);
  let cityName = document.createElement('td');
  cityName.innerText = this.name;
  row2.appendChild(cityName);

  for (let i = 0; i < this.cookiesSold.length; i++) {
    let tdElement = document.createElement('td');
    tdElement.innerText = this.cookiesSold[i];
    row2.appendChild(tdElement);
  }
};
// ******Executable Code******

tableHeader();
renderAll();
