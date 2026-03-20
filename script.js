// CURSOR
const cursor=document.querySelector('.cursor');
document.addEventListener('mousemove',e=>{
cursor.style.left=e.clientX+'px';
cursor.style.top=e.clientY+'px';
});

// HAMBURGER
const burger=document.querySelector('.hamburger');
const nav=document.querySelector('.nav-links');
burger.addEventListener('click',()=>nav.classList.toggle('active'));

// SCROLL ANIMATION
const faders=document.querySelectorAll('.fade-in');
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add('visible');
}
});
});
faders.forEach(el=>observer.observe(el));

// 3D TILT
document.querySelectorAll('.service-card,.portfolio-item').forEach(card=>{
card.addEventListener('mousemove',e=>{
const rect=card.getBoundingClientRect();
const x=e.clientX-rect.left;
const y=e.clientY-rect.top;
card.style.transform=`rotateX(${(y/20)}deg) rotateY(${(x/20)}deg)`;
});
card.addEventListener('mouseleave',()=>card.style.transform='rotateX(0) rotateY(0)');
});

// CANVAS HAIR EFFECT
const canvas=document.getElementById('hairCanvas');
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let lines=[];
for(let i=0;i<60;i++){
lines.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,len:50});
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
lines.forEach(l=>{
ctx.beginPath();
ctx.moveTo(l.x,l.y);
ctx.lineTo(l.x+Math.sin(Date.now()/500)*20,l.y-l.len);
ctx.strokeStyle='rgba(255,105,180,0.3)';
ctx.stroke();
l.y+=1;
if(l.y>canvas.height)l.y=0;
});
requestAnimationFrame(animate);
}
animate();
