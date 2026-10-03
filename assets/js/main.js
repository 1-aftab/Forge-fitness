(function(){
  document.documentElement.classList.add('js');
  var nav=document.getElementById('nav'),menu=document.getElementById('menu'),burger=document.getElementById('burger');
  function onScroll(){nav.classList.toggle('solid',window.scrollY>40)}
  onScroll();window.addEventListener('scroll',onScroll,{passive:true});
  burger.addEventListener('click',function(){var o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
  menu.addEventListener('click',function(e){if(e.target.tagName==='A'){menu.classList.remove('open');burger.setAttribute('aria-expanded',false)}});
  var els=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});
    els.forEach(function(el,i){el.style.transitionDelay=(i%3)*80+'ms';io.observe(el)});
  }else els.forEach(function(el){el.classList.add('in')});
  var today=document.querySelector('#hoursTable tr[data-d="'+new Date().getDay()+'"]');if(today)today.classList.add('today');
  var lb=document.getElementById('lb'),lbi=lb.querySelector('img');
  document.querySelectorAll('.gal button').forEach(function(b){b.addEventListener('click',function(){lbi.src=b.dataset.full;lbi.alt=b.querySelector('img').alt;lb.hidden=false;lb.querySelector('button').focus()})});
  function close(){lb.hidden=true}
  lb.addEventListener('click',close);document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
  document.getElementById('waForm').addEventListener('submit',function(e){
    e.preventDefault();var f=e.target;
    var t="Hi FORGE, I'm "+f.name.value+". I'm interested in: "+f.topic.value+"."+(f.msg.value?" "+f.msg.value:"");
    window.open('https://wa.me/15550100142?text='+encodeURIComponent(t),'_blank','noopener');
  });
})();
