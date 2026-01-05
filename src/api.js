export const URL = "https://dogsapi.origamid.dev/json";

export function TOKEN_POST(body) {
  return {
    endpoint: `${URL}/jwt-auth/v1/token`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}
