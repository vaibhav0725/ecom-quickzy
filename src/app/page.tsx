import { Carousel } from "@/components/carousel";
import { FeaturedProducts } from "@/components/featured-products";
import { Banner } from "@/components/banner";
import { Card } from "@/components/card";

export default function Home() {
  return (
    <div>
      <Carousel/>
      <Card/>
      <Banner/>
      <FeaturedProducts/>
    </div>
  )
}
