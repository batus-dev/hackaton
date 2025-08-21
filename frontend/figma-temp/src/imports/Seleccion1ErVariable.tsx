import svgPaths from "./svg-exdm6gu50m";
import imgThumbnail from "figma:asset/d4f1b4c01715bfdf8f2621921f339da82cdeeb98.png";
import imgThumbnail1 from "figma:asset/1017cecb6c455d6425494dba689304a082771899.png";

function BackgroundElements() {
  return (
    <div className="absolute h-[757.976px] top-[535px] translate-x-[-50%] w-[1234.55px]" data-name="Background Elements" style={{ left: "calc(50% - 5.727px)" }}>
      <div className="absolute inset-[-81.45%_-36.57%_-99.26%_-60.94%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2439 2129">
          <g id="Background Elements">
            <g filter="url(#filter0_f_1_12992)" id="Ellipse 9">
              <circle cx="1822.77" cy="782.773" fill="var(--fill-0, #61FAD1)" r="164.773" />
            </g>
            <g filter="url(#filter1_f_1_12992)" id="Ellipse 10">
              <circle cx="1064.49" cy="1064.49" fill="var(--fill-0, #21DBAA)" r="311.488" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1232.41" id="filter0_f_1_12992" width="1232.41" x="1206.57" y="166.568">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_12992" stdDeviation="225.716" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2127.75" id="filter1_f_1_12992" width="2127.75" x="0.613342" y="0.613342">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_12992" stdDeviation="376.193" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="relative size-full" data-name="Icon Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
        <g id="Icon Container">
          <path d={svgPaths.p109d2380} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p38c27300} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.pa7f000} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Icon Container">
      <div className="[grid-area:1_/_1] flex h-[29.859px] items-center justify-center ml-0 mt-0 relative w-[32.05px]">
        <div className="flex-none h-[25.107px] rotate-[169.26deg] scale-y-[-100%] w-[27.859px]">
          <IconContainer />
        </div>
      </div>
    </div>
  );
}

function CollectionContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-6 items-center justify-start leading-[0] translate-x-[-50%] translate-y-[-50%] w-[409px]" data-name="Collection Container" style={{ top: "calc(50% - 473.57px)", left: "calc(50% + 16.5px)" }}>
      <IconContainer1 />
      <div className="font-['Roboto:Medium',_sans-serif] font-medium min-w-full relative shrink-0 text-[#ffffff] text-[24px] text-center" style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Creá una colección a medida</p>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute h-8 left-9 top-[22px] w-[89px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89 32">
        <g id="Logo">
          <path clipRule="evenodd" d={svgPaths.pd330180} fill="var(--fill-0, #21DBAA)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons">
          <path clipRule="evenodd" d={svgPaths.p3122e700} fill="var(--fill-0, white)" fillOpacity="0.5" fillRule="evenodd" id="Vector" />
          <g id="Vector_2"></g>
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute box-border content-stretch flex gap-2.5 h-9 items-center justify-center p-[10px] rounded-lg top-5 translate-x-[-50%]" data-name="Button" style={{ left: "calc(50% + 594.5px)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-lg" />
      <Icons />
      <div className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">Volver a empezar</p>
      </div>
    </div>
  );
}

function Pill() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] box-border content-stretch flex gap-2.5 items-center justify-center p-[10px] relative rounded-lg shrink-0" data-name="Pill">
      <div aria-hidden="true" className="absolute border border-[#02503a] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[20px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">💥</p>
      </div>
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Una buena de acción</p>
      </div>
    </div>
  );
}

function Pill1() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] box-border content-stretch flex gap-2.5 items-center justify-center p-[10px] relative rounded-lg shrink-0" data-name="Pill">
      <div aria-hidden="true" className="absolute border border-[#21dbaa] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[20px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">😂</p>
      </div>
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Tengo ganas de reirme un rato</p>
      </div>
    </div>
  );
}

function Pill2() {
  return (
    <div className="bg-[rgba(48,48,48,0.4)] box-border content-stretch flex gap-2.5 items-center justify-center p-[10px] relative rounded-lg shrink-0" data-name="Pill">
      <div aria-hidden="true" className="absolute border border-[#19a480] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[20px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">🇦🇷</p>
      </div>
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Orgullo nacional</p>
      </div>
    </div>
  );
}

function OptionsRow() {
  return (
    <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0" data-name="Options Row">
      <Pill />
      <Pill1 />
      <Pill2 />
    </div>
  );
}

function Pill3() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] box-border content-stretch flex gap-2.5 items-center justify-center p-[10px] relative rounded-lg shrink-0" data-name="Pill">
      <div aria-hidden="true" className="absolute border border-[#02503a] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[20px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">🎬</p>
      </div>
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Volver al videoclub</p>
      </div>
    </div>
  );
}

function Pill4() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] box-border content-stretch flex gap-2.5 items-center justify-center p-[10px] relative rounded-lg shrink-0" data-name="Pill">
      <div aria-hidden="true" className="absolute border border-[#02503a] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[20px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">🧸</p>
      </div>
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Para ver algo en familia</p>
      </div>
    </div>
  );
}

function Pill5() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] box-border content-stretch flex gap-2.5 h-10 items-center justify-center p-[10px] relative rounded-lg shrink-0" data-name="Pill">
      <div aria-hidden="true" className="absolute border border-[#02503a] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[20px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">🥹️</p>
      </div>
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Necesito un buen drama</p>
      </div>
    </div>
  );
}

function OptionsRow1() {
  return (
    <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0" data-name="Options Row">
      <Pill3 />
      <Pill4 />
      <Pill5 />
    </div>
  );
}

function Pill6() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] box-border content-stretch flex gap-2.5 h-10 items-center justify-center p-[10px] relative rounded-lg shrink-0" data-name="Pill">
      <div aria-hidden="true" className="absolute border border-[#02503a] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[20px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">😨️</p>
      </div>
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Terror del bueno</p>
      </div>
    </div>
  );
}

function Pill7() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] box-border content-stretch flex gap-2.5 h-10 items-center justify-center p-[10px] relative rounded-lg shrink-0" data-name="Pill">
      <div aria-hidden="true" className="absolute border border-[#02503a] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[20px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">🤯️</p>
      </div>
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Basado en hechos reales</p>
      </div>
    </div>
  );
}

function Pill8() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] box-border content-stretch flex gap-2.5 h-10 items-center justify-center p-[10px] relative rounded-lg shrink-0" data-name="Pill">
      <div aria-hidden="true" className="absolute border border-[#02503a] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[20px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">🧐️</p>
      </div>
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Un poco de misterio y suspenso</p>
      </div>
    </div>
  );
}

function OptionsRow2() {
  return (
    <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0 w-full" data-name="Options Row">
      <Pill6 />
      <Pill7 />
      <Pill8 />
    </div>
  );
}

function Pill9() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] box-border content-stretch flex gap-2.5 items-center justify-center p-[10px] relative rounded-lg shrink-0" data-name="Pill">
      <div aria-hidden="true" className="absolute border border-[#02503a] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[20px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">😍</p>
      </div>
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Historias de amor</p>
      </div>
    </div>
  );
}

function Pill10() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] box-border content-stretch flex gap-2.5 items-center justify-center p-[10px] relative rounded-lg shrink-0" data-name="Pill">
      <div aria-hidden="true" className="absolute border border-[#02503a] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[20px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">🎙️</p>
      </div>
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Quiero musicalizar mi día</p>
      </div>
    </div>
  );
}

function Pill11() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] box-border content-stretch flex gap-2.5 items-center justify-center p-[10px] relative rounded-lg shrink-0" data-name="Pill">
      <div aria-hidden="true" className="absolute border border-[#02503a] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[20px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">🕵️</p>
      </div>
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Quiero ver un policial atrapante</p>
      </div>
    </div>
  );
}

function OptionsRow3() {
  return (
    <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0 w-full" data-name="Options Row">
      <Pill9 />
      <Pill10 />
      <Pill11 />
    </div>
  );
}

function Pill12() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] box-border content-stretch flex gap-2.5 items-center justify-center p-[10px] relative rounded-lg shrink-0" data-name="Pill">
      <div aria-hidden="true" className="absolute border border-[#02503a] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[20px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">👽</p>
      </div>
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Historias que escapan a lo real</p>
      </div>
    </div>
  );
}

function Pill13() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] box-border content-stretch flex gap-2.5 h-10 items-center justify-center p-[10px] relative rounded-lg shrink-0" data-name="Pill">
      <div aria-hidden="true" className="absolute border border-[#02503a] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[20px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">📹</p>
      </div>
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Full documentales</p>
      </div>
    </div>
  );
}

function OptionsRow4() {
  return (
    <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0" data-name="Options Row">
      <Pill12 />
      <Pill13 />
    </div>
  );
}

function OptionsContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-3 items-start justify-start left-[273px] top-[353px] w-[664px]" data-name="Options Container">
      <OptionsRow />
      <OptionsRow1 />
      <OptionsRow2 />
      <OptionsRow3 />
      <OptionsRow4 />
    </div>
  );
}

function CursorsLinkStatus() {
  return (
    <div className="absolute left-[875px] size-6 top-[381px]" data-name="Cursors / Link & Status">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g filter="url(#filter0_d_1_13000)" id="Cursors / Link & Status">
          <path d={svgPaths.p19ec8c40} fill="var(--fill-0, white)" id="Shape" />
          <path clipRule="evenodd" d={svgPaths.p19ec8c40} fillRule="evenodd" id="Shape_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
          <path d={svgPaths.p2e609180} fill="var(--fill-0, black)" id="Shape_3" />
          <path d={svgPaths.p23aaf480} fill="var(--fill-0, black)" id="Shape_4" />
          <path d={svgPaths.p245b0710} fill="var(--fill-0, black)" id="Shape_5" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="27.6" id="filter0_d_1_13000" width="27.6" x="-1.8" y="-0.8">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="0.9" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_13000" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_13000" mode="normal" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function ClosePill() {
  return (
    <div className="relative shrink-0 size-2.5" data-name="close_pill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="close_pill">
          <path clipRule="evenodd" d={svgPaths.p4a71c00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
          <g id="Vector_2"></g>
        </g>
      </svg>
    </div>
  );
}

function Pill14() {
  return (
    <div className="bg-[#21dbaa] box-border content-stretch flex gap-1.5 items-center justify-center p-[10px] relative rounded-lg shrink-0" data-name="Pill">
      <div aria-hidden="true" className="absolute border border-[#02503a] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[20px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">😂</p>
      </div>
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[14px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Tengo ganas de reirme un rato</p>
      </div>
      <ClosePill />
    </div>
  );
}

function Send() {
  return (
    <div className="relative shrink-0 size-6" data-name="Send">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Send">
          <path d={svgPaths.p3b0f0380} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SendButton() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] box-border content-stretch flex gap-2.5 h-[38px] items-center justify-center p-[10px] relative rounded-lg shrink-0 w-[39px]" data-name="send-button">
      <div aria-hidden="true" className="absolute border border-[#02503a] border-solid inset-0 pointer-events-none rounded-lg" />
      <Send />
    </div>
  );
}

function SelectionContainer() {
  return (
    <div className="absolute content-stretch flex gap-4 items-center justify-start left-[854px] top-[651px]" data-name="Selection Container">
      <Pill14 />
      <SendButton />
    </div>
  );
}

function Grupo22372() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[14.286%] mt-[8.333%] place-items-start relative" data-name="Grupo 22372">
      <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center ml-0 mt-2.5 relative text-[#ffffff] text-[14px] text-nowrap translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">+16</p>
      </div>
    </div>
  );
}

function AgeRatingContainer() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Age Rating Container">
      <div className="[grid-area:1_/_1] bg-[#555555] h-6 ml-0 mt-0 rounded-sm w-[35px]" data-name="Age Rating Background" />
      <Grupo22372 />
    </div>
  );
}

function AgeRatingContainer1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Age Rating Container">
      <AgeRatingContainer />
    </div>
  );
}

function DetailsContainer() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[9px] items-center justify-start leading-[0] ml-[205px] mt-[94px] relative" data-name="Details Container">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#c4c4c4] text-[12px] w-[198px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">2 temporadas | Drama, Crimen | 2018</p>
      </div>
      <AgeRatingContainer1 />
    </div>
  );
}

function Icons1() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons">
          <path clipRule="evenodd" d={svgPaths.p2e61b700} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
          <g id="Vector_2"></g>
        </g>
      </svg>
    </div>
  );
}

function ButtonContent() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-center relative shrink-0" data-name="Button Content">
      <Icons1 />
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#121212] text-[14px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.5px] whitespace-pre">&nbsp;</p>
      </div>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[42px]" data-name="Button Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <div className="h-0 relative w-24" data-name="Minwidth">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Minwidth"></g>
            </svg>
          </div>
        </div>
      </div>
      <ButtonContent />
    </div>
  );
}

function ButtonsSmallPrimary() {
  return (
    <div className="[grid-area:1_/_1] bg-[#21dbaa] box-border content-stretch flex gap-2 h-10 items-center justify-center ml-[205px] mt-[201px] pl-6 pr-[13px] py-0 relative rounded-[25px] w-[55px]" data-name="Buttons/Small/Primary">
      <ButtonContainer />
    </div>
  );
}

function Icons2() {
  return (
    <div className="[grid-area:1_/_1] ml-[377px] mt-[207px] relative size-6" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons">
          <path d={svgPaths.p221d3080} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Icons3() {
  return (
    <div className="[grid-area:1_/_1] ml-[330px] mt-[209px] relative size-6" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons">
          <path d={svgPaths.p267a9600} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Icons4() {
  return (
    <div className="[grid-area:1_/_1] ml-[283px] mt-[209px] relative size-6" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons">
          <path d={svgPaths.p152e6a80} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function RatingContainer() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[3px] items-center justify-start ml-[205px] mt-[70px] relative" data-name="Rating Container">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-neutral-200 text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">IMDb 5,7</p>
      </div>
      <div className="relative shrink-0 size-[17px]">
        <div className="absolute inset-[12.03%_13.59%_18.14%_13.59%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
            <path d={svgPaths.p1f067e00} fill="var(--fill-0, #F5D600)" id="Star 4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 12">
        <g id="Container">
          <path d={svgPaths.p22bd2480} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1e58b870} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3210dff0} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.001%] mt-0 place-items-start relative" data-name="Container">
      <div className="[grid-area:1_/_1] flex h-[13.999px] items-center justify-center ml-[0.001%] mt-0 relative w-[15.029px]">
        <div className="flex-none h-[11.771px] rotate-[169.26deg] scale-y-[-100%] w-[13.065px]">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[80.354%] mt-[60.637%] place-items-start relative" data-name="Container">
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Container">
      <div className="[grid-area:1_/_1] h-[282px] ml-0 mt-0 relative rounded-[13px] w-[509px]" data-name="Background">
        <div aria-hidden="true" className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[13px]" />
      </div>
      <div className="[grid-area:1_/_1] font-['Roboto:Bold',_sans-serif] font-bold leading-[0] ml-[205px] mt-[39px] relative text-[#ffffff] text-[20px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[21px] whitespace-pre">Hunters</p>
      </div>
      <DetailsContainer />
      <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Regular',_sans-serif] font-normal h-[52px] justify-center leading-[0] ml-[205px] mt-[158px] relative text-[#ffffff] text-[14px] translate-y-[-50%] w-[274px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Una caza de nazis en la Nueva York de los 70. Ideal si buscás algo intenso, entretenido y con un toque de justicia brutal.</p>
      </div>
      <ButtonsSmallPrimary />
      <Icons2 />
      <Icons3 />
      <Icons4 />
      <RatingContainer />
      <div className="[grid-area:1_/_1] bg-center bg-cover bg-no-repeat h-[263px] ml-[7px] mt-2 rounded-xl w-[175.333px]" data-name="Thumbnail" style={{ backgroundImage: `url('${imgThumbnail}')` }} />
      <Container2 />
    </div>
  );
}

function Grupo22373() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[14.286%] mt-[8.333%] place-items-start relative" data-name="Grupo 22372">
      <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center ml-0 mt-2.5 relative text-[#ffffff] text-[14px] text-nowrap translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">+16</p>
      </div>
    </div>
  );
}

function AgeRatingContainer2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Age Rating Container">
      <div className="[grid-area:1_/_1] bg-[#555555] h-6 ml-0 mt-0 rounded-sm w-[35px]" data-name="Age Rating Background" />
      <Grupo22373 />
    </div>
  );
}

function AgeRatingContainer3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Age Rating Container">
      <AgeRatingContainer2 />
    </div>
  );
}

function DetailsContainer1() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[9px] items-center justify-start ml-0 mt-[55px] relative" data-name="Details Container">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#c4c4c4] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">2025 | Documental, Crimen | 1 h 7 min</p>
      </div>
      <AgeRatingContainer3 />
    </div>
  );
}

function Icons5() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons">
          <path clipRule="evenodd" d={svgPaths.p2e61b700} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
          <g id="Vector_2"></g>
        </g>
      </svg>
    </div>
  );
}

function ButtonContent1() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-center relative shrink-0" data-name="Button Content">
      <Icons5 />
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#121212] text-[14px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.5px] whitespace-pre">&nbsp;</p>
      </div>
    </div>
  );
}

function ButtonContainer1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[42px]" data-name="Button Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <div className="h-0 relative w-24" data-name="Minwidth">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Minwidth"></g>
            </svg>
          </div>
        </div>
      </div>
      <ButtonContent1 />
    </div>
  );
}

function ButtonsSmallPrimary1() {
  return (
    <div className="[grid-area:1_/_1] bg-[#21dbaa] box-border content-stretch flex gap-2 h-10 items-center justify-center ml-0 mt-[162px] pl-6 pr-[13px] py-0 relative rounded-[25px] w-[55px]" data-name="Buttons/Small/Primary">
      <ButtonContainer1 />
    </div>
  );
}

function Icons6() {
  return (
    <div className="[grid-area:1_/_1] ml-[132px] mt-[170px] relative size-6" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons">
          <path d={svgPaths.p39b40900} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Icons7() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-6" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons"></g>
      </svg>
    </div>
  );
}

function IconThumbsUp() {
  return (
    <div className="[grid-area:1_/_1] h-[17.274px] ml-[16.667%] mt-[12.5%] relative w-[17px]" data-name="🦆 icon 'thumbs up'">
      <div className="absolute inset-[-3.76%_-3.82%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
          <g id="ð¦ icon 'thumbs up'">
            <path d={svgPaths.p6d67080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[64.583%] mt-[84.158%] place-items-start relative" data-name="Icon Container">
      <Icons7 />
      <IconThumbsUp />
    </div>
  );
}

function Icons8() {
  return (
    <div className="[grid-area:1_/_1] ml-[78px] mt-[170px] relative size-6" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons">
          <path d={svgPaths.p152e6a80} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function RatingContainer1() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[3px] items-center justify-start ml-0 mt-[31px] relative" data-name="Rating Container">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-neutral-200 text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">IMDb 5,7</p>
      </div>
      <div className="relative shrink-0 size-[17px]">
        <div className="absolute inset-[12.03%_13.59%_18.14%_13.59%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
            <path d={svgPaths.p1f067e00} fill="var(--fill-0, #F5D600)" id="Star 4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-52 mt-[39px] place-items-start relative" data-name="Container">
      <div className="[grid-area:1_/_1] font-['Roboto:Bold',_sans-serif] font-bold ml-0 mt-0 relative text-[#ffffff] text-[20px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[21px] whitespace-pre">Maje</p>
      </div>
      <DetailsContainer1 />
      <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Regular',_sans-serif] font-normal h-[52px] justify-center ml-0 mt-[117px] relative text-[#ffffff] text-[14px] translate-y-[-50%] w-72" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">En 2017 el cuerpo de un ingeniero aparece sin vida en un barrio de Valencia. Buena elección si tenes ganas de un documental atrapante.</p>
      </div>
      <ButtonsSmallPrimary1 />
      <Icons6 />
      <IconContainer2 />
      <Icons8 />
      <RatingContainer1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Container">
      <Container4 />
      <div className="[grid-area:1_/_1] h-[282px] ml-0 mt-0 relative rounded-[13px] w-[509px]" data-name="Background">
        <div aria-hidden="true" className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[13px]" />
      </div>
      <div className="[grid-area:1_/_1] bg-center bg-cover bg-no-repeat h-[263px] ml-[9px] mt-2 rounded-xl w-[175.333px]" data-name="Thumbnail" style={{ backgroundImage: `url('${imgThumbnail1}')` }} />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex gap-6 items-center justify-start leading-[0] left-[273px] top-[840px]" data-name="Container">
      <Container3 />
      <Container5 />
    </div>
  );
}

function Grupo22374() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[14.286%] mt-[8.333%] place-items-start relative" data-name="Grupo 22372">
      <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center ml-0 mt-2.5 relative text-[#ffffff] text-[14px] text-nowrap translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">+16</p>
      </div>
    </div>
  );
}

function AgeRatingContainer4() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Age Rating Container">
      <div className="[grid-area:1_/_1] bg-[#555555] h-6 ml-0 mt-0 rounded-sm w-[35px]" data-name="Age Rating Background" />
      <Grupo22374 />
    </div>
  );
}

function AgeRatingContainer5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Age Rating Container">
      <AgeRatingContainer4 />
    </div>
  );
}

function DetailsContainer2() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[9px] items-center justify-start leading-[0] ml-[205px] mt-[94px] relative" data-name="Details Container">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#c4c4c4] text-[12px] w-[198px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">2 temporadas | Drama, Crimen | 2018</p>
      </div>
      <AgeRatingContainer5 />
    </div>
  );
}

function Icons9() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons">
          <path clipRule="evenodd" d={svgPaths.p2e61b700} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
          <g id="Vector_2"></g>
        </g>
      </svg>
    </div>
  );
}

function ButtonContent2() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-center relative shrink-0" data-name="Button Content">
      <Icons9 />
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#121212] text-[14px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.5px] whitespace-pre">&nbsp;</p>
      </div>
    </div>
  );
}

function ButtonContainer2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[42px]" data-name="Button Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <div className="h-0 relative w-24" data-name="Minwidth">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Minwidth"></g>
            </svg>
          </div>
        </div>
      </div>
      <ButtonContent2 />
    </div>
  );
}

function ButtonsSmallPrimary2() {
  return (
    <div className="[grid-area:1_/_1] bg-[#21dbaa] box-border content-stretch flex gap-2 h-10 items-center justify-center ml-[205px] mt-[201px] pl-6 pr-[13px] py-0 relative rounded-[25px] w-[55px]" data-name="Buttons/Small/Primary">
      <ButtonContainer2 />
    </div>
  );
}

function Icons10() {
  return (
    <div className="[grid-area:1_/_1] ml-[377px] mt-[207px] relative size-6" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons">
          <path d={svgPaths.p221d3080} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Icons11() {
  return (
    <div className="[grid-area:1_/_1] ml-[330px] mt-[209px] relative size-6" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons">
          <path d={svgPaths.p267a9600} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Icons12() {
  return (
    <div className="[grid-area:1_/_1] ml-[283px] mt-[209px] relative size-6" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons">
          <path d={svgPaths.p152e6a80} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function RatingContainer2() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[3px] items-center justify-start ml-[205px] mt-[70px] relative" data-name="Rating Container">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-neutral-200 text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">IMDb 5,7</p>
      </div>
      <div className="relative shrink-0 size-[17px]">
        <div className="absolute inset-[12.03%_13.59%_18.14%_13.59%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
            <path d={svgPaths.p1f067e00} fill="var(--fill-0, #F5D600)" id="Star 4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative size-full" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 12">
        <g id="Container">
          <path d={svgPaths.p22bd2480} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1e58b870} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3210dff0} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.001%] mt-0 place-items-start relative" data-name="Container">
      <div className="[grid-area:1_/_1] flex h-[13.999px] items-center justify-center ml-[0.001%] mt-0 relative w-[15.029px]">
        <div className="flex-none h-[11.771px] rotate-[169.26deg] scale-y-[-100%] w-[13.065px]">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[80.354%] mt-[60.637%] place-items-start relative" data-name="Container">
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Container">
      <div className="[grid-area:1_/_1] h-[282px] ml-0 mt-0 relative rounded-[13px] w-[509px]" data-name="Background">
        <div aria-hidden="true" className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[13px]" />
      </div>
      <div className="[grid-area:1_/_1] font-['Roboto:Bold',_sans-serif] font-bold leading-[0] ml-[205px] mt-[39px] relative text-[#ffffff] text-[20px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[21px] whitespace-pre">Hunters</p>
      </div>
      <DetailsContainer2 />
      <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Regular',_sans-serif] font-normal h-[52px] justify-center leading-[0] ml-[205px] mt-[158px] relative text-[#ffffff] text-[14px] translate-y-[-50%] w-[274px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Una caza de nazis en la Nueva York de los 70. Ideal si buscás algo intenso, entretenido y con un toque de justicia brutal.</p>
      </div>
      <ButtonsSmallPrimary2 />
      <Icons10 />
      <Icons11 />
      <Icons12 />
      <RatingContainer2 />
      <div className="[grid-area:1_/_1] bg-center bg-cover bg-no-repeat h-[263px] ml-[7px] mt-2 rounded-xl w-[175.333px]" data-name="Thumbnail" style={{ backgroundImage: `url('${imgThumbnail}')` }} />
      <Container9 />
    </div>
  );
}

function Grupo22375() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[14.286%] mt-[8.333%] place-items-start relative" data-name="Grupo 22372">
      <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center ml-0 mt-2.5 relative text-[#ffffff] text-[14px] text-nowrap translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">+16</p>
      </div>
    </div>
  );
}

function AgeRatingContainer6() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Age Rating Container">
      <div className="[grid-area:1_/_1] bg-[#555555] h-6 ml-0 mt-0 rounded-sm w-[35px]" data-name="Age Rating Background" />
      <Grupo22375 />
    </div>
  );
}

function AgeRatingContainer7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Age Rating Container">
      <AgeRatingContainer6 />
    </div>
  );
}

function DetailsContainer3() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[9px] items-center justify-start ml-0 mt-[55px] relative" data-name="Details Container">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#c4c4c4] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">2025 | Documental, Crimen | 1 h 7 min</p>
      </div>
      <AgeRatingContainer7 />
    </div>
  );
}

function Icons13() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons">
          <path clipRule="evenodd" d={svgPaths.p2e61b700} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
          <g id="Vector_2"></g>
        </g>
      </svg>
    </div>
  );
}

function ButtonContent3() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-center relative shrink-0" data-name="Button Content">
      <Icons13 />
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#121212] text-[14px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.5px] whitespace-pre">&nbsp;</p>
      </div>
    </div>
  );
}

function ButtonContainer3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[42px]" data-name="Button Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <div className="h-0 relative w-24" data-name="Minwidth">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Minwidth"></g>
            </svg>
          </div>
        </div>
      </div>
      <ButtonContent3 />
    </div>
  );
}

function ButtonsSmallPrimary3() {
  return (
    <div className="[grid-area:1_/_1] bg-[#21dbaa] box-border content-stretch flex gap-2 h-10 items-center justify-center ml-0 mt-[162px] pl-6 pr-[13px] py-0 relative rounded-[25px] w-[55px]" data-name="Buttons/Small/Primary">
      <ButtonContainer3 />
    </div>
  );
}

function Icons14() {
  return (
    <div className="[grid-area:1_/_1] ml-[132px] mt-[170px] relative size-6" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons">
          <path d={svgPaths.p39b40900} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Icons15() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-6" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons"></g>
      </svg>
    </div>
  );
}

function IconThumbsUp1() {
  return (
    <div className="[grid-area:1_/_1] h-[17.274px] ml-[16.667%] mt-[12.5%] relative w-[17px]" data-name="🦆 icon 'thumbs up'">
      <div className="absolute inset-[-3.76%_-3.82%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
          <g id="ð¦ icon 'thumbs up'">
            <path d={svgPaths.p6d67080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconContainer3() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[64.583%] mt-[84.158%] place-items-start relative" data-name="Icon Container">
      <Icons15 />
      <IconThumbsUp1 />
    </div>
  );
}

function Icons16() {
  return (
    <div className="[grid-area:1_/_1] ml-[78px] mt-[170px] relative size-6" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons">
          <path d={svgPaths.p152e6a80} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function RatingContainer3() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[3px] items-center justify-start ml-0 mt-[31px] relative" data-name="Rating Container">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-neutral-200 text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">IMDb 5,7</p>
      </div>
      <div className="relative shrink-0 size-[17px]">
        <div className="absolute inset-[12.03%_13.59%_18.14%_13.59%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
            <path d={svgPaths.p1f067e00} fill="var(--fill-0, #F5D600)" id="Star 4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-52 mt-[39px] place-items-start relative" data-name="Container">
      <div className="[grid-area:1_/_1] font-['Roboto:Bold',_sans-serif] font-bold ml-0 mt-0 relative text-[#ffffff] text-[20px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[21px] whitespace-pre">Maje</p>
      </div>
      <DetailsContainer3 />
      <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Regular',_sans-serif] font-normal h-[52px] justify-center ml-0 mt-[117px] relative text-[#ffffff] text-[14px] translate-y-[-50%] w-72" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">En 2017 el cuerpo de un ingeniero aparece sin vida en un barrio de Valencia. Buena elección si tenes ganas de un documental atrapante.</p>
      </div>
      <ButtonsSmallPrimary3 />
      <Icons14 />
      <IconContainer3 />
      <Icons16 />
      <RatingContainer3 />
    </div>
  );
}

function Container12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Container">
      <Container11 />
      <div className="[grid-area:1_/_1] h-[282px] ml-0 mt-0 relative rounded-[13px] w-[509px]" data-name="Background">
        <div aria-hidden="true" className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[13px]" />
      </div>
      <div className="[grid-area:1_/_1] bg-center bg-cover bg-no-repeat h-[263px] ml-[9px] mt-2 rounded-xl w-[175.333px]" data-name="Thumbnail" style={{ backgroundImage: `url('${imgThumbnail1}')` }} />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex gap-6 items-center justify-start leading-[0] left-[273px] top-[1143px]" data-name="Container">
      <Container10 />
      <Container12 />
    </div>
  );
}

export default function Seleccion1ErVariable() {
  return (
    <div className="bg-[#121212] relative size-full" data-name="Selección 1er variable">
      <BackgroundElements />
      <CollectionContainer />
      <div className="absolute font-['Manrope:Bold',_sans-serif] font-bold leading-[0] left-[273px] text-[#ffffff] text-[16px] text-nowrap top-[310px]">
        <p className="leading-[normal] whitespace-pre">¿Para qué estas hoy?</p>
      </div>
      <div className="absolute font-['Manrope:Regular',_sans-serif] font-normal leading-[0] text-[#ffffff] text-[16px] text-center text-nowrap top-[201.86px] translate-x-[-50%]" style={{ left: "calc(50% + 16.5px)" }}>
        <p className="leading-[normal] whitespace-pre">Respondé un par de preguntas y armá una lista de pelis y series de tu interés</p>
      </div>
      <div className="absolute font-['Manrope:Regular',_sans-serif] font-normal leading-[0] left-[443px] text-[#ffffff] text-[14px] text-nowrap top-[313px]">
        <p className="leading-[normal] whitespace-pre">Podés seleccionar hasta 3 opciones.</p>
      </div>
      <Logo />
      <Button />
      <OptionsContainer />
      <CursorsLinkStatus />
      <SelectionContainer />
      <Container6 />
      <Container13 />
      <div className="absolute font-['Manrope:Bold',_sans-serif] font-bold leading-[0] left-[273px] text-[#ffffff] text-[14px] top-[792px] w-[740px]">
        <p className="leading-[normal]">
          Estos son algunos policiales atrapantes y títulos pochocleros que te van a enganchar desde el primer minuto.
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
      </div>
    </div>
  );
}