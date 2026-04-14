import imgFreeMockupOfWomanHoldingIPhone14ProMockuuupsStudio from "./04818f4ff56941711c1ae23607e5d98c64ac8eea.png";

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#85adff] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">{`Case Study `}</p>
      </div>
    </div>
  );
}

function Container3() {
  return <div className="h-[16px] shrink-0 w-[29.782px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white w-full">
        <p className="leading-[32px]">ListMate</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.745px] pt-[3px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ababab] text-[14px] w-[325.591px]">
        <p className="leading-[20px]">A collaborative shopping assistant that simplifies list-making and real-time collaboration</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[16px] px-[16px] right-[16.18px] top-[383px]" data-name="Container">
      <Container1 />
      <Heading />
      <Paragraph />
    </div>
  );
}

export default function Listmate() {
  return (
    <div className="bg-[#191919] relative rounded-[24px] size-full" data-name="listmate">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.55px_0] rounded-[24px] shadow-[0px_0px_0px_1px_rgba(133,173,255,0.2),0px_0px_80px_0px_rgba(133,173,255,0.15)]" data-name="Active Focus Project (Center):shadow" />
      <Container />
      <div className="absolute flex h-[339.091px] items-center justify-center left-[15.45px] top-[20px] w-[415.455px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none scale-x-91 scale-y-91">
          <div className="h-[373px] relative rounded-[15px] w-[457px]" data-name="Free mockup of woman holding iPhone 14 Pro (Mockuuups Studio)">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[15px]">
              <img alt="" className="absolute h-[289.27%] left-[-107.75%] max-w-none top-[-114.6%] w-[309.6%]" src={imgFreeMockupOfWomanHoldingIPhone14ProMockuuupsStudio} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}