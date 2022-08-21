document.write("we are here");
const header = document.getElementById("categories");
const services = document.getElementById("services");
const registerModal = document.getElementById("registerModal");
function showCategoriesDropdown() {
  header.classList.remove("displayNone");
  services.classList.add("displayNone");
}
function hideCategoriesDropdown() {
  header.classList.add("displayNone");
}
function showServicesDropdown() {
  services.classList.remove("displayNone");
  header.classList.add("displayNone");
}
function hideServicesDropdown() {
  services.classList.add("displayNone");
}
function openModal(value) {
  // console.log(document.getElementsByClassName("loginForm"))
  const loginFormHolder = document.getElementById("loginForm");
  const loginFormImage = document.getElementById("loginImage");
  const registerFormImage = document.getElementById("registerImage");
  const registerFormHolder = document.getElementById("registerForm");
  console.log(value, loginFormHolder);
  if (value == "register") {
    loginFormHolder.classList.add("displayNone");
    loginFormImage.classList.add("displayNone");
    registerFormHolder.classList.remove("displayNone");
    registerFormImage.classList.remove("displayNone");
  } else {
    registerFormHolder.classList.add("displayNone");
    registerFormImage.classList.add("displayNone");
    loginFormHolder.classList.remove("displayNone");
    loginFormImage.classList.remove("displayNone");
  }
  registerModal.classList.remove("displayNone");
}
function closeModal() {
  registerModal.classList.add("displayNone");
}
const placesToVisit = [
  {
    image: "https://cdn.britannica.com/68/5068-004-72A3F250/Flag-Nigeria.jpg",
    name: "Place A",
    location: "Bradford",
    price: 300,
  },
  {
    image: "https://cdn.britannica.com/68/5068-004-72A3F250/Flag-Nigeria.jpg",
    name: "Place B",
    location: "Lead",
    price: 200,
  },
  {
    image: "https://cdn.britannica.com/68/5068-004-72A3F250/Flag-Nigeria.jpg",
    name: "Place C",
    location: "Manchester",
    price: 500,
  },
  {
    image: "https://cdn.britannica.com/68/5068-004-72A3F250/Flag-Nigeria.jpg",
    name: "Place D",
    location: "London",
    price: 1000,
  },
  {
    image: "https://cdn.britannica.com/68/5068-004-72A3F250/Flag-Nigeria.jpg",
    name: "Place E",
    location: "Wales",
    price: 50,
  },
];

const container = document.getElementById("lysi");
function appendHtml(parent, child, position = "afterbegin") {
  parent.insertAdjacentHTML(position, child);
}

placesToVisit.forEach(({ image, name, location }) => {
  appendHtml(
    container,
    `<div>
  <h3>${name}</h3>
  <img src="${image}" style="max-width:50" />
  <p>${location}</p>
  </div>`
  );
});

function getSundaysInDate(start, end){
  function getDateTime(date){
    return new Date(date).getTime()
  }
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  if( getDateTime(start) < getDateTime(end)){
  const daysIntervals = (getDateTime(end) - getDateTime(start))/millisecondsPerDay;
  const daysToNextTargetDay = 7- new Date(start).getDay();
  const sundaysInDate = Math.floor((daysIntervals - daysToNextTargetDay) / 7)
  console.log(`Number of Sundays within ${start} and ${end} is ${sundaysInDate}`)
  }else console.log("invalid date")
}
getSundaysInDate("07-14-2022", "07-29-2022");

function getElementFromArray(arr) {
  let result;
  if (Array.isArray(arr)) {
    const arrDividebyTwo = arr.length / 2;
    if (arr.length%2 === 0) {
      result = `${arr[arrDividebyTwo - 1]}-${arr[arrDividebyTwo]}`;
    } else {
      result = arr[Math.floor(arrDividebyTwo)];
    }
  } else {
    result = "Sorry not an array";
  }
  console.log(result);
}
getElementFromArray([9, 90.67, "8", 5.6, 90]);
getElementFromArray(["apple", "mango", "pineapple", "carrot", "orrange"]);
getElementFromArray([1, 2, 3, 4, 5]);
// alert(900);


function getSecondLowestAndLargestNumber(arr){
  const elements = arr.sort((a, b)=>a-b);
  let highest = elements[0];
  let smallest = elements[0];
  let higher = elements[0];
  let smaller = elements[0];
  for(let i = 1; i < elements.length; ++i) {
    if(smallest != elements[i]){
      if(smaller > elements[i]){
        if(smallest > elements[i]){
            smaller = smallest
            smallest = elements[i]
        }else  smaller = elements[i]
      }
    }
    if(highest != elements[i]){
      if(higher < elements[i]){
        if(highest < elements[i]){
          higher = highest
          highest = elements[i]
        }else higher=elements[i]
      }
    }
  }
  console.log(higher, smaller)
}
getSecondLowestAndLargestNumber([ 12, 1 , 3, 4, 65, 7, -43, 8, 3, 8, 45, 2 ])


function getAmountToSave(amount, date){
  const futureTime = new Date(date)
  const presentTime = Date.now()
  const millisecondPerMonth = 1000*60*60*24*30
  const time =Math.ceil((futureTime-presentTime)/millisecondPerMonth);
  const monthlySavings = Math.ceil(amount/time)
  console.log(monthlySavings)
}
getAmountToSave(10000000, "10-31-2023")
