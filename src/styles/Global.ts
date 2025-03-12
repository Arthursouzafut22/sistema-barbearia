import { createGlobalStyle } from "styled-components";
import { Colors } from "./Colors";

export const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: Arial, Helvetica, sans-serif;
    background-color: ${Colors.CharcoalBlack};

}


`;
