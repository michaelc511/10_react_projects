const FruitFact = ({fruit, fact}) => {
  const outputstyle = {
    textAlign: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
    };
  
    const divstyle = {
    width: '150px',
    height: '150px',
    border: '4px solid white',
    display: 'inline-block',
    margin: '10px',
    padding: '10px'
    };

    
  return (
    <div style={divstyle}>
      <h2 style={outputstyle}>{fruit}</h2>
      <p>{fact}</p>
    </div>
   );
}
 
export default FruitFact;