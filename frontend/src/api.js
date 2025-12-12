export const getNames = async () => {
  const response = await fetch("https://project-revo.onrender.com/api/names");

  if (!response.ok) {
    throw new Error("Failed to fetch names");
  }

  return response.json();
};

export const submitName = async (name) => {
  const response = await fetch("https://project-revo.onrender.com/api/names", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });

  if (!response.ok) {
    throw new Error("Failed to submit name");
  }

  return response.json();
};
