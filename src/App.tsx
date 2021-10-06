import { useState } from "react";
import * as C from "./App.styles";
import { AddArea } from "./components/AddArea";
import { ListItem } from "./components/ListItem";
import { Item } from "./types/item";

const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: "Comprar o pão na padaria",
      done: false,
    },
    {
      id: 2,
      name: "Comprar um bolo na padaria",
      done: true,
    },
  ]);

  const handleAddTask = (taskName: string) => {
    const newList = [...list];

    newList.push({ id: list.length + 1, name: taskName, done: false });

    setList(newList);
  };

  const handleChangeDone = (taskId: number, taskDone: boolean) => {
    const newList = [...list];

    for (let i in newList) {
      if (newList[i].id === taskId) {
        newList[i].done = taskDone;
      }
    }

    setList(newList);
  };

  return (
    <>
      <C.GlobalStyles />
      <C.Container>
        <C.Area>
          <C.Header>Lista de tarefas</C.Header>

          <AddArea onEnter={handleAddTask} />

          {list.map((item, index) => (
            <ListItem onChangeDone={handleChangeDone} item={item} key={index} />
          ))}
        </C.Area>
      </C.Container>
    </>
  );
};

export default App;
