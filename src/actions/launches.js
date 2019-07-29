export function launchesHasErrored(bool) {
  return {
    type: 'LAUNCHES_HAS_ERRORED',
    hasErrored: bool
  };
}

export function launchesIsLoading(bool) {
  return {
    type: 'LAUNCHES_IS_LOADING',
    isLoading: bool
  };
}

export function launchesFetchDataSuccess(launches) {
  return {
    type: 'LAUNCHES_FETCH_DATA_SUCCESS',
    launches
  };
}

export function launchesFetchData(url) {
  return (dispatch) => {
    dispatch(launchesIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then(response => response.json())
      .then(info => dispatch(launchesFetchDataSuccess(info)))
      .catch(() => dispatch(launchesHasErrored(true)))
      .finally(() => dispatch(launchesIsLoading(false)));
  };
}
