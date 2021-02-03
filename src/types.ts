export type Todo = {
  id: number;
  text: string;
  complete: boolean;
};

export type toggleTodo = (selectedtodo:Todo)=>void;

export type addTodo = (newTodo:string)=>void;