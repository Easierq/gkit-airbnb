import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/dist/client/router";
import InfoCard from "../components/InfoCard";
import Mapi from "../components/Map";
import { format } from "date-fns";

const Search = ({ homeResults }) => {
  return (
    <div>
      <Header />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ stays for guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in your favourite place
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>

          <div className="flex flex-col mb-10">
            {homeResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  description={description}
                  location={location}
                  star={star}
                  total={total}
                  title={title}
                  price={price}
                />
              )
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const homeResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );
  return {
    props: { homeResults },
  };
}
