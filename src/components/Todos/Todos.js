import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { PostServices } from "../../services/apiServices";

const Todos = () => {
    const todos = useSelector((store)=>store.todosReducer.todos);
    const dispatch = useDispatch();
  
    useEffect(() => {
        PostServices.getTodos(dispatch);
    }, []);
  
    return (
      <div>
        <h2>Todos</h2>
        {todos?.map((todo)=> {
                return  (
                        <div key={todo.id} style={{border: '1px solid black', margin: '10px'}}>
                            <p>{todo.id}</p>
                            <h4>{todo.title}</h4>
                        </div>
                    )
            })}
      </div>
    );
  }

  export default Todos;