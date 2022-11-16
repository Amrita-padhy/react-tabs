import React, { useState } from "react";

function Tabs() {
  const [tabIndex, setTabIndex] = useState(1);
  console.log(tabIndex);
  const handleShowTab = (index) => {
    setTabIndex(index);
  };
  return (
    <div className="tab_container w-screen h-screen flex justify-center items-center flex-col bg-slate-200  ">
      <div className="heading text-center ">
        <div>
          <h2 className="text-3xl my-2 text-gray-800">More About Us </h2>
          <div className="w-12 h-1 bg-purple-600 m-auto my-3"></div>
        </div>

        <h6 className="text-sm my-1 text-gray-600">
          Click the tab button to learn more{" "}
        </h6>
      </div>
      <div className="box flex justify-center items-center w-full">
        <div className=" w-7/12 h-52 bg-slate-100  flex justify-between shadow-lg overflow-scroll ">
          <div className="flex flex-col btn_container ">
            <div
              onClick={() => handleShowTab(1)}
              className={
                tabIndex === 1
                  ? "border-l-4 bg-purple-500 text-white cursor-pointer border-orange-800  text-lg p-2 rounded-r-lg text-center w-32 md:w-48 mb-2 "
                  : "border-l-4  cursor-pointer  bg-slate-400 text-lg p-2 rounded-r-lg text-center w-32 md:w-48 mb-2 "
              }
            >
              Who are we
            </div>
            <div
              onClick={() => handleShowTab(2)}
              className={
                tabIndex === 2
                  ? "border-l-4 bg-purple-500 text-white cursor-pointer border-orange-800  text-lg p-2 rounded-r-lg text-center w-32 md:w-48 mb-2 "
                  : "border-l-4  cursor-pointer  bg-slate-400 text-lg p-2 rounded-r-lg text-center w-32 md:w-48 mb-2 "
              }
            >
              What we do
            </div>
            <div
              onClick={() => handleShowTab(3)}
              className={
                tabIndex === 3
                  ? "border-l-4 bg-purple-500 text-white cursor-pointer border-orange-800  text-lg p-2 rounded-r-lg text-center w-32 md:w-48 mb-2 "
                  : "border-l-4  cursor-pointer  bg-slate-400 text-lg p-2 rounded-r-lg text-center w-32 md:w-48 mb-2 "
              }
            >
              Get in Touch
            </div>
          </div>
          <div className="ml-2 mt-1">
            <div
              className={
                tabIndex === 1 ? "content_container overflow-hidden" : "hidden"
              }
            >
              <h2 className="text-2xl">Who we are...</h2>
              <p className="text-orange-500 text-md overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                culpa nobis fuga delectus asperiores, sit dignissimos magni non
                aliquid aliquam quis laudantium a vel dolores! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Sequi culpa nobis fuga
                delectus asperiores, sit dignissimos magni non aliquid aliquam
                quis laudantium a vel dolores!
              </p>
            </div>
            <div className={tabIndex === 2 ? "content_container " : "hidden"}>
              <h2 className="text-2xl">Who we are...</h2>
              <p className="text-green-500 text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                culpa nobis fuga delectus asperiores, sit dignissimos magni non
                aliquid aliquam quis laudantium a vel dolores! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Sequi culpa nobis fuga
                delectus asperiores, sit dignissimos magni non aliquid aliquam
                quis laudantium a vel dolores!
              </p>
            </div>
            <div className={tabIndex === 3 ? "content_container " : "hidden"}>
              <h2 className="text-2xl">Who we are...</h2>
              <p className="text-pink-400 text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                culpa nobis fuga delectus asperiores, sit dignissimos magni non
                aliquid aliquam quis laudantium a vel dolores! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Sequi culpa nobis fuga
                delectus asperiores, sit dignissimos magni non aliquid aliquam
                quis laudantium a vel dolores!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
