import { useEffect, useState } from "react";
import Header from "./Header";
import "../../CSS/Cases.css";
import Table from "./Table";
import { db } from "../../firebase";

function SuiteCases() {
  
  const [suiteCases, setSuiteCases] = useState([]);
  const [isSomeSuiteChecked, setIsSomeSuiteChecked] = useState(false);
  const [isAllSuiteChecked, setIsAllSuiteChecked] = useState(false);
  const [isSuiteFilterActive, setIsSuiteFilterActive] = useState(false);
  const [areSuiteCasesFiltered, setAreSuiteCasesFiltered] = useState(false);

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
    <div className="cases">
      <Header
        collection={'suiteCases'}
        cases={suiteCases}
        setCases={setSuiteCases}
        isSomeChecked={isSomeSuiteChecked}
        isAllChecked={isAllSuiteChecked}
        isFilterActive={isSuiteFilterActive}
        setIsFilterActive={setIsSuiteFilterActive}
        areCasesFiltered={areSuiteCasesFiltered}
        setAreCasesFiltered={setAreSuiteCasesFiltered}
      />
      <Table
        collection={'suiteCases'}
        headClickHandler={suiteHeadClickHandler}
        onChecked={onSuiteChecked}
        cases={suiteCases}
        setCases={setSuiteCases}
        isSomeChecked={isSomeSuiteChecked}
        isAllChecked={isAllSuiteChecked}
      />
    </div>
  );
}

export default SuiteCases;
