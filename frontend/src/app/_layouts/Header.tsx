'use client';

import useGameContext from "@/hooks/useGameContext";
import { useRouter } from "next/navigation";

import CustomButton from "@/components/CustomButton";
import Logo from "@/components/Logo";

interface HeaderProps {

}

export default function Header({ }: HeaderProps) {
  const router = useRouter();
  const game = useGameContext()

  return (
    <header className="w-screen mx-auto h-@header flex flex-col fixed z-10 items-stretch">
      <div className="w-full py-4 bg-@primary self-center grid place-content-center">
        <h5 className="text-center text-white text-base">Seja bem-vindo a Enxadata bet! Receba um bônus de primeira vez 🎁</h5>
      </div>
      <div className="bg-@dark py-2 flex">
        <div className="w-@sidebar h-full grid place-content-center">
          <Logo />
        </div>
        <div className="w-@content px-4 mx-auto block">
          <div className="float-right flex gap-4">
            <CustomButton className="py-2" onClick={() => router.replace("?modal=signin")} >Cadastrar-se</CustomButton>
            <CustomButton onClick={() => router.replace("?modal=login")} variant="underline">Fazer login</CustomButton>
          </div>
        </div>
      </div>

    </header>
  )
}