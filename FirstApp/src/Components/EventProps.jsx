export const EventProps = () => {
  const handleClick = (firstName) => {
    alert(`Welcome ${firstName}`);
  };
  return (
    <WelcomeUser
      onClick={() => handleClick("Laxman")}
      onMouseHover={() => alert("You have hovered mouse!")}
    />
  );
};

export const WelcomeUser = ({ onClick, onMouseHover }) => {
  return (
    <>
      <div className="flex  w-full h-full justify-center mt-5">
        <button
          className="border-2 border-black m-auto text-2xl rounded-md "
          onClick={onClick}
        >
          Click me one
        </button>
        <button
          className="border-2 border-black m-auto text-2xl rounded-md "
          onMouseEnter={onMouseHover}
        >
          Click me tww
        </button>
        <button
          className="border-2 border-black m-auto text-2xl rounded-md "
          onClick={() => {
            alert("You have clicked me!");
          }}
        >
          Click me three
        </button>
      </div>
    </>
  );
};
