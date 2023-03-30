
import { useGetTodos } from "@/apis/hooks/useGetTodos";
import { keys } from "@/utils/createQueryKey";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";

const Ddang = () => {
  // todos?
  const queryClient = useQueryClient(); // 캐시가 된 정보
  console.log(queryClient.getQueriesData(keys.GET_TODOS));

  return <div>ddang</div>;
};

export default Ddang;