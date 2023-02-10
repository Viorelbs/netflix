import { Movie } from "@/typings";
import React, { useEffect, useState } from "react";
import { baseUrl } from "@/constants/movie";
import { BsPlayFill } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";
import Image from "next/image";
import { ReadMoreMore, AdvReadMoreMore } from "read-more-more";

interface Props {
  topRated: Movie[];
}
export default function Banner({ topRated }: Props) {
  const [show, setShow] = useState<Movie | null>();

  useEffect(() => {
    setShow(topRated[Math.floor(Math.random() * topRated.length)]);
  }, []);
  return (
    <div className="px-3 md:px-10  pt-20 bg-cover ">
      <div className="absolute top-0 left-0 -z-10 h-[100%] w-screen">
        <Image
          alt={`${baseUrl}${show?.title}`}
          src={`${baseUrl}${show?.backdrop_path || show?.poster_path}`}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div className="mt-[10vh] md:max-w-[60vw] lg:max-w-[40vw] ">
        <h1 className="font-bold mb-2">{show?.title}</h1>
        <div className="description">
          {show?.overview.length && (
            <ReadMoreMore
              text={show?.overview}
              checkFor={300}
              transDuration={0.5}
            />
          )}
        </div>

        <div className="flex gap-2 mt-5">
          <button className="button-primary bg-[#ffffff] text-black text-lg	hover:bg-[rgb(216,31,38)] hover:text-white">
            <BsPlayFill className="h-7 w-7" />
            Play
          </button>
          <button className="button-primary bg-[#ffffff40] text-lg hover:bg-[#000]	">
            More info
            <AiFillInfoCircle className="h-7 w-7" />
          </button>
        </div>
      </div>
    </div>
  );
}
