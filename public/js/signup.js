const signup = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#user').value.trim();
  const password = document.querySelector('#password').value.trim();

  const errorMes = document.getElementById('textError')

  if (!username || !password) {
    errorMes.style.display = 'block'
    errorMes.innerHTML = 'Cannot be empty!'
    return
  }
  
  if (password.length < 8) {
    errorMes.style.display = 'block'
    errorMes.innerHTML = 'Password must be at least 8 characters'
    return
  }

  if (username && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      if (response.statusText === "Username already exists!") {
        errorMes.style.display = 'block'
        errorMes.innerHTML = 'Username already exists!'
      } else {
        errorMes.style.display = 'block'
        errorMes.innerHTML = 'Something went wrong!'
      }
    }
  }
};

document.querySelector('#signup-button').addEventListener('click', signup)