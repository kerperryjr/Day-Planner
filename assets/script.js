// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
document.querySelector(".container-lg").addEventListener("click", function (event) {

  if (event.target.matches(".btn")) {
    console.log(event.target)
    console.log(event.target.dataset.time)
    console.log(event.target.previousElementSibling.value)
    let time = event.target.dataset.time ;
    let textAreaValue = event.target.previousElementSibling.value;
    localStorage.setItem(time, textAreaValue)
  }

  else if (event.target.matches(".fa-save")) {
    console.log(event.target)
    console.log(event.target.dataset.time)

  }
  
  let plans = [".btn", ".fa-save"]

//storage to store hourly task that users insert
  // const button = localStorage.getItem(".plans");
  event.preventDefault();
})


let currentTime = dayjs().hour()
console.log(currentTime)
if (currentTime) {

//if current hour (green) previous hour(s) turn (grey) future hours are blue

  
}


document.querySelectorAll("textarea")[0].value = localStorage.getItem("9")
document.querySelectorAll("textarea")[1].value = localStorage.getItem("10")
document.querySelectorAll("textarea")[2].value = localStorage.getItem("11")
document.querySelectorAll("textarea")[3].value = localStorage.getItem("12")
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
