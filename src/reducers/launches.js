const defaultState = {
  data: null,
  launchesIsLoading: false,
  launchesHasErrored: false
};

export function launches(state = defaultState, action) {
	switch (action.type) {
		case 'LAUNCHES_FETCH_DATA_SUCCESS':
			return {
        ...defaultState,
        data: action.launches
      }

		case 'LAUNCHES_HAS_ERRORED':
			return {
        ...state,
        launchesHasErrored: action.hasErrored
      }

		case 'LAUNCHES_IS_LOADING':
			return {
        ...state,
        launchesIsLoading: action.isLoading
      }
		default:
			return state
	}
}
