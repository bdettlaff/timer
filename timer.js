var ms=0;
var s=0;
var m=0;
var flaga=0;
var klawisz=0;

function czas(){
   ms++;

  if(ms==10)
  {
    ms=0;
    s++;

    if(s==60)
    {
      s=0;
      m++;
    }
  }

  document.getElementById('timer').innerHTML = m+":"+s+":"+ms;

  if(flaga==0)
  {
    setTimeout("czas()",100);
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

  document.getElementById('lista').innerHTML = m+":"+s+":"+ms;

    m=0;
    ms=0;
    s=0;

  document.getElementById('timer').innerHTML = m+":"+s+":"+ms;

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