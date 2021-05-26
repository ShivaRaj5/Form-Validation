console.log("This is a form validation tutorial")

const name=document.getElementById('name')
const email=document.getElementById('email')
const phone=document.getElementById('phone')
let validUser=false
let validEmail=false
let validPhone=false
$('#failure').hide()
$('#success').hide()

name.addEventListener('blur',()=>{
    console.log("Name is blurred")
    let re=/^[a-zA-Z]([0-9a-zA-Z]){2,10}$/
    let str=name.value
    let result=re.exec(str)
    console.log(re,str)
    if(re.test(str)){
        console.log("Username is valid")
        name.classList.remove('is-invalid')
        validUser=true
    }
       
    else{
        console.log("Uername is not valid")
        name.classList.add('is-invalid')
        validUser=false
    }
       
})

email.addEventListener('blur',()=>{
    console.log("email is blurred")
    let re=/^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]+){2,7}$/
    let str=email.value
    let result=re.exec(str)
    console.log(re,str)
    if(re.test(str)){
        console.log("Email is valid")
        email.classList.remove('is-invalid')
        validEmail=true
    }
       
    else{
        console.log("Email is not valid")
        email.classList.add('is-invalid')
        validEmail=false
    }
       
})

phone.addEventListener('blur',()=>{
    console.log("phone is blurred")
    let re=/^([0-9]){10}$/ //^ startswith
    let str=phone.value
    let result=re.exec(str)
    console.log(re,str)
    if(re.test(str)){
        console.log("Phone is valid")
        phone.classList.remove('is-invalid')
        validPhone=true
    }
       
    else{
        console.log("Phone is not valid")
        phone.classList.add('is-invalid')
        validPhone=false
    }
       
})
let submit=document.getElementById('submit')
submit.addEventListener('click',(e)=>{
    console.log("You clicked on submit")
    e.preventDefault()
    if(validEmail && validPhone && validUser){
        console.log("Submitting your form")
        let success=document.getElementById('success')
        let failure=document.getElementById('failure')
        success.classList.add('show')
        // failure.classList.remove('show')
        $('#failure').hide()
        $('#success').show()
    }
    else{
        console.log("One of the entries in phone,email or user is invalid")
        let failure=document.getElementById('failure')
        let success=document.getElementById('success')
        failure.classList.add('show')
        // success.classList.remove('show')
        $('#success').hide()
        $('#failure').show()
    }
})