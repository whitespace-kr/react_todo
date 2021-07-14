import React,{useState,useRef,useCallback} from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';


const App =() => {
  const [todos,setTodos] = useState([
    {
      id: 1,
      text: 'knowing react basic',
      checked: true, 
    },
    {
      id: 2,
      text: 'styling components',
      checkecd:false,
    },
    {
      id: 3,
      text: 'making todo app',
      checked: true,
    },
    ]
  );

  const nextId = useRef(4);
  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !==id ));
    },
    [todos],
  );

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checkecd: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onToggle = useCallback(
    id => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, checked: !todo.checkecd} : todo,),
      );
    }, [todos],
  );

  return (
  <TodoTemplate>
    <TodoInsert onInsert={onInsert}/>
    <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
  </TodoTemplate>
  );
};

export default App;