import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class BaseHttpClient {
  protected http: AxiosInstance;

  constructor(baseUri: string) {
    this.http = axios.create({
      baseURL: baseUri,
      timeout: 30000,
      responseType: 'json',
    })

    this.http.interceptors.response.use(this.handleSucess, this.handleError);
  }

  public async get<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
    return this.http.get<T>(url, options).then(this.getData);
  }

  public getResponse<T>(url: string, options?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.http.get<T>(url, options);
  }

  public postResponse<T>(url: string, data: unknown, options?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.http.post<T>(url, data, options)
  }

  public async post<T>(url: string, data?: unknown, options?: AxiosRequestConfig): Promise<T> {
    return this.http.post<T>(url, data, options).then(this.getData);
  }

  public createAuthHeader = (token?: string): AxiosRequestConfig => {
    if (!token) {
      throw new Error("The provided token is null");
    }

    return {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  }

  private handleSucess(response: AxiosResponse): AxiosResponse {
    return response;
  }

  private handleError(error: AxiosError): Promise<AxiosError> {
    if (error && error.response) {
      const { data } = error.response;
      if (!data) return Promise.reject(data);
    }
    return Promise.reject(error);
  }

  private async getData<T>(response: AxiosResponse<T>): Promise<T> {
    return response.data;
  }
}

// export abstract class BaseRepository<TSchema extends BaseDocument> {
//   protected repository: Collection<TSchema> | null;
//   protected client: MongoClient;
//   protected collectionName: string;
//   constructor(collectionName: string) {
//     const uri = process.env.NEXT_PUBLIC_MONGODB_URL;

//     if (!uri) {
//       throw new Error("The enviroment variable NEXT_PUBLIC_MONGODB_URL is undefined");
//     }

//     this.collectionName = collectionName;
//     this.repository = new MongoClient(uri).db('mercantte').collection<TSchema>(this.collectionName) as any;
//     console.log('uri', uri)
//     this.client = new MongoClient(uri);
//   }
//   public async createLifetimeConnection() {
//     await this.client.connect();
//     this.repository = this.client.db('mercantte').collection<TSchema>(this.collectionName) as any
//   }
//   public async closeLifetimeConnection() {
//     await this.client.close();
//     this.repository = null
//   }
//   protected async getById(id: string): Promise<TSchema | undefined> {
//     if (!this.repository) return

//     const _id = new ObjectId(id);
//     const plant = await this.repository.findOne({ _id } as any);

//     return this.serialize(plant)
//   }
//   protected async getAll(filter?: Filter<TSchema>, options?: FindOptions<TSchema>): Promise<TSchema[]> {
//     const plants = await (this.repository!).find(filter as Filter<Document>, options).toArray();

//     return plants.map(x => this.serialize(x)!)
//   }
//   protected async add(data: TSchema | OptionalId<TSchema>): Promise<void> {
//     await (this.repository!).insertOne(data as any)
//   }
//   protected async delete(filter: Filter<TSchema>, options?: DeleteOptions) {
//     await (this.repository!).deleteOne(filter as Filter<Document>, options);
//   }
//   private serialize(notSerializedPlant?: WithId<Document> | WithId<TSchema> | null): TSchema | undefined {
//     if (!notSerializedPlant) return undefined;

//     return { ...notSerializedPlant, _id: notSerializedPlant._id.toString() } as TSchema;
//   }
// }