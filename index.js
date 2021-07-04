const emailjs = require('emailjs-com')

const submitForm = (e) =>{
    e.preventDefault();
    emailjs.sendForm('gmail','template_6rp5ka6', 'contact-form','user_B703cs1NIrutOTzG2OmS5')
    .then(result => alert('Your message has been sent. I will contact with you soon. Thank you!'))
    .catch(err =>alert('Opps! please try again later.'))
}
document.querySelector('.submitButton').addEventListener('click',submitForm)