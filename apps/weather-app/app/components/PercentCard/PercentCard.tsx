import styles from "./PercentCard.module.scss";

interface PercentCardProps {
  titleText: string;
  percentage: number;
  color: "green" | "yellow";
}

export default function PercentageCard({
  titleText,
  percentage,
  color,
}: PercentCardProps) {
  return (
    <div className={styles.percentageCard}>
      <h3>{titleText}</h3>
      <span>{percentage}%</span>
      <div className={styles.meterWrapper} aria-hidden>
        <span style={{ gridColumn: "span 2", placeSelf: "flex-end" }}>%</span>
        <span className={styles.meterTrack}>
          <span
            className={`${styles[`${color}Meter`]} ${styles.meter}`}
            style={{ width: `${percentage}%` }}
          />
        </span>
        <span>0</span>
        <span style={{ placeSelf: "flex-end" }}>100</span>
      </div>
    </div>
  );
}
