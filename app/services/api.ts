const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const searchItems = async (query: string, limit: number = 4) => {
  const url = `${BASE_URL}/items?q=${encodeURIComponent(query)}&limit=${limit}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }

  return response.json();
};

export const getItemById = async (id: string) => {
  const url = `${BASE_URL}/items/${id}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }

  const data = await response.json();

  if (!data.item) {
    throw new Error(
      `Incomplete data received from API for item with ID: ${id}`
    );
  }

  return data;
};
