export const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');

  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --obsidian: #050505;
    --naval: #000080;
    --orange: #FF8C00;
    --orange-dim: rgba(255,140,0,0.13);
    --orange-glow: rgba(255,140,0,0.35);
    --glass: rgba(255,255,255,0.04);
    --glass-border: rgba(255,255,255,0.09);
    --glass-border-active: rgba(255,140,0,0.42);
    --text-primary: #FFFFFF;
    --text-secondary: rgba(255,255,255,0.55);
    --text-tertiary: rgba(255,255,255,0.28);
    --naval-glow: rgba(0,80,255,0.15);
    --mono: 'JetBrains Mono', monospace;
    --sans: 'Space Grotesk', sans-serif;
    --grid: 24px;
    --radius-sm: 6px;
    --radius-md: 10px;
    --radius-lg: 14px;
  }

  html { background: var(--obsidian); color: var(--text-primary); font-family: var(--sans); font-size: 14px; }
  body {
    min-height: 100vh;
    background:
      radial-gradient(ellipse 80% 60% at 20% 10%, rgba(0,0,128,0.18) 0%, transparent 60%),
      radial-gradient(ellipse 60% 80% at 80% 90%, rgba(255,140,0,0.06) 0%, transparent 50%),
      radial-gradient(ellipse 100% 100% at 50% 50%, rgba(0,0,60,0.4) 0%, transparent 70%),
      var(--obsidian);
  }

  /* Scanline overlay */
  body::before {
    content: '';
    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    pointer-events: none; z-index: 9999;
    background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.025) 2px, rgba(0,0,0,0.025) 4px);
  }

  input, select, button { font-family: var(--sans); }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: rgba(255,140,0,0.3); border-radius: 2px; }

  @keyframes pulse-ring {
    0%   { transform: translate(-50%,-50%) scale(1); opacity: 0.8; }
    100% { transform: translate(-50%,-50%) scale(3); opacity: 0; }
  }
  @keyframes hotpulse {
    0%,100% { r: 8; opacity: 0.9; }
    50%      { r: 13; opacity: 0.5; }
  }
  @keyframes feed-in {
    from { opacity: 0; transform: translateX(-10px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes blink-border {
    0%,100% { border-color: rgba(255,140,0,0.15); }
    50%     { border-color: rgba(255,140,0,0.52); }
  }
  @keyframes glow-pulse {
    0%,100% { box-shadow: 0 0 10px rgba(255,140,0,0.2); }
    50%     { box-shadow: 0 0 22px rgba(255,140,0,0.5); }
  }

  .feed-item-enter { animation: feed-in 0.45s ease-out forwards; }
  .active-blink    { animation: blink-border 3s ease-in-out infinite; }
  .glow-pulse      { animation: glow-pulse 2.5s ease-in-out infinite; }
`;
