!function(){"use strict";const e=document.querySelector(".page");let t=0,s=!0,o=!1,i=!0;const r=document.querySelectorAll(".inslider");let l=!1;const n=[],a=document.querySelectorAll(".more-info");let d=0;const c=document.querySelector(".menu__wrapper"),_=document.querySelectorAll(".menu__link"),u=document.querySelector(".nav-back-button");let m=0;const p=document.querySelector(".footer"),f=document.querySelectorAll(".menu__link"),v=()=>{let e=document.querySelector(".menu__link._active");e&&e.classList.remove("_active")},h=(e,t)=>{t.classList.contains("_free")&&(t.classList.remove("_free"),e.params.freeMode.enabled=!1);for(let s=0;s<e.slides.length-1;s++){const o=e.slides[s].querySelector(".screen__content");if(o&&o.offsetHeight>window.innerHeight){t.classList.add("_free"),e.params.freeMode.enabled=!0;break}}},b=e=>{const t=e.mainSlider,s=e.inslider,o=e.insliderElem,i=e.moreInfoButton,r=e.index,n=o.querySelector(".inslider__wrapper"),a=i.querySelector(".more-info__title"),d=i.querySelectorAll(".more-info__button");let c=0;const _=(p=d[1],function(e){l||((e,t)=>{t.style.position="absolute",t.style.marginTop="0px";let o=e.offsetX-t.offsetWidth/2,i=e.offsetY-t.offsetHeight/2;var r;t.style.left=o+"px",t.style.top=i+"px",t.classList.remove("_hide-more-info__button"),(r=o)<=0||i<=0?(a.classList.remove("_hide-more-info__title"),d[0].classList.remove("_hide-more-info__button"),d[1].classList.add("_hide-more-info__button")):(a.classList.add("_hide-more-info__title"),d[0].classList.add("_hide-more-info__button")),r>0&&(c=-Math.trunc(.092*r),s.translateTo(c,300))})(e,p)});var p;i.addEventListener("mouseover",(()=>{i.addEventListener("mousemove",_)})),i.addEventListener("mouseout",(()=>{l||s.translateTo(0,500),i.removeEventListener("mousemove",_)})),i.addEventListener("click",(()=>{m=r,l=!0,i.classList.add("more-info-hidden"),c=0,t.disable(),s.enable();let e=window.innerWidth/-6*5;s.translateTo(e,1e3),u.classList.remove("nav-back-button-hidden"),setTimeout((()=>{n.classList.add("inslider__wrapper-open")}),500)}))};c.addEventListener("mouseover",(()=>{c.classList.add("nav-menu_show-bg"),_.forEach((e=>e.classList.add("nav-menu_show-link")))})),c.addEventListener("mouseout",(()=>{c.classList.remove("nav-menu_show-bg"),_.forEach((e=>e.classList.remove("nav-menu_show-link")))})),(()=>{const _=document.querySelector(".wrapper"),y=document.querySelectorAll(".screen__content"),L=new Swiper(".page",{wrapperClass:"page__wrapper",slideClass:"page__screen",direction:"vertical",slidesPerView:"auto",parallax:!0,mousewheel:{sensitivity:.3},watchOverflow:!0,speed:900,observer:!0,observeParents:!0,observeSlideChildren:!0,init:!1,on:{init:()=>{(e=>{if(f.length>0){f[e.realIndex].classList.add("_active");for(let t=0;t<f.length;t++){const s=f[t];s.addEventListener("click",(o=>{o.preventDefault(),e.enabled||(d=0,n[m].disable(),e.enable(),setTimeout((()=>{r[m].querySelector(".inslider__wrapper");const e=a[m].querySelector(".more-info__title"),t=a[m].querySelectorAll(".more-info__button");n[m].setProgress(0,0),u.classList.add("nav-back-button-hidden"),a[m].classList.remove("more-info-hidden"),e.classList.remove("_hide-more-info__title"),t[0].classList.remove("_hide-more-info__button"),t[1].classList.add("_hide-more-info__button"),l=!1}),1e3)),v(),e.slideTo(t,800),s.classList.add("_active")}))}}})(L),h(L,_),((e,t)=>{const r=document.querySelector(".wrapper"),n=document.querySelector(".subslider"),a=document.querySelector(".toggle-scroll");let d=0;new Swiper(".subslider",{wrapperClass:"subslider__wrapper",slideClass:"subslider__screen",direction:"vertical",slidesPerView:"auto",parallax:!0,mousewheel:{sensitivity:1},watchOverflow:!0,speed:900,observer:!0,observeParents:!0,observeSlideChildren:!0,freeMode:{enabled:!0},on:{progress:(e,t)=>{d=t}}}),a.addEventListener("wheel",(e=>{e.preventDefault()}),{passive:!1}),r.addEventListener("wheel",(r=>{let _=-(100*Math.round(window.innerHeight/100)+100),u=_/7*-1;if(i&&!l)if(1===d&&_<n.offsetTop&&n.offsetTop<=0&&r.deltaY>0){let e=_/7*4,s=_/7*2;if(n.offsetTop<=e)return n.style.transition="all 0.5s",n.style.top=_+"px",a.style.transition="all 0.5s",a.style.top=_+"px",void r.preventDefault();n.offsetTop<=s&&(t.classList.remove("_hide_page"),c.classList.remove("_hide_menu")),n.classList.remove("_suslider-top-0"),a.classList.remove("_suslider-top-0"),a.style.display="block",n.style.top=n.offsetTop-u+"px",a.style.top=a.offsetTop-u+"px"}else 1===d&&n.offsetTop<=-u&&r.deltaY<0&&(2*-u<=n.offsetTop&&n.offsetTop<=-u?(n.style.top="0px",a.style.top="0px",n.classList.add("_suslider-top-0"),a.classList.add("_suslider-top-0"),setTimeout((()=>{a.style.display="none",t.classList.add("_hide_page"),c.classList.add("_hide_menu"),r.preventDefault()}),500)):(n.style.transition="none",a.style.transition="none",a.style.display="block"),n.style.top=n.offsetTop+u+"px",a.style.top=a.offsetTop+u+"px");_>=n.offsetTop&&!l&&s&&!o?e.enable():e.disable()}),{passive:!1})})(L,y[0]),(e=>{u.addEventListener("click",(()=>{const t=r[m].querySelector(".inslider__wrapper"),s=a[m].querySelector(".more-info__title"),o=a[m].querySelectorAll(".more-info__button");t.classList.remove("inslider__wrapper-open"),n[m].disable(),n[m].setProgress(0,800),setTimeout((()=>{u.classList.add("nav-back-button-hidden"),a[m].classList.remove("more-info-hidden"),s.classList.remove("_hide-more-info__title"),o[0].classList.remove("_hide-more-info__button"),o[1].classList.add("_hide-more-info__button"),e.enable(),l=!1}),1e3)}))})(L),(t=>{document.addEventListener("wheel",(i=>{const r=e.querySelectorAll(".screen__content")[t.slides.length-1],l=e.querySelectorAll(".screen")[t.slides.length-1],n=r.getBoundingClientRect().bottom<=window.innerHeight;if(i.deltaY>0&&n&&s){c.classList.add("_hide_menu"),o=!0,t.disable();let s=l.clientHeight-e.clientHeight;const i=l.clientHeight-window.innerHeight+p.clientHeight-s;l.style.top=-s+"px",e.style.overflow="visible",e.style.top=-i+"px"}else i.deltaY<0&&n&&s&&(e.style.top="0px",c.classList.remove("_hide_menu"),setTimeout((()=>{e.style.overflow="hidden",o=!1,t.enable()}),500));t.realIndex===t.slides.length-2?(l.style.transition="all 0.3s",l.style.top="0px"):l.style.transition="none"}))})(L),_.classList.add("_loaded"),Array.from(r).forEach(((e,t)=>{n.push(((e,t)=>{const s=new Swiper(".inslider_"+t,{wrapperClass:"inslider__wrapper",slideClass:"inslider__screen",direction:"horizontal",slidesPerView:"auto",parallax:!0,mousewheel:{releaseOnEdges:!0,sensitivity:3},watchOverflow:!0,speed:900,observer:!0,observeSlideChildren:!0,freeMode:{enabled:!0},on:{slideChange:()=>{},progress:(s,o)=>{if(0===o&&0!==d&&l){const o=r[t].querySelector(".inslider__wrapper"),i=a[t].querySelector(".more-info__title"),n=a[t].querySelectorAll(".more-info__button");setTimeout((()=>{u.classList.add("nav-back-button-hidden"),e.enable(),s.disable(),o.classList.remove("inslider__wrapper-open"),a[t].classList.remove("more-info-hidden"),i.classList.remove("_hide-more-info__title"),n[0].classList.remove("_hide-more-info__button"),n[1].classList.add("_hide-more-info__button"),l=!1}),800)}d=o}}});return s.disable(),s})(L,t))})),Array.from(a).forEach(((e,t)=>{const s={mainSlider:L,inslider:n[t],insliderElem:r[t],moreInfoButton:e,index:t};b(s)})),(e=>{const t=document.querySelector(".geography-cities");t&&(t.addEventListener("mouseover",(t=>{t.preventDefault(),s=!1,e.disable()})),t.addEventListener("mouseout",(t=>{s=!0,o||e.enable()})))})(L)},slideChange:()=>{v(),f[L.realIndex].classList.add("_active"),Array.from(a).forEach(((e,t)=>{const s=e.querySelector(".more-info__title"),o=e.querySelectorAll(".more-info__button");s.classList.remove("_hide-more-info__title"),o[0].classList.remove("_hide-more-info__button"),o[1].classList.add("_hide-more-info__button")}))},resize:()=>{h(L,_)},progress:(e,s)=>{t=s,0===s&&e.params.freeMode.enabled?setTimeout((()=>i=!0),100):0!==s&&e.params.freeMode.enabled&&(i=!1),0===e.progress?setTimeout((()=>i=!0),800):i=!1},slidePrevTransitionStart:e=>{}}});L.init()})(),(()=>{const e=document.querySelector(".mobile_main_menu"),t=document.querySelector(".main_menu-burger"),s=document.querySelector(".main_menu-burger-close");t.addEventListener("click",(()=>{e.classList.remove("_hide_mobile_menu")})),s.addEventListener("click",(()=>{e.classList.add("_hide_mobile_menu")}))})()}();