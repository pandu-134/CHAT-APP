import Conversations from "./Conversations.jsx"
import LogoutButton from "./LogoutButton.jsx"
import SearchInput from "./Searchinput.jsx"

const Sidebar = () => {
    return (
        <div className='border-r border-slate-500 p-4 flex flex-col'> 
           <SearchInput />
            <div className='divider px-3'></div>
             <Conversations />
            <LogoutButton /> 
        </div>
    );
};

export default Sidebar;


//STARTER CODE FOR THIS FILE
// import Conversations from "./Conversations.jsx"
// import LogoutButton from "./LogoutButton.jsx"
// import SearchInput from "./Searchinput.jsx"

// const Sidebar = () => {
//     return (
//         <div className='border-r border-slate-500 p-4 flex flex-col'> 
//            <SearchInput />
//             <div className='divider px-3'></div>
//              <Conversations />
//             <LogoutButton /> 
//         </div>
//     );
// };

// export default Sidebar;
