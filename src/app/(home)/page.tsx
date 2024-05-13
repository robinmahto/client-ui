import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCards, { ProductProps } from "./components/products-card";

const productData: ProductProps[] = [
  {
    id: '1',
    name: 'Magarita pizza',
    desc: 'one of the most delicious pizza i ever had it.',
    img: '/pizza-main.png',
    price: 400
  },
  {
    id: '2',
    name: 'Magarita pizza',
    desc: 'one of the most delicious pizza i ever had it.',
    img: '/pizza-main.png',
    price: 400
  },
  {
    id: '3',
    name: 'Magarita pizza',
    desc: 'one of the most delicious pizza i ever had it.',
    img: '/pizza-main.png',
    price: 400
  },
  {
    id: '4',
    name: 'Magarita pizza',
    desc: 'one of the most delicious pizza i ever had it.',
    img: '/pizza-main.png',
    price: 400
  },
  {
    id: '5',
    name: 'Magarita pizza',
    desc: 'one of the most delicious pizza i ever had it.',
    img: '/pizza-main.png',
    price: 400
  },
  {
    id: '6',
    name: 'Magarita pizza',
    desc: 'one of the most delicious pizza i ever had it.',
    img: '/pizza-main.png',
    price: 400
  },
]

export default function Home() {
  return (
    <>
      <section className="bg-white">
        <div className="container flex items-center justify-between py-24">
          <div>
            <h1 className="text-7xl font-black font-sans leading-2">
              Super Delicious Pizza in <br />
              <span className="text-primary">Only 45 Minutes!</span>
            </h1>
            <p className="text-2xl mt-8 max-w-lg leading-snug">
              Enjoy a Free Meal if Your Order Takes More Than 45 Minutes!
            </p>
            <Button className="mt-8 text-lg rounded-full py-7 px-6 font-bold">
              Get your pizza now
            </Button>
          </div>
          <div>
            <Image alt="pizza-main" src={'/pizza-main.png'} width={400} height={400} />
          </div>
        </div>
      </section>

      <section>
        <div className="container py-12">
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="pizza" className="text-md">Pizza</TabsTrigger>
              <TabsTrigger value="beverages" className="text-md" >Beverages</TabsTrigger>
            </TabsList>
            <TabsContent value="pizza">
              <div className="grid grid-cols-4 gap-6 mt-6">
                {
                  productData?.map((productItems) => {
                    return <ProductCards product={productItems} key={productItems.id} />
                  })
                }
              </div>
            </TabsContent>
            <TabsContent value="beverages">
              <div className="grid grid-cols-4 gap-6 mt-6">
                {
                  productData?.map((productItems) => {
                    return <ProductCards product={productItems} key={productItems.id} />
                  })
                }
              </div>
            </TabsContent>
          </Tabs>

        </div>
      </section>
    </>
  );
}
