import { combineReducers } from 'redux'
import { info } from './info'
import { pastLaunches } from './pastLaunches'
import { upcomingLaunches } from './upcomingLaunches'
import { rockets } from './rockets'
import { launchPads } from './launchPads'

export default combineReducers({
  info,
  pastLaunches,
  upcomingLaunches,
  rockets,
  launchPads
})
