import styles from "./AppView.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import CurrentDaySummary from "../CurrentDaySummary/CurrentDaySummary";
import TemperatureUnitSelector from "../TemperatureUnitSelector/TemperatureUnitSelector";
import DashboardDetails from "../DashboardDetails/DashboardDetails";

export const AppView = () => {
  return (
    <main className={styles.layout}>
      <div className={styles.sidebar}>
        <SearchBar />
        <CurrentDaySummary />
      </div>
      <div className={styles.dashboardWrapper}>
        <div className={styles.dashboard}>
          <TemperatureUnitSelector />
          <DashboardDetails />
        </div>
      </div>
    </main>
  );
};
