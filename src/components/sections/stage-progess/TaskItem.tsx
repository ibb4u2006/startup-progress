import Stack from '@/components/common/Stack';
import Checkbox from '@/components/form/Checkbox';
import { CheckIcon } from '@heroicons/react/24/solid';
import { ChangeEvent } from 'react';

type TaskItemProps = {
  id: string;
  title: string;
  isDone: boolean;
  isDisabled?: boolean;
  onCheckAction: (e: ChangeEvent<HTMLInputElement>) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({
  onCheckAction,
  title,
  id,
  isDone = false,
  isDisabled = false,
}) => {
  return (
    <Stack direction="horizontal" className="items-center gap-6">
      <Checkbox
        label={title}
        id={id}
        defaultChecked={isDone}
        onChange={onCheckAction}
        disabled={isDisabled}
      />
    </Stack>
  );
};

export default TaskItem;
