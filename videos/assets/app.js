
const modal=document.getElementById('modal');
const player=document.getElementById('player');
const mtitle=document.getElementById('modalTitle');
function openVideo(src,title){
  mtitle.textContent=title; player.src=src; modal.classList.add('open');
  document.body.style.overflow='hidden'; player.play().catch(()=>{});
}
function closeVideo(){
  player.pause(); player.removeAttribute('src'); player.load();
  modal.classList.remove('open'); document.body.style.overflow='';
}
document.getElementById('close').addEventListener('click',closeVideo);
modal.addEventListener('click',e=>{if(e.target===modal)closeVideo()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeVideo()});
