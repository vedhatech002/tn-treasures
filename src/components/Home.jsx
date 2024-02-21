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
  useEffect(() => {}, []);

  return <div>Home</div>;
};
