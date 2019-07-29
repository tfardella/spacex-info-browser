import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { SpaceXApiUrls } from './actions'
import { launchesFetchData } from './actions/launches'
import { LaunchList } from './LaunchList'
import { LaunchDetails } from './LaunchDetails'

function UpcomingLaunches({ launches, fetchLaunchData }) {
  const [launchNumber, setLaunchNumber] = useState(0);

	useEffect(() => {
		async function fetchData() {
			const result = await fetchLaunchData(SpaceXApiUrls.LAUNCHES_UPCOMING)
			return result
		}

		fetchData()
	}, [fetchLaunchData])

	function selectedLaunch(e) {
    setLaunchNumber(e.target.id)
	}

	return (
		<div bp="grid">
			<div bp="12" className="page-heading">
				<h1>Upcoming Launches</h1>
			</div>
			<div bp="4">
				<section className="launches">
					<h3>Launch List</h3>
					<div className="launches-list">
						<LaunchList
              launches={launches}
              launchNumber={launchNumber}
              handleOnclick={selectedLaunch}
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
		launches: state.launches.data,
		hasErrored: state.launchesHasErrored,
		isLoading: state.launchesIsLoading
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchLaunchData: url => dispatch(launchesFetchData(url))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UpcomingLaunches)
