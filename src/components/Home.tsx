import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["users", { age: 22, name: "hau" }],
    queryFn: () => {
      // const controller = new AbortController();
      // setTimeout(() => {
      //   controller.abort();
      //   console.log("CANCEL");
      // }, 2000);
      return new Promise((resolve) => {
        setTimeout(() => {
          const run = async () => {
            const data = await fetch(
              "https://jsonplaceholder.typicode.com/users/1"
              // { signal: controller.signal } //HUY GOI API VOI controller (new AbortController())
            ).then((response) => response.json());
            resolve(data);
          };
          run();
        }, 3000);
      });
    },
    // staleTime: 5 * 1000,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    console.log("mouted");
  }, []);

  console.log("data: ", data, "isLoading", isLoading, "isFetching", isFetching);
  return (
    <div>
      <div>{data?.id}</div>
      <NavLink to="/dashboard">Go to dashboard</NavLink>
    </div>
  );
};

export default Home;
