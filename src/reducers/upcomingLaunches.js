const defaultState = {
  data: null,
  upcomingLaunchesIsLoading: false,
  upcomingLaunchesHasErrored: false,
  selectedLaunch: null
};

export function upcomingLaunches(state = defaultState, action) {
	switch (action.type) {
		case 'UPCOMING_LAUNCHES_FETCH_DATA_SUCCESS':
			return {
        ...defaultState,
        data: action.launches
      }

		case 'UPCOMING_LAUNCHES_HAS_ERRORED':
			return {
        ...defaultState,
        upcomingLaunchesHasErrored: action.hasErrored
      }

		case 'UPCOMING_LAUNCHES_IS_LOADING':
			return {
        ...state,
        upcomingLaunchesIsLoading: action.isLoading
      }

    case 'UPCOMING_LAUNCHES_SET_SELECTED':
      return {
        ...state,
        selectedLaunch: action.selectedLaunch
      }

		default:
			return state
	}
}
