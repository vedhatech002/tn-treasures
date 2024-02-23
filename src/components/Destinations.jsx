import { useContext, useEffect, useState } from "react";
import { DestinationCard } from "./DestinationCard";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { ShimerThumb } from "./ShimerThumb";
import destinationsContext from "../utils/destinationsContext";
export const Destinations = () => {
  const { touristPlaces, setDestinations } = useContext(destinationsContext);
  useEffect(() => {
    const getFirebaseDatas = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "touristPlaces"));
        const data = querySnapshot.docs.map((doc) => {
          const getData = doc.data();
          const getId = doc.id;
          const finalData = { ...getData, id: getId };
          return finalData;
        });
        setDestinations(data);
        console.log(data);
        if (querySnapshot.docs.length === 0) {
          console.log("norecord exist");
        }
      } catch (error) {
        console.error(error);
      }
    };
    getFirebaseDatas();
  }, []);

  return (
    <section>
      <div className="realtive">
        <img
          className="h-[60vh] w-full"
          src="/destinationBanner.webp"
          alt="destination banner"
        />
        <div className="absolute top-[15rem] font-montserrat w-[98vw]">
          <h1 className="text-white lg:text-6xl md:text-4xl sm:text-3xl text-2xl text-center drop-shadow-lg">
            Destinations
          </h1>
        </div>
      </div>
      {/*destination cards  */}
      <div className="justify-center my-28 flex items-center gap-10 flex-wrap">
        {touristPlaces.length === 0 ? (
          <div className="justify-center my-28 flex items-center gap-10 flex-wrap">
            <ShimerThumb />
            <ShimerThumb />
            <ShimerThumb />
            <ShimerThumb />
          </div>
        ) : (
          touristPlaces.map((destination) => (
            <DestinationCard key={destination.id} data={destination} />
          ))
        )}
      </div>
    </section>
  );
};
