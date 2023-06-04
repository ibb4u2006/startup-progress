import Button from '@/components/buttons/Button';
import TextField from '@/components/form/TextField';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  phase: z.string().min(1, {
    message: 'Phase is required',
  }),
});

const PhaseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phase: '',
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
      <TextField label="Enter phase" {...register('phase')} />
      <Button type="submit">Add Phase</Button>
    </form>
  );
};

export default PhaseForm;
