const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const mail = event.currentTarget.elements.email;
  const pass = event.currentTarget.elements.password;

  if (mail.value === "" || pass.value === "") {
    return alert("Please fill in all the fields!");
  }

  const formData = { [mail.name]: mail.value, [pass.name]: pass.value };
  console.log(formData);
  formEl.reset();
}
