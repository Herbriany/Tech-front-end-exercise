export function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    // Server-side validation error occurred.
    response.text().then(error => {
      throw new Error(error);
    })
  }
  throw new Error("Network response was not ok.");
}

export function handleError(error) {
  console.error("API call failed: " + error.message);
  throw error;
}
