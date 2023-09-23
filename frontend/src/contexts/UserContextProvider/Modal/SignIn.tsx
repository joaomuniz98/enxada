'use client';

import { useRouter } from "next/navigation";

interface SignInProps {

}

export default function SignIn({ }: SignInProps) {
  const router = useRouter()

  function onSubmit() {

  }

  return (
    <dialog open className="fixed z-[1000] shadow-[0_0_0_100vmax_#11111189] top-1/2 left-1/2 -translate-x-1/2 p-@md py-@sm -translate-y-1/2 bg-gray-800">
      <form className="text-white" action="">
        <legend className="text-4xl mb-@md text-center font-bold">Sign In</legend>
        <fieldset className="text-white">
          <label className="mb-2 block" htmlFor="email">Email</label>
          <input required name="email" className="w-full mb-4 py-4 px-2 rounded-md text-gray-400" placeholder="johndoe@mail.com" type="text" />
          <label className="mb-2 block" htmlFor="">Senha</label>
          <input required className="w-full py-4 px-2 rounded-md text-gray-400" placeholder="johndoe123" type="text" />
          <article className="w-full">
          </article>
          <div className="mt-@lg flex justify-between">
            <button type="button" onClick={() => router.replace("?modal=")} className="underline">Fechar</button>
            <button className="float-right bg-red-600 px-4 py-2 rounded-sm">Confirmar</button>
          </div>
        </fieldset>
      </form>
    </dialog>
  )
}