import { ProgressContext } from '@/context/StageProgressProvider';
import { ProgressState } from '@/domain/progress';
import { getProgress } from '@/utils/storage';
import { useContext, useEffect, useMemo, useState } from 'react';

export const useGetProgress = () => {
  const { state, dispatch } = useContext(ProgressContext);
  const [progressState, setProgressState] = useState<ProgressState>();

  const storedProgress = useMemo(() => getProgress(), []);

  useEffect(() => {
    if (storedProgress) {
      setProgressState(storedProgress);
    }
  }, [storedProgress]);

  return progressState as ProgressState;
};
