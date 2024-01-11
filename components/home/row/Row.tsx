import { Movie } from "@/typings";
import Thumbnails from "./Thumbnails";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface RowProps {
  title: string;
  movies: Movie[];
}

const Row = ({ title, movies }: RowProps) => {
  return (
    <div className="m-4">
      <Carousel className="px-4 py-0.5 md:py-1">
        <h1 className="text-white font-semibold text-sm md:text-lg lg:text-xl py-2">
          {title}
        </h1>
        <CarouselContent className="h-28 max-w-[180px] md:h-36 md:max-w-[280px] md:hover:scale-105  ">
          {movies.map((movie) => (
            <CarouselItem key={movie.id}>
              <Thumbnails movie={movie} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Row;
