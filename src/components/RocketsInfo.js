import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { SpaceXApiUrls } from '../actions'
import { rocketsFetchData, rocketsSetSelected } from '../actions/rockets'

function RocketList({ rockets, selectedRocketId, handleOnclick }) {
	if (rockets) {
		const rocketListdata = rockets.map(rocket => (
      <li
        key={rocket.rocketid}
        id={rocket.rocketid}
        className={parseInt(selectedRocketId, 10) === parseInt(rocket.rocketid, 10) ? 'selected' : ''}
      >
				{rocket.rocketid}. {rocket.name}
			</li>
		))

		return <ul onClick={handleOnclick}>{rocketListdata}</ul>
	}

	return null
}

function RocketDetails({rockets, rocketId}){
  if(rockets){
    const details = rockets.find(
      rocket => rocket.rocketid === parseInt(rocketId, 10)
    );
    
    if(details){
      return (
        <div>
          <div>
            <label>Rocket Id #:</label>
            <span>{details.rocketid}</span>
          </div>
          <div>
            <label>Name:</label>
            <span>{details.name}</span>
          </div>
          <div>
            <label>First Flight:</label>
            <span>{details.first_flight}</span>
          </div>
          <div>
            <label>Country:</label>
            <span>{details.country}</span>
          </div>
          <div>
            <label>Stages:</label>
            <span>{details.stages}</span>
          </div>
          <div>
            <label>Boosters:</label>
            <span>{details.boosters}</span>
          </div>
          <div>
            <label># of Engines:</label>
            <span>{details.engines.number}</span>
          </div>
          <div>
            <label>Engine Type:</label>
            <span>{details.engines.type}</span>
          </div>
          <div>
            <label>Engine Version:</label>
            <span>{details.engines.version}</span>
          </div>
          <div>
            <label>Description:</label>
            <span>{details.description}</span>
          </div>
        </div>
      )
    }
  }

  return null
}

function RocketsInfo({ rockets, fetchRocketData, selectedRocket, setSelectedRocket }) {
	useEffect(() => {
		async function fetchData() {
			const result = await fetchRocketData(SpaceXApiUrls.ROCKETS)
			return result
		}

    fetchData()
}, [fetchRocketData])
  
	function setSelectedRocketId(e) {
    setSelectedRocket(e.target.id)
	}

	return (
		<div bp="grid">
			<div bp="12" className="page-heading">
				<h1>Rockets</h1>
			</div>
			<div bp="4">
				<section className="launches">
					<h3>Rocket List</h3>
					<div className="launches-list">
            <RocketList
              rockets={rockets}
              selectedRocketId={selectedRocket}
              handleOnclick={setSelectedRocketId}
            />
					</div>
				</section>
			</div>
			<div bp="8">
				<section className="launch-details">
					<h3>Rocket Details</h3>
          <div>
            <RocketDetails
              rockets={rockets}
              rocketId={selectedRocket}
            />
          </div>
				</section>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		rockets: state.rockets.data,
		hasErrored: state.rockets.rocketsHasErrored,
    isLoading: state.rockets.rocketsIsLoading,
    selectedRocket: state.rockets.selectedRocket
	}
}

const mapDispatchToProps = dispatch => {
	return {
    fetchRocketData: url => dispatch(rocketsFetchData(url)),
    setSelectedRocket: id => dispatch(rocketsSetSelected(id))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RocketsInfo)
