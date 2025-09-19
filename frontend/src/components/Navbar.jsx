// import React from "react";
// import { useAuthStore } from "../store/useAuthStore";
// import { Link } from "react-router-dom";
// import { LogOut, MessageSquare, Settings, User } from "lucide-react";
// const Navbar = () => {
//   const { logout, authUser } = useAuthStore();

//   return (
//     <header
//       className=" border-b border-base-300 fixed w-full top-0 z-40 
//     backdrop-blur-lg bg-base-100/80"
//     >
//       <div className="container mx-auto px-4 h-16">
//         <div className="flex items-center justify-between h-full">
//           <div className="flex items-center gap-8">
//             <Link
//               to="/"
//               className="flex items-center gap-2.5 hover:opacity-80 transition-all"
//             >
//               <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
//                 <MessageSquare className="w-5 h-5 text-primary" />
//               </div>
//               <h1 className="text-lg font-bold">PingPoint</h1>
//             </Link>
//           </div>

//           <div className="flex items-center gap-2">
//             <Link
//               to={"/settings"}
//               className={`
//               btn btn-sm gap-2 transition-colors
              
//               `}
//             >
//               <Settings className="w-4 h-4" />
//               <span className="hidden sm:inline">Settings</span>
//             </Link>

//             {authUser && (
//               <>

              
//                 <button className="flex gap-2 items-center" onClick={logout}>
//                   <LogOut className="size-5" />
//                   <span className="hidden sm:inline">Logout</span>
//                 </button>


//                 <Link to={"/profile"} className="btn btn-sm gap-2">
//                   <div className="avatar">
//                     <div className="w-6 rounded-full">
//                       <img src={authUser.profilePic || "/avatar.png"} />
//                     </div>
//                   </div>
//                   {/* <span className="hidden sm:inline"></span> */}
//                 </Link>

             
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


import React from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { LogOut, MessageCircleHeartIcon, Settings } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="border-b border-base-300 sticky w-full top-0 z-40 
      backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Logo / Brand */}
          <div className="flex items-center gap-8">


            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageCircleHeartIcon className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">PingPoint</h1>
            </Link>
          </div>




          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Settings */}
            <Link
              to={"/settings"}
              className="btn btn-sm gap-2 transition-all duration-200 
              hover:bg-primary/10 hover:text-primary hover:scale-105"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser && (
              <>
                {/* Logout */}
                <button
                  className="btn btn-sm gap-2 transition-all duration-200 
                  hover:bg-error/10 hover:text-error hover:scale-105"
                  onClick={logout}
                >
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>



                {/* Profile */}
                <Link
                  to={"/profile"}
                  className="btn btn-sm gap-2 transition-all duration-200 
                  hover:bg-primary/10 hover:text-primary hover:scale-105"
                >
                  <div className="avatar">
                    <div className="w-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img
                        src={authUser.profilePic || "/avatar.png"}
                        alt="Profile"
                      />
                    </div>
                  </div>
                  <span className="hidden sm:inline">Profile</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
