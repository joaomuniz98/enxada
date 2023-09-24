import axios, { AxiosInstance, AxiosResponse } from "axios";

export class AuthService {
  protected instance: AxiosInstance;
  constructor(baseURL: string) {
    console.log(baseURL)
    if (!baseURL) {
      throw new Error("NEXT_PUBLIC_BACKEND_URL undefined")
    }
    this.instance = axios.create({
      baseURL,
      timeout: 30000,
      timeoutErrorMessage: "Time out!"
    })
  }

  private getUser(res: AxiosResponse) {
    if (res.status >= 400) {
      return {}
    }
    return res.data
  }

  public login(email: string, password: string) {
    console.log("login on auth fired")
    const user = {
      email,
      password
    }

    this.instance
      .post("/login", user)
      .then(this.getUser)
  }


}

export default new AuthService(process.env.NEXT_PUBLIC_BACKEND_URL)