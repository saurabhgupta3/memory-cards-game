import { useEffect, useState } from "react";
import CardImage from "./CardImage.jsx";
import CardTitle from "./CardTitle";
import ScoreBoard from "./ScoreBoard.jsx";

export default function Card() {
    const [arr, setArr] = useState([]);
    const [score, setScore] = useState(0);
    const [prev, setPrev] = useState([]);
    const [bestscore, setBestscore] = useState(0);
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
    function handleClick(item) {
        console.log("score -> ", score , "  ", "bestscore => ", bestscore);
        if(score == 0) {
            setScore(score + 1);
            let prevArr = [];
            prevArr.push(item.title);
            setPrev(prevArr);
        } else {
            for(let i=0; i<prev.length; i++) {
                if(prev[i] == item.title) {
                    if(score > bestscore) {
                        setBestscore(score);
                    }
                    setScore(0);
                    return;
                }
            }
            if(score != 0) {
                setScore(score + 1);
                setPrev([...prev, item.title]);
            }
        }
        setArr(prev => {
            let copy = [...prev];
            copy.sort(() => Math.random() - 0.5);
            return copy;
        })
    }
    return (
        <div className="card">
            <ScoreBoard score={score} bestscore={bestscore}/>
            {arr.map((item, i) => (
                <div className="img" key={i} onClick={() => handleClick(item)}>
                    <CardImage item={item}/>
                </div>
            ))}
            
        </div>
    );
}