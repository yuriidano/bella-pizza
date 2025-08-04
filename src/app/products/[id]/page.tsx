'use client'
import { useParams } from "next/navigation";


type Props = {
    params: {
        id: string
    }
}


const Product = ({params: {id}}: Props) => {

    
    return (
        <div>product {id}</div>
    )
};

export default Product;