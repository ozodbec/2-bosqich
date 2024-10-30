const mainUrl = "https://json-api.uz/api/project/fn23";

export const fetchData = async () => {
  try {
    const response = await fetch(mainUrl + "/articles");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export async function register(data) {
  try {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      return await res.json();
    } else if (res.status === 400) {
      throw new Error("Check your password or username.");
    } else {
      throw new Error("Something went wrong.");
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred.");
  }
}
export async function login(data) {
  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      return await res.json();
    } else if (res.status === 400) {
      throw new Error("Check your password or username.");
    } else {
      throw new Error("Something went wrong.");
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred.");
  }
}
// export async function getArticles() {
//   try {
//     const res = await fetch(`${BASE_URL}/articles`, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (res.ok) {
//       return await res.json();
//     } else if (res.status == 403) {
//       throw new Error(403);
//     } else {
//       throw new Error("Something went wrong.");
//     }
//   } catch (error) {
//     throw new Error(error.message || "An unexpected error occurred.");
//   }
// }