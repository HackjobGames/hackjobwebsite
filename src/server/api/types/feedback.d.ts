export {}

declare global {
  export type FeedbackContext = KoaContext & {
    request: {
      body: {
        id: string,
        content: string,
        token: string
      }
    }
  }
}