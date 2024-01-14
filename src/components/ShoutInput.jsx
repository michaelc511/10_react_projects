const ShoutInput = ({changed}) => {
  const inputstyle = {
    textAlign: 'center',
    fontSize: '20px',
    margin: '50px',
    width: '40vw',
  };

  const divstyle = {
    display: 'inline-block',
  };

  return (
    <div style={divstyle}>
      <input type='text'
        style={inputstyle}
        onChange={changed}
    ></input>
    </div>
  );
}

export default ShoutInput;