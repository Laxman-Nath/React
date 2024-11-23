const App = () => {
  return <div>
    <NetFlixSeries/>
    <NetFlixSeries/>
    <NetFlixSeries/>
    <NetFlixSeries/>
    <NetFlixSeries/>
  </div>
};

export default App;

export const NetFlixSeries = () => {
  return (
    <div style={{textAlign:"center",fontSize:"20px"}}>
      <div style={{textAlign:"center"}}>
        <img src="1.jpg" alt="error" height={400} width={600} />
      </div>
      <p><strong>Name:</strong>Queen of tears</p>
      <p><strong>Rating:8.9</strong></p>
      <p>
       <strong>Summary:</strong> Queen of Tears (Korean: 눈물의 여왕) is a 2024 South Korean
        television series written by Park Ji-eun, co-directed by Jang Young-woo
        [ko] and Kim Hee-won, and starring Kim Soo-hyun, Kim Ji-won, Park
        Sung-hoon, Kwak Dong-yeon, and Lee Joo-bin. The series depicts the story
        of a married couple in a crisis. It aired on tvN from March 9, to April
        28, 2024, every Saturday and Sunday at 21:20 (KST). It is also available
        for streaming on TVING in South Korea, and on Netflix in selected
        regions. Queen of Tears reached a nationwide rating of 24.850% for its
        final episode and became the highest-rated tvN series, surpassing Crash
        Landing on You.[4] It also became the third highest-rated series in
        Korean cable television history for viewership ratings and the second
        highest by number of viewers.
      </p>
      <hr/>
    </div>
  );
};
