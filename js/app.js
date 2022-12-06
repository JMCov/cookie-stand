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
    for (let i = 0; i < hours.length; i++){
      this.cookiesSold.push(hours[i] + '--> ' + Math.floor(randomCustomer(this.minCustomer, this.maxCustomer) * this.averageCookie) + ' cookies.');
    }
  },
  render: function(){

  }
}



// ******DOM 