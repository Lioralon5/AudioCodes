import { createContext, useState } from "react";

const SuiteContext = createContext({
  suiteCases: [],
  totalSuiteCases: 0,
});

function SuiteContextProvider(props) {
    const [userSuiteCases, setUserSuiteCases] = useState();

    const context = {
        suiteCases: userSuiteCases,
        totalSuiteCases: userSuiteCases.length,
    };

    return <SuiteContext.Provider value={context}>
        {props.children}
    </SuiteContext.Provider>
}