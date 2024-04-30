import Item from './Item'
import '../styles/style2.css'

const ItemList = ({ products, title }) => {
    console.log(title);
    let claseCSS = 'categorias1';
    let claseCSS2 = 'container-list1';
    if (title === 'Productos') {
        claseCSS2 = 'container-list1';
        claseCSS = 'categorias1';
    } else if (title === 'Ropa de hombre' || title === 'Joyería') {
        claseCSS2 = 'container-list2';
        claseCSS = 'categorias2';
    } else {
        claseCSS2 = 'container-list3';
        claseCSS = 'categorias3';
    }

    return (
        <div className={claseCSS2}>
            <h2 className='main-title'>{title}</h2>
            <div className={claseCSS}>
                {products.length > 0 &&
                    products.map((product) => <Item key={product.id} product={product} />
                    )
                }
            </div>
        </div>
    )
}

export default ItemList