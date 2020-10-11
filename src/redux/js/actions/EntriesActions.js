import axios from "axios";

export function loadEntries() 
{
  return function(dispatch) 
  {
    dispatch({type: "LOAD_ENTRIES"});
    
    axios.get("/api/read")
      .then((response) => {
        dispatch({type: "LOAD_ENTRIES_FULFILLED", payload: response.data.entries})
      })
      // .catch((err) => {
      //   dispatch({type: "LOAD_ENTRIES_REJECTED", payload: err})
      // })
  }
}

export function createEntry(entry) 
{
  var data = {
    'destination': entry.childNodes[0].value, 
    'country'    : entry.childNodes[1].value, 
    'rating'     : entry.childNodes[2].value
  };

  return function(dispatch) 
  {
    dispatch({type: "CREATE_ENTRY"});

    axios.post("/api/", data)
      .then((response) => {
        dispatch({type: "CREATE_ENTRY_FULFILLED", payload: data})// @todo: Fix payload data
      })
  }
}
