
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import ProductCard from "./ProductCard";

const FeaturedClothing = () => {
  const products = [
    {
      id: 1,
      name: "Gothic Hoodie",
      price: 89,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Hoodie"
    },
    {
      id: 2,
      name: "Shadow Sweatshirt",
      price: 75,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Sweatshirt"
    },
    {
      id: 3,
      name: "Dark Hoodie",
      price: 92,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Hoodie"
    },
    {
      id: 4,
      name: "Midnight Jacket",
      price: 135,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Jacket"
    },
    {
      id: 5,
      name: "Black Hoodie",
      price: 88,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Hoodie"
    },
    {
      id: 6,
      name: "Gothic Jacket",
      price: 150,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Jacket"
    }
  ];

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 
          className="font-cinzel text-2xl md:text-3xl text-white text-center mb-8"
          style={{
            textShadow: '0 0 8px rgba(255,255,255,0.3)'
          }}
        >
          FEATURED CLOTHING
        </h2>

        {/* Products Carousel with increased spacing */}
        <div className="mt-8 relative px-16">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-8">
              {products.map((product) => (
                <CarouselItem key={product.id} className="pl-8 basis-auto">
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious 
              className="bg-white bg-opacity-10 border-white border-opacity-20 hover:bg-opacity-20 text-white -left-12 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]" 
            />
            <CarouselNext 
              className="bg-white bg-opacity-10 border-white border-opacity-20 hover:bg-opacity-20 text-white -right-12 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]" 
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FeaturedClothing;
