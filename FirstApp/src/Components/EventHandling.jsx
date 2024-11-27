export const EventHandling = () => {
  const handleButtonClick = (event) => {
    console.log(event);
    console.log(event.target);
    alert("Welcome ");
  };
  const handleButtonClick2 = (firstName,event) => {
    console.log(event);
    console.log(event.target);
    alert(`Welcome ${firstName}`);
  };
  return (
    <div className="flex  w-full h-full justify-center mt-5">
      <button
        className="border-2 border-black m-auto text-2xl rounded-md "
        onClick={handleButtonClick}
      >
        Click me one
      </button>
      <button
        className="border-2 border-black m-auto text-2xl rounded-md "
        onClick={() => handleButtonClick2("laxman",event)}
      >
        Click me two
      </button>
      <button
        className="border-2 border-black m-auto text-2xl rounded-md "
        onClick={()=>{alert("You have clicked me!")}}
      >
        Click me three
      </button>
    </div>
  );
};
