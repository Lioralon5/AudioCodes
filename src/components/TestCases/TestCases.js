import { useEffect, useState } from "react";
import { db } from "../../firebase";
import CasesTableHead from "./CasesTableHead";
import TestCaseItem from "./TestCaseItem";

function TestCases() {
  const [testCases, setTestCases] = useState([]);
  const [order, setOrder] = useState("timestamp");

  //checkboxes
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isSomeChecked, setIsSomeChecked] = useState(false);

  function headClickHandler() {
    setIsAllChecked(!isAllChecked)
    setAllItemsCheck(!isAllChecked)
  }

  const setAllItemsCheck = (e) =>{
    
  }

  useEffect(() => {
    db.collection("testCases")
      .orderBy(order, "asc")
      .onSnapshot((snapshot) =>
        setTestCases(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="testCases">
      <CasesTableHead
        headClickHandler={headClickHandler}
        isAllChecked={isAllChecked}
        setIsAllChecked={setIsAllChecked}
        isSomeChecked={isSomeChecked}
        setIsSomeChecked={setIsSomeChecked}
        setTestCases={setTestCases}
      />
      {testCases.map(
        ({ id, data: { title, requirement, assignee, run, status } }) => (
          <TestCaseItem
            isAllChecked={isAllChecked}
            setIsAllChecked={setIsAllChecked}
            isSomeChecked={isSomeChecked}
            setIsSomeChecked={setIsSomeChecked}
            key={id}
            title={title}
            requirement={requirement}
            assignee={assignee}
            run={run}
            status={status}
          />
        )
      )}
    </div>
  );
}

export default TestCases;
