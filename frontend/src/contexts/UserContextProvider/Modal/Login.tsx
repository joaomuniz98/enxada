'use client';

import { useRef } from "react";

import { useRouter } from "next/navigation";

import useSetUserContext from "../useSetUserContext";

import AuthService from "@/services/auth";
import CustomButton from "@/components/CustomButton";

import { InstagramLogoIcon, FaceIcon } from '@radix-ui/react-icons'

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
    <dialog open className="fixed z-[1000] w-[420px] shadow-[0_0_0_100vmax_#11111189] top-1/2 left-1/2 -translate-x-1/2 px-8 py-4 -translate-y-1/2 bg-@dark">
      <form className="text-white" action="" onSubmit={onSubmit}>
        <legend className="text-2xl mb-@md text-center font-bold">Fazer o login em sua conta</legend>
        <fieldset className="text-white">
          <input ref={emailRef} required name="email" className="w-full mb-8 py-4 px-2 bg-@dark-sec rounded-md text-gray-400" placeholder="Email" type="text" />
          <input ref={passwordRef} required className="w-full py-4 px-2 mb-4 rounded-md bg-@dark-sec text-gray-400" placeholder="Senha" type="text" />
          <small className="text-white/50 text-base block mb-4">Esqueceu a senha?</small>
          <CustomButton className="block w-full mb-8">Confirmar</CustomButton>
          <hr />
          <div className="flex items-center gap-4 mb-8">
            <span className="grow h-[2px] bg-white/20"></span>
            <span className="text-white/50 text-base ">ou</span>
            <span className="grow h-[2px] bg-white/20"></span>
          </div>
          <div className="grid grid-cols-3 mb-8">
            <InstagramLogoIcon />
            <FaceIcon />
          </div>
          <p>Não tem uma conta? <span className="text-base text-@primary">Crie uma agora!</span></p>
        </fieldset>
      </form>
    </dialog>
  )
}