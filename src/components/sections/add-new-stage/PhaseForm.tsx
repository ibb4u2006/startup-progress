import Button from '@/components/buttons/Button';
import TextField from '@/components/form/TextField';
import { ProgressContext } from '@/context/StageProgressProvider';
import { zodResolver } from '@hookform/resolvers/zod';
import classNames from 'classnames';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  phase: z.string().min(1, {
    message: 'Phase is required',
  }),
});

const PhaseForm = () => {
  const { dispatch } = useContext(ProgressContext);
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
    dispatch({ type: 'ADD_PHASE', payload: values.phase });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classNames('flex gap-5 items-end flex-grow flex-wrap', {
        'items-center': !!errors.phase?.message,
      })}
    >
      <TextField
        label="Enter phase"
        placeholder="Please enter phase"
        {...register('phase')}
        error={errors.phase?.message}
      />
      <Button type="submit">Add Phase</Button>
    </form>
  );
};

export default PhaseForm;
