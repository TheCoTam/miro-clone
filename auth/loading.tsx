import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Image
        src="/logo.svg"
        alt="logo"
        width={120}
        height={120}
        className="animate-pulse duration-700"
      />
    </div>
  );
};

export default Loading;
