import Stack from '@/components/common/Stack';
import SelectField from '@/components/form/SelectField';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import PhaseForm from './PhaseForm';
import TaskForm from './TaskForm';
import { swithObjectValues } from '@/utils/data';
import Container from '@/components/common/Container';

enum AddStage {
  phase = 'phase',
  task = 'task',
}

const stageoptions = [
  {
    id: AddStage.phase,
    label: 'Phase',
    value: AddStage.phase,
  },
  {
    id: AddStage.task,
    label: 'Task',
    value: AddStage.task,
  },
];

const AddNewStage = () => {
  const [stage, setStage] = useState<AddStage>(AddStage.phase);

  const handleStageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setStage(value as AddStage);
  };

  const showForm = swithObjectValues(stage, {
    [AddStage.phase]: <PhaseForm />,
    [AddStage.task]: <TaskForm />,
  });

  return (
    <Container className="py-5">
      <h2 className="my-5 text-heading-2 font-bold">Progress form</h2>
      <Stack
        direction="horizontal"
        className="gap-5 items-lg-end flex-grow flex-wrap"
      >
        <SelectField
          label="Select stage"
          placeholder="Select stage option"
          defaultValue={stage}
          options={stageoptions}
          onChange={handleStageChange}
        />
        {showForm}
      </Stack>
    </Container>
  );
};

export default AddNewStage;
