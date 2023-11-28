import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

function useTodayActivity() {
  const { isLoading, data: activities } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ["tofay-activity"],
  });
  return { activities, isLoading };
}

export default useTodayActivity;
