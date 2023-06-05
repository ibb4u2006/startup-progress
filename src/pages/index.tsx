import Alert from '@/components/common/Alert';
import Loader from '@/components/common/Loader';
import AddNewStage from '@/components/sections/add-new-stage';
import StageProgress from '@/components/sections/stage-progess';
import { ProgressContext } from '@/context/StageProgressProvider';
import { useGetRandomFact } from '@/hooks/useFact';
import { useContext, useEffect, useMemo } from 'react';

export default function Home() {
  const { state } = useContext(ProgressContext);

  const isProgressCompleted = useMemo(() => {
    if ([...state].length < 1) {
      return false;
    }
    return [...state].every((phase) => phase.isCompleted);
  }, [state]);

  const {
    data: fact,
    isLoading: isLoadingFact,
    error: factError,
    refetch: refetchFact,
  } = useGetRandomFact(isProgressCompleted);

  useEffect(() => {
    if (isProgressCompleted) {
      refetchFact();
    }
  }, [isProgressCompleted]);

  return (
    <Loader isLoading={isLoadingFact}>
      {isProgressCompleted && (
        <Alert variant="success">Fun fact: {fact?.data.text}</Alert>
      )}
      {factError && <Alert variant="error"> {factError.message}</Alert>}
      <AddNewStage />
      <StageProgress />
    </Loader>
  );
}
