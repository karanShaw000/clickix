export interface Url {
  _id: string,
  originalUrl: string,
  hashId: string,
  createdAt: Date,
  clickCount: number,
}

export interface ApiResponse<T = undefined> {
  message: string,
  data?: T
}


