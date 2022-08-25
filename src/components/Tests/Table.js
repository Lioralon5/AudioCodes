import { useEffect, useState } from "react";
import { db } from "../../firebase";
import TableHead from "../Tests/TableHead";
import FlipMove from "react-flip-move";
import CaseItem from "../Tests/CaseItem";

function Table(props) {

  return (
    <div className="testCases">
      {props.isSuite ? (
        <TableHead
          isSuite={true}
          headClickHandler={props.headClickHandler}
          isAllSuiteChecked={props.isAllSuiteChecked}
          isSomeSuiteChecked={props.isSomeSuiteChecked}
          setSuiteCases={props.setSuiteCases}
        />
      ) : (
        <TableHead
          isSuite={false}
          headClickHandler={props.headClickHandler}
          isAllChecked={props.isAllChecked}
          isSomeChecked={props.isSomeChecked}
          setTestCases={props.setTestCases}
        />
      )}
      <FlipMove>
        {props.isSuite
          ? props.suiteCases.map(
              ({
                id,
                data: { title, requirement, assignee, run, status },
                isChecked,
              }) => (
                <CaseItem
                  id={id}
                  key={id}
                  title={title}
                  requirement={requirement}
                  assignee={assignee}
                  run={run}
                  status={status}
                  isChecked={isChecked}
                  onChecked={props.onChecked}
                />
              )
            )
          : props.testCases.map(
              ({
                id,
                data: { title, requirement, assignee, run, status },
                isChecked,
              }) => (
                <CaseItem
                  id={id}
                  key={id}
                  title={title}
                  requirement={requirement}
                  assignee={assignee}
                  run={run}
                  status={status}
                  isChecked={isChecked}
                  onChecked={props.onChecked}
                />
              )
            )}
      </FlipMove>
    </div>
  );
}

export default Table;
