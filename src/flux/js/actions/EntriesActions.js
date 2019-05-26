import dispatcher from "../dispatcher";

export function createEntry(entry) 
{
  dispatcher.dispatch(
    {type: 'CREATE_ENTRY', destination: entry.destination, country: entry.country, rating: entry.rating}
  );
}
