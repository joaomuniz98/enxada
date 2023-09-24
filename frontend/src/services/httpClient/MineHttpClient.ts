import { BaseHttpClient } from "./BaseHttpClient";

class MineHttpClient extends BaseHttpClient {
  constructor() {
    super(process.env.NEXT_PUBLIC_BACKEND_URL)
  }

  getMineGameSchedule() {
    const auth = this.createAuthHeader(process.env.NEXT_PUBLIC_BACKEND_URL)

    const data = this.post("/mine", auth)
    return data
  }

  isGameOver(row: number, col: number) {
        const data = this.post("/mine")  
  }

  
}