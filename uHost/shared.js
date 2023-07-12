// html elements
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal')
var selectPlanButton = document.querySelectorAll('.plan button');
var noButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');


// Event Listeners
for(i=0; i<selectPlanButton.length;i++){
    selectPlanButton[i].addEventListener('click', openBackdropAndModal);
}

if(noButton)
    noButton.addEventListener('click', closeBackdropAndModal);


backdrop.addEventListener('click', function(){
    closeBackdropAndModal();
    mobileNav.classList.remove('open')
});


toggleButton.addEventListener('click', function(){
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})


// Helper Functions
function closeBackdropAndModal (){
    if(modal)
        modal.classList.remove('open');
    backdrop.classList.remove('open');
}

function openBackdropAndModal(){
    modal.classList.add('open')
    backdrop.classList.add('open')
}