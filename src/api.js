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

export function USER_GET(token) {
  return {
    endpoint: `${URL}/api/user`,
    options: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}

export function TOKEN_VALIDATE_POST(token) {
  return {
    endpoint: `${URL}/jwt-auth/v1/token/validate`,
    options: {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}

export function USER_POST(body) {
  return {
    endpoint: `${URL}/api/user`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function PHOTO_POST(formData, token) {
  return {
    endpoint: `${URL}/api/photo`,
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    },
  };
}

// query: ?_total=1&_page=1&_user=6
export function PHOTO_GET(id) {
  return {
    endpoint: {
      photos: `${URL}/api/photo`,
      photos_query: `${URL}/api/photo/?_total=9&_page=1&_user=${id}`,
      photo: `${URL}/api/photo/:id`,
    },
    options: {
      method: "GET",
    },
  };
}
