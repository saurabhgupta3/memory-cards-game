import CardTitle  from "./CardTitle";

export default function CardImage({item}) {
    return (
        <>
            <img src={item.img} alt="api image" />
            <CardTitle title={item.title} />
        </>
    );
}