import { useAtomValue, useSetAtom } from "jotai";
import { AtomButton, AtomText, AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";
import { TODOLIST_ATOM } from "../bottomLeft";

type Props = {
  children?: ReactNode;
};

const CountTodos = () => {
  const todo = useAtomValue(TODOLIST_ATOM);
  return (
    <AtomText fontSize="24px" fontWeight="bold">
      {todo.length}
    </AtomText>
  );
};

const TopRight: FC<Props> = () => {
  const setTodos = useSetAtom(TODOLIST_ATOM);
  return (
    <AtomWrapper>
      <CountTodos />
      <AtomText>Number of todo products</AtomText>
      <AtomButton backgroundColor="#e21c1c" onClick={() => setTodos([])}>
        Clear Todos
      </AtomButton>
    </AtomWrapper>
  );
};

export default TopRight;
