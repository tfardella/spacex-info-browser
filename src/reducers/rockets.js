const defaultState = {
  data: null,
  rocketsIsLoading: false,
  rocketsHasErrored: false,
  selectedRocket: null
};

export function rockets(state = defaultState, action) {
	switch (action.type) {
		case 'ROCKETS_FETCH_DATA_SUCCESS':
			return {
        ...state,
        data: action.rockets
      }

		case 'ROCKETS_HAS_ERRORED':
			return {
        ...StorageEvent,
        rocketsHasErrored: action.hasErrored
      }

		case 'ROCKETS_IS_LOADING':
			return {
        ...state,
        rocketsIsLoading: action.isLoading
      }

    case 'ROCKETS_SET_SELECTED':
      return {
        ...state,
        selectedRocket: action.selectedRocket
      }
		default:
			return state
	}
}
