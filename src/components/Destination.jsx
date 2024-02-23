import { useContext, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import destinationsContext from "../utils/destinationsContext";
import db from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";

export const Destination = () => {
  // const { destinatonData, setDestinationData } = useState(null);

  const { desId } = useParams();
  const { touristPlaces } = useContext(destinationsContext);

  const desData = touristPlaces.find((destination) => destination.id === desId);

  const navigate = useNavigate();
  const reportContent = () => {
    const isReport = confirm("if you want to report this content");
    console.log(isReport);

    if (isReport) {
      const deleteData = async () => {
        await deleteDoc(doc(db, "touristPlaces", desData.id));
        alert("data is deleted successfully");
        navigate("/destinations");
      };
      deleteData();
    }
  };

  return (
    <section className="font-montserrat">
      <div className="relative">
        <img className="h-[90vh] w-full" src={desData?.img} />

        <div className="absolute bottom-16 px-6">
          <h1 className="text-white  md:text-4xl text-3xl font-bold">
            {desData?.destination}
          </h1>
        </div>
      </div>
      <div className="my-16 mx-6">
        <div className="space-y-6">
          <h4 className="text-2xl font-semibold">About this place</h4>
          <p className="font-Inter lg:text-lg text-sm font-normal leading-8">
            {desData?.description}
          </p>
        </div>

        <h3 className="text-2xl font-semibold my-6 ">
          District:
          <span className="text-xl font-semibold font-Inter ml-3">
            {desData?.district}
          </span>
        </h3>

        <div className="flex items-center gap-3">
          <Link
            to={`/updatecontent/${desId}`}
            className="bg-green-500 text-white font-semibold px-4 py-2 rounded"
          >
            Update
          </Link>
          <button
            className="bg-red-500 text-white font-semibold px-4 py-2 rounded"
            onClick={reportContent}
          >
            Report
          </button>
        </div>
      </div>
    </section>
  );
};
