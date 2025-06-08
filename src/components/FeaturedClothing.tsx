
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import ProductCard from "./ProductCard";

const FeaturedClothing = () => {
  const products = [
    {
      id: 1,
      name: "Gothic T-Shirt",
      price: 30,
      image: "👕",
      type: "T-Shirt"
    },
    {
      id: 2,
      name: "Shadow Sweatshirt",
      price: 45,
      image: "🧥",
      type: "Sweatshirt"
    },
    {
      id: 3,
      name: "Dark Hoodie",
      price: 60,
      image: "👘",
      type: "Hoodie"
    },
    {
      id: 4,
      name: "Midnight Tee",
      price: 30,
      image: "🎽",
      type: "T-Shirt"
    },
    {
      id: 5,
      name: "Black Jacket",
      price: 80,
      image: "🧥",
      type: "Jacket"
    },
    {
      id: 6,
      name: "Gothic Dress",
      price: 120,
      image: "👗",
      type: "Dress"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 
          className="font-cinzel text-2xl md:text-3xl text-white text-center mb-4"
          style={{
            textShadow: '0 0 8px rgba(255,255,255,0.3)'
          }}
        >
          FEATURED CLOTHING
        </h2>

        {/* Products Carousel */}
        <div className="mt-12 relative">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {products.map((product) => (
                <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white bg-opacity-10 border-white border-opacity-20 hover:bg-opacity-20 text-white" />
            <CarouselNext className="bg-white bg-opacity-10 border-white border-opacity-20 hover:bg-opacity-20 text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FeaturedClothing;
