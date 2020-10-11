import dispatcher from "../dispatcher";
import axios from "axios";

export function loadEntries() 
{
  axios.get("/api/read")
    .then((data) => {
      console.dir(data);
      dispatcher.dispatch(
        {type: 'LOAD_ENTRIES', data: data.data.entries}
      );
    });
}

export function createEntry(entry) 
{
  var data = {
    'destination': entry.destination, 
    'country'    : entry.country, 
    'rating'     : entry.rating
  };

  axios.post("/api/", data)
    .then((res) => {
      console.dir(res);
      this.loadEntries();

      dispatcher.dispatch(
        {type: 'CREATE_ENTRY', data: data}
      );
    });
}

export function updateEntry(entry) 
{
  var data = {
    'destination': entry.destination, 
    'rating'     : entry.rating
  };

  axios.put("/api/", data)
    .then((res) => {
      console.dir(res);

      dispatcher.dispatch(
        {type: 'UPDATE_ENTRY', data: data}
      );
    });
}

export function deleteEntry(entry) 
{
  var data = {
    'destination': entry.destination
  };

  axios.delete("/api/", {'data':data})
    .then((res) => {
      console.dir(res);

      dispatcher.dispatch(
        {type: 'DELETE_ENTRY', data: data}
      );
    });
}
