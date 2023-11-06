import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as delBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isLoading: isDeletingBooking } = useMutation({
    mutationFn: (bookingId) => {
      delBooking(bookingId);
    },
    onSuccess: () => {
      toast.success("Booking successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleteBooking, isDeletingBooking };
}

export default useDeleteBooking;
