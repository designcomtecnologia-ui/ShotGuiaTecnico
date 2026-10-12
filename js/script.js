(()=>{
  const body=document.body, toggle=document.querySelector('.menu-toggle'), menu=document.querySelector('.mobile-menu'), overlay=document.querySelector('.menu-overlay');
  const closeEls=document.querySelectorAll('[data-menu-close]');
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const close=()=>{body.classList.remove('menu-open');overlay?.classList.remove('is-open');toggle?.setAttribute('aria-expanded','false');menu?.setAttribute('aria-hidden','true')};
  const open=()=>{body.classList.add('menu-open');overlay?.classList.add('is-open');toggle?.setAttribute('aria-expanded','true');menu?.setAttribute('aria-hidden','false')};
  toggle?.addEventListener('click',()=>body.classList.contains('menu-open')?close():open());
  closeEls.forEach(e=>e.addEventListener('click',close)); menu?.querySelectorAll('a').forEach(e=>e.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){close();if(document.querySelector('.combo-modal.is-open'))window.closeCombo?.()}});

  const reveals=[...document.querySelectorAll('.reveal')];
  if('IntersectionObserver' in window && !reduce){
    const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');io.unobserve(entry.target)}}),{rootMargin:'0px 0px -10% 0px',threshold:.08});
    reveals.forEach((el,i)=>{if(el.closest('.parameter-grid,.chapter-list,.archive-list,.prompt-columns,.steps,.faq-list'))el.style.transitionDelay=`${Math.min((i%6)*65,300)}ms`;io.observe(el)});
  }else reveals.forEach(el=>el.classList.add('is-visible'));

  const progress=document.createElement('div'); progress.setAttribute('data-scroll-progress',''); document.body.appendChild(progress);
  let ticking=false; const updateProgress=()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=`${max>0?(scrollY/max)*100:0}%`;ticking=false};
  addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(updateProgress);ticking=true}},{passive:true});updateProgress();

  const parallaxEls=[...document.querySelectorAll('.parallax')];
  const updateParallax=()=>{if(reduce||innerWidth<1024)return;parallaxEls.forEach(el=>{const r=el.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;const speed=parseFloat(el.dataset.speed||'.025');const offset=(innerHeight/2-(r.top+r.height/2))*speed;el.style.transform=`translate3d(0,${Math.max(-28,Math.min(28,offset))}px,0)`})};
  if(!reduce&&innerWidth>=1024){let p=false;addEventListener('scroll',()=>{if(!p){requestAnimationFrame(()=>{updateParallax();p=false});p=true}},{passive:true});addEventListener('resize',updateParallax);updateParallax()}

  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const target=document.querySelector(a.getAttribute('href'));if(target){e.preventDefault();target.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'})}}));

  const dots=[...document.querySelectorAll('.section-dots a')]; const sections=dots.map(a=>document.getElementById(a.dataset.dot)).filter(Boolean);
  if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){dots.forEach(d=>d.classList.toggle('is-active',d.dataset.dot===entry.target.id))}}),{rootMargin:'-42% 0px -42% 0px',threshold:0});sections.forEach(s=>io.observe(s))}

  const WHATSAPP_GROUP_URL='https://chat.whatsapp.com/CFjFExe53pTGzJ1cKeg9Kj';
  document.querySelectorAll('[data-whatsapp]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();window.open(WHATSAPP_GROUP_URL,'_blank','noopener,noreferrer')}));
})();

(()=>{
 const modal=document.querySelector('.combo-modal'); if(!modal)return;
 const data={
  retrato:{index:'01 · RETRATO',title:'DRAMA ÍNTIMO',copy:'Sensor de referência + lente de pele suave + abertura aberta isolam o rosto; o zoom lento aproxima a emoção sem cortes bruscos.',camera:'ARRI Alexa 35',lens:'Cooke Speed Panchro',frame:'Close-Up',aperture:'f/1.4',light:'Luz Difusa',prompt:'ARRI Alexa 35, Cooke Speed Panchro, Eye-Level, Close-Up, f/1.4, diffuse light, Slow Zoom In, intimate cinematic portrait'},
  acao:{index:'02 · AÇÃO',title:'PERSEGUIÇÃO',copy:'Alta resolução para reenquadrar em pós; ângulo baixo engrandece a ação; câmera reativa mantém a energia da perseguição.',camera:'RED V-RAPTOR (VV)',lens:'Panavision C Series',frame:'Wide Shot',aperture:'f/4',light:'Luz Dura',prompt:'RED V-RAPTOR VV, Panavision C Series, Low Angle, Wide Shot, f/4, hard light, Chase Shot, cinematic action'},
  paisagem:{index:'03 · PAISAGEM',title:'ESTABELECIMENTO ÉPICO',copy:'Sensor de 65mm capta riqueza máxima de textura; a visão aérea revela escala; o drone aproxima gradualmente o destino.',camera:'ARRI Alexa 65',lens:'ZEISS Supreme Prime Radiance',frame:'Extreme Wide / Establishing',aperture:'f/16',light:'Golden Hour',prompt:'ARRI Alexa 65, ZEISS Supreme Prime Radiance, Bird’s Eye View, Extreme Wide, f/16, Golden Hour, Drone Push In, epic landscape'},
  thriller:{index:'04 · THRILLER',title:'SUSPENSE NOTURNO',copy:'Câmera compacta, inclinação e balanço handheld constroem tensão constante em pouca luz.',camera:'ARRI Alexa Mini LF',lens:'Panavision C Series',frame:'Medium Shot',aperture:'f/2.8',light:'Low Key',prompt:'ARRI Alexa Mini LF, Panavision C Series, Dutch Angle, Medium Shot, f/2.8, Low Key, Handheld, night thriller'},
  produto:{index:'05 · PRODUTO',title:'STILL PREMIUM',copy:'Corpo ágil, óptica expressiva, tudo em foco e um pequeno deslocamento lateral para dar vida ao produto.',camera:'Canon C500 Mark II',lens:'Leica Thalia',frame:'Medium Close-Up',aperture:'f/16',light:'High Key',prompt:'Canon C500 Mark II, Leica Thalia, Eye-Level, Medium Close-Up, f/16, High Key, Slider Right, premium product'},
  campo:{index:'06 · DIÁLOGO',title:'DIÁLOGO EM CAMPO',copy:'Boa reprodução de pele; o ângulo por trás do ombro aproxima o espectador da escuta; câmera travada mantém o foco na fala.',camera:'Sony VENICE',lens:'ARRI Signature Primes',frame:'Medium Shot',aperture:'f/2.8',light:'Luz Natural',prompt:'Sony VENICE, ARRI Signature Primes, Over-the-Shoulder, Medium Shot, f/2.8, Natural Light, Static Shot, field dialogue'},
  sonho:{index:'07 · SONHO',title:'MEMÓRIA',copy:'Bokeh giratório, ponto de vista subjetivo e órbita lenta criam uma atmosfera de sonho e distanciamento temporal.',camera:'ARRI Alexa 35',lens:'Helios 44-2 58mm',frame:'Close-Up',aperture:'f/1.4',light:'Contraluz',prompt:'ARRI Alexa 35, Helios 44-2 58mm, POV, Close-Up, f/1.4, Backlight, Orbit Clockwise, dream memory sequence'}
 };
 const q=s=>modal.querySelector(s);
 const openCombo=key=>{const d=data[key];if(!d)return;q('#combo-modal-index').textContent=d.index;q('#combo-modal-title').textContent=d.title;q('#combo-modal-copy').textContent=d.copy;q('#combo-camera').textContent=d.camera;q('#combo-lens').textContent=d.lens;q('#combo-frame').textContent=d.frame;q('#combo-aperture').textContent=d.aperture;q('#combo-light').textContent=d.light;q('#combo-prompt-text').textContent=d.prompt;modal.classList.add('is-open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');q('.combo-panel-top button')?.focus()};
 const closeCombo=()=>{modal.classList.remove('is-open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open')}; window.closeCombo=closeCombo;
 document.querySelectorAll('.combo-trigger').forEach(btn=>btn.addEventListener('click',()=>openCombo(btn.dataset.combo)));modal.querySelectorAll('[data-combo-close]').forEach(el=>el.addEventListener('click',closeCombo));q('[data-combo-go]')?.addEventListener('click',()=>{closeCombo();document.querySelector('#prompts')?.scrollIntoView({behavior:'smooth',block:'start'})});
})();


/* V18 — accessible 12 chapter carousel */
(()=>{
  const track=document.querySelector('[data-carousel-track]');
  if(!track)return;
  const slides=[...track.querySelectorAll('.chapter-slide')];
  const dots=[...document.querySelectorAll('.carousel-dot')];
  const prev=document.querySelector('[data-carousel-prev]');
  const next=document.querySelector('[data-carousel-next]');
  const count=document.querySelector('[data-carousel-count]');
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let active=0;

  track.querySelectorAll('img[data-fallback]').forEach(img=>{
    img.addEventListener('error',()=>{
      const fallback=img.dataset.fallback;
      if(fallback && img.src!==new URL(fallback,location.href).href){
        img.src=fallback;
      }
    },{once:true});
  });

  const getStep=()=>slides[0]?.getBoundingClientRect().width+(parseFloat(getComputedStyle(track).gap)||0) || 0;
  const goTo=(index)=>{
    active=Math.max(0,Math.min(slides.length-1,index));
    track.scrollTo({left:slides[active].offsetLeft,behavior:reduce?'auto':'smooth'});
    updateUI();
  };
  const updateUI=()=>{
    const n=String(active+1).padStart(2,'0');
    if(count)count.textContent=`${n} / 12`;
    dots.forEach((d,i)=>{
      const on=i===active;
      d.classList.toggle('is-active',on);
      d.setAttribute('aria-selected',String(on));
    });
    if(prev){prev.disabled=active===0;prev.setAttribute('aria-disabled',String(active===0));}
    if(next){next.disabled=active===slides.length-1;next.setAttribute('aria-disabled',String(active===slides.length-1));}
  };
  prev?.addEventListener('click',()=>goTo(active-1));
  next?.addEventListener('click',()=>goTo(active+1));
  dots.forEach((d,i)=>d.addEventListener('click',()=>goTo(i)));
  track.addEventListener('keydown',e=>{
    if(e.key==='ArrowRight'){e.preventDefault();goTo(active+1)}
    if(e.key==='ArrowLeft'){e.preventDefault();goTo(active-1)}
  });
  let raf=0;
  track.addEventListener('scroll',()=>{
    cancelAnimationFrame(raf);
    raf=requestAnimationFrame(()=>{
      const step=getStep();
      if(!step)return;
      const idx=Math.round(track.scrollLeft/step);
      if(idx!==active){active=Math.max(0,Math.min(slides.length-1,idx));updateUI()}
    });
  },{passive:true});
  updateUI();
})();
