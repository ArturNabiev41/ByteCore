// icons.js
// Every product needs a picture. Instead of pulling in copyrighted retailer
// photography, ByteCore renders each product as a schematic component glyph —
// consistent with the "spec sheet" visual language of the store, resolution
// independent, and free of any external image dependency.

const GLYPHS = {
  cpu: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect class="glyph-stroke" x="30" y="30" width="40" height="40" rx="2"/>
    <rect class="glyph-stroke-soft" x="40" y="40" width="20" height="20" rx="1"/>
    ${[14,24,34,44,54,64,74].map(x=>`<line class="glyph-stroke-soft" x1="${x}" y1="30" x2="${x}" y2="18"/><line class="glyph-stroke-soft" x1="${x}" y1="70" x2="${x}" y2="82"/>`).join('')}
    ${[14,24,34,44,54,64,74].map(y=>`<line class="glyph-stroke-soft" x1="30" y1="${y}" x2="18" y2="${y}"/><line class="glyph-stroke-soft" x1="70" y1="${y}" x2="82" y2="${y}"/>`).join('')}
  </svg>`,

  gpu: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg">
    <rect class="glyph-stroke" x="10" y="20" width="100" height="46" rx="3"/>
    <circle class="glyph-stroke-soft" cx="34" cy="43" r="13"/>
    <circle class="glyph-stroke-soft" cx="70" cy="43" r="13"/>
    <circle class="glyph-fill" cx="34" cy="43" r="2.5"/>
    <circle class="glyph-fill" cx="70" cy="43" r="2.5"/>
    <rect class="glyph-stroke-soft" x="12" y="66" width="16" height="8"/>
    <rect class="glyph-stroke-soft" x="4" y="30" width="6" height="20"/>
  </svg>`,

  motherboard: `<svg viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg">
    <rect class="glyph-stroke" x="10" y="10" width="90" height="90" rx="2"/>
    <rect class="glyph-stroke-soft" x="22" y="20" width="26" height="26"/>
    <rect class="glyph-stroke-soft" x="60" y="20" width="10" height="34"/>
    <rect class="glyph-stroke-soft" x="74" y="20" width="10" height="34"/>
    ${[70,78,86,94].map(y=>`<line class="glyph-stroke-soft" x1="18" y1="${y}" x2="88" y2="${y}"/>`).join('')}
    <circle class="glyph-fill" cx="16" cy="16" r="2"/>
    <circle class="glyph-fill" cx="94" cy="16" r="2"/>
    <circle class="glyph-fill" cx="16" cy="94" r="2"/>
    <circle class="glyph-fill" cx="94" cy="94" r="2"/>
  </svg>`,

  ram: `<svg viewBox="0 0 110 70" xmlns="http://www.w3.org/2000/svg">
    <rect class="glyph-stroke" x="10" y="14" width="90" height="34" rx="2"/>
    ${[18,26,34,42,50,58,66,74,82,90].map(x=>`<line class="glyph-stroke-soft" x1="${x}" y1="48" x2="${x}" y2="58"/>`).join('')}
    <rect class="glyph-stroke-soft" x="24" y="20" width="16" height="20"/>
    <rect class="glyph-stroke-soft" x="46" y="20" width="16" height="20"/>
    <rect class="glyph-stroke-soft" x="68" y="20" width="16" height="20"/>
  </svg>`,

  storage: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect class="glyph-stroke" x="16" y="16" width="68" height="68" rx="3"/>
    <circle class="glyph-stroke-soft" cx="50" cy="50" r="20"/>
    <circle class="glyph-fill" cx="50" cy="50" r="4"/>
    <line class="glyph-stroke-soft" x1="24" y1="26" x2="24" y2="34"/>
    <line class="glyph-stroke-soft" x1="32" y1="26" x2="32" y2="34"/>
  </svg>`,

  psu: `<svg viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg">
    <rect class="glyph-stroke" x="14" y="10" width="72" height="70" rx="3"/>
    <circle class="glyph-stroke-soft" cx="50" cy="38" r="18"/>
    ${[0,45,90,135,180,225,270,315].map(a=>{const r1=8,r2=15,rad=a*Math.PI/180;const x1=50+r1*Math.cos(rad),y1=38+r1*Math.sin(rad),x2=50+r2*Math.cos(rad),y2=38+r2*Math.sin(rad);return `<line class="glyph-stroke-soft" x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}"/>`;}).join('')}
    <line class="glyph-stroke-soft" x1="24" y1="66" x2="76" y2="66"/>
    <line class="glyph-stroke-soft" x1="24" y1="72" x2="76" y2="72"/>
  </svg>`,

  case: `<svg viewBox="0 0 70 110" xmlns="http://www.w3.org/2000/svg">
    <rect class="glyph-stroke" x="10" y="8" width="50" height="94" rx="3"/>
    <circle class="glyph-stroke-soft" cx="35" cy="30" r="10"/>
    <circle class="glyph-stroke-soft" cx="35" cy="58" r="10"/>
    <line class="glyph-stroke-soft" x1="18" y1="84" x2="52" y2="84"/>
    <line class="glyph-stroke-soft" x1="18" y1="90" x2="52" y2="90"/>
  </svg>`,

  cooling: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle class="glyph-stroke" cx="50" cy="50" r="34"/>
    <circle class="glyph-stroke-soft" cx="50" cy="50" r="7"/>
    ${[0,60,120,180,240,300].map(a=>{const rad=a*Math.PI/180;const x=50+24*Math.cos(rad),y=50+24*Math.sin(rad);return `<path class="glyph-stroke-soft" d="M50,50 Q${(50+x)/2+8*Math.sin(rad)},${(50+y)/2-8*Math.cos(rad)} ${x.toFixed(1)},${y.toFixed(1)}"/>`}).join('')}
  </svg>`,

  monitor: `<svg viewBox="0 0 110 90" xmlns="http://www.w3.org/2000/svg">
    <rect class="glyph-stroke" x="8" y="8" width="94" height="58" rx="2"/>
    <line class="glyph-stroke-soft" x1="55" y1="66" x2="55" y2="78"/>
    <line class="glyph-stroke-soft" x1="34" y1="82" x2="76" y2="82"/>
    <line class="glyph-stroke-soft" x1="18" y1="20" x2="92" y2="20"/>
    <line class="glyph-stroke-soft" x1="18" y1="30" x2="70" y2="30"/>
  </svg>`,

  peripheral: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect class="glyph-stroke" x="20" y="20" width="60" height="60" rx="14"/>
    <line class="glyph-stroke-soft" x1="50" y1="20" x2="50" y2="46"/>
    <circle class="glyph-fill" cx="50" cy="38" r="2.4"/>
  </svg>`,
};

function categoryGlyph(category){
  return GLYPHS[category] || GLYPHS.peripheral;
}

export { GLYPHS, categoryGlyph };
