
//Language button dropdown
function dropdown() {
    document.getElementById("myDropdownLang").classList.toggle("show");
}

//FAQ functions
//Open answer function
const faqQuestion = document.querySelectorAll('.faq-q-item');
const faqAnswer = document.querySelectorAll('.faq-a-item');
const faqIcon = document.querySelectorAll('.faq-icon');

function selectAnswer() {
    removeShow();
    removeRotate();
    const faqAnswer = document.querySelector(`#${this.id}-answer`);
    faqAnswer.classList.toggle("show");
    const faqIcon = document.querySelector(`#${this.id}-icon`);
    faqIcon.classList.add("rotate");
}

//Remove show class
function removeShow() {
    faqAnswer.forEach(item => item.classList.remove("show"));
}
//Rotate icon function
function removeRotate() {
    faqIcon.forEach(item => item.classList.remove("rotate"));
}
//Click
faqQuestion.forEach(item => item.addEventListener('click', selectAnswer));




