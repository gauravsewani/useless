import { combineReducers } from "redux";
import nfts from "./nfts";
import site from "./siteSettings";
import timerReducer from "./timerReducer";
import { cartReducer as cart } from "./cartReducers";

export default combineReducers({ nfts, site, cart, timer: timerReducer });
