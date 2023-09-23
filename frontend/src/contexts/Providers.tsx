'use client';

import UserProvider from "./UserContextProvider";

interface ProvidersProps {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <UserProvider>
      {children}
    </UserProvider>
  )
}