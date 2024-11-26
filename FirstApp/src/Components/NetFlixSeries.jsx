import SeriesData from "../api/SeriesData";
import { Card } from "./Card";
import styles from "../Components/NetFlix.module.css";
// export const NetFlixSeries = () => { // this is named export and it must be imported using {} and while importing name should be equal to component name
export const NetFlixSeries = () => {
  const seriesData = SeriesData();
  return (
    <>
      <h1 style={{textAlign:"center",fontSize:"50px"}}>Best webseries on netflix</h1>
      <hr style={{height:"5px"}}/>
      <ul className={styles.main}>
        {seriesData.map((series) => (
          <Card key={series.id} series={series} />
        ))}
      </ul>
    </>
  );
};
