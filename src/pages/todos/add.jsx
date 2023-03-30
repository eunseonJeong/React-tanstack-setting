import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const TodoPage = () => {
  const { query } = useRouter();
  const { data } = useQuery({
    queryKey: ["GET_TODO", query.id],
    // 쿼리키는 "반드시" 고유한 값이어야 한다.
    // 쿼리키는 요청 1개당 고유한 1개가 있어야 한다.
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:4000/todos/${query.id}`
      );
      return data;
    },
    enabled: Boolean(query.id),
  });

  console.log(data);
  return <div>{data?.title}</div>;
};

export default TodoPage;