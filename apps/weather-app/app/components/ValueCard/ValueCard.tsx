import styles from "./ValueCard.module.scss";

export interface ValueCardProps {
  title: string;
  value?: string | null;
  /** If needed with the grey colour on the degrees C */
  //   isTemp: boolean;
}

/** Formats key-value pairs on cards, for single-value fields of data */
export default function ValueCard({ title, value = "-" }: ValueCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
}
