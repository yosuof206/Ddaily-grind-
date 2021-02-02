/* 
here is the information we'll need to change for each coffee 
image src
alt tag
day of week 
name of coffee 
color 
description*/




let myDate = new Date();
let myDay = "";
let today = "";
let coffee = "",
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has('day')){ // if there is data on the QuaeryString use query string data if there is not a data use the ob
 myDay = urlParams.get('day');
}
else{
     myDay = myDate.getDay();
}


myDay=parseInt(myDay);
function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += `<p>
    <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
    <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily ${coffee.pic} special is <strong class="feature">Pumpkin Spice Latte</strong>, 
    which makes us wish it was always Fall, as this is one of our top sellers!</p>
    `;

 return myReturn;
}


switch(myDay){
    case 1:
        today = "Monday";
        coffee = {
            color:"pink",
            name:"Bubble Tea",
            pic:"images/bubble-tea.jpg",
            alt:"a picture of bubble tea",
            day:"Monday",
            desc:`I some bubble tea`


        };
    break;
    
    case 2:
        today = "Tuesday";
        coffee={
            color:"brown",
            name:"Drip",
            pic:"images/drip.jpg",
            alt:"a picture of drip coffee",
            day:"Tuesday",
            desc:`I like me some drip`


        };
    break;
    case 3:
        today = "Wensaday";
        coffee={
            color:"brown",
            name:"Drip",
            pic:"images/drip.jpg",
            alt:"a picture of drip coffee",
            day:"Tuesday",
            desc:`I like me some drip`


        };
    break;
    case 3:
        today = "Tuesday";
        coffee={
            color:"brown",
            name:"Drip",
            pic:"images/drip.jpg",
            alt:"a picture of drip coffee",
            day:"Tuesday",
            desc:`I like me some drip`


        };
    break;

    case 4:
        today = "Thuesday";
        coffee={
            color:"brown",
            name:"caramel-tea",
            pic:"images/care.jpg",
            alt:"a picture of drip coffee",
            day:"Thuesday",
            desc:`I like me some drip`


        };
    break;

    case 5:
        today = "Friday";
        coffee={
            color:"Green",
            name:"Cappuccino",
            pic:"images/Cappuccino.jpg",
            alt:"Friday",
            desc:`I like me some Cappuccino`


        };
    break;



}  
 console.log(coffee);
 document.getElementById("coffee-output").innerHML= coffeeTemplate(coffee);
 document.getElementsByName("HTML")[0].style.backgroundColor=coffee.color;
 document.getElementById("coffee-highlight").systle.color=coffee.color;
