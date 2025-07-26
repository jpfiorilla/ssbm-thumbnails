export {};

declare global {
  interface Window {
    startgg: {
      validateToken: (token: string) => Promise<boolean>;
      getStreamedSets: (slug: string, token: string) => Promise<any>;
    };
  }
}
