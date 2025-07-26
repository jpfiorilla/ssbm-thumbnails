export async function validateToken(token: string): Promise<boolean> {
  return await window.startgg.validateToken(token);
}

export async function fetchStreamedSets(slug: string, token: string) {
  return await window.startgg.getStreamedSets(slug, token);
}
