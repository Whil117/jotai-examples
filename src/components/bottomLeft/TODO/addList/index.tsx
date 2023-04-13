import { atom, useAtom, useSetAtom } from "jotai";
import { AtomButton, AtomInput, AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";
import { TODOLIST_ATOM } from "../..";

type Props = {
  children?: ReactNode;
};

const SaveTodoList = () => {
  const setTodoList = useSetAtom(TODOLIST_ATOM);
  const [inputAdd, setAdd] = useAtom(INPUTADDTODOLIST_ATOM);
  return (
    <AtomButton
      backgroundColor="#0172FF"
      onClick={() => {
        if (inputAdd.length) {
          setTodoList((prev) => [
            ...prev,
            {
              id: uuidv4(),
              title: inputAdd,
            },
          ]);
          setAdd("");
        }
      }}
    >
      Save
    </AtomButton>
  );
};

const INPUTADDTODOLIST_ATOM = atom("");

const InputAddList = () => {
  const [inputAdd, setInputAdd] = useAtom(INPUTADDTODOLIST_ATOM);

  return (
    <AtomInput
      type="text"
      placeholder="Write your product name"
      value={inputAdd}
      onChange={(event) => setInputAdd(event.target.value)}
    />
  );
};

const AddTodoList: FC<Props> = (props) => {
  return (
    <AtomWrapper flexDirection="row" alignItems="center" gap="20px">
      <InputAddList />
      <SaveTodoList />
    </AtomWrapper>
  );
};

export default AddTodoList;
