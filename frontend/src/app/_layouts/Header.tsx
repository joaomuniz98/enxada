'use client';

interface HeaderProps {

}

export default function Header({ }: HeaderProps) {
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
        <div>

        </div>
      </div>
    </header>
  )
}