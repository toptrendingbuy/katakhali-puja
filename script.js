document.addEventListener("DOMContentLoaded",()=>{
 const toggle=document.querySelector(".menu-toggle"), nav=document.querySelector("nav");
 if(toggle) toggle.addEventListener("click",()=>nav.classList.toggle("open"));
 const y=document.getElementById("year"); if(y)y.textContent=new Date().getFullYear();
 const fw=document.getElementById("fireworks");
 if(fw){
   const burst=()=>{
     const cx=15+Math.random()*70, cy=12+Math.random()*42;
     for(let i=0;i<28;i++){
       const s=document.createElement("i"); s.className="spark";
       const a=Math.PI*2*i/28, d=50+Math.random()*130;
       s.style.left=cx+"%"; s.style.top=cy+"%";
       s.style.setProperty("--x",Math.cos(a)*d+"px"); s.style.setProperty("--y",Math.sin(a)*d+"px");
       s.style.animationDelay=(Math.random()*.15)+"s"; fw.appendChild(s);
       setTimeout(()=>s.remove(),1700);
     }
   };
   burst(); setInterval(burst,2600);
 }
});