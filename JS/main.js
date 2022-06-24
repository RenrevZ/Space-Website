let openBtn = document.getElementById('btn-open');
let closeBtn = document.getElementById('btn-close')
let mobileMenu = document.getElementById('mobile_menu');

//opening the mobile menu
openBtn.addEventListener('click', function(){
    mobileMenu.style.display = 'block';
});

//closing the mobile menu 
closeBtn.addEventListener('click', function(){
    mobileMenu.style.display = 'none';
});

//close the mobile menu when clicked outside
document.addEventListener('click', function(e){
    if(e.target != mobileMenu && e.target != openBtn){
        mobileMenu.style.display = 'none';
    }
});