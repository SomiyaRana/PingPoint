// const AuthImagePattern = ({ title, subtitle }) => {
//   return (
//     <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
//       <div className="max-w-md text-center">
//         <div className="grid grid-cols-3 gap-3 mb-8">
//           {[...Array(9)].map((_, i) => (
//             <div
//               key={i}
//               className={`aspect-square rounded-2xl bg-primary/10 ${
//                 i % 2 === 0 ? "animate-pulse" : ""
//               }`}
//             />
//           ))}
//         </div>
//         <h2 className="text-2xl font-bold mb-4">{title}</h2>
//         <p className="text-base-content/60">{subtitle}</p>
//       </div>
//     </div>

//   );
// };
import { motion } from "framer-motion";

// import your SVGs from assets
import chat1 from "../assets/undraw_everywhere-together_c4di.svg";
import chat2 from "../assets/undraw_fresh-notification_hnv2.svg";
import chat3 from "../assets/undraw_messaging_456i.svg";
import chat4 from "../assets/undraw_online-chat_qx4x.svg";
import chat5 from "../assets/undraw_online-party_akt6.svg";
import chat6 from "../assets/undraw_playful-cat_3ta5.svg";
import chat7 from "../assets/undraw_popular_uk9x.svg";
import chat8 from "../assets/undraw_project-complete_1zw5.svg";
import chat9 from "../assets/undraw_video-files_cxl9.svg";

const svgs = [chat1, chat2, chat3, chat4, chat5, chat6, chat7, chat8, chat9];

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12 relative overflow-hidden">
      {/* Glowing animated background blobs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute w-[28rem] h-[28rem] rounded-full bg-primary/30 blur-3xl top-10 left-10"
      />
      <motion.div
        animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-[32rem] h-[32rem] rounded-full bg-secondary/30 blur-3xl bottom-10 right-10"
      />

      {/* Foreground content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative max-w-xl w-full text-center z-10 flex flex-col items-center"
      >
        {/* 9 SVGs in a grid */}
        <div className="grid grid-cols-3 gap-8 mb-8">
          {svgs.map((icon, i) => (
            <motion.img
              key={i}
              src={icon}
              alt={`icon-${i}`}
              className="w-28 h-28 object-contain drop-shadow-xl p-4 rounded-2xl 
                         bg-base-100 border border-base-300 will-change-transform"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: {
                  opacity: [0, 1, 0.6, 1],
                  scale: [0.9, 1.05, 1],
                  transition: {
                    duration: 1.2,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  },
                },
              }}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.08,
                rotate: 4,
                boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.25, ease: "easeOut" },
              }}
            />
          ))}
        </div>

        {/* Title */}
        <h2 className="text-4xl font-extrabold text-base-content mb-4">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-base-content/70 leading-relaxed text-base max-w-md">
          {subtitle}
        </p>
      </motion.div>
    </div>
  );
};

export default AuthImagePattern;
