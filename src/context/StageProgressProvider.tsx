import { ProgessAction, ProgressState } from '@/types/progress';
import { progressReducer } from '@/reducers/progress';
import { storeProgress } from '@/utils/storage';
import { Dispatch, createContext, useEffect, useMemo, useReducer } from 'react';

export const initialProgressState = [] as ProgressState;

export const ProgressContext = createContext({
  state: initialProgressState,
  dispatch: (() => {}) as Dispatch<ProgessAction>,
});

type StageProgressProviderProps = {
  children: React.ReactNode;
};

const StageProgressProvider: React.FC<StageProgressProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(progressReducer, initialProgressState);

  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  useEffect(() => {
    storeProgress(state);
  }, [state]);

  return (
    <ProgressContext.Provider value={contextValue}>
      {children}
    </ProgressContext.Provider>
  );
};

export default StageProgressProvider;
