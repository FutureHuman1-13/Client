import { useEffect } from "react";
import { useState } from "react";
import "./CSS/style.css";
// unactive url see weather vdo of thapa.
//and import this on app.js

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7977130899db057ba4ced7f93e2f246c`;
            const response = await fetch(url);
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson);
        }
        fetchApi();
    }, [search])
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        className="inputField"
                        value={search}
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }} />
                </div>

                {!city ? (<p className="errorMsg">No Data Foun!</p>) :(
            
            <div>
                <div className="info">
                    <h2 className="location">
                        <i className="fa-solid fa-street-view"></i>{search}
                    </h2>
                    <h1 className="temp">
                        {city.temp}Cel
                    </h1>
                    <h3 className="tempmin_max">Min : {city.temp_min}Cel | Max : {city.temp_max}Cel</h3>
                </div>

                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
            </div>

            )} 



            </div>
        </>
    )
}
export default Tempapp;
