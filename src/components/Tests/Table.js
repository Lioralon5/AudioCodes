import { useEffect, useState } from "react";
import { db } from "../../firebase";
import TableHead from "../Tests/TableHead";
import FlipMove from "react-flip-move";
import CaseItem from "../Tests/CaseItem";

function Table(props) {
  const headClickHandler = () => {
    if (props.isSuite) {
      props.setIsAllSuiteChecked(!props.isAllSuiteChecked);
      setAllItemsCheck(!props.isAllSuiteChecked);
    } else {
      props.setIsAllChecked(!props.isAllChecked);
      setAllItemsCheck(!props.isAllChecked);
    }
  };

  const setAllItemsCheck = (e) => {
    if (props.isSuite) {
      props.setSuiteCases(
        props.suiteCases.map((t) => ({ ...t, isChecked: e }))
      );
    } else {
      props.setTestCases(props.testCases.map((t) => ({ ...t, isChecked: e })));
    }
  };

  const onChecked = (id) => {
    if (props.isSuite) {
      props.setSuiteCases(
        props.suiteCases.map((e) => {
          if (e.id === id) {
            return { ...e, isChecked: !e.isChecked };
          } else {
            return e;
          }
        })
      );
    } else {
      props.setTestCases(
        props.testCases.map((e) => {
          if (e.id === id) {
            return { ...e, isChecked: !e.isChecked };
          } else {
            return e;
          }
        })
      );
    }
  };

  useEffect(() => {
    if (!props.isSuite) {
      let checkedCasesAmount = props.testCases.filter(
        (e) => e.isChecked
      ).length;
      let casesAmount = props.testCases.length;
      props.setIsSomeChecked(
        checkedCasesAmount !== 0 && checkedCasesAmount < casesAmount
      );
      props.setIsAllChecked(
        checkedCasesAmount === casesAmount && casesAmount !== 0
      );
    }
  }, [props.testCases]);

  useEffect(() => {
    if (props.isSuite) {
      let checkedCasesAmount = props.suiteCases.filter(
        (e) => e.isChecked
      ).length;
      let casesAmount = props.suiteCases.length;
      props.setIsSomeSuiteChecked(
        checkedCasesAmount !== 0 && checkedCasesAmount < casesAmount
      );
      props.setIsAllSuiteChecked(
        checkedCasesAmount === casesAmount && casesAmount !== 0
      );
    }
  }, [props.suiteCases]);

  useEffect(() => {
    if (!props.isSuite) {
      db.collection("testCases")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          props.setTestCases(
            snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                data: doc.data(),
                isChecked: false,
              };
            })
          )
        );
    }
  }, []);

  useEffect(() => {
    if (props.isSuite) {
      db.collection("suiteCases")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          props.setSuiteCases(
            snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                data: doc.data(),
                isChecked: false,
              };
            })
          )
        );
    }
  }, []);

  return (
    <div className="testCases">
      {props.isSuite ? (
        <TableHead
          isSuite={props.isSuite}
          headClickHandler={headClickHandler}
          isAllSuiteChecked={props.isAllSuiteChecked}
          isSomeSuiteChecked={props.isSomeSuiteChecked}
          setSuiteCases={props.setSuiteCases}
        />
      ) : (
        <TableHead
          isSuite={props.isSuite}
          headClickHandler={headClickHandler}
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
                  onChecked={onChecked}
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
                  onChecked={onChecked}
                />
              )
            )}
      </FlipMove>
    </div>
  );
}

export default Table;
