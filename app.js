progressCircle(85,'.circular_progress.html_css','#c28926',30)
progressCircle(70,'.circular_progress.javascript','#7978ca',30)
progressCircle(80,'.circular_progress.php','lightblue',30)
progressCircle(95,'.circular_progress.mysql','rgb(94, 163, 94)',30)



function progressCircle(percentage,selector,color,speed){
    
    let selectedElement = document.querySelector(selector);
    let progressStartValue = 0;
    let progressEndValue = percentage;
    let theSpeed = speed;
    let theColor = color;

    let progress = setInterval(() => {
        progressStartValue++;
        if(progressStartValue == progressEndValue) {clearInterval(progress);}
        selectedElement.querySelector('.circular_value').textContent = `${progressStartValue}%`;
        selectedElement.style.background = `conic-gradient(${theColor} ${progressStartValue * 3.6}deg, #ededed 0deg )`;
    
    },theSpeed);
    
}

let form = document.forms['contact_form'];

form.addEventListener('click', (e) => {
    e.preventDefault();

    let name = form.querySelector('#name');
    let email = form.querySelector('#email');
    let message = form.querySelector('#message');
    
    
    if(e.target.tagName === 'BUTTON'){
        
        const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        let errors = false;
        if(email.value == '')
        {
            email.placeholder = 'Please enter an email';
            email.classList.add('error');
            email.focus();
            errors = true;
        }else if(!email.value.match(validEmail))
        {
            email.placeholder = 'Please enter a valid email';
            email.classList.add('error');
            email.focus();
            errors = true;
        }

        if(message.value == ''){
            message.placeholder = 'Sorry, this field cannot be empty';
            message.classList.add('error');
            errors = true;
        }else if(message.value.length < 5) {
            message.value = '';
            message.placeholder = 'Sorry, no enough characters for a propper message';
            message.classList.add('error');
            errors = true;
        }

        if(errors === false){
            sendEmail(name.value,email.value,message.value);
            name.value = '';
            email.value = '';
            message.value = '';
            email.classList.remove('error');
            email.placeholder = 'Your Email';
            message.classList.remove('error');
            message.placeholder = 'Your Message';
        }
    }
});

function sendEmail(name,email,message){
    let emailProps = {
        from_name: name + ' \n' + email,
        to_name: 'Meme',
        message: 'Message: \n' + message
    }

    emailjs.send('service_pzggdba', 'template_2v3di95', emailProps, 'Z3Cn8sTh15CNQb0Dv').then((response) => {
        console.log(response.status);
        
        const myText = 'Thank you. Will get in touch with you soon';
        let stopWriting = 0;
        let change = document.querySelector('#form_description');
            change.innerHTML = '';
            change.classList.add('message');
        let theInterval = setInterval(() => {

            if(stopWriting == (myText.length - 1)) {clearInterval(theInterval)}
            
            change.innerHTML += myText[stopWriting];

            console.log(myText[stopWriting]);

            stopWriting++
        },50);

    });
}