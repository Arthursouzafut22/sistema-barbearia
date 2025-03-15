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

body * {
     font-family: "Inter", sans-serif;
}

label{
    display: block;
    color: ${Colors.fontColorWhite};
    margin-bottom:8px  !important;
}

*, :after, :before {
    box-sizing: border-box;
    border: 0 solid #e5e7eb;
}

`;
