import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as p,i as d}from"./assets/vendor-77e16229.js";const n=document.querySelector("button"),o=document.querySelector("#datetime-picker"),h=document.querySelector("span[data-days]"),f=document.querySelector("span[data-hours]"),S=document.querySelector("span[data-minutes]"),b=document.querySelector("span[data-seconds]");let c;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0].getTime()>Date.now()?n.removeAttribute("disabled"):(n.setAttribute("disabled","disabled"),d.show({color:"red",message:"Please choose a date in the future",position:"topCenter",messageColor:"white",progressBar:!1,icon:"material-icons"}))}};p(o,y);n.addEventListener("click",g);function g(){n.setAttribute("disabled","disabled"),o.setAttribute("disabled","disabled");const e=new Date(o.value).getTime();c=setInterval(()=>{const t=e-Date.now();if(t<=0){clearInterval(c),d.show({color:"green",message:"Countdown completed!",position:"topCenter",messageColor:"white",progressBar:!1,icon:"material-icons"}),o.removeAttribute("disabled");return}const{days:r,hours:a,minutes:i,seconds:s}=C(t);h.textContent=r.toString().padStart(2,"0"),f.textContent=a.toString().padStart(2,"0"),S.textContent=i.toString().padStart(2,"0"),b.textContent=s.toString().padStart(2,"0")},1e3)}function C(e){const s=Math.floor(e/864e5),u=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:s,hours:u,minutes:l,seconds:m}}
//# sourceMappingURL=commonHelpers.js.map
