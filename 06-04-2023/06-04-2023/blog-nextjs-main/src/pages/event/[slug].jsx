import Image from "next/image";
import Layout from "@/components/layout";

//posts utils
import { getAllEventsSlugs, getEventData } from "@/utils/events";

export default function Event(props) {
    const {image, title, date, body } = props.eventData;
    return (
        <Layout>
            <p>{date}</p>
            <h1>{title}</h1>
            <Image src={image} width={400} height={300} alt={title} />
            <div>
                {body}
            </div>
        </Layout>
    )
}

export const getStaticPaths = () => {
    const paths = getAllEventsSlugs();
    return {
        paths,
        fallback: false
    }
}

export const getStaticEventProps = ({params}) => {
    const eventData = getEventData(params.slug);
    return {
        props: {
            eventData
        }
    }
}