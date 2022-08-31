import { useEffect, useState } from "react";
import { selectUser } from "../../features/userSlice";
import { db } from "../../firebase";
import { useSelector } from "react-redux";
import "./MyCases.css";
import MyCasesHeader from "./MyCasesHeader";
import MyCasesTable from "./MyCasesTable";

function MyCases() {
  const user = useSelector(selectUser);
  const [myCases, setMyCases] = useState([]);
  const [isSomeChecked, setIsSomeChecked] = useState(false);
  const [isAllChecked, setIsAllChecked] = useState(false);

  const headClickHandler = () => {
    setIsAllChecked(!isAllChecked);
    setMyCases(myCases.map((t) => ({ ...t, isChecked: !isAllChecked })));
  };

  const onChecked = (id) => {
    setMyCases(
      myCases.map((e) => {
        if (e.id === id) {
          return { ...e, isChecked: !e.isChecked };
        } else {
          return e;
        }
      })
    );
  };
  useEffect(() => {
    let checkedCasesAmount = myCases.filter((e) => e.isChecked).length;
    let casesAmount = myCases.length;
    setIsSomeChecked(
      checkedCasesAmount !== 0 && checkedCasesAmount < casesAmount
    );
    setIsAllChecked(checkedCasesAmount === casesAmount && casesAmount !== 0);
  }, [myCases]);

  useEffect(() => {
    db.collection("testCases")
      .orderBy("timestamp", "asc").where('assignee', '==', user.displayName)
      .onSnapshot((snapshot) =>
        setMyCases(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              data: doc.data(),
              isChecked: false,
            };
          })
        )
      );
      // eslint-disable-next-line
  }, []);

  return (
    <div className="test-cases">
      <MyCasesHeader
        cases={myCases}
        setCases={setMyCases}
        isSomeChecked={isSomeChecked}
        isAllChecked={isAllChecked}
        user={user}
      />
      <MyCasesTable
        headClickHandler={headClickHandler}
        onChecked={onChecked}
        cases={myCases}
        setCases={setMyCases}
        isSomeChecked={isSomeChecked}
        isAllChecked={isAllChecked}
      />
    </div>
  );
}

export default MyCases;
