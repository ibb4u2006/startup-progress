import Stack from '@/components/common/Stack';
import SelectField from '@/components/form/SelectField';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import PhaseForm from './PhaseForm';
import TaskForm from './TaskForm';
import { swithObjectValues } from '@/utils/data';

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
    <div className="py-20">
      <h2 className="my-5 text-heading-2">Create Stage Form</h2>
      <Stack
        direction="horizontal"
        className="gap-5 items-lg-end flex-grow flex-wrap"
      >
        <SelectField
          label="Select stage"
          placeholder="Please select a stage to add"
          defaultValue={stage}
          options={stageoptions}
          onChange={handleStageChange}
        />
        {showForm}
      </Stack>
    </div>
  );
};

export default AddNewStage;
