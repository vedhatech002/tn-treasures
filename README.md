# tn-tourism

### todo

- [x] route setup
- [x] places page
- [x] contribute page
- [x] firebase setup
- [x] exploring firebase crud
- [x] CRUD operation React + FireBase
- [ ] Home page
- [ ] search option
- [ ] filter option
- [ ] file validation for storage

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
  const docRef = collection(db, collectionName);
  await setDoc(doc(docRef, documntId), {
    data,
  });
  console.log("Document written with ID: ", docRef.id);
};
setData();
```

### add Doc

```js
const setFireStoreData = async () => {
  await addDoc(collection(db, collectionName), {
    // some data to store
  });
};
```

### update doc

```js
const updateData = async () => {
  const updateRef = doc(db, collectionName, docId);

  await updateDoc(kodikaraiRef, {
    prop: "value",
  });
};
updateData();
```

### delete doc

```js
const deleteData = async () => {
  await deleteDoc(doc(db, collectionName, docId));
};
deleteData();
```

## file validation

```js
image: z
.any()
.refine((files) => files?.[0]?.size <= 5000000, `Max image size is 5MB.`)
.refine(
(files) =>
["image/jpeg", "image/jpg", "image/webp"].includes(files?.[0]?.type),
"Only .jpg, .jpeg formats are supported."
),
```
