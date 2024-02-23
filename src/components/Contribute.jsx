import FormInput from "./forms/FormInput";
import FormTextArea from "./forms/FormTextArea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase";
import { storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import FormCategorySelectTag from "./forms/FormCategorySelectTag";
import FormDistrictSelectTag from "./forms/FormDistrictSelectTag";
import { useNavigate } from "react-router-dom";

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

export const Contribute = () => {
  const [file, setFile] = useState("");
  const [url, setUrl] = useState({});
  const [per, setPer] = useState(null);

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPer(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUrl((pre) => ({ img: downloadURL }));
            console.log("File available at", downloadURL);
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(formSchema) });

  const navigate = useNavigate();

  const sendData = (formData) => {
    const data = {
      ...formData,
      ...url,
    };

    const setFireStoreData = async () => {
      const docRef = await addDoc(collection(db, "touristPlaces"), data);
      console.log("Document written with ID: ", docRef.id);
      alert("thanks for contributing 🤗");
      navigate("/");
      reset();
    };
    setFireStoreData();
  };
  return (
    <section className="font-montserrat">
      {/* banner */}
      <div className="bg-slate-900 text-white py-10 px-8">
        <h1 className="text-xl font-semibold">Contribute Us</h1>
        <p className="text-lg font-Inter mt-2 ">
          you can contribute us,by providing info of Tourist destinations in
          your places or you visits inside Tamil Nadu that not exists in our
          app.
        </p>
      </div>
      {/* forms */}
      <div className="px-8 py-12 bg-slate-200 w-9/12 mx-auto my-28 font-Inter rounded-md">
        <form className="w-full space-y-6 " onSubmit={handleSubmit(sendData)}>
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
            <div className="w-full space-y-2">
              <label className="font-montserrat font-semibold ">
                upload an image of the destination
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-1.5 rounded"
                type="file"
                name="image"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
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
              per !== null && per < 100 ? "bg-slate-800" : "bg-slate-950"
            }`}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
