/* ===== Reset & Base ===== */
* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; }

:root {
    --bg: #0a0e1a;
    --card: #141a2e;
    --primary: #00e676;
    --secondary: #6c5ce7;
    --accent: #00d4ff;
    --text: #e8edf5;
    --muted: #8a93a8;
}

body {
    background: var(--bg);
    color: var(--text);
    overflow-x: hidden;
}

/* ===== Animated Background Blobs ===== */
.bg-blobs { position: fixed; inset: 0; z-index: -1; overflow: hidden; }
.blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
    opacity: 0.35;
    animation: float 18s infinite ease-in-out;
}
.blob1 { width: 400px; height: 400px; background: var(--primary); top: -100px; left: -100px; }
.blob2 { width: 350px; height: 350px; background: var(--secondary); bottom: -80px; right: -80px; animation-delay: -6s; }
.blob3 { width: 300px; height: 300px; background: var(--accent); top: 40%; left: 50%; animation-delay: -12s; }

@keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(60px, -40px) scale(1.1); }
    66% { transform: translate(-40px, 50px) scale(0.95); }
}

/* ===== Navbar ===== */
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 6%;
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(10, 14, 26, 0.7);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255,255,255,0.06);
}
.logo { display: flex; align-items: center; gap: 8px; font-size: 1.5rem; font-weight: 800; }
.logo-icon { font-size: 1.8rem; }
.logo-text span { background: linear-gradient(90deg, var(--primary), var(--accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

.search-box {
    display: flex;
    align-items: center;
    background: var(--card);
    border-radius: 30px;
    padding: 6px 8px 6px 20px;
    width: 38%;
    border: 1px solid rgba(255,255,255,0.08);
    transition: 0.3s;
}
.search-box:focus-within { border-color: var(--primary); box-shadow: 0 0 15px rgba(0,230,118,0.3); }
.search-box input { background: none; border: none; outline: none; color: var(--text); flex: 1; font-size: 0.95rem; }
.search-box button {
    background: linear-gradient(90deg, var(--primary), var(--accent));
    border: none; border-radius: 50%; width: 36px; height: 36px;
    cursor: pointer; font-size: 1rem; transition: 0.3s;
}
.search-box button:hover { transform: scale(1.1); }

.nav-links { display: flex; align-items: center; gap: 28px; list-style: none; }
.nav-links a { color: var(--muted); text-decoration: none; font-weight: 500; transition: 0.3s; }
.nav-links a:hover, .nav-links a.active { color: var(--primary); }
.btn-signin {
    background: linear-gradient(90deg, var(--secondary), var(--accent));
    color: #fff !important; padding: 9px 22px; border-radius: 30px;
}
.btn-signin:hover { box-shadow: 0 5px 20px rgba(108,92,231,0.5); }

.hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; }
.hamburger span { width: 26px; height: 3px; background: var(--text); border-radius: 3px; transition: 0.3s; }

/* ===== Hero ===== */
.hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 80px 6% 60px;
    gap: 40px;
    flex-wrap: wrap;
}
.hero-content { flex: 1; min-width: 320px; }
.hero-content h1 { font-size: 3.4rem; line-height: 1.15; font-weight: 800; margin-bottom: 20px; }
.gradient-text { background: linear-gradient(90deg, var(--primary), var(--accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.hero-content p { color: var(--muted); font-size: 1.15rem; max-width: 520px; margin-bottom: 32px; }

.hero-btns { display: flex; gap: 16px; margin-bottom: 45px; flex-wrap: wrap; }
.btn-primary {
    background: linear-gradient(90deg, var(--primary), var(--accent));
    color: #051b12; border: none; padding: 15px 38px; border-radius: 30px;
    font-weight: 600; font-size: 1rem; cursor: pointer; transition: 0.3s;
}
.btn-primary:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(0,230,118,0.4); }
.btn-secondary {
    background: rgba(255,255,255,0.05); color: var(--text); border: 1px solid rgba(255,255,255,0.15);
    padding: 15px 30px; border-radius: 30px; font-weight: 500; cursor: pointer; transition: 0.3s;
}
.btn-secondary:hover { background: rgba(255,255,255,0.12); }

.hero-stats { display: flex; gap: 45px; }
.stat h3 { font-size: 1.9rem; background: linear-gradient(90deg, var(--primary), var(--accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.stat p { color: var(--muted); font-size: 0.9rem; }

/* ===== Phone Mockup ===== */
.hero-phone { flex: 1; display: flex; justify-content: center; min-width: 280px; }
.phone-mockup {
    width: 260px; height: 520px;
    background: linear-gradient(145deg, #1c2440, #0d1326);
    border-radius: 40px; padding: 18px;
    border: 3px solid rgba(255,255,255,0.1);
    box-shadow: 0 25px 60px rgba(0,0,0,0.5);
    animation: floatPhone 5s ease-in-out infinite;
}
@keyframes floatPhone { 0%,100% { transform: translateY(0) rotate(-2deg); } 50% { transform: translateY(-20px) rotate(2deg); } }
.phone-screen {
    width: 100%; height: 100%;
    background: linear-gradient(160deg, #141a2e, #0a0e1a);
    border-radius: 28px; padding: 25px;
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px;
    align-content: start;
}
.screen-app {
    aspect-ratio: 1; background: rgba(255,255,255,0.06);
    border-radius: 16px; display: flex; align-items: center; justify-content: center;
    font-size: 1.6rem; transition: 0.3s;
}
.screen-app:hover { background: rgba(0,230,118,0.2); transform: scale(1.1); }

/* ===== Section Title ===== */
.section-title { text-align: center; font-size: 2.2rem; font-weight: 700; margin-bottom: 40px; }

/* ===== Categories ===== */
.categories { padding: 60px 6%; }
.category-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 20px; }
.category-card {
    background: var(--card); padding: 28px 15px; border-radius: 18px;
    text-align: center; cursor: pointer; transition: 0.3s;
    border: 1px solid rgba(255,255,255,0.05);
}
.category-card:hover { transform: translateY(-6px); border-color: var(--primary); box-shadow: 0 10px 30px rgba(0,230,118,0.15); }
.category-card .cat-icon { font-size: 2.4rem; margin-bottom: 10px; }
.category-card p { font-weight: 500; }

/* ===== Apps Grid ===== */
.apps-section { padding: 60px 6%; }
.app-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 24px; }
.app-card {
    background: var(--card); border-radius: 20px; padding: 22px;
    border: 1px solid rgba(255,255,255,0.05); transition: 0.3s;
    opacity: 0; transform: translateY(30px);
}
.app-card.show { opacity: 1; transform: translateY(0); }
.app-card:hover { transform: translateY(-8px); box-shadow: 0 15px 40px rgba(0,0,0,0.4); border-color: rgba(0,230,118,0.3); }
.app-icon {
    width: 64px; height: 64px; border-radius: 16px;
    display: flex; align-items: center; justify-content: center;
    font-size: 2rem; margin-bottom: 14px;
}
.app-card h4 { font-size: 1.1rem; margin-bottom: 4px; }
.app-card .dev { color: var(--muted); font-size: 0.82rem; margin-bottom: 12px; }
.app-meta { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; font-size: 0.85rem; color: var(--muted); }
.app-meta .rating { color: #ffd700; }
.btn-download {
    width: 100%; background: linear-gradient(90deg, var(--primary), var(--accent));
    color: #051b12; border: none; padding: 11px; border-radius: 14px;
    font-weight: 600; cursor: pointer; transition: 0.3s;
}
.btn-download:hover { filter: brightness(1.1); transform: scale(1.02); }

/* ===== Footer ===== */
.footer { background: var(--card); margin-top: 60px; padding: 55px 6% 25px; }
.footer-content { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 35px; margin-bottom: 35px; }
.footer-col h3 { margin-bottom: 14px; }
.footer-col h4 { margin-bottom: 16px; color: var(--primary); }
.footer-col p { color: var(--muted); line-height: 1.7; }
.footer-col a { display: block; color: var(--muted); text-decoration: none; margin-bottom: 10px; transition: 0.3s; }
.footer-col a:hover { color: var(--primary); }
.social { display: flex; gap: 12px; font-size: 1.4rem; }
.copyright { text-align: center; color: var(--muted); padding-top: 25px; border-top: 1px solid rgba(255,255,255,0.06); }

/* ===== Toast ===== */
.toast {
    position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%) translateY(100px);
    background: linear-gradient(90deg, var(--primary), var(--accent));
    color: #051b12; padding: 14px 28px; border-radius: 30px; font-weight: 600;
    opacity: 0; transition: 0.4s; z-index: 999;
}
.toast.show { transform: translateX(-50%) translateY(0); opacity: 1; }

/* ===== Responsive ===== */
@media (max-width: 900px) {
    .search-box { display: none; }
    .nav-links {
        position: fixed; top: 70px; right: -100%; flex-direction: column;
        background: var(--card); width: 220px; padding: 30px; border-radius: 16px;
        gap: 20px; transition: 0.4s; height: auto;
    }
    .nav-links.open { right: 20px; }
    .hamburger { display: flex; }
    .hero-content h1 { font-size: 2.4rem; }
    .hero-stats { gap: 25px; }
}