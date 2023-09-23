'use client';

import useGameContext from "@/hooks/useGameContext";
import { useRouter } from "next/navigation";

interface HeaderProps {

}

export default function Header({ }: HeaderProps) {
  const router = useRouter();
  const game = useGameContext()
  return (
    <header className="max-w-[100em] h-auto flex flex-col items-stretch mx-auto px-@section">
      <div className="py-4 h-1/4 bg-red-700 [clip-path:_inset(0_-100vmax)] shadow-[0_0_0_100vmax_rgb(185_28_28)] grid place-content-center">
        <h5 className="text-center text-white text-base">Seja bem-vindo a Enxadata bet! Receba um bônus de primeira vez 🎁</h5>
      </div>
      <div className="max-w-[100em] [clip-path:_inset(0_-100vmax)] shadow-[0_0_0_100vmax_rgb(30_41_59)] h-auto py-4 mx-auto block bg-slate-800 justify-between">
        <div className="flex tex-white items-center ">
          <img src="./logo.webp" className="w-[48px] mix-blend-multiply aspect-square" alt="" />
          <h5 className="text-center text-4xl text-white">Enxada</h5>
        </div>
        <ul className="list-none">
          <li>Mine</li>
        </ul>
        <div className="flex gap-4 float-right">
          <button onClick={() => router.replace("?modal=login")} className="text-white text-base font-medium">Login</button>
          <button onClick={() => router.replace("?modal=signin")}  className="text-white text-base font-medium bg-red-600 p-4 rounded-md">Cadastrar-se</button>
        </div>
      </div>
    </header>
  )
}