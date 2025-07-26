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

  const query = gql`
    query EventStreamQueue($slug: String!) {
      event(slug: $slug) {
        name
        streamQueue {
          stream {
            streamName
          }
          sets {
            id
            fullRoundText
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
  return data.event.streamQueue;
}
