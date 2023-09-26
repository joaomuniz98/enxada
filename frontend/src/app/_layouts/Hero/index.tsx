'use client';

import CustomButton from "@/components/CustomButton";

import Scenario from "./Scenario";


interface HeroProps { }

export default function Hero({ }: HeroProps) {
  return (
    <section className="max-w-@baseSectionWidth mx-auto px-8 grid grid-cols-2 relative items-center [clip-path:_inset(0_-200vmax)] pb-@container">
      {/* <Scenario> */}
      <div className="flex justify-between flex-col z-10 pt-8 aspect-square">
        <div>
          <div className="flex items-center gap-4">
            <span className="w-[200px] inline-block h-[2px] bg-@primary"></span>
            <h5 className="text-@primary float-right text-base font-medium">Joque Mine agora e ganhe um bônus de primeiro jogo</h5>
          </div>
          <h1 className="text-6xl mt-12 leading-relaxed mb-8 font-bold text-white z-99">Bonûs de depósito de 100% + 40 rodadas grátis</h1>
          <p className="text-lg text-white/50 w-3/4 z-99">Deposite  e receba um bônus de 100% + 40 rodades gratis</p>
        </div>
        <div className="flex justify-between">
          <CustomButton className="w-max">Resgatar bonûs gratis</CustomButton>
          {/* <CustomButton variant="inverted">Fazer login em outra conta</CustomButton> */}
        </div>
      </div>
      {/* </Scenario> */}
    </section>
  )
}