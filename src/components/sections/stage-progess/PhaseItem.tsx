import Stack from '@/components/common/Stack';
import { CheckIcon } from '@heroicons/react/24/solid';
import TaskItem from './TaskItem';
import { slugify } from '@/utils/string';
import { useContext, useEffect, useMemo } from 'react';
import { ProgressContext } from '@/context/StageProgressProvider';
import Button from '@/components/buttons/Button';

type PhaseItemProps = {
  isCompleted: boolean;
  isLocked: boolean;
  order: number;
  title: string;
  tasks: {
    title: string;
    isCompleted: boolean;
  }[];
};

const PhaseItem: React.FC<PhaseItemProps> = ({
  isCompleted = false,
  isLocked = false,
  order,
  title,
  tasks,
}) => {
  const { state, dispatch } = useContext(ProgressContext);
  const handleCompleteTask = (order: string, index: number) => {
    dispatch({ type: 'COMPLETE_TASK', payload: { order, index } });
  };

  const phasesState = useMemo(() => {
    return {
      completed: [...state].filter((task) => task.isCompleted),
      uncompleted: [...state].filter((task) => !task.isCompleted),
    };
  }, [state]);

  const { completed: completedPhases, uncompleted: unCompletedPhases } =
    phasesState;

  const isCompletedPhase = useMemo(() => {
    return [...tasks].every((task) => task.isCompleted);
  }, [state]);

  const handleUnlockPhase = () => {
    dispatch({ type: 'UNDO_PHASE', payload: order });
  };

  useEffect(() => {
    if (isCompletedPhase) {
      dispatch({ type: 'COMPLETE_PHASE', payload: order });
      dispatch({ type: 'LOCK_PHASE', payload: order });
    }
  }, [isCompletedPhase, order]);

  useEffect(() => {
    if (order > unCompletedPhases[0]?.order) {
      dispatch({ type: 'LOCK_PHASE', payload: order });
    } else {
      dispatch({ type: 'UNLOCK_PHASE', payload: order });
    }
  }, [order, unCompletedPhases[0]?.order]);

  return (
    <Stack className="gap-5">
      <Stack direction="horizontal" className="items-center gap-6">
        <Stack className="w-12 h-12 justify-center items-center bg-black text-white text-xl rounded-full">
          {order + 1}
        </Stack>
        <h1 className="my-5 text-heading-1 font-bold">{title}</h1>
        {isCompleted && <CheckIcon height={72} />}
        {isCompleted &&
          order === completedPhases[completedPhases.length - 1].order && (
            <Button onClick={handleUnlockPhase}>Unlock Phase</Button>
          )}
      </Stack>
      <ul className="flex flex-col gap-5">
        {tasks.map((task, index) => {
          const id = slugify(`${index} ${title} ${task.title}`);
          return (
            <li key={id}>
              <TaskItem
                id={id}
                title={task.title}
                isDone={task.isCompleted}
                isDisabled={isCompleted || isLocked}
                onCheckAction={() =>
                  handleCompleteTask(order.toString(), index)
                }
              />
            </li>
          );
        })}
      </ul>
    </Stack>
  );
};

export default PhaseItem;
