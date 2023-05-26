const CardCont = ({ cProps:{jay}, spaceUp }) => {
  return (
    <div className="cardP">
      <img
        src={jay.sprites["front_default"]}
        alt={spaceUp(jay.name)}
        style={{ height: "200", aspectRatio: "1/1" }}
      />
      <div>
        <h2>{spaceUp(jay.name)}</h2>
        <p>Abilities:</p>
        <ul>
          {jay.abilities.map(({ability}, i) => (
            <li key={i}>{spaceUp(ability.name)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function Cards({pokeList, spaceUp}) {
  return (
    <div className="cardsContainer">
      {
         pokeList.map((data) => {
          return (<CardCont spaceUp={spaceUp} cProps={data} key={data.id} />
          );
        })
      }
    </div>
  )
 
}
