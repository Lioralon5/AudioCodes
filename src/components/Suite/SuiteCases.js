import { useEffect, useState } from "react";
import { db } from "../../firebase";
import SuiteCaseItem from "./SuiteCaseItem";
import SuiteTableHead from "./SuiteTableHead";

function SuiteCases({ suiteCases, setSuiteCases }) {

  const [order, setOrder] = useState("timestamp");

  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isSomeChecked, setIsSomeChecked] = useState(false);

  const headClickHandler = () => {
    setIsAllChecked(!isAllChecked);
    setAllItemsCheck(!isAllChecked);
  };

  const setAllItemsCheck = (e) => {
    setSuiteCases(suiteCases.map((t) => ({ ...t, isChecked: e })));
    console.log(suiteCases)
  };

  const onChecked = (id) => {
    setSuiteCases(suiteCases.map(e => {
      if(e.id === id){
        return {...e, isChecked: !e.isChecked};
      }
      else {
        return e;
      }})
    );
  };

  useEffect(() => {
    let checkedCasesAmount = suiteCases.filter((e) => e.isChecked).length;
    let casesAmount = suiteCases.length;
    setIsSomeChecked(
      checkedCasesAmount !== 0 && checkedCasesAmount < casesAmount
    );
    setIsAllChecked(checkedCasesAmount === casesAmount && casesAmount !== 0);
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
        isAllChecked={isAllChecked}
        isSomeChecked={isSomeChecked}
        setSuiteCases={setSuiteCases}
      />
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
    </div>
  );
}

export default SuiteCases;
