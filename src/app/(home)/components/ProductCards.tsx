import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";

export type ProductProps = {
    id: string;
    name: string;
    desc: string;
    img: string;
    price: number;
}

type PropTypes = { product: ProductProps }

const ProductCards = ({ product }: PropTypes) => {
    return (
        <Card>
            <CardHeader className="flex items-center justify-center">
               <Image src={product.img} alt="main-pizza" width={150} height={150}/>
            </CardHeader>
            <CardContent>
                <h2 className="text-xl font-bold">{product.name}</h2>
                <p className="mt-2">{product.desc}</p>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
               <p>
                <span>From </span>
                <span className="font-bold">₹{product.price}</span>
               </p>
               <Button className=" bg-orange-200 bg:bg-orange-300 text-orange-500 px-6 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">Choose</Button>
            </CardFooter>
        </Card>
    )
}

export default ProductCards;