import { NextResponse } from "next/server";
import { fetchWeather } from "./fetchWeather";

// ensure stale data is refetched after 5 minutes
export const revalidate = 300;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get("location");

  if (!location) {
    return NextResponse.json(
      { error: "Location query parameter missing" },
      { status: 400 }
    );
  }

  try {
    const data = await fetchWeather(location);
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message ?? "Failed to fetch weather" },
      { status: 500 }
    );
  }
}
