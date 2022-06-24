//moon items
let showcase = document.getElementById('showcase');
let result = document.getElementById('result-1')
let result_2 = document.getElementById('result-2')

//Mars Item


fetch('data.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendData(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});

//Moon function
function appendData(data) {
  //Moon title
  let titan = data.destinations[3].name;
  let titan_h1 = document.createElement('h1');
    titan_h1.innerHTML = titan;
  showcase.appendChild(titan_h1);

  //grabbing paragraph on moon object
  let titan_paragraph = data.destinations[3].description;
  let titan_p = document.createElement('p');
  titan_p.innerHTML = titan_paragraph;
  showcase.appendChild(titan_p)

  //grabbing distance object on moon
  let titan_distance = data.destinations[3].distance;
  let titan_d = document.createElement('h2');
  titan_d.innerHTML = titan_distance;
  result.appendChild(titan_d);

  //grabbing distance object on moon
  let titan_travel = data.destinations[3].travel;
  let titan_t = document.createElement('h2');
  titan_t.innerHTML = titan_travel;
  result_2.appendChild(titan_t);

}

//for mobile navigation bar
let openBtn = document.getElementById('btn-open');
let closeBtn = document.getElementById('btn-close')
let mobileMenu = document.getElementById('mobile_menu');

//opening the mobile menu
openBtn.addEventListener('click', function(){
    mobileMenu.style.display = 'block'
});

//closing the mobile menu 
closeBtn.addEventListener('click', function(){
    mobileMenu.style.display = 'none'
});

//close the mobile menu when clicked outside
document.addEventListener('click', function(e){
    if(e.target != mobileMenu && e.target != openBtn){
        mobileMenu.style.display = 'none';
    }
})

