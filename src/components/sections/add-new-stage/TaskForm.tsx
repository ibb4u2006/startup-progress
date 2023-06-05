import Button from '@/components/buttons/Button';
import SelectField from '@/components/form/SelectField';
import TextField from '@/components/form/TextField';
import { ProgressContext } from '@/context/StageProgressProvider';
import { slugify } from '@/utils/string';
import { zodResolver } from '@hookform/resolvers/zod';
import classNames from 'classnames';
import { useContext, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  task: z.string().min(1, {
    message: 'Task is required',
  }),
  phase: z.string().min(1, {
    message: 'Phase is required',
  }),
});

const TaskForm = () => {
  const { state, dispatch } = useContext(ProgressContext);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: '',
      phase: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { phase, task } = values;
    dispatch({ type: 'ADD_TASK', payload: { order: phase, title: task } });
    reset();
  }

  const isFormError = !!errors.task?.message || !!errors.phase?.message;

  const phaseOptions = useMemo(() => {
    return [...state].map((option) => {
      const { order, title } = option;
      const id = slugify(`${order} ${title}`);
      return { id, label: title, value: order.toString() };
    });
  }, [state]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classNames('flex gap-5 items-end flex-grow flex-wrap', {
        'items-center': isFormError,
      })}
    >
      <TextField
        label="Enter task"
        placeholder="Please enter task"
        {...register('task')}
        error={errors.task?.message}
      />
      <SelectField
        label="Select task phase"
        placeholder="Select phase option"
        options={phaseOptions}
        {...register('phase')}
        error={errors.phase?.message}
      />
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default TaskForm;
