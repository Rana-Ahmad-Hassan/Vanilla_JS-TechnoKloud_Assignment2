// Which of these variables would you change to let or const ?

const name = "James";
const employeeId = 25;
const eyes = "Blue";
let age = 25
let position = "Developer";
let salary = 2500;
const knowdlege = ['Javascript','PHP','REACT','Angular 4'];
let married = false;



// Part # 4:
// We have div, and if the user clicks on it, will get a cupcake with an amount to pay and the order number.Refactor the code to meet ES6 standards.



var cupcake = document.querySelector('.cupcake');
var container = document.querySelector('.orders')
 
const cupcakes = [
 {id:1,flavor:'Strawberry'},
 {id:2,flavor:'Apple'},
 {id:3,flavor:'Banana'}
]
 
var randomCupcake;
var orderNumber = 0;
var baseAmount = 5;
var finalAmount;
var dicountID = 2;
var dicountAmount = 3;
var message
 
cupcake.addEventListener("click",function(){
 // Select a random cupcake
 randomCupcake = Math.floor(Math.random() * cupcakes.length) + 0;
 
 // Increment the order number, we get a different order with each cupcake.
 orderNumber += 1;
 
 // Depending on the "dicountID" variable, this cupcake is on sale or not.
 finalAmount = dicountID == cupcakes[randomCupcake].id ? (baseAmount -dicountAmount ):baseAmount;
 
 // Create the message
 message = '<div>- You won a ' + cupcakes[randomCupcake].flavor + ' for ' + finalAmount + '$ , your order # is '+ orderNumber + '</div>'
 container.insertAdjacentHTML('beforeend',message)
 
});
