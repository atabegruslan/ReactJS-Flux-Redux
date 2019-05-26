import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class EntriesStore extends EventEmitter 
{
  constructor()
  {
    super();
    this.entries = [
      {destination: "Istanbul", country: "Turkey", rating: "Architectural"},
      {destination: "Derinkuyu", country: "Turkey", rating: "Underground"}
    ]
  }

  createEntry(destination, country, rating)
  {
    this.entries.push({destination: destination, country: country, rating: rating});

    this.emit("create");
  }

  getAll()
  {
    return this.entries;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_ENTRY": {
        this.createEntry(action.destination, action.country, action.rating);
        break;
      }
    }
  }  
}

const entriesStore = new EntriesStore;

//window.entriesStore = entriesStore;

dispatcher.register(entriesStore.handleActions.bind(entriesStore));

//window.dispatcher = dispatcher;

export default entriesStore;
