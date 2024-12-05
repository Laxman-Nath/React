/* eslint-disable react/prop-types */
export const Parent = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center bg-black text-white">
      <h1>Hello i m parent</h1>
      <Child data="laxman"/>
    </div>
  );
};

export const Child = ({data}) => {
  return (
    <>
      <h1>Hello I'm child!</h1>
      <GrandChild data={data}/>
    </>
  );
};

export const GrandChild = ({data}) => {
  return (
    <>
      <h1>Hello I'm grand child!</h1>
      <GrandGrandChild data={data}/>
    </>
  );
};
export const GrandGrandChild = ({data}) => {
  return (
    <>
      <h1>Hello I'm grand grand child! My name is {data}</h1>
      
    </>
  );
};
