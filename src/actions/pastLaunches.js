export function pastLaunchesHasErrored(bool) {
  return {
    type: 'PAST_LAUNCHES_HAS_ERRORED',
    hasErrored: bool
  };
}

export function pastLaunchesIsLoading(bool) {
  return {
    type: 'PAST_LAUNCHES_IS_LOADING',
    isLoading: bool
  };
}

export function pastLaunchesFetchDataSuccess(launches) {
  return {
    type: 'PAST_LAUNCHES_FETCH_DATA_SUCCESS',
    launches
  };
}

export function setSelectedLaunch(selectedLaunch) {
  return {
    type: 'PAST_LAUNCHES_SET_SELECTED',
    selectedLaunch
  };
}

export function pastLaunchesFetchData(url) {
  return (dispatch) => {
    dispatch(pastLaunchesIsLoading(true));

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
        dispatch(pastLaunchesFetchDataSuccess(info))
        dispatch(setSelectedLaunch(selected))
      })
      .catch(() => dispatch(pastLaunchesHasErrored(true)))
      .finally(() => dispatch(pastLaunchesIsLoading(false)));
  };
}
