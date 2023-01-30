export class AppError {
  #message: string
  #statusCode: number

  constructor(message: string, statusCode = 400) {
    this.#message = message
    this.#statusCode = statusCode
  }

  public get message(): string {
    return this.#message
  }

  public get statusCode(): number {
    return this.#statusCode
  }
}
