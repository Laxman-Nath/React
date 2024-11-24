
// export const NetFlixSeries = () => { // this is named export and it must be imported using {} and while importing name should be equal to component name
 const NetFlixSeries = () => { 
    const name = "Queen of tears";
    const rating = 8.9;
    const src = "1.jpg";
    const genre=()=>{return "romance"}
    const age=16;
    const canWatch=()=>{
      if(age>=18) return "Watch Now";
      return "Not available";
    }
    const summary =
      "Queen of Tears (Korean: 눈물의 여왕) is a 2024 " +
      "South Korean television series written by Park Ji-eun, co-directed by " +
      " Jang Young-woo [ko] and Kim Hee-won, and starring Kim Soo-hyun, Kim " +
      "  Ji-won, Park Sung-hoon, Kwak Dong-yeon, and Lee Joo-bin. The series " +
      "   depicts the story of a married couple in a crisis. It aired on tvN from " +
      "   March 9, to April 28, 2024, every Saturday and Sunday at 21:20 (KST). It " +
      " is also available for streaming on TVING in South Korea, and on Netflix " +
      "   in selected regions. Queen of Tears reached a nationwide rating of " +
      "  24.850% for its final episode and became the highest-rated tvN series, " +
      "  surpassing Crash Landing on You.[4] It also became the third " +
      "  highest-rated series in Korean cable television history for viewership " +
      " ratings and the second highest by number of viewers.";
    return (
      <div
        style={{
          textAlign: "center",
          fontSize: "20px",
          marginBottom: "10px",
          marginTop: "5px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <img src={src} alt="error" height={400} width={600} />
        </div>
  
        <p>
          <strong style={{ color: "green", fontSize: "30px" }}>Name:</strong>
          {name}
        </p>
        <p>
          <strong style={{ color: "green", fontSize: "30px" }}>Rating:</strong>
          {/* {rating} */}
          {8+0.2}
        </p>
        <p style={{ width: "600px", margin: "auto" }}>
          <strong style={{ color: "green", fontSize: "30px" }}>Summary:</strong>
          {summary}
        </p>
        <p style={{ width: "600px", margin: "auto" }}>
          <strong style={{ color: "green", fontSize: "30px" }}>Genre:</strong>
          {genre()}
        </p>
        {/* <button style={{marginBottom:"5px",fontSize:"20px",padding:"5px",marginTop:"5px",color:"white",backgroundColor:"green",outline:"none",borderRadius:"10px"}}>{age>=18?"Watch Now":"Not available"}</button> */}
        <button style={{marginBottom:"5px",fontSize:"20px",padding:"5px",marginTop:"5px",color:"white",backgroundColor:"green",outline:"none",borderRadius:"10px"}}>{canWatch()}</button>
        <hr style={{ height: "5px", backgroundColor: "black" }} />
      </div>
    );
  };

 export default NetFlixSeries;  // default export can be make only one inside component and should be imported without using {} and can be imported by any name

 export const Footer=()=>{
    return <div style={{width:"100%",textAlign:"center",fontSize:"20px",marginTop:"10px"}}>
        CopyRight@2024
    </div>
 }
  