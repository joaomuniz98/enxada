'use client';

interface ScenarioProps {
  children: React.ReactNode
}

export default function Scenario({ children }: ScenarioProps) {
  return (
    <>
      <img className="absolute pointer-events-none bg-[url('/poco-hero.png')] filter brightness-[15%]  saturate-200 mix-blend-multiply bg-blend-multiply bg-origin-border left-0 right-0 bg-contain h-full [background-position-y:_top] [background-position-x:_center] bg-no-repeat bg-fixed" alt="Imagem do poço" />
      {children}
      <div className="absolute left-0 right-0 pointer-events-none overflow-clip flex align-bottom bottom-0 w-full h-1/2 z-1">
        <img className="bg-[url(/mato.png)] pointer-events-none scale-150 relative brightness-[100%] opacity-75 bottom-[calc(25%-_40px)] mt-auto bg-auto w-full h-full bg-bottom [background-repeat-y:_no-repeat] left-0 bg-repeat" alt="Imagem do poço" />
      </div>
    </>
  )
}