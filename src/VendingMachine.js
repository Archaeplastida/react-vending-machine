import React from "react";
import { Link } from "react-router-dom";
import itemsList from "./listOfItems";

function VendingMachine() {
    return (
        <div>
            <h1>Vending Machine</h1>
            <img style={{height: "200px"}} src="https://www.betson.com/wp-content/uploads/2019/07/evoke-6-vending-machine.png"></img>
            <div className="vending-machine-message">
                <p>What do you want?</p>
            </div>
            <ul className="vending-machine-items">
                {itemsList.map(item => <li><Link to={item.name}>{item.displayName}</Link></li>)}
            </ul>
        </div>
    )
}

export default VendingMachine;