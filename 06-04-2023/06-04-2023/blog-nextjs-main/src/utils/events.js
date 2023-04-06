import { eventsJson } from "@/pages/api/events";

// return all posts
export function getAllEvents() {
  return eventsJson[0];
}

//return all slugs
export function getAllEventsSlugs() {
  let slugs = [];
  getAllEvents().map((e) => {
    slugs.push(`/blog/${e.slug}`);
  });

  return slugs;
}

//retun post data
export function getEventData(slug) {
  let event = null;
  getAllEvents().map((e) => {
    if (e.slug === slug) {
      event = e;
      return;
    }
  });
  return post;
}

