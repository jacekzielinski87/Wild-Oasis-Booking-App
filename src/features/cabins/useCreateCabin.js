import {toast} from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";

export function useCreateCabin() {
const QueryClient = useQueryClient();

  const {mutate: createCabin, isLoading: isCreating} = useMutation ({
      mutationFn: createEditCabin,
      onSuccess: () => {
      toast.success('New Cabin created');
      QueryClient.invalidateQueries({queryKey: ["cabins"] });
      
    },
      onError: (err) => toast.error(err.message),  
  });
  return {isCreating, createCabin};
}