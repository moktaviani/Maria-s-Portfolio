// scatter ambient sparkles across the whole page background
const field = document.getElementById('sparkleField');
const positions = [
  {top:'8%', left:'6%'}, {top:'22%', left:'88%'}, {top:'40%', left:'12%'},
  {top:'62%', left:'92%'}, {top:'75%', left:'8%'}, {top:'15%', left:'50%'},
  {top:'55%', left:'48%'}, {top:'88%', left:'70%'}
];
positions.forEach((p, i)=>{
  const s = document.createElementNS('http://www.w3.org/2000/svg','svg');
  s.setAttribute('viewBox','0 0 20 20');
  s.setAttribute('width', 10 + (i % 3) * 4);
  s.setAttribute('height', 10 + (i % 3) * 4);
  s.classList.add('sparkle');
  s.style.top = p.top; s.style.left = p.left;
  s.style.animationDelay = (i * 0.4) + 's';
  s.innerHTML = '<path d="M10 0 l2.5 7.5 7.5 2.5 -7.5 2.5 -2.5 7.5 -2.5 -7.5 -7.5 -2.5 7.5 -2.5 z" fill="#C1876F"/>';
  field.appendChild(s);
});

const helloBtn = document.getElementById('sayHelloBtn');
const navContactBtn = document.getElementById('navContactBtn');
const character = document.getElementById('helloCharacter');

function triggerHelloCharacter(){
  character.classList.remove('pop');
  void character.offsetWidth;
  character.classList.add('pop');
}

helloBtn.addEventListener('click', triggerHelloCharacter);
navContactBtn.addEventListener('click', triggerHelloCharacter);

character.addEventListener('animationend', (e) => {
  if(e.target === character){
    character.classList.remove('pop');
  }
});




function createWandBurst(x, y){
  const starCount = 10;
  const colors = ['#E8C468', '#F2D98A', '#C1876F'];

  for(let i = 0; i < starCount; i++){
    const angle = (Math.PI * 2 * i) / starCount + (Math.random() * 0.4 - 0.2);
    const distance = 60 + Math.random() * 50;
    const endX = Math.cos(angle) * distance;
    const endY = Math.sin(angle) * distance;
    const size = 8 + Math.random() * 10;
    const color = colors[Math.floor(Math.random() * colors.length)];

    const star = document.createElement('div');
    star.className = 'wand-burst-star';
    star.style.setProperty('--start-x', x + 'px');
    star.style.setProperty('--start-y', y + 'px');
    star.style.setProperty('--end-x', (x + endX) + 'px');
    star.style.setProperty('--end-y', (y + endY) + 'px');
    star.style.width = size + 'px';
    star.style.height = size + 'px';

    star.innerHTML = `<svg viewBox="0 0 20 20"><path d="M10 0 l2.5 7.5 7.5 2.5 -7.5 2.5 -2.5 7.5 -2.5 -7.5 -7.5 -2.5 7.5 -2.5 z" fill="${color}"/></svg>`;

    document.body.appendChild(star);
    star.addEventListener('animationend', () => star.remove());
  }
}

document.addEventListener('click', (e) => {
  createWandBurst(e.clientX, e.clientY);
});
