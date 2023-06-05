import Container from '@/components/common/Container';
import PhaseItem from './PhaseItem';
import { useContext, useEffect, useMemo, useState } from 'react';
import {
  ProgressContext,
  initialProgressState,
} from '@/context/StageProgressProvider';
import { slugify } from '@/utils/string';
import Stack from '@/components/common/Stack';
import Button from '@/components/buttons/Button';
import { clearProgress, getProgress } from '@/utils/storage';
import Loader from '@/components/common/Loader';

const StageProgress = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { state: phases, dispatch } = useContext(ProgressContext);

  const isEmptyPhases = !phases || phases.length < 1;

  const storedProgress = useMemo(() => {
    return getProgress();
  }, []);

  const handleResetProgress = () => {
    clearProgress();
    dispatch({ type: 'GET_STORED_PROGRESS', payload: initialProgressState });
  };

  useEffect(() => {
    if (storedProgress) {
      dispatch({ type: 'GET_STORED_PROGRESS', payload: storedProgress });
    }
    setIsLoading(false);
  }, [storedProgress]);

  if (isEmptyPhases) {
    return (
      <Container className="py-5">
        <h2 className="my-5 text-heading-2 font-bold">
          No progress stage available
        </h2>
        <p className="text-base">
          Please, use the above form to add phases and tasks.
        </p>
        <p className="text-sm text-red-500">
          Note: To add tasks, it is required to have atleast one unlocked phase.
        </p>
      </Container>
    );
  }
  return (
    <Loader isLoading={isLoading}>
      <Container className="py-5">
        <Stack
          direction="horizontal"
          className="items-center lg:gap-10 flex-wrap mb-10 lg:mb-5"
        >
          <h2 className="my-5 text-heading-2 font-bold">My startup progress</h2>
          {!isEmptyPhases && (
            <Button onClick={handleResetProgress}>Reset progress</Button>
          )}
        </Stack>
        <ul className="flex flex-col gap-10">
          {phases.map((phase) => {
            const id = slugify(`${phase.order} ${phase.title}`);
            return (
              <li key={id}>
                <PhaseItem
                  isCompleted={phase.isCompleted}
                  isLocked={phase.isLocked}
                  order={phase.order}
                  title={phase.title}
                  tasks={phase.tasks ?? []}
                />
              </li>
            );
          })}
        </ul>
      </Container>
    </Loader>
  );
};

export default StageProgress;
