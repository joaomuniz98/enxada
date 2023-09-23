// TODO: Criar o contexto de games para transitar de pag

import { usePathname } from "next/navigation";
import React, { ReactNode, createContext, useEffect,useState } from "react";
import Game from "./enumGame";

export const GamesContext = createContext(Game.Nothing)

interface GamesProviderProps {
    children: ReactNode
}

export default function GamesProvider({children}:GamesProviderProps){

    const [game,setGame] = useState(Game.Nothing)
    const pathName = usePathname();

    useEffect(() =>{ 
             
          if(pathName.includes('/mine')){
               
             setGame(Game.Mine)
          }


     },[pathName])
    

  
    return (
        
          
        <GamesContext.Provider value={game} >
                {children}
        </GamesContext.Provider>
    )
}


// TODO: usar o usePathname para pegar a rota e lidar com o s ifs dentro de um useEffect!

// TODO: exportar para Providers.tsx (lá tem todos os contextos)

// E para usar o dado que tu quer transmitir usar um hook global (já criei par você)