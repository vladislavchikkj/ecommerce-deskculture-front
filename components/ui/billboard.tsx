import { Billboard } from "@/types";
import Image from "next/image";

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden relative">
      <Image
        src={data?.imageUrl}
        alt={"intro"}
        width={1920}
        height={1080}
        className="rounded-xl aspect-square md:aspect-[2.4/1] object-cover w-full h-full"
        placeholder="blur"
        blurDataURL={data?.imageUrl}
        priority={true}
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center gap-y-8">
        <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-white">
          {data.label}
        </div>
      </div>
    </div>
  );
};

export default Billboard;
