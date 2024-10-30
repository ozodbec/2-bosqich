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
