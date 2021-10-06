import { useState } from "react";
import { Item } from "../../types/item";
import * as C from "./styles";

type Props = {
  item: Item;
  onChangeDone: (taskId: number, taskDone: boolean) => void;
};

export const ListItem = ({ item, onChangeDone }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  const handleChangeIsChecked = (isCheckedValue: boolean) => {
    setIsChecked(isCheckedValue);
    onChangeDone(item.id, isCheckedValue);
  };

  return (
    <C.Container done={isChecked}>
      <input
        name="name"
        id={`list-item-${item.id}`}
        type="checkbox"
        checked={isChecked}
        onChange={(event) => handleChangeIsChecked(event.target.checked)}
      />
      <label htmlFor={`list-item-${item.id}`}>{item.name}</label>
    </C.Container>
  );
};
