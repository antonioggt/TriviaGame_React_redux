import { combineReducers } from 'redux';
import game from './game';
import login from './login';
import player from './player';

const rootReducer = combineReducers({
  game,
  login,
  player,
});

export default rootReducer;
