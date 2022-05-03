// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit", submitForm)
var arr_obj = JSON.parse(localStorage.getItem("schedule"))||[]
function submitForm() {
  event.preventDefault()

  var obj_form = {
    matchNumber: masaiForm.matchNum.value,
    teamA: masaiForm.teamA.value,
    teamB: masaiForm.teamB.value,
    date: masaiForm.date.value,
    location:masaiForm.venue.value
    
  };
 // console.log(obj_form)
  arr_obj.push(obj_form)
  localStorage.setItem("schedule", JSON.stringify(arr_obj));
  
  window.location.href = "matches.html"
}
