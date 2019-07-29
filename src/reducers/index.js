import { combineReducers } from 'redux'
import { info } from './info'
import { launches } from './launches'
import { rockets } from './rockets'
import { launchPads } from './launchPads'

export default combineReducers({
  info,
  launches,
  rockets,
  launchPads
})
