'use client';

import { useRef } from "react";
import { useRouter } from "next/navigation";
import useSetUserContext from "../useSetUserContext";

import AuthService from "@/services/auth";

import CustomButton from "@/components/CustomButton";
import Logo from "@/components/Logo";

import { FaGoogle, FaTwitch } from "react-icons/fa"
import { RxCross1 } from "react-icons/rx";


interface LoginProps {

}

function Separator() {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="grow h-[2px] bg-white/20"></span>
      <span className="text-white/50 text-base ">ou</span>
      <span className="grow h-[2px] bg-white/20"></span>
    </div>
  )
}

export default function Login({ }: LoginProps) {
  const setUser = useSetUserContext()
  const emailRef = useRef<HTMLInputElement>(null!)
  const passwordRef = useRef<HTMLInputElement>(null!)

  const router = useRouter()

  function onClose() {
    router.replace("?modal=")
  }

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
    <dialog open className="fixed z-[1000] w-[420px] shadow-[0_0_0_100vmax_#111111bc] top-1/2 left-1/2 -translate-x-1/2 px-10 py-16 -translate-y-1/2 bg-@dark">
      <form className="text-white" action="" onSubmit={onSubmit}>
        <button type="button" onClick={onClose} className="absolute right-0 -translate-x-10 -translate-y-full">
          <RxCross1 />
        </button>
        <Logo className="mx-auto w-full mix-blend-luminosity justify-center mb-4" />
        <legend className="text-center text-[20px] mb-14">Faça o login em sua conta</legend>
        <fieldset className="text-white">
          <input ref={emailRef} required name="email" className="w-full mb-8 py-4 px-2 bg-@dark-sec rounded-md text-gray-400" placeholder="Email" type="text" />
          <input ref={passwordRef} required className="w-full py-4 px-2 mb-5 rounded-md bg-@dark-sec text-gray-400" placeholder="Senha" type="text" />
          <small className="text-white/50 text-@body block mb-10">Esqueceu a senha?</small>
          <CustomButton className="block w-full mb-8">Confirmar</CustomButton>
          <Separator />
          <div className="grid grid-cols-3 mb-8">
            <FaGoogle />
            <FaTwitch />
          </div>
          <p className="text-@body text-center">Não tem uma conta? <span onClick={() => router.replace("?modal=signin")} className="text-base cursor-pointer font-medium text-@primary">Crie uma agora!</span></p>
        </fieldset>
      </form>
    </dialog>
  )
}