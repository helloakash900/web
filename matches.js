// write js code here corresponding to matches.html

var matchArr = JSON.parse(localStorage.getItem("schedule"));
console.log(matchArr);
var Add_arr = JSON.parse(localStorage.getItem("schedule")) || [];

function handleFilter() {
  var selected = document.getElementById("filterVenue").value;
  console.log(selected);
  var filteredList = matchArr.filter(function (elem) {
    return elem.location == selected;
  });
  console.log(filteredList);
  displaydata(filteredList);
}


displaydata(matchArr)
function displaydata(data) {
   document.querySelector("tbody").innerHTML = "";
  data.forEach(function (elem) {
    var tr = document.createElement("tr");
    
    var td1 = document.createElement("td");
    td1.innerText = elem.matchNumber;

    var td2 = document.createElement("td");
    td2.innerText = elem.teamA;

    var td3 = document.createElement("td");
    td3.innerText = elem.teamB;

    var td4 = document.createElement("td");
    td4.innerText = elem.date;

    var td5 = document.createElement("td");
    td5.innerText = elem.location;

    var td6 = document.createElement("td");
    td6.innerText = "Add as Favourites";
    td6.style.color = "green  ";
    td6.style.cursor = "pointer";

    td6.addEventListener("click", function () {
      addFav(elem);
    });
    tr.append(td1, td2, td3, td4, td5, td6);
    document.querySelector("tbody").append(tr)
    
    });
}

function addFav(elem) {
  Add_arr.push(elem)
  localStorage.setItem("favourites",JSON.stringify(Add_arr));
}