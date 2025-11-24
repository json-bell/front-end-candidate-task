import styles from "./PercentCard.module.scss";

export interface PercentCardProps {
  titleText: string;
  percentage: number | null;
  color: "green" | "yellow";
}

/** A server card component that renders data passed to it,
 * rendering the percentage as a meter with the color provided
 */
export default function PercentageCard({
  titleText,
  percentage,
  color,
}: PercentCardProps) {
  return (
    <div className={styles.percentageCard}>
      <h2 className={styles.cardTitle}>{titleText}</h2>
      <span className={styles.value}>{percentage ?? "--"}%</span>
      <div className={styles.meterWrapper} aria-hidden>
        <span style={{ gridColumn: "span 2", placeSelf: "flex-end" }}>%</span>
        <span className={styles.meterTrack}>
          <span
            className={`${styles[`${color}Meter`]} ${styles.meter}`}
            style={{ width: `${percentage ?? 0}%` }}
          />
        </span>
        <span>0</span>
        <span style={{ placeSelf: "flex-end" }}>100</span>
      </div>
    </div>
  );
}
