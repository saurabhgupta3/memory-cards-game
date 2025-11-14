import { useEffect, useState } from "react";
import CardImage from "./CardImage.jsx";
import CardTitle from "./CardTitle";

export default function Card() {
    const [arr, setArr] = useState([]);
    useEffect(() => {
        async function callApi() {
            const res = await fetch(import.meta.env.VITE_POKEMON_API);
            const data = await res.json();
            let fullData = [];
            for(let i=0; i<data.results.length; i++) {
                let detailUrl = data.results[i].url;
                let res2 = await fetch(detailUrl);
                let data2 = await res2.json();
                fullData.push({title: data.results[i].name, img: data2.sprites.front_default});
            }
            setArr(fullData);
        }
        callApi();
    }, []);
    return (
        <div className="card">
            {arr.map((item, i) => (
                <div className="img" key={i}>
                    <CardImage item={item}/>
                </div>
            ))}
            
        </div>
    );
}