import React from 'react'

const Shimmer = () => {
    return (
        <>
            <div className="grid grid-cols-4 gap-3 p-5">
                {
                Array(10).fill("").map((item, index) => {
                    return (
                        <div class="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full">
                        <div class="animate-pulse flex flex-col space-x-4 ">
                            <div class="rounded bg-slate-400 h-52 w-52 mx-auto mb-4"></div>
                            <div class="flex-1 space-y-6 py-1">
                                <div class="h-2 bg-slate-400 rounded"></div>
                                <div class="space-y-3">                                    
                                    <div class="h-2 bg-slate-400 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    );
            })
            }
            </div>
        </>
    )
}

export default Shimmer
