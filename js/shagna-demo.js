/* Shagna Invites - demo bar v1. Shows only when window.SHAGNA_SITE.demo === true.
   For customer delivery: set demo:false (or delete this file and its <script> line). */
(function(){
  var S=window.SHAGNA_SITE;if(!S||!S.demo)return;
  function run(){
    var css=document.createElement('style');
    css.textContent='#sg-bar{position:fixed;left:0;right:0;bottom:0;z-index:90;display:flex;align-items:center;justify-content:space-between;gap:8px;padding:9px 12px calc(9px + env(safe-area-inset-bottom,0px));background:rgba(255,253,248,.95);border-top:1.5px solid #c2a066;backdrop-filter:blur(6px);font:600 .95rem "Cormorant Garamond",Georgia,serif;opacity:0;transform:translateY(100%);transition:opacity .8s,transform .8s}'
    +'body.entered #sg-bar{opacity:1;transform:none}#sg-bar a{color:#8c4455;text-decoration:none;white-space:nowrap}'
    +'#sg-bar .go{padding:8px 16px;border-radius:30px;background:linear-gradient(135deg,#e3a7b2,#b9707e);color:#fff;box-shadow:0 4px 12px rgba(185,112,126,.35)}'
    +'#sg-bar .dl{display:none}body.entered{padding-bottom:64px}body.entered #music{bottom:78px}'
    +'@media(min-width:620px){#sg-bar .dl{display:inline}#sg-bar .ds{display:none}#sg-bar{padding-left:28px;padding-right:28px;font-size:1.05rem}}';
    document.head.appendChild(css);
    var msg=encodeURIComponent('Hi Shagna Invites, I would like to order the "'+(S.name||'this design')+'" invitation.');
    var bar=document.createElement('div');bar.id='sg-bar';
    bar.innerHTML='<a href="'+S.home+'">&larr; <span class="ds">Home</span><span class="dl">Back to Shagna Invites</span></a>'
      +'<a href="'+S.catalogue+'">More designs</a>'
      +'<a class="go" target="_blank" rel="noopener" href="https://wa.me/'+S.whatsapp+'?text='+msg+'">Order this design<span class="dl"> on WhatsApp</span></a>';
    document.body.appendChild(bar);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
})();
