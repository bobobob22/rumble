import { NEXT, PREV } from "./helpers";

type State = {
  pos: number;
  sliding?: boolean;
  dir?: string;
}

type Action =
  | { type: 'stopSliding' }
  | { type: 'PREV2' }
  | { type: 'reset', numItems: number }
  | { type: 'NEXT', numItems: number }
  | { type: 'PREV', numItems: number };


export const initialState = { pos: 5, sliding: false, dir: NEXT };

export function reducer(state: State, action: Action): State {
  console.log('state', state, 'action', action);
  switch (action.type) {
    case "reset":
      return initialState;
    case PREV:
      return {
        ...state,
        dir: PREV,
        sliding: true,
        pos: state.pos === action.numItems - 1 ? 0 : state.pos + 1
      };
    case NEXT:
      return {
        ...state,
        dir: NEXT,
        sliding: true,
        pos: state.pos === action.numItems - 1 ? 0 : state.pos + 1
      };
    case "stopSliding":
      return { ...state, sliding: false };
    default:
      return state;
  }
}
