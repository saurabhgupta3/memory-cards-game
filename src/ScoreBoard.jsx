import CurrentScore from "./CurrentScore"
import HighScore from "./HighScore"
import "./ScoreBoard.css";

export default function ScoreBoard({score, bestscore}) {
    return <div className="scoreboard">
        <div className="score">
            <CurrentScore score={score}/>
        </div>
        <div className="bestscore">
            <HighScore bestscore={bestscore}/>
        </div>
    </div>
}