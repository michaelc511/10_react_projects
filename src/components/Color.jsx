const Color = ({c1,c3,  clicked, c2}) => {
  let newColor = ("rgb(" + c1 +", "+ c2 +", "+ c3 +")");

  const outputstyle = {
	textAlign: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'black',
  paddingTop: '20vw'
  };

  const divstyle = {
  margin: '40px auto',
  backgroundColor: newColor,
  textAlign: 'center',
  width: '50vw',
  height: '50vw',
  borderRadius: '100%',
  display: 'inline-block'
  };

  return (  
    <div
      style={divstyle}
      onClick={clicked}
    >

      <h1 style={outputstyle}>{newColor}</h1>
    </div>
  );
}
 
export default Color;