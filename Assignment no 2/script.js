const trips = [
    {to:'Brazil',distance:1000},
    {to:'Chine',distance: 2500},
    {to:'India',distance: 3000}
 ]
 var miles=0.621371;
 function findDistance(){
     let value=prompt("Enter the country Name=")
     if(value=="Brazil"||value=="brazil"){
         document.write(`You Travel ${trips[0].distance} km distance to Brazil`)
         miles=trips[0].distance*miles
         document.getElementById("distance").innerHTML=`You travel ${miles} miles to Brazil`
         
     }
       else if(value=="China"||value=="china"){
         document.write(`You Travel ${trips[1].distance} km distance to China`)
         miles=trips[1].distance*miles
         document.getElementById("distance").innerHTML=`You travel ${miles} miles to China`
         
         
     }
       else if(value=="India"||value=="india"){
         document.write(`You Travel ${trips[2].distance} km distance to India`)
         miles=trips[2].distance*miles
         document.getElementById("distance").innerHTML=`You travel ${miles} miles to India`
         
     }
     else{
        alert("You enter wrong input")
     }
 }
 findDistance()



//  We have an object with computers. And what we want to know, HOW many computer we have with MAC and how many with WINDOWS.

const computers = [
   {type:'Laptop',price:124, os:'Windows'},
   {type:'Desk',price:124, os:'Mac'},
   {type:'Desk',price:124, os:'Windows'},
   {type:'Laptop',price:124, os:'Mac'},
   {type:'Laptop',price:124, os:'Windows'},
];
let macCount=0;
let windowCount=0
for(const computers of computers){
    if(computer.os=="Mac"){
        macCount++
    }
    else if(computers.os=="Window"){
        windowCount++
    }
}
console.log(`Macs are ${macCount}`)
console.log(`Windpws are ${window}`)