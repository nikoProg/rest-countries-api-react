import { createContext,useState } from "react";

const ModeContext = createContext();


export const ModeProvider = ({children}) => {
    const [mode, setMode] = useState(false);

    return(
        <ModeContext.Provider value={{mode, setMode}}>
            {children}
        </ModeContext.Provider>
    )
};

export default ModeContext;