export const ProfileCard = ({ name, age, information, children, address }) => {
  return (
    <div>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
      <p>Address:{address}</p>
      {information}
      <div>{children}</div>
    </div>
  );
};
