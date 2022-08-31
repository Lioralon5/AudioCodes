
import FlipMove from "react-flip-move";
import MyCasesTableHead from "./MyCasesTableHead";
import MyCaseItem from "./MyCaseItem";

function MyCasesTable(props) {
  return (
    <div className="table">
      {
        <MyCasesTableHead
          isSuite={props.isSuite}
          headClickHandler={props.headClickHandler}
          isAllChecked={props.isAllChecked}
          isSomeChecked={props.isSomeChecked}
          setCases={props.setCases}
        />
      }
      <FlipMove>
        {props.cases.map(
          ({
            id,
            data: { title, requirement, assignee, run, status },
            isChecked,
          }) => (
            <MyCaseItem
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

export default MyCasesTable;
