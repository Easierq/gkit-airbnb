import Image from "next/image";
import { useRouter } from "next/dist/client/router";

const Banner = () => {
  const router = useRouter();

  return (
    <div className="relative h-[400px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        // src="https://links.papareact.com/0fm"
        src="https://images.unsplash.com/photo-1601918774946-25832a4be0d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-3xl sm:text-5xl font-bold text-white">
          Not sure of where to go
        </p>

        <button
          onClick={() => router.push("/homes")}
          className="text-white bg-red-400  px-20 py-6 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default Banner;
