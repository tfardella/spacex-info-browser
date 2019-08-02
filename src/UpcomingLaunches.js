import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { SpaceXApiUrls } from './actions'
import {
  upcomingLaunchesFetchData,
  upcomingLaunchesSetSelected
} from './actions/upcomingLaunches'
import { LaunchList } from './LaunchList'
import { LaunchDetails } from './LaunchDetails'

function UpcomingLaunches({ launches, fetchLaunchData, selectedLaunch, upcomingLaunchesSetSelected }) {
	useEffect(() => {
		async function fetchData() {
			const result = await fetchLaunchData(SpaceXApiUrls.LAUNCHES_UPCOMING)
			return result
		}

		fetchData()
	}, [fetchLaunchData])

	function setSelectedLaunch(e) {
    upcomingLaunchesSetSelected(e.target.id)
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
              launchNumber={selectedLaunch}
              handleOnclick={setSelectedLaunch}
            />
					</div>
				</section>
			</div>
			<div bp="8">
				<section className="launch-details">
					<h3>Launch Details</h3>
          <div>
            <LaunchDetails
              launchNumber={selectedLaunch}
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
		launches: state.upcomingLaunches.data,
		hasErrored: state.upcomingLaunches.launchesHasErrored,
    isLoading: state.upcomingLaunches.launchesIsLoading,
    selectedLaunch: state.upcomingLaunches.selectedLaunch
	}
}

const mapDispatchToProps = dispatch => {
	return {
    fetchLaunchData: url => dispatch(upcomingLaunchesFetchData(url)),
    upcomingLaunchesSetSelected: id => dispatch(upcomingLaunchesSetSelected(id))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UpcomingLaunches)
