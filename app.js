progressCircle(85,'.circular_progress.html_css','#c28926',50)
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