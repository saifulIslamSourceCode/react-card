import { type JSX } from "react";
import style from './Button.module.css'

const Button = (): JSX.Element => {
    return(
        <button className={style.button}>Click Me</button>
    )
}

export default Button;