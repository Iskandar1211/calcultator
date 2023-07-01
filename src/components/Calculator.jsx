import React, { useState } from 'react'
import classes from './Calculator.module.css'
import { HiOutlineBackspace } from 'react-icons/hi'

export const Calculator = () => {
    const [result, setResult] = useState('');

    const onClick = (e) => {
        setResult(result + e.target.name);
    };

    const calculate = () => {
        try {
            const res = eval(result).toString()
            setResult(res);
        } catch (error) {
            setResult('Error');
        }
    };

    const clear = () => {
        setResult('');
    };
    const backSpace = () => {
        const res = result.slice(0, -1)
        setResult(res);
    }

    return (
        <div className={classes.calculator}>
            <div className={classes.containerInput}>
                <input type="text" placeholder='0' readOnly value={result} />
            </div>
            <div className={classes.bottons}>
                <button onClick={clear} className={classes.buttonGray}>C</button>
                <button name='%' className={classes.buttonGray}>%</button>
                <button name='backspace' onClick={backSpace} className={classes.buttonGray}><HiOutlineBackspace /></button>
                <button name='/' onClick={onClick} className={classes.buttonGray}>&#247;</button>
                <button name='7' onClick={onClick} className={classes.buttonWhite}>7</button>
                <button name='8' onClick={onClick} className={classes.buttonWhite}>8</button>
                <button name='9' onClick={onClick} className={classes.buttonWhite}>9</button>
                <button name='*' onClick={onClick} className={classes.buttonGray}>x</button>
                <button name='4' onClick={onClick} className={classes.buttonWhite}>4</button>
                <button name='5' onClick={onClick} className={classes.buttonWhite}>5</button>
                <button name='6' onClick={onClick} className={classes.buttonWhite}>6</button>
                <button name='-' onClick={onClick} className={classes.buttonGray}>-</button>
                <button name='1' onClick={onClick} className={classes.buttonWhite}>1</button>
                <button name='2' onClick={onClick} className={classes.buttonWhite}>2</button>
                <button name='3' onClick={onClick} className={classes.buttonWhite}>3</button>
                <button name='+' onClick={onClick} className={classes.buttonGray}>+</button>
                <button name='00' onClick={onClick} className={classes.buttonWhite}>00</button>
                <button name='0' onClick={onClick} className={classes.buttonWhite}>0</button>
                <button name='.' onClick={onClick} className={classes.buttonWhite}>,</button>
                <button onClick={calculate} className={classes.buttonOrange}>=</button>
            </div>
        </div>
    )
}
