
export {}

declare global {
  interface DevlogContext extends Omit<KoaContext, 'request'> {
    request: {
      body: {
        markdown: string,
        title: string,
        id: string,
      }
    }
  }
}