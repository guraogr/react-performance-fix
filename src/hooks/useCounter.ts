import { useCallback, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const onClickIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const onClickIncrementDouble = useCallback(() => {
    setCount((prev) => prev + 2);
  }, []);

  return { count, onClickIncrement, onClickIncrementDouble };
};
