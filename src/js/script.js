document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu');
    const navigation = document.querySelector('.navigation');

    menuIcon.addEventListener('click', function () {
        navigation.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); 

            
            var email = document.querySelector('#contactForm input[name="email"]').value;
            var feedback = document.querySelector('#contactForm textarea[name="feedback"]').value;


            if (name === '' || email === '' || feedback === '') {
                alert('Please fill in all fields.');
                return;
            }


            var feedbackData = {
                name: name,
                email: email,
                feedback: feedback
            };



            console.log('Feedback Submitted:', feedbackData);


            contactForm.reset();


            alert('Feedback submitted successfully!');
        });
    }
});
