import { Fragment, useContext } from "react";
import classes from './Header.module.css';
import Cardcontext from "./store/Cardcontext";
const Button=(props)=>{
const Cardcontexts=useContext(Cardcontext);

const numberofCardItems=Cardcontexts.items.reduce((current,item)=>{
return current + item.amount;
},0);
    return(
        <Fragment>
            <button className={classes.button} onClick={props.onClick}>
                <span>Your Cart</span>
                <span className={classes.badge}>{numberofCardItems}</span>
            </button>
        </Fragment>

    )
}
export default Button;