import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VendingMachine from "./VendingMachine";
import VendingItems from "./listOfItems";
import Display from "./Display";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<VendingMachine />} />
                    {VendingItems.map(item => <Route exact path={item.name} element={<Display displayName={item.displayName} description={item.description} imgURL={item.imgURL} />} />)}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;