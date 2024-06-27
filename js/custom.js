const popup = document.querySelector(".pop-up");
const buttonX = document.querySelector(".close-x");
const screen = document.querySelector(".overlay");

function showPopUp() {
  popup.classList.toggle("active");
  buttonX.classList.toggle("active");
  screen.classList.toggle("active");
}

function closePopUp() {
  popup.classList.remove("active");
  buttonX.classList.remove("active");
  screen.classList.remove("active");
}

buttonX.addEventListener("click", () => {
  popup.classList.remove("active");
  buttonX.classList.remove("active");
  screen.classList.remove("active");
});

document.addEventListener("click", (event) => {
  if (!popup.contains(event.target) && screen.contains(event.target)) {
    popup.classList.remove("active");
    buttonX.classList.remove("active");
    screen.classList.remove("active");
  }
});
const validateForm = (form) => {
   let isRequired = true;

   // Check for Required Firstname
   if (form.firstname.value.trim() === "") {
      setInvalid(form.firstname, "First name is required!");
      isRequired = false;
   } else {
      setSuccess(form.firstname);
   }

   // Check for Required Lastname
   if (form.lastname.value.trim() === "") {
      setInvalid(form.lastname, "Last name is required!");
      isRequired = false;
   } else {
      setSuccess(form.lastname);
   }

   // Check for Required Email
   if (form.email.value.trim() === "") {
      setInvalid(form.email, "Email is required!");
      isRequired = false;
   } else if (!validEmail(form.email.value.trim())) {
      setInvalid(form.email, "Email is not valid!");
      isRequired = false;
   } else {
      setSuccess(form.email);
   }

   // Check for Required Password
   if (form.password.value.trim() === "") {
      setInvalid(form.password, "Password is Required!");
      isRequired = false;
   } else if (form.password.value.length < 9) {
      setInvalid(form.password, "Password must be at least 9 characters!");
      isRequired = false;
   } else {
      setSuccess(form.password);
   }

   return isRequired;
};

// Set for Success Input Value
const setSuccess = (input) => {
   const formControl = input.parentElement;
   formControl.className = "form-control success";
};

// Set for Invalid Input Value
const setInvalid = (input, message) => {
   const formControl = input.parentElement;
   const formAlert = formControl.querySelector(".form-alert");
   formControl.className = "form-control invalid";
   formAlert.innerHTML = message;
};

// Set for Valid Email Value
const validEmail = (email) => {
   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(email.toLowerCase());
};
document.getElementById("close").addEventListener("click", function() {
  document.getElementById("wrapper").style.display = 'none';
});