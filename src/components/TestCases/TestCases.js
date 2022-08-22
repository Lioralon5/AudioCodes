import { useEffect, useState } from "react";
import { db } from "../../firebase";
import CasesTableHead from "./CasesTableHead";
import TestCaseItem from "./TestCaseItem";
import firebase from "firebase";

function TestCases() {
  const [input, setInput] = useState("");
  const [testCases, setTestCases] = useState([]);

  const [isAllChecked, setIsAllChecked] = useState(false);
  

  const isClicked = (isAllChecked) => {
    setIsAllChecked(!isAllChecked);
  };

  useEffect(() => {
    db.collection("testCases")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setTestCases(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const createTestCase = (e) => {
    e.preventDefault();

    db.collection("testCases").add({
      title: input,
      requirement: "Who cares",
      assignee: "Lior Alon",
      run: "No Run",
      status: "Passed",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="testCases">
      <CasesTableHead isClicked={isClicked} isAllChecked={isAllChecked} />
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button onClick={createTestCase} type="submit">
          Create
        </button>
      </form>
      {testCases.map(
        ({ id, data: { title, requirement, assignee, run, status} }) => (
          <TestCaseItem
            isAllChecked={isAllChecked}
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
