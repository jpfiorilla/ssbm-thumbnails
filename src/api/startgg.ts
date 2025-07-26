export async function validateAndSave(token: string): Promise<boolean> {
  return await window.startgg.validateAndSave(token);
}

export async function fetchStreamedSets(slug: string) {
  return await window.startgg.fetchStreamedSets(slug);
}
