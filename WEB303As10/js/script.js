document.addEventListener('DOMContentLoaded', function () {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');
  const termsCheckbox = document.getElementById('terms');
  const countriesSelect = document.getElementById('countries');
  const submitButton = document.getElementById('submitButton');
  const welcomeMessage = document.getElementById('welcomeMessage');

  // Function to check form validity
  function checkFormValidity() {
    const isUsernameValid = usernameInput.value.trim() !== '';
    const isPasswordValid = passwordInput.value.length >= 12;
    const isConfirmPasswordValid = confirmPasswordInput.value === passwordInput.value;
    const isTermsChecked = termsCheckbox.checked;
    const isCountrySelected = countriesSelect.value !== '';

    submitButton.disabled = !(
      isUsernameValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      isTermsChecked &&
      isCountrySelected
    );
  }

  // Event listeners for input fields and checkbox
  usernameInput.addEventListener('input', checkFormValidity);
  passwordInput.addEventListener('input', checkFormValidity);
  confirmPasswordInput.addEventListener('input', checkFormValidity);
  termsCheckbox.addEventListener('change', checkFormValidity);
  countriesSelect.addEventListener('change', checkFormValidity);

  // Load countries from external file
  const script = document.createElement('script');
  script.src = 'js/countries.js';
  script.async = true;
  script.onload = function () {
    countries.forEach((country) => {
      const option = document.createElement('option');
      option.value = country.code;
      option.textContent = country.name;
      countriesSelect.appendChild(option);
    });

    // Trigger form validity check after countries are populated
    checkFormValidity();
  };
  document.head.appendChild(script);

  // Form submission
  document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const username = usernameInput.value.trim();
    const selectedCountry = countriesSelect.options[countriesSelect.selectedIndex].text;
    const countryCode = countriesSelect.value;

    welcomeMessage.style.display = 'block';
    welcomeMessage.textContent = `Welcome ${username}! The country code you selected is ${countryCode}`;
  });
});
