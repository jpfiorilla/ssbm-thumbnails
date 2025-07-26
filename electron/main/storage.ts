import keytar from "keytar";

const SERVICE_NAME = "ssbm-thumbnails";
const ACCOUNT_NAME = "startgg-token";

export async function saveToken(token: string) {
  await keytar.setPassword(SERVICE_NAME, ACCOUNT_NAME, token);
}

export async function getToken(): Promise<string | null> {
  return await keytar.getPassword(SERVICE_NAME, ACCOUNT_NAME);
}

export async function deleteToken() {
  await keytar.deletePassword(SERVICE_NAME, ACCOUNT_NAME);
}
