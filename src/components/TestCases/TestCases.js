import { useContext, useEffect, useState } from "react";
import { db } from "../../firebase";
import TestCasesContext from "../../store/testCases-context";
import CasesTableHead from "./CasesTableHead";
import TestCaseItem from "./TestCaseItem";

function TestCases() {
  const ctx = useContext(TestCasesContext);
  
  const [order, setOrder] = useState("timestamp");


  return (
    <div className="testCases">
      <CasesTableHead
        headClickHandler={ctx.headClickHandler}
        isAllChecked={ctx.isAllChecked}
        isSomeChecked={ctx.isSomeChecked}
        setTestCases={ctx.setTestCases}
      />
      {ctx.testCases.map(
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
            onChecked={ctx.onChecked}
          />
        )
      )}
    </div>
  );
}

export default TestCases;
