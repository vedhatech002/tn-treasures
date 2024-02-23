# tn-tourism

### todo

- [x] route setup
- [ ] Home page
- [ ] search page
- [ ] places page
- [ ] contribute page
- [x] firebase setup
- [x] exploring firebase crud

### get doc

```js
const getFirebaseDatas = async () => {
  const querySnapshot = await getDocs(collection(db, "touristPlaces"));
  const data = querySnapshot.docs.map((doc) => {
    const getData = doc.data();
    const getId = doc.id;
    const finalData = { ...getData, id: getId };
    return finalData;
  });
  console.log(data);
  if (querySnapshot.docs.length === 0) {
    console.log("norecord exist");
  }
};
getFirebaseDatas();
```

### set doc

```js
const setData = async () => {
  const docRef = collection(db, "touristPlaces");
  await setDoc(doc(docRef, "kodiyakkarai"), {
    name: "kodiyakkarai",
    district: "nagappatinam",
  });
  console.log("Document written with ID: ", docRef.id);
};
setData();
```

### add Doc

```js
const setFireStoreData = async () => {
  await addDoc(collection(db, "location"), {
    name:"valankanni"
     district: "nagappatinam",
  });
};
```

### update doc

```js
const updateData = async () => {
  const kodikaraiRef = doc(db, "touristPlaces", "kodiyakkarai");

  // Set the "capital" field of the city 'DC'
  await updateDoc(kodikaraiRef, {
    district: "vedaranyam",
  });
};
updateData();
const updateData = async () => {
  const kodikaraiRef = doc(db, "touristPlaces", "kodiyakkarai");

  // Set the "capital" field of the city 'DC'
  await updateDoc(kodikaraiRef, {
    district: "vedaranyam",
  });
};
updateData();
```

### delete doc

```js
const deleteData = async () => {
  await deleteDoc(doc(db, "touristPlaces", "kodiyakkarai"));
};
deleteData();
```
