import dispatcher from "../dispatcher";
import axios from "axios";

export function createEntry(entry) 
{
  var data = {
    'destination': entry.destination, 
    'country'    : entry.country, 
    'rating'     : entry.rating
  };

  axios.post("http://localhost:3000/", data)
    .then((res) => {
      console.dir(res);
      this.loadEntries();
    });
}

export function loadEntries() 
{
  axios.get("http://localhost:3000/read")
    .then((data) => {
      console.dir(data);
      dispatcher.dispatch(
        {type: 'LOAD_ENTRIES', data: data.data.entries}
      );
    });
}
