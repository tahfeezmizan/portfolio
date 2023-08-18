function sendEmail() {
    Email.send({
      Host : "smtp.gmail.com",
      Username : "mizanahmed5316@gmail.com",
      Password : "Ga#Tah@Miz93",
      To : 'mizanahmed5316@gmail.com',
      From : document.getElementsById("email").value,
      Subject : "New Contact Form Enquiry",
      Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}