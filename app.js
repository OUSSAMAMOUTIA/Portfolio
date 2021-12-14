
            function classToggle() {
        const navs = document.querySelectorAll('.nav-list');
        
        navs.forEach(nav=>nav.classList.toggle('iconshow'));
      }
      
      document.querySelector('.icon')
        .addEventListener('click', classToggle);
     const cursor = document.querySelector('.cursor');
     const navs = document.querySelectorAll('.nav-list');

        document.addEventListener('mousemove',(e)=>{
     cursor.style.left=e.clientX +'px';
     cursor.style.top=e.clientY +'px';
     })
      