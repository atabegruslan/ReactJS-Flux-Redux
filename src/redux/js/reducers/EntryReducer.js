export default function entryReducer(state={entries: []}, action) 
{
    switch (action.type) 
    {
		case "LOAD_ENTRIES": {
			return {...state, fetching: true}
		}
		case "LOAD_ENTRIES_FULFILLED": {
			return {
				...state,
				fetching: false,
				fetched: true,
				entries: action.payload,
			}
		}
		
		case "CREATE_ENTRY": {
			return {...state, fetching: true}
		}
		case "CREATE_ENTRY_FULFILLED": {
			return {
				...state,
				fetching: false,
				fetched: true,
				entries: action.payload,
			}
		}
	}

	return state
}
