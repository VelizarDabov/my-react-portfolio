import React, {useState} from "react";
import jsBasics from '../../assets/jsbasics.png';
import jsFundamentals from '../../assets/jsFundamentals.png';
import jsAdvanced from '../../assets/jsAdvanced.png';
import jsApplication from '../../assets/jsApplication.png';
import reactjs from '../../assets/reactUdemy.png';
import udemyJs from '../../assets/udemy1.png'
const Skills = () => {
    const [expandedImg, setExpandedImg] = useState(null);
    // const [showContent, setShowContent] = useState(false); 


    const certificateImages = [
        { src: jsBasics, alt: 'JS Basics' },
        { src: jsFundamentals, alt: 'JS Fundamentals' },
        { src: jsAdvanced, alt: 'JS Advanced' },
        { src: jsApplication, alt: 'JS Application' },
        { src: reactjs, alt: 'React Udemy' },
        { src: udemyJs, alt: 'JS Udemy' },
      ];

      const handleImageClick = (index) => {
        setExpandedImg(index === expandedImg ? null : index);
      };

        // const toggleContent = () => {
        //   setShowContent(!showContent);
        // };
    
        return (
          <>
            <div className="alert flex justify-center alert-success mt-20 bg-transparent border-purple-500 border-solid border-2">
              <button className="btn text-white" onClick={()=>document.getElementById('my_modal_5').showModal()}>Show My Certificates
              </button>
            </div>
            <dialog id="my_modal_5" className="modal-overlay overflow-y-auto bg-black bg-opacity-90">
              
              <div className="mx-auto mt-10 ml-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                  {certificateImages.map((img, index) => (
                    <div className="col-span-1" key={index}>
                      <div className="card w-80 bg-transparent shadow-xl flex flex-col justify-center items-center">
                        <figure className=" justify-center align-center px-8   mr-20 relative">
                          <img
                            src={img.src}
                            alt={img.alt}
                            className={`certificateImg ${expandedImg === index ? 'expanded' : ''}`}
                            onClick={() => handleImageClick(index)}
                          />
                        </figure>
                        
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <form method="dialog" className="modal-backdrop">
    <button className="btn text-white bg-opacity-50 mt-10">close</button>
  </form>
          </dialog>
          </>
        );
      };
export default Skills;


// return (
//   <>
//     <div className="alert flex justify-center alert-success mt-20 bg-transparent border-purple-500 border-solid border-2">
//       <button className="btn text-white" onClick={toggleContent}>
//         {showContent ? 'Hide My certificates' : 'Show My certificates'}
//       </button>
//     </div>
//     {showContent && (
//       <div className="container mx-auto mt-10 mr-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mr-">
//           {certificateImages.map((img, index) => (
//             <div className="col-span-1" key={index}>
//               <div className="card w-96 bg-transparent shadow-xl">
//                 <figure className="px-10 pt-10 relative">
//                   <img
//                     src={img.src}
//                     alt={img.alt}
//                     className={`certificateImg ${expandedImg === index ? 'expanded' : ''}`}
//                     onClick={() => handleImageClick(index)}
//                   />
//                 </figure>
//                 <div className="card-body items-center text-center">
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
// export default Skills;