import Discount from "./Discount";
import Header from "./Header";
import Newproducts from "./Newproducts";
import TopDiscount from "./TopDiscount";
import Topproducts from "./Topproducts";

function Home() {
    return (
        <>
            <Header />
            <Newproducts />
            <Discount />
            <TopDiscount />
            <Topproducts />
        </>
    )
}

export default Home