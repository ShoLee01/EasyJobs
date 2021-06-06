var btn1 = document.getElementById('btn1'),
    btn2 = document.getElementById('btn2'),
    contador=0;
    function cambio()
    {

        if(contador==0)
        {
            console.log('Pas0');
            btn1.classList.remove('active');
            btn1.setAttribute('aria-selected', false);
            document.getElementById('home').classList.remove('show');
            document.getElementById('home').classList.remove('active');
            document.getElementById('profile').classList.add('active');
            document.getElementById('profile').classList.add('show');
            btn2.classList.add('active');
            btn2.setAttribute('aria-selected', true);
            contador=1;
        }else
        {
            console.log('Pas0');
            btn2.classList.remove('active');
            btn2.setAttribute('aria-selected', false);
            
            document.getElementById('profile').classList.remove('show');
            document.getElementById('profile').classList.remove('active');
            document.getElementById('home').classList.add('active');
            document.getElementById('home').classList.add('show');
            btn1.classList.add('active');
            btn1.setAttribute('aria-selected', true);
            contador=0;
        }
    }
    btn2.addEventListener('click',cambio,true);
    btn1.addEventListener('click',cambio,true);
   
  
 /*  function btn1()
  {
      btn1.style.color="red";
      var x = btn1.getAttribute("aria-expanded"); 
      if (x == "true") 
      {
      x = "false"
      btn1.classList.remove('active');
      } else {
      x = "true"
      btn1.classList.add(' active');
      }
      btn1.setAttribute("aria-expanded", x);
      
  }

  function btn2()
  {
      var x = btn2.getAttribute("aria-expanded"); 
      if (x == "true") 
      {
      x = "false"
      btn2.classList.remove('active');
      } else {
      x = "true"
      btn2.classList.add(' active');
      }
      btn2.setAttribute("aria-expanded", x);
      
  } */