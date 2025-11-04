(function(){
  'use strict';
  const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>Array.from(c.querySelectorAll(s));
  const state={active:null,lastFocus:null};
  function setOpen(type,open){
    const panel=$(`[data-panel="${type}"]`), overlay=$(`.panel-overlay[data-overlay-for="${type}"]`);
    if(!panel||!overlay) return;
    panel.setAttribute('data-open',open?'true':'false');
    panel.setAttribute('aria-hidden',open?'false':'true');
    overlay.setAttribute('data-open',open?'true':'false');
    overlay.setAttribute('aria-hidden',open?'false':'true');
    if(open){
      state.lastFocus=document.activeElement;
      (panel.querySelector('.panel-body,[tabindex]')||panel).focus({preventScroll:true});
      state.active=type; document.documentElement.style.overflow='hidden';
    }else{
      document.documentElement.style.overflow='';
      if(state.lastFocus&&document.contains(state.lastFocus)) state.lastFocus.focus({preventScroll:true});
      state.active=null;
    }
  }
  function closeActive(){ if(state.active) setOpen(state.active,false); }
  document.addEventListener('click',(e)=>{
    const openBtn=e.target.closest('[data-open]'); if(openBtn){ const t=openBtn.getAttribute('data-open'); if(t==='cart'||t==='wishlist') setOpen(t,true); return; }
    const closeBtn=e.target.closest('[data-close]'); if(closeBtn){ const t=closeBtn.getAttribute('data-close'); if(t==='cart'||t==='wishlist') setOpen(t,false); return; }
    const overlay=e.target.closest('.panel-overlay'); if(overlay){ const t=overlay.getAttribute('data-overlay-for'); if(t==='cart'||t==='wishlist') setOpen(t,false); }
  });
  document.addEventListener('keydown',(e)=>{
    if(e.key==='Escape') closeActive();
    if(e.key==='Tab'&&state.active){
      const p=$(`[data-panel="${state.active}"]`);
      const f=$$('a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])',p).filter(el=>el.offsetParent!==null);
      if(!f.length) return; const first=f[0], last=f[f.length-1];
      if(e.shiftKey && document.activeElement===first){ last.focus(); e.preventDefault(); }
      else if(!e.shiftKey && document.activeElement===last){ first.focus(); e.preventDefault(); }
    }
  });
  window.openCart=()=>setOpen('cart',true); window.closeCart=()=>setOpen('cart',false);
  window.openWishlist=()=>setOpen('wishlist',true); window.closeWishlist=()=>setOpen('wishlist',false);
})();
