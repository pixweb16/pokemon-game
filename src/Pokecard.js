import './Pokecard.css'

function addZero(rNum) {
    let x = rNum.toString();
    while (x.length < 3 ) {
        x = '0'.concat(x);
    }
    return x
}

function Pokecard(props) {

    // default props :
    const id = props.id;
    const name = props.pok_name ? props.pok_name : "pokemon name";
    const imgAvatar = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
    const pok_exp = props.pok_exp;
    
    return (
        <div id={id} className="Pokecard">
            <p className="Pokecard-name">{name}</p>
            <img className="Pokecard-img" src={imgAvatar} alt="pokemon avatar"/>
            <p className='Pokecard-data'>Type</p>
            <p className='Pokecard-data'>Experience <span>{pok_exp}</span></p>
        </div>
    )
}

export default Pokecard;