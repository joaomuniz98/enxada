'use client';

import { useRef } from "react";

import { useRouter } from "next/navigation";

import useSetUserContext from "../useSetUserContext";

import AuthService from "@/services/auth";


interface LoginProps {

}

export default function Login({ }: LoginProps) {
  const setUser = useSetUserContext()
  const emailRef = useRef<HTMLInputElement>(null!)
  const passwordRef = useRef<HTMLInputElement>(null!)

  const router = useRouter()

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value
    try {
      const user = AuthService.login(email, password)
    } catch (error) {
      console.error("Login erro: ", error)
      throw error
    }
  }

  return (
    <dialog open className="fixed z-[1000] shadow-[0_0_0_100vmax_#11111189] top-1/2 left-1/2 -translate-x-1/2 p-@md py-@sm -translate-y-1/2 bg-gray-800">
      <form className="text-white" action="" onSubmit={onSubmit}>
        <legend className="text-4xl mb-@md text-center font-bold">Login</legend>
        <fieldset className="text-white">
          <label className="mb-2 block" htmlFor="email">Email</label>
          <input ref={emailRef} required name="email" className="w-full mb-4 py-4 px-2 rounded-md text-gray-400" placeholder="johndoe@mail.com" type="text" />
          <label className="mb-2 block" htmlFor="">Senha</label>
          <input ref={passwordRef} required className="w-full py-4 px-2 rounded-md text-gray-400" placeholder="johndoe123" type="text" />
          {/* <article className="w-full">
          </article> */}
          <div className="mt-@lg flex justify-between">
            <button type="button" onClick={() => router.replace("?modal=")} className="underline">Fechar</button>
            <button className="float-right bg-red-600 px-4 py-2 rounded-sm">Confirmar</button>
          </div>
        </fieldset>
      </form>
    </dialog>
  )
}