import dispatcher from "../dispatcher";
import axios from "axios";

export function createEntry(entry) 
{
  dispatcher.dispatch(
    {type: 'CREATE_ENTRY', destination: entry.destination, country: entry.country, rating: entry.rating}
  );
}

export function loadEntries() 
{
    // https://www.npmjs.com/package/koa-cors
    // https://github.com/koajs/cors
    axios("http://localhost:3000/read").then((data) => {
      dispatcher.dispatch(
        {type: 'LOAD_ENTRIES', data: data.data.entries}
      );
    });
}
