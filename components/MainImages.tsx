import Image from "next/image"
import { cn } from "@/app/lib/utils"


// {/* <div
//   className="relative h-56 w-56 overflow-hidden rounded-full border-2 border-blue/40 bg-bg-secondary shadow-2xl shadow-blue/20 transition-all duration-500 hover:scale-105 hover:border-blue hover:shadow-blue/30 md:h-64 md:w-64 lg:h-72 lg:w-72 xl:h-80 xl:w-80">
//   <Image
//     src="/assets/images/HassanPortfolio.jpg"
//     alt="Hassan Kotb"
//     fill
//     priority
//     sizes="
//       (max-width: 768px) 224px,
//       (max-width: 1024px) 256px,
//     ء  (max-width: 1280px) 288px,
//       320px
//     "
//     className="object-cover transition-transform duration-700 hover:scale-105"/>
// </div> */}


interface Props {
  src: string,
  alt: string,
  sizes: string,
  className?: string,
  imageClassName?: string,
}

function MainImages({src, alt, sizes, className, imageClassName}: Props) {
  return (
    <div
      className={cn(`relative h-56 w-56 overflow-hidden rounded-2xl border-2 border-blue/40 bg-bg-secondary shadow-2xl shadow-blue/20 transition-all duration-500 hover:scale-100 hover:border-blue hover:shadow-blue/30 md:h-64 md:w-64 lg:h-72 lg:w-72 xl:h-80 xl:w-80`, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes={sizes}
        className={cn("object-cover transition-transform duration-700 hover:scale-105", imageClassName)}/>
    </div>
  )
}

export default MainImages