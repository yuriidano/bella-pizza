import { Container } from "../Container"
import { Categories } from "./categories/categories"
import { SortPopap } from "./sort-popap/sort-popap"


export const TopBar = () => {

    return (
        <div className=" sticky top-0 bg-white py-5 shadow-lg shadow-black/10 z-10 mb-9">
            <Container className='flex items-center justify-between '>
                <Categories />
                <SortPopap />
            </Container>
        </div>
    )
}