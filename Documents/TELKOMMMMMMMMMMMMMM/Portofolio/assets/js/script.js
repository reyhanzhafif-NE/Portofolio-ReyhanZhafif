// ==========================================================
// 0. LANGUAGE TOGGLE (ID / EN)
// Kamus terjemahan ada di translations.js
// ==========================================================
let currentLang = 'en';

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.documentElement.setAttribute('lang', lang);
  currentLang = lang;

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang);
});

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
});

// ==========================================================
// 1. HAMBURGER MENU MOBILE
// ==========================================================
const navToggle = document.getElementById('navToggle');
const mainNav   = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  navToggle.classList.toggle('is-open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ==========================================================
// 2. HEADER SCROLL SHADOW
// ==========================================================
const siteHeader = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  siteHeader.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ==========================================================
// 3. NAV ACTIVE LINK ON SCROLL (IntersectionObserver)
// ==========================================================
const navLinks     = document.querySelectorAll('.nav-link');

// IntersectionObserver: highlight nav based on visible section
const sections = document.querySelectorAll('main section[id]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('data-section') === id);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

sections.forEach((section) => sectionObserver.observe(section));

// ==========================================================
// 4. SCROLL REVEAL (IntersectionObserver)
// ==========================================================
const animateEls = document.querySelectorAll('[data-animate]');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const delay = el.getAttribute('data-animate-delay') || '0';
      setTimeout(() => el.classList.add('is-visible'), parseInt(delay));
      revealObserver.unobserve(el);
    }
  });
}, { rootMargin: '0px 0px -60px 0px', threshold: 0.05 });

animateEls.forEach((el) => revealObserver.observe(el));

// ==========================================================
// 5. TERMINAL TYPING EFFECT
// ==========================================================
const terminalCmd  = document.getElementById('terminalCmd');
const terminalLines = [
  'status --uptime 99.9%',
  'ping 8.8.8.8 -t',
  'ssh reyhan@10.0.0.1',
  'traceroute google.com',
];

let lineIdx  = 0;
let charIdx  = 0;
let typing   = true;
let pauseMs  = 0;

function typeTerminal() {
  if (!terminalCmd) return;
  const line = terminalLines[lineIdx];

  if (pauseMs > 0) {
    pauseMs -= 60;
    setTimeout(typeTerminal, 60);
    return;
  }

  if (typing) {
    terminalCmd.textContent = line.slice(0, charIdx + 1);
    charIdx++;
    if (charIdx >= line.length) {
      typing = false;
      pauseMs = 1800;
    }
    setTimeout(typeTerminal, 65);
  } else {
    // Erase
    terminalCmd.textContent = line.slice(0, charIdx - 1);
    charIdx--;
    if (charIdx <= 0) {
      typing = true;
      lineIdx = (lineIdx + 1) % terminalLines.length;
      pauseMs = 400;
    }
    setTimeout(typeTerminal, 38);
  }
}

typeTerminal();

// ==========================================================
// 6. NETWORK TOPOLOGY CANVAS (Hero background)
// ==========================================================
(function initCanvas() {
  const canvas = document.getElementById('networkCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H, nodes, animationId;

  // Warna dari design tokens
  const COLOR_NODE   = 'rgba(57, 210, 192, ';
  const COLOR_EDGE   = 'rgba(57, 210, 192, ';
  const COLOR_PACKET = '#39D2C0';

  const MAX_DIST  = 160;
  const NODE_COUNT_BASE = 28;

  // Node
  class Node {
    constructor() { this.reset(true); }
    reset(init = false) {
      this.x  = Math.random() * W;
      this.y  = init ? Math.random() * H : -10;
      this.r  = Math.random() * 2 + 1.2;
      const speed = Math.random() * 0.25 + 0.08;
      const angle = (Math.random() * 60 - 30) * (Math.PI / 180);
      this.vx = Math.sin(angle) * speed;
      this.vy = Math.cos(angle) * speed;
      this.opacity = Math.random() * 0.5 + 0.3;
      this.pulsePhase = Math.random() * Math.PI * 2;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.pulsePhase += 0.025;
      if (this.y > H + 10) this.reset();
      if (this.x < -10 || this.x > W + 10) {
        this.vx *= -1;
      }
    }
    draw() {
      const pulse = 0.8 + Math.sin(this.pulsePhase) * 0.2;
      const r = this.r * pulse;
      ctx.beginPath();
      ctx.arc(this.x, this.y, r, 0, Math.PI * 2);
      ctx.fillStyle = COLOR_NODE + (this.opacity * pulse) + ')';
      ctx.fill();

      // Glow ring
      ctx.beginPath();
      ctx.arc(this.x, this.y, r * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = COLOR_NODE + (this.opacity * 0.08) + ')';
      ctx.fill();
    }
  }

  // Packet
  class Packet {
    constructor(from, to) {
      this.from = from;
      this.to   = to;
      this.t    = 0;
      this.speed = Math.random() * 0.008 + 0.006;
      this.active = true;
    }
    update() {
      this.t += this.speed;
      if (this.t >= 1) this.active = false;
    }
    draw() {
      const x = this.from.x + (this.to.x - this.from.x) * this.t;
      const y = this.from.y + (this.to.y - this.from.y) * this.t;
      const alpha = Math.sin(this.t * Math.PI);
      ctx.beginPath();
      ctx.arc(x, y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(57, 210, 192, ${alpha * 0.9})`;
      ctx.fill();
      // Tail
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(57, 210, 192, ${alpha * 0.2})`;
      ctx.fill();
    }
  }

  let packets = [];
  let packetTimer = 0;

  function resize() {
    W = canvas.offsetWidth;
    H = canvas.offsetHeight;
    canvas.width  = W;
    canvas.height = H;

    const count = Math.min(
      NODE_COUNT_BASE + Math.floor((W * H) / 22000),
      55
    );
    nodes = Array.from({ length: count }, () => new Node());
  }

  function drawEdges() {
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.25;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = COLOR_EDGE + alpha + ')';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
  }

  function spawnPacket() {
    // Cari sepasang node yang cukup dekat
    const candidates = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        if (Math.sqrt(dx * dx + dy * dy) < MAX_DIST * 0.7) {
          candidates.push([i, j]);
        }
      }
    }
    if (candidates.length === 0) return;
    const [i, j] = candidates[Math.floor(Math.random() * candidates.length)];
    packets.push(new Packet(nodes[i], nodes[j]));
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);

    drawEdges();
    nodes.forEach((n) => { n.update(); n.draw(); });

    // Packet spawning
    packetTimer++;
    if (packetTimer % 30 === 0) spawnPacket();

    packets = packets.filter((p) => p.active);
    packets.forEach((p) => { p.update(); p.draw(); });

    animationId = requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => {
    cancelAnimationFrame(animationId);
    resize();
    animate();
  }, { passive: true });

  resize();
  animate();
})();

// ==========================================================
// 7. CAROUSEL PROYEK
// ==========================================================
const track        = document.getElementById('carouselTrack');
const prevBtn      = document.getElementById('carouselPrev');
const nextBtn      = document.getElementById('carouselNext');
const dotsContainer = document.getElementById('carouselDots');

if (track) {
  const cards = Array.from(track.children);

  // Buat dots
  cards.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.classList.add('carousel-dot');
    dot.setAttribute('aria-label', `Ke proyek ${index + 1}`);
    if (index === 0) dot.classList.add('is-active');
    dot.addEventListener('click', () => {
      cards[index].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    });
    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(dotsContainer.children);

  function scrollByCard(direction) {
    const cardWidth = cards[0].getBoundingClientRect().width + 24;
    track.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
  }

  prevBtn.addEventListener('click', () => scrollByCard(-1));
  nextBtn.addEventListener('click', () => scrollByCard(1));

  let scrollTimeout;
  track.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const trackLeft = track.getBoundingClientRect().left;
      let closestIndex = 0;
      let closestDist  = Infinity;

      cards.forEach((card, index) => {
        const dist = Math.abs(card.getBoundingClientRect().left - trackLeft);
        if (dist < closestDist) { closestDist = dist; closestIndex = index; }
      });

      dots.forEach((dot, index) => {
        dot.classList.toggle('is-active', index === closestIndex);
      });
    }, 80);
  }, { passive: true });
}

// ==========================================================
// 8. FORM KONTAK
// ==========================================================
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/GANTI_DENGAN_ENDPOINT_KAMU';

const contactForm  = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    formFeedback.textContent = translations[currentLang].form_feedback_incomplete;
    return;
  }

  // Jika endpoint belum diganti, tampilkan pesan informatif
  if (FORMSPREE_ENDPOINT.includes('GANTI_DENGAN')) {
    formFeedback.textContent = translations[currentLang].form_feedback_not_configured || '⚠ Form endpoint belum dikonfigurasi. Hubungi via email langsung.';
    return;
  }

  formFeedback.textContent = translations[currentLang].form_feedback_sending;

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(contactForm),
    });

    if (response.ok) {
      formFeedback.textContent = translations[currentLang].form_feedback_success.replace('{name}', name);
      contactForm.reset();
    } else {
      formFeedback.textContent = translations[currentLang].form_feedback_error;
    }
  } catch {
    formFeedback.textContent = translations[currentLang].form_feedback_error;
  }
});
