# tn-tourism

### todo

- [ ] Home page
- [ ] search page
- [ ] places page
- [ ] contribute page
- [x] firebase setup

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

## update doc

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
