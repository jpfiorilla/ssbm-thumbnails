function extractEventSlug(url: string): string | null {
  const match = url.match(/tournament\/([^/]+)\/event\/([^/]+)/);
  return match ? `tournament/${match[1]}/event/${match[2]}` : null;
}

export default extractEventSlug;
