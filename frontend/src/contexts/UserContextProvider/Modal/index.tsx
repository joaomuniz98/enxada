'use client';

import { useSearchParams } from 'next/navigation'

import Login from './Login';
import SignIn from './SignIn';

interface ModalProps {

}

export default function Modal({ }: ModalProps) {
  const searchParams = useSearchParams()
  const modal = searchParams.get("modal")

  console.log("modal queryParams value: ", modal)

  switch (modal) {
    case "signin":
      return <SignIn />
    case "login":
      return <Login />
    default:
      return null
  }
}