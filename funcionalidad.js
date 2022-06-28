window.onload = function(){
    pantalla=document.getElementById("textoPantalla");
    }
    x="0"; //guardar número en pantalla
    xi=1; //iniciar número en pantalla: 1=si; 0=no;
    coma=0; //estado coma decimal 0=no, 1=si;
    ni=0; //número oculto o en espera.
    op="no"; //operación en curso; "no" =  sin operación.

    function numero(xx) {
        if (x=="0" || xi==1  ) {  
           pantalla.innerHTML=xx; 
           x=xx; 
           if (xx==".") { 
              pantalla.innerHTML="0."; 
              x=xx; 
              coma=1; 
              }
          }
          else { 
              if (xx=="." && coma==0) { //si escribimos una coma decimal pr primera vez
                  pantalla.innerHTML+=xx;
                  x+=xx;
                  coma=1; //cambiar el estado de la coma  
              }
             //si intentamos escribir una segunda coma decimal no realiza ninguna acción.
              else if (xx=="." && coma==1) {}  	 
              else {
                  pantalla.innerHTML+=xx;
                  x+=xx
              }
           }
           xi=0 
        }

    function operar(s) {
        igualar();
        ni=x;
        op=s; // tipo de operación.
        xi=1;
    }		

    function igualar() {
        if (op=="no") { 
           pantalla.innerHTML=x;	
        }
        else { 
           sl=ni+op+x; 
           sol=eval(sl) //convertimos la cadena a código y resolvemos
           pantalla.innerHTML=sol // solución
           x=sol; //guardamos la solución
           op="no"; 
           xi=1; 
        }
    }

    function raizc() {
        x=Math.sqrt(x)
        pantalla.innerHTML=x; 
        op="no"; 
        xi=1; 
    }

    function porcent() { 
        x=x/100 
        pantalla.innerHTML=x; 
        igualar() 
        xi=1; 
    }

    function opuest() { 
        nx=Number(x); 
        nx=-nx; 
        x=String(nx); 
        pantalla.innerHTML=x; 
    }

    function inve() {
        nx=Number(x);
        nx=(1/nx);
        x=String(nx);		 
        pantalla.innerHTML=x;
        xi=1; 
    }

    function retro(){ 
        cifras=x.length; 
        br=x.substr(cifras-1,cifras) 
        x=x.substr(0,cifras-1) 
        if (x=="") {x="0"} 
        if (br==".") {coma=0} 
        pantalla.innerHTML=x; 
    }

    function borradoParcial(){
        pantalla.innerHTML=0;
        x="0";
        coma=0;
    }

    function borrradoTotal(){
        pantalla.innerHTML=0;
        x="0";
        coma=0;
        ni=0
        op="no"
    }