// TODO: fazer o hook para usar 
import { useContext } from 'react'
import { GamesContext } from '@/contexts/GamesContextProvider'

export default function useGameContext(){
  return useContext(GamesContext)
}