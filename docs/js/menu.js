/*---==== Menu functions: Start ====---*/
const menu      = document.getElementById('menu_links'),
      indicator = document.getElementById('indicator');
let   indicatorWidth;

menu.addEventListener('click',e =>{
    if(e.target.tagName == 'A'){      
        const target = e.target.dataset;
        const num    = parseInt(target.id);    
        indicatorWidth = e.target.offsetWidth;
        indicator.style.width = `${indicatorWidth}px`;
        indicator.style.transform = `translateX(${indicatorWidth * num}px)`;
        if(window.screen.width <= 370) indicator.style.width = '0';
    }
});
/*---==== Menu functions: End ====---*/