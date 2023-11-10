import { useMutation, useQueryClient } from '@tanstack/react-query';
import { submitCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: submitCabin,
    onSuccess: () => {
      toast.success('Cabin created');
      queryClient.invalidateQueries(['cabins']);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { createCabin, isCreating };
}
