import { WeatherIconSlug } from "@/app/api/weather/schema";

interface WeatherIconProps {
  icon: WeatherIconSlug;
  /** Height and width of the icon */
  size?: string;
}

export default function WeatherIcon({ icon, size }: WeatherIconProps) {
  return (
    <div
      aria-label={icon.replaceAll("-", " ")}
      style={{
        width: size,
        height: size,
        aspectRatio: "1 / 1",
        backgroundColor: "grey",
        borderRadius: "20px",
        textAlign: "center",
        padding: "20px",
      }}
    >
      PLACEHOLDER for icon: <pre>{icon}</pre>
      {/* <Image></Image> */}
    </div>
  );
}
