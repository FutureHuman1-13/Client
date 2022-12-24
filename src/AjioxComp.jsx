import { useState,useEffect } from "react";
import axios from "axios";
//only you have to import this component(AjioxComp) in App.js

const AjioxComp = ()=>{
    const [num,setNum]=useState();
    const [name,setName]=useState();
    const [moves,setMoves]=useState();
    const [state,setState]=useState()
        useEffect(()=>{
            const getData = async()=>{
                // const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
                const res = await axios.get("http://localhost:8000/") 
                // const res = await fetch("http://localhost:8000");
                console.log(res.data);
                // setName(res.data.name)
                // setMoves(res.data.moves.length)
                setState(res.data);
            }
            getData();
        });

    return(
        <> 
            <h1>You Choose   <span style={{color:"red"}}>{state}{num} value </span></h1>
            <h1>My Name is <span style={{color:"red"}}>{name}</span> </h1>
            <h1>I have <span style={{color:"red"}}>{moves} moves</span> </h1>

            <select value={num} onChange={(event)=>{
                    setNum(event.target.value)
            }}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </>
    )
}
export default AjioxComp;