import SeriesData from "../api/SeriesData";
export const Card=(props)=>{
    
  return (
    
        <li >
          <div style={{ textAlign: "center" }}>
            <img src={props.series.img_url} alt="error" height={400} width={600} />
          </div>
          <p>
            <strong style={{ color: "green", fontSize: "30px" }}>Name:</strong>
            {props.series.name}
          </p>
          <p>
            <strong style={{ color: "green", fontSize: "30px" }}>
              Rating:
            </strong>
            {props.series.rating}
          </p>
          <p style={{ width: "600px", margin: "auto" }}>
            <strong style={{ color: "green", fontSize: "30px" }}>
              Summary:
            </strong>
            {props.series.description}
          </p>
          <p style={{ width: "600px", margin: "auto" }}>
            <strong style={{ color: "green", fontSize: "30px" }}>Genre:</strong>
            {props.series.genre.join(", ")}
          </p>
          <p style={{ width: "600px", margin: "auto" }}>
            <strong style={{ color: "green", fontSize: "30px" }}>Cast:</strong>
            {props.series.cast}
          </p>

          <button
            style={{
              textDecoration: "none",
              fontSize: "20px",
              margin: "5px",
              padding: "5px",
            }}
          >
            <a href={props.series.watch_url} style={{textDecoration: "none"}}>Watch now</a>
          </button>

          <hr style={{ height: "5px" }} />
        </li>
      )}
   
  
