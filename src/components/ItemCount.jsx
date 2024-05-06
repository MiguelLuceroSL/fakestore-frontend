import '../styles/styleID2.css';


const ItemCount = ({ count, handleRestar, handleSumar, handleAgregar }) => {

    return (
        <article className='w-24 flex flex-col gap-2'>
            <section className="flex flex-row gap-4 items-center">
                <button onClick={handleRestar} class="font-extrabold cursor-pointer transition-all bg-[#006d77] text-[#bde0fe] px-2 h-4 text-center flex items-center rounded-md border-[#006d77] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                    -
                </button>
                <p className='font-mono'>{count}</p>
                <button onClick={handleSumar} class="font-extrabold cursor-pointer transition-all bg-[#006d77] text-[#bde0fe] px-2 h-4 text-center flex items-center rounded-md border-[#006d77] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                    +
                </button>
            </section>
            <button className="font-dm-serif-display text-sm cursor-pointer transition-all bg-[#006d77] text-[#bde0fe] px-2 py-1 h-12 flex items-center rounded-lg border-[#006d77] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" onClick={handleAgregar}>
                Añadir al carro
            </button>
        </article>
    )
}

export default ItemCount