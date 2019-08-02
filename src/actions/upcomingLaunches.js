export function upcomingLaunchesHasErrored(bool) {
  return {
    type: 'UPCOMING_LAUNCHES_HAS_ERRORED',
    hasErrored: bool
  };
}

export function upcomingLaunchesIsLoading(bool) {
  return {
    type: 'UPCOMING_LAUNCHES_IS_LOADING',
    isLoading: bool
  };
}

export function upcomingLaunchesFetchDataSuccess(launches) {
  return {
    type: 'UPCOMING_LAUNCHES_FETCH_DATA_SUCCESS',
    launches
  };
}

export function upcomingLaunchesSetSelected(selectedLaunch) {
  return {
    type: 'UPCOMING_LAUNCHES_SET_SELECTED',
    selectedLaunch
  };
}

export function upcomingLaunchesFetchData(url) {
  return (dispatch) => {
    dispatch(upcomingLaunchesIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then(response => response.json())
      .then(info => {
        const selected = info[0].flight_number
        dispatch(upcomingLaunchesFetchDataSuccess(info))
        dispatch(upcomingLaunchesSetSelected(selected))
      })
      .catch(() => dispatch(upcomingLaunchesHasErrored(true)))
      .finally(() => dispatch(upcomingLaunchesIsLoading(false)));
  };
}
