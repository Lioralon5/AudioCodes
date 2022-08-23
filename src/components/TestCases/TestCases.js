import { useEffect, useState } from "react";
import { db } from "../../firebase";
import CasesTableHead from "./CasesTableHead";
import TestCaseItem from "./TestCaseItem";

function TestCases({testCases, setTestCases}) {
  
  const [order, setOrder] = useState("timestamp");

  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isSomeChecked, setIsSomeChecked] = useState(false);

  

  const headClickHandler = () => {
    setIsAllChecked(!isAllChecked);
    setAllItemsCheck(!isAllChecked);
  };

  const setAllItemsCheck = (e) => {
    setTestCases(testCases.map((t) => ({ ...t, isChecked: e })));
  };

  const onChecked = (id) => {
    setTestCases(testCases.map(e => {
      if(e.id === id){
        return {...e, isChecked: !e.isChecked};
      }
      else {
        return e;
      }})
    );
  };
  
  useEffect(() =>{
    let checkedCasesAmount = testCases.filter(e => e.isChecked).length;
    let casesAmount = testCases.length;
    setIsSomeChecked(checkedCasesAmount !== 0 && checkedCasesAmount < casesAmount)
    setIsAllChecked(checkedCasesAmount === casesAmount && casesAmount !== 0)
  }, [testCases])

  useEffect(() => {
    db.collection("testCases")
      .orderBy(order, "asc")
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
    <div className="testCases">
      <CasesTableHead
        headClickHandler={headClickHandler}
        isAllChecked={isAllChecked}
        isSomeChecked={isSomeChecked}
        setTestCases={setTestCases}
      />
      {testCases.map(
        ({
          id,
          data: { title, requirement, assignee, run, status },
          isChecked,
        }) => (
          <TestCaseItem
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

export default TestCases;
