import Stack from '@/components/common/Stack';
import { CheckIcon } from '@heroicons/react/24/solid';
import TaskItem from './TaskItem';
import { slugify } from '@/utils/string';

type PhaseItemProps = {
  isCompleted: boolean;
  order: number;
  title: string;
  tasks: {
    title: string;
    isCompleted: boolean;
  }[];
};

const PhaseItem: React.FC<PhaseItemProps> = ({
  isCompleted = false,
  order,
  title,
  tasks,
}) => {
  return (
    <Stack className="gap-5">
      <Stack direction="horizontal" className="items-center gap-6">
        <Stack className="w-12 h-12 justify-center items-center bg-black text-white text-xl rounded-full">
          {order}
        </Stack>
        <h1 className="my-5 text-heading-1 font-bold">{title}</h1>
        {isCompleted && <CheckIcon height={72} />}
      </Stack>
      <ul className="flex flex-col gap-5">
        {tasks.map((task) => {
          const id = slugify(`${title} ${task.title}`);
          return (
            <li key={id}>
              <TaskItem
                id={id}
                title={task.title}
                isDone={task.isCompleted}
                onCheckAction={() => {}}
              />
            </li>
          );
        })}
      </ul>
    </Stack>
  );
};

export default PhaseItem;
