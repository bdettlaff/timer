var ms=0;
var s=0;
var m=0;
var flaga=0;
var klawisz=0;

function czas(){
   ms++;

  if(ms==100)
  {
    ms=0;
    s++;

    if(s==60)
    {
      s=0;
      m++;
    }
  }

  if(ms==0 || ms==1 || ms==2 || ms==3 || ms==4 || ms==5 || ms==6 || ms==7 || ms==8 || ms==9)
  { 
      if(s<10)
      {
        if(m<10)
        {
          document.getElementById('timer').innerHTML = "0"+m+":"+"0"+s+":"+ms+"0";
        }
        else
        {
          document.getElementById('timer').innerHTML = m+":"+"0"+s+":"+ms+"0";
        }
      }
      else
        {

        if(m<10)
        {
          document.getElementById('timer').innerHTML = "0"+m+":"+s+":"+ms+"0";
        }
        else
        {
          document.getElementById('timer').innerHTML = m+":"+s+":"+ms+"0";
        }
       }
  }
  else
  {
      if(s<10)
      {
        if(m<10)
        {
          document.getElementById('timer').innerHTML = "0"+m+":"+"0"+s+":"+ms;
        }
        else
        {
          document.getElementById('timer').innerHTML = m+":"+"0"+s+":"+ms;
        }
      }
      else
        {

        if(m<10)
        {
          document.getElementById('timer').innerHTML = "0"+m+":"+s+":"+ms;
        }
        else
        {
          document.getElementById('timer').innerHTML = m+":"+s+":"+ms;
        }
       }
  }

  if(flaga==0)
  {
    setTimeout("czas()",10);
  }
  else
  {
    zeruj();
  } 

}

function stopuj(){
  return flaga=1;
}

function zeruj(){

  if(s<10)
  {
    document.getElementById('lista').innerHTML = m+":"+"0"+s+":"+ms;
  }
  else
  {
    document.getElementById('lista').innerHTML = m+":"+s+":"+ms;
  }


    m=0;
    ms=0;
    s=0;

  document.getElementById('timer').innerHTML = "0"+m+":"+"0"+s+":"+"0"+ms;

  flaga=0;
}

window.addEventListener('keydown', function(event) {
    var key = event.keyCode;
    if(key==32)
    {
      if(klawisz==0)
      {
        czas();
        klawisz=1;
       
      }
      else if(klawisz==1)
      {
        stopuj();
        klawisz=0;
    
      }
    }
}, false);