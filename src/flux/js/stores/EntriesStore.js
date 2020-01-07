import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class EntriesStore extends EventEmitter 
{
  constructor()
  {
    super();
    // this.entries = [
    //   {destination: "Istanbul", country: "Turkey", rating: "Architectural"},
    //   {destination: "Derinkuyu", country: "Turkey", rating: "Underground"}
    // ]
  }

  getAll()
  {
    return this.entries;
  }

  handleActions(action) 
  {
    switch(action.type) 
    {
      case "LOAD_ENTRIES": 
      {
        this.entries = action.data;
        this.emit("loadAll");
        break;
      }
      case "CREATE_ENTRY": 
      {
        this.entries.push(action.data);
        this.emit("created");
        break;
      }
      case "UPDATE_ENTRY": 
      {
        this.emit("updated");
        break;
      }
      case "DELETE_ENTRY": 
      {
        for (var i = 0; i < this.entries.length; i++)
        {
          if (this.entries[i].destination === action.data.destination)
          {
            this.entries.splice(i, 1);
            this.emit("deleted");
            break;
          }
        }
      }
    }
  }  
}

const entriesStore = new EntriesStore;

dispatcher.register(entriesStore.handleActions.bind(entriesStore));

export default entriesStore;
