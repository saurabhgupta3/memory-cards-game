import CurrentScore from "./CurrentScore"
import HighScore from "./HighScore"

export default function ScoreBoard({score, bestscore}) {
    return <div className="scoreboard">
        <CurrentScore score={score}/>
        <HighScore bestscore={bestscore}/>
    </div>
}