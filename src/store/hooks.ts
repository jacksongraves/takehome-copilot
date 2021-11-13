// @react
import { useMemo } from "react";

// @redux
import { bindActionCreators } from "redux";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "./reducers";
import * as actions from "./actions";

// Custom hook to make actions a bit more legible for use in components
export const useActions = () => {
	// Grab the dispatch
	const dispatch = useDispatch();

	// Embed in a useMemo to prevent binding actions multiple times on every re-render
	return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};

// A typed selector will allow us to infer types from a Redux store state
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
