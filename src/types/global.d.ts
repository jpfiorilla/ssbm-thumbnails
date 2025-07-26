export {};

declare global {
  interface Window {
    startgg: {
      getToken: () => Promise<string | null>;
      validateAndSave: (token: string) => Promise<boolean>;
      fetchStreamedSets: (slug: string) => Promise<any>;
    };
  }
}

interface StreamedSet {
  id: string;
  round: string;
  stream: string;
  players: [{ name: string; character: string }][];
}
