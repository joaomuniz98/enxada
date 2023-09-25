'use client';

import CustomButton from "@/components/CustomButton";


interface HeroProps { }

export default function Hero({ }: HeroProps) {
  return (
    <section className="relative [clip-path:_inset(0_-100vmax)] max-w-@baseSectionWidth mx-auto pt-@lg px-@section pb-@container grid grid-cols-2">
      {/* <img className="absolute object-top w-full object-contain left-0 right-0 top-0 bottom-0 bg-blend-screen z-10" src="/poco-hero.png" alt="Imagem do poço" /> */}
      <div>
        <h1 className="text-6xl leading-relaxed mb-8 font-bold text-white">Bonûs de depósito de 100% + 40 rodadas grátis</h1>
        <p className="text-lg text-white/50 mb-16 w-3/4">Deposite  e receba um bônus de 100% + 40 rodades gratis</p>
        <div className="flex justify-between">
          <CustomButton className="w-max">Resgatar bonûs gratis</CustomButton>
          <CustomButton variant="underline">Fazer login em outra conta</CustomButton>
        </div>
      </div>
      <div>

      </div>
    </section>
  )
}