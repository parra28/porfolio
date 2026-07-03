const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "dir": "A · Editorial",
  "mode": "Claro",
  "accent": "#31577d",
  "fonts": "Space Grotesk + JetBrains Mono",
  "density": 1
}/*EDITMODE-END*/;

const ACCENTS = {
  "#31577d": { c: 0.085, h: 250 },
  "#4a6d8c": { c: 0.06,  h: 240 },
  "#2f6b66": { c: 0.075, h: 190 },
  "#3f7154": { c: 0.075, h: 155 },
  "#8c4a42": { c: 0.085, h: 30 },
  "#a06835": { c: 0.09,  h: 60 },
  "#5c5470": { c: 0.05,  h: 295 },
  "#c9722e": { c: 0.14,  h: 55, l: 0.66 }
};

const FONT_SETS = {
  "Space Grotesk + JetBrains Mono": {
    display: '"Space Grotesk", system-ui, sans-serif',
    mono: '"JetBrains Mono", ui-monospace, monospace',
    body: '"Hanken Grotesk", system-ui, sans-serif'
  },
  "Archivo + IBM Plex Mono": {
    display: '"Archivo", system-ui, sans-serif',
    mono: '"IBM Plex Mono", ui-monospace, monospace',
    body: '"Archivo", system-ui, sans-serif'
  },
  "Sora + Fira Code": {
    display: '"Sora", system-ui, sans-serif',
    mono: '"Fira Code", ui-monospace, monospace',
    body: '"Hanken Grotesk", system-ui, sans-serif'
  }
};

function applyTweaks(t) {
  const root = document.documentElement;
  root.setAttribute("data-dir", t.dir.startsWith("B") ? "b" : "a");
  root.setAttribute("data-mode", t.mode === "Oscuro" ? "dark" : "light");
  const a = ACCENTS[t.accent] || ACCENTS["#31577d"];
  const dark = t.mode === "Oscuro";
  const baseL = a.l != null ? a.l : 0.52;
  const L = dark ? Math.min(baseL + 0.2, 0.74) : baseL;
  root.style.setProperty("--accent", `oklch(${L} ${a.c} ${a.h})`);
  root.style.setProperty("--accent-deep", `oklch(${Math.max(L - 0.08, 0.3)} ${a.c} ${a.h})`);
  root.style.setProperty("--accent-glow", `oklch(${L} ${a.c} ${a.h} / 0.12)`);
  const f = FONT_SETS[t.fonts] || FONT_SETS["Space Grotesk + JetBrains Mono"];
  root.style.setProperty("--font-display", f.display);
  root.style.setProperty("--font-mono", f.mono);
  root.style.setProperty("--font-body", f.body);
  root.style.setProperty("--density", String(t.density));
}

function PorfolioTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(() => { applyTweaks(t); }, [t]);
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Dirección" />
      <TweakRadio label="Estilo" value={t.dir}
        options={["A · Editorial", "B · Técnico"]}
        onChange={(v) => setTweak("dir", v)} />
      <TweakRadio label="Modo" value={t.mode}
        options={["Claro", "Oscuro"]}
        onChange={(v) => setTweak("mode", v)} />
      <TweakSection label="Estética" />
      <TweakColor label="Acento" value={t.accent}
        options={["#31577d", "#4a6d8c", "#2f6b66", "#3f7154", "#8c4a42", "#a06835", "#5c5470", "#c9722e"]}
        onChange={(v) => setTweak("accent", v)} />
      <TweakSelect label="Tipografía" value={t.fonts}
        options={Object.keys(FONT_SETS)}
        onChange={(v) => setTweak("fonts", v)} />
      <TweakSlider label="Densidad" value={t.density} min={0.7} max={1.3} step={0.05}
        onChange={(v) => setTweak("density", v)} />
    </TweaksPanel>
  );
}

const __twRoot = document.createElement("div");
document.body.appendChild(__twRoot);
ReactDOM.createRoot(__twRoot).render(<PorfolioTweaks />);
