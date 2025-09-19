import { MessageCircleHeart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6 relative z-10">
        {/* Animated Main Icon */}
        <div className="flex justify-center gap-4 mb-4 relative">
          <div className="relative">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-primary/30 to-secondary/30 flex items-center justify-center shadow-lg transition-transform duration-500 hover:rotate-6 hover:scale-110">
              <MessageCircleHeart className="w-12 h-12 text-primary animate-bounce" />
              <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-secondary animate-pulse" />
            </div>
          </div>
        </div>

        {/* Gradient Welcome Text with Motion */}
        <motion.h2
          initial={{ y: -100, opacity: 0 }}   // Start above and invisible
          animate={{ y: 0, opacity: 1 }}       // Animate to normal position
          transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.2 }} // Smooth fall
          className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent"
        >
          Welcome to PingPoint
        </motion.h2>

        {/* Subtext (optional fade-in) */}
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-base text-base-content/70"
        >
          Select a conversation from the sidebar to start chatting
        </motion.p>
      </div>
    </div>
  );
};

export default NoChatSelected;

// export default NoChatSelected;

// import { MessageSquare } from "lucide-react";

// const NoChatSelected = () => {
//   return (
//     <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-200 text-base-content relative overflow-hidden">
      
//       {/* Floating Bubbles */}
//       <div className="absolute top-0 left-0 w-6 h-6 bg-primary rounded-full opacity-30 animate-bounce-slow"></div>
//       <div className="absolute bottom-10 right-20 w-8 h-8 bg-secondary rounded-full opacity-30 animate-bounce-slower"></div>
//       <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-accent rounded-full opacity-20 animate-bounce-fast"></div>

      // <div className="max-w-md text-center space-y-6 relative z-10">
      //   {/* Animated Main Icon */}
      //   <div className="flex justify-center gap-4 mb-4 relative">
      //     <div className="relative">
      //       <div className="w-24 h-24 rounded-3xl bg-primary/20 flex items-center justify-center animate-pulse shadow-xl">
      //         <MessageSquare className="w-12 h-12 text-primary" />
      //       </div>
      //     </div>
      //   </div>

      //   {/* Gradient Welcome Text */}
      //   <h2 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
      //     Welcome to Chatty!
      //   </h2>

      //   {/* Subtext */}
      //   <p className="text-base text-base-content/70">
      //     Select a conversation from the sidebar to start chatting
      //   </p>


//         {/* Optional subtle background ping effect */}
//         <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-primary/10 animate-ping"></div>
//         <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-secondary/10 animate-ping"></div>
//       </div>
//     </div>
//   );
// };

// export default NoChatSelected;
