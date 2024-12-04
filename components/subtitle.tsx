import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  title: string;
  style?: string;
}
const Subtitle: FC<Props> = ({ title, style = "text-2xl" }) => {
  return <p className={cn("text-color1 font-medium", style)}>{title}</p>;
};

export default Subtitle;