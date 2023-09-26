'use client';

import { useRouter } from "next/navigation";

interface SignInProps {

}

export default function SignIn({ }: SignInProps) {
  const router = useRouter()

  function onSubmit() {

  }

  return (
    <dialog open className="fixed z-[1000] w-[620px] place-content-between text-white flex shadow-[0_0_0_100vmax_#11111189] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-@dark">
      <div className="w-auto px-8 relative flex flex-col justify-between">
        <img src="/hero-poco.jpg" alt="Poço image" />
        <footer className="self-end">
          <h5 className="text-lg font-bold">Cadastre-se agora e receba 1.000 Milhos 🌽</h5>
        </footer>
      </div>
      <form className="text-white p-8" action="">
        <legend className="text-2xl mb-@md text-center font-bold">Cadastrar-se</legend>
        <fieldset className="text-white">
          <label className="mb-2 block" htmlFor="email">Email</label>
          <input required name="email" className="w-full mb-4 py-4 px-2 rounded-md text-gray-400" placeholder="johndoe@mail.com" type="text" />
          <label className="mb-2 block" htmlFor="">Senha</label>
          <input required className="w-full py-4 px-2 rounded-md text-gray-400" placeholder="johndoe123" type="text" />
          <article className="w-full mt-16">
            <div>
              <input required type="checkbox" />
              <span className="text-white/50 text-sm">Certifico que tenho mais de 18 anos e concordo como o termo de serviços</span>
            </div>
            <div>
              <input type="checkbox" />
              <span className="text-white/50 text-sm">Receba promoções por e-mail</span>
            </div>
          </article>
          <div className="mt-@sm flex justify-between">
            <button type="button" onClick={() => router.replace("?modal=")} className="underline">Fechar</button>
            <button className="float-right bg-red-600 px-4 py-2 rounded-sm">Confirmar</button>
          </div>
        </fieldset>
      </form>
    </dialog>
  )
}