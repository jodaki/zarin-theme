// scroll navbar
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          document.getElementById('navbar_top').classList.add('bg-glass')
          document.getElementById('navbar_top').classList.add('py-3') 
          document.getElementById('navbar_top').classList.add('px-1')           // add padding top to show content behind navbar
          // add padding top to show content behind navbar
          document.getElementById('navbar_top').classList.remove('bg-white')
          
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';

        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
          document.getElementById('navbar_top').classList.add('bg-white')
          document.getElementById('navbar_top').classList.remove('bg-glass')
          document.getElementById('navbar_top').classList.remove('py-1')
        } 
    });
  }); 