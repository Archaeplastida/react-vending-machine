import React from "react";
import { Link } from "react-router-dom";
import itemsList from "./listOfItems";

function VendingMachine() {
    return (
        <div>
            <div className="vending-machine-message">
                <p>What do you want?</p>
            </div>
            <div className="vending-machine-items">
                {itemsList.map(item => <Link to={item.name}>{item.displayName}</Link>)}
            </div>
        </div>
    )
}

export default VendingMachine;