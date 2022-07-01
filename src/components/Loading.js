import React from "react";

const Loading = () => {

    return (

        <div>


            <div className="bg-violet-200 max-w-sm mx-auto sm:mr-3 xl:mx-auto mb-5 pb-4 rounded-2xl shadow-md">

                <div className="animate-pulse">

                    <div className="rounded-2xl bg-pink-200 h-24 sm:h-48"></div>
                    <div className="rounded-lg bg-gray-300 h-4 mt-4 mx-4"></div>
                    <div className="flex space-x-4 mt-2 mx-4">
                        <div className="rounded-lg bg-gray-300 h-2 w-1/2"></div>
                        <div className="rounded-lg bg-gray-300 h-2 w-1/2"></div>
                    </div>
                    <div className="rounded-lg bg-gray-300 h-3 mt-2 mx-4"></div>

                </div>

            </div>

            <div className="bg-violet-200 max-w-sm mx-auto sm:mr-3 xl:mx-auto mb-3 pb-4 rounded-2xl shadow-md">

                <div className="animate-pulse">

                    <div className="rounded-2xl bg-pink-200 h-48"></div>
                    <div className="rounded-lg bg-gray-300 h-4 mt-2 mx-4"></div>
                    <div className="flex space-x-4 mt-2 mx-4">
                        <div className="rounded-lg bg-gray-300 h-2 w-1/2"></div>
                        <div className="rounded-lg bg-gray-300 h-2 w-1/2"></div>
                    </div>

                </div>

            </div>


        </div>
    )

}

export default Loading;