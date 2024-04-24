const checkErr = () => {
  const usernameInput = document.querySelector(".input-text[name='username']");
  const emailInput = document.querySelector(".input-text[name='email']");
  const passwordInput = document.querySelector(".input-password[name='password']");
  const confirmPasswordInput = document.querySelector(".input-password[name='confirmPassword']");
  const textErr = document.getElementById("text-err");

  // Kiểm tra User
  const username = usernameInput.value.trim();
  if (username === "") {
    textErr.textContent = "Username is required";
    usernameInput.classList.add("error");
    return; // Dừng kt nếu lỗi
  }else{
    usernameInput.classList.remove("error");
  }

  // Kiểm tra email
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    textErr.textContent = "Email is required";
    emailInput.classList.add("error");
    return; // Dừng kt nếu lỗi
  } else if (!emailRegex.test(email)) {
    textErr.textContent = "Invalid email format";
    emailInput.classList.add("error");
    return; // Dừng kt nếu ỗi
  }else{
    emailInput.classList.remove("error");
  }

  // Kiểm tra password
  const password = passwordInput.value.trim();
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ ;
  if (password === "") {
    textErr.textContent = "Password is required";
    passwordInput.classList.add("error");
    return; // Dừng kt nếu lỗi
  } else if (!passwordRegex.test(password)) {
    textErr.textContent = "Password must be at least 8 characters long, at least one uppercase letter, one lowercase letter, one number and one special characte";
    passwordInput.classList.add("error");
    return; // Dừng kt nếu lỗi
  }else{
    passwordInput.classList.remove("error");
  }

  // Kiểm tra xác nhận password
  const confirmPassword = confirmPasswordInput.value.trim();
  if (confirmPassword === "") {
    textErr.textContent = "Confirm password is required";
    confirmPasswordInput.classList.add("error");
    return; // Dừng kt nếu lỗi
  } else if (confirmPassword !== password) {
    textErr.textContent = "Passwords do not match";
    confirmPasswordInput.classList.add("error");
    return; // Dừng kt nếu lỗi
  }else{
    confirmPasswordInput.classList.remove("error");
  }
};