import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { SpaceXApiUrls } from './actions'
import { launchPadsFetchData, setSelectedLaunchPadId } from './actions/launchPads'

function LaunchPadsList({launchPads, selectedLaunchPad, handleOnclick}) {
	if (launchPads) {
		const launchPadListdata = launchPads.map(launchPad => (
      <li
        key={launchPad.padid}
        id={launchPad.padid}
        className={parseInt(selectedLaunchPad, 10) === parseInt(launchPad.padid, 10) ? 'selected' : ''}
      >
				{launchPad.padid}. {launchPad.full_name}
			</li>
		))

		return <ul
      onClick={handleOnclick}
    >{launchPadListdata}</ul>
	}
	return null
}

function LaunchPadDetails({launchPads, launchPadId}){
  if(launchPads){
    const details = launchPads.find(
      launchPad => launchPad.padid === parseInt(launchPadId, 10)
    );
    
    if(details){
      return (
        <div>
          <div>
            <label>Pad Id #:</label>
            <span>{details.padid}</span>
          </div>
          <div>
            <label>Id:</label>
            <span>{details.id}</span>
          </div>
          <div>
            <label>Full Name:</label>
            <span>{details.full_name}</span>
          </div>
          <div>
            <label>Status:</label>
            <span>{details.status}</span>
          </div>
        </div>
      )
    }
  }

  return null
}

function LaunchPadsInfo({ launchPads, fetchLaunchPadsData, setSelectedLaunchPad, selectedLaunchPad}) {

	useEffect(() => {
		async function fetchData() {
			const result = await fetchLaunchPadsData(SpaceXApiUrls.LAUNCH_PADS)
			return result
		}

    fetchData()
	}, [fetchLaunchPadsData])

	function updateSelectedLaunchPad(e) {
    setSelectedLaunchPad(e.target.id)
    console.log(`launchpad clicked: ${selectedLaunchPad}`)
  }
  

  return (
		<div bp="grid">
			<div bp="12" className="page-heading">
				<h1>Launch Pads</h1>
			</div>
			<div bp="4">
				<section className="launches">
					<h3>Launch Pad List</h3>
					<div className="launches-list">
            <LaunchPadsList
              launchPads={launchPads}
              selectedLaunchPad={selectedLaunchPad}
              handleOnclick={updateSelectedLaunchPad}
            />
					</div>
				</section>
			</div>
			<div bp="8">
				<section className="launch-details">
					<h3>Launch Pad Details</h3>
          <div>
            <LaunchPadDetails
              launchPads={launchPads}
              launchPadId={selectedLaunchPad}
            />
          </div>
				</section>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		launchPads: state.launchPads.data,
		hasErrored: state.launchPads.launchPadsHasErrored,
    isLoading: state.launchPads.launchPadsIsLoading,
    selectedLaunchPad: state.launchPads.selectedLaunchPad
	}
}

const mapDispatchToProps = dispatch => {
	return {
    fetchLaunchPadsData: url => dispatch(launchPadsFetchData(url)),
    setSelectedLaunchPad: selectedId => dispatch(setSelectedLaunchPadId(selectedId))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LaunchPadsInfo)
