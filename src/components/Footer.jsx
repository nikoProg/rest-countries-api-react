import React, { useContext } from "react";
import ModeContext from "../context/ModeContext";

const Footer = () => {
    const { mode } = useContext(ModeContext);
    return (
        <footer>
            <div
                className={`${mode ? "bg-white" : "bg-dark-darkBlue"} ${mode ? "text-dark-veryDarkBlue" : "text-white"
                    } fixed bottom-0 left-0 right-0 font-[500] text-center py-[20px]`}
            >
                Challenge by Frontend Mentor. Coded by <a href="https://github.com/nikoProg" className={`font-bold text-blue-600 hover:text-red-600`}>nikoProg</a>.
            </div>
        </footer>
    );
}
 
export default Footer;