import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as h,i as u}from"./assets/vendor-BbbuE1sJ.js";const i=document.querySelector("#datetime-picker"),n=document.querySelector("[data-start]"),p=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),g=document.querySelector("[data-minutes]"),S=document.querySelector("[data-seconds]");let r=new Date,c=null;const T={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t.getTime()<=Date.now()?(u.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),n.disabled=!0):(n.disabled=!1,r=t.getTime())}};h("#datetime-picker",T);r.getTime()<=Date.now()&&(n.disabled=!0);n.addEventListener("click",D);function D(){i.disabled=!0,n.disabled=!0,c=setInterval(()=>{const t=r-new Date;if(t<=0){clearInterval(c),u.success({title:"Success",message:"Countdown finished!",position:"topRight"}),i.disabled=!1;return}q(b(t))},1e3)}function b(e){const d=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:l,minutes:m,seconds:f}}function o(e){return String(e).padStart(2,"0")}function q({days:e,hours:t,minutes:s,seconds:a}){p.textContent=o(e),y.textContent=o(t),g.textContent=o(s),S.textContent=o(a)}
//# sourceMappingURL=1-timer.js.map