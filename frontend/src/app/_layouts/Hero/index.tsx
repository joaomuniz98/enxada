'use client';

import CustomButton from "@/components/CustomButton";

import Scenario from "./Scenario";


interface HeroProps { }

export default function Hero({ }: HeroProps) {
  return (
    <section className="w-@content mx-auto px-4 block pb-@container">
      <Scenario>
        <div className="z-10 pt-8 aspect-square">
          <h1 className="text-6xl mt-12 leading-relaxed mb-8 font-bold text-white z-99">Bonûs de depósito de 100% + 40 rodadas grátis</h1>
          <p className="text-lg text-white/50 w-3/4 mb-16 z-99">Deposite  e receba um bônus de 100% + 40 rodades gratis</p>
          <CustomButton className="w-max">Resgatar bonûs gratis</CustomButton>
        </div>
      </Scenario>
    </section>
  )
}