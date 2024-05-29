let planType;

//buttons and anchor tag
const infoBtn = document.getElementById("info-btn");
const planBtn = document.getElementById("plan-btn");
const planAnc = document.getElementById("plan-anc");
const addBtn = document.getElementById("add-btn");
const addAnc = document.getElementById("add-anc");
const sumBtn = document.getElementById("sum-btn");
const sumAnc = document.getElementById("sum-anc");

// nav anchor
const navInfo = document.getElementById("your-personal");
const navPlan = document.getElementById("your-plan");
const navAdd = document.getElementById("your-add");
const navSum = document.getElementById("your-summary");

//pages
const infoPage = document.getElementById("personal");
const planPage = document.getElementById("plan");
const addPage = document.getElementById("add");
const summaryPage = document.getElementById("summary");
const confirmPage = document.getElementById("confirm");

//year
const planYear = document.getElementById("yearly-plan");
const planMonth = document.getElementById("monthly-plan");
const addYear = document.getElementById("yearly-add");
const addMonth = document.getElementById("monthly-add");
const summaryYear = document.getElementById("yearly-sum");
const summaryMonth = document.getElementById("monthly-sum");

//form validation
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("number");

function personalInfoValidation() {
  const isEmpty = (value) => value.trim() === "";
  const isFullNameEmpty = isEmpty(fullName.value);
  const isEmailEmpty = isEmpty(email.value);
  const isPhoneNumberEmpty = isEmpty(phoneNumber.value);
  const nameError = document.getElementById("error1");
  const emailError = document.getElementById("error2");
  const numberError = document.getElementById("error3");

  let hasError = false;

  // Clear previous error states
  fullName.classList.remove("error");
  nameError.classList.add("hidden");
  email.classList.remove("error");
  emailError.classList.add("hidden");
  phoneNumber.classList.remove("error");
  numberError.classList.add("hidden");

  // Validate Full Name
  if (isFullNameEmpty) {
    fullName.classList.add("error");
    nameError.classList.remove("hidden");
    hasError = true;
  }

  // Validate Email
  if (isEmailEmpty) {
    email.classList.add("error");
    emailError.classList.remove("hidden");
    hasError = true;
  } else if (!validateEmail(email.value)) {
    email.classList.add("error");
    emailError.textContent = "Please enter a valid email address.";
    emailError.classList.remove("hidden");
    hasError = true;
  }

  // Validate Phone Number
  if (isPhoneNumberEmpty) {
    phoneNumber.classList.add("error");
    numberError.classList.remove("hidden");
    hasError = true;
  } else if (!validatePhoneNumber(phoneNumber.value)) {
    phoneNumber.classList.add("error");
    numberError.textContent = "Please enter a valid phone number.";
    numberError.classList.remove("hidden");
    hasError = true;
  }

  return !hasError;
}

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validatePhoneNumber(phoneNumber) {
  const phonePattern = /^\+\d{1,3}\d{3}\d{3}\d{3,4}$/;
  return phonePattern.test(phoneNumber);
}
infoBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission
  if (personalInfoValidation()) {
    // Proceed with form submission or further logic
    infoPage.classList.add("hidden");
    plan.classList.remove("hidden");
  }
});

infoPage.addEventListener("mouseenter", () => {
  navInfo.style.backgroundColor = "#bfe2fd";
  navInfo.style.color = "#042e60";
  navPlan.style.backgroundColor = "blue";
  navAdd.style.backgroundColor = "blue";
  navSum.style.backgroundColor = "blue";
});

function myFunction() {
  const switchBtn = document.getElementById("input2");

  if (switchBtn.checked) {
    planMonth.classList.add("hidden");
    planYear.classList.remove("hidden");
    planType = "year";
  } else {
    planYear.classList.add("hidden");
    planMonth.classList.remove("hidden");
    planType = "month";
  }
}

planBtn.addEventListener("click", () => {
  planPage.classList.add("hidden");
  addPage.classList.remove("hidden");
  if (planType === "year") {
    addMonth.classList.add("hidden");
    addYear.classList.remove("hidden");
  } else {
    addYear.classList.add("hidden");
    addMonth.classList.remove("hidden");
  }
});

planAnc.addEventListener("click", () => {
  plan.style.display = "none";
  infoPage.style.display = "block";
  addPage.style.display = "none";
  summaryPage.style.display = "none";
  confirmPage.style.display = "none";
});

planPage.addEventListener("mouseenter", () => {
  navPlan.style.backgroundColor = "#bfe2fd";
  navPlan.style.color = "#042e60";
  navInfo.style.backgroundColor = "blue";
  navAdd.style.backgroundColor = "blue";
  navSum.style.backgroundColor = "blue";
});

addBtn.addEventListener("click", () => {
  addPage.classList.add("hidden");
  summaryPage.classList.remove("hidden");
  if (planType === "year") {
    summaryMonth.classList.add("hidden");
    summaryYear.classList.remove("hidden");
  } else {
    summaryYear.classList.add("hidden");
    summaryMonth.classList.remove("hidden");
  }
});

addAnc.addEventListener("click", () => {
  plan.style.display = "block";
  infoPage.style.display = "none";
  addPage.style.display = "none";
  summaryPage.style.display = "none";
  confirmPage.style.display = "none";
});

addPage.addEventListener("mouseenter", () => {
  navAdd.style.backgroundColor = "#bfe2fd";
  navAdd.style.color = "#042e60";
  navInfo.style.backgroundColor = "blue";
  navPlan.style.backgroundColor = "blue";
  navSum.style.backgroundColor = "blue";
});

sumBtn.addEventListener("click", () => {
  plan.style.display = "none";
  infoPage.style.display = "none";
  addPage.style.display = "none";
  summaryPage.style.display = "none";
  confirmPage.style.display = "block";
});

sumAnc.addEventListener("click", () => {
  plan.style.display = "none";
  infoPage.style.display = "none";
  addPage.style.display = "block";
  summaryPage.style.display = "none";
  confirmPage.style.display = "none";
});
summaryPage.addEventListener("mouseenter", () => {
  navSum.style.backgroundColor = "#bfe2fd";
  navSum.style.color = "#042e60";
  navInfo.style.backgroundColor = "blue";
  navAdd.style.backgroundColor = "blue";
  navPlan.style.backgroundColor = "blue";
});
