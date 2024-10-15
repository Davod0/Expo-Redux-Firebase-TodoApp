export type Todo = {
    id: string;
    text: string;
    completed: boolean;
};

export type TodoCreate = Omit<Todo, "id" | "completed">;

export const mockedTodos: Todo[] = [
    {
        id: "1",
        text: "Buy groceries",
        completed: false,
    },
    {
        id: "2",
        text: "Walk the dog",
        completed: true,
    },
    {
        id: "3",
        text: "Finish project report",
        completed: false,
    },
    {
        id: "4",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Vitae cupiditate, voluptas aut eligendi laudantium, reprehenderit, aperiam aspernatur recusandae perferendis assumenda earum delectus quam totam alias inventore optio.Deleniti, quo harum.",
        completed: false,
    },
];