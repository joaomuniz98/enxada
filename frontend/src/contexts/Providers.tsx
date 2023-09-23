'use client';

import UserProvider from "./UserContextProvider";
import GamesProvider from "./GamesContextProvider";

interface ProvidersProps {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <GamesProvider>
      <UserProvider>
        {children}
      </UserProvider>
    </GamesProvider>
  )
}