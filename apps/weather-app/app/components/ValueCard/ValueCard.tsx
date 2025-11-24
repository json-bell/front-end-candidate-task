import styles from "./ValueCard.module.scss";

export interface ValueCardProps {
  title: string;
  value?: string | null;
  /**The grey colour displayed for the °C */
  greyUnit?: string;
}

/** Server-side component that formats key-value pairs on cards, for single-value fields of data */
export default function ValueCard({
  title,
  value = "-",
  greyUnit,
}: ValueCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className={styles.value}>
        {value}
        {greyUnit && <span className={styles.greyUnit}>{greyUnit}</span>}
      </div>
    </div>
  );
}
