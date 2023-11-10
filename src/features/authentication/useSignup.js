import { useMutation } from '@tanstack/react-query';
import { signUp as signUpApi } from '../../services/apiAuth.js';
import toast from 'react-hot-toast';

export function useSignup() {
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (data) => {
      toast.success('Signup successful! Please verify the the new account.');
    },
  });

  return { signUp, isLoading };
}
