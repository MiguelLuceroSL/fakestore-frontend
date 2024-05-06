import Item from './Item'
import '../styles/style2.css'

const ItemList = ({ products, title }) => {
    // console.log(title);
    // let claseCSS = 'categorias1';
    // let claseCSS2 = 'container-list1';
    // if (title === 'Productos') {
    //     claseCSS2 = 'container-list1';
    //     claseCSS = 'categorias1';
    // } else if (title === 'Ropa de hombre' || title === 'Joyería') {
    //     claseCSS2 = 'container-list2';
    //     claseCSS = 'categorias2';
    // } else {
    //     claseCSS2 = 'container-list3';
    //     claseCSS = 'categorias3';
    // }

    return (
        <div className="flex flex-col items-center mt-6 min-h-screen">
            <h2 className='mb-6 font-light text-3xl'>{title}</h2>
            <div className=" grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.length > 0 &&
                    products.map((product) => <Item key={product.id} product={product} />
                    )
                }
            </div>
        </div>
    )
}

export default ItemList