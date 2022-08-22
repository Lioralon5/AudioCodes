import { useEffect, useState } from "react";
import { db } from "../../firebase";
import TestCaseItem from "../TestCases/TestCaseItem";
import SuiteTableHead from "./SuiteTableHead";

function SuiteCases() {
  
  const [suiteCases, setSuiteCases] = useState([]);

  useEffect(() => {
    db.collection("suiteCases")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setSuiteCases(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="suiteCases">
      <SuiteTableHead />
      {suiteCases.map(
        ({ id, data: { title, requirement, assignee, run, status } }) => (
          <TestCaseItem
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

export default SuiteCases;
