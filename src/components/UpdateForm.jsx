import FormInput from "./forms/FormInput";
import FormTextArea from "./forms/FormTextArea";
import FormCategorySelectTag from "./forms/FormCategorySelectTag";
import FormDistrictSelectTag from "./forms/FormDistrictSelectTag";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import destinationsContext from "../utils/destinationsContext";
import { useState } from "react";
import db from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

const formSchema = z.object({
  destination: z
    .string({})
    .min(1, { message: "this field is required" })
    .min(3, { message: "this field should not empty and min 3 character" })
    .max(50),
  district: z.string({}).min(1, { message: "this field is required" }),
  category: z
    .string({})
    .min(1, { message: "this field is required" })
    .min(3, { message: "this field should not empty and min 3 character" })
    .max(20),
  description: z
    .string({})
    .min(1, { message: "this field is required" })
    .min(3, { message: "this field should not empty and min 3 character" })
    .max(3000),
});

const UpdateForm = () => {
  const [file, setFile] = useState("");
  const [url, setUrl] = useState({});
  const [per, setPer] = useState(null);

  const navigate = useNavigate();
  const { desId } = useParams();
  const { touristPlaces } = useContext(destinationsContext);

  const desData = touristPlaces.find((destination) => destination.id === desId);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      destination: desData?.destination,
      district: desData?.district,
      category: desData?.category,
      description: desData?.description,
    },
  });

  const updateData = (data) => {
    console.log(data);
    const updateData = async () => {
      const updateRef = doc(db, "touristPlaces", desId);

      await updateDoc(updateRef, data);
      alert("sucessfully updated");
      reset();
      navigate(`/destinations`);
    };
    updateData();
  };

  return (
    <section>
      <div className="bg-slate-900 text-white py-10 px-8">
        <h1 className="text-xl font-semibold">Update Content</h1>
        <p className="text-lg font-Inter mt-2 ">
          we warmly welcome you to update our content
        </p>
      </div>
      <div className="bg-slate-200 mx-auto my-12  px-8 py-12 rounded-md w-8/12 ">
        <form className="w-full space-y-6 " onSubmit={handleSubmit(updateData)}>
          <div className="flex lg:flex-row flex-col items-center gap-6 w-full">
            <FormInput
              label="name of the destination"
              name="destination"
              placeholder="enter the destination"
              register={register("destination")}
              error={errors.destination}
            />

            <FormDistrictSelectTag
              name="district"
              register={register("district")}
              error={errors.district}
            />
          </div>
          <div className="flex lg:flex-row flex-col items-center gap-6 w-full">
            <FormCategorySelectTag
              name="category"
              register={register("category")}
              error={errors.category}
            />
          </div>
          <div>
            <FormTextArea
              name="description"
              placeholder="write about the destination"
              register={register("description")}
              error={errors.description}
            />
          </div>
          <button
            disabled={per !== null && per < 100}
            className={`w-full px-4 py-2  text-white rounded font-semibold ${
              per !== null && per < 100 ? "bg-green-300" : "bg-green-500"
            }`}
          >
            Update content
          </button>
        </form>
      </div>
    </section>
  );
};

export default UpdateForm;
