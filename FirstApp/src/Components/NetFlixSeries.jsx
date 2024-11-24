import SeriesData from "../api/SeriesData";
import { Card } from "./Card";
// export const NetFlixSeries = () => { // this is named export and it must be imported using {} and while importing name should be equal to component name
export const NetFlixSeries = () => {
  const seriesData = SeriesData();
  return (
    <ul style={{ textAlign: "center", fontSize: "20px" }}>
      {seriesData.map((series) => (
        <Card key={series.id} series={series} />
      ))}
    </ul>
  );
};
