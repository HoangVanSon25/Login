const totalPassword = () => {
  const input = document.querySelector(".input-password");
  const eyeOpen = document.querySelector(".eye-open");
  const eyeClose = document.querySelector(".eye-close");
  if(input.type === "password"){
    eyeOpen.style.display = "block";
    eyeClose.style.display = "none";
    input.type = "text";
  }else{
    eyeOpen.style.display = "none";
    eyeClose.style.display = "block";
    input.type = "password";
  }
}