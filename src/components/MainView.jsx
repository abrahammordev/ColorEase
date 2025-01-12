import React from "react";

import Title from "./Title";
import MainFunctionalities from "./MainFunctionalities";

//Main view component that contains the title and main functionalities of the app.

function MainView({ onUpdateColors }) {
    return (
        <div>
            <Title />
            <MainFunctionalities onUpdateColors={onUpdateColors} />
        </div>
    );
}

export default MainView;