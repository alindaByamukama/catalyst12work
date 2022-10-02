// const form = document . <here we put the name of the form element> . <here we put the names of the field elements in the form>
const userName = document.registration.username
// const email = document.registration.email
const password = document.querySelector('#password')
const telephone = document.registration.phoneNumber
const date = document.registration.date
const country = document.registration.country
const gender = document.registration.gender
const luganda = document.registration.luganda
const kiswa = document.registration.kiswa
const itesot = document.registration.itesot

// create a fucntion to check phone number
const checkPhone = () => {
    // let aplhabet = /^[A-Za-z]+$/
    let phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    // testing values
    // 222-055-9034 | 321.789.4512 | 123 256 4587

    // check if empty
    if (telephone.value === "") {
        telephone.style.border = '2px solid red'
        telephone.focus()
    }

    // check whether value matches alphabet regex
    if (telephone.value.match(phoneRegex) ) {
        // checks if the telephone value matches the phone regex
        date.focus()
    } else {
        telephone.style.border = '2px solid red'
        telephone.focus()
    }
}

// checking password
const checkPassword = () => {
    let p_word = password.value
    let passwordRegex = /^[A-Za-z]\w{7,14}$/
    let passwordRegex2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
    let passwordRegex3 = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/

    
    // check if input is empty
    if (p_word == "") {
        alert('Please input your password')
        password.style.border = '2px solid red'
    }
    
    if (p_word.match(passwordRegex)) {
        password.style.border = '2px solid green'
    } else {
        password.style.border = '2px solid red'
        alert('Input Password and Submit 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter')
    }
}

// const checkEmail = () => {
//     let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

//     // check if empty
//     if (email.value === "") {
//         email.style.border = '2px solid red'
//         email.focus()
//     }

//     // 
//     if (email.value.match(emailRegex)) {
//         country.focus()
//     } else {
//         email.style.border = '2px solid red'
//     }

// }

//  let numbers = /^[0-9]+$/
// let alphanumeric = /^[0-9a-zA-Z]+$/
// let aplhabet = /^[A-Za-z]+$/
// let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/