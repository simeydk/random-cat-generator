export async function getCatPhoto() {
  try {
    const apiUrl = "https://api.thecatapi.com/v1/images/search?size=short";
    const response = await fetch(apiUrl);
    const json = await response.json();
    const catUrl = json[0].url;
    return catUrl;
  } catch (e) {
    console.log("Error!", e);
  }
}
