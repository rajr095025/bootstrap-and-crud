//  get user by email request using fetch() 
let getUserForm = document.getElementById("get-user-form");
const getUserEmail = document.getElementById("get-user-email");
 getUserForm.addEventListener("submit", (e) => {
   e.preventDefault();
   console.log("button clicked");
   console.log(getUserEmail.value);
   let inputValue = getUserEmail.value;
   fetch(`http://localhost:3000/user/email/${inputValue}`)
    // Converting received data to JSON
    .then((response) => response.json())
    .then((json) => {
      // Create a variable to store HTML
        userid = json[0]._id;
        console.log(userid);
        getUser(userid);
        console.log(`userid ${userid} was printed`)
      });
 });



 // get user by id 
const getUserDetails = document.getElementById("get-user-details");
function getUser(inputValue) {
    fetch(`http://localhost:3000/user/${inputValue}`)
      // Converting received data to JSON
      .then((response) => response.json())
      .then((json) => {
        // Create a variable to store HTML
        console.log(json);
        document.getElementById("get-user-details").innerHTML = `<ul style="width: 1000px; ">
                          <li class="list-group-item list-group-item-success" style=" text-align : center; font-size: 25px; color:black; font-weight: bold; border : 3px solid black; width: 1000px; "> Email - ${json.email}</li>
                          <li class="list-group-item list-group-item-warning" style=" text-align : center; font-size: 25px; color:black; font-weight: bold; border : 3px solid black; width: 1000px;"> First Name - ${json.firstName}</li>
                          <li class="list-group-item list-group-item-info" style=" text-align : center;  font-size: 25px; color:black; font-weight: bold; border : 3px solid black; width: 1000px;"> Last Name - ${json.lastName}</li>
                          <li class="list-group-item list-group-item-dark" style=" text-align : center;  font-size: 25px; color:black; font-weight: bold; border : 3px solid black; width: 1000px;"> Mobile Number - ${json.phone}</li>
                          <li class="list-group-item list-group-item-danger" style=" text-align : center; font-size: 25px; color:black; font-weight: bold; border : 3px solid black; width: 1000px; "> User ID - ${json._id}</li>
                      </ul>`;
      });
  }
