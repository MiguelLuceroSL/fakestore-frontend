import React from "react"

const MyLoader = () => {
    return (
        <article className="relative flex flex-col w-full min-h-screen gap-4 mt-0 md:mt-6 animate-pulse items-center justify-center">
            <section className="h-11 w-36 rounded-full bg-slate-400" />
            <section className="h-[500px] w-64 rounded-3xl bg-slate-400" />
        </article>
    )
}
export default MyLoader
