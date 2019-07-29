import React from 'react'

export function LaunchDetails({launches, launchNumber}){
  if(launches){
    const details = launches.find(
      launch => launch.flight_number === parseInt(launchNumber, 10)
    );

    if(details){
      return (
        <div>
          <div>
            <label>Launch #:</label>
            <span>{details.flight_number}</span>
          </div>
          <div>
            <label>Name:</label>
            <span>{details.mission_name}</span>
          </div>
          <div>
            <label>Date:</label>
            <span>{Date(details.launch_date_unix)}</span>
          </div>
          <div>
            <label>Rocket:</label>
            <span>{details.rocket.rocket_name}</span>
          </div>
          <div>
            <label>Rocket Type:</label>
            <span>{details.rocket.rocket_type}</span>
          </div>
          <div>
            <label>Launch Site:</label>
            <span>{details.launch_site.site_name_long}</span>
          </div>
          <div>
            <label>Launch Success:</label>
            <span>{details.launch_success ? 'Yes' : 'No'}</span>
          </div>
          {!details.launch_success && !details.upcoming &&
            <div>
              <label>Failure Details:</label>
              <span>{details.launch_failure_details.reason}</span>
            </div>
          }
          <div>
            <label>Details:</label>
            <span>{details.details}</span>
          </div>
          <div>
            <label></label>
            <span></span>
          </div>
          {!details.upcoming && 
            <div className='mission-patch'>
              <img src={details.links.mission_patch} alt='mission patch' height='250' width='250' />
            </div>
          }
        </div>
      )
    }
  }

  return null
}
