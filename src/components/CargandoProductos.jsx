import React from "react"

const MyLoader = () => {
    return (
        <article className="relative flex flex-col w-full gap-4 mt-6 animate-pulse items-center justify-center">
            <section className="h-11 w-36 rounded-full bg-slate-400" />
            <section className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <section className="h-[500px] w-64 rounded-3xl bg-slate-400" />
                <section className="h-[500px] w-64 rounded-3xl bg-slate-400" />
                <section className="h-[500px] w-64 rounded-3xl bg-slate-400" />
                <section className="h-[500px] w-64 rounded-3xl bg-slate-400" />
                <section className="h-[500px] w-64 rounded-3xl bg-slate-400" />
                <section className="h-[500px] w-64 rounded-3xl bg-slate-400" />
                <section className="h-[500px] w-64 rounded-3xl bg-slate-400" />
                <section className="h-[500px] w-64 rounded-3xl bg-slate-400" />
            </section>

        </article>
    );
}

export default MyLoader




