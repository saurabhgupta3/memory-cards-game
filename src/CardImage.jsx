import CardTitle  from "./CardTitle";
import "./CardImage.css";

export default function CardImage({item}) {
    return (
        <>
        <div className="cardimage">
            <img src={item.img} alt="api image" />
            <div className="title">
            <CardTitle title={item.title}/>
            </div>
        </div>
        </>
    );
}