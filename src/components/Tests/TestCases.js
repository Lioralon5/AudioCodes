import { useEffect, useState } from "react";
import Header from "./Header";
import "../../CSS/Cases.css";
import Table from "./Table";
import { db } from "../../firebase";

function TestCases() {
  
  const [testCases, setTestCases] = useState([]);
  const [isSomeChecked, setIsSomeChecked] = useState(false);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [areCasesFiltered, setAreCasesFiltered] = useState(false);

  const headClickHandler = () => {
    setIsAllChecked(!isAllChecked);
    setTestCases(testCases.map((t) => ({ ...t, isChecked: !isAllChecked })));
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
      checkedCasesAmount !== 0 && checkedCasesAmount < casesAmount
    );
    setIsAllChecked(
      checkedCasesAmount === casesAmount && casesAmount !== 0
    );
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


  return (
    <div className="cases">
      <Header
        collection={'testCases'}
        cases={testCases}
        setCases={setTestCases}
        isSomeChecked={isSomeChecked}
        isAllChecked={isAllChecked}
        isFilterActive={isFilterActive}
        setIsFilterActive={setIsFilterActive}
        areCasesFiltered={areCasesFiltered}
        setAreCasesFiltered={setAreCasesFiltered}
      />
      <Table
        collection={'testCases'}
        headClickHandler={headClickHandler}
        onChecked={onChecked}
        cases={testCases}
        setCases={setTestCases}
        isSomeChecked={isSomeChecked}
        isAllChecked={isAllChecked}
      />
    </div>
  );
}

export default TestCases;
