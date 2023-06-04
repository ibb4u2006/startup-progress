import { Dispatch, createContext, useMemo, useReducer } from 'react';

const initialState = [
  {
    order: 1,
    title: 'Foundation',
    isCompleted: false,
    tasks: [
      { title: 'Setup virtual office', isCompleted: true },
      { title: 'Set mission & vision', isCompleted: false },
    ],
  },
  {
    order: 2,
    title: 'Discovery',
    isCompleted: false,
    tasks: [
      { title: 'Create roadmap', isCompleted: false },
      { title: 'Competitor analysis', isCompleted: false },
    ],
  },
];

type ProgessAction =
  | {
      type: 'ADD_PHASE';
      payload: string;
    }
  | { type: 'ADD_TASK'; payload: { phase: string; title: string } }
  | { type: 'COMPLETE_PHASE'; payload: string }
  | { type: 'COMPLETE_TASK'; payload: string };

type ProgressState = typeof initialState;

const progressReducer = (
  state: ProgressState,
  action: ProgessAction
): ProgressState => {
  switch (action.type) {
    case 'ADD_PHASE':
      return [
        ...state,
        {
          title: action.payload,
          isCompleted: false,
          order: state.length + 1,
          tasks: [],
        },
      ];
    default:
      return state;
  }
};

export const ProgressContext = createContext({
  state: initialState,
  dispatch: (() => {}) as Dispatch<ProgessAction>,
});

type StageProgressProviderProps = {
  children: React.ReactNode;
};

const StageProgressProvider: React.FC<StageProgressProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(progressReducer, initialState);

  const contextValue = useMemo(() => ({ state, dispatch }), [state]);
  return (
    <ProgressContext.Provider value={contextValue}>
      {children}
    </ProgressContext.Provider>
  );
};

export default StageProgressProvider;
