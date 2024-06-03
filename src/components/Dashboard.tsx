import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["users", { name: "hau", age: 22 }],
    queryFn: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const run = async () => {
            const data = await fetch(
              "https://jsonplaceholder.typicode.com/users/2"
              // { signal: controller.signal } //HUY GOI API VOI controller (new AbortController())
            ).then((response) => response.json());
            resolve(data);
          };
          run();
        }, 3000);
      });
    },
    // keepPreviousData: true,
    // staleTime: 5 * 1000,
    refetchOnWindowFocus: false,
  });
  console.log("data: ", data, "isLoading", isLoading, "isFetching", isFetching);
  return <div>{data?.id}</div>;
};

export default Dashboard;
