const element = document.querySelectorAll('.element-list.menu');
const elementImg = document.getElementById('content')
const sun = document.getElementById('sun-block');
    // for(let i=0;i<website.length;i++){
    // const link  = '<ul class="'+elementera+'"><a href="#">'+website[i]+'</a></ul>';
    // elementList.insertAdjacentHTML('beforeend',link);
    // };

    
for(let ele of element){
ele.addEventListener('click', () =>{ 
   let elem = document.querySelectorAll('.active');
     if(!ele.classList.contains('active')){
        ele.classList.toggle('active');
     }
     for(let elemer of elem){
     if(elemer.classList.contains('active')){
        elemer.classList.toggle('active');
     }
    }  
});}
document.addEventListener('scroll', () => {
   
   let lastKnownScrollPosition = 0;
   let ticking = false;
   lastKnownScrollPosition = window.scrollY;
 
   function scrollBackGround() {
      elementImg.style.backgroundPositionY = -lastKnownScrollPosition+'px';
     }
   if (!ticking) {
     window.requestAnimationFrame(function() {
       scrollBackGround(lastKnownScrollPosition);
       ticking = false;
     });
     ticking = true;
   }
 });
