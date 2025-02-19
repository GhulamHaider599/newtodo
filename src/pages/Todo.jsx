// import React, { useEffect, useState } from "react";
// import { FiPlus, FiSearch, FiEdit, FiCheckCircle, FiTrash2 } from "react-icons/fi";
// import { Modal, Input, Button, notification, Dropdown } from "antd"; // For Ant Design modal and notifications
// import { format } from "date-fns"; // Ensure the correct import here
// import Calendar from "./Calender";
// import '../config/global'

// const initialState = { title: '', detail: '' }
// const Todo = () => {

//     const [state, setState] = useState(initialState)
//     const [todos, setTodos] = useState([]);
//     // const [loading, setLoading] = useState(false);
//     const [editTodo, setEditTodo] = useState(null); // State for editing a todo
//     const [filteredTodos, setFilteredTodos] = useState([]);
//     const [filterCategory, setFilterCategory] = useState("all"); // State for selected filter category

//     // Get todos from localStorage on initial load
//     useEffect(() => {
//         const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
//         setTodos(savedTodos);
//     }, []);

//     // Calculate Completed and Pending Tasks
//     const completedTasks = todos.filter((todo) => todo.completedDate);
//     const pendingTasks = todos.filter((todo) => !todo.completedDate);
//     //   -----------------------------------
//     // Filter tasks based on category
//     const filterTasksByCategory = (category) => {
//         setFilterCategory(category);
//         if (category === "completed") {
//             setFilteredTodos(completedTasks);
//         } else if (category === "pending") {
//             setFilteredTodos(pendingTasks);
//         } else {
//             setFilteredTodos(todos);
//         }
//     };
//     const handleChange = (e) => {
//         setState(s => ({ ...s, [e.target.name]: e.target.value }))
//     }


//     // Handle todo submission (add task)
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const { title, detail } = state;
//         if (title && detail) {
//             const newTodo = {
//                 title,
//                 detail,
//                 createdDate: new Date(),
//                 completedDate: null,
//                 id: Date.now(),
//             };
//             const updatedTodos = [...todos, newTodo];
//             localStorage.setItem("todos", JSON.stringify(updatedTodos));
//             setTodos(updatedTodos);
//             setState(initialState); // Clear inputs after submission
//             window.notify("Todo created successfully", "success")
//         } else {
//             //   notification.error({ message: "Please provide a title and details!" });
//             window.notify("Error While Creatinf Todo!", "error")
//         }
//     };
//     // Edit Todo - Open Modal
//     const handleEdit = (todo) => {
//         setEditTodo(todo);
//     };

//     // Save Edited Todo
//     const saveEditedTodo = () => {
//         const updatedTodos = todos.map((todo) =>
//             todo.id === editTodo.id ? { ...editTodo } : todo
//         );
//         setTodos(updatedTodos);
//         localStorage.setItem("todos", JSON.stringify(updatedTodos));
//         setEditTodo(null); // Close the modal
//         // notification.success({ message: "Todo updated successfully!" });
//         window.notify("Todo updated successfully!", "success")
//     };
//     // Delete Todo
//     const handleDelete = (todoId) => {
//         const updatedTodos = todos.filter((todo) => todo.id !== todoId);
//         setTodos(updatedTodos);
//         localStorage.setItem("todos", JSON.stringify(updatedTodos));
//         // notification.success({ message: "Todo deleted successfully!" });
//         window.notify("Todo deleted successfully!", "success")
//     };
//     // Mark Todo as Completed
//     const handleCheck = (todo) => {
//         const updatedTodos = todos.map((t) =>
//             t.id === todo.id ? { ...t, completedDate: new Date() } : t
//         );
//         setTodos(updatedTodos);
//         localStorage.setItem("todos", JSON.stringify(updatedTodos));
//         // notification.success({ message: "Todo marked as completed!" });
//         window.notify("Todo marked as completed!", "success")

//     };

//     //     const [pendingTask, setPendingTask] = useState(todos.length)
//     // console.log(pendingTask)
//     return (
//         <div className="  p-6">
//             <div className="flex justify-center items-center mb-6">
//                 <h1 className='text-5xl font-semibold roboto'>Hello, Ghulam Haider, <span className="text-[#4a4a4a]">Start planning today </span> </h1>

//             </div>


//             <div className="bg-[#FAF7F2]  ps-[48px] py-6 pe-[90px] rounded-2xl ">
//                 {/* Header */}
//                 <div className="flex justify-between items-center mb-6">
//                     <div className="w-[34%]">
//                         {/* <h2 className="text-2xl italic text-red-500 font-semibold ">Sunday</h2> */}

//                     </div>
//                     <div className="flex justify-between items-center w-[67%]">
//                         <input
//                             type="text" name="title" value={state.title} onChange={handleChange}
//                             placeholder="Type Title Of Task"
//                             className="w-1/4 p-3 rounded-md bg-blue-50 text-gray-700 border text-sm border-gray-300 outline-none"
//                         />
//                         <input
//                             type="text" name="detail" value={state.detail} onChange={handleChange}
//                             placeholder="Detail Of Your Task"
//                             className="w-[780px] p-3 rounded-md bg-blue-50 text-gray-700 border text-sm border-gray-300 outline-none mx-2"
//                         />

//                         {/* Add Button */}
//                         <button className="w-[65px] h-12 flex justify-center items-center bg-green-600 rounded-r-md text-white hover:bg-green-700 transition" onClick={handleSubmit}>
//                             <FiPlus size={20} />
//                         </button>
//                     </div>

//                 </div>


//                 {/* Main Grid Layout */}
//                 <div className="grid grid-cols-12 gap-6">

//                     <div className="col-span-4 flex justify-items-start items-center ">

//                         <Calendar />

//                     </div>


//                     {/* Right Section - Task List */}
//                     <div className="col-span-8 space-y-4">
//                         {/* Search & Filter */}
//                         <div className="flex justify-between relative">

//                             {/* <button className="flex items-center gap-2 px-4 py-2 bg-[#F0D1A8] rounded-md">
//                                 By category ▼
//                             </button> */}

//                             {/* Filter Tasks by Category */}
//                             <div className=" mb-4">
//                                 <button
//                                     onClick={() => filterTasksByCategory("all")}
//                                     className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
//                                 >
//                                     All Tasks
//                                 </button>
//                                 <button
//                                     onClick={() => filterTasksByCategory("completed")}
//                                     className="px-4 py-2 bg-green-500 text-white rounded-md mr-2"
//                                 >
//                                     Completed Tasks
//                                 </button>
//                                 <button
//                                     onClick={() => filterTasksByCategory("pending")}
//                                     className="px-4 py-2 bg-yellow-500 text-white rounded-md"
//                                 >
//                                     Pending Tasks
//                                 </button>
//                             </div>
//                             {/* <button className="flex items-center gap-2 px-4 py-2 bg-[#F0D1A8] rounded-md absolute left-50">
//                                 By priority ▼
//                             </button> */}
//                             <div className="relative">
//                                 <input type="text" placeholder="Search by name" className="border text-sm border-[#E3C6A1] p-2 pr-8 text-blue-500 outline-[#E3C6A1] rounded-md" />
//                                 <FiSearch className="absolute right-3 top-3 text-gray-500" />
//                             </div>
//                         </div>

//                         {/* Check if there are any todos */}
//                         {todos.length === 0 ? (
//                             <div className="text-center text-lg font-semibold text-gray-600 mt-10">
//                                 <span role="img" aria-label="emoji">🎉</span> Hurray! There is no tasks today!
//                             </div>
//                         ) : (
//                             // {/* Task Cards */}

//                             <div className="grid grid-cols-2 gap-4">

//                                 {filteredTodos.map((todo) => (
//                                     <div key={todo.id} className="bg-[#F0D1A8] p-4 rounded-lg shadow-md flex flex-col">
//                                         <div className="flex  justify-between items-center">
//                                             <h3 className="font-semibold text-lg">{todo.title}</h3>
//                                             <div className="flex  gap-2">
//                                                 <FiCheckCircle className={`text-green-600 cursor-pointer ${todo.completedDate ? "opacity-50" : ""}`} onClick={() => handleCheck(todo)} />

//                                                 <FiEdit className="text-blue-600 cursor-pointer" onClick={() => handleEdit(todo)} />
//                                                 <FiTrash2 className="text-red-600 cursor-pointer" onClick={() => handleDelete(todo.id)} />
//                                             </div>
//                                         </div>
//                                         <p className="text-sm text-gray-700">{todo.detail}</p>
//                                         <div className="flex justify-between mt-2">
//                                             <p className="text-sm font-semibold">Created: {format(new Date(todo.createdDate), " dd-MM-yyyy")}</p>
//                                             {todo.completedDate && (
//                                                 <p className="text-sm font-semibold">Completed: {format(new Date(todo.completedDate), " dd-MM-yyyy")}</p>
//                                             )}

//                                         </div>
//                                     </div>

//                                 ))}

//                             </div>
//                         )}
//                         {/* Load More Button */}

//                         {todos.length > 4 && (
//                             <div className="text-center mt-4">
//                                 <button
//                                     onClick={() => filterTasksByCategory("all")}
//                                     className="border-2 border-black px-6 py-2 rounded-md hover:bg-black hover:text-white transition"
//                                 >
//                                     Load more
//                                 </button>
//                             </div>
//                         )}


//                     </div>
//                     {/* Edit Todo Modal */}
//                     {editTodo && (
//                         <Modal
//                             title="Edit Todo"
//                             visible={true}
//                             onCancel={() => setEditTodo(null)}
//                             footer={null}
//                         >
//                             <Input
//                                 value={editTodo.title} className="mb-4"
//                                 onChange={(e) => setEditTodo({ ...editTodo, title: e.target.value })}
//                                 placeholder="Edit Title"
//                             />
//                             <Input.TextArea
//                                 value={editTodo.detail}
//                                 onChange={(e) => setEditTodo({ ...editTodo, detail: e.target.value })}
//                                 placeholder="Edit Details"
//                                 rows={4}
//                                 className="mt-4"
//                             />
//                             <Button onClick={saveEditedTodo} className="mt-4 hover:bg-green-600 " block >Update Todo</Button>
//                         </Modal>
//                     )}

//                     {/* Statistics */}
//                     <div className="col-span-12 flex gap-6 mt-6">
//                         <div className=" bg-[#F0D1A8] text-center p-6 rounded-lg w-[15%] hover:bg-[#d1ab79] shadow-lg shadow-gray-500/50">
//                             <h3 className="text-lg font-bold">COMPLETED TASKS</h3>
//                             <p className="text-4xl font-bold">{completedTasks.length < 10 ? "0" + completedTasks.length : completedTasks.length}</p>
//                         </div>
//                         <div className=" bg-[#C4A49F] text-center text-white p-6 rounded-lg w-[15%] hover:bg-[#c27e73] shadow-lg shadow-gray-500/50">
//                             <h3 className="text-lg font-bold">PENDING <br /> TASKS</h3>
//                             <p className="text-4xl font-bold">{pendingTasks.length < 10 ? "0" + pendingTasks.length : pendingTasks.length}</p>
//                         </div>
//                         <div className=" bg-white text-center p-6 rounded-lg  w-[100%] hover:bg-[#d8d5d2] shadow-lg shadow-gray-500/50 ">
//                             <h3 className="text-lg text-blue-500 font-bold">Tasks created</h3>
//                             <p className="text-4xl font-bold">{todos.length < 10 ? "0" + todos.length : todos.length}</p>
//                         </div>
//                         {/* <div className="flex-1 bg-white text-center p-6 rounded-lg shadow-md">
//                             <h3 className="text-lg text-gray-600 font-bold">25k+ Active Users</h3>
//                             <div className="flex justify-center -space-x-3">
//                                 <img src="https://randomuser.me/api/portraits/men/1.jpg" className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
//                                 <img src="https://randomuser.me/api/portraits/men/2.jpg" className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
//                                 <img src="https://randomuser.me/api/portraits/men/3.jpg" className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
//                             </div>
//                         </div> */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Todo;

// // -----------------------------------------------------------------------


import React, { useEffect, useState } from "react";
import { FiPlus, FiSearch, FiEdit, FiCheckCircle, FiTrash2 } from "react-icons/fi";
import { Modal, Input, Button, notification, Dropdown } from "antd"; // For Ant Design modal and notifications
import { format } from "date-fns"; // Ensure the correct import here
import Calendar from "./Calender";
import '../config/global'

const initialState = { title: '', detail: '' }
const Todo = () => {

    const [state, setState] = useState(initialState)
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null); // State for editing a todo
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [filterCategory, setFilterCategory] = useState("all"); // State for selected filter category

    // Get todos from localStorage on initial load
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(savedTodos);
    }, []);

    // Calculate Completed and Pending Tasks
    const completedTasks = todos.filter((todo) => todo.completedDate);
    const pendingTasks = todos.filter((todo) => !todo.completedDate);

    // Filter tasks based on category
    const filterTasksByCategory = (category) => {
        setFilterCategory(category);
        if (category === "completed") {
            setFilteredTodos(completedTasks);
        } else if (category === "pending") {
            setFilteredTodos(pendingTasks);
        } else {
            setFilteredTodos(todos);
        }
    };

    const handleChange = (e) => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    // Handle todo submission (add task)
    const handleSubmit = (e) => {
        e.preventDefault();
        const { title, detail } = state;
        if (title && detail) {
            const newTodo = {
                title,
                detail,
                createdDate: new Date(),
                completedDate: null,
                id: Date.now(),
            };
            const updatedTodos = [...todos, newTodo];
            localStorage.setItem("todos", JSON.stringify(updatedTodos));
            setTodos(updatedTodos);
            setState(initialState); // Clear inputs after submission
            window.notify("Todo created successfully", "success")
        } else {
            window.notify("Error While Creating Todo!", "error")
        }
    };

    // Edit Todo - Open Modal
    const handleEdit = (todo) => {
        setEditTodo(todo);
    };

    // Save Edited Todo
    const saveEditedTodo = () => {
        const updatedTodos = todos.map((todo) =>
            todo.id === editTodo.id ? { ...editTodo } : todo
        );
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        setEditTodo(null); // Close the modal
        window.notify("Todo updated successfully!", "success")
    };

    // Delete Todo
    const handleDelete = (todoId) => {
        const updatedTodos = todos.filter((todo) => todo.id !== todoId);
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        window.notify("Todo deleted successfully!", "success")
    };

    // Mark Todo as Completed
    const handleCheck = (todo) => {
        const updatedTodos = todos.map((t) =>
            t.id === todo.id ? { ...t, completedDate: new Date() } : t
        );
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        window.notify("Todo marked as completed!", "success")
    };

    return (
        <div className="p-6">
            <div className="flex justify-center items-center mb-6">
                <h1 className='text-5xl font-semibold roboto'>Hello, Ghulam Haider, <span className="text-[#4a4a4a]">Start planning today </span> </h1>
            </div>

            <div className="bg-[#FAF7F2] px-6 py-6 rounded-2xl">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div className="w-full sm:w-[34%] hidden md:block">
                    </div>
                    <div className="flex flex-col sm:flex-row w-[100%] md:w-[67%] gap-4 sm:gap-2 sm:justify-between">
                        <input
                            type="text" name="title" value={state.title} onChange={handleChange}
                            placeholder="Type Title Of Task"
                            className="w-full sm:w-1/4  p-3 rounded-md bg-blue-50 text-gray-700 border text-sm border-gray-300 outline-none"
                        />
                        <input
                            type="text" name="detail" value={state.detail} onChange={handleChange}
                            placeholder="Detail Of Your Task"
                            className="w-full sm:w-[780px] p-3 rounded-md bg-blue-50 text-gray-700 border text-sm border-gray-300 outline-none"
                        />
                        {/* Add Button */}
                        <button className="w-[100%] md:w-[65px] h-12 flex justify-center items-center bg-green-600 rounded-md sm:rounded-r-md   text-white hover:bg-green-700 transition" onClick={handleSubmit}>
                            <FiPlus size={20} />
                        </button>
                    </div>
                </div>

                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                    <div className="col-span-1 sm:col-span-4 flex justify-center items-center">
                        <Calendar />
                    </div>

                    {/* Right Section - Task List */}
                    <div className="col-span-1 sm:col-span-8 space-y-4">
                        {/* Search & Filter */}
                        <div className="flex justify-between sm:relative flex-col sm:flex-row">
                            <div className="flex gap-4 mb-4 sm:mb-0">
                                <button onClick={() => filterTasksByCategory("all")} className="px-4 py-2 bg-blue-500 text-white rounded-md">All Tasks</button>
                                <button onClick={() => filterTasksByCategory("completed")} className="px-4 py-2 bg-green-500 text-white rounded-md">Completed Tasks</button>
                                <button onClick={() => filterTasksByCategory("pending")} className="px-4 py-2 bg-yellow-500 text-white rounded-md">Pending Tasks</button>
                            </div>
                            {/* <div className="relative">
                                <input type="text" placeholder="Search by name" className="border text-sm border-[#E3C6A1] p-2 pr-8 text-blue-500 outline-[#E3C6A1] rounded-md" />
                                <FiSearch className="absolute right-3 top-3 text-gray-500" />
                            </div> */}
                        </div>

                        {/* Check if there are any todos */}
                        {todos.length === 0 ? (
                            <div className="text-center text-lg font-semibold text-gray-600 mt-10">
                                <span role="img" aria-label="emoji">🎉</span> Hurray! There is no tasks today!
                            </div>
                        ) : (
                            // Task Cards
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                {filteredTodos.map((todo) => (
                                    <div key={todo.id} className="bg-[#F0D1A8] p-4 rounded-lg shadow-md flex flex-col">
                                        <div className="flex justify-between items-center">
                                            <h3 className="font-semibold text-lg">{todo.title}</h3>
                                            <div className="flex gap-2">
                                                <FiCheckCircle className={`text-green-600 cursor-pointer ${todo.completedDate ? "opacity-50" : ""}`} onClick={() => handleCheck(todo)} />
                                                <FiEdit className="text-blue-600 cursor-pointer" onClick={() => handleEdit(todo)} />
                                                <FiTrash2 className="text-red-600 cursor-pointer" onClick={() => handleDelete(todo.id)} />
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-700">{todo.detail}</p>
                                        <div className="flex justify-between mt-2">
                                            <p className="text-sm font-semibold">Created: {format(new Date(todo.createdDate), " dd-MM-yyyy")}</p>
                                            {todo.completedDate && (
                                                <p className="text-sm font-semibold">Completed: {format(new Date(todo.completedDate), " dd-MM-yyyy")}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Load More Button */}
                        {todos.length > 4 && (
                            <div className="text-center mt-4">
                                <button onClick={() => filterTasksByCategory("all")} className="border-2 border-black px-6 py-2 rounded-md hover:bg-black hover:text-white transition">
                                    Load more
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Edit Todo Modal */}
                {editTodo && (
                    <Modal
                        title="Edit Todo"
                        visible={true}
                        onCancel={() => setEditTodo(null)}
                        footer={null}
                    >
                        <Input
                            value={editTodo.title} className="mb-4"
                            onChange={(e) => setEditTodo({ ...editTodo, title: e.target.value })}
                            placeholder="Edit Title"
                        />
                        <Input.TextArea
                            value={editTodo.detail}
                            onChange={(e) => setEditTodo({ ...editTodo, detail: e.target.value })}
                            placeholder="Edit Details"
                            rows={4}
                            className="mt-4"
                        />
                        <Button onClick={saveEditedTodo} className="mt-4 hover:bg-green-600 " block >Update Todo</Button>
                    </Modal>
                )}

                {/* Statistics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                    <div className="bg-[#F0D1A8] text-center p-6 rounded-lg hover:bg-[#d1ab79] shadow-lg shadow-gray-500/50">
                        <h3 className="text-lg font-bold">COMPLETED TASKS</h3>
                        <p className="text-4xl font-bold">{completedTasks.length < 10 ? "0" + completedTasks.length : completedTasks.length}</p>
                    </div>
                    <div className="bg-[#C4A49F] text-center text-white p-6 rounded-lg hover:bg-[#c27e73] shadow-lg shadow-gray-500/50">
                        <h3 className="text-lg font-bold">PENDING TASKS</h3>
                        <p className="text-4xl font-bold">{pendingTasks.length < 10 ? "0" + pendingTasks.length : pendingTasks.length}</p>
                    </div>
                    <div className="bg-white text-center p-6 rounded-lg hover:bg-[#d8d5d2] shadow-lg shadow-gray-500/50">
                        <h3 className="text-lg text-blue-500 font-bold">Tasks created</h3>
                        <p className="text-4xl font-bold">{todos.length < 10 ? "0" + todos.length : todos.length}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Todo;
