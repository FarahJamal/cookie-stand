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

const parentEl=document.getElementById('cookieSale');
const tableEl=document.createElement('table');
parentEl.appendChild(tableEl);
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


// create new stores
let seattle = new CookiesShops('Seattle', 23, 65, 6.3, operationHours);
let tokyo = new CookiesShops('Tokyo', 3, 24, 1.2, operationHours);
let dubai = new CookiesShops('Dubai', 11, 38, 3.7, operationHours);
let paris = new CookiesShops('Paris', 20, 38, 2.3, operationHours);
let lima = new CookiesShops('Lima', 2, 16, 4.6, operationHours);
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
  tableEl.setAttribute('width', '80%');
  const tableCaption=document.createElement('caption');
  tableCaption.textContent='Cookies Sales';
  tableEl.appendChild(tableCaption);

  const headerEl=document.createElement('thead');
  tableEl.setAttribute('id', 'table');
  tableEl.appendChild(headerEl);

  const rowHeadEl=document.createElement('tr');
  headerEl.appendChild(rowHeadEl);

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
  const footEl=document.createElement('tfoot');

  //const parentEl=document.getElementById('table');
  tableEl.setAttribute('id','tf');
  tableEl.appendChild(footEl);

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



/*=========================================================store form function==============================================================*/


function allShops(){
  for(let i=0;i<totalStrores.length;i++){
  totalStrores[i].setCookiesSoldPerHour();
  totalStrores[i].createTableBody();
}
};


const addStoreForm =document.getElementById('addNewStore');

addStoreForm.addEventListener('submit',submitForm);
 
function submitForm(event) {
 event.preventDefault();
 //console.log(event);
 let storeName=event.target.locationName.value;
 let minCust=Number(event.target.minCust.value);
 let maxCust=Number(event.target.maxCust.value);
 let avgCust=Number(event.target.avgCust.value);
 //let workHours=operationHours;
 //console.log(typeof(maxCust),typeof(minCust),storeName,typeof(avgCust),workHours);

 let newStore=new CookiesShops(storeName,minCust,maxCust,avgCust,operationHours);

newStore.setCookiesSoldPerHour();

tableEl.deleteRow(totalStrores.length);
newStore.createTableBody();
totalsDuringDay();

tableFooter();
event.target.reset();


}




tableHeader();

allShops();
totalsDuringDay();
tableFooter();

/*=============================================dark mode function========================================================================== */
// toggle to the dark-mode.

var checkbox = document.getElementById("nightmode"); //get the checkbox to a variable

//check storage if dark mode was on or off
if (sessionStorage.getItem("mode") == "dark") {
  darkmode(); //if dark mode was on, run this funtion
} else {
  nodark(); //else run this funtion
}

//if the checkbox state is changed, run a funtion
checkbox.addEventListener("change", function() {
  //check if the checkbox is checked or not
  if (checkbox.checked) {
    darkmode(); //if the checkbox is checked, run this funtion
  } else {
    nodark(); //else run this funtion
  }
});

//function for checkbox when checkbox is checked
function darkmode() {
  document.body.classList.add("dark-mode"); //add a class to the body tag
  checkbox.checked = true; //set checkbox to be checked state
  sessionStorage.setItem("mode", "dark"); //store a name & value to know that dark mode is on
}

//function for checkbox when checkbox is not checked
function nodark() {
  document.body.classList.remove("dark-mode"); //remove added class from body tag
  checkbox.checked = false; //set checkbox to be unchecked state
  sessionStorage.setItem("mode", "light"); //store a name & value to know that dark mode is off or light mode is on
}



