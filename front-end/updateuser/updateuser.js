//  get user by email request using fetch() 
let updateForm = document.getElementById("get-update-form");
const getUserEmail = document.getElementById("get-user-email");
 updateForm.addEventListener("submit", (e) => {
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
        updateUser(userid);
        console.log(`userid ${userid} was printed`)
      });
 });





 // get user by id 
 /*
const getUserDetails = document.getElementById("get-user-details");
function getUser(inputValue) {
    fetch(`http://localhost:3000/user/${inputValue}`)
      // Converting received data to JSON
      .then((response) => response.json())
      .then((json) => {
        // Create a variable to store HTML
        console.log(json);
        document.getElementById("get-user-details").innerHTML = `
                      <div class="alert alert-dismissible alert-warning">
                          <ul style="width: 1000px;">
                            <li class="list-group-item list-group-item-success" style=" text-align : center; font-size: 25px; color:black; font-weight: bold; border : 3px solid black; width: 1000px; "> Email - ${json.email}</li>
                            <li class="list-group-item list-group-item-warning" style=" text-align : center; font-size: 25px; color:black; font-weight: bold; border : 3px solid black; width: 1000px;"> First Name - ${json.firstName}</li>
                            <li class="list-group-item list-group-item-info" style=" text-align : center;  font-size: 25px; color:black; font-weight: bold; border : 3px solid black; width: 1000px;"> Last Name - ${json.lastName}</li>
                            <li class="list-group-item list-group-item-dark" style=" text-align : center;  font-size: 25px; color:black; font-weight: bold; border : 3px solid black; width: 1000px;"> Mobile Number - ${json.phone}</li>
                            <li class="list-group-item list-group-item-danger" style=" text-align : center; font-size: 25px; color:black; font-weight: bold; border : 3px solid black; width: 1000px; "> User ID - ${json._id}</li>
                          </ul>                       
                      </div>`;
      });
  }
*/




// updating existing user
function updateUser(userID){
      console.log(`${userID} please print this`);
      let userId = userID;
      let email = document.getElementById("get-user-email");
      let firstName = document.getElementById("firstName");
      let lastName = document.getElementById("lastName");
      let phone = document.getElementById("phone");
      let updateMessage = document.getElementById("form-message");
      if (userId.value == "" || email.value == "") {
        updateMessage.innerHTML = 'User Id and email cannot be null';
        // throw error
      } else {
        // perform operation with form input
        console.log(userId +" "+ email.value+" "+ firstName.value+" "+lastName.value+" "+phone.value+" ");
        updateUser();
        function updateUser() {
          fetch(`http://localhost:3000/user/${userId}`, {
            method: 'PATCH',
            body: JSON.stringify({
              email: `${email.value}`,
              firstName : `${firstName.value}`,
              lastName : `${lastName.value}`,
              phone : `${phone.value}`
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            // Converting received data to JSON
            .then((response) => response.json())
            .then((json) => {
              // Create a variable to store HTML
              console.log(json.message);
              updateMessage.innerHTML = `<p>${json.message}<p>`;
            });
        }
      }
};
