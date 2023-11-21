import React from "react";
import worksData from "./WorksObj";

const Works = () => {
 
  // const [showContent, setShowContent]=useState(false);

  // const toggleContent = () =>{
  //   setShowContent(!showContent)
  // }

  return (
    <>
      <div className="alert flex justify-center alert-success mt-10 bg-transparent border-purple-500 border-solid border-2 ">
        <button className="btn text-white" onClick={()=>document.getElementById('my_modal_4').showModal()}>
  Show my works
        </button>
      </div>
      <dialog id="my_modal_4" className="modal-overlay overflow-y-auto bg-black bg-opacity-90">
      
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-4">
            {worksData.map((work, index) => (
              <div
                key={index}
                className="text-center justify-center align-center"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-32 object-contain rounded-t-md "
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-purple-800 tracking-wider">
                    {work.title}
                  </h2>
                  <p className="text-white">{work.description}</p>
                  <div className="pt-6 text-center">
                    <a href={work.githubLink} target="_blank" rel="noreferrer">
                      <button className="btn w-36 text-white">GitHub</button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        
        <form method="dialog" className="modal-backdrop">
    <button className="btn text-white">close</button>
  </form>
        </dialog>
    </>
  );
};

export default Works;


// return (
//   <>
//     <div className="alert flex justify-center alert-success mt-20 bg-transparent border-purple-500 border-solid border-2 ">
//       <button className="btn text-white" onClick={toggleContent}>
//         {showContent ? "Hide My Works" : "Show My Works"}
//       </button>
//     </div>
//     {showContent && (
//       <div className="w-full mt-20">
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-4">
//           {worksData.map((work, index) => (
//             <div
//               key={index}
//               className="content-div text-center"
//             >
//               <img
//                 src={work.image}
//                 alt={work.title}
//                 className="w-full h-32 object-contain rounded-t-md"
//               />
//               <div className="p-6">
//                 <h2 className="text-2xl font-bold text-purple-800 tracking-wider">
//                   {work.title}
//                 </h2>
//                 <p className="text-gray-600">{work.description}</p>
//                 <div className="pt-6 text-center">
//                   <a href={work.githubLink} target="_blank" rel="noreferrer">
//                     <button className="btn w-36 text-white">GitHub</button>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     )}
//   </>
// );
// };

// export default Works;