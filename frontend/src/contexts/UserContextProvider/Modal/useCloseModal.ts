import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function useCloseModal(router: AppRouterInstance) {
  function onClose() {
    router.replace("?modal=")
  }

  return onClose
}