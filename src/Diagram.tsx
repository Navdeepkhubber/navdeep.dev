import { useContext, type ReactNode } from 'react';
import { ThemeContext } from './theme';

type DiagramName = 'home' | 'about' | 'security' | 'engineering' | 'contact' | 'finance' | 'procurement' | 'resume' | 'conversation' | 'homeWork';

const blue = '#0869df';
const pale = '#72a7e4';

function Label({ x, y, lines, size = 8 }: { x: number; y: number; lines: string[]; size?: number }) {
  return <text x={x} y={y} fill="#0c56af" fontFamily="Arial, Helvetica, sans-serif" fontSize={size} fontWeight="700" letterSpacing="1.6">
    {lines.map((line, index) => <tspan key={line} x={x} dy={index ? size * 1.45 : 0}>{line}</tspan>)}
  </text>;
}

function Dots({ points }: { points: [number, number, number?][] }) {
  return <g fill={blue}>{points.map(([x, y, r = 2.5], index) => <circle key={index} cx={x} cy={y} r={r}/>)}</g>;
}

function Flow({ children }: { children: ReactNode }) {
  return <g fill="none" stroke={pale} strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round">{children}</g>;
}

function DatabaseGlyph({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`} fill="none" stroke={blue} strokeWidth="1.25" strokeLinejoin="round">
    <ellipse cx="15" cy="5" rx="14" ry="5"/><path d="M1 5v29c0 3 6 6 14 6s14-3 14-6V5M1 14c0 3 6 6 14 6s14-3 14-6M1 24c0 3 6 6 14 6s14-3 14-6"/>
  </g>;
}

function CubeGlyph({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`} fill="none" stroke={blue} strokeWidth="1.15" strokeLinejoin="round">
    <path className="diagram-paper" d="M32 0 64 19v31L32 70 0 50V19Z" fill="#fff" stroke="none"/>
    <path d="M32 0 64 19 32 39 0 19Z M0 19v31l32 20 32-20V19 M32 39v31 M0 37l32 20 32-20"/>
    <circle cx="39" cy="4" r="2.5" fill={blue} stroke="none"/>
  </g>;
}

function ShieldGlyph({ x, y, scale = 1, lock = false }: { x: number; y: number; scale?: number; lock?: boolean }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`} fill="none" stroke={blue} strokeWidth="1.3" strokeLinejoin="round">
    <path d="M21 1c6 5 13 6 20 7v16c0 14-8 23-20 30C9 47 1 38 1 24V8c7-1 14-2 20-7Z"/>
    {lock && <><rect x="14" y="23" width="14" height="13" rx="1"/><path d="M17 23v-5a4 4 0 0 1 8 0v5"/><circle cx="21" cy="29" r="1" fill={blue} stroke="none"/></>}
  </g>;
}

function GlobeGlyph({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`} fill="none" stroke={blue} strokeWidth="1.2">
    <circle cx="24" cy="24" r="22"/><ellipse cx="24" cy="24" rx="10" ry="22"/><path d="M2 24h44M6 12h36M6 36h36M24 2v44"/>
  </g>;
}

function FileGlyph({ x, y, scale = 1, code = false }: { x: number; y: number; scale?: number; code?: boolean }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`} fill="none" stroke={blue} strokeWidth="1.25" strokeLinejoin="round">
    <path d="M2 1h20l9 10v38H2Z M22 1v10h9"/>
    {code ? <path d="m13 23-6 5 6 5m7-10 6 5-6 5m-3-13-3 17"/> : <path d="M8 19h17M8 25h17M8 31h14M8 37h11"/>}
  </g>;
}

function ChartGlyph({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`} fill="none" stroke={blue} strokeWidth="1.2" strokeLinejoin="round">
    <rect x="1" y="1" width="48" height="46" rx="4"/><path d="M10 36h7V24h-7zM22 36h7V17h-7zM34 36h7V10h-7z"/>
  </g>;
}

function PeopleGlyph({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`} fill="none" stroke={blue} strokeWidth="1.25" strokeLinecap="round">
    <circle cx="20" cy="9" r="5"/><circle cx="7" cy="17" r="3.4"/><circle cx="33" cy="17" r="3.4"/><path d="M11 35v-8c0-6 4-10 9-10s9 4 9 10v8M1 35v-8c0-4 2-6 6-6M39 35v-8c0-4-2-6-6-6"/>
  </g>;
}

function BrowserSearchGlyph({ x, y }: { x: number; y: number }) {
  return <g transform={`translate(${x} ${y})`} fill="none" stroke={blue} strokeWidth="1.25" strokeLinejoin="round">
    <rect x="0" y="0" width="58" height="52" rx="3"/><path d="M0 10h58"/><g fill={blue} stroke="none"><circle cx="6" cy="5" r="1.4"/><circle cx="11" cy="5" r="1.4"/><circle cx="16" cy="5" r="1.4"/></g><circle cx="29" cy="30" r="11"/><path d="m37 38 10 10"/>
  </g>;
}

function ReportGlyph({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`} fill="none" stroke={blue} strokeWidth="1.25" strokeLinejoin="round">
    <path d="M3 2h69v99H3Z"/><path d="M15 17h49M15 29h34M15 41h27M15 53h45M15 65h28M15 77h19" stroke={pale}/><circle cx="58" cy="61" r="18"/><path d="m72 75 14 14"/>
  </g>;
}

function EnvelopeGlyph({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`} fill="none" stroke={blue} strokeWidth="1.25" strokeLinejoin="round">
    <rect x="1" y="1" width="94" height="63" rx="4"/><path d="m2 4 46 30L94 4M2 62l31-32M94 62 63 30"/>
  </g>;
}

function CloudGlyph({ x, y }: { x: number; y: number }) {
  return <g transform={`translate(${x} ${y})`} fill="none" stroke={blue} strokeWidth="1.2"><path d="M10 30C-2 30-1 14 9 13c2-11 19-14 24-3 13-1 16 18 3 20Z"/></g>;
}

function NetworkCube({ about = false }: { about?: boolean }) {
  const ox = about ? 0 : -3;
  const oy = about ? 0 : -20;
  return <g transform={`translate(${ox} ${oy})`}>
    <Flow>
      <path d="M11 60v55q0 23 24 23h95q34 0 34 39l22 18"/>
      <path d="M72 69h48q45 0 86 77"/>
      <path d="M399 71v79q0 26-27 26H245"/>
      <path d="M344 56q-35-5-67 39l-40 55"/>
      <path d="M22 266v-32q0-26 26-26h161"/>
      <path d="M112 293q89 5 112-94"/>
      <path d="M236 196v75q0 49 41 49h76"/>
      <path d="M277 212h47q42 0 42 47"/>
      <path d="M224 232q-12 100-57 111" strokeDasharray="1 5" strokeLinecap="round"/>
      <path d="M257 184q36-20 19-91" strokeDasharray="1 5"/>
      <path d="M130 63q54 4 38 105" strokeDasharray="1 5"/>
      <path d="M34 158q100-55 114 95t135 103" strokeDasharray="1 5"/>
      <path d="M312 144q91-37 95 82t-139 115" strokeDasharray="1 5"/>
      <path d="M181 4q-71 58 76 104h64" strokeDasharray="1 5"/>
      <path d="M279 82v150"/>
    </Flow>
    <Dots points={[[93,52,3],[63,138,4],[188,207,4],[273,87,4],[279,211,4],[326,108,4],[363,258,4],[112,293,4],[321,175,3]]}/>
    <g fill={blue}><rect x="370" y="173" width="5" height="5"/><rect x="285" y="318" width="6" height="6"/><rect x="151" y="324" width="5" height="5"/></g>
    <DatabaseGlyph x={48} y={65}/><CubeGlyph x={about ? 174 : 163} y={131} scale={1.17}/><ShieldGlyph x={about ? 290 : 281} y={16} scale={1.05} lock/><GlobeGlyph x={about ? 301 : 280} y={271} scale={0.96}/><FileGlyph x={26} y={260} code/>
    <Label x={12} y={28} lines={about ? ['COMPLEX', 'SYSTEMS'] : ['DATA', 'PIPELINES', 'AT SCALE']}/>
    <Label x={about ? 348 : 329} y={28} lines={about ? ['MORE', 'RELIABLE', 'OUTCOMES'] : ['SAFER', 'REAL-WORLD', 'SYSTEMS']}/>
    <Label x={about ? 12 : 24} y={333} lines={about ? ['IDEAS', 'INTO IMPACT'] : ['RESEARCH', 'INSIGHTS']}/>
    <Label x={about ? 355 : 331} y={306} lines={about ? ['PEOPLE', 'SYSTEMS', 'TRUST'] : ['PEOPLE', 'SYSTEMS', 'IMPACT']} size={7}/>
  </g>;
}

function SecurityArt() { return <>
  <Flow>
    <path d="M39 105v13q0 29 31 29h33q32 0 35 30"/>
    <path d="M74 50h30q35 0 43 44"/>
    <path d="M157 111q-20-2-20 21"/>
    <path d="M246 67h52q36 0 36-38"/>
    <path d="M222 214v31q0 28 40 28"/>
    <path d="M270 178h48q37 0 37 37"/>
    <path d="M315 127h33q37 0 37-46V49"/>
    <path d="M108 242h-37q-28 0-28 27"/>
    <path d="M169 217q4 75-52 84" strokeDasharray="1 5"/>
    <path d="M266 231q79-116 139-37t-50 111" strokeDasharray="1 5"/>
    <path d="M119 41q66 17 72 81" strokeDasharray="1 5"/>
    <path d="M143 34q68-55 114 37" strokeDasharray="1 5"/>
    <path d="M14 204q-15-67 96-59" strokeDasharray="1 5"/>
    <path d="M114 277q74 78 135-7" strokeDasharray="1 5"/>
  </Flow>
  <Dots points={[[139,40,2],[101,84,3],[139,177,3],[237,54,3],[346,119,3],[128,285,2],[262,273,2],[318,217,2]]}/>
  <g fill={blue}><rect x="94" y="82" width="5" height="5"/><rect x="83" y="239" width="5" height="5"/><rect x="259" y="271" width="5" height="5"/></g>
  <BrowserSearchGlyph x={13} y={39}/><ReportGlyph x={165} y={102} scale={1.05}/><ShieldGlyph x={280} y={11} scale={1.02}/><ChartGlyph x={5} y={213} scale={1.08}/><PeopleGlyph x={312} y={221} scale={0.8}/>
  <Label x={7} y={16} lines={['FIND','VULNERABILITIES']}/><Label x={341} y={23} lines={['MORE SECURE','APPLICATIONS']}/><Label x={7} y={286} lines={['ANALYZE','REAL-WORLD','IMPACT']}/><Label x={345} y={288} lines={['RESPONSIBLE','DISCLOSURE']} size={7}/>
</>; }

function EngineeringArt() { return <>
  <Flow>
    <path d="M69 64h28q46 0 67 54"/><path d="M69 119h47q43 0 50 22"/><path d="M69 183h46q33 0 51-25"/>
    <path d="M225 111h33q31 0 37-42t40-32"/><path d="M226 133h90"/><path d="M226 151h29q39 0 43 40h30"/>
    <path d="M150 13q48-29 59 55" strokeDasharray="1 5"/><path d="M207 67q20-56 57-60" strokeDasharray="1 5"/>
    <path d="M217 170q-5 85 96 79" strokeDasharray="1 5"/><path d="M275 75q29-53 74-8" strokeDasharray="1 5"/>
    <path d="M101 211q56-4 72-49"/><path d="M319 213q-33-6-41-56" strokeDasharray="1 5"/>
  </Flow>
  <Dots points={[[112,40,2.5],[148,105,2.5],[97,119,2.5],[103,214,2.5],[264,47,2.5],[302,130,2.5],[320,187,2.5],[319,98,2.5]]}/>
  <DatabaseGlyph x={26} y={46}/><FileGlyph x={26} y={105} scale={0.86}/><CloudGlyph x={19} y={156}/><CubeGlyph x={164} y={99}/><ChartGlyph x={334} y={45} scale={0.72}/><PeopleGlyph x={337} y={111} scale={0.84}/><FileGlyph x={338} y={163} scale={0.86}/>
  <Label x={5} y={15} lines={['DIVERSE','DATA SOURCES']}/><Label x={301} y={15} lines={['TRUSTED','DATA PRODUCTS']}/><Label x={5} y={221} lines={['INGEST','TRANSFORM','ORCHESTRATE']}/><Label x={327} y={234} lines={['BETTER','DECISIONS']}/>
</>; }

function ContactArt() { return <>
  <Flow>
    <path d="M20 88v73q0 47 43 47h69q39 0 43 28"/><path d="M66 109h15q84 0 103 82"/>
    <path d="M109 167q-2 96 47 117" strokeDasharray="1 5"/><path d="M15 280q-12-77 93-75" strokeDasharray="1 5"/>
    <path d="M117 324q-64 1-64 42"/><path d="M208 263v34q0 70-86 70" strokeDasharray="1 5"/>
    <path d="M238 209V130q0-50 54-50h51"/><path d="M284 127v80"/><path d="M302 221h23q55 0 55-70V111"/>
    <path d="M232 257q9 27 67 27h15q43 0 43 36"/><path d="M222 284q4 52 64 55h31"/>
    <path d="M159 27q-60 114 86 116h80" strokeDasharray="1 5"/><path d="M416 54q19 172-100 169" strokeDasharray="1 5"/>
    <path d="M242 244q-88 16-99-92" strokeDasharray="1 5"/><path d="M284 253q110-12 93 115" strokeDasharray="1 5"/>
  </Flow>
  <Dots points={[[67,109,5],[54,172,3],[287,80,4],[243,171,3],[286,221,4],[325,316,4],[317,340,5],[416,45,3]]}/>
  <g fill="none" stroke={blue} strokeWidth="1.2"><rect x="50" y="355" width="7" height="7"/><rect x="88" y="253" width="5" height="5"/><circle cx="241" cy="170" r="3.5"/></g>
  <g fill={blue}><rect x="109" y="370" width="6" height="6"/><rect x="321" y="139" width="6" height="6"/></g>
  <EnvelopeGlyph x={165} y={191}/><FileGlyph x={329} y={43} scale={2}/>
  <Label x={6} y={17} lines={['IDEAS','DISCUSSIONS','REAL-WORLD','IMPACT']} size={10}/><Label x={335} y={354} lines={['BETTER','SYSTEMS','TOGETHER']} size={9}/>
</>; }

function FinanceArt() { return <>
  <Flow>
    {[0,1,2].map(i=><path key={i} d={`M48 ${68+i*35}h30q30 0 42 ${34-i*17}h31`}/>)}
    <path d="M216 100h40q25 0 34-22t31-22"/><path d="M216 112h103"/><path d="M216 125h35q33 0 42 28h30"/>
    <path d="M49 60q45-66 95-18" strokeDasharray="1 5"/><path d="M88 164q50-75 75-29" strokeDasharray="1 5"/>
    <path d="M215 74q45-52 86-24" strokeDasharray="1 5"/><path d="M187 143q29 50 79 21" strokeDasharray="1 5"/>
  </Flow>
  <Dots points={[[63,68,2],[125,86,2.5],[125,111,2.5],[125,137,2.5],[264,18,2],[320,55,2.5],[323,136,2.5],[91,163,2]]}/>
  <DatabaseGlyph x={12} y={61} scale={0.65}/><DatabaseGlyph x={12} y={96} scale={0.65}/><DatabaseGlyph x={12} y={131} scale={0.65}/>
  <g fill="none" stroke={blue} strokeWidth="1.25"><rect x="155" y="69" width="61" height="62" rx="5"/><circle cx="185" cy="99" r="11"/><circle cx="185" cy="99" r="5"/><path d="M185 84v-6m0 42v-6m-15-15h-6m42 0h-6m-26-11-5-5m32 32-5-5m5-22 5-5m-32 32 5-5"/></g>
  <ChartGlyph x={336} y={65} scale={1.18}/>
  <Label x={4} y={21} lines={['GLOBAL','SOURCES']} size={7}/><Label x={155} y={27} lines={['TRANSFORM','& RECONCILE']} size={7}/><Label x={341} y={27} lines={['TRUSTED','REPORTING']} size={7}/>
</>; }

function ProcurementArt() { return <>
  <Flow>
    <path d="M58 76h35M149 76h29M248 76h38M94 76l-5-4m5 4-5 4M179 76l-5-4m5 4-5 4M287 76l-5-4m5 4-5 4" stroke={blue}/>
    <path d="M60 47q54-80 104-3" strokeDasharray="1 5"/><path d="M177 45q48-58 101 7" strokeDasharray="1 5"/><path d="M180 121q73 77 121-28" strokeDasharray="1 5"/><path d="M299 49q50-79 100 0" strokeDasharray="1 5"/>
  </Flow>
  <FileGlyph x={18} y={58} scale={0.76}/><g fill="none" stroke={blue} strokeWidth="1.3"><rect x="117" y="58" width="36" height="36" rx="4"/><path d="M123 69h21m-10-5v6m-6 1q2 8 11 12m1-11q-2 7-11 12m10 1 5-11 5 11m-8-4h6"/><circle cx="242" cy="76" r="18"/><path d="m233 75 6 6 12-15"/></g><DatabaseGlyph x={341} y={58} scale={1.05}/>
  <Dots points={[[163,45,2.5],[236,29,2.5],[190,139,2.5]]}/>
  <Label x={2} y={115} lines={['DOCUMENTS','(MULTILINGUAL)']} size={7}/><Label x={105} y={115} lines={['TRANSLATE','& CLASSIFY']} size={7}/><Label x={221} y={115} lines={['VALIDATE','& ENRICH']} size={7}/><Label x={336} y={115} lines={['DEPLOY','& OPERATE']} size={7}/>
</>; }

function ResumeArt() { return <>
  <Flow>
    <path d="M27 76v31q0 36 42 36h75"/><path d="M76 33h43q21 0 31 20"/><path d="M105 103h65"/><path d="M143 74v104q0 45 54 45"/>
    <path d="M278 96h29q38 0 38 55v32"/><path d="M278 145h77q30 0 30-45V43"/>
    <path d="M307 17q57-23 78 39v79" strokeDasharray="1 5"/><path d="M125 215q-94-85-93 43" strokeDasharray="1 5"/>
    <path d="M195 201q15 85 98 32" strokeDasharray="1 5"/>
  </Flow>
  <Dots points={[[76,103,3],[143,143,4],[198,211,4],[385,43,5],[343,151,3]]}/>
  <g fill="none" stroke={blue} strokeWidth="1.3"><rect x="102" y="221" width="8" height="8"/><rect x="134" y="30" width="5" height="5"/><rect x="305" y="183" width="6" height="6"/></g>
  <g transform="translate(172 65)" fill="none" stroke={blue} strokeWidth="1.3" strokeLinejoin="round"><path d="M3 1h83l23 23v98H3Z M86 1v23h23"/><rect x="19" y="21" width="18" height="20"/><path d="M49 22h43M49 32h35M49 42h26M19 58h75M19 72h75M19 86h75M19 100h50"/></g>
  <Label x={1} y={19} lines={['RESEARCH','ENGINEERING','PRACTICE']} size={10}/><Label x={338} y={202} lines={['CURIOSITY','LEADS TO','PROGRESS']} size={10}/>
</>; }

function ConversationArt() { return <>
  <Flow><path d="M12 42v47q0 13 14 13h62"/><path d="M100 45h44"/><path d="M42 101v17q0 8 8 8h27"/></Flow>
  <g fill="none" stroke={blue} strokeWidth="1"><path d="M24 20h56q7 0 7 7v31q0 7-7 7H47L35 77V65H24q-7 0-7-7V27q0-7 7-7Z"/><path d="M37 38h40M37 47h24"/><path d="M111 63h18q6 0 6 6v17q0 6-6 6h-6l-9 8v-8h-3q-6 0-6-6V69q0-6 6-6Z"/></g>
  <Dots points={[[139,42,2],[58,102,2]]}/>
</>; }

function HomeWorkArt() { return <>
  <Flow><path d="M14 73h56" strokeDasharray="1 5"/><path d="M137 84h28q15 0 22-22t22-7l14 17h98"/><path d="M142 102h40q30 0 43 37h37"/><path d="M321 73q48 27 7 81" strokeDasharray="1 5"/><path d="M145 22q50-17 81 30h74" strokeDasharray="1 5"/></Flow>
  <Dots points={[[11,72,2],[146,21,2],[298,31,2],[314,139,3],[338,154,2]]}/>
  <FileGlyph x={63} y={39} scale={1.55}/><ChartGlyph x={239} y={88} scale={1.2}/>
  <Label x={375} y={93} lines={['BETTER','SYSTEMS','THROUGH','CURIOSITY']} size={8}/>
</>; }

const sizes: Record<DiagramName, [number, number]> = {
  home: [401, 318], about: [412, 365], security: [418, 323], engineering: [395, 262], contact: [428, 385],
  finance: [416, 174], procurement: [406, 162], resume: [424, 270], conversation: [165, 118], homeWork: [428, 170],
};

const suppliedSvg: Partial<Record<DiagramName, string>> = {
  about: '/diagrams/about-diagram.svg',
  security: '/diagrams/security_copy.svg',
  engineering: '/diagrams/data_engineering.svg',
  contact: '/diagrams/lets_connect.svg',
  finance: '/diagrams/finance_analytics.svg',
  procurement: '/diagrams/ai_powered_procurement.svg',
  resume: '/diagrams/explore_resume.svg',
  conversation: '/diagrams/working_together.svg',
};

export function Diagram({ name }: { name: DiagramName }) {
  const theme = useContext(ThemeContext);
  const svg = suppliedSvg[name];
  if (svg) return <img className="reference-art diagram" src={theme === 'dark' ? svg.replace('/diagrams/', '/diagrams/dark/') : svg} alt={`${name} flow diagram`} />;
  const [width, height] = sizes[name];
  return <svg className="reference-art diagram" viewBox={`0 0 ${width} ${height}`} role="img" aria-label={`${name} flow diagram`} focusable="false" xmlns="http://www.w3.org/2000/svg">
    {name === 'home' && <NetworkCube/>}
    {name === 'about' && <NetworkCube about/>}
    {name === 'security' && <SecurityArt/>}
    {name === 'engineering' && <EngineeringArt/>}
    {name === 'contact' && <ContactArt/>}
    {name === 'finance' && <FinanceArt/>}
    {name === 'procurement' && <ProcurementArt/>}
    {name === 'resume' && <ResumeArt/>}
    {name === 'conversation' && <ConversationArt/>}
    {name === 'homeWork' && <HomeWorkArt/>}
  </svg>;
}
