import './Pokedex.css';
import Pokecard from './Pokecard';

function Pokedex(props) {
    let isWinner = props.isWinner;
    let exp_score = props.exp_score;
    let pokemons_list = props.poks;
    let title_css = isWinner ? 'Pokedex-winner' : 'Pokedex-loser';
    let score_css = isWinner ? 'Pokedex-winner-score' : 'Pokedex-loser-score';
    console.log(isWinner);
    console.log(title_css);

    return (
        <div className="Pokedex">
            
            {/* TITLE & SCORE : */}
            <p className={title_css} >{ isWinner ? 'winner' : 'loser' }</p>
            <p className={score_css} >Score : {exp_score}</p>

            {/* CARDS : */}
            <div className='Pokedex-divCards'>
                { pokemons_list.map( pok => 
                    <Pokecard id={pok.id} pok_name={pok.pok_name} pok_exp={pok.pok_exp} />
                )}
            </div>
        </div>
    )
}

export default Pokedex;