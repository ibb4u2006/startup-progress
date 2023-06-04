import Button from '@/components/buttons/Button';
import TextField from '@/components/form/TextField';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  task: z.string().min(1, {
    message: 'Task is required',
  }),
});

const TaskForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-5 items-end flex-grow flex-wrap"
    >
      <TextField label="Enter task" {...register('task')} />
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default TaskForm;
