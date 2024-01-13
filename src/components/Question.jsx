const Question = ({ click, question }) => {
  const style = {
    border: '4px solid white',
    textAlign: 'center',
    margin: '50px',
  };

  return (
    <div
      onClick={click}
      style={style}>
      <p>{question}</p>
    </div>
  );
}

export default Question;