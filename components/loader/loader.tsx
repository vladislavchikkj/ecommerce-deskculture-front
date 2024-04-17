import { FunctionComponent } from "react";
import Skeleton from "../ui/skeleton";

interface LoaderProps {}

const Loader: FunctionComponent<LoaderProps> = () => {
  return (
    <div className="relative p-1 pt-5">
      <Skeleton className="w-full aspect-square  md:aspect-[2.4/1]" />
    </div>
  );
};

export default Loader;
