import Pokedex from './Pokedex';

// THIS FILE HANDLE THE GAME LOGIC ONLY NO CSS ADDED :
function Pokegame() {

    let poks_list1 = [];
    let poks_list2 = [];
    
    const pokemons_list = [
        { id:'544', pok_name:'aaa', pok_exp:80 },
        { id:'025', pok_name:'pikachu', pok_exp:20 },
        { id:'102', pok_name:'ccc', pok_exp:15 },
        { id:'311', pok_name:'ddd', pok_exp:35 },        
        { id:'541', pok_name:'eee', pok_exp:82 },
        { id:'026', pok_name:'fff', pok_exp:22 },
        { id:'209', pok_name:'ggg', pok_exp:99 },
        { id:'078', pok_name:'hhh', pok_exp:46 }
    ]

    while (pokemons_list.length >= 2) {       
        let indx1 = Math.floor(Math.random() * pokemons_list.length)
        let indx2 = Math.floor(Math.random() * pokemons_list.length-1)

        let pok_element1 = pokemons_list.splice(indx1,1)[0];
        let pok_element2 = pokemons_list.splice(indx2,1)[0];
        
        poks_list1.push(pok_element1);
        poks_list2.push(pok_element2)
        
    }

    let exp_score1 = poks_list1.reduce( (t, x) => t + x.pok_exp, 0 );
    let exp_score2 = poks_list2.reduce( (t, x) => t + x.pok_exp, 0 );

    return(
        <div className="Pokegame">
            
            <Pokedex isWinner={exp_score1 > exp_score2} exp_score={exp_score1} poks={poks_list1}  />
            
            <br/>            

            <Pokedex isWinner={exp_score2 > exp_score1} exp_score={exp_score2} poks={poks_list2} />
        
        </div>
    )
}

export default Pokegame;