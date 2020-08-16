const container = document.querySelector('.container');
document.querySelector('.open-navbar-icon').
addEventListener('click', () =>{
    container.classList.add('change')
});

document.querySelector('.close-navbar-icon').
addEventListener('click', () =>{
    container.classList.remove('change')
});


const colors = ['#6495ed', '#7fffd4', '#ffa07a', '#f08080', '#afeeee'];

let i=0;
let ll = document.querySelectorAll('.nav-link');
Array.from(ll).forEach(item =>{
    item.style.cssText = `background-color:${colors[i++]}`;
});


Array.from(document.querySelectorAll
    (".navigation-button")).forEach((item)=>{
        console.log('ITEM', item);
        item.onclick = ()=>{
            item.parentElement.parentElement.classList.toggle("change");
        }
    });