'use client';

import { createContext, useLayoutEffect, useState } from 'react'

import Modal from './Modal';

import { User } from './type'

interface UserProviderProps {
  children: React.ReactNode
}

export const UserContext = createContext({} as User)
export const SetUserContext = createContext({} as React.Dispatch<React.SetStateAction<User>>)

export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState({} as User)

  useLayoutEffect(() => {



  }, [])

  return (
    <UserContext.Provider value={user}>
      <SetUserContext.Provider value={setUser}>
        <Modal />
        {children}
      </SetUserContext.Provider>
    </UserContext.Provider>
  )
}