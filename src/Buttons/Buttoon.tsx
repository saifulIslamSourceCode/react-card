import { type JSX } from "react";
// import style from './Button.module.css'


const Button = (): JSX.Element => {
    //inline style using object
    const styles = {
            padding: "15px 20px",
            borderRadius: "5px",
            margin: "5px",
            color: "white",
            backgroundColor: "rgb(0, 100, 158)",
            border: "0px",
            cursor: "pointer",
    }

return (
    <button style={styles}>Click Me</button>
)
}

export default Button;