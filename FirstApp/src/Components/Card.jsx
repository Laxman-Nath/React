// import SeriesData from "../api/SeriesData";
// export const Card=(props)=>{

//   return (

//         <li >
//           <div style={{ textAlign: "center" }}>
//             <img src={props.series.img_url} alt="error" height={400} width={600} />
//           </div>
//           <p>
//             <strong style={{ color: "green", fontSize: "30px" }}>Name:</strong>
//             {props.series.name}
//           </p>
//           <p>
//             <strong style={{ color: "green", fontSize: "30px" }}>
//               Rating:
//             </strong>
//             {props.series.rating}
//           </p>
//           <p style={{ width: "600px", margin: "auto" }}>
//             <strong style={{ color: "green", fontSize: "30px" }}>
//               Summary:
//             </strong>
//             {props.series.description}
//           </p>
//           <p style={{ width: "600px", margin: "auto" }}>
//             <strong style={{ color: "green", fontSize: "30px" }}>Genre:</strong>
//             {props.series.genre.join(", ")}
//           </p>
//           <p style={{ width: "600px", margin: "auto" }}>
//             <strong style={{ color: "green", fontSize: "30px" }}>Cast:</strong>
//             {props.series.cast}
//           </p>

//           <button
//             style={{
//               textDecoration: "none",
//               fontSize: "20px",
//               margin: "5px",
//               padding: "5px",
//             }}
//           >
//             <a href={props.series.watch_url} style={{textDecoration: "none"}}>Watch now</a>
//           </button>

//           <hr style={{ height: "5px" }} />
//         </li>
//       )}

// import SeriesData from "../api/SeriesData";
// export const Card = ({ series }) => {
//   //    console.log(props);
//   return (
//     <li>
//       <div style={{ textAlign: "center" }}>
//         <img src={series.img_url} alt="error" height={400} width={600} />
//       </div>
//       <p>
//         <strong style={{ color: "green", fontSize: "30px" }}>Name:</strong>
//         {series.name}
//       </p>
//       <p>
//         <strong style={{ color: "green", fontSize: "30px" }}>Rating:</strong>
//         {series.rating}
//       </p>
//       <p style={{ width: "600px", margin: "auto" }}>
//         <strong style={{ color: "green", fontSize: "30px" }}>Summary:</strong>
//         {series.description}
//       </p>
//       <p style={{ width: "600px", margin: "auto" }}>
//         <strong style={{ color: "green", fontSize: "30px" }}>Genre:</strong>
//         {series.genre.join(", ")}
//       </p>
//       <p style={{ width: "600px", margin: "auto" }}>
//         <strong style={{ color: "green", fontSize: "30px" }}>Cast:</strong>
//         {series.cast}
//       </p>

//       <button
//         style={{
//           textDecoration: "none",
//           fontSize: "20px",
//           margin: "5px",
//           padding: "5px",
//         }}
//       >
//         <a href={series.watch_url} style={{ textDecoration: "none" }}>
//           Watch now
//         </a>
//       </button>

//       <hr style={{ height: "5px" }} />
//     </li>
//   );
// };




import styles from "../Components/NetFlix.module.css";
// import styled from 'styled-component';
import styled from "styled-components";

export const Card = (props) => {
  //    console.log(props);
  // const Button =styled.button({
  //   fontSize:"20px",
  //   padding:"5px",
  //   backgroundColor:"green",
  //   color:"white",
  //   // backgroundColor:(rating)=>(rating>=9)?"green":"red",
    

  // })

  const Button =styled.button`
    font-size:20px;
    padding:5px;
    // background-color:green;
    color:white;
     background-color:${({rating})=>(rating>=9?'green':'red')};
    

  `
  const {img_url,name,rating,description,genre,cast,watch_url}=props.series;
  return (
    <li className={styles.box}>
      <div>
        <img className={styles.image} src={img_url} alt="error"  />
      </div>
      <div className={styles.content}>
      <h1>
       Name:
        {name}
      </h1>
      <hr style={{}}/>
      {/* <p style={{ratingcolor:rating>9?"red":"green"}}>  */}
      <p className={`${styles.rating} ${rating > 9 ? styles.high : styles.avg}`}> 


        Rating:
        {rating}
      </p>
      <hr style={{}}/>
      <p >
        Summary:
        {description}
      </p>
      <hr style={{}}/>
      <p >
        Genre:
        {genre.join(", ")}
      </p>
      <hr style={{}}/>
      <p>
      Cast:
        {cast}
      </p>
      <hr style={{}}/>

      {/* <button
        style={{
          textDecoration: "none",
          fontSize: "20px",
          margin: "5px",
          padding: "5px",
        }}
      >
        <a href={watch_url} style={{ textDecoration: "none" }}>
          Watch now
        </a>
      </button> */}

      <Button rating={rating}>
      <a href={watch_url} style={{ textDecoration: "none" }}>
          Watch now
        </a>
      </Button>
      </div>

     
    </li>
  );
};

