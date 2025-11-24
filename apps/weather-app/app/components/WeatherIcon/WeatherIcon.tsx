import { WeatherIconSlug } from "@/app/api/weather/schema";
import { iconFileFromSlug } from "./iconLookup";

interface WeatherIconProps {
  icon: WeatherIconSlug;
  /** Height and width of the icon */
  size?: string;
}

export default function WeatherIcon({ icon, size = "100%" }: WeatherIconProps) {
  const alt = `A ${icon.replaceAll("-", " ")} weather icon`;
  const src = iconFileFromSlug(icon);
  return (
    <div
      style={{
        width: size,
        aspectRatio: "1 / 1",
        height: "auto",
      }}
    >
      <img alt={alt} src={src} style={{ width: "100%", display: "block" }} />
    </div>
  );
}
