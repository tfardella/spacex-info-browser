const defaultState = {
  data: null,
  infoIsLoading: false,
  infoHasErrored: false
};

export function info(state = defaultState, action) {
	switch (action.type) {
		case 'INFO_FETCH_DATA_SUCCESS':
			return {
        ...state,
        data: action.info,
      }

		case 'INFO_HAS_ERRORED':
			return {
        ...state,
        infoHasErrored: action.hasErrored
      }

		case 'INFO_IS_LOADING':
			return {
        ...state,
        infoIsLoading: action.isLoading
      }

		default:
			return state
	}
}
