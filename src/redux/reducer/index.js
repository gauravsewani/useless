import { combineReducers } from "redux";
import nfts from "./nfts";
import site from "./siteSettings";
import { cartReducer as cart } from "./cartReducers";

export default combineReducers({ nfts, site, cart });
