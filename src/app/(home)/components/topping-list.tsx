import ToppingCard from "./topping-card";

const toppins = [
    {
        id: 1,
        name: "Chicken",
        image: "/chicken.png",
        price: 19.99,
        isAvailable: true
    },
    {
        id: 2,
        name: "Jelapeno",
        image: "/jelapeno.png",
        price: 29.99,
        isAvailable: false
    },
    {
        id: 3,
        name: "Cheese",
        image: "/cheese.png",
        price: 39.99,
        isAvailable: true
    },
];

const ToppingList = () => {
    return (
        <section className="mt-6">
            <h3>Extra toppins</h3>
            <div className="grid grid-cols-3 mt-2">
                {
                    toppins.map((topping) => {
                        return <ToppingCard key={topping.id} />
                    })
                }
            </div>
        </section>
    )
}

export default ToppingList;