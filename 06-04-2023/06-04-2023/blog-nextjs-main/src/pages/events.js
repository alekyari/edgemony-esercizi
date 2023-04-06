import Layout from "@/components/layout";
import { getAllEvents } from "@/utils/events";
import CardEvent from "@/components/cardEvent";

const Events = ({eventData}) => {
  return (
    <Layout>
        <h1>Events Page</h1>
          {eventData?.map((event, index) => (
            <CardEvent key={index} event={event} />
          ))}
    </Layout>
  );
};


export const getStaticProps = () => {
  const eventData = getAllEvents();

  return {
    props: {
      eventData,
    },
  };
};

export default Events;
