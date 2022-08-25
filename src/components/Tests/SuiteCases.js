import { useEffect, useState } from "react";
import Header from "./Header";
import "../../CSS/SuiteCases.css";
import Table from "./Table";
import { db } from "../../firebase";

function SuiteCases() {
  const [suiteCases, setSuiteCases] = useState([]);
  const [isSomeSuiteChecked, setIsSomeSuiteChecked] = useState(false);
  const [isAllSuiteChecked, setIsAllSuiteChecked] = useState(false);

  const suiteHeadClickHandler = () => {
    setIsAllSuiteChecked(!isAllSuiteChecked);
    setSuiteCases(
      suiteCases.map((t) => ({ ...t, isChecked: !isAllSuiteChecked }))
    );
  };

  const onSuiteChecked = (id) => {
    setSuiteCases(
      suiteCases.map((e) => {
        if (e.id === id) {
          return { ...e, isChecked: !e.isChecked };
        } else {
          return e;
        }
      })
    );
  };
  useEffect(() => {
    let checkedCasesAmount = suiteCases.filter((e) => e.isChecked).length;
    let casesAmount = suiteCases.length;
    setIsSomeSuiteChecked(
      checkedCasesAmount !== 0 && checkedCasesAmount < casesAmount
    );
    setIsAllSuiteChecked(
      checkedCasesAmount === casesAmount && casesAmount !== 0
    );
  }, [suiteCases]);

  useEffect(() => {
    db.collection("suiteCases")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setSuiteCases(
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
    <div className="suite">
      <Header
        isSuite={true}
        suiteCases={suiteCases}
        setSuiteCases={setSuiteCases}
        isSomeSuiteChecked={isSomeSuiteChecked}
        isAllSuiteChecked={isAllSuiteChecked}
      />
      <Table
        isSuite={true}
        headClickHandler={suiteHeadClickHandler}
        onChecked={onSuiteChecked}
        suiteCases={suiteCases}
        setSuiteCases={setSuiteCases}
        isSomeSuiteChecked={isSomeSuiteChecked}
        isAllSuiteChecked={isAllSuiteChecked}
      />
    </div>
  );
}

export default SuiteCases;
