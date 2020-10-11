import axios from "axios";

export function loadEntries() 
{
  return function(dispatch) 
  {
    dispatch({type: "LOAD_ENTRIES"});
    
    axios.get("/api/read")
      .then((response) => {
        console.log('LOAD_ENTRIES_FULFILLED');
        console.dir(response.data.entries);
        dispatch({type: "LOAD_ENTRIES_FULFILLED", payload: response.data.entries})
      })
      // .catch((err) => {
      //   dispatch({type: "LOAD_ENTRIES_REJECTED", payload: err})
      // })
  }
}

// export function createEntry(entry) 
// {
//   var data = {
//     'destination': entry.destination, 
//     'country'    : entry.country, 
//     'rating'     : entry.rating
//   };

//   return function(dispatch) 
//   {
//     dispatch({type: "CREATE_ENTRY"});
    
//     axios.post("/api/", data)
//       .then((response) => {
//         dispatch({type: "CREATE_ENTRY_FULFILLED", payload: data})
//       })
//   }
// }
