import { useEffect, useState } from "react";
import { db } from "../../firebase";
import SuiteCaseItem from "./SuiteCaseItem";
import SuiteTableHead from "./SuiteTableHead";
import FlipMove from "react-flip-move";

function SuiteCases({
  suiteCases,
  setSuiteCases,
  isSomeSuiteChecked,
  setIsSomeSuiteChecked,
  isAllSuiteChecked,
  setIsAllSuiteChecked,
}) {
  const [order, setOrder] = useState("timestamp");

  const headClickHandler = () => {
    setIsAllSuiteChecked(!isAllSuiteChecked);
    setAllItemsCheck(!isAllSuiteChecked);
  };

  const setAllItemsCheck = (e) => {
    setSuiteCases(suiteCases.map((t) => ({ ...t, isChecked: e })));
  };

  const onChecked = (id) => {
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
      .orderBy(order, "asc")
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
    <div className="suiteCases">
      <SuiteTableHead
        headClickHandler={headClickHandler}
        isAllSuiteChecked={isAllSuiteChecked}
        isSomeSuiteChecked={isSomeSuiteChecked}
        setSuiteCases={setSuiteCases}
      />
      <FlipMove>
        {suiteCases.map(
          ({
            id,
            data: { title, requirement, assignee, run, status },
            isChecked,
          }) => (
            <SuiteCaseItem
              id={id}
              key={id}
              title={title}
              requirement={requirement}
              assignee={assignee}
              run={run}
              status={status}
              isChecked={isChecked}
              onChecked={onChecked}
            />
          )
        )}
      </FlipMove>
    </div>
  );
}

export default SuiteCases;
