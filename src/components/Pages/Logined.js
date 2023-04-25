const Logined = (props) => {
  const fullname = props.name;
  return (
    <div>
      <h1>Logined</h1>
      <p>{fullname}</p>
    </div>
  );
};

export default Logined;
