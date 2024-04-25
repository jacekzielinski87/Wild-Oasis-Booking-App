import {toast} from "react-hot-toast";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";



export function useEditCabin() {
    const QueryClient = useQueryClient();

const {mutate:EditCabin, isLoading: isEditing} = useMutation ({
    mutationFn: ({newCabin, id}) => createEditCabin(newCabin, id),
    onSuccess: () => {
    toast.success('Cabin Succesfully edited');
    QueryClient.invalidateQueries({queryKey: ["cabins"] });
},
    onError: (err) => toast.error(err.message),  
});
}