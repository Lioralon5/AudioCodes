import { createContext, useEffect, useState } from "react";
import { db } from "../firebase";

const TestCasesContext = createContext({
  testCases: [],
  totalTestCases: 0,
});

export const TestCasesContextProvider = (props) => {
  const [testCases, setTestCases] = useState([]);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isSomeChecked, setIsSomeChecked] = useState(false);
  const [asc, setAsc] = useState('asc');

  const headClickHandler = () => {
    setIsAllChecked(!isAllChecked);
    setAllItemsCheck(!isAllChecked);
    // setTestCases(testCases.filter(t =>
    //   t.data.title === 'Please work'
    // )) *save a copy of prev testCases
    //when removed from filtered cases, remove from origin as well
  };
  const setAllItemsCheck = (e) => {
    setTestCases(testCases.map((t) => ({ ...t, isChecked: e })));
  };
  const onChecked = (id) => {
    setTestCases(
      testCases.map((e) => {
        if (e.id === id) {
          return { ...e, isChecked: !e.isChecked };
        } else {
          return e;
        }
      })
    );
  };

  useEffect(() => {
    let checkedCasesAmount = testCases.filter((e) => e.isChecked).length;
    let casesAmount = testCases.length;
    setIsSomeChecked(
      checkedCasesAmount != 0 && checkedCasesAmount < casesAmount
    );
    setIsAllChecked(checkedCasesAmount === casesAmount && casesAmount != 0);
  }, [testCases]);

  useEffect(() => {
    db.collection("testCases")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setTestCases(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              data: doc.data(),
              isChecked: false,
            };
          })
        )
      );
  }, []);
  function onTitleClickHandler() {
    asc == "asc" ? setAsc("desc") : setAsc("asc");
    db.collection("testCases")
      .orderBy("title", asc)
      .onSnapshot((snapshot) =>
        setTestCases(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }

  return (
    <TestCasesContext.Provider
      value={{
        testCases: testCases,
        isAllChecked: isAllChecked,
        isSomeChecked: isSomeChecked,
        headClickHandler: headClickHandler,
        onChecked: onChecked,
        onTitleClickHandler: onTitleClickHandler,
      }}
    >
      {props.children}
    </TestCasesContext.Provider>
  );
};

export default TestCasesContext;
