import { useEffect } from "react";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import db from "../firebase";

export const Home = () => {
  useEffect(() => {
    //     const getFirebaseDatas = async () => {
    //       const querySnapshot = await getDocs(collection(db, "touristPlaces"));
    //       const data = querySnapshot.docs.map((doc) => {
    //         const getData = doc.data();
    //         const getId = doc.id;
    //         const finalData = { ...getData, id: getId };
    //         return finalData;
    //       });
    //       console.log(data);
    //       if (querySnapshot.docs.length === 0) {
    //         console.log("norecord exist");
    //       }
    //     };
    //     getFirebaseDatas();
  }, []);

  return <div>Home</div>;
};
