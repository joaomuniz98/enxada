'use client';

import useGameContext from "@/hooks/useGameContext";
import { useRouter } from "next/navigation";

import CustomButton from "@/components/CustomButton";

interface HeaderProps {

}

export default function Header({ }: HeaderProps) {
  const router = useRouter();
  const game = useGameContext()

  return (
    <header className="w-full h-36 flex flex-col sticky top-0 z-10 items-stretch">
      <div className="max-w-@baseSectionWidth mx-@section py-8 h-1/4 bg-@primary [clip-path:_inset(0_-100vmax)] shadow-[0_0_0_100vmax_#9EC913] grid place-content-center">
        <h5 className="text-center text-white text-base">Seja bem-vindo a Enxadata bet! Receba um bônus de primeira vez 🎁</h5>
      </div>
      <div className="max-w-@baseSectionWidth mx-@section flex [clip-path:_inset(0_-100vmax)] justify-between shadow-[0_0_0_100vmax_#0E0C2B] h-auto py-4 bg-@dark">
        <div className="flex tex-white items-center ">
          <img src="./logo.webp" className="w-[48px] invert mix-blend-multiply aspect-square" alt="" />
          <h5 className="text-center text-4xl text-white">Enxada</h5>
        </div>
        <ul className="list-none">
          <li>Mine</li>
        </ul>
        <div className="flex gap-4 float-right">
          <CustomButton onClick={() => router.replace("?modal=signin")} >Cadastrar-se</CustomButton>
          <CustomButton onClick={() => router.replace("?modal=login")} variant="underline">Fazer login</CustomButton>
        </div>
      </div>
    </header>
  )
}