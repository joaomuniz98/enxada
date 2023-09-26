'use client';

import { useRouter } from "next/navigation";
import useCloseModal from "./useCloseModal";

import Logo from "@/components/Logo";

import CustomButton from "@/components/CustomButton";
import Separator from "./Separator";

import { FaGoogle, FaTwitch } from "react-icons/fa";
import { RxCross1 } from 'react-icons/rx'

interface SignInProps { }

export default function SignIn({ }: SignInProps) {
  const router = useRouter()
  const onClose = useCloseModal(router)

  function onSubmit() {

  }

  return (
    <dialog open className="fixed z-[1000] w-[720px] place-content-between text-white flex shadow-[0_0_0_100vmax_#111111b6] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-@dark">

      <div className="w-auto px-8 overflow-hidden relative flex flex-col justify-end py-16">
        <img src="/sigin.png" className="absolute top-0 left-0 right-0 h-full bottom-0 object-cover" alt="Poço image" />
        <footer className="self-end place-self-end z-10">
          <h5 className="text-lg w-fit font-medium text-[25px] leading-normal">Cadastre-se agora e receba 1.000 Milhos 🌽</h5>
        </footer>
      </div>
      <form className="text-white px-10 py-16" action="">
        <button type="button" onClick={onClose} className="absolute right-0 -translate-x-10 -translate-y-full">
          <RxCross1 />
        </button>
        <Logo className="justify-center mb-4" />
        <legend className="text-center text-[20px] mb-14">Crie sua conta</legend>
        <fieldset className="text-white">
          <input required name="email" className="w-full mb-4 py-4 px-2 rounded-md bg-@dark-sec text-gray-400" placeholder="johndoe@mail.com" type="email" />
          <input required className="w-full py-4 px-2 mb-8 rounded-md bg-@dark-sec text-gray-400" placeholder="johndoe123" type="text" />
          <div className="flex gap-2 w-max mb-8">
            <input type="checkbox" />
            <small className="text-white">Você concorda em usarmos sua imagem, <span className="text-@primary text-@smal font-medium">Termos de serviço</span></small>
          </div>
          <CustomButton className="w-full mb-4">Confirmar</CustomButton>
          <Separator />
          <div className="grid grid-cols-3 mb-8">
            <FaGoogle />
            <FaTwitch />
          </div>
          <p className="text-@body text-center">Já tem uma conta? <span onClick={() => router.replace("?modal=login")} className="text-base cursor-pointer font-medium text-@primary">Entrar</span></p>
        </fieldset>
      </form>
    </dialog>
  )
}