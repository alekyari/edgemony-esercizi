import Image from "next/image";
import Link from "next/link";

const CardEvent = (props) => {
    const {event} = props;
    return (
        <Link href={"/event/" + event?.slug}>
        
            <Image 
                src={event.image} 
                width={400} 
                height={300} 
                alt={event?.title}
            />
            {/* <img src={event.image} /> */}
            <p>{event.date}</p>
            <h3>{event.title}</h3>
        
        </Link>
    )
}

export default CardEvent;