!function(){"use strict";const e=window.location.pathname;let t=!1;const s=document.querySelector(".page");let o=0,r=!0,i=!1,l=!0;const n=document.querySelectorAll(".inslider");let a=!1;const d=[],c=document.querySelectorAll(".more-info");let u=0;const m=document.querySelector(".menu__wrapper"),_=document.querySelectorAll(".menu__link"),p=document.querySelector(".nav-back-button");let f=0;const h=document.querySelector(".footer"),v=(e,t)=>{t.classList.contains("_free")&&(t.classList.remove("_free"),e.params.freeMode.enabled=!1);for(let s=0;s<e.slides.length-1;s++){const o=e.slides[s].querySelector(".screen__content");if(o&&o.offsetHeight>window.innerHeight){t.classList.add("_free"),e.params.freeMode.enabled=!0;break}}},y=e=>{const t=e.mainSlider,s=e.inslider,o=e.insliderElem,r=e.moreInfoButton,i=e.index,l=o.querySelector(".inslider__wrapper"),n=r.querySelector(".more-info__title"),d=r.querySelectorAll(".more-info__button");let c=0;const u=(m=d[1],function(e){a||((e,t)=>{t.style.position="absolute",t.style.marginTop="0px";let o=e.offsetX-t.offsetWidth/2,r=e.offsetY-t.offsetHeight/2;var i;t.style.left=o+"px",t.style.top=r+"px",t.classList.remove("_hide-more-info__button"),(i=o)<=0||r<=0?(n.classList.remove("_hide-more-info__title"),d[0].classList.remove("_hide-more-info__button"),d[1].classList.add("_hide-more-info__button")):(n.classList.add("_hide-more-info__title"),d[0].classList.add("_hide-more-info__button")),i>0&&(c=-Math.trunc(.092*i),s.translateTo(c,300))})(e,m)});var m;r.addEventListener("mouseover",(()=>{r.addEventListener("mousemove",u)})),r.addEventListener("mouseout",(()=>{a||s.translateTo(0,500),r.removeEventListener("mousemove",u)})),r.addEventListener("click",(()=>{f=i,a=!0,r.classList.add("more-info-hidden"),c=0,t.disable(),s.enable();let e=window.innerWidth/6*5;const n=o.querySelectorAll(".i-s_screen"),d=o.querySelector(".i-s_screen:nth-child(2)"),u=L(d,!1);let m=0;n.forEach((e=>{m+=e.clientWidth}));let _=e/m;s.setProgress(_,1e3),p.classList.remove("nav-back-button-hidden"),setTimeout((()=>{l.classList.add("inslider__wrapper-open"),L(d,u)}),500)}))};window.addEventListener("load",(()=>{t=window.innerWidth<=850,setTimeout((()=>{new Typed(".typed-text-1",{strings:["преумножить уровень доходов","перейти на новый уровень сервиса","достичь успеха в развитии бизнеса"],typeSpeed:50,backSpeed:30,loop:!0})}),300),setTimeout((()=>{new Typed(".typed-text-2",{strings:["удобно","легко","надежно","выгодно"],typeSpeed:80,backSpeed:50,loop:!0})}),300)}));const b=(e,t=null)=>{const s=e.querySelectorAll("*"),o=[];if(!t)return s.forEach((e=>{const t=e.attributes,s=[];for(let o=0;o<t.length;o++)t[o].name.startsWith("data-swiper-parallax")&&(s.push({name:t[o].name,value:t[o].value}),e.setAttribute(t[o].name,0));s.length>0&&o.push({element:e,attributes:s})})),o;t.forEach((e=>{e.attributes.forEach((t=>{e.element.setAttribute(t.name,t.value)}))}))};function L(e,t=!1){if(null===t)return;const s=e.querySelectorAll("*"),o=[];if(!t)return s.forEach((e=>{const t=e.attributes;for(let s=0;s<t.length;s++)t[s].name.startsWith("data-swiper-parallax")&&(e.classList.add("toggle-parallax-transition"),o.push(e))})),0===o.length?null:o;t.forEach((e=>{e.classList.remove("toggle-parallax-transition")}))}const g=document.querySelectorAll(".menu__link"),w=()=>{let e=document.querySelector(".menu__link._active");e&&e.classList.remove("_active")};m.addEventListener("mouseover",(()=>{m.classList.add("nav-menu_show-bg"),_.forEach((e=>e.classList.add("nav-menu_show-link")))})),m.addEventListener("mouseout",(()=>{m.classList.remove("nav-menu_show-bg"),_.forEach((e=>e.classList.remove("nav-menu_show-link")))})),(()=>{const e=document.querySelector(".wrapper"),t=document.querySelectorAll(".screen__content");let _=null;const L=new Swiper(".page",{wrapperClass:"page__wrapper",slideClass:"page__screen",direction:"vertical",slidesPerView:"auto",parallax:!0,mousewheel:{sensitivity:.3},watchOverflow:!0,speed:900,observer:!0,observeParents:!0,observeSlideChildren:!0,init:!1,on:{init:()=>{(e=>{if(g.length>0){g[e.realIndex].classList.add("_active");for(let t=0;t<g.length;t++){const s=g[t];s.addEventListener("click",(o=>{if(o.preventDefault(),!e.enabled){const t=b(n[f]);u=0,d[f].disable(),e.enable(),setTimeout((()=>{n[f].querySelector(".inslider__wrapper").classList.remove("inslider__wrapper-open");const e=c[f].querySelector(".more-info__title"),s=c[f].querySelectorAll(".more-info__button");d[f].setProgress(0,0),p.classList.add("nav-back-button-hidden"),c[f].classList.remove("more-info-hidden"),e.classList.remove("_hide-more-info__title"),s[0].classList.remove("_hide-more-info__button"),s[1].classList.add("_hide-more-info__button"),a=!1,b(n[f],t)}),1e3)}w(),e.slideTo(t,800),s.classList.add("_active")}))}}})(L),v(L,e),_=((e,t)=>{const s=document.querySelector(".wrapper"),o=document.querySelector(".subslider"),n=document.querySelector(".toggle-scroll");let d=0;const c=new Swiper(".subslider",{wrapperClass:"subslider__wrapper",slideClass:"subslider__screen",direction:"vertical",slidesPerView:"auto",parallax:!0,mousewheel:{sensitivity:1},watchOverflow:!0,speed:900,observer:!0,observeParents:!0,observeSlideChildren:!0,freeMode:{enabled:!0},on:{progress:(e,t)=>{d=t}}});return n.addEventListener("wheel",(e=>{e.preventDefault()}),{passive:!1}),s.addEventListener("wheel",(s=>{let c=-(100*Math.round(window.innerHeight/100)+100),u=c/7*-1;if(l&&!a)if(1===d&&c<o.offsetTop&&o.offsetTop<=0&&s.deltaY>0){let e=c/7*4,r=c/7*2;if(o.offsetTop<=e)return o.style.transition="all 0.5s",o.style.top=c+"px",n.style.transition="all 0.5s",n.style.top=c+"px",void s.preventDefault();o.offsetTop<=r&&(t.classList.remove("_hide_page"),m.classList.remove("_hide_menu")),o.classList.remove("_suslider-top-0"),n.classList.remove("_suslider-top-0"),n.style.display="block",o.style.top=o.offsetTop-u+"px",n.style.top=n.offsetTop-u+"px"}else 1===d&&o.offsetTop<=-u&&s.deltaY<0&&(2*-u<=o.offsetTop&&o.offsetTop<=-u?(o.style.top="0px",n.style.top="0px",o.classList.add("_suslider-top-0"),n.classList.add("_suslider-top-0"),setTimeout((()=>{n.style.display="none",t.classList.add("_hide_page"),m.classList.add("_hide_menu"),s.preventDefault()}),500)):(o.style.transition="none",n.style.transition="none",n.style.display="block"),o.style.top=o.offsetTop+u+"px",n.style.top=n.offsetTop+u+"px");c>=o.offsetTop&&!a&&r&&!i?e.enable():e.disable()}),{passive:!1}),c})(L,t[0]),(e=>{p.addEventListener("click",(()=>{const t=n[f].querySelector(".inslider__wrapper"),s=c[f].querySelector(".more-info__title"),o=c[f].querySelectorAll(".more-info__button");t.classList.remove("inslider__wrapper-open"),d[f].disable(),d[f].setProgress(0,800),setTimeout((()=>{p.classList.add("nav-back-button-hidden"),c[f].classList.remove("more-info-hidden"),s.classList.remove("_hide-more-info__title"),o[0].classList.remove("_hide-more-info__button"),o[1].classList.add("_hide-more-info__button"),e.enable(),a=!1}),1e3)}))})(L),(e=>{document.addEventListener("wheel",(t=>{const o=s.querySelectorAll(".screen__content")[e.slides.length-1],l=s.querySelectorAll(".screen")[e.slides.length-1],n=o.getBoundingClientRect().bottom<=window.innerHeight;if(t.deltaY>0&&n&&r){m.classList.add("_hide_menu"),i=!0,e.disable();let t=l.clientHeight-s.clientHeight;const o=l.clientHeight-window.innerHeight+h.clientHeight-t;l.style.top=-t+"px",s.style.overflow="visible",s.style.top=-o+"px"}else t.deltaY<0&&n&&r&&(s.style.top="0px",m.classList.remove("_hide_menu"),setTimeout((()=>{s.style.overflow="hidden",i=!1,e.enable()}),500));e.realIndex===e.slides.length-2?(l.style.transition="all 0.3s",l.style.top="0px"):l.style.transition="none"}))})(L),e.classList.add("_loaded"),Array.from(n).forEach(((e,t)=>{d.push(((e,t)=>{const s=new Swiper(".inslider_"+t,{wrapperClass:"inslider__wrapper",slideClass:"inslider__screen",direction:"horizontal",slidesPerView:"auto",parallax:!0,mousewheel:{thresholdTime:5,thresholdDelta:5,releaseOnEdges:!0,sensitivity:2},watchOverflow:!0,speed:900,observer:!0,observeSlideChildren:!0,freeMode:{enabled:!0},on:{slideChange:()=>{},progress:(e,t)=>{u=t},scroll:(s,o)=>{if(0===u&&a&&o.deltaY<0){const o=n[t].querySelector(".inslider__wrapper"),r=c[t].querySelector(".more-info__title"),i=c[t].querySelectorAll(".more-info__button");setTimeout((()=>{p.classList.add("nav-back-button-hidden"),e.enable(),s.disable(),o.classList.remove("inslider__wrapper-open"),c[t].classList.remove("more-info-hidden"),r.classList.remove("_hide-more-info__title"),i[0].classList.remove("_hide-more-info__button"),i[1].classList.add("_hide-more-info__button"),a=!1}),800)}}}});return s.disable(),s})(L,t))})),Array.from(c).forEach(((e,t)=>{const s={mainSlider:L,inslider:d[t],insliderElem:n[t],moreInfoButton:e,index:t};y(s)})),(e=>{const t=document.querySelector(".geography-cities");t&&(t.addEventListener("mouseover",(t=>{t.preventDefault(),r=!1,e.disable()})),t.addEventListener("mouseout",(t=>{r=!0,i||e.enable()})))})(L)},slideChange:()=>{w(),g[L.realIndex].classList.add("_active"),Array.from(c).forEach(((e,t)=>{const s=e.querySelector(".more-info__title"),o=e.querySelectorAll(".more-info__button");s.classList.remove("_hide-more-info__title"),o[0].classList.remove("_hide-more-info__button"),o[1].classList.add("_hide-more-info__button")}))},resize:()=>{v(L,e),window.innerWidth<=850&&(e=>{e.params.freeMode.enabled=!0,Array.from(n).forEach((e=>{e.classList.add("hidden-inslider")}))})(L)},progress:(e,t)=>{o=t,0===t&&e.params.freeMode.enabled?setTimeout((()=>l=!0),100):0!==t&&e.params.freeMode.enabled&&(l=!1),0===e.progress?setTimeout((()=>l=!0),800):l=!1}}});L.init()})(),(()=>{const e=document.querySelector(".mobile_main_menu"),t=document.querySelector(".main_menu-burger"),s=document.querySelector(".main_menu-burger-close");t.addEventListener("click",(()=>{e.classList.remove("_hide_mobile_menu")})),s.addEventListener("click",(()=>{e.classList.add("_hide_mobile_menu")}))})(),"/"===e&&(()=>{const e=document.querySelector(".geography-map"),t=document.querySelector(".geography-cities").querySelectorAll("p");Array.from(t).forEach((s=>{s.addEventListener("click",(s=>{s.preventDefault();const o=s.target.id;e.style.background=`url('../../img/map/${o}.png')`,e.style.backgroundSize="contain",e.style.backgroundRepeat="no-repeat",e.style.backgroundPosition="center right",Array.from(t).forEach((e=>{e.classList.remove("clicked-geography-city")})),s.target.classList.add("clicked-geography-city")}))}))})()}();