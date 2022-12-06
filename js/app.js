'use strict';

// *****Globals*****

let hours = ['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM'];

// *****DOM Windows*****

let citySection = document.getElementById('city');

// *****Helper Functions/Utilities******

function randomCustomer(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ******Object Literals******

let seattle = {
  name: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  averageCookie: 6.3,
  cookiesSold: [],
  getCookiesSold: function(){
    let totalCookies = 0;
    let ranNum = 0;
    for (let i = 0; i < hours.length; i++){
      ranNum = Math.floor(randomCustomer(this.minCustomer, this.maxCustomer) * this.averageCookie);
      this.cookiesSold.push(hours[i] + ': ' + ranNum + ' cookies.');
      totalCookies = ranNum + totalCookies;

      if (i === hours.length - 1){
        this.cookiesSold.push(`Total: ${totalCookies}`);
      }
    }
  },
  render: function(){
    // *****DOM MANIPULATION****

    let articleElement = document.createElement('article');
    citySection.appendChild(articleElement);

    let h3Element = document.createElement('h3');
    h3Element.innerText = this.name;
    articleElement.appendChild(h3Element);

    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0; i < this.cookiesSold.length; i++){
      let liElement = document.createElement('li');
      liElement.innerText = this.cookiesSold[i];
      ulElement.appendChild(liElement);
    }
  }
};

let toyko = {
  name: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  averageCookie: 1.2,
  cookiesSold: [],
  getCookiesSold: function(){
    let totalCookies = 0;
    let ranNum = 0;
    for (let i = 0; i < hours.length; i++){
      ranNum = Math.floor(randomCustomer(this.minCustomer, this.maxCustomer) * this.averageCookie);
      this.cookiesSold.push(hours[i] + ': ' + ranNum + ' cookies.');
      totalCookies = ranNum + totalCookies;

      if (i === hours.length - 1){
        this.cookiesSold.push(`Total: ${totalCookies}`);
      }
    }
  },
  render: function(){
    // *****DOM MANIPULATION****

    let articleElement = document.createElement('article');
    citySection.appendChild(articleElement);

    let h3Element = document.createElement('h3');
    h3Element.innerText = this.name;
    articleElement.appendChild(h3Element);

    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0; i < this.cookiesSold.length; i++){
      let liElement = document.createElement('li');
      liElement.innerText = this.cookiesSold[i];
      ulElement.appendChild(liElement);
    }
  }
};

let dubai = {
  name: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  averageCookie: 3.7,
  cookiesSold: [],
  getCookiesSold: function(){
    let totalCookies = 0;
    let ranNum = 0;
    for (let i = 0; i < hours.length; i++){
      ranNum = Math.floor(randomCustomer(this.minCustomer, this.maxCustomer) * this.averageCookie);
      this.cookiesSold.push(hours[i] + ': ' + ranNum + ' cookies.');
      totalCookies = ranNum + totalCookies;

      if (i === hours.length - 1){
        this.cookiesSold.push(`Total: ${totalCookies}`);
      }
    }
  },
  render: function(){
    // *****DOM MANIPULATION****

    let articleElement = document.createElement('article');
    citySection.appendChild(articleElement);

    let h3Element = document.createElement('h3');
    h3Element.innerText = this.name;
    articleElement.appendChild(h3Element);

    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0; i < this.cookiesSold.length; i++){
      let liElement = document.createElement('li');
      liElement.innerText = this.cookiesSold[i];
      ulElement.appendChild(liElement);
    }
  }
};

let paris = {
  name: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  averageCookie: 2.3,
  cookiesSold: [],
  getCookiesSold: function(){
    let totalCookies = 0;
    let ranNum = 0;
    for (let i = 0; i < hours.length; i++){
      ranNum = Math.floor(randomCustomer(this.minCustomer, this.maxCustomer) * this.averageCookie);
      this.cookiesSold.push(hours[i] + ': ' + ranNum + ' cookies.');
      totalCookies = ranNum + totalCookies;

      if (i === hours.length - 1){
        this.cookiesSold.push(`Total: ${totalCookies}`);
      }
    }
  },
  render: function(){
    // *****DOM MANIPULATION****

    let articleElement = document.createElement('article');
    citySection.appendChild(articleElement);

    let h3Element = document.createElement('h3');
    h3Element.innerText = this.name;
    articleElement.appendChild(h3Element);

    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0; i < this.cookiesSold.length; i++){
      let liElement = document.createElement('li');
      liElement.innerText = this.cookiesSold[i];
      ulElement.appendChild(liElement);
    }
  }
};

let lima = {
  name: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  averageCookie: 4.6,
  cookiesSold: [],
  getCookiesSold: function(){
    let totalCookies = 0;
    let ranNum = 0;
    for (let i = 0; i < hours.length; i++){
      ranNum = Math.floor(randomCustomer(this.minCustomer, this.maxCustomer) * this.averageCookie);
      this.cookiesSold.push(hours[i] + ': ' + ranNum + ' cookies.');
      totalCookies = ranNum + totalCookies;

      if (i === hours.length - 1){
        this.cookiesSold.push(`Total: ${totalCookies}`);
      }
    }
  },
  render: function(){
    // *****DOM MANIPULATION****

    let articleElement = document.createElement('article');
    citySection.appendChild(articleElement);

    let h3Element = document.createElement('h3');
    h3Element.innerText = this.name;
    articleElement.appendChild(h3Element);

    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0; i < this.cookiesSold.length; i++){
      let liElement = document.createElement('li');
      liElement.innerText = this.cookiesSold[i];
      ulElement.appendChild(liElement);
    }
  }
};

// *****Executable Code******

seattle.getCookiesSold();
seattle.render();
toyko.getCookiesSold();
toyko.render();
dubai.getCookiesSold();
dubai.render();
paris.getCookiesSold();
paris.render();
lima.getCookiesSold();
lima.render();
