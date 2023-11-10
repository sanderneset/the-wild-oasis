import { useMutation, useQueryClient } from '@tanstack/react-query';
import { submitCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => submitCabin(newCabinData, id),
    onSuccess: () => {
      toast.success('Cabin edited');
      queryClient.invalidateQueries(['cabins']);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { isEditing, editCabin };
}
