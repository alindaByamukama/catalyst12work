// const form = document . <here we put the name of the form element> . <here we put the names of the field elements in the form>
// example --> const email = document.registration.email
const doseAntibac = document.patientAdmission.doseAntibac;
const doseAntima = document.patientAdmission.doseAntima;
const frequencyAntibac = document.patientAdmission.frequencyAntibac;
const frequencyAntima = document.patientAdmission.frequencyAntima;
const other = document.patientAdmission.other;
const ebolaExperimentalBtn = document.patientAdmission.eet;
const completedBy = document.patientAdmission.completed;
const submitBtn = document.patientAdmission.submit;
const indicateIfYes = document.getElementById("ifYes");

// validate dose
const checkDoseAntibac = () => {
  let alphanumeric = /^[0-9a-zA-Z]+$/;

  if (doseAntibac.value === "") {
    doseAntibac.style.border = "2px solid red";
    doseAntibac.style.background = "#f4c2c7";
    doseAntibac.focus();
  }

  if (doseAntibac.value.match(alphanumeric)) {
    doseAntibac.style.border = "2px solid #28a745";
    doseAntibac.style.background = "#8ef4a6";
  } else {
    doseAntibac.style.border = "2px solid red";
    doseAntibac.style.background = "#f4c2c7";
    doseAntibac.focus();
  }
};
const checkDoseAntima = () => {
  let alphanumeric = /^[0-9a-zA-Z]+$/;

  if (doseAntima.value === "") {
    doseAntima.style.border = "2px solid red";
    doseAntima.style.background = "#f4c2c7";
    doseAntima.focus();
  }

  if (doseAntima.value.match(alphanumeric)) {
    doseAntima.style.border = "2px solid #28a745";
    doseAntima.style.background = "#8ef4a6";
  } else {
    doseAntima.style.border = "2px solid red";
    doseAntima.style.background = "#f4c2c7";
    doseAntima.focus();
  }
};
// validate frequency
const checkFrequencyAntibac = () => {
  let alphanumeric = /^[0-9a-zA-Z]+$/;

  if (frequencyAntibac.value === "") {
    frequencyAntibac.style.border = "2px solid red";
    frequencyAntibac.style.background = "#f4c2c7";
    frequencyAntibac.focus();
  }

  if (frequencyAntibac.value.match(alphanumeric)) {
    frequencyAntibac.style.border = "2px solid #28a745";
    frequencyAntibac.style.background = "#8ef4a6";
  } else {
    frequencyAntibac.style.border = "2px solid red";
    frequencyAntibac.style.background = "#f4c2c7";
    frequencyAntibac.focus();
  }
};
const checkFrequencyAntima = () => {
  let alphanumeric = /^[0-9a-zA-Z]+$/;

  if (frequencyAntima.value === "") {
    frequencyAntima.style.border = "2px solid red";
    frequencyAntima.style.background = "#f4c2c7";
    frequencyAntima.focus();
  }

  if (frequencyAntima.value.match(alphanumeric)) {
    frequencyAntima.style.border = "2px solid #28a745";
    frequencyAntima.style.background = "#8ef4a6";
  } else {
    frequencyAntima.style.border = "2px solid red";
    frequencyAntima.style.background = "#f4c2c7";
    frequencyAntima.focus();
  }
};
// validate other
const checkOther = () => {
  let alphabet = /^[A-Za-z]+$/;

  if (other.value === "") {
    other.style.border = "2px solid red";
    other.style.background = "#f4c2c7";
    other.focus();
  }

  if (other.value.match(alphabet)) {
    other.style.border = "2px solid #28a745";
    other.style.background = "#8ef4a6";
  } else {
    other.style.border = "2px solid red";
    other.style.background = "#f4c2c7";
    other.focus();
  }
};

// validate experimental treatment
const displayOptions = () => {
  indicateIfYes.classList.remove("hidden");
};

// validate form completed by
const checkCompletedBy = () => {
  let alphabet = /^[A-Za-z]+$/;
  let min = 3,
    max = 25;

  if (completedBy.value === "") {
    completedBy.style.border = "2px solid red";
    completedBy.style.background = "#f4c2c7";
    completedBy.focus();
  }

  if (completedBy.value.match(alphabet)) {
    completedBy.style.border = "2px solid #28a745";
    completedBy.style.background = "#8ef4a6";
  } else {
    completedBy.style.border = "2px solid red";
    completedBy.style.background = "#f4c2c7";
    completedBy.focus();
  }

  if (completedBy.value.length >= min && completedBy.value.length <= max) {
    completedBy.style.border = "2px solid #28a745";
    completedBy.style.background = "#8ef4a6";
  } else {
    completedBy.style.border = "2px solid red";
    completedBy.style.background = "#f4c2c7";
    completedBy.focus();
  }
};

//  let numbers = /^[0-9]+$/
// let alphanumeric = /^[0-9a-zA-Z]+$/
// let alphabet = /^[A-Za-z]+$/
// let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
