import { useEffect, useState } from "react";
import { selectUser } from "../../features/userSlice";
import { db } from "../../firebase";
import { useSelector } from "react-redux";
import "../../CSS/Cases.css";
import Header from "./Header";
import Table from "./Table";


function MyCases() {
  const user = useSelector(selectUser);
  const [myCases, setMyCases] = useState([]);
  const [isSomeMineChecked, setIsSomeMineChecked] = useState(false);
  const [isAllMineChecked, setIsAllMineChecked] = useState(false);
  const [isMyFilterActive, setIsMyFilterActive] = useState(false);
  const [areMyCasesFiltered, setAreMyCasesFiltered] = useState(false);

  const headClickHandler = () => {
    setIsAllMineChecked(!isAllMineChecked);
    setMyCases(myCases.map((t) => ({ ...t, isChecked: !isAllMineChecked })));
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
    setIsSomeMineChecked(
      checkedCasesAmount !== 0 && checkedCasesAmount < casesAmount
    );
    setIsAllMineChecked(checkedCasesAmount === casesAmount && casesAmount !== 0);
  }, [myCases]);

  useEffect(() => {
    db.collection("testCases")
      .orderBy("timestamp", "asc")
      .where("assignee", "==", user.displayName)
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
    <div className="cases">
      <Header
        collection={"myCases"}
        cases={myCases}
        setCases={setMyCases}
        isSomeChecked={isSomeMineChecked}
        isAllChecked={isAllMineChecked}
        isFilterActive={isMyFilterActive}
        setIsFilterActive={setIsMyFilterActive}
        areCasesFiltered={areMyCasesFiltered}
        setAreCasesFiltered={setAreMyCasesFiltered}
        user={user}
      />
      <Table
        collection={"myCases"}
        headClickHandler={headClickHandler}
        onChecked={onChecked}
        cases={myCases}
        setCases={setMyCases}
        isSomeChecked={isSomeMineChecked}
        isAllChecked={isAllMineChecked}
        user={user}
      />
    </div>
  );
}

export default MyCases;
