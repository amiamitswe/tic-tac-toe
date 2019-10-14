import React from 'react';

const Players = (props) => {
    return(
        <div>
            <input type="text" onChange={props.player1}/>
            <input type="text" onChange={props.player2}/>
            {props.players.length < 2 ? null : 
            <input type="submit" onClick={props.startGameNow} />
            }
            
        </div>
    );
}

export default Players;