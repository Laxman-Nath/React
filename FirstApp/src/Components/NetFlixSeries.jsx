import SeriesData from "../api/SeriesData";
// export const NetFlixSeries = () => { // this is named export and it must be imported using {} and while importing name should be equal to component name
export const NetFlixSeries = () => {
  const seriesData = SeriesData();
  return (
    <ul style={{ textAlign: "center", fontSize: "20px" }}>
      {seriesData.map((series) => (
        <li key={series.id}>
          <div style={{ textAlign: "center" }}>
            <img src={series.img_url} alt="error" height={400} width={600} />
          </div>
          <p>
            <strong style={{ color: "green", fontSize: "30px" }}>Name:</strong>
            {series.name}
          </p>
          <p>
            <strong style={{ color: "green", fontSize: "30px" }}>
              Rating:
            </strong>
            {series.rating}
          </p>
          <p style={{ width: "600px", margin: "auto" }}>
            <strong style={{ color: "green", fontSize: "30px" }}>
              Summary:
            </strong>
            {series.description}
          </p>
          <p style={{ width: "600px", margin: "auto" }}>
            <strong style={{ color: "green", fontSize: "30px" }}>Genre:</strong>
            {series.genre.join(", ")}
          </p>
          <p style={{ width: "600px", margin: "auto" }}>
            <strong style={{ color: "green", fontSize: "30px" }}>Cast:</strong>
            {series.cast}
          </p>

          <button
            style={{
              textDecoration: "none",
              fontSize: "20px",
              margin: "5px",
              padding: "5px",
            }}
          >
            <a href={series.watch_url} style={{textDecoration: "none"}}>Watch now</a>
          </button>

          <hr style={{ height: "5px" }} />
        </li>
      ))}
    </ul>
  );
};
