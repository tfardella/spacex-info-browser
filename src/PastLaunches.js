import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { SpaceXApiUrls } from './actions'
import { 
  pastLaunchesFetchData,
  setSelectedLaunch 
} from './actions/pastLaunches'
import { LaunchList } from './LaunchList'
import { LaunchDetails } from './LaunchDetails'

function PastLaunches({ launches, fetchLaunchData, launchNumber, setSelectedLaunch }) {

	useEffect(() => {
		async function fetchData() {
			const result = await fetchLaunchData(SpaceXApiUrls.LAUNCHES_PAST)
			return result
		}

    fetchData()    
	}, [fetchLaunchData])

	function setSelectedLaunchId(e) {
    // setLaunchNumber(e.target.id)
    setSelectedLaunch(e.target.id)
	}

	return (
		<div bp="grid">
			<div bp="12" className="page-heading">
				<h1>Past Launches</h1>
			</div>
			<div bp="4">
				<section className="launches">
					<h3>Launch List</h3>
					<div className="launches-list">
						<LaunchList
              launches={launches}
              launchNumber={launchNumber}
              handleOnclick={setSelectedLaunchId}
            />
					</div>
				</section>
			</div>
			<div bp="8">
				<section className="launch-details">
					<h3>Launch Details</h3>
          <div>
            <LaunchDetails
              launchNumber={launchNumber}
              launches={launches}
            />
          </div>
				</section>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		launches: state.pastLaunches.data,
		hasErrored: state.pastLaunches.launchesHasErrored,
    isLoading: state.pastLaunches.launchesIsLoading,
    launchNumber: state.pastLaunches.selectedLaunch
	}
}

const mapDispatchToProps = dispatch => {
	return {
    fetchLaunchData: url => dispatch(pastLaunchesFetchData(url)),
    setSelectedLaunch: flightNumber => dispatch(setSelectedLaunch(flightNumber))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PastLaunches)
