type blockColorProps = {
  color?: string;
  string: string;
  textColor?: "white" | "black";
};

export const BlockColor = ({ color, string, textColor }: blockColorProps) => {
  return (
    <div
      className={`w-[200px] h-[250px] ${color ?? "red-wrong"} mt-8  rounded-3xl relative`}
    >
      <h1
        className={`absolute bottom-5 right-0 pr-5 ${textColor === "white" ? "text-white" : "text-black"}`}
      >
        {string}
      </h1>
    </div>
  );
};
