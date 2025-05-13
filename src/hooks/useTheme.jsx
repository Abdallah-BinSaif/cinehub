import {useContext} from "react";
import {ThemeContext} from "../provider/ThemeProvider.jsx";

const useTheme = () => {
    return useContext(ThemeContext)
};

export default useTheme;