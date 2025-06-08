
import ProductCard from "./ProductCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const FeaturedClothing = () => {
  const products = [
    {
      id: 1,
      name: "Gothic T-Shirt",
      price: 30,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "T-Shirt",
      isNew: true
    },
    {
      id: 2,
      name: "Dark Sweatshirt",
      price: 45,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Sweatshirt",
      isNew: true
    },
    {
      id: 3,
      name: "Shadow Hoodie",
      price: 60,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Hoodie",
      isNew: true
    },
    {
      id: 4,
      name: "Midnight T-Shirt",
      price: 30,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "T-Shirt",
      isNew: false
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex items-center justify-center mb-20">
          <Star className="text-white mr-4 opacity-70" size={24} />
          <h2 
            className="font-cinzel text-3xl md:text-4xl text-white text-center tracking-wider font-semibold"
            style={{
              textShadow: '0 0 12px rgba(255,255,255,0.4)',
              letterSpacing: '0.15em'
            }}
          >
            FEATURED COLLECTION
          </h2>
          <Star className="text-white ml-4 opacity-70" size={24} />
        </div>

        {/* Products Carousel */}
        <div className="relative px-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {products.map((product) => (
                <CarouselItem key={product.id} className="pl-6 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="flex justify-center">
                    <ProductCard product={product} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious 
              className="bg-black bg-opacity-60 border-white border-opacity-30 text-white hover:bg-white hover:text-black transition-all duration-300 -left-8"
              style={{
                boxShadow: '0 0 15px rgba(255,255,255,0.2)'
              }}
            />
            <CarouselNext 
              className="bg-black bg-opacity-60 border-white border-opacity-30 text-white hover:bg-white hover:text-black transition-all duration-300 -right-8"
              style={{
                boxShadow: '0 0 15px rgba(255,255,255,0.2)'
              }}
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FeaturedClothing;
