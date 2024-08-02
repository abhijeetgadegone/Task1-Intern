window.addEventListener('scroll',()=>
{
   const header=document.querySelector('header');
   header.classList.toogle('scrolled',window.scrollY>50);
});