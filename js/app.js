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
// initial values to arrange things inside the  code
let totalStrores=[];
let allStoresPursPerHour=[];
let totalByFinalDay=0;
let trafficPerHour =[0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6];

// constructor for the 6 Stores 
function CookiesShops(store,min,max,avg,operationHours){
this.store=store;
this.min=min;
this.max=max;
this.avg=avg;
this.operationHours=operationHours;
this.cookiesperHour=[];
this.cookiePerDay=0;
// push the constructor to the array
totalStrores.push(this);



}
console.log(totalStrores);
//==============================================prototypes section==================================================================\\
//calculate random value for cookies per hour.
CookiesShops.prototype.setCookiesSoldPerHour=function(){
  for(var i=0;i<operationHours.length;i++){
  this.cookiesperHour[i]= Math.ceil(randomCustomersPerHour(this.min, this.max) * this.avg*trafficPerHour[i]); 
  }
}
//create the table body 

CookiesShops.prototype.createTableBody=function() {
   //create the start of the table body 
 const tableBodyElBase=document.getElementById('tb');
 const tableRow=document.createElement('tr');
 tableBodyElBase.appendChild(tableRow);

 // create the header stuffs here.
 const thElem = document.createElement('th');
 thElem.setAttribute('scope', 'row');

  thElem.textContent = `${this.store}`;
  tableRow.appendChild(thElem);

   // create the data cells to get the  location and cookie sales data

   for(let i = 0; i < this.operationHours.length; i++) {
    const tdElem = document.createElement('td');
    tdElem.textContent = `${this.cookiesperHour[i]}`;
    tableRow.appendChild(tdElem);
    this.cookiePerDay += this.cookiesperHour[i];
  }
  const tdTotal = document.createElement('td');
  tdTotal.textContent = this.cookiePerDay;
  tableRow.appendChild(tdTotal);
};
console.log(this.cookiePerDay);


//===================================================functions section=======================================================\\
// random number function between Min & Max.
function randomCustomersPerHour(minCustomers, maxCustomers) {
  return Math.floor(Math.random() * (maxCustomers - minCustomers) + minCustomers);
}
// calculate the total cookies per hour during the day.
function totalsDuringDay() {
  for (var i = 0; i < operationHours.length; i++) {
    let totalStore = 0;
    for (var k = 0; k < totalStrores.length; k++) {
      totalStore += totalStrores[k].cookiesperHour[i];
    }
    allStoresPursPerHour[i] = totalStore;
  }

  for (let i = 0; i < allStoresPursPerHour.length; i++) {
    totalByFinalDay += allStoresPursPerHour[i];
  }

}
// create the header for our table. 
function tableHeader() {
  const parentEl=document.getElementById('cookieSale');
  const tableEl=document.createElement('table');
  tableEl.setAttribute('width', '80%');
  parentEl.appendChild(tableEl);
  const tableCaption=document.createElement('caption');
  tableCaption.textContent='Cookies Sales';
  tableEl.appendChild(tableCaption);

  const headerEl=document.createElement('thead');
  tableEl.setAttribute('id', 'table');
  tableEl.appendChild(headerEl);

  const rowHeadEl=document.createElement('tr');
  tableEl.appendChild(rowHeadEl);

  // to make the first cell in the table empty.
  const h1EmptyEl=document.createElement('th');
  h1EmptyEl.textContent=' ';
  rowHeadEl.appendChild(h1EmptyEl);
//to show the avilable hours for shops on the header of the table.
for(var x=0;x<operationHours.length;x++)
{
const theadEl=document.createElement('th');
theadEl.setAttribute('scope', 'col');

theadEl.textContent=operationHours[x];
rowHeadEl.appendChild(theadEl);

}

const th2Elem = document.createElement('th');
th2Elem.setAttribute('scope', 'col');
th2Elem.textContent = 'Daily Total';
rowHeadEl.appendChild(th2Elem);

const tableBodyEl=document.createElement('tbody');
tableBodyEl.setAttribute('id', 'tb');

tableEl.appendChild(tableBodyEl);

}
// create the footer for the table.
function tableFooter() {
  const parentEl=document.getElementById('table');
  const footEl=document.createElement('tfoot');
  parentEl.setAttribute('id','tf');
  parentEl.appendChild(footEl);

  const tableTrFootEl=document.createElement('tr');
  footEl.appendChild(tableTrFootEl);

  const tableHeaderFootEl =document.createElement('th');
  tableHeaderFootEl.textContent='Totaly Hours'
  tableTrFootEl.appendChild(tableHeaderFootEl);

  for(var i=0;i<operationHours.length;i++){

    const tableTdFootEl=document.createElement('td');
    tableTdFootEl.textContent= allStoresPursPerHour[i];
  tableTrFootEl.appendChild(tableTdFootEl);
  }
const totalsFootEl=document.createElement('td');
totalsFootEl.textContent = totalByFinalDay;
tableTrFootEl.appendChild(totalsFootEl);



}
// create new stores
let seattle = new CookiesShops('Seattle', 23, 65, 6.3, operationHours);
let tokyo = new CookiesShops('Tokyo', 3, 24, 1.2, operationHours);
let dubai = new CookiesShops('Dubai', 11, 38, 3.7, operationHours);
let paris = new CookiesShops('Paris', 20, 38, 2.3, operationHours);
let lima = new CookiesShops('Lima', 2, 16, 4.6, operationHours);
// calling each store with his object.
tableHeader();
seattle.setCookiesSoldPerHour();
seattle.createTableBody();

tokyo.setCookiesSoldPerHour();
tokyo.createTableBody();

dubai.setCookiesSoldPerHour();
dubai.createTableBody();

paris.setCookiesSoldPerHour();
paris.createTableBody();

lima.setCookiesSoldPerHour();
lima.createTableBody();
totalsDuringDay();
 tableFooter();


 
 




 



