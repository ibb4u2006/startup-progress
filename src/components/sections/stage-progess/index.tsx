import Container from '@/components/common/Container';
import PhaseItem from './PhaseItem';
import { useContext } from 'react';
import { ProgressContext } from '@/context/StageProgressProvider';
import { slugify } from '@/utils/string';

const StageProgress = () => {
  const { state: phases } = useContext(ProgressContext);
  return (
    <Container className="py-5">
      <h2 className="my-5 text-heading-2 font-bold">My startup progress</h2>
      <ul className="flex flex-col gap-10">
        {phases.map((phase) => {
          const id = slugify(`${phase.order} ${phase.title}`);
          return (
            <li key={id}>
              <PhaseItem
                isCompleted={phase.isCompleted}
                order={phase.order}
                title={phase.title}
                tasks={phase.tasks}
              />
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default StageProgress;
