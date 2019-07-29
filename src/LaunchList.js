import React from 'react'

export function LaunchList({ launches, launchNumber, handleOnclick }) {
	if (launches) {
		const launchListdata = launches.map(launch => (
      <li
        key={launch.flight_number}
        id={launch.flight_number}
        className={parseInt(launchNumber, 10) === parseInt(launch.flight_number, 10) ? 'selected' : ''}
      >
				{launch.flight_number}. {launch.mission_name}
			</li>
		))

		return <ul onClick={handleOnclick}>{launchListdata}</ul>
	}

	return null
}
