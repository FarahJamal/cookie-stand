'use strict';
/*array of operation hours Dynamically  */
 let operationHours=[];
 for(var i=0;i<14;i++)
 {
     if(i+6 < 12){
operationHours[i]=`${i+6}am`;
     }
else{
    if(i+6==12){
        operationHours[i]=`${i+6}pm`;

    }
    else{
var y=(i+6)-12;
    operationHours[i]=`${y}pm`;}
}
 }
console.log(operationHours);
/*====================================end of array============================================ */


const seattleStore = {
  store: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  storeHours: operationHours,
  cookiesSoldPerHour: [], // Results of cookie sales for the store, stored as a property of the store
  totalCookiesPerDay: 0,
  setCookiesSoldPerHour: function() {
    return this.cookiesSoldPerHour.push(Math.ceil(randomCustomersPerHour(this.minCustomers, this.maxCustomers) * this.avgCookiesPerCustomer)); // rounded up for fractions of cookies
  }
};

const tokyoStore = {
  store: 'Tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesPerCustomer: 1.2,
  storeHours: operationHours,
  cookiesSoldPerHour: [], // Results of cookie sales for the store, stored as a property of the store
  totalCookiesPerDay: 0,
  setCookiesSoldPerHour: function() {
    return this.cookiesSoldPerHour.push(Math.ceil(randomCustomersPerHour(this.minCustomers, this.maxCustomers) * this.avgCookiesPerCustomer)); // rounded up for fractions of cookies
  }
};

const dubaiStore = {
  store: 'Dubai',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiesPerCustomer: 3.7,
  storeHours: operationHours,
  cookiesSoldPerHour: [], //Results of cookies sales for the store, stored as a property of the store
  totalCookiesPerDay: 0,
  setCookiesSoldPerHour: function() {
    return this.cookiesSoldPerHour.push(Math.ceil(randomCustomersPerHour(this.minCustomers, this.maxCustomers) * this.avgCookiesPerCustomer)); // rounded up for fractions of cookies
  }
};

const parisStore = {
  store: 'Paris',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiesPerCustomer: 2.3,
  storeHours:operationHours,
  cookiesSoldPerHour: [], //Results of cookies sales for the store, stored as a property of the store
  totalCookiesPerDay: 0,
  setCookiesSoldPerHour: function() {
    return this.cookiesSoldPerHour.push(Math.ceil(randomCustomersPerHour(this.minCustomers, this.maxCustomers) * this.avgCookiesPerCustomer)); // rounded up for fractions of cookies
  }
};

const limaStore = {
  store: 'Lima',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiesPerCustomer: 4.6,
  storeHours: operationHours,
  cookiesSoldPerHour: [], //Results of cookies sales for the store, stored as a property of the store
  totalCookiesPerDay: 0,
  setCookiesSoldPerHour: function() {
    return this.cookiesSoldPerHour.push(Math.ceil(randomCustomersPerHour(this.minCustomers, this.maxCustomers) * this.avgCookiesPerCustomer)); // rounded up for fractions of cookies
  }
};


// Build out the sales.html page

// Build out the Seattle store sales
const seattleDivElem = document.getElementById('seattleSales');

function makeSeattleSalesDiv(seattleStore) {
  // Create the h2 heading and attach to the div element
  const h2Elem = document.createElement('h2');
  seattleDivElem.appendChild(h2Elem);
  h2Elem.textContent = seattleStore.store;

  // Create the ul tag and attach to the div element
  const ulElem = document.createElement('ul');
  seattleDivElem.appendChild(ulElem);

  // Create an li tag for each hour with cookie sales data
  for (let i = 0; i <operationHours.length; i++) {
    const liElem = document.createElement('li');
    seattleDivElem.lastChild.appendChild(liElem);
    seattleStore.setCookiesSoldPerHour();
    liElem.textContent = `${operationHours[i]} ${seattleStore.cookiesSoldPerHour[i]}`;
    seattleStore.totalCookiesPerDay += seattleStore.cookiesSoldPerHour[i];
    if (i === seattleStore.storeHours.length - 1) {
      const lastLiElem = document.createElement('li');
      seattleDivElem.lastChild.appendChild(lastLiElem);
      lastLiElem.textContent = `Total: ${seattleStore.totalCookiesPerDay}`;
    }
  }
}

 



// Build out the Tokyo store sales
const tokyoDivElem = document.getElementById('tokyoSales');

function makeTokyoSalesDiv(tokyoStore) {
  // Create the h2 heading and attach to the div element
  const h2Elem = document.createElement('h2');
  tokyoDivElem.appendChild(h2Elem);
  h2Elem.textContent = tokyoStore.store;

  // Create the ul tag and attach to the div element
  const uLElem = document.createElement('ul');
  tokyoDivElem.appendChild(uLElem);

  // Create an li tag for each hour with cookie sales data
  for (let i = 0; i < tokyoStore.storeHours.length; i++) {
    const liElem = document.createElement('li');
    tokyoDivElem.lastChild.appendChild(liElem);
    tokyoStore.setCookiesSoldPerHour();
    liElem.textContent = `${tokyoStore.storeHours[i]}  ${tokyoStore.cookiesSoldPerHour[i]}`;
    tokyoStore.totalCookiesPerDay += tokyoStore.cookiesSoldPerHour[i];
    if (i === tokyoStore.storeHours.length - 1) {
      const lastLiElem = document.createElement('li');
      tokyoDivElem.lastChild.appendChild(lastLiElem);
      lastLiElem.textContent = `Total: ${tokyoStore.totalCookiesPerDay}`;
    }
  }
}

// Build out the Dubai store sales
const dubaiDivElem = document.getElementById('dubaiSales');

function makeDubaiSalesDiv(dubaiStore) {
  // Create the h2 heading and attach to the div element
  const h2Elem = document.createElement('h2');
  dubaiDivElem.appendChild(h2Elem);
  h2Elem.textContent = dubaiStore.store;

  // Create the ul tag and attach to the div element
  const ulElem = document.createElement('ul');
  dubaiDivElem.appendChild(ulElem);

  // Create an li tag for each hour with cookie sales data
  for (let i = 0; i < dubaiStore.storeHours.length; i++) {
    const liElem = document.createElement('li');
    dubaiDivElem.lastChild.appendChild(liElem);
    dubaiStore.setCookiesSoldPerHour();
    liElem.textContent = `${dubaiStore.storeHours[i]} ${dubaiStore.cookiesSoldPerHour[i]}`;
    dubaiStore.totalCookiesPerDay += dubaiStore.cookiesSoldPerHour[i];
    if (i === dubaiStore.storeHours.length - 1) {
      const lastLiElem = document.createElement('li');
      dubaiDivElem.lastChild.appendChild(lastLiElem);
      lastLiElem.textContent = `Total: ${dubaiStore.totalCookiesPerDay}`;
    }
  }
}

// Build out the Paris store sales
const parisDivElem = document.getElementById('parisSales');

function makeParisSalesDiv(parisStore) {
  // Create the h2 heading and attach to the div element
  const h2Elem = document.createElement('h2');
  parisDivElem.appendChild(h2Elem);
  h2Elem.textContent = parisStore.store;

  // Create the ul tag and attach to the div element
  const ulElem = document.createElement('ul');
  parisDivElem.appendChild(ulElem);

  // Create an li tag for each hour with cookie sales data
  for (let i = 0; i < parisStore.storeHours.length; i++) {
    const liElem = document.createElement('li');
    parisDivElem.lastChild.appendChild(liElem);
    parisStore.setCookiesSoldPerHour();
    liElem.textContent = `${parisStore.storeHours[i]} ${parisStore.cookiesSoldPerHour[i]}`;
    parisStore.totalCookiesPerDay += parisStore.cookiesSoldPerHour[i];
    if (i === parisStore.storeHours.length - 1) {
      const lastLiElem = document.createElement('li');
      parisDivElem.lastChild.appendChild(lastLiElem);
      lastLiElem.textContent = `Total: ${dubaiStore.totalCookiesPerDay}`;
    }
  }
}

// Build out the Lima store sales
const limaDivElem = document.getElementById('limaSales');

function makeLimaSalesDiv(limaStore) {
  // Create the h2 heading and attach to the div element
  const h2Elem = document.createElement('h2');
  limaDivElem.appendChild(h2Elem);
  h2Elem.textContent = limaStore.store;

  // Create the ul tag and attach to the div element
  const ulElem = document.createElement('ul');
  limaDivElem.appendChild(ulElem);

  // Create an li tag for each hour with cookie sales data
  for (let i = 0; i < parisStore.storeHours.length; i++) {
    const liElem = document.createElement('li');
    limaDivElem.lastChild.appendChild(liElem);
    limaStore.setCookiesSoldPerHour();
    liElem.textContent = `${limaStore.storeHours[i]} ${limaStore.cookiesSoldPerHour[i]}`;
    limaStore.totalCookiesPerDay += limaStore.cookiesSoldPerHour[i];
    if (i === limaStore.storeHours.length - 1) {
      const lastLiElem = document.createElement('li');
      limaDivElem.lastChild.appendChild(lastLiElem);
      lastLiElem.textContent = `Total: ${limaStore.totalCookiesPerDay}`;
    }
  }
}



function randomCustomersPerHour(minCustomers, maxCustomers) {
  return Math.floor(Math.random() * (maxCustomers - minCustomers) + minCustomers);
}

/* let mountains = [
{location:seattleStore.store,
    

},
{location:tokyoStore.store,
    
},
{location:dubaiStore.store,
},
{location:limaStore.store,
},
{location:parisStore.store,
}
,
];

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(`   ${key}`);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (let key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let table = document.querySelector("table");
//let data = Object.keys(mountains[0]);
operationHours.unshift(" \r");
generateTableHead(table, operationHours);
generateTable(table, mountains); */
makeSeattleSalesDiv(seattleStore);
makeTokyoSalesDiv(tokyoStore);
makeDubaiSalesDiv(dubaiStore);
makeParisSalesDiv(parisStore);
makeLimaSalesDiv(limaStore);



