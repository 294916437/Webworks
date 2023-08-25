
    function toggleMenu() {
        const menuLoggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('.menu-dropdown');
        menuLoggle.addEventListener('click', () => {
        
          navMenu.classList.toggle('open');
          menuLoggle.classList.toggle('open');
          document.body.classList.toggle('open');
        });
      }
    window.onload=function(){
      toggleMenu();
    }
   