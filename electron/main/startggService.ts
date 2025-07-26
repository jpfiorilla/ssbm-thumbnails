import { GraphQLClient, gql } from "graphql-request";

const API_URL = "https://api.start.gg/gql/alpha";

export async function validateStartGGToken(token: string): Promise<boolean> {
  const client = new GraphQLClient(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });

  const query = gql`
    query {
      currentUser {
        id
        slug
      }
    }
  `;

  try {
    const data = (await client.request(query)) as any;
    return !!data.currentUser;
  } catch (error) {
    console.error("Start.gg API error:", error);
    return false;
  }
}
export async function getStreamedSets(eventSlug: string, token: string) {
  const client = new GraphQLClient(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });

  console.log("Fetching sets for slug:", JSON.stringify(eventSlug));
  console.log("Token present:", !!token);

  const query = gql`
    query EventSets($slug: String!) {
      event(slug: $slug) {
        id
        name
        sets(page: 1, perPage: 20, sortType: STANDARD) {
          nodes {
            id
            fullRoundText
            stream {
              streamName
            }
            slots {
              entrant {
                name
              }
            }
          }
        }
      }
    }
  `;

  const data = (await client.request(query, { slug: eventSlug })) as any;
  return data.event.sets.nodes.map((node: any) => ({
    id: node.id,
    round: node.fullRoundText,
    stream: node.stream?.streamName || "",
    players: node.slots.map((slot: any) => slot.entrant?.name || ""),
  }));
}
