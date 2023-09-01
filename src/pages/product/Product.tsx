import { SingleFile } from '../../components/singleFile/SingleFile'
import { singleProduct } from '../../data'
import './product.scss'

export const Product = () => {
    //fetch data

    return (
        <div className="product">
            <SingleFile {...singleProduct} />
        </div>
    )
}