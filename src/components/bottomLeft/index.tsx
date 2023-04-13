import { css } from "@emotion/react";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { AtomButton, AtomInput, AtomText, AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";
import { NAME_ATOM } from "../topleft";
import AddTodoList from "./TODO/addList";

type Props = {
  children?: ReactNode;
};

type TodoListProps = {
  id: string;
  title: string;
};

export const TODOLIST_ATOM = atom([] as TodoListProps[]);

type DeleteProps = {
  id: string;
};

const DELETEATOM = atom(null, (get, set, args: DeleteProps) => {
  const todos = get(TODOLIST_ATOM);
  set(
    TODOLIST_ATOM,
    todos?.filter((item) => item.id !== args.id)
  );
});

const CreatedByTodo = () => {
  const name = useAtomValue(NAME_ATOM);
  return <AtomText>created by:{name}</AtomText>;
};

const TodoList = () => {
  const todo = useAtomValue(TODOLIST_ATOM);
  const deleteTodo = useSetAtom(DELETEATOM);

  return (
    <AtomWrapper
      customCSS={() => css`
        height: 300px;
        overflow-y: scroll;
        overflow-x: none;
        justify-content: flex-start;
        padding: 20px 20px 20px 0px;
        ::-webkit-scrollbar {
          width: 7px;
          margin-left: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #b3b3b3;
          box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
        }
      `}
    >
      {todo?.map((item, index) => (
        <>
          <AtomWrapper
            key={item.id}
            flexDirection="row"
            alignItems="center"
            height="auto"
          >
            <strong>{index + 1}.</strong>
            <AtomInput type="text" value={item.title} />
            <AtomButton
              backgroundColor="#e21c1c"
              onClick={() => {
                deleteTodo({
                  id: item.id,
                });
              }}
            >
              Delete
            </AtomButton>
          </AtomWrapper>
          <CreatedByTodo />
        </>
      ))}
    </AtomWrapper>
  );
};

const BottomLeft: FC<Props> = () => {
  return (
    <AtomWrapper height="auto">
      <AtomText fontWeight="bold">PRODUCT TODO LIST</AtomText>
      <AddTodoList />
      <TodoList />
    </AtomWrapper>
  );
};

export default BottomLeft;
