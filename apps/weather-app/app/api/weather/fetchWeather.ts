export async function fetchWeather(location: string): Promise<any> {
  const apiKey = process.env.API_KEY;

  if (!apiKey) throw new Error("Missing API_KEY env variable");

  // from https://www.visualcrossing.com/support/weather-api-ai-code-generator/
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
    location
  )}?key=${apiKey}&unitGroup=uk&contentType=json`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Error fetching weather data:", error);
    throw new Error(error);
  }
}
