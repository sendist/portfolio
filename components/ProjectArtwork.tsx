import type { CSSProperties } from "react";

const artwork: Record<string, { label: string; caption: string; background: string; ink: string }> = {
  "ai-rag": { label: "Context, connected.", caption: "Retrieval / evaluation", background: "#cbd3ea", ink: "#3d4e85" },
  "3d-unet": { label: "Patterns beneath the noise.", caption: "Volume / attention", background: "#d5cee4", ink: "#695188" },
  "ecommerce-microservices": { label: "Many parts. One system.", caption: "Services / events", background: "#e6cdbb", ink: "#875637" },
  "openedx-lms": { label: "Learning, together.", caption: "Teams / integration", background: "#cedbc8", ink: "#4c6b45" },
  "whatsapp-broadcast": { label: "One message. Many connections.", caption: "Compose / distribute", background: "#c5dbd4", ink: "#3c7467" },
  "face-emotion": { label: "Reading the reaction.", caption: "Expression / recognition", background: "#e7cbd2", ink: "#915068" },
  "market-basket": { label: "Finding what belongs together.", caption: "Transactions / patterns", background: "#e3dbba", ink: "#806f35" },
};

export default function ProjectArtwork({ id }: { id: string }) {
  const art = artwork[id];
  if (!art) return null;
  return (
    <div className="technical-art" style={{ "--art-background": art.background, "--art-ink": art.ink } as CSSProperties} aria-hidden="true">
      <svg viewBox="0 0 360 240" fill="none" stroke="currentColor" strokeWidth="1.6">
        {id === "ai-rag" && <g>
          {[0, 1, 2].map(index => <g key={index} transform={`translate(${46 + index * 7} ${65 - index * 7})`}><rect width="68" height="87" rx="5" fill={art.background} /><path d="M14 22h40M14 34h30M14 46h40M14 58h22" opacity=".5" /></g>)}
          <path d="M132 99h28m-6-5 6 5-6 5M215 99h28m-6-5 6 5-6 5" strokeDasharray="3 4" />
          <g transform="translate(184 100) rotate(45)"><rect x="-22" y="-22" width="44" height="44" rx="7" /><rect x="-9" y="-9" width="18" height="18" fill="currentColor" /></g>
          <rect x="253" y="66" width="66" height="68" rx="8" /><path d="m267 100 10 10 25-27" strokeWidth="3" /><path d="M269 146h34" opacity=".5" />
        </g>}
        {id === "3d-unet" && <g>
          {[0, 1, 2].map(index => <g key={index} transform={`translate(${95 + index * 19} ${76 - index * 13})`} opacity={.3 + index * .25}><path d="m0 0 68-27 68 27v65l-68 27L0 65Z" /><path d="m0 0 68 27 68-27M68 27v65" /><path d="m34-14 68 27v66m-68-65 68-27M0 33l68 27 68-27" opacity=".5" /></g>)}
          <circle cx="252" cy="88" r="25" strokeDasharray="3 5" /><circle cx="252" cy="88" r="9" fill="currentColor" /><path d="M252 52V40m36 48h12M252 124v12" />
        </g>}
        {id === "ecommerce-microservices" && <g>
          <path d="M88 80h78v54h98M88 80v54h78V80h98" strokeDasharray="4 5" />
          {[[62, 55], [146, 55], [246, 55], [62, 115], [146, 115], [246, 115]].map(([x,y],index) => <g key={index}><rect x={x} y={y} width="44" height="40" rx="6" fill={art.background} /><path d={`M${x+13} ${y+13}h18m-18 7h12`} opacity=".6" /></g>)}
          <circle cx="220" cy="134" r="5" fill="currentColor" />
        </g>}
        {id === "openedx-lms" && <g>
          <path d="M180 104 85 62m95 42 95-42m-95 42L85 147m95-43 95 43m-95-43V45m0 59v58" opacity=".5" />
          {[[85,62], [275,62], [85,147], [275,147], [180,45], [180,162]].map(([x,y],index) => <g key={index}><circle cx={x} cy={y} r="17" fill={art.background} /><circle cx={x} cy={y-4} r="4" /><path d={`M${x-7} ${y+8}q7-11 14 0`} /></g>)}
          <path d="M148 90q16-9 32 0 16-9 32 0v33q-16-9-32 0-16-9-32 0Z" fill={art.background} /><path d="M180 90v33" />
        </g>}
        {id === "whatsapp-broadcast" && <g>
          <rect x="55" y="70" width="95" height="62" rx="12" /><path d="m80 132-13 13v-16M72 88h61M72 99h45M72 110h33" />
          <path d="M159 102h40m0 0 47-40m-47 40h47m-47 0 47 40" strokeDasharray="3 4" />
          {[61, 102, 143].map(y => <g key={y}><circle cx="263" cy={y} r="15" /><path d={`m257 ${y} 4 4 8-9`} strokeWidth="2" /></g>)}
        </g>}
        {id === "face-emotion" && <g>
          <path d="M94 63V47h19m134 0h19v16M94 143v16h19m134 0h19v-16" />
          <ellipse cx="179" cy="101" rx="47" ry="52" /><path d="M152 84q8-7 16 0m21 0q8-7 16 0m-27 9-5 17h12m-25 10q19 19 38-1" />
          {[[155,85],[199,85],[177,110],[159,120],[198,120]].map(([x,y],index) => <circle key={index} cx={x} cy={y} r="3" fill="currentColor" />)}
          <path d="M279 85h23m-23 14h32m-32 14h16m-16 14h26" opacity=".5" />
        </g>}
        {id === "market-basket" && <g>
          <path d="M85 79h79l-9 59H96Zm-10-15h11l3 15m5 19h63m-58 20h54" /><circle cx="105" cy="150" r="5" /><circle cx="147" cy="150" r="5" />
          <path d="M176 106h28m-6-5 6 5-6 5" strokeDasharray="3 4" />
          <path d="M228 77 282 127m-54-50 3 59m51-9-51 9" />
          {[[228,77,16],[282,127,20],[231,136,11]].map(([x,y,r],index) => <circle key={index} cx={x} cy={y} r={r} fill={art.background} />)}
          <circle cx="228" cy="77" r="5" fill="currentColor" /><circle cx="282" cy="127" r="7" fill="currentColor" />
        </g>}
      </svg>
      <div className="technical-art-copy"><p>{art.label}</p><span>{art.caption}</span></div>
    </div>
  );
}
