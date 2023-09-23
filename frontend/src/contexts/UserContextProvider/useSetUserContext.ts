import { useContext } from "react";

import { SetUserContext } from './index'

export default function useSetUserContext() {
  return useContext(SetUserContext)
}