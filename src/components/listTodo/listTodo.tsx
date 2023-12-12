import "./listTodo.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { Todo } from "../../App";
import { useState,useRef } from "react";

interface Props {
  todo: Todo[];
  deleteTodo: Function;
  updateTodo: Function;
  deleteAll:Function
}

const ListTodo = (props: Props): JSX.Element => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [updateData, setUpdateData] = useState<string>("");
  const [idUpdate, setIdUpdate] = useState<null | number>(null);

  let handleUpdate = (): void => {
    let newTodo = {
      id: idUpdate,
      content: updateData,
      status: false,
    };
    props.updateTodo(newTodo,idUpdate);
    setOpenModal(false);
  };


  return (
    <section className="listTodoGroup">
      {openModal ? (
        <div className="modal">
          <div className="modalAction">
            <input 
            autoFocus
            value={updateData}
            type="text" 
            onChange={(event: any) =>
                setUpdateData(event.target.value)
                }
            />
            <button onClick={handleUpdate}>Update</button>
            <button onClick={() => 
                setOpenModal(false)
                
                }>Esc</button>
          </div>
        </div>
      ) : null}

      <div className="content">
        <ul className="list">
          {props.todo.map((item) => {
            return (
              <li className="todo">
                <p>{item.content}</p>
                <div className="actions">
                  <FaRegTrashAlt
                    className="iconTodo"
                    onClick={() => props.deleteTodo(item.id)}
                  />
                  <FaEdit
                    onClick={() => {
                      setOpenModal(true);
                      setUpdateData(item.content);
                      setIdUpdate(item.id);
                    }}
                    className="iconTodo"
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <button onClick={() => props.deleteAll()} className="delete">Delete All</button>
    </section>
  );
};

export default ListTodo;
