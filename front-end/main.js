//  GET request using fetch()
getAll();
function getAll(){
  fetch("http://localhost:3000/user")
    // Converting received data to JSON
    .then((response) => response.json())
    .then((json) => {
      // Create a variable to store HTML
      let li = ``;
      console.log(json);
      // Loop through each data and add a table row
      json.forEach((user) => {
        li += `
              <tr class="table-light">
                <td>${user._id} </td>
                <td>${user.email}</td>        
                <td>${user.firstName}</td>        
                <td>${user.lastName}</td>        
                <td>${user.phone}</td>  
                <td></td>
              </tr>`;
      })
      // Display result
      document.getElementById("users").innerHTML = li;
  });
}


// post user
let postbutton = document.getElementById("post-button");
let formMessage = document.getElementById("form-message");
postbutton.addEventListener('click',()=>{
    console.log("button clicked");
    formMessage.innerHTML=`<p>Added successfully<p>`
});




// GET request using fetch()
const inputText = document.getElementById("input");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  console.log(input.value);
  getUser(input.value);
});



// get user by id 
function getUser(inputValue) {
  fetch(`http://localhost:3000/user/${inputValue}`)
    // Converting received data to JSON
    .then((response) => response.json())
    .then((json) => {
      // Create a variable to store HTML
      console.log(json);
      document.getElementById("userDetails").innerHTML = `<ul>
                        <li> user id - ${json._id}</li>
                        <li> email - ${json.email}</li>
                        <li> First Name - ${json.firstName}</li>
                        <li> Last Name - ${json.lastName}</li>
                        <li> Mobile Number - ${json.phone}</li>
                    </ul>`;
    });
}



// get user by email
function getUserByEmail(inputValue) {
  let userid = 0;
  fetch(`http://localhost:3000/user/email/${inputValue}`)
    // Converting received data to JSON
    .then((response) => response.json())
    .then((json) => {
      // Create a variable to store HTML
        userid = json[0]._id;
        console.log(userid);
      });
}




//Delete request using fetch()
let formDelete = document.getElementById("formDelete");
const inputTextDelete = document.getElementById("inputDelete");
const deletedMessage = document.getElementById("deletedMessage")
formDelete.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  console.log("please show me");
  console.log(inputDelete.value)
  deleteUser(inputDelete.value);
});

function deleteUser(inputValue) {
  fetch(`http://localhost:3000/user/${inputValue}`, { method: 'DELETE' })
    // Converting received data to JSON
    .then((response) => response.json())
    .then((json) => {
      // Create a variable to store HTML
      console.log(json.message);
      //deletedMessage.innerHTML = `<p>${json.message}<p>`;
    });
}


//  Delete by email request using fetch() 
let formDelete2 = document.getElementById("delete-form");
const deletedMessage2 = document.getElementById("delete-message")
const deleteEmail = document.getElementById("delete-email")
const deleteSubmitButton = document.getElementById("delete-button");
 formDelete2.addEventListener("submit", (e) => {
   e.preventDefault();
   console.log("button clicked");
   console.log(deleteEmail.value);
   let inputValue = deleteEmail.value;
   fetch(`http://localhost:3000/user/email/${inputValue}`)
    // Converting received data to JSON
    .then((response) => response.json())
    .then((json) => {
      // Create a variable to store HTML
        userid = json[0]._id;
        console.log(userid);
        deleteUser(userid);
        console.log(`userid ${userid} was deleted`)
      });
 });





// updating existing user
let updateForm = document.getElementById("update-form");
updateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let userId = document.getElementById("update-user-id");
  let email = document.getElementById("update-email");
  let firstName = document.getElementById("update-first-name");
  let lastName = document.getElementById("update-last-name");
  let phone = document.getElementById("update-phone");
  let updateMessage = document.getElementById("update-message");
  if (userId.value == "" || email.value == "") {
    updateMessage.innerHTML = 'User Id and email cannot be null';
    // throw error
  } else {
    // perform operation with form input
    console.log(userId.value +" "+ email.value+" "+ firstName.value+" "+lastName.value+" "+phone.value+" ");
    updateUser();
    function updateUser() {
      fetch(`http://localhost:3000/user/${userId.value}`, {
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
        getAll();
    }
  }
});




// POST request using fetch()
// fetch("https://jsonplaceholder.typicode.com/posts", {

//     // Adding method type
//     method: "POST",

//     // Adding body or contents to send
//     body: JSON.stringify({
//         title: "foo",
//         body: "bar",
//         userId: 1
//     }),

//     // Adding headers to the request
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// })

// // Converting to JSON
// .then(response => response.json())

// // Displaying results to console
// .then(json => console.log(json));
