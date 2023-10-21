var animationItems = document.querySelectorAll('.show-on-scroll');


function toggleAnimation(item){
    var rect = item.getClientRects()[0];
    var heightScreen = window.innerHeight;

    if(!(rect.bottom < 0 || rect.top > heightScreen)){
        item.classList.add('start');
    }else{
        item.classList.remove('start');
        item.classList.remove('autoAnimation');
        item.classList.remove('autoAnimation_2');

    }

}


function checkAnimation(){
    animationItems.forEach(function(item){
        toggleAnimation(item);
    })


}


window.onscroll = checkAnimation