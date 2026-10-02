/* Shagna Invites - guest links v1
   Link format: ?guest=Greeting%20Name&g=1..5
   - guest: the name/greeting shown after "Dear" (e.g. "Mr & Mrs Sharma & Family")
   - g: the guest group (1-5); each group sees only its events (set in window.SHAGNA.groups)
   No/invalid group = all events are shown. */
(function(){
  var C=window.SHAGNA||{},q=new URLSearchParams(location.search);
  var name=(q.get('guest')||'').replace(/\s+/g,' ').trim().slice(0,80);
  var g=parseInt(q.get('g'),10),groups=C.groups||{},labels=C.labels||{};
  function each(sel,fn){[].forEach.call(document.querySelectorAll(sel),fn)}
  function run(){
    var st=document.createElement('style');
    st.textContent='[data-event][hidden]{display:none!important}.sg-long{font-size:.78em!important;line-height:1.2!important}';
    document.head.appendChild(st);
    var els=[].slice.call(document.querySelectorAll('[data-event]')),all=[];
    els.forEach(function(e){e.getAttribute('data-event').split(/\s+/).forEach(function(id){if(id&&all.indexOf(id)<0)all.push(id)})});
    var list=groups[g],valid=g>=1&&g<=5&&list!==undefined;
    var allowed=(!valid||list==='all')?all:list.filter(function(id){return all.indexOf(id)>-1});
    if(!allowed.length)allowed=all;
    els.forEach(function(e){var ids=e.getAttribute('data-event').split(/\s+/);e.hidden=!ids.some(function(id){return allowed.indexOf(id)>-1})});
    if(name){
      each('[data-guest-template]',function(e){var t=e.getAttribute('data-guest-template').replace('{name}',function(){return name});e.textContent=t;if(t.length>34)e.classList.add('sg-long')});
      each('[data-guest-name]',function(e){e.textContent=name});
      each('[data-guest-input]',function(e){e.value=name});
    }
    var inv=allowed.map(function(id){return labels[id]||id}).join(', ');
    window.SHAGNA_GUEST={name:name,group:valid?g:null,events:allowed,rsvpText:(valid&&allowed.length<all.length)?'Invited to: '+inv:''};
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
})();
