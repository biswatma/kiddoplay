// Kids Play Zone: 20 Mini-Games Orchestration

// ==========================================
// 1. SHARED ASSETS LIBRARY (SVGs & CONFIGS)
// ==========================================
const ASSETS = {
  bases: {
    human: `
      <svg viewBox="0 0 200 200">
        <!-- Ears -->
        <circle cx="20" cy="100" r="18" fill="#fbc3a6" stroke="#2d2d2d" stroke-width="6" />
        <circle cx="180" cy="100" r="18" fill="#fbc3a6" stroke="#2d2d2d" stroke-width="6" />
        <!-- Face Base -->
        <circle cx="100" cy="100" r="80" fill="#ffd5be" stroke="#2d2d2d" stroke-width="6" />
        <!-- Rosy Cheeks -->
        <circle cx="50" cy="115" r="12" fill="#ff8ba7" opacity="0.4" />
        <circle cx="150" cy="115" r="12" fill="#ff8ba7" opacity="0.4" />
      </svg>
    `,
    robot: `
      <svg viewBox="0 0 200 200">
        <!-- Antenna -->
        <line x1="100" y1="35" x2="100" y2="10" stroke="#2d2d2d" stroke-width="6" stroke-linecap="round" />
        <circle cx="100" cy="10" r="10" fill="#fee440" stroke="#2d2d2d" stroke-width="6" />
        <!-- Ears (bolts) -->
        <rect x="10" y="85" width="16" height="30" rx="4" fill="#a0a0a0" stroke="#2d2d2d" stroke-width="6" />
        <rect x="174" y="85" width="16" height="30" rx="4" fill="#a0a0a0" stroke="#2d2d2d" stroke-width="6" />
        <!-- Face Base -->
        <rect x="26" y="35" width="148" height="130" rx="20" fill="#a2d2ff" stroke="#2d2d2d" stroke-width="6" />
        <rect x="40" y="50" width="120" height="100" rx="10" fill="#bde0fe" opacity="0.5" />
        <!-- Side Rivets -->
        <circle cx="42" cy="52" r="4" fill="#505050" />
        <circle cx="158" cy="52" r="4" fill="#505050" />
        <circle cx="42" cy="148" r="4" fill="#505050" />
        <circle cx="158" cy="148" r="4" fill="#505050" />
      </svg>
    `,
    monster: `
      <svg viewBox="0 0 200 200">
        <!-- Horns -->
        <path d="M 50 35 L 35 10 Q 55 12 60 30 Z" fill="#fee440" stroke="#2d2d2d" stroke-width="6" stroke-linejoin="round" />
        <path d="M 150 35 L 165 10 Q 145 12 140 30 Z" fill="#fee440" stroke="#2d2d2d" stroke-width="6" stroke-linejoin="round" />
        <!-- Fuzzy Body -->
        <path d="M 100 20 C 130 20, 175 40, 175 95 C 175 120, 185 155, 160 170 C 130 185, 70 185, 40 170 C 15 155, 25 120, 25 95 C 25 40, 70 20, 100 20 Z" fill="#bdb2ff" stroke="#2d2d2d" stroke-width="6" stroke-linejoin="round" />
        <!-- Dots -->
        <circle cx="65" cy="55" r="8" fill="#9b5de5" opacity="0.3" />
        <circle cx="135" cy="55" r="8" fill="#9b5de5" opacity="0.3" />
        <circle cx="155" cy="100" r="10" fill="#9b5de5" opacity="0.3" />
      </svg>
    `,
    cat: `
      <svg viewBox="0 0 200 200">
        <!-- Ears -->
        <path d="M 30 50 L 20 10 L 70 35 Z" fill="#ffcad4" stroke="#2d2d2d" stroke-width="6" stroke-linejoin="round" />
        <path d="M 170 50 L 180 10 L 130 35 Z" fill="#ffcad4" stroke="#2d2d2d" stroke-width="6" stroke-linejoin="round" />
        <!-- Inner Ears -->
        <path d="M 32 45 L 26 22 L 60 35 Z" fill="#ffb5a7" />
        <path d="M 168 45 L 174 22 L 140 35 Z" fill="#ffb5a7" />
        <!-- Face Base -->
        <ellipse cx="100" cy="105" rx="76" ry="65" fill="#ffe5ec" stroke="#2d2d2d" stroke-width="6" />
        <!-- Rosy Cheeks -->
        <circle cx="48" cy="115" r="10" fill="#ffb5a7" opacity="0.5" />
        <circle cx="152" cy="115" r="10" fill="#ffb5a7" opacity="0.5" />
      </svg>
    `
  },
  features: {
    eyes: {
      happy: {
        width: 100, height: 40,
        svg: `
          <svg viewBox="0 0 100 40">
            <!-- Left Eye -->
            <circle cx="25" cy="20" r="15" fill="#ffffff" stroke="#2d2d2d" stroke-width="5" />
            <circle class="pupil" cx="25" cy="20" r="7" fill="#2d2d2d" />
            <circle cx="22" cy="17" r="3" fill="#ffffff" />
            <path d="M 15 5 Q 25 0 35 5" fill="none" stroke="#2d2d2d" stroke-width="4" stroke-linecap="round" />
            <!-- Right Eye -->
            <circle cx="75" cy="20" r="15" fill="#ffffff" stroke="#2d2d2d" stroke-width="5" />
            <circle class="pupil" cx="75" cy="20" r="7" fill="#2d2d2d" />
            <circle cx="72" cy="17" r="3" fill="#ffffff" />
            <path d="M 65 5 Q 75 0 85 5" fill="none" stroke="#2d2d2d" stroke-width="4" stroke-linecap="round" />
          </svg>
        `
      },
      googly: {
        width: 100, height: 45,
        svg: `
          <svg viewBox="0 0 100 45">
            <!-- Left Eye -->
            <circle cx="25" cy="22" r="18" fill="#ffffff" stroke="#2d2d2d" stroke-width="5" />
            <circle class="pupil" cx="21" cy="25" r="8" fill="#2d2d2d" />
            <circle cx="18" cy="21" r="3" fill="#ffffff" />
            <!-- Right Eye -->
            <circle cx="75" cy="22" r="18" fill="#ffffff" stroke="#2d2d2d" stroke-width="5" />
            <circle class="pupil" cx="78" cy="18" r="8" fill="#2d2d2d" />
            <circle cx="75" cy="14" r="3" fill="#ffffff" />
          </svg>
        `
      },
      sleepy: {
        width: 90, height: 35,
        svg: `
          <svg viewBox="0 0 90 35">
            <!-- Left Sleepy Curved line -->
            <path d="M 10 15 Q 25 30 40 15" fill="none" stroke="#2d2d2d" stroke-width="6" stroke-linecap="round" />
            <line x1="15" y1="21" x2="10" y2="28" stroke="#2d2d2d" stroke-width="4" stroke-linecap="round" />
            <line x1="25" y1="23" x2="25" y2="32" stroke="#2d2d2d" stroke-width="4" stroke-linecap="round" />
            <line x1="35" y1="21" x2="40" y2="28" stroke="#2d2d2d" stroke-width="4" stroke-linecap="round" />
            <!-- Right Sleepy -->
            <path d="M 50 15 Q 65 30 80 15" fill="none" stroke="#2d2d2d" stroke-width="6" stroke-linecap="round" />
            <line x1="55" y1="21" x2="50" y2="28" stroke="#2d2d2d" stroke-width="4" stroke-linecap="round" />
            <line x1="65" y1="23" x2="65" y2="32" stroke="#2d2d2d" stroke-width="4" stroke-linecap="round" />
            <line x1="75" y1="21" x2="80" y2="28" stroke="#2d2d2d" stroke-width="4" stroke-linecap="round" />
          </svg>
        `
      },
      stars: {
        width: 110, height: 45,
        svg: `
          <svg viewBox="0 0 110 45">
            <!-- Left Star -->
            <path d="M 25 2 L 31 14 L 44 14 L 34 22 L 38 35 L 25 27 L 12 35 L 16 22 L 6 14 L 19 14 Z" fill="#fee440" stroke="#2d2d2d" stroke-width="5" stroke-linejoin="round" />
            <!-- Right Star -->
            <path d="M 85 2 L 91 14 L 104 14 L 94 22 L 98 35 L 85 27 L 72 35 L 76 22 L 66 14 L 79 14 Z" fill="#fee440" stroke="#2d2d2d" stroke-width="5" stroke-linejoin="round" />
            <!-- Connector Bridge -->
            <path d="M 44 18 Q 55 12 66 18" fill="none" stroke="#2d2d2d" stroke-width="6" stroke-linecap="round" />
          </svg>
        `
      }
    },
    noses: {
      button: {
        width: 45, height: 35,
        svg: `
          <svg viewBox="0 0 45 35">
            <ellipse cx="22.5" cy="17.5" rx="18" ry="12" fill="#ff8ba7" stroke="#2d2d2d" stroke-width="5" />
            <ellipse cx="18" cy="14" rx="5" ry="3" fill="#ffffff" opacity="0.6" />
          </svg>
        `
      },
      carrot: {
        width: 65, height: 40,
        svg: `
          <svg viewBox="0 0 65 40">
            <path d="M 5 20 Q 30 10 60 5 L 25 35 Z" fill="#f39c12" stroke="#2d2d2d" stroke-width="5" stroke-linejoin="round" />
            <line x1="20" y1="18" x2="16" y2="25" stroke="#d35400" stroke-width="3" stroke-linecap="round" />
            <line x1="32" y1="16" x2="28" y2="23" stroke="#d35400" stroke-width="3" stroke-linecap="round" />
          </svg>
        `
      },
      robot: {
        width: 40, height: 40,
        svg: `
          <svg viewBox="0 0 40 40">
            <rect x="5" y="5" width="30" height="30" rx="8" fill="#00bbf9" stroke="#2d2d2d" stroke-width="5" />
            <circle cx="20" cy="20" r="6" fill="#fee440" />
          </svg>
        `
      },
      clown: {
        width: 45, height: 45,
        svg: `
          <svg viewBox="0 0 45 45">
            <circle cx="22.5" cy="22.5" r="18" fill="#ff595e" stroke="#2d2d2d" stroke-width="5" />
            <circle cx="16" cy="16" r="5" fill="#ffffff" />
          </svg>
        `
      }
    },
    mouths: {
      happy: {
        width: 80, height: 50,
        svg: `
          <svg viewBox="0 0 80 50">
            <!-- Open smiling mouth -->
            <path d="M 10 15 Q 40 15 70 15 C 70 40, 10 40, 10 15 Z" fill="#ff2a5f" stroke="#2d2d2d" stroke-width="5" stroke-linejoin="round" />
            <!-- Teeth -->
            <path d="M 15 15 C 20 23, 60 23, 65 15 Z" fill="#ffffff" />
            <!-- Tongue -->
            <path d="M 25 32 Q 40 22 55 32 C 50 43, 30 43, 25 32 Z" fill="#ff8ba7" />
          </svg>
        `
      },
      silly: {
        width: 75, height: 55,
        svg: `
          <svg viewBox="0 0 75 55">
            <!-- Smile Line -->
            <path d="M 10 15 Q 37.5 35 65 15" fill="none" stroke="#2d2d2d" stroke-width="6" stroke-linecap="round" />
            <!-- Tongue sticking out -->
            <path d="M 25 24 C 25 45, 50 45, 50 24 Z" fill="#ff595e" stroke="#2d2d2d" stroke-width="5" stroke-linejoin="round" />
            <line x1="37.5" y1="24" x2="37.5" y2="38" stroke="#2d2d2d" stroke-width="3" />
          </svg>
        `
      },
      robot: {
        width: 80, height: 35,
        svg: `
          <svg viewBox="0 0 80 35">
            <rect x="5" y="5" width="70" height="25" rx="6" fill="#e0e0e0" stroke="#2d2d2d" stroke-width="5" />
            <!-- Grid wave -->
            <path d="M 15 17 L 25 17 L 30 10 L 35 25 L 40 17 L 50 17 L 55 10 L 60 25 L 65 17" fill="none" stroke="#00f5d4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        `
      },
      whiskers: {
        width: 100, height: 45,
        svg: `
          <svg viewBox="0 0 100 45">
            <!-- Muzzle -->
            <path d="M 32 20 Q 50 30 50 20 Q 50 30 68 20" fill="none" stroke="#2d2d2d" stroke-width="5" stroke-linecap="round" />
            <!-- Nose -->
            <polygon points="45,12 55,12 50,18" fill="#ff8ba7" stroke="#2d2d2d" stroke-width="3" stroke-linejoin="round" />
            <!-- Whiskers Left -->
            <line x1="25" y1="15" x2="5" y2="10" stroke="#2d2d2d" stroke-width="4" stroke-linecap="round" />
            <line x1="25" y1="22" x2="3" y2="22" stroke="#2d2d2d" stroke-width="4" stroke-linecap="round" />
            <!-- Whiskers Right -->
            <line x1="75" y1="15" x2="95" y2="10" stroke="#2d2d2d" stroke-width="4" stroke-linecap="round" />
            <line x1="75" y1="22" x2="97" y2="22" stroke="#2d2d2d" stroke-width="4" stroke-linecap="round" />
          </svg>
        `
      }
    },
    accessories: {
      party: {
        width: 75, height: 85,
        svg: `
          <svg viewBox="0 0 75 85">
            <!-- Hat Cone -->
            <path d="M 37.5 15 L 5 75 L 70 75 Z" fill="#9b5de5" stroke="#2d2d2d" stroke-width="5" stroke-linejoin="round" />
            <!-- Colorful Stripes -->
            <path d="M 29 32 L 5 75 L 22 75 L 34 42 Z" fill="#00f5d4" />
            <path d="M 46 32 L 34 42 L 48 75 L 65 75 Z" fill="#f15bb5" />
            <!-- Pompom on top -->
            <circle cx="37.5" cy="12" r="10" fill="#fee440" stroke="#2d2d2d" stroke-width="4" />
          </svg>
        `
      },
      flower: {
        width: 65, height: 65,
        svg: `
          <svg viewBox="0 0 65 65">
            <!-- Petals -->
            <circle cx="32.5" cy="18" r="12" fill="#f15bb5" stroke="#2d2d2d" stroke-width="4" />
            <circle cx="47" cy="27" r="12" fill="#f15bb5" stroke="#2d2d2d" stroke-width="4" />
            <circle cx="41" cy="45" r="12" fill="#f15bb5" stroke="#2d2d2d" stroke-width="4" />
            <circle cx="24" cy="45" r="12" fill="#f15bb5" stroke="#2d2d2d" stroke-width="4" />
            <circle cx="18" cy="27" r="12" fill="#f15bb5" stroke="#2d2d2d" stroke-width="4" />
            <!-- Center -->
            <circle cx="32.5" cy="32.5" r="10" fill="#fee440" stroke="#2d2d2d" stroke-width="4" />
          </svg>
        `
      },
      bowtie: {
        width: 80, height: 45,
        svg: `
          <svg viewBox="0 0 80 45">
            <!-- Bow Wings -->
            <path d="M 10 5 L 40 22.5 L 10 40 Z" fill="#00f5d4" stroke="#2d2d2d" stroke-width="5" stroke-linejoin="round" />
            <path d="M 70 5 L 40 22.5 L 70 40 Z" fill="#00f5d4" stroke="#2d2d2d" stroke-width="5" stroke-linejoin="round" />
            <!-- Dots on Wings -->
            <circle cx="20" cy="15" r="4" fill="#fee440" />
            <circle cx="20" cy="30" r="4" fill="#fee440" />
            <circle cx="60" cy="15" r="4" fill="#fee440" />
            <circle cx="60" cy="30" r="4" fill="#fee440" />
            <!-- Center Knot -->
            <rect x="33" y="12.5" width="14" height="20" rx="4" fill="#fee440" stroke="#2d2d2d" stroke-width="5" />
          </svg>
        `
      },
      chef: {
        width: 90, height: 80,
        svg: `
          <svg viewBox="0 0 90 80">
            <!-- Hat Puff -->
            <path d="M 25 45 C 5 45, 10 15, 30 25 C 30 5, 60 5, 60 25 C 80 15, 85 45, 65 45 Z" fill="#ffffff" stroke="#2d2d2d" stroke-width="5" stroke-linejoin="round" />
            <!-- Hat Base Band -->
            <rect x="25" y="45" width="40" height="20" fill="#ffffff" stroke="#2d2d2d" stroke-width="5" />
          </svg>
        `
      }
    }
  },
  shapes: {
    circle: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" stroke="#2d2d2d" stroke-width="6" /></svg>`,
    square: `<svg viewBox="0 0 100 100"><rect x="15" y="15" width="70" height="70" rx="10" stroke="#2d2d2d" stroke-width="6" /></svg>`,
    triangle: `<svg viewBox="0 0 100 100"><polygon points="50,15 15,80 85,80" stroke="#2d2d2d" stroke-width="6" stroke-linejoin="round" /></svg>`,
    star: `<svg viewBox="0 0 100 100"><polygon points="50,5 64,36 98,36 70,57 81,91 50,70 19,91 30,57 2,36 36,36" stroke="#2d2d2d" stroke-width="6" stroke-linejoin="round" /></svg>`
  },
  dino: `
    <svg viewBox="0 0 200 200" id="dino-svg" style="width: 100%; height: 100%;">
      <!-- Dino Tail -->
      <path id="part-tail" d="M 50 130 Q 15 150 10 110 Q 25 100 50 110 Z" fill="#ffffff" stroke="#2d2d2d" stroke-width="5" stroke-linejoin="round" />
      <!-- Dino Feet -->
      <rect id="part-foot1" x="70" y="140" width="22" height="30" rx="10" fill="#ffffff" stroke="#2d2d2d" stroke-width="5" />
      <rect id="part-foot2" x="110" y="140" width="22" height="30" rx="10" fill="#ffffff" stroke="#2d2d2d" stroke-width="5" />
      <!-- Dino Body -->
      <path id="part-body" d="M 50 120 C 50 80, 70 60, 100 60 C 130 60, 150 80, 150 120 C 150 150, 50 150, 50 120 Z" fill="#ffffff" stroke="#2d2d2d" stroke-width="5" stroke-linejoin="round" />
      <!-- Dino Neck & Head -->
      <path id="part-head" d="M 120 70 L 150 20 Q 185 25 180 50 L 140 90 Z" fill="#ffffff" stroke="#2d2d2d" stroke-width="5" stroke-linejoin="round" />
      <!-- Dino Plates/Spikes -->
      <polygon id="part-spike1" points="80,60 90,45 100,60" fill="#ffffff" stroke="#2d2d2d" stroke-width="4" />
      <polygon id="part-spike2" points="110,60 120,45 130,60" fill="#ffffff" stroke="#2d2d2d" stroke-width="4" />
      <!-- Dino Eye -->
      <circle cx="160" cy="35" r="4" fill="#2d2d2d" />
      <!-- Cute Cheek -->
      <circle cx="168" cy="44" r="6" fill="#ffb5a7" opacity="0.6" />
    </svg>
  `,
  teddy: `
    <svg viewBox="0 0 200 200" id="teddy-svg" style="width: 100%; height: 100%;">
      <!-- Ears -->
      <circle cx="60" cy="55" r="22" fill="#d3a27f" stroke="#2d2d2d" stroke-width="5" />
      <circle cx="60" cy="55" r="12" fill="#ffcad4" />
      <circle cx="140" cy="55" r="22" fill="#d3a27f" stroke="#2d2d2d" stroke-width="5" />
      <circle cx="140" cy="55" r="12" fill="#ffcad4" />
      <!-- Arms -->
      <circle cx="45" cy="120" r="18" fill="#d3a27f" stroke="#2d2d2d" stroke-width="5" />
      <circle cx="155" cy="120" r="18" fill="#d3a27f" stroke="#2d2d2d" stroke-width="5" />
      <!-- Feet -->
      <circle cx="65" cy="165" r="22" fill="#d3a27f" stroke="#2d2d2d" stroke-width="5" />
      <circle cx="135" cy="165" r="22" fill="#d3a27f" stroke="#2d2d2d" stroke-width="5" />
      <!-- Body -->
      <circle cx="100" cy="125" r="45" fill="#e7bc91" stroke="#2d2d2d" stroke-width="5" />
      <circle cx="100" cy="125" r="30" fill="#f4d3b8" />
      <!-- Head -->
      <circle cx="100" cy="85" r="40" fill="#d3a27f" stroke="#2d2d2d" stroke-width="5" />
      <!-- Snout -->
      <ellipse cx="100" cy="94" rx="14" ry="10" fill="#f4d3b8" stroke="#2d2d2d" stroke-width="3" />
      <polygon points="95,90 105,90 100,95" fill="#2d2d2d" />
      <!-- Eyes -->
      <circle cx="85" cy="80" r="5" fill="#2d2d2d" />
      <circle cx="115" cy="80" r="5" fill="#2d2d2d" />
      <circle cx="83" cy="78" r="1.5" fill="#ffffff" />
      <circle cx="113" cy="78" r="1.5" fill="#ffffff" />
      <!-- Cheeks -->
      <circle cx="75" cy="88" r="6" fill="#ffb5a7" opacity="0.6" />
      <circle cx="125" cy="88" r="6" fill="#ffb5a7" opacity="0.6" />
    </svg>
  `
};

// ==========================================
// 1.5 CONFETTI/PARTICLE EFFECTS ENGINE
// ==========================================
class ConfettiEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.active = false;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width * (window.devicePixelRatio || 1);
    this.canvas.height = rect.height * (window.devicePixelRatio || 1);
    this.ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
  }

  burst(x, y, count = 30) {
    if (!this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    const relativeX = x - rect.left;
    const relativeY = y - rect.top;

    const colors = ['#fee440', '#00bbf9', '#00f5d4', '#9b5de5', '#f15bb5', '#ff595e', '#ffca3a', '#8ac926'];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 8;
      this.particles.push({
        x: relativeX,
        y: relativeY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (1 + Math.random() * 3),
        size: 4 + Math.random() * 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        decay: 0.015 + Math.random() * 0.02,
        gravity: 0.15,
        wobble: Math.random() * 10,
        wobbleSpeed: 0.1 + Math.random() * 0.1,
        shape: Math.random() > 0.5 ? 'circle' : 'rect'
      });
    }

    if (!this.active) {
      this.active = true;
      this.tick();
    }
  }

  tick() {
    if (this.particles.length === 0) {
      this.active = false;
      if (this.canvas) {
        const rect = this.canvas.getBoundingClientRect();
        this.ctx.clearRect(0, 0, rect.width, rect.height);
      }
      return;
    }

    if (!this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    this.ctx.clearRect(0, 0, rect.width, rect.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.alpha -= p.decay;
      p.wobble += p.wobbleSpeed;

      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = p.alpha;
      this.ctx.fillStyle = p.color;
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.wobble);

      if (p.shape === 'circle') {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        this.ctx.fill();
      } else {
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      }

      this.ctx.restore();
    }

    requestAnimationFrame(() => this.tick());
  }
}

// ==========================================
// 2. AUDIO SYNTHESIS ENGINE (Web Audio API)
// ==========================================
class AudioSynth {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playPop() {
    if (this.muted || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);

    const now = this.ctx.currentTime;
    osc.type = 'sine';
    osc.frequency.setValueAtTime(350, now);
    osc.frequency.exponentialRampToValueAtTime(1000, now + 0.1);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);

    osc.start(now);
    osc.stop(now + 0.1);
  }

  playSnap() {
    if (this.muted || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);

    const now = this.ctx.currentTime;
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.setValueAtTime(554.37, now + 0.06);
    osc.frequency.setValueAtTime(659.25, now + 0.12);
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

    osc.start(now);
    osc.stop(now + 0.3);
  }

  playSuccess() {
    if (this.muted || !this.ctx) return;
    const now = this.ctx.currentTime;
    const scale = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25];
    scale.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);

      const noteTime = now + idx * 0.07;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, noteTime);
      gain.gain.setValueAtTime(0.2, noteTime);
      gain.gain.exponentialRampToValueAtTime(0.01, noteTime + 0.25);

      osc.start(noteTime);
      osc.stop(noteTime + 0.25);
    });
  }

  playReset() {
    if (this.muted || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);

    const now = this.ctx.currentTime;
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.25);
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);

    osc.start(now);
    osc.stop(now + 0.25);
  }

  playNote(freq, duration = 0.3) {
    if (this.muted || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);

    const now = this.ctx.currentTime;
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now);
    
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + duration);

    osc.start(now);
    osc.stop(now + duration);
  }

  playDrum(type) {
    if (this.muted || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);

    if (type === 'bass') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(130, now);
      osc.frequency.exponentialRampToValueAtTime(30, now + 0.15);
      gain.gain.setValueAtTime(0.6, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
      osc.start(now);
      osc.stop(now + 0.15);
    } else if (type === 'snare') {
      // White noise synthesis for snare
      const bufferSize = this.ctx.sampleRate * 0.15;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1000;

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
      noise.start(now);
      noise.stop(now + 0.15);
    } else if (type === 'hihat') {
      const bufferSize = this.ctx.sampleRate * 0.05;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.value = 7000;

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
      noise.start(now);
      noise.stop(now + 0.05);
    }
  }

  // Synthesize animal-like cute melodies
  playAnimal(animal) {
    if (this.muted || !this.ctx) return;
    const now = this.ctx.currentTime;
    
    if (animal === 'cat') {
      // Meow sweep
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.quadraticRampToValueAtTime(900, now + 0.15);
      osc.frequency.exponentialRampToValueAtTime(750, now + 0.35);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
    } else if (animal === 'dog') {
      // Bark burst
      this.playDrum('snare');
    } else if (animal === 'cow') {
      // Low hum
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(110, now);
      osc.frequency.linearRampToValueAtTime(95, now + 0.5);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
      
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 300;
      osc.disconnect(gain);
      osc.connect(filter);
      filter.connect(gain);

      osc.start(now);
      osc.stop(now + 0.5);
    } else if (animal === 'duck') {
      // Quack tone modulation
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(420, now + 0.08);
      osc.frequency.linearRampToValueAtTime(350, now + 0.18);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);
      
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 600;
      osc.disconnect(gain);
      osc.connect(filter);
      filter.connect(gain);

      osc.start(now);
      osc.stop(now + 0.18);
    } else if (animal === 'sheep') {
      // Vibrato bleating
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      lfo.frequency.value = 15; // 15 Hz vibrato
      lfoGain.gain.value = 25;  // depth of pitch sweep
      
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, now);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);

      lfo.start(now);
      osc.start(now);
      lfo.stop(now + 0.4);
      osc.stop(now + 0.4);
    }
  }

  playBoing() {
    if (this.muted || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    const now = this.ctx.currentTime;
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.quadraticRampToValueAtTime(600, now + 0.15);
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.35);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
    osc.start(now);
    osc.stop(now + 0.35);
  }

  playThrust() {
    if (this.muted || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    const now = this.ctx.currentTime;
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(80, now);
    osc.frequency.linearRampToValueAtTime(120, now + 0.15);
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 180;
    osc.disconnect(gain);
    osc.connect(filter);
    filter.connect(gain);
    
    osc.start(now);
    osc.stop(now + 0.15);
  }

  playBuzz() {
    if (this.muted || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    lfo.frequency.value = 25;
    lfoGain.gain.value = 30;
    
    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);
    
    const now = this.ctx.currentTime;
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, now);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
    
    lfo.start(now);
    osc.start(now);
    lfo.stop(now + 0.2);
    osc.stop(now + 0.2);
  }

  playSplat() {
    if (this.muted || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    const now = this.ctx.currentTime;
    osc.type = 'sine';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.linearRampToValueAtTime(60, now + 0.18);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);
    osc.start(now);
    osc.stop(now + 0.18);
  }

  playCrunch() {
    if (this.muted || !this.ctx) return;
    const now = this.ctx.currentTime;
    for (let i = 0; i < 3; i++) {
      const time = now + i * 0.08;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(150 - i * 30, time);
      gain.gain.setValueAtTime(0.25, time);
      gain.gain.exponentialRampToValueAtTime(0.01, time + 0.06);
      osc.start(time);
      osc.stop(time + 0.06);
    }
  }
}

// ==========================================
// 3. VOICE NARRATION ENGINE
// ==========================================
class SpeechNarrator {
  constructor() {
    this.muted = false;
    this.synth = window.speechSynthesis;
    this.current = null;
  }

  speak(text) {
    if (this.muted || !this.synth) return;
    this.synth.cancel(); // Stop current speaking instantly

    this.current = new SpeechSynthesisUtterance(text);
    this.current.pitch = 1.35; // friendly high-pitch
    this.current.rate = 0.88;  // slightly slower for toddlers

    const voices = this.synth.getVoices();
    const childVoice = voices.find(v => 
      v.lang.includes('en') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha'))
    );
    if (childVoice) this.current.voice = childVoice;

    this.synth.speak(this.current);
  }
}

// ==========================================
// 4. BASE MINI-GAME PARENT CLASS
// ==========================================
class MiniGame {
  constructor(container, services) {
    this.container = container;
    this.services = services;
    this.activeIntervals = [];
    this.activeTimeouts = [];
  }

  start() {}
  
  cleanup() {
    this.activeIntervals.forEach(clearInterval);
    this.activeTimeouts.forEach(clearTimeout);
    this.container.innerHTML = '';
  }

  addInterval(fn, delay) {
    const id = setInterval(fn, delay);
    this.activeIntervals.push(id);
    return id;
  }

  addTimeout(fn, delay) {
    const id = setTimeout(fn, delay);
    this.activeTimeouts.push(id);
    return id;
  }
}

// ==========================================
// 5. IMPLEMENTATION OF 20 MINI-GAMES
// ==========================================

// Game 1: Face Puzzle
class GameFacePuzzle extends MiniGame {
  start() {
    this.char = 'human';
    this.mode = 'free';
    this.placedItems = [];
    this.matchState = { eyes: null, noses: null, mouths: null };

    this.container.innerHTML = `
      <div class="facepuzzle-layout">
        <div class="face-side">
          <button class="face-mode-switch active" id="f-free">Free Maker</button>
          <button class="face-mode-switch" id="f-match">Matcher</button>
          <button class="face-action-btn purple-btn" id="f-tickle" style="margin-top:20px;">Tickle</button>
          <button class="face-action-btn orange-btn" id="f-talk">Talk</button>
        </div>
        <div class="face-center">
          <div class="face-base-container" id="f-base"></div>
          <div class="match-targets-overlay hidden" id="f-targets"></div>
          <div class="placed-features-container" id="f-placed"></div>
        </div>
        <div class="face-side">
          <button class="face-btn active" data-c="human">👦</button>
          <button class="face-btn" data-c="robot">🤖</button>
          <button class="face-btn" data-c="monster">👾</button>
          <button class="face-btn" data-c="cat">🐱</button>
        </div>
        <div class="face-tray" id="f-tray"></div>
      </div>
    `;

    this.renderBase();
    this.renderTray('eyes');
    this.services.speech.speak("Drag features from the bottom to build a face!");

    // Wire clicks
    this.container.querySelectorAll('.face-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.container.querySelectorAll('.face-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.char = btn.getAttribute('data-c');
        this.renderBase();
      });
    });

    this.container.querySelector('#f-free').addEventListener('click', () => this.setMode('free'));
    this.container.querySelector('#f-match').addEventListener('click', () => this.setMode('match'));
    this.container.querySelector('#f-tickle').addEventListener('click', () => this.tickle());
    this.container.querySelector('#f-talk').addEventListener('click', () => this.talk());

    // Blinking eye routine
    this.addInterval(() => this.blink(), 3000);
  }

  renderBase() {
    this.container.querySelector('#f-base').innerHTML = ASSETS.bases[this.char];
    this.services.sound.playPop();
    if (this.mode === 'match') this.resetCanvas();
  }

  setMode(m) {
    this.mode = m;
    this.services.sound.playPop();
    this.container.querySelector('#f-free').classList.toggle('active', m === 'free');
    this.container.querySelector('#f-match').classList.toggle('active', m === 'match');
    const overlay = this.container.querySelector('#f-targets');
    if (m === 'match') {
      overlay.classList.remove('hidden');
      this.resetCanvas();
      this.renderOutlines();
    } else {
      overlay.classList.add('hidden');
    }
  }

  renderTray(cat) {
    const tray = this.container.querySelector('#f-tray');
    tray.innerHTML = '';
    
    // Combined categories items for easier kids usage
    const items = {
      ...ASSETS.features.eyes,
      ...ASSETS.features.noses,
      ...ASSETS.features.mouths,
      ...ASSETS.features.accessories
    };

    for (const [id, data] of Object.entries(items)) {
      // Find category
      let type = 'accessories';
      if (ASSETS.features.eyes[id]) type = 'eyes';
      else if (ASSETS.features.noses[id]) type = 'noses';
      else if (ASSETS.features.mouths[id]) type = 'mouths';

      const d = document.createElement('div');
      d.className = 'face-tray-item';
      d.innerHTML = data.svg;
      d.addEventListener('pointerdown', (e) => this.dragStart(e, id, type));
      tray.appendChild(d);
    }
  }

  dragStart(e, id, type) {
    e.preventDefault();
    this.services.sound.playPop();
    const floating = document.createElement('div');
    floating.className = 'floating-drag-item';
    floating.innerHTML = ASSETS.features[type][id].svg;
    document.body.appendChild(floating);
    floating.style.left = `${e.clientX}px`;
    floating.style.top = `${e.clientY}px`;

    const move = (me) => {
      floating.style.left = `${me.clientX}px`;
      floating.style.top = `${me.clientY}px`;
    };

    const up = (ue) => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      document.body.removeChild(floating);

      const rect = this.container.querySelector('.face-center').getBoundingClientRect();
      if (ue.clientX >= rect.left && ue.clientX <= rect.right && ue.clientY >= rect.top && ue.clientY <= rect.bottom) {
        const x = ((ue.clientX - rect.left) / rect.width) * 100;
        const y = ((ue.clientY - rect.top) / rect.height) * 100;
        this.place(id, type, x, y);
      }
    };

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  }

  place(id, type, x, y) {
    const data = { id, type, x, y, snapped: false };
    this.placedItems.push(data);
    const idx = this.placedItems.length - 1;

    const node = document.createElement('div');
    node.className = 'placed-item';
    node.style.left = `${x}%`;
    node.style.top = `${y}%`;
    const asset = ASSETS.features[type][id];
    node.style.width = `${asset.width}px`;
    node.style.height = `${asset.height}px`;
    node.innerHTML = asset.svg;

    node.addEventListener('pointerdown', (e) => this.dragPlaced(e, node, idx));
    this.container.querySelector('#f-placed').appendChild(node);

    if (this.mode === 'match') {
      this.checkMatch(node, idx);
    } else {
      this.services.sound.playSnap();
    }
  }

  dragPlaced(e, node, idx) {
    e.preventDefault();
    e.stopPropagation();
    const data = this.placedItems[idx];
    if (data.snapped) return;

    node.classList.add('dragging');
    const rect = this.container.querySelector('.face-center').getBoundingClientRect();

    const move = (me) => {
      data.x = Math.max(5, Math.min(95, ((me.clientX - rect.left) / rect.width) * 100));
      data.y = Math.max(5, Math.min(95, ((me.clientY - rect.top) / rect.height) * 100));
      node.style.left = `${data.x}%`;
      node.style.top = `${data.y}%`;
    };

    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      node.classList.remove('dragging');
      if (this.mode === 'match') this.checkMatch(node, idx);
      else this.services.sound.playPop();
    };

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  }

  checkMatch(node, idx) {
    const data = this.placedItems[idx];
    const target = PUZZLE_TARGETS[data.type];
    if (!target) return;

    const d = Math.hypot(data.x - target.x, data.y - target.y);
    if (d <= target.radius) {
      data.x = target.x;
      data.y = target.y;
      data.snapped = true;
      node.style.left = `${target.x}%`;
      node.style.top = `${target.y}%`;
      node.classList.add('snapped');
      this.services.sound.playSnap();
      
      const r = this.container.querySelector('.face-center').getBoundingClientRect();
      this.services.confetti.burst((target.x/100)*r.width, (target.y/100)*r.height);

      this.matchState[data.type] = data;
      this.services.speech.speak(`You matched the ${data.type}!`);

      if (this.matchState.eyes && this.matchState.noses && this.matchState.mouths) {
        this.addTimeout(() => {
          this.services.sound.playSuccess();
          this.services.confetti.burst(r.width/2, r.height/2, 60);
          this.services.speech.speak("Yay! Complete puzzle solver!");
        }, 500);
      }
    } else {
      this.services.sound.playPop();
    }
  }

  renderOutlines() {
    const overlay = this.container.querySelector('#f-targets');
    overlay.innerHTML = '';
    for (const [key, t] of Object.entries(PUZZLE_TARGETS)) {
      const outline = document.createElement('div');
      outline.className = 'target-outline';
      outline.style.left = `${t.x}%`;
      outline.style.top = `${t.y}%`;
      outline.style.width = `${t.radius * 4.5}%`;
      outline.style.height = `${t.radius * 4.5}%`;
      outline.innerHTML = `<span class="target-outline-label">${t.label}</span>`;
      overlay.appendChild(outline);
    }
  }

  blink() {
    const list = this.container.querySelectorAll('.placed-item');
    this.placedItems.forEach((item, index) => {
      if (item.type === 'eyes') {
        const el = list[index];
        if (el) {
          el.style.transform = 'translate(-50%, -50%) scaleY(0.1)';
          this.addTimeout(() => el.style.transform = 'translate(-50%, -50%) scaleY(1)', 150);
        }
      }
    });
  }

  tickle() {
    this.services.sound.playTickle();
    const items = this.container.querySelectorAll('.placed-item');
    items.forEach(el => {
      el.style.animation = 'snap-bounce 0.3s infinite';
      this.addTimeout(() => el.style.animation = 'none', 900);
    });
  }

  talk() {
    this.services.speech.speak("Beep boop! I am silly!");
    const items = this.container.querySelectorAll('.placed-item');
    this.placedItems.forEach((item, index) => {
      if (item.type === 'mouths') {
        const el = items[index];
        if (el) {
          el.style.transform = 'translate(-50%, -50%) scale(1.3)';
          this.addTimeout(() => el.style.transform = 'translate(-50%, -50%) scale(1)', 300);
        }
      }
    });
  }

  resetCanvas() {
    this.container.querySelector('#f-placed').innerHTML = '';
    this.placedItems = [];
    this.matchState = { eyes: null, noses: null, mouths: null };
    if (this.mode === 'match') this.renderOutlines();
  }
}

// Game 2: Pop the Balloons
class GameBalloons extends MiniGame {
  start() {
    this.container.innerHTML = `<div class="balloon-sky" id="b-sky"></div>`;
    this.services.speech.speak("Pop the flying balloons!");
    
    // Spawn balloon loop
    this.addInterval(() => this.spawn(), 900);
  }

  spawn() {
    const sky = this.container.querySelector('#b-sky');
    if (!sky) return;

    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    
    const colors = ['#9b5de5', '#f15bb5', '#fee440', '#00bbf9', '#00f5d4', '#ff595e'];
    const col = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.background = col;
    balloon.style.left = `${Math.random() * 80 + 5}%`;
    balloon.style.animationDuration = `${5 + Math.random() * 4}s`;
    
    const string = document.createElement('div');
    string.className = 'balloon-string';
    balloon.appendChild(string);

    balloon.addEventListener('pointerdown', (e) => {
      this.services.sound.playPop();
      this.services.confetti.burst(e.clientX, e.clientY, 15);
      balloon.remove();
    });

    sky.appendChild(balloon);

    // Auto cleanup out of view
    this.addTimeout(() => balloon.remove(), 9000);
  }
}

// Game 3: Animal Sound Piano
class GameAnimalPiano extends MiniGame {
  start() {
    this.container.innerHTML = `
      <div class="piano-board">
        <div class="piano-key" style="background:#ff595e;" data-a="cat"><span class="piano-key-label">Cat</span>🐱</div>
        <div class="piano-key" style="background:#ff9f1c;" data-a="dog"><span class="piano-key-label">Dog</span>🐶</div>
        <div class="piano-key" style="background:#fee440;" data-a="cow"><span class="piano-key-label">Cow</span>🐮</div>
        <div class="piano-key" style="background:#00f5d4;" data-a="duck"><span class="piano-key-label">Duck</span>🦆</div>
        <div class="piano-key" style="background:#00bbf9;" data-a="sheep"><span class="piano-key-label">Sheep</span>🐑</div>
      </div>
    `;

    this.services.speech.speak("Tap the animal piano keys!");

    this.container.querySelectorAll('.piano-key').forEach(key => {
      key.addEventListener('pointerdown', () => {
        const animal = key.getAttribute('data-a');
        this.services.sound.playAnimal(animal);
        key.style.transform = "scale(0.95)";
        setTimeout(() => key.style.transform = "scale(1)", 100);
      });
    });
  }
}

// Game 4: Color Matcher
class GameColorMatcher extends MiniGame {
  start() {
    this.container.innerHTML = `
      <div class="colormatch-layout">
        <div class="baskets-row">
          <div class="basket" style="background:#ff595e;" data-color="red"><div class="basket-rim"></div>Red</div>
          <div class="basket" style="background:#fee440;" data-color="yellow"><div class="basket-rim"></div>Yellow</div>
          <div class="basket" style="background:#00bbf9;" data-color="blue"><div class="basket-rim"></div>Blue</div>
        </div>
        <div class="draggable-fruits-zone" id="cm-fruits"></div>
      </div>
    `;

    this.services.speech.speak("Put the fruits into the matching color baskets!");
    this.spawnFruits();
  }

  spawnFruits() {
    const zone = this.container.querySelector('#cm-fruits');
    zone.innerHTML = '';
    const items = [
      { emoji: '🍎', color: 'red' },
      { emoji: '🍌', color: 'yellow' },
      { emoji: '🫐', color: 'blue' },
      { emoji: '🍒', color: 'red' },
      { emoji: '🍋', color: 'yellow' }
    ];

    items.sort(() => Math.random() - 0.5);

    items.forEach((item, idx) => {
      const f = document.createElement('div');
      f.className = 'match-fruit';
      f.innerHTML = item.emoji;
      f.addEventListener('pointerdown', (e) => this.drag(e, f, item.color));
      zone.appendChild(f);
    });
  }

  drag(e, node, color) {
    e.preventDefault();
    this.services.sound.playPop();

    const move = (me) => {
      node.style.position = 'fixed';
      node.style.left = `${me.clientX - 32}px`;
      node.style.top = `${me.clientY - 32}px`;
    };

    const up = (ue) => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);

      // Hit testing
      const baskets = this.container.querySelectorAll('.basket');
      let matched = false;

      baskets.forEach(b => {
        const rect = b.getBoundingClientRect();
        if (ue.clientX >= rect.left && ue.clientX <= rect.right && ue.clientY >= rect.top && ue.clientY <= rect.bottom) {
          const bColor = b.getAttribute('data-color');
          if (bColor === color) {
            matched = true;
            this.services.sound.playSnap();
            this.services.confetti.burst(ue.clientX, ue.clientY);
            node.remove();
            this.services.speech.speak("Yay! Matching color!");
          }
        }
      });

      if (!matched) {
        node.style.position = '';
        this.services.sound.playPop();
      }

      if (this.container.querySelectorAll('.match-fruit').length === 0) {
        this.addTimeout(() => {
          this.services.sound.playSuccess();
          this.spawnFruits();
        }, 1000);
      }
    };

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  }
}

// Game 5: Bubble Wrap Pop
class GameBubbleWrap extends MiniGame {
  start() {
    this.container.innerHTML = `<div class="bubblewrap-grid" id="bw-grid"></div>`;
    this.services.speech.speak("Pop all the bubbles!");
    
    const grid = this.container.querySelector('#bw-grid');
    for (let i = 0; i < 30; i++) {
      const bubble = document.createElement('div');
      bubble.className = 'bubble-cell';
      bubble.addEventListener('pointerdown', () => {
        bubble.classList.add('popped');
        this.services.sound.playPop();
        
        // Quick visual check
        if (this.container.querySelectorAll('.bubble-cell:not(.popped)').length === 0) {
          this.addTimeout(() => {
            this.services.sound.playSuccess();
            this.services.speech.speak("Wow! Beautiful popping!");
            this.container.querySelectorAll('.bubble-cell').forEach(b => b.classList.remove('popped'));
          }, 600);
        }
      });
      grid.appendChild(bubble);
    }
  }
}

// Game 6: Xylophone
class GameXylophone extends MiniGame {
  start() {
    const freqs = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25];
    const colors = ['#ff595e', '#ff9f1c', '#fee440', '#00f5d4', '#00bbf9', '#4ea8de', '#9b5de5', '#f15bb5'];
    
    this.container.innerHTML = `<div class="xylophone-board" id="xylo"></div>`;
    const board = this.container.querySelector('#xylo');

    freqs.forEach((freq, idx) => {
      const bar = document.createElement('div');
      bar.className = 'xylo-bar';
      bar.style.backgroundColor = colors[idx];
      bar.style.height = `${100 - idx * 5}%`;
      bar.innerText = String.fromCharCode(65 + idx); // A, B, C, D...
      bar.addEventListener('pointerdown', () => {
        this.services.sound.playNote(freq);
      });
      board.appendChild(bar);
    });

    this.services.speech.speak("Tap the colorful bars to play music!");
  }
}

// Game 7: Shape Shadow Matcher
class GameShapeMatcher extends MiniGame {
  start() {
    this.container.innerHTML = `
      <div class="shape-matcher-layout">
        <div class="shadows-row" id="sm-shadows"></div>
        <div class="shapes-row" id="sm-shapes"></div>
      </div>
    `;

    this.services.speech.speak("Match the shapes into their shadows!");
    this.spawn();
  }

  spawn() {
    const shadowsRow = this.container.querySelector('#sm-shadows');
    const shapesRow = this.container.querySelector('#sm-shapes');
    shadowsRow.innerHTML = '';
    shapesRow.innerHTML = '';

    const list = ['circle', 'square', 'triangle', 'star'];
    list.forEach(shape => {
      const shadow = document.createElement('div');
      shadow.className = 'shape-shadow';
      shadow.setAttribute('data-shape', shape);
      shadow.innerHTML = ASSETS.shapes[shape];
      shadowsRow.appendChild(shadow);
    });

    // Shuffle shapes
    const shapes = [...list].sort(() => Math.random() - 0.5);
    shapes.forEach(shape => {
      const sh = document.createElement('div');
      sh.className = 'draggable-shape';
      sh.setAttribute('data-shape', shape);
      sh.innerHTML = ASSETS.shapes[shape];
      
      // colorize shape SVGs for kids
      const svgEl = sh.querySelector('svg');
      const colors = { circle: '#ff595e', square: '#fee440', triangle: '#00bbf9', star: '#9b5de5' };
      svgEl.setAttribute('fill', colors[shape]);

      sh.addEventListener('pointerdown', (e) => this.drag(e, sh, shape));
      shapesRow.appendChild(sh);
    });
  }

  drag(e, node, shape) {
    e.preventDefault();
    this.services.sound.playPop();

    const move = (me) => {
      node.style.position = 'fixed';
      node.style.left = `${me.clientX - 40}px`;
      node.style.top = `${me.clientY - 40}px`;
    };

    const up = (ue) => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);

      const shadows = this.container.querySelectorAll('.shape-shadow');
      let matched = false;

      shadows.forEach(s => {
        const rect = s.getBoundingClientRect();
        if (ue.clientX >= rect.left && ue.clientX <= rect.right && ue.clientY >= rect.top && ue.clientY <= rect.bottom) {
          if (s.getAttribute('data-shape') === shape) {
            matched = true;
            s.classList.add('matched');
            // Transfer color to shadow SVG
            const colors = { circle: '#ff595e', square: '#fee440', triangle: '#00bbf9', star: '#9b5de5' };
            s.style.fill = colors[shape];

            this.services.sound.playSnap();
            this.services.confetti.burst(ue.clientX, ue.clientY);
            node.remove();
            this.services.speech.speak(`You matched the ${shape}!`);
          }
        }
      });

      if (!matched) {
        node.style.position = '';
        this.services.sound.playPop();
      }

      if (this.container.querySelectorAll('.draggable-shape').length === 0) {
        this.addTimeout(() => {
          this.services.sound.playSuccess();
          this.services.speech.speak("Well done!");
          this.spawn();
        }, 1000);
      }
    };

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  }
}

// Game 8: Fruit Catcher
class GameFruitCatcher extends MiniGame {
  start() {
    this.container.innerHTML = `
      <div class="catcher-sky" id="fc-sky">
        <div class="score-badge" id="fc-score">Fruit: 0</div>
        <div class="catcher-basket" id="fc-basket">
          <div class="catcher-basket-rim"></div>
        </div>
      </div>
    `;

    this.score = 0;
    this.basket = this.container.querySelector('#fc-basket');
    this.sky = this.container.querySelector('#fc-sky');
    this.basketX = 50; // percent

    this.services.speech.speak("Move the basket to catch the falling fruits!");

    // Catch loops
    this.addInterval(() => this.spawnFruit(), 1200);

    // Mouse/Touch tracking on Sky
    const moveBasket = (e) => {
      const rect = this.sky.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      this.basketX = Math.max(10, Math.min(90, ((clientX - rect.left) / rect.width) * 100));
      this.basket.style.left = `${this.basketX}%`;
    };

    this.sky.addEventListener('pointermove', moveBasket);
    this.sky.addEventListener('touchmove', moveBasket);
  }

  spawnFruit() {
    if (!this.sky) return;
    const fruits = ['🍎', '🍌', '🍊', '🍓', '🍇', '🍒', '🍉'];
    const el = document.createElement('div');
    el.className = 'falling-fruit';
    el.innerText = fruits[Math.floor(Math.random() * fruits.length)];
    
    const startX = Math.random() * 80 + 10;
    el.style.left = `${startX}%`;
    el.style.top = `0%`;
    this.sky.appendChild(el);

    let top = 0;
    const fallInterval = setInterval(() => {
      if (!this.sky || !el.parentElement) {
        clearInterval(fallInterval);
        return;
      }
      
      top += 2.5;
      el.style.top = `${top}%`;

      // Check collision
      if (top >= 85 && top <= 90) {
        const dist = Math.abs(parseFloat(el.style.left) - this.basketX);
        if (dist < 12) {
          clearInterval(fallInterval);
          this.score++;
          this.container.querySelector('#fc-score').innerText = `Fruit: ${this.score}`;
          this.services.sound.playSnap();
          
          const r = this.sky.getBoundingClientRect();
          this.services.confetti.burst((this.basketX/100)*r.width, r.height * 0.85, 10);
          el.remove();
        }
      }

      if (top > 100) {
        clearInterval(fallInterval);
        el.remove();
      }
    }, 40);
  }
}

const COLORING_ANIMALS = {
  dino: {
    name: "Dinosaur",
    emoji: "🦖",
    svg: `
      <svg viewBox="0 0 200 200" class="coloring-outline-svg">
        <!-- Dino Tail -->
        <path d="M 50 130 Q 15 150 10 110 Q 25 100 50 110 Z" fill="none" stroke="#2d2d2d" stroke-width="5" stroke-linejoin="round" />
        <!-- Dino Feet -->
        <rect x="70" y="140" width="22" height="30" rx="10" fill="none" stroke="#2d2d2d" stroke-width="5" />
        <rect x="110" y="140" width="22" height="30" rx="10" fill="none" stroke="#2d2d2d" stroke-width="5" />
        <!-- Dino Body -->
        <path d="M 50 120 C 50 80, 70 60, 100 60 C 130 60, 150 80, 150 120 C 150 150, 50 150, 50 120 Z" fill="none" stroke="#2d2d2d" stroke-width="5" stroke-linejoin="round" />
        <!-- Dino Neck & Head -->
        <path d="M 120 70 L 150 20 Q 185 25 180 50 L 140 90 Z" fill="none" stroke="#2d2d2d" stroke-width="5" stroke-linejoin="round" />
        <!-- Dino Plates/Spikes -->
        <polygon points="80,60 90,45 100,60" fill="none" stroke="#2d2d2d" stroke-width="4" />
        <polygon points="110,60 120,45 130,60" fill="none" stroke="#2d2d2d" stroke-width="4" />
        <!-- Dino Eye -->
        <circle cx="160" cy="35" r="4" fill="#2d2d2d" />
        <!-- Cute Cheek -->
        <circle cx="168" cy="44" r="6" fill="#ffb5a7" opacity="0.6" />
      </svg>
    `
  },
  bear: {
    name: "Teddy Bear",
    emoji: "🧸",
    svg: `
      <svg viewBox="0 0 200 200" class="coloring-outline-svg">
        <!-- Ears -->
        <circle cx="60" cy="55" r="22" fill="none" stroke="#2d2d2d" stroke-width="5" />
        <circle cx="60" cy="55" r="12" fill="none" stroke="#2d2d2d" stroke-width="3" />
        <circle cx="140" cy="55" r="22" fill="none" stroke="#2d2d2d" stroke-width="5" />
        <circle cx="140" cy="55" r="12" fill="none" stroke="#2d2d2d" stroke-width="3" />
        <!-- Arms -->
        <circle cx="45" cy="120" r="18" fill="none" stroke="#2d2d2d" stroke-width="5" />
        <circle cx="155" cy="120" r="18" fill="none" stroke="#2d2d2d" stroke-width="5" />
        <!-- Feet -->
        <circle cx="65" cy="165" r="22" fill="none" stroke="#2d2d2d" stroke-width="5" />
        <circle cx="135" cy="165" r="22" fill="none" stroke="#2d2d2d" stroke-width="5" />
        <!-- Body -->
        <circle cx="100" cy="125" r="45" fill="none" stroke="#2d2d2d" stroke-width="5" />
        <circle cx="100" cy="125" r="30" fill="none" stroke="#2d2d2d" stroke-width="3" />
        <!-- Head -->
        <circle cx="100" cy="85" r="40" fill="none" stroke="#2d2d2d" stroke-width="5" />
        <!-- Snout -->
        <ellipse cx="100" cy="94" rx="14" ry="10" fill="none" stroke="#2d2d2d" stroke-width="3" />
        <polygon points="95,90 105,90 100,95" fill="#2d2d2d" />
        <!-- Eyes -->
        <circle cx="85" cy="80" r="5" fill="#2d2d2d" />
        <circle cx="115" cy="80" r="5" fill="#2d2d2d" />
        <!-- Cheeks -->
        <circle cx="75" cy="88" r="6" fill="#ffb5a7" opacity="0.6" />
        <circle cx="125" cy="88" r="6" fill="#ffb5a7" opacity="0.6" />
      </svg>
    `
  },
  cat: {
    name: "Cute Cat",
    emoji: "🐱",
    svg: `
      <svg viewBox="0 0 200 200" class="coloring-outline-svg">
        <!-- Ears -->
        <path d="M 30 70 L 20 20 L 70 50 Z" fill="none" stroke="#2d2d2d" stroke-width="5" stroke-linejoin="round" />
        <path d="M 170 70 L 180 20 L 130 50 Z" fill="none" stroke="#2d2d2d" stroke-width="5" stroke-linejoin="round" />
        <!-- Body -->
        <ellipse cx="100" cy="140" rx="45" ry="35" fill="none" stroke="#2d2d2d" stroke-width="5" />
        <!-- Head -->
        <ellipse cx="100" cy="95" rx="65" ry="50" fill="none" stroke="#2d2d2d" stroke-width="5" />
        <!-- Eyes -->
        <circle cx="75" cy="85" r="6" fill="#2d2d2d" />
        <circle cx="125" cy="85" r="6" fill="#2d2d2d" />
        <!-- Whiskers -->
        <line x1="45" y1="105" x2="15" y2="100" stroke="#2d2d2d" stroke-width="3" />
        <line x1="45" y1="112" x2="12" y2="112" stroke="#2d2d2d" stroke-width="3" />
        <line x1="155" y1="105" x2="185" y2="100" stroke="#2d2d2d" stroke-width="3" />
        <line x1="155" y1="112" x2="188" y2="112" stroke="#2d2d2d" stroke-width="3" />
        <!-- Nose and mouth -->
        <polygon points="95,100 105,100 100,105" fill="#2d2d2d" />
        <path d="M 92 112 Q 100 120 100 112 Q 100 120 108 112" fill="none" stroke="#2d2d2d" stroke-width="3" />
      </svg>
    `
  },
  fish: {
    name: "Playful Fish",
    emoji: "🐠",
    svg: `
      <svg viewBox="0 0 200 200" class="coloring-outline-svg">
        <!-- Tail Fin -->
        <path d="M 45 100 L 15 65 L 25 100 L 15 135 Z" fill="none" stroke="#2d2d2d" stroke-width="5" stroke-linejoin="round" />
        <!-- Fins -->
        <path d="M 110 62 Q 130 35 150 65" fill="none" stroke="#2d2d2d" stroke-width="5" stroke-linejoin="round" />
        <path d="M 110 138 Q 130 165 150 135" fill="none" stroke="#2d2d2d" stroke-width="5" stroke-linejoin="round" />
        <!-- Body -->
        <path d="M 45 100 C 70 60, 140 60, 175 100 C 140 140, 70 140, 45 100 Z" fill="none" stroke="#2d2d2d" stroke-width="5" stroke-linejoin="round" />
        <!-- Eye -->
        <circle cx="145" cy="90" r="6" fill="#2d2d2d" />
        <!-- Mouth -->
        <path d="M 175 100 C 168 103, 168 97, 175 100" fill="none" stroke="#2d2d2d" stroke-width="4" />
        <!-- Scale details -->
        <path d="M 90 85 Q 98 100 90 115" fill="none" stroke="#2d2d2d" stroke-width="3" />
        <path d="M 115 80 Q 123 100 115 120" fill="none" stroke="#2d2d2d" stroke-width="3" />
      </svg>
    `
  }
};

class GameColoringBook extends MiniGame {
  start() {
    this.activeAnimal = 'dino';
    this.activeColor = '#ff595e';
    this.isEraser = false;
    this.brushSize = 14;
    this.isDrawing = false;
    this.lastX = 0;
    this.lastY = 0;

    this.container.innerHTML = `
      <div class="coloring-layout">
        <div class="coloring-header" id="cb-header"></div>
        <div class="coloring-board-outer">
          <div class="coloring-board" id="cb-board">
            <canvas class="coloring-canvas" id="cb-canvas"></canvas>
            <div id="cb-outline-container"></div>
          </div>
          <div class="coloring-toolbox">
            <button class="coloring-tool-btn active" id="cb-brush-btn" title="Pencil Color">✏️</button>
            <button class="coloring-tool-btn" id="cb-eraser-btn" title="Eraser">🧽</button>
            <button class="coloring-tool-btn" id="cb-size-btn" title="Brush Size">🔘</button>
            <button class="coloring-tool-btn" id="cb-clear-btn" style="margin-top:12px;" title="Clear Screen">🗑️</button>
            <button class="coloring-tool-btn" id="cb-done-btn" style="background:#00f5d4;" title="Ta-da!">🎉</button>
          </div>
        </div>
        <div class="coloring-pencils-container" id="cb-pencils"></div>
      </div>
    `;

    this.board = this.container.querySelector('#cb-board');
    this.canvas = this.container.querySelector('#cb-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.outlineContainer = this.container.querySelector('#cb-outline-container');

    // Drawing listeners (iPad unified touch/pointer support)
    this.canvas.addEventListener('pointerdown', (e) => this.drawStart(e));
    this.canvas.addEventListener('pointermove', (e) => this.drawMove(e));
    this.canvas.addEventListener('pointerup', () => this.drawEnd());
    this.canvas.addEventListener('pointercancel', () => this.drawEnd());

    // Switch tool listeners
    this.container.querySelector('#cb-brush-btn').addEventListener('click', () => {
      this.isEraser = false;
      this.container.querySelector('#cb-brush-btn').classList.add('active');
      this.container.querySelector('#cb-eraser-btn').classList.remove('active');
      this.services.sound.playPop();
    });

    this.container.querySelector('#cb-eraser-btn').addEventListener('click', () => {
      this.isEraser = true;
      this.container.querySelector('#cb-brush-btn').classList.remove('active');
      this.container.querySelector('#cb-eraser-btn').classList.add('active');
      this.services.sound.playPop();
    });

    this.container.querySelector('#cb-size-btn').addEventListener('click', () => {
      if (this.brushSize === 8) this.brushSize = 14;
      else if (this.brushSize === 14) this.brushSize = 24;
      else this.brushSize = 8;
      
      this.services.sound.playPop();
      const rect = this.container.querySelector('#cb-size-btn');
      rect.style.transform = 'scale(1.2)';
      setTimeout(() => rect.style.transform = 'scale(1)', 150);
      
      const label = this.brushSize === 8 ? "thin pencil" : this.brushSize === 14 ? "medium marker" : "thick crayon";
      this.services.speech.speak(`Switched to ${label}`);
    });

    this.container.querySelector('#cb-clear-btn').addEventListener('click', () => {
      this.ctx.clearRect(0, 0, this.canvas.width / (window.devicePixelRatio || 1), this.canvas.height / (window.devicePixelRatio || 1));
      this.services.sound.playReset();
    });

    this.container.querySelector('#cb-done-btn').addEventListener('click', (e) => {
      this.services.sound.playSuccess();
      this.services.confetti.burst(e.clientX, e.clientY, 40);
      this.services.speech.speak("Wow! Your drawing is so beautiful! Perfect coloring!");
      if (window.app) {
        window.app.showVoiceBubble("Beautiful coloring! 🎨✨");
      }
    });

    // Resize observer
    const resizeObserver = new ResizeObserver(() => this.resizeCanvas());
    resizeObserver.observe(this.board);

    this.renderHeader();
    this.renderPencils();
    this.loadAnimal();
  }

  resizeCanvas() {
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = this.canvas.width;
    tempCanvas.height = this.canvas.height;
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.drawImage(this.canvas, 0, 0);

    const rect = this.board.getBoundingClientRect();
    this.canvas.width = rect.width * (window.devicePixelRatio || 1);
    this.canvas.height = rect.height * (window.devicePixelRatio || 1);
    this.ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    
    this.ctx.drawImage(tempCanvas, 0, 0, rect.width, rect.height);
  }

  renderHeader() {
    const header = this.container.querySelector('#cb-header');
    header.innerHTML = '';
    for (const [key, val] of Object.entries(COLORING_ANIMALS)) {
      const btn = document.createElement('button');
      btn.className = `coloring-animal-btn ${key === this.activeAnimal ? 'active' : ''}`;
      btn.innerHTML = `${val.emoji} ${val.name}`;
      btn.addEventListener('click', () => {
        header.querySelectorAll('.coloring-animal-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeAnimal = key;
        this.services.sound.playPop();
        this.loadAnimal();
      });
      header.appendChild(btn);
    }
  }

  renderPencils() {
    const palette = this.container.querySelector('#cb-pencils');
    palette.innerHTML = '';
    const colors = [
      '#ff595e', // red
      '#ff9f1c', // orange
      '#fee440', // yellow
      '#00f5d4', // green
      '#00bbf9', // blue
      '#9b5de5', // purple
      '#f15bb5', // pink
      '#8B5A2B', // brown
      '#2d2d2d'  // black
    ];

    colors.forEach(color => {
      const pencil = document.createElement('div');
      pencil.className = `coloring-pencil ${color === this.activeColor && !this.isEraser ? 'active' : ''}`;
      pencil.style.setProperty('--pencil-color', color);
      
      const body = document.createElement('div');
      body.className = 'coloring-pencil-body';
      pencil.appendChild(body);

      pencil.addEventListener('click', () => {
        this.isEraser = false;
        this.activeColor = color;
        
        this.container.querySelectorAll('.coloring-pencil').forEach(p => p.classList.remove('active'));
        pencil.classList.add('active');
        this.container.querySelector('#cb-brush-btn').classList.add('active');
        this.container.querySelector('#cb-eraser-btn').classList.remove('active');
        
        this.services.sound.playPop();
      });

      palette.appendChild(pencil);
    });
  }

  loadAnimal() {
    const animal = COLORING_ANIMALS[this.activeAnimal];
    this.outlineContainer.innerHTML = animal.svg;
    this.ctx.clearRect(0, 0, this.canvas.width / (window.devicePixelRatio || 1), this.canvas.height / (window.devicePixelRatio || 1));
    this.services.speech.speak(`Let's color the ${animal.name}! Choose a colored pencil.`);
  }

  drawStart(e) {
    e.preventDefault();
    this.isDrawing = true;
    const rect = this.canvas.getBoundingClientRect();
    this.lastX = e.clientX - rect.left;
    this.lastY = e.clientY - rect.top;
    
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    this.ctx.lineWidth = this.brushSize;
    if (this.isEraser) {
      this.ctx.globalCompositeOperation = 'destination-out';
    } else {
      this.ctx.globalCompositeOperation = 'source-over';
      this.ctx.strokeStyle = this.activeColor;
    }
    
    this.ctx.beginPath();
    this.ctx.moveTo(this.lastX, this.lastY);
    this.ctx.lineTo(this.lastX, this.lastY);
    this.ctx.stroke();

    this.services.sound.playPop();
  }

  drawMove(e) {
    e.preventDefault();
    if (!this.isDrawing) return;

    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    this.ctx.beginPath();
    this.ctx.moveTo(this.lastX, this.lastY);
    this.ctx.lineTo(x, y);
    this.ctx.stroke();

    this.lastX = x;
    this.lastY = y;
  }

  drawEnd() {
    this.isDrawing = false;
  }
}

// Game 10: Memory Match (Cute Animals)
class GameMemoryMatch extends MiniGame {
  start() {
    this.container.innerHTML = `<div class="memory-grid" id="m-grid"></div>`;
    this.services.speech.speak("Find the matching animals!");
    
    this.flippedCards = [];
    this.matches = 0;
    this.spawn();
  }

  spawn() {
    const grid = this.container.querySelector('#m-grid');
    grid.innerHTML = '';

    const animals = ['🐶', '🐱', '🐮', '🐰', '🦁', '🐻'];
    const cards = [...animals, ...animals].sort(() => Math.random() - 0.5);

    cards.forEach((animal, idx) => {
      const card = document.createElement('div');
      card.className = 'memory-card';
      card.setAttribute('data-animal', animal);
      card.setAttribute('data-id', idx);

      card.innerHTML = `
        <div class="card-inner">
          <div class="card-back">❓</div>
          <div class="card-front">${animal}</div>
        </div>
      `;

      card.addEventListener('pointerdown', () => this.flip(card));
      grid.appendChild(card);
    });
  }

  flip(card) {
    if (card.classList.contains('flipped') || this.flippedCards.length >= 2) return;
    this.services.sound.playPop();
    card.classList.add('flipped');
    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      this.checkPair();
    }
  }

  checkPair() {
    const [c1, c2] = this.flippedCards;
    if (c1.getAttribute('data-animal') === c2.getAttribute('data-animal')) {
      this.flippedCards = [];
      this.matches++;
      this.services.sound.playSnap();
      
      const r1 = c1.getBoundingClientRect();
      const r2 = c2.getBoundingClientRect();
      this.services.confetti.burst(r1.left + r1.width/2, r1.top + r1.height/2, 10);
      this.services.confetti.burst(r2.left + r2.width/2, r2.top + r2.height/2, 10);

      this.services.speech.speak("Yay! A match!");

      if (this.matches === 6) {
        this.addTimeout(() => {
          this.services.sound.playSuccess();
          this.services.speech.speak("Congratulations! You found all animals!");
          this.matches = 0;
          this.spawn();
        }, 1200);
      }
    } else {
      this.addTimeout(() => {
        c1.classList.remove('flipped');
        c2.classList.remove('flipped');
        this.flippedCards = [];
        this.services.sound.playReset();
      }, 1000);
    }
  }
}

// Game 11: Star Tap (Star Strike)
class GameStarTap extends MiniGame {
  start() {
    this.container.innerHTML = `<div class="star-tap-sky" id="st-sky"></div>`;
    this.services.speech.speak("Tap the glowing stars!");
    this.addInterval(() => this.spawn(), 1000);
  }

  spawn() {
    const sky = this.container.querySelector('#st-sky');
    if (!sky) return;

    const star = document.createElement('div');
    star.className = 'tap-star';
    star.innerHTML = '⭐';
    star.style.left = `${Math.random() * 80 + 10}%`;
    star.style.top = `${Math.random() * 70 + 15}%`;

    star.addEventListener('pointerdown', (e) => {
      this.services.sound.playSnap();
      this.services.confetti.burst(e.clientX, e.clientY, 15);
      star.remove();
    });

    sky.appendChild(star);

    // Auto removal
    this.addTimeout(() => star.remove(), 2500);
  }
}

// Game 12: Feed the Monster
class GameFeedMonster extends MiniGame {
  start() {
    this.container.innerHTML = `
      <div class="monster-feed-layout">
        <div class="monster-mouth-container" id="m-mouth">
          <svg viewBox="0 0 100 100" style="width:100%; height:100%;">
            <!-- Monster Body -->
            <rect x="10" y="10" width="80" height="80" rx="20" fill="#9b5de5" stroke="#2d2d2d" stroke-width="5" />
            <!-- Horns -->
            <polygon points="20,10 10,0 25,5" fill="#fee440" stroke="#2d2d2d" stroke-width="3" />
            <polygon points="80,10 90,0 75,5" fill="#fee440" stroke="#2d2d2d" stroke-width="3" />
            <!-- Eyes -->
            <circle cx="35" cy="35" r="10" fill="#fff" stroke="#2d2d2d" stroke-width="3" />
            <circle cx="35" cy="35" r="4" fill="#000" />
            <circle cx="65" cy="35" r="10" fill="#fff" stroke="#2d2d2d" stroke-width="3" />
            <circle cx="65" cy="35" r="4" fill="#000" />
            <!-- Mouth outline -->
            <rect id="monster-mouth" x="25" y="55" width="50" height="20" rx="10" fill="#ffd166" stroke="#2d2d2d" stroke-width="4" />
          </svg>
        </div>
        <div class="feed-items-row" id="m-foods">
          <div class="feed-food" data-f="donut">🍩</div>
          <div class="feed-food" data-f="cookie">🍪</div>
          <div class="feed-food" data-f="watermelon">🍉</div>
          <div class="feed-food" data-f="strawberry">🍓</div>
        </div>
      </div>
    `;

    this.services.speech.speak("Drag the treats to the monster's mouth!");
    this.container.querySelectorAll('.feed-food').forEach(item => {
      item.addEventListener('pointerdown', (e) => this.drag(e, item));
    });
  }

  drag(e, node) {
    e.preventDefault();
    this.services.sound.playPop();

    const move = (me) => {
      node.style.position = 'fixed';
      node.style.left = `${me.clientX - 25}px`;
      node.style.top = `${me.clientY - 25}px`;
    };

    const up = (ue) => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);

      const mouth = this.container.querySelector('#monster-mouth');
      const rect = mouth.getBoundingClientRect();
      let fed = false;

      if (ue.clientX >= rect.left - 20 && ue.clientX <= rect.right + 20 && ue.clientY >= rect.top - 20 && ue.clientY <= rect.bottom + 20) {
        fed = true;
        this.services.sound.playSnap();
        this.services.confetti.burst(ue.clientX, ue.clientY);
        node.style.display = 'none';
        this.services.speech.speak("Yum yum! Thank you!");
        
        // Re-open/scale mouth visually
        mouth.setAttribute('height', '32');
        this.addTimeout(() => mouth.setAttribute('height', '20'), 500);
      }

      if (!fed) {
        node.style.position = '';
        this.services.sound.playPop();
      }

      // If all eaten, reset
      if (Array.from(this.container.querySelectorAll('.feed-food')).every(f => f.style.display === 'none')) {
        this.addTimeout(() => {
          this.services.sound.playSuccess();
          this.container.querySelectorAll('.feed-food').forEach(f => f.style.display = '');
          this.container.querySelectorAll('.feed-food').forEach(f => f.style.position = '');
        }, 1000);
      }
    };

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  }
}

// Game 13: Counting Ladybugs
class GameLadybugs extends MiniGame {
  start() {
    this.container.innerHTML = `
      <div class="leaf-lake">
        <div class="lake-leaf"></div>
        <div id="lb-container"></div>
      </div>
    `;

    this.count = 0;
    this.services.speech.speak("Tap the ladybugs to count them!");
    this.spawn();
  }

  spawn() {
    const parent = this.container.querySelector('#lb-container');
    parent.innerHTML = '';
    this.count = 0;

    for (let i = 0; i < 5; i++) {
      const bug = document.createElement('div');
      bug.className = 'ladybug';
      
      // Random coordinates inside leaf
      bug.style.left = `${20 + Math.random() * 50}%`;
      bug.style.top = `${20 + Math.random() * 50}%`;

      // add spots
      for (let j = 0; j < 4; j++) {
        const spot = document.createElement('div');
        spot.className = 'ladybug-dot';
        bug.appendChild(spot);
      }

      bug.addEventListener('pointerdown', (e) => {
        this.count++;
        this.services.sound.playPop();
        this.services.confetti.burst(e.clientX, e.clientY, 8);
        this.services.speech.speak(`${this.count}`);
        
        // Ladybug flies away!
        bug.style.transition = 'all 0.5s ease-in';
        bug.style.transform = 'translateY(-300px) scale(0)';
        this.addTimeout(() => bug.remove(), 500);

        if (this.container.querySelectorAll('.ladybug').length === 1) { // 1 means this is last one flying
          this.addTimeout(() => {
            this.services.sound.playSuccess();
            this.services.speech.speak(`Fantastic counting! 5 ladybugs!`);
            this.spawn();
          }, 1200);
        }
      });

      parent.appendChild(bug);
    }
  }
}

// Game 14: Cute Whack-a-Mole
class GameWhackMole extends MiniGame {
  start() {
    this.container.innerHTML = `
      <div class="mole-field">
        <div class="mole-hole"><div class="mole-head" id="m0"><div class="mole-eyes"><div class="mole-eye"></div><div class="mole-eye"></div></div><div class="mole-nose"></div></div><div class="hole-dirt"></div></div>
        <div class="mole-hole"><div class="mole-head" id="m1"><div class="mole-eyes"><div class="mole-eye"></div><div class="mole-eye"></div></div><div class="mole-nose"></div></div><div class="hole-dirt"></div></div>
        <div class="mole-hole"><div class="mole-head" id="m2"><div class="mole-eyes"><div class="mole-eye"></div><div class="mole-eye"></div></div><div class="mole-nose"></div></div><div class="hole-dirt"></div></div>
        <div class="mole-hole"><div class="mole-head" id="m3"><div class="mole-eyes"><div class="mole-eye"></div><div class="mole-eye"></div></div><div class="mole-nose"></div></div><div class="hole-dirt"></div></div>
        <div class="mole-hole"><div class="mole-head" id="m4"><div class="mole-eyes"><div class="mole-eye"></div><div class="mole-eye"></div></div><div class="mole-nose"></div></div><div class="hole-dirt"></div></div>
        <div class="mole-hole"><div class="mole-head" id="m5"><div class="mole-eyes"><div class="mole-eye"></div><div class="mole-eye"></div></div><div class="mole-nose"></div></div><div class="hole-dirt"></div></div>
      </div>
    `;

    this.services.speech.speak("Tap the moles when they pop up!");

    this.container.querySelectorAll('.mole-head').forEach(mole => {
      mole.addEventListener('pointerdown', (e) => {
        if (!mole.classList.contains('up')) return;
        this.services.sound.playPop();
        this.services.confetti.burst(e.clientX, e.clientY, 10);
        mole.classList.remove('up');
      });
    });

    this.addInterval(() => this.pop(), 1000);
  }

  pop() {
    const list = this.container.querySelectorAll('.mole-head');
    const m = list[Math.floor(Math.random() * list.length)];
    if (!m.classList.contains('up')) {
      m.classList.add('up');
      this.addTimeout(() => m.classList.remove('up'), 1500);
    }
  }
}

// Game 15: Fireworks Maker
class GameFireworks extends MiniGame {
  start() {
    this.container.innerHTML = `<div class="fireworks-sky" id="fw-sky"></div>`;
    this.services.speech.speak("Tap the sky to make fireworks!");

    const sky = this.container.querySelector('#fw-sky');
    sky.addEventListener('pointerdown', (e) => {
      this.services.sound.playPop();
      // Synth deep boom
      this.services.sound.playDrum('bass');
      this.services.confetti.burst(e.clientX, e.clientY, 40);
    });
  }
}

// Game 16: Fish Tank Feed
class GameFishTank extends MiniGame {
  start() {
    this.container.innerHTML = `
      <div class="fishtank-aquarium" id="ft-sky">
        <svg class="aquarium-fish" id="fish1" viewBox="0 0 100 60" style="left:10%; top:40%;">
          <path d="M10,30 Q40,10 70,30 Q40,50 10,30 Z" fill="#ff9f1c" stroke="#2d2d2d" stroke-width="4" />
          <polygon points="10,30 0,20 0,40" fill="#ff595e" />
          <circle cx="55" cy="25" r="4" fill="#fff" /><circle cx="55" cy="25" r="1.5" fill="#000" />
        </svg>
        <svg class="aquarium-fish" id="fish2" viewBox="0 0 100 60" style="left:50%; top:20%;">
          <path d="M10,30 Q40,10 70,30 Q40,50 10,30 Z" fill="#ff9f1c" stroke="#2d2d2d" stroke-width="4" />
          <polygon points="10,30 0,20 0,40" fill="#f15bb5" />
          <circle cx="55" cy="25" r="4" fill="#fff" /><circle cx="55" cy="25" r="1.5" fill="#000" />
        </svg>
      </div>
    `;

    this.services.speech.speak("Tap the water to feed the fish!");
    
    // Fish swimming movement routine
    this.addInterval(() => this.swim(), 3000);

    const sky = this.container.querySelector('#ft-sky');
    sky.addEventListener('pointerdown', (e) => {
      if (e.target.tagName === 'svg') return; // ignore clicking fish directly
      
      const pellet = document.createElement('div');
      pellet.className = 'fish-food-pellet';
      pellet.style.left = `${e.clientX - sky.getBoundingClientRect().left}px`;
      pellet.style.top = `${e.clientY - sky.getBoundingClientRect().top}px`;
      
      sky.appendChild(pellet);
      this.services.sound.playPop();

      // Fish gather around food!
      this.container.querySelectorAll('.aquarium-fish').forEach(f => {
        f.style.left = pellet.style.left;
        f.style.top = pellet.style.top;
      });

      this.addTimeout(() => {
        pellet.remove();
        this.services.sound.playSnap();
      }, 1500);
    });
  }

  swim() {
    this.container.querySelectorAll('.aquarium-fish').forEach(f => {
      f.style.left = `${Math.random() * 70 + 5}%`;
      f.style.top = `${Math.random() * 60 + 10}%`;
    });
  }
}

// Game 17: Letter Tracer
const MONTESSORI_DATA = {
  letters: {
    A: {
      type: 'vowel',
      text: 'A',
      strokes: [
        [{x: 50, y: 18}, {x: 37, y: 49}, {x: 25, y: 80}],
        [{x: 50, y: 18}, {x: 63, y: 49}, {x: 75, y: 80}],
        [{x: 35, y: 52}, {x: 50, y: 52}, {x: 65, y: 52}]
      ]
    },
    B: {
      type: 'consonant',
      text: 'B',
      strokes: [
        [{x: 35, y: 18}, {x: 35, y: 50}, {x: 35, y: 82}],
        [{x: 35, y: 18}, {x: 55, y: 18}, {x: 64, y: 25}, {x: 64, y: 39}, {x: 55, y: 48}, {x: 35, y: 48}],
        [{x: 35, y: 48}, {x: 58, y: 48}, {x: 68, y: 56}, {x: 68, y: 74}, {x: 58, y: 82}, {x: 35, y: 82}]
      ]
    },
    C: {
      type: 'consonant',
      text: 'C',
      strokes: [
        [{x: 68, y: 25}, {x: 52, y: 18}, {x: 34, y: 30}, {x: 30, y: 50}, {x: 34, y: 70}, {x: 52, y: 82}, {x: 68, y: 75}]
      ]
    },
    D: {
      type: 'consonant',
      text: 'D',
      strokes: [
        [{x: 35, y: 18}, {x: 35, y: 50}, {x: 35, y: 82}],
        [{x: 35, y: 18}, {x: 58, y: 18}, {x: 70, y: 32}, {x: 70, y: 50}, {x: 70, y: 68}, {x: 58, y: 82}, {x: 35, y: 82}]
      ]
    },
    E: {
      type: 'vowel',
      text: 'E',
      strokes: [
        [{x: 32, y: 18}, {x: 32, y: 50}, {x: 32, y: 82}],
        [{x: 32, y: 18}, {x: 65, y: 18}],
        [{x: 32, y: 50}, {x: 58, y: 50}],
        [{x: 32, y: 82}, {x: 65, y: 82}]
      ]
    }
  },
  numbers: {
    1: {
      type: 'number',
      text: '1',
      strokes: [
        [{x: 38, y: 30}, {x: 50, y: 18}],
        [{x: 50, y: 18}, {x: 50, y: 82}],
        [{x: 35, y: 82}, {x: 65, y: 82}]
      ]
    },
    2: {
      type: 'number',
      text: '2',
      strokes: [
        [{x: 32, y: 30}, {x: 40, y: 18}, {x: 60, y: 18}, {x: 68, y: 30}, {x: 68, y: 42}, {x: 32, y: 82}, {x: 68, y: 82}]
      ]
    },
    3: {
      type: 'number',
      text: '3',
      strokes: [
        [{x: 32, y: 25}, {x: 50, y: 18}, {x: 65, y: 28}, {x: 50, y: 46}, {x: 38, y: 46}],
        [{x: 50, y: 46}, {x: 68, y: 60}, {x: 65, y: 76}, {x: 50, y: 82}, {x: 32, y: 75}]
      ]
    },
    4: {
      type: 'number',
      text: '4',
      strokes: [
        [{x: 55, y: 18}, {x: 40, y: 40}, {x: 25, y: 60}, {x: 50, y: 60}, {x: 75, y: 60}],
        [{x: 55, y: 40}, {x: 55, y: 82}]
      ]
    },
    5: {
      type: 'number',
      text: '5',
      strokes: [
        [{x: 60, y: 18}, {x: 35, y: 18}, {x: 35, y: 46}],
        [{x: 35, y: 46}, {x: 58, y: 46}, {x: 68, y: 58}, {x: 58, y: 82}, {x: 35, y: 82}]
      ]
    }
  },
  shapes: {
    circle: {
      type: 'shape',
      text: '○',
      strokes: [
        [{x: 50, y: 18}, {x: 75, y: 24}, {x: 82, y: 50}, {x: 75, y: 76}, {x: 50, y: 82}, {x: 25, y: 76}, {x: 18, y: 50}, {x: 25, y: 24}, {x: 50, y: 18}]
      ]
    },
    triangle: {
      type: 'shape',
      text: '△',
      strokes: [
        [{x: 50, y: 18}, {x: 18, y: 80}, {x: 82, y: 80}, {x: 50, y: 18}]
      ]
    },
    star: {
      type: 'shape',
      text: '☆',
      strokes: [
        [{x: 50, y: 12}, {x: 61, y: 39}, {x: 90, y: 39}, {x: 66, y: 57}, {x: 75, y: 85}, {x: 50, y: 68}, {x: 25, y: 85}, {x: 34, y: 57}, {x: 10, y: 39}, {x: 39, y: 39}, {x: 50, y: 12}]
      ]
    }
  }
};

class GameLetterTracer extends MiniGame {
  start() {
    this.activeTab = 'letters';
    this.activeItem = 'A';
    
    this.currentStrokeIndex = 0;
    this.currentCheckpointIndex = 0;
    this.completedStrokesPaths = [];
    this.activeStrokePoints = [];
    this.tracing = false;

    this.container.innerHTML = `
      <div class="montessori-layout">
        <div class="montessori-board-outer">
          <div class="montessori-board" id="mt-board">
            <svg class="montessori-path-svg" id="mt-svg" viewBox="0 0 100 100"></svg>
            <canvas class="montessori-canvas" id="mt-canvas"></canvas>
            <div class="montessori-start-dot" id="mt-start-dot" style="display: none;"></div>
            <div class="montessori-alert" id="mt-alert">✏️ Stay on the line!</div>
          </div>
        </div>
        <div class="montessori-drawer">
          <div class="montessori-tabs">
            <button class="montessori-tab-btn active" data-tab="letters">ABC Letters</button>
            <button class="montessori-tab-btn" data-tab="numbers">123 Numbers</button>
            <button class="montessori-tab-btn" data-tab="shapes">Shapes</button>
          </div>
          <div class="montessori-items-tray" id="mt-tray"></div>
        </div>
      </div>
    `;

    this.board = this.container.querySelector('#mt-board');
    this.svg = this.container.querySelector('#mt-svg');
    this.canvas = this.container.querySelector('#mt-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.startDot = this.container.querySelector('#mt-start-dot');
    this.alertBubble = this.container.querySelector('#mt-alert');

    // Bind tab clicks
    this.container.querySelectorAll('.montessori-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.container.querySelectorAll('.montessori-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeTab = btn.getAttribute('data-tab');
        this.services.sound.playPop();
        
        const keys = Object.keys(MONTESSORI_DATA[this.activeTab]);
        this.activeItem = keys[0];
        
        this.renderTray();
        this.loadItem();
      });
    });

    // Touch/pointer events on canvas (full iPad touch compatibility)
    this.canvas.addEventListener('pointerdown', (e) => this.handlePointerDown(e));
    this.canvas.addEventListener('pointermove', (e) => this.handlePointerMove(e));
    this.canvas.addEventListener('pointerup', (e) => this.handlePointerUp(e));
    this.canvas.addEventListener('pointercancel', (e) => this.handlePointerUp(e));

    // Listen to resize
    const resizeObserver = new ResizeObserver(() => this.resizeCanvas());
    resizeObserver.observe(this.board);

    this.renderTray();
    this.loadItem();
  }

  resizeCanvas() {
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width * (window.devicePixelRatio || 1);
    this.canvas.height = rect.height * (window.devicePixelRatio || 1);
    this.ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    this.redrawAll();
  }

  renderTray() {
    const tray = this.container.querySelector('#mt-tray');
    tray.innerHTML = '';
    const items = MONTESSORI_DATA[this.activeTab];
    for (const [key, val] of Object.entries(items)) {
      const card = document.createElement('div');
      card.className = `montessori-item-card ${key === this.activeItem ? 'active' : ''}`;
      card.innerText = key;
      card.addEventListener('click', () => {
        tray.querySelectorAll('.montessori-item-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        this.activeItem = key;
        this.services.sound.playPop();
        this.loadItem();
      });
      tray.appendChild(card);
    }
  }

  loadItem() {
    const data = MONTESSORI_DATA[this.activeTab][this.activeItem];
    
    this.board.className = 'montessori-board';
    if (data.type === 'vowel') this.board.classList.add('vowel-board');
    else if (data.type === 'consonant') this.board.classList.add('consonant-board');
    else if (data.type === 'number') this.board.classList.add('number-board');
    else if (data.type === 'shape') this.board.classList.add('shape-board');

    this.currentStrokeIndex = 0;
    this.currentCheckpointIndex = 0;
    this.completedStrokesPaths = [];
    this.activeStrokePoints = [];
    this.tracing = false;
    this.alertBubble.classList.remove('visible');

    this.buildGuidelinesSVG(data.strokes);

    const label = this.activeTab === 'shapes' ? this.activeItem : `the ${data.type === 'vowel' ? 'vowel' : data.type === 'consonant' ? 'consonant' : 'number'} ${this.activeItem}`;
    this.services.speech.speak(`Let's trace ${label}!`);

    setTimeout(() => {
      this.resizeCanvas();
      this.updateStartDot();
    }, 100);
  }

  buildGuidelinesSVG(strokes) {
    this.svg.innerHTML = '';
    strokes.forEach((stroke) => {
      let pathD = '';
      stroke.forEach((p, idx) => {
        pathD += `${idx === 0 ? 'M' : 'L'} ${p.x} ${p.y} `;
      });

      const guidePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      guidePath.setAttribute('d', pathD);
      guidePath.setAttribute('stroke', 'rgba(45,45,45,0.18)');
      guidePath.setAttribute('stroke-width', '16');
      guidePath.setAttribute('stroke-linecap', 'round');
      guidePath.setAttribute('stroke-linejoin', 'round');
      guidePath.setAttribute('fill', 'none');
      this.svg.appendChild(guidePath);

      const dashPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      dashPath.setAttribute('d', pathD);
      dashPath.setAttribute('stroke', '#ffffff');
      dashPath.setAttribute('stroke-width', '2');
      dashPath.setAttribute('stroke-dasharray', '5,5');
      dashPath.setAttribute('stroke-linecap', 'round');
      dashPath.setAttribute('stroke-linejoin', 'round');
      dashPath.setAttribute('fill', 'none');
      this.svg.appendChild(dashPath);
    });
  }

  updateStartDot() {
    const data = MONTESSORI_DATA[this.activeTab][this.activeItem];
    if (this.currentStrokeIndex < data.strokes.length) {
      const stroke = data.strokes[this.currentStrokeIndex];
      const startNode = stroke[0];
      
      const rect = this.canvas.getBoundingClientRect();
      const x = (startNode.x / 100) * rect.width;
      const y = (startNode.y / 100) * rect.height;
      
      this.startDot.style.left = `${x}px`;
      this.startDot.style.top = `${y}px`;
      this.startDot.style.display = 'block';
    } else {
      this.startDot.style.display = 'none';
    }
  }

  getPointerCoords(e) {
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    return { x, y, px: (x / rect.width) * 100, py: (y / rect.height) * 100 };
  }

  handlePointerDown(e) {
    e.preventDefault();
    if (this.tracing) return;

    const data = MONTESSORI_DATA[this.activeTab][this.activeItem];
    if (this.currentStrokeIndex >= data.strokes.length) return;

    const coords = this.getPointerCoords(e);
    const stroke = data.strokes[this.currentStrokeIndex];
    const startNode = stroke[0];

    const distToStart = Math.hypot(coords.px - startNode.x, coords.py - startNode.y);
    if (distToStart < 12) {
      this.tracing = true;
      this.currentCheckpointIndex = 0;
      this.activeStrokePoints = [{ x: coords.x, y: coords.y }];
      this.services.sound.playPop();
      this.startDot.style.display = 'none';
      this.alertBubble.classList.remove('visible');
    } else {
      this.services.sound.playBoing();
      this.alertBubble.innerText = 'Start at the pulsing dot! 🟢';
      this.alertBubble.classList.add('visible');
      setTimeout(() => this.alertBubble.classList.remove('visible'), 2000);
    }
  }

  handlePointerMove(e) {
    e.preventDefault();
    if (!this.tracing) return;

    const data = MONTESSORI_DATA[this.activeTab][this.activeItem];
    const stroke = data.strokes[this.currentStrokeIndex];
    const coords = this.getPointerCoords(e);

    const prevNode = stroke[this.currentCheckpointIndex];
    const targetNode = stroke[this.currentCheckpointIndex + 1];

    const distToSegment = this.getDistanceToSegment(coords.px, coords.py, prevNode, targetNode);
    if (distToSegment > 15) {
      this.tracing = false;
      this.activeStrokePoints = [];
      this.startDot.style.display = 'block';
      this.services.sound.playBoing();
      this.alertBubble.innerText = 'Stay on the line! ✏️';
      this.alertBubble.classList.add('visible');
      this.redrawAll();
      return;
    }

    this.activeStrokePoints.push({ x: coords.x, y: coords.y });
    this.drawActivePath();

    if (Math.random() < 0.25) {
      this.services.sound.playPop();
      this.services.confetti.burst(e.clientX, e.clientY, 3);
    }

    const distToTarget = Math.hypot(coords.px - targetNode.x, coords.py - targetNode.y);
    if (distToTarget < 10) {
      this.currentCheckpointIndex++;
      
      if (this.currentCheckpointIndex >= stroke.length - 1) {
        this.tracing = false;
        this.services.sound.playSnap();
        
        this.completedStrokesPaths.push([...this.activeStrokePoints]);
        this.activeStrokePoints = [];
        this.currentStrokeIndex++;

        const rect = this.canvas.getBoundingClientRect();
        const endX = (targetNode.x / 100) * rect.width + rect.left;
        const endY = (targetNode.y / 100) * rect.height + rect.top;
        this.services.confetti.burst(endX, endY, 15);

        if (this.currentStrokeIndex >= data.strokes.length) {
          setTimeout(() => {
            this.services.sound.playSuccess();
            this.services.confetti.burst(rect.width / 2 + rect.left, rect.height / 2 + rect.top, 50);
            this.services.speech.speak(`Wonderful! You traced ${this.activeItem}!`);
            
            if (window.app) {
              window.app.showVoiceBubble(`Super Tracing! Traced ${this.activeItem}! 🌟`);
            }
          }, 300);
        } else {
          this.updateStartDot();
        }
      }
    }
  }

  handlePointerUp(e) {
    if (!this.tracing) return;
    this.tracing = false;
    this.activeStrokePoints = [];
    this.updateStartDot();
    this.redrawAll();
  }

  getDistanceToSegment(px, py, a, b) {
    const l2 = (a.x - b.x) ** 2 + (a.y - b.y) ** 2;
    if (l2 === 0) return Math.hypot(px - a.x, py - a.y);
    let t = ((px - a.x) * (b.x - a.x) + (py - a.y) * (b.y - a.y)) / l2;
    t = Math.max(0, Math.min(1, t));
    return Math.hypot(px - (a.x + t * (b.x - a.x)), py - (a.y + t * (b.y - a.y)));
  }

  drawActivePath() {
    if (this.activeStrokePoints.length < 2) return;
    this.ctx.strokeStyle = '#9b5de5';
    this.ctx.lineWidth = 14;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    this.ctx.beginPath();
    this.ctx.moveTo(this.activeStrokePoints[0].x, this.activeStrokePoints[0].y);
    for (let i = 1; i < this.activeStrokePoints.length; i++) {
      this.ctx.lineTo(this.activeStrokePoints[i].x, this.activeStrokePoints[i].y);
    }
    this.ctx.stroke();
  }

  redrawAll() {
    this.ctx.clearRect(0, 0, this.canvas.width / (window.devicePixelRatio || 1), this.canvas.height / (window.devicePixelRatio || 1));
    
    this.ctx.strokeStyle = '#4ea8de';
    this.ctx.lineWidth = 14;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    
    this.completedStrokesPaths.forEach((path) => {
      if (path.length < 2) return;
      this.ctx.beginPath();
      this.ctx.moveTo(path[0].x, path[0].y);
      for (let i = 1; i < path.length; i++) {
        this.ctx.lineTo(path[i].x, path[i].y);
      }
      this.ctx.stroke();
    });

    this.drawActivePath();
  }

  cleanup() {
    super.cleanup();
  }
}

// Game 24: Phonics Matcher
const PHONICS_CARDS = [
  { emoji: "🍎", letter: "A", word: "Apple" },
  { emoji: "🎈", letter: "B", word: "Balloon" },
  { emoji: "🐱", letter: "C", word: "Cat" },
  { emoji: "🐶", letter: "D", word: "Dog" },
  { emoji: "🥚", letter: "E", word: "Egg" },
  { emoji: "🐸", letter: "F", word: "Frog" },
  { emoji: "🍇", letter: "G", word: "Grapes" },
  { emoji: "🎩", letter: "H", word: "Hat" },
  { emoji: "🍦", letter: "I", word: "Ice Cream" },
  { emoji: "🚀", letter: "R", word: "Rocket" },
  { emoji: "☀️", letter: "S", word: "Sun" },
  { emoji: "🐢", letter: "T", word: "Turtle" }
];

class GamePhonicsMatcher extends MiniGame {
  start() {
    this.currentIndex = 0;
    this.container.innerHTML = `
      <div class="phonics-layout">
        <div class="phonics-progress-bar">
          <div class="phonics-progress-fill" id="ph-progress"></div>
        </div>
        <div class="phonics-card-outer">
          <div class="phonics-card" id="ph-card">
            <span class="phonics-emoji" id="ph-emoji">🍎</span>
            <div class="phonics-word-label" id="ph-label">
              <span class="missing-letter">?</span><span>pple</span>
            </div>
          </div>
        </div>
        <div class="phonics-choices" id="ph-choices"></div>
      </div>
    `;

    this.card = this.container.querySelector('#ph-card');
    this.emojiEl = this.container.querySelector('#ph-emoji');
    this.labelEl = this.container.querySelector('#ph-label');
    this.choicesEl = this.container.querySelector('#ph-choices');
    this.progressEl = this.container.querySelector('#ph-progress');

    this.shuffledCards = [...PHONICS_CARDS].sort(() => Math.random() - 0.5);

    this.loadCard();
  }

  loadCard() {
    if (this.currentIndex >= 5) {
      this.services.sound.playSuccess();
      const rect = this.card.getBoundingClientRect();
      this.services.confetti.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 60);
      this.services.speech.speak("Sensational work! You matched all the sounds!");
      if (window.app) {
        window.app.showVoiceBubble("Super Phonics Champ! 🌟🍎");
      }
      this.currentIndex = 0;
      this.shuffledCards = [...PHONICS_CARDS].sort(() => Math.random() - 0.5);
    }

    const currentCard = this.shuffledCards[this.currentIndex];
    this.emojiEl.innerText = currentCard.emoji;
    
    const remainder = currentCard.word.substring(1);
    this.labelEl.innerHTML = `<span class="missing-letter">?</span><span>${remainder}</span>`;

    this.progressEl.style.width = `${(this.currentIndex / 5) * 100}%`;

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const correctLetter = currentCard.letter;
    
    const candidates = [correctLetter];
    while (candidates.length < 3) {
      const randLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
      if (!candidates.includes(randLetter)) {
        candidates.push(randLetter);
      }
    }
    candidates.sort(() => Math.random() - 0.5);

    this.choicesEl.innerHTML = '';
    candidates.forEach(letter => {
      const btn = document.createElement('button');
      btn.className = 'phonics-choice-btn';
      btn.innerText = letter;
      
      btn.addEventListener('pointerdown', () => this.checkChoice(letter, btn, currentCard));
      this.choicesEl.appendChild(btn);
    });

    this.services.speech.speak(`What letter starts the word... ${currentCard.word}?`);
  }

  checkChoice(selectedLetter, btn, card) {
    if (selectedLetter === card.letter) {
      btn.classList.add('correct');
      this.services.sound.playSuccess();
      const rect = btn.getBoundingClientRect();
      this.services.confetti.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 20);
      
      const remainder = card.word.substring(1);
      this.labelEl.innerHTML = `<span class="missing-letter" style="color:var(--color-green); border-bottom-color:var(--color-green);">${card.letter}</span><span>${remainder}</span>`;
      
      this.services.speech.speak(`${card.letter} is for ${card.word}!`);

      this.currentIndex++;
      this.choicesEl.querySelectorAll('.phonics-choice-btn').forEach(b => {
        b.style.pointerEvents = 'none';
      });

      this.addTimeout(() => this.loadCard(), 2000);
    } else {
      btn.classList.add('incorrect');
      this.services.sound.playBoing();
      this.services.speech.speak(`Try again!`);
      
      btn.style.animation = 'none';
      btn.offsetHeight;
      btn.style.animation = 'shake 0.3s ease';
      
      this.addTimeout(() => {
        btn.classList.remove('incorrect');
      }, 500);
    }
  }

  cleanup() {
    super.cleanup();
  }
}

// Game 25: Math Explorer
class GameMathExplorer extends MiniGame {
  start() {
    this.currentMode = 'count';
    this.targetCount = 0;
    this.currentCount = 0;
    this.mathProblem = null;
    this.solved = false;

    this.container.innerHTML = `
      <div class="math-layout">
        <div class="math-tabs">
          <button class="math-tab-btn active" data-mode="count">🔢 Count to 30</button>
          <button class="math-tab-btn" data-mode="arithmetic">➕ Add & Subtract</button>
        </div>
        <div id="math-content" style="flex:1; width:100%; display:flex; flex-direction:column; align-items:center;"></div>
      </div>
    `;

    this.container.querySelectorAll('.math-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.container.querySelectorAll('.math-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentMode = btn.getAttribute('data-mode');
        this.services.sound.playPop();
        this.loadMode();
      });
    });

    this.loadMode();
  }

  loadMode() {
    const content = this.container.querySelector('#math-content');
    content.innerHTML = '';

    if (this.currentMode === 'count') {
      this.services.speech.speak("Let's count objects up to 30! Tap each item to count.");
      
      this.targetCount = Math.floor(Math.random() * 21) + 10;
      this.currentCount = 0;

      content.innerHTML = `
        <div class="math-number-badge" id="m-count-badge">0 / ${this.targetCount}</div>
        <div class="math-board" id="m-board"></div>
      `;

      const board = content.querySelector('#m-board');
      const emojis = ["⭐", "🌸", "🦋", "🍎", "🎈", "🐞"];
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];

      for (let i = 0; i < this.targetCount; i++) {
        const item = document.createElement('div');
        item.className = 'math-count-item';
        item.innerText = emoji;
        
        item.style.left = `${10 + Math.random() * 75}%`;
        item.style.top = `${10 + Math.random() * 75}%`;
        item.style.transform = `rotate(${Math.random() * 360}deg)`;

        item.addEventListener('pointerdown', (e) => {
          if (item.classList.contains('counted')) return;
          item.classList.add('counted');
          this.currentCount++;
          
          this.services.sound.playPop();
          this.services.confetti.burst(e.clientX, e.clientY, 8);
          this.services.speech.speak(`${this.currentCount}`);
          
          content.querySelector('#m-count-badge').innerText = `${this.currentCount} / ${this.targetCount}`;

          if (this.currentCount === this.targetCount) {
            this.addTimeout(() => {
              this.services.sound.playSuccess();
              const rect = board.getBoundingClientRect();
              this.services.confetti.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 50);
              this.services.speech.speak(`Fantastic! You counted all ${this.targetCount} items!`);
              
              if (window.app) {
                window.app.showVoiceBubble(`Super Counter! Counted ${this.targetCount}! 🌟`);
              }
              this.addTimeout(() => this.loadMode(), 3000);
            }, 500);
          }
        });

        board.appendChild(item);
      }
    } else {
      this.services.speech.speak("Addition and subtraction! Let's solve the visual math puzzle.");
      this.solved = false;
      this.generateMathProblem();

      content.innerHTML = `
        <div style="flex: 1; display:flex; justify-content:center; align-items:center; width:100%;">
          <div class="math-formula-container">
            <div class="math-group" id="math-group-a"></div>
            <div class="math-operator" id="math-op-symbol">+</div>
            <div class="math-group" id="math-group-b"></div>
            <div class="math-operator">=</div>
            <div class="math-question-bubble" id="math-ans-bubble">?</div>
          </div>
        </div>
        <div class="math-choices" id="math-choices"></div>
      `;

      this.renderArithmeticVisuals();
    }
  }

  generateMathProblem() {
    const isAddition = Math.random() < 0.5;
    const emojis = ["🍎", "⭐", "🥕", "🐠", "🐞"];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];

    if (isAddition) {
      const a = Math.floor(Math.random() * 5) + 1;
      const b = Math.floor(Math.random() * 5) + 1;
      this.mathProblem = { type: 'add', a, b, answer: a + b, emoji };
    } else {
      const a = Math.floor(Math.random() * 6) + 3;
      const b = Math.floor(Math.random() * (a - 1)) + 1;
      this.mathProblem = { type: 'sub', a, b, answer: a - b, emoji };
    }
  }

  renderArithmeticVisuals() {
    const content = this.container.querySelector('#math-content');
    const groupA = content.querySelector('#math-group-a');
    const opSymbol = content.querySelector('#math-op-symbol');
    const groupB = content.querySelector('#math-group-b');
    const choicesContainer = content.querySelector('#math-choices');

    const prob = this.mathProblem;
    groupA.innerHTML = '';
    groupB.innerHTML = '';
    choicesContainer.innerHTML = '';

    for (let i = 0; i < prob.a; i++) {
      const item = document.createElement('span');
      item.className = 'math-group-item';
      item.innerText = prob.emoji;
      
      item.addEventListener('pointerdown', (e) => {
        this.services.sound.playPop();
        item.style.transform = 'scale(1.3)';
        setTimeout(() => item.style.transform = 'scale(1)', 150);
        this.services.confetti.burst(e.clientX, e.clientY, 3);
      });
      
      groupA.appendChild(item);
    }

    if (prob.type === 'add') {
      opSymbol.innerText = '+';
      for (let i = 0; i < prob.b; i++) {
        const item = document.createElement('span');
        item.className = 'math-group-item';
        item.innerText = prob.emoji;
        
        item.addEventListener('pointerdown', (e) => {
          this.services.sound.playPop();
          item.style.transform = 'scale(1.3)';
          setTimeout(() => item.style.transform = 'scale(1)', 150);
          this.services.confetti.burst(e.clientX, e.clientY, 3);
        });

        groupB.appendChild(item);
      }
    } else {
      opSymbol.innerText = '-';
      for (let i = 0; i < prob.b; i++) {
        const item = document.createElement('span');
        item.className = 'math-group-item subtracted';
        item.innerText = prob.emoji;
        groupB.appendChild(item);
      }

      const itemsA = groupA.querySelectorAll('.math-group-item');
      for (let i = 0; i < prob.b; i++) {
        if (itemsA[itemsA.length - 1 - i]) {
          itemsA[itemsA.length - 1 - i].classList.add('subtracted');
        }
      }
    }

    const correct = prob.answer;
    const candidates = [correct];
    while (candidates.length < 3) {
      const rand = Math.floor(Math.random() * 10) + 1;
      if (!candidates.includes(rand)) {
        candidates.push(rand);
      }
    }
    candidates.sort(() => Math.random() - 0.5);

    candidates.forEach(num => {
      const btn = document.createElement('button');
      btn.className = 'math-choice-btn';
      btn.innerText = num;
      
      btn.addEventListener('pointerdown', () => this.checkArithmeticAnswer(num, btn));
      choicesContainer.appendChild(btn);
    });

    const actionText = prob.type === 'add' ? `plus` : `minus`;
    this.services.speech.speak(`How much is ${prob.a} ${actionText} ${prob.b}? Count the items!`);
  }

  checkArithmeticAnswer(num, btn) {
    if (this.solved) return;
    const prob = this.mathProblem;

    if (num === prob.answer) {
      this.solved = true;
      btn.classList.add('correct');
      this.services.sound.playSuccess();
      
      const bubble = this.container.querySelector('#math-ans-bubble');
      bubble.innerText = num;
      bubble.classList.add('correct');

      const rect = btn.getBoundingClientRect();
      this.services.confetti.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 25);

      const actionText = prob.type === 'add' ? `plus` : `minus`;
      this.services.speech.speak(`Yes! ${prob.a} ${actionText} ${prob.b} equals ${prob.answer}!`);

      if (window.app) {
        window.app.showVoiceBubble(`Super Math Whiz! ➕⭐`);
      }

      this.addTimeout(() => this.loadMode(), 2500);
    } else {
      btn.classList.add('incorrect');
      this.services.sound.playBoing();
      this.services.speech.speak(`Try again!`);
      
      btn.style.animation = 'none';
      btn.offsetHeight;
      btn.style.animation = 'shake 0.3s ease';
      
      this.addTimeout(() => {
        btn.classList.remove('incorrect');
      }, 500);
    }
  }

  cleanup() {
    super.cleanup();
  }
}

// Game 18: Teddy Dress-Up
class GameTeddyDressUp extends MiniGame {
  start() {
    this.container.innerHTML = `
      <div class="dressup-layout">
        <div class="teddy-body-container" id="t-body-zone">
          ${ASSETS.teddy}
          <div id="t-placed"></div>
        </div>
        <div class="dressup-drawer" id="t-drawer">
          <div class="drawer-dressup-item" data-id="hat" data-w="80" data-h="90">${ASSETS.features.accessories.party.svg}</div>
          <div class="drawer-dressup-item" data-id="bowtie" data-w="80" data-h="45">${ASSETS.features.accessories.bowtie.svg}</div>
          <div class="drawer-dressup-item" data-id="flower" data-w="60" data-h="60">${ASSETS.features.accessories.flower.svg}</div>
        </div>
      </div>
    `;

    this.services.speech.speak("Dress up the teddy bear!");

    this.container.querySelectorAll('.drawer-dressup-item').forEach(item => {
      item.addEventListener('pointerdown', (e) => this.drag(e, item));
    });
  }

  drag(e, node) {
    e.preventDefault();
    this.services.sound.playPop();
    const id = node.getAttribute('data-id');
    const w = node.getAttribute('data-w');
    const h = node.getAttribute('data-h');

    const floating = document.createElement('div');
    floating.className = 'floating-drag-item';
    floating.innerHTML = node.innerHTML;
    document.body.appendChild(floating);
    floating.style.left = `${e.clientX}px`;
    floating.style.top = `${e.clientY}px`;

    const move = (me) => {
      floating.style.left = `${me.clientX}px`;
      floating.style.top = `${me.clientY}px`;
    };

    const up = (ue) => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      document.body.removeChild(floating);

      const zone = this.container.querySelector('#t-body-zone');
      const rect = zone.getBoundingClientRect();

      if (ue.clientX >= rect.left && ue.clientX <= rect.right && ue.clientY >= rect.top && ue.clientY <= rect.bottom) {
        const x = ((ue.clientX - rect.left) / rect.width) * 100;
        const y = ((ue.clientY - rect.top) / rect.height) * 100;
        
        const placed = document.createElement('div');
        placed.className = 'dressup-item';
        placed.style.left = `${x}%`;
        placed.style.top = `${y}%`;
        placed.style.width = `${w}px`;
        placed.style.height = `${h}px`;
        placed.innerHTML = node.innerHTML;

        // Make placed item draggable
        placed.addEventListener('pointerdown', (pe) => this.dragPlaced(pe, placed));

        this.container.querySelector('#t-placed').appendChild(placed);
        this.services.sound.playSnap();
        this.services.confetti.burst(ue.clientX, ue.clientY);
      }
    };

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  }

  dragPlaced(e, node) {
    e.preventDefault();
    e.stopPropagation();
    this.services.sound.playPop();

    const zone = this.container.querySelector('#t-body-zone');
    const rect = zone.getBoundingClientRect();

    const move = (me) => {
      const x = ((me.clientX - rect.left) / rect.width) * 100;
      const y = ((me.clientY - rect.top) / rect.height) * 100;
      node.style.left = `${x}%`;
      node.style.top = `${y}%`;
    };

    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      this.services.sound.playSnap();
    };

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  }
}

// Game 19: Drum Kit Beats
class GameDrumKit extends MiniGame {
  start() {
    this.container.innerHTML = `
      <div class="drumkit-layout">
        <div class="drum-elem bass-drum" data-d="bass">BASS</div>
        <div class="drum-elem snare-drum" data-d="snare">SNARE</div>
        <div class="drum-elem hihat-cymbal" data-d="hihat">CYMBAL</div>
      </div>
    `;

    this.services.speech.speak("Tap the drums to make beats!");

    this.container.querySelectorAll('.drum-elem').forEach(drum => {
      drum.addEventListener('pointerdown', () => {
        const type = drum.getAttribute('data-d');
        this.services.sound.playDrum(type);
        drum.style.transform = 'scale(0.92)';
        this.addTimeout(() => drum.style.transform = 'scale(1)', 100);
      });
    });
  }
}

// Game 20: Rain Bubbles
class GameRainBubbles extends MiniGame {
  start() {
    this.container.innerHTML = `<div class="rain-layout" id="rn-layout"></div>`;
    this.services.speech.speak("Tap the falling raindrops to grow flowers!");
    
    // Spawn raindrops
    this.addInterval(() => this.spawn(), 1000);
  }

  spawn() {
    const layout = this.container.querySelector('#rn-layout');
    if (!layout) return;

    const drop = document.createElement('div');
    drop.className = 'falling-drop';
    drop.style.left = `${Math.random() * 80 + 10}%`;
    drop.style.animationDuration = `${4 + Math.random() * 2.5}s`;

    drop.addEventListener('pointerdown', (e) => {
      this.services.sound.playPop();
      this.services.confetti.burst(e.clientX, e.clientY, 10);
      
      // Spawn flower at bottom coordinates
      const flower = document.createElement('div');
      flower.className = 'ground-flower';
      const flowers = ['🌸', '💐', '🌻', '🌹', '🌷', '🌼'];
      flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];
      flower.style.left = drop.style.left;
      layout.appendChild(flower);

      drop.remove();
    });

    layout.appendChild(drop);

    // Auto removal
    this.addTimeout(() => drop.remove(), 7000);
  }
}

// Game 21: Dinosaur Jigsaw Puzzle (Dino Jigsaw)
class GameDinoJigsaw extends MiniGame {
  start() {
    this.container.innerHTML = `
      <div class="dinojigsaw-layout">
        <div class="jigsaw-board-container">
          <div class="jigsaw-board" id="j-board">
            <div class="jigsaw-target-quad" id="quad-0" data-q="0">1</div>
            <div class="jigsaw-target-quad" id="quad-1" data-q="1">2</div>
            <div class="jigsaw-target-quad" id="quad-2" data-q="2">3</div>
            <div class="jigsaw-target-quad" id="quad-3" data-q="3">4</div>
          </div>
        </div>
        <div class="jigsaw-pieces-container" id="j-tray"></div>
      </div>
    `;

    this.services.speech.speak("Put the dinosaur puzzle pieces together!");
    this.placedCount = 0;
    this.spawn();
  }

  spawn() {
    const tray = this.container.querySelector('#j-tray');
    tray.innerHTML = '';

    const list = [0, 1, 2, 3];
    // Shuffle pieces
    const pieces = [...list].sort(() => Math.random() - 0.5);

    pieces.forEach(q => {
      const p = document.createElement('div');
      p.className = 'jigsaw-piece';
      p.setAttribute('data-quad', q);

      // Create cropped SVG of quadrant using absolute positioning
      const cropWrap = document.createElement('div');
      cropWrap.style.width = '100%';
      cropWrap.style.height = '100%';
      cropWrap.style.overflow = 'hidden';
      cropWrap.style.position = 'relative';
      cropWrap.style.borderRadius = '8px';

      const innerSvg = document.createElement('div');
      innerSvg.style.position = 'absolute';
      innerSvg.style.width = '200%';
      innerSvg.style.height = '200%';
      
      const col = q % 2;
      const row = Math.floor(q / 2);
      innerSvg.style.left = `-${col * 100}%`;
      innerSvg.style.top = `-${row * 100}%`;
      innerSvg.innerHTML = ASSETS.dino;

      cropWrap.appendChild(innerSvg);
      p.appendChild(cropWrap);

      p.addEventListener('pointerdown', (e) => this.drag(e, p, q));
      tray.appendChild(p);
    });
  }

  drag(e, node, quad) {
    e.preventDefault();
    this.services.sound.playPop();
    node.classList.add('dragging');

    const move = (me) => {
      node.style.position = 'fixed';
      node.style.left = `${me.clientX - 36}px`;
      node.style.top = `${me.clientY - 36}px`;
    };

    const up = (ue) => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      node.classList.remove('dragging');

      const target = this.container.querySelector(`#quad-${quad}`);
      const rect = target.getBoundingClientRect();
      let matched = false;

      if (ue.clientX >= rect.left - 30 && ue.clientX <= rect.right + 30 && ue.clientY >= rect.top - 30 && ue.clientY <= rect.bottom + 30) {
        matched = true;
        target.classList.add('snapped');
        target.innerHTML = node.innerHTML;
        node.remove();
        
        this.services.sound.playSnap();
        this.services.confetti.burst(ue.clientX, ue.clientY, 15);
        this.placedCount++;
        this.services.speech.speak("Yay! Perfect piece!");

        if (this.placedCount === 4) {
          this.addTimeout(() => {
            this.services.sound.playSuccess();
            this.services.confetti.burst(rect.left, rect.top, 50);
            this.services.speech.speak("Wow! You made a beautiful dinosaur!");
          }, 600);
        }
      }

      if (!matched) {
        node.style.position = '';
        this.services.sound.playPop();
      }
    };

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  }
}

// Game 22: Teddy Jump
class GameTeddyJump extends MiniGame {
  start() {
    this.container.innerHTML = `
      <div class="teddyjump-board" id="tj-board">
        <div class="score-badge" id="tj-score">Stars: 0</div>
        <div class="teddyjump-character" id="tj-teddy">🧸</div>
      </div>
    `;

    this.services.speech.speak("Tap to make the teddy bear jump over blocks!");

    this.board = this.container.querySelector('#tj-board');
    this.teddy = this.container.querySelector('#tj-teddy');
    this.score = 0;

    // Physics state
    this.teddyY = 0;
    this.teddyVY = 0;
    this.gravity = 0.6;
    this.isJumping = false;
    this.gameRunning = true;

    this.obstacles = [];
    this.stars = [];
    
    // Wire tap jump
    this.board.addEventListener('pointerdown', () => this.jump());

    // Game loop
    const tick = () => {
      if (!this.gameRunning) return;
      this.updatePhysics();
      this.animationId = requestAnimationFrame(tick);
    };
    this.animationId = requestAnimationFrame(tick);

    // Spawn intervals
    this.addInterval(() => this.spawnObstacle(), 2500);
    this.addInterval(() => this.spawnStar(), 3000);
  }

  jump() {
    if (this.isJumping) return;
    this.teddyVY = 12;
    this.isJumping = true;
    this.services.sound.playBoing();
  }

  spawnObstacle() {
    if (!this.gameRunning) return;
    const types = ['🧱', '📦', '🪨', '🪵'];
    const el = document.createElement('div');
    el.className = 'teddyjump-obstacle';
    el.innerText = types[Math.floor(Math.random() * types.length)];
    el.style.right = '-60px';
    this.board.appendChild(el);

    this.obstacles.push({
      el: el,
      right: -60,
      hit: false
    });
  }

  spawnStar() {
    if (!this.gameRunning) return;
    const el = document.createElement('div');
    el.className = 'teddyjump-star';
    el.innerText = '⭐';
    el.style.right = '-40px';
    el.style.bottom = `${35 + Math.random() * 25}%`;
    this.board.appendChild(el);

    this.stars.push({
      el: el,
      right: -40,
      bottom: parseFloat(el.style.bottom)
    });
  }

  updatePhysics() {
    // 1. Teddy Physics
    if (this.isJumping) {
      this.teddyY += this.teddyVY;
      this.teddyVY -= this.gravity;
      if (this.teddyY <= 0) {
        this.teddyY = 0;
        this.teddyVY = 0;
        this.isJumping = false;
      }
      this.teddy.style.bottom = `${25 + (this.teddyY * 0.7)}%`;
    }

    // 2. Obstacles Update
    this.obstacles.forEach((obs, index) => {
      obs.right += 4.5;
      obs.el.style.right = `${obs.right}px`;

      // Collision check (Teddy is at left: 15%)
      const boardRect = this.board.getBoundingClientRect();
      const obsRect = obs.el.getBoundingClientRect();
      const teddyRect = this.teddy.getBoundingClientRect();

      if (
        obsRect.left <= teddyRect.right &&
        obsRect.right >= teddyRect.left &&
        teddyRect.bottom >= obsRect.top &&
        !obs.hit
      ) {
        obs.hit = true;
        this.services.sound.playReset();
        this.teddy.style.opacity = '0.5';
        setTimeout(() => this.teddy.style.opacity = '1', 600);
      }

      // Cleanup
      if (obs.right > boardRect.width + 60) {
        obs.el.remove();
        this.obstacles.splice(index, 1);
      }
    });

    // 3. Stars Update
    this.stars.forEach((star, index) => {
      star.right += 3.5;
      star.el.style.right = `${star.right}px`;

      const starRect = star.el.getBoundingClientRect();
      const teddyRect = this.teddy.getBoundingClientRect();

      if (
        starRect.left <= teddyRect.right &&
        starRect.right >= teddyRect.left &&
        starRect.top <= teddyRect.bottom &&
        starRect.bottom >= teddyRect.top
      ) {
        this.score++;
        this.container.querySelector('#tj-score').innerText = `Stars: ${this.score}`;
        this.services.sound.playSnap();
        
        const r = this.board.getBoundingClientRect();
        this.services.confetti.burst(starRect.left, starRect.top, 8);
        
        star.el.remove();
        this.stars.splice(index, 1);
      }

      // Cleanup
      if (star.right > boardRect.width + 60) {
        star.el.remove();
        this.stars.splice(index, 1);
      }
    });
  }

  cleanup() {
    super.cleanup();
    this.gameRunning = false;
    cancelAnimationFrame(this.animationId);
  }
}

// Game 23: Feed the Frog
class GameFeedFrog extends MiniGame {
  start() {
    this.container.innerHTML = `
      <div class="frog-layout">
        <svg id="frog-tongue-svg">
          <line id="tongue-line" x1="0" y1="0" x2="0" y2="0" stroke="#ff595e" stroke-width="8" stroke-linecap="round" fill="none" style="display:none;" />
        </svg>
        <div class="frog-lily"></div>
        <div class="frog-character" id="ff-frog">🐸</div>
        <div class="frog-bug" id="ff-bug">🪰</div>
      </div>
    `;

    this.services.speech.speak("Tap the frog to catch the flying bug!");

    this.frog = this.container.querySelector('#ff-frog');
    this.bug = this.container.querySelector('#ff-bug');
    this.line = this.container.querySelector('#tongue-line');

    this.tongueState = 'idle'; // 'idle', 'firing', 'retracting'
    this.tongueProgress = 0;
    this.bugX = 0;
    this.bugY = 30;

    // Movement loop for bug
    this.addInterval(() => {
      this.bugX += 2.5;
      if (this.bugX > 105) this.bugX = -10;
      this.bug.style.left = `${this.bugX}%`;
      
      const bounceY = 25 + Math.sin(this.bugX / 10) * 12;
      this.bug.style.top = `${bounceY}%`;
    }, 45);

    // Tap to fire
    this.frog.addEventListener('pointerdown', () => this.fireTongue());
  }

  fireTongue() {
    if (this.tongueState !== 'idle') return;
    this.tongueState = 'firing';
    this.services.sound.playBoing();

    // Start coordinates (frog mouth)
    const frogRect = this.frog.getBoundingClientRect();
    const boardRect = this.container.getBoundingClientRect();

    const startX = frogRect.left + frogRect.width / 2 - boardRect.left;
    const startY = frogRect.top + 20 - boardRect.top;

    this.line.setAttribute('x1', startX);
    this.line.setAttribute('y1', startY);
    this.line.style.display = 'block';

    const animateTongue = () => {
      if (this.tongueState === 'idle') return;

      const bugRect = this.bug.getBoundingClientRect();
      const targetX = bugRect.left + bugRect.width / 2 - boardRect.left;
      const targetY = bugRect.top + bugRect.height / 2 - boardRect.top;

      if (this.tongueState === 'firing') {
        this.tongueProgress += 0.15;
        if (this.tongueProgress >= 1.0) {
          this.tongueProgress = 1.0;
          this.tongueState = 'retracting';
          
          // Bug caught!
          this.bug.style.display = 'none';
          this.services.sound.playCrunch();
          this.services.confetti.burst(bugRect.left, bugRect.top, 12);
        }
      } else if (this.tongueState === 'retracting') {
        this.tongueProgress -= 0.15;
        if (this.tongueProgress <= 0) {
          this.tongueProgress = 0;
          this.tongueState = 'idle';
          this.line.style.display = 'none';
          
          // Swallow and respawn bug
          this.services.sound.playAnimal('duck'); // cute croak substitute
          this.bug.style.display = '';
          this.bugX = -10;
          this.services.speech.speak("Nom nom! Yummy!");
          return;
        }
      }

      const currentX = startX + (targetX - startX) * this.tongueProgress;
      const currentY = startY + (targetY - startY) * this.tongueProgress;

      this.line.setAttribute('x2', currentX);
      this.line.setAttribute('y2', currentY);

      requestAnimationFrame(animateTongue);
    };

    requestAnimationFrame(animateTongue);
  }
}

// Game 24: Bee Maze
class GameBeeMaze extends MiniGame {
  start() {
    this.container.innerHTML = `
      <div class="beemaze-layout">
        <div class="beemaze-grid" id="bm-grid"></div>
        <div class="maze-controls">
          <div></div>
          <button class="maze-ctrl-btn" data-d="up">▲</button>
          <div></div>
          <button class="maze-ctrl-btn" data-d="left">◀</button>
          <button class="maze-ctrl-btn" data-d="down">▼</button>
          <button class="maze-ctrl-btn" data-d="right">▶</button>
        </div>
      </div>
    `;

    this.services.speech.speak("Help the bee find the flower by tapping the arrows!");

    // Simple 5x5 Grid representation
    // 0 = wall (dark green), 1 = path (yellow)
    this.maze = [
      [1, 1, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 1, 1],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1]
    ];

    this.beeRow = 0;
    this.beeCol = 0;

    this.render();

    this.container.querySelectorAll('.maze-ctrl-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.move(btn.getAttribute('data-d'));
      });
    });
  }

  render() {
    const grid = this.container.querySelector('#bm-grid');
    grid.innerHTML = '';

    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        const cell = document.createElement('div');
        cell.className = 'maze-cell';
        if (this.maze[r][c] === 1) {
          cell.classList.add('maze-path');
        }
        if (r === 0 && c === 0) {
          cell.classList.add('maze-start');
        }
        if (r === 4 && c === 4) {
          cell.classList.add('maze-end');
        }

        // Bee rendering
        if (r === this.beeRow && c === this.beeCol) {
          const bee = document.createElement('div');
          bee.className = 'maze-bee';
          bee.innerText = '🐝';
          cell.appendChild(bee);
        }

        grid.appendChild(cell);
      }
    }
  }

  move(dir) {
    let nextRow = this.beeRow;
    let nextCol = this.beeCol;

    if (dir === 'up') nextRow--;
    else if (dir === 'down') nextRow++;
    else if (dir === 'left') nextCol--;
    else if (dir === 'right') nextCol++;

    // Boundaries check
    if (nextRow >= 0 && nextRow < 5 && nextCol >= 0 && nextCol < 5) {
      if (this.maze[nextRow][nextCol] === 1) {
        this.beeRow = nextRow;
        this.beeCol = nextCol;
        this.services.sound.playBuzz();
        this.render();

        // Finish check
        if (this.beeRow === 4 && this.beeCol === 4) {
          this.addTimeout(() => {
            this.services.sound.playSuccess();
            const r = this.container.querySelector('#bm-grid').getBoundingClientRect();
            this.services.confetti.burst(r.left + r.width * 0.9, r.top + r.height * 0.9, 40);
            this.services.speech.speak("Yay! You helped the bee find the flower!");
            this.beeRow = 0;
            this.beeCol = 0;
            this.render();
          }, 400);
        }
      } else {
        this.services.sound.playReset(); // wall bump sound
      }
    }
  }
}

// Game 25: Space Rocket Lander
class GameRocketLander extends MiniGame {
  start() {
    this.container.innerHTML = `
      <div class="rocket-arena" id="rl-arena">
        <div class="landing-pad"></div>
        <div class="rocket-ship" id="rl-rocket">
          <span>🚀</span>
          <div class="rocket-exhaust" id="rl-flame" style="display:none;">🔥</div>
        </div>
      </div>
    `;

    this.services.speech.speak("Tap the screen to fly the rocket and land softly!");

    this.arena = this.container.querySelector('#rl-arena');
    this.rocket = this.container.querySelector('#rl-rocket');
    this.flame = this.container.querySelector('#rl-flame');

    this.rocketY = 15; // percent
    this.rocketVY = 0;
    this.gravity = 0.08;
    this.gameRunning = true;

    // Pointer down thrust
    this.arena.addEventListener('pointerdown', () => this.thrust());
    this.arena.addEventListener('pointerup', () => this.stopThrust());

    const loop = () => {
      if (!this.gameRunning) return;
      this.updatePhysics();
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  thrust() {
    this.rocketVY = -1.6;
    this.flame.style.display = 'block';
    this.services.sound.playThrust();
  }

  stopThrust() {
    this.flame.style.display = 'none';
  }

  updatePhysics() {
    this.rocketVY += this.gravity;
    this.rocketY += this.rocketVY;

    // Boundaries
    if (this.rocketY < 8) {
      this.rocketY = 8;
      this.rocketVY = 0;
    }

    this.rocket.style.left = '50%';
    this.rocket.style.top = `${this.rocketY}%`;

    // Landing check
    if (this.rocketY >= 82) {
      if (this.rocketVY < 1.8) {
        // Safe Landing!
        this.rocketY = 82;
        this.rocketVY = 0;
        this.services.sound.playSuccess();
        const r = this.arena.getBoundingClientRect();
        this.services.confetti.burst(r.width / 2, r.height * 0.85, 30);
        this.services.speech.speak("T-minus zero! Perfect landing!");
        
        // Reset after delay
        this.gameRunning = false;
        this.addTimeout(() => {
          this.rocketY = 15;
          this.gameRunning = true;
          this.rocketVY = 0;
          requestAnimationFrame(() => this.updatePhysics());
        }, 3000);
      } else {
        // Bounced back!
        this.rocketVY = -4.5;
        this.services.sound.playBoing();
        this.services.speech.speak("Bounce! Land gently!");
      }
    }
  }

  cleanup() {
    super.cleanup();
    this.gameRunning = false;
  }
}

// Game 26: Ice Cream Stack
class GameIceCreamStack extends MiniGame {
  start() {
    this.container.innerHTML = `
      <div class="icecream-arena" id="ic-arena">
        <div class="score-badge" id="ic-score">Scoops: 0</div>
        <div class="icecream-cone" id="ic-cone"></div>
        <div id="ic-stack"></div>
      </div>
    `;

    this.services.speech.speak("Catch the falling ice cream scoops!");

    this.arena = this.container.querySelector('#ic-arena');
    this.cone = this.container.querySelector('#ic-cone');
    this.stackContainer = this.container.querySelector('#ic-stack');
    
    this.coneX = 50; // percent
    this.scoops = [];
    this.falling = null;

    // Drag cone
    const moveCone = (e) => {
      const rect = this.arena.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      this.coneX = Math.max(15, Math.min(85, ((clientX - rect.left) / rect.width) * 100));
      this.cone.style.left = `${this.coneX}%`;
      this.updateStackPositions();
    };
    this.arena.addEventListener('pointermove', moveCone);

    this.spawnScoop();
  }

  spawnScoop() {
    if (!this.arena) return;

    const colors = ['#f15bb5', '#fee440', '#00f5d4', '#ff9f1c', '#ff595e'];
    const col = colors[Math.floor(Math.random() * colors.length)];

    const scoop = document.createElement('div');
    scoop.className = 'falling-scoop';
    scoop.style.backgroundColor = col;
    
    const startX = Math.random() * 70 + 15;
    scoop.style.left = `${startX}%`;
    scoop.style.top = '0%';
    this.arena.appendChild(scoop);

    this.falling = {
      el: scoop,
      x: startX,
      y: 0
    };

    let top = 0;
    const fall = setInterval(() => {
      if (!this.arena || !scoop.parentElement) {
        clearInterval(fall);
        return;
      }

      top += 2.0;
      this.falling.y = top;
      scoop.style.top = `${top}%`;

      // Check height stack collision
      const targetY = 85 - (this.scoops.length * 5.2);
      
      if (top >= targetY - 4 && top <= targetY) {
        const dist = Math.abs(this.falling.x - this.coneX);
        if (dist < 12) {
          clearInterval(fall);
          this.stackScoop(scoop);
        }
      }

      if (top > 100) {
        clearInterval(fall);
        scoop.remove();
        this.spawnScoop();
      }
    }, 35);
  }

  stackScoop(el) {
    el.className = 'icecream-scoop';
    el.style.left = `${this.coneX}%`;
    el.style.top = `${85 - (this.scoops.length * 5.2)}%`;
    this.stackContainer.appendChild(el);

    this.scoops.push(el);
    this.container.querySelector('#ic-score').innerText = `Scoops: ${this.scoops.length}`;
    
    this.services.sound.playSplat();
    
    // Wiggle stack animation
    el.style.animation = 'wiggle 0.3s ease';
    this.addTimeout(() => el.style.animation = '', 300);

    // Limit check to reset
    if (this.scoops.length >= 8) {
      this.addTimeout(() => {
        this.services.sound.playSuccess();
        this.services.speech.speak("Wow! What a giant ice cream stack! Yum yum!");
        this.stackContainer.innerHTML = '';
        this.scoops = [];
        this.container.querySelector('#ic-score').innerText = `Scoops: 0`;
        this.spawnScoop();
      }, 1000);
    } else {
      this.spawnScoop();
    }
  }

  updateStackPositions() {
    this.scoops.forEach((scoop, index) => {
      scoop.style.left = `${this.coneX}%`;
    });
  }
}

// Game 27: Pop the Undersea Bubbles
class GameUnderseaBubbles extends MiniGame {
  start() {
    this.container.innerHTML = `<div class="undersea-arena" id="ua-arena"></div>`;
    this.services.speech.speak("Pop the sea animal bubbles!");

    this.arena = this.container.querySelector('#ua-arena');
    this.addInterval(() => this.spawn(), 1200);
  }

  spawn() {
    if (!this.arena) return;

    const creatures = [
      { e: '🐳', name: 'whale' },
      { e: '🐙', name: 'octopus' },
      { e: '🦀', name: 'crab' },
      { e: '🐠', name: 'fish' },
      { e: '🦈', name: 'shark' }
    ];
    const c = creatures[Math.floor(Math.random() * creatures.length)];

    const bubble = document.createElement('div');
    bubble.className = 'undersea-bubble';
    
    const size = 64 + Math.random() * 24;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 80 + 10}%`;
    bubble.style.animationDuration = `${6 + Math.random() * 3}s`;

    const animal = document.createElement('div');
    animal.className = 'sea-creature';
    animal.innerText = c.e;
    bubble.appendChild(animal);

    bubble.addEventListener('pointerdown', (e) => {
      this.services.sound.playPop();
      this.services.confetti.burst(e.clientX, e.clientY, 12);
      
      // Animal swim animation out
      const swimOut = document.createElement('div');
      swimOut.className = 'sea-creature';
      swimOut.innerText = c.e;
      swimOut.style.left = `${e.clientX - this.arena.getBoundingClientRect().left}px`;
      swimOut.style.top = `${e.clientY - this.arena.getBoundingClientRect().top}px`;
      swimOut.style.transition = 'all 1.0s ease-out';
      
      this.arena.appendChild(swimOut);
      bubble.remove();

      // Spin and float away
      requestAnimationFrame(() => {
        swimOut.style.transform = 'scale(2) rotate(360deg) translateX(300px)';
        swimOut.style.opacity = '0';
      });

      this.addTimeout(() => swimOut.remove(), 1000);
    });

    this.arena.appendChild(bubble);

    // Auto removal
    this.addTimeout(() => bubble.remove(), 8000);
  }
}

// ==========================================
// 6. GLOBAL GAME LOBBY PORTAL REGISTRY
// ==========================================
const GAME_REGISTRY = {
  facepuzzle: { title: "Face Puzzle", icon: "🎨", cat: "puzzle", gameClass: GameFacePuzzle },
  balloons: { title: "Balloon Pop", icon: "🎈", cat: "action", gameClass: GameBalloons },
  piano: { title: "Animal Piano", icon: "🎵", cat: "music", gameClass: GameAnimalPiano },
  matcher: { title: "Color Matcher", icon: "🍏", cat: "puzzle", gameClass: GameColorMatcher },
  bubblewrap: { title: "Bubble Wrapper", icon: "🫧", cat: "action", gameClass: GameBubbleWrap },
  xylophone: { title: "Xylophone", icon: "🎼", cat: "music", gameClass: GameXylophone },
  shapes: { title: "Shape Sorter", icon: "🧩", cat: "puzzle", gameClass: GameShapeMatcher },
  catcher: { title: "Fruit Catcher", icon: "🧺", cat: "action", gameClass: GameFruitCatcher },
  coloring: { title: "Animal Coloring", icon: "🎨", cat: "creative", gameClass: GameColoringBook },
  memory: { title: "Animal Cards", icon: "🐱", cat: "puzzle", gameClass: GameMemoryMatch },
  startap: { title: "Star Strike", icon: "⭐", cat: "action", gameClass: GameStarTap },
  feedmonster: { title: "Feed Monster", icon: "👾", cat: "creative", gameClass: GameFeedMonster },
  ladybugs: { title: "Ladybug Count", icon: "🐞", cat: "puzzle", gameClass: GameLadybugs },
  whackmole: { title: "Whack-A-Mole", icon: "🐹", cat: "action", gameClass: GameWhackMole },
  fireworks: { title: "Fireworks", icon: "🎆", cat: "creative", gameClass: GameFireworks },
  fishtank: { title: "Fish Tank Feed", icon: "🐠", cat: "creative", gameClass: GameFishTank },
  tracer: { title: "Letter Tracer", icon: "✏️", cat: "creative", gameClass: GameLetterTracer },
  teddy: { title: "Teddy Dress Up", icon: "🧸", cat: "creative", gameClass: GameTeddyDressUp },
  drums: { title: "Drum Beats", icon: "🥁", cat: "music", gameClass: GameDrumKit },
  rainbubbles: { title: "Rain Flowers", icon: "☔", cat: "action", gameClass: GameRainBubbles },
  dinojigsaw: { title: "Dino Jigsaw", icon: "🧩", cat: "puzzle", gameClass: GameDinoJigsaw },
  teddyjump: { title: "Teddy Jump", icon: "🧸", cat: "action", gameClass: GameTeddyJump },
  feedfrog: { title: "Feed Frog", icon: "🐸", cat: "creative", gameClass: GameFeedFrog },
  beemaze: { title: "Bee Maze", icon: "🐝", cat: "puzzle", gameClass: GameBeeMaze },
  rocketlander: { title: "Rocket Lander", icon: "🚀", cat: "action", gameClass: GameRocketLander },
  icecreamstack: { title: "Ice Cream Stack", icon: "🍦", cat: "action", gameClass: GameIceCreamStack },
  underseabubbles: { title: "Undersea Pop", icon: "🫧", cat: "action", gameClass: GameUnderseaBubbles },
  phonics: { title: "Phonics Match", icon: "🍎", cat: "puzzle", gameClass: GamePhonicsMatcher },
  mathexplorer: { title: "Math Explorer", icon: "🔢", cat: "puzzle", gameClass: GameMathExplorer }
};

class GameManager {
  constructor() {
    this.sound = new AudioSynth();
    this.speech = new SpeechNarrator();
    this.confetti = null;
    this.activeGame = null;

    // View references
    this.lobbyView = document.getElementById('lobby-view');
    this.gameViewport = document.getElementById('game-viewport');
    this.grid = document.getElementById('games-grid');
    this.backBtn = document.getElementById('btn-back');
    this.soundBtn = document.getElementById('btn-sound');
    this.activeContainer = document.getElementById('active-game-container');
    this.voiceBubble = document.getElementById('voice-bubble');

    this.init();
  }

  init() {
    this.confetti = new ConfettiEngine(document.getElementById('effects-canvas'));
    this.renderLobby();
    this.setupEvents();
  }

  setupEvents() {
    // Start Overlay Screen
    document.getElementById('btn-start-game').addEventListener('click', () => {
      this.sound.init();
      document.getElementById('start-overlay').classList.add('hidden');
      this.sound.playSuccess();
      setTimeout(() => {
        this.speech.speak("Welcome to the Kids Play Zone! Select any game to play!");
        this.showVoiceBubble("Let's play! 🧸");
      }, 500);
    });

    // Mute control
    this.soundBtn.addEventListener('click', () => {
      this.sound.muted = !this.sound.muted;
      this.speech.muted = this.sound.muted;
      if (this.sound.muted) {
        this.soundBtn.className = "icon-btn sound-off";
        this.soundBtn.innerHTML = '<span class="sound-icon">🔇</span>';
      } else {
        this.soundBtn.className = "icon-btn sound-on";
        this.soundBtn.innerHTML = '<span class="sound-icon">🔊</span>';
        this.sound.init();
        this.sound.playPop();
      }
    });

    // Category filter clicks
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.filterLobby(btn.getAttribute('data-filter'));
        this.sound.playPop();
      });
    });

    // Back to Lobby Navigation
    this.backBtn.addEventListener('click', () => this.exitToLobby());
  }

  renderLobby() {
    this.grid.innerHTML = '';
    for (const [id, game] of Object.entries(GAME_REGISTRY)) {
      const card = document.createElement('div');
      card.className = 'game-card';
      card.setAttribute('data-id', id);
      card.setAttribute('data-cat', game.cat);

      card.innerHTML = `
        <span class="card-icon">${game.icon}</span>
        <h3 class="card-title">${game.title}</h3>
        <span class="card-badge ${game.cat}-badge">${game.cat}</span>
      `;

      card.addEventListener('click', () => this.launchGame(id));
      this.grid.appendChild(card);
    }
  }

  filterLobby(cat) {
    this.grid.querySelectorAll('.game-card').forEach(card => {
      if (cat === 'all' || card.getAttribute('data-cat') === cat) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  }

  launchGame(id) {
    this.sound.init();
    this.sound.playPop();
    const game = GAME_REGISTRY[id];
    if (!game) return;

    this.lobbyView.classList.add('hidden');
    this.gameViewport.classList.remove('game-viewport-hide');
    this.gameViewport.classList.remove('hidden');
    this.voiceBubble.classList.add('hidden');

    document.getElementById('active-game-title').innerText = `${game.icon} ${game.title}`;

    // Instantiate and start
    const services = { sound: this.sound, speech: this.speech, confetti: this.confetti };
    this.activeGame = new game.gameClass(this.activeContainer, services);
    this.activeGame.start();
  }

  exitToLobby() {
    if (this.activeGame) {
      this.activeGame.cleanup();
      this.activeGame = null;
    }
    this.sound.playReset();
    this.gameViewport.classList.add('hidden');
    this.lobbyView.classList.remove('hidden');
    this.speech.speak("Welcome back! Select another game!");
    this.showVoiceBubble("Choose a game! 🧸");
  }

  showVoiceBubble(txt) {
    this.voiceBubble.classList.remove('hidden');
    this.voiceBubble.querySelector('.bubble-text').innerText = txt;
  }
}

// Global hook
window.addEventListener('DOMContentLoaded', () => {
  window.app = new GameManager();
});
