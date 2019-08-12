import React from 'react'

const keyCodes = {
  'enter': 13,
  'shift': 16,
  'control': 17,
  'alt': 18,
  'escape': 27,
  'space': 32,
  'leftArrow': 37,
  'upArrow': 38,
  'rightArrow': 39,
  'downArrow': 40
}

export function LaunchList({ launches, launchNumber, onClickHandler }) {
	if (launches) {
		const launchListdata = launches.map(launch => (
      <li
        key={launch.flight_number}
        id={launch.flight_number}
        className={parseInt(launchNumber, 10) === parseInt(launch.flight_number, 10) ? 'selected' : ''}
        tabIndex='0'
        role='tab'
        aria-selected={parseInt(launchNumber, 10) === parseInt(launch.flight_number, 10) ? 'true' : 'false'}
      >
				{launch.flight_number}. {launch.mission_name}
			</li>
		))

    function handleKeyPress(e){
      if(launches){
        const currentIndex = launches.findIndex(launch => {
          return parseInt(e.target.id, 10) === parseInt(launch.flight_number, 10)
        })
      
        switch(e.which) {
          case keyCodes.enter:
            onClickHandler(e.target.id)
            break;

          case keyCodes.upArrow:
            if(launches[currentIndex - 1]) {
              e.target.focus()
              onClickHandler( launches[currentIndex - 1].flight_number )
            }
            break;

          case keyCodes.downArrow:
            if(launches[currentIndex + 1]) {
              e.target.focus()
              onClickHandler( launches[currentIndex + 1].flight_number )
            }
            break;

          default:
            break;
        }
      }
    }

    function handleOnClick(e) {
      onClickHandler(e.target.id)
    }

    return (
      <nav className='sidebarNav'>
        <ul
          aria-live="polite"
          onClick={handleOnClick}
          onKeyDown={handleKeyPress}
        >
        {launchListdata}
      </ul>
      </nav>
    )
	}

	return null
}
