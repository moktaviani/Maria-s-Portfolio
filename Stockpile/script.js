// Scatter ambient sparkles across the page background — same motif as the
// main portfolio page, so every project detail still feels like dela's world.
document.addEventListener('DOMContentLoaded', () => {
  const field = document.getElementById('sparkleField');
  if (!field) return;

  const positions = [
    { top: '6%',  left: '4%'  },
    { top: '18%', left: '92%' },
    { top: '34%', left: '10%' },
    { top: '52%', left: '95%' },
    { top: '68%', left: '6%'  },
    { top: '12%', left: '50%' },
    { top: '80%', left: '46%' },
    { top: '90%', left: '80%' }
  ];

  positions.forEach((p, i) => {
    const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    s.setAttribute('viewBox', '0 0 20 20');
    s.setAttribute('width', 10 + (i % 3) * 4);
    s.setAttribute('height', 10 + (i % 3) * 4);
    s.classList.add('sparkle');
    s.style.position = 'absolute';
    s.style.top = p.top;
    s.style.left = p.left;
    s.style.animationDelay = (i * 0.4) + 's';
    s.innerHTML = '<path d="M10 0 l2.5 7.5 7.5 2.5 -7.5 2.5 -2.5 7.5 -2.5 -7.5 -7.5 -2.5 7.5 -2.5 z" fill="#C1876F"/>';
    field.appendChild(s);
  });
});