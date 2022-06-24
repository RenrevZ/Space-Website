//moon items
let showcase = document.getElementById('showcase');
let result = document.getElementById('result-1')
let result_2 = document.getElementById('result-2')


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
  let europa = data.destinations[2].name;
  let h2 = document.createElement('h2');
    h2.innerHTML = europa;
  showcase.appendChild(h2);
  //grabbing paragraph on moon object
  let europa_paragraph = data.destinations[2].description;
  let europa_p = document.createElement('p');
  europa_p.innerHTML = europa_paragraph;
  showcase.appendChild(europa_p)

  //grabbing distance object on moon
  let europa_distance = data.destinations[2].distance;
  let europa_d = document.createElement('h2');
  europa_d.innerHTML = europa_distance;
  result.appendChild(europa_d);

  //grabbing distance object on moon
  let europa_travel = data.destinations[2].travel;
  let europa_t = document.createElement('h2');
  europa_t.innerHTML = europa_travel;
  result_2.appendChild(europa_t);

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