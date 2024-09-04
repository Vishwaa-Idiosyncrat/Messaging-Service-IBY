"use client";

import React, { Fragment } from "react";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import {TransitionRoot} from "@headlessui/vue"
import { ClipLoader } from "react-spinners";

const LoadingModal = () => {
  return (
    <Transition.Root show as={Fragment}>
      <Dialog 
        as="div" 
        className="relative z-50" 
        onClose={() => {}}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="
              fixed
              inset-0
              bg-gray-100
              bg-opacity-50
              transition-opacity
            "
          />
        </TransitionChild>

        <div
          className="
            fixed
            inset-0
            z-10
            overflow-y-auto
          "
        >
          <div className="
            flex
            min-h-full
            items-center
            justify-center
            p-4
            text-center
          ">
            <DialogPanel>
              <ClipLoader size={40} color="#0284c7" />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default LoadingModal;

// 'use client';

// import React, { Fragment } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import { ClipLoader } from "react-spinners";

// const LoadingModal = () => {
//   return (
//     <Transition.Root show as={Fragment}>
//       <Dialog
//         as="div"
//         className="relative z-50"
//         onClose={() => {}}
//       >
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-500"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-300"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div
//             className="
//               fixed
//               inset-0
//               bg-gradient-to-br
//               from-purple-700
//               to-indigo-600
//               bg-opacity-70
//               transition-opacity
//               flex
//               justify-center
//               items-center
//             "
//           />
//         </Transition.Child>

//         <div
//           className="
//             fixed
//             inset-0
//             z-10
//             flex
//             justify-center
//             items-center
//           "
//         >
//           <div
//             className="
//               bg-gray-800
//               text-white
//               p-6
//               rounded-lg
//               shadow-lg
//               flex
//               flex-col
//               items-center
//               space-y-4
//               transform
//               transition-transform
//               scale-95
//               duration-300
//               ease-in-out
//               opacity-0
//               animate-fadeIn
//             "
//           >
//             <ClipLoader
//               size={60}
//               color="#ffffff"
//               cssOverride={{
//                 animation: "spin 1.5s linear infinite"
//               }}
//             />
//             <p className="text-lg font-semibold">Loading, please wait...</p>
//           </div>
//         </div>
//       </Dialog>
//     </Transition.Root>
//   );
// };

// export default LoadingModal;
