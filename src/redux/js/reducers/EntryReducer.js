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
				redirect: '/',
			}
		}
		
		case "UPDATE_ENTRY": {
			return {...state, fetching: true}
		}
		case "UPDATE_ENTRY_FULFILLED": {
			return {
				...state,
				fetching: false,
				fetched: true,
				entries: action.payload,
				redirect: '/',
			}
		}
		
		case "DELETE_ENTRY": {
			return {...state, fetching: true}
		}
		case "DELETE_ENTRY_FULFILLED": {
			return {
				...state,
				fetching: false,
				fetched: true,
				entries: action.payload,
				redirect: '/',
			}
		}
	}

	return state
}
