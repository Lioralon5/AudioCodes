import TableHead from "../Tests/TableHead";
import FlipMove from "react-flip-move";
import CaseItem from "../Tests/CaseItem";
import "../../CSS/Table.css";

function Table(props) {
  return (
    <div className="table">
      {
        <TableHead
          collection={props.collection}
          headClickHandler={props.headClickHandler}
          isAllChecked={props.isAllChecked}
          isSomeChecked={props.isSomeChecked}
          setCases={props.setCases}
          user={props.user}
        />
      }
      {props.cases.length === 0 ? (
        <FlipMove>
          <div className="table__empty">No Cases Found</div>
        </FlipMove>
      ) : (
        <FlipMove>
          {props.cases.map(
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
      )}
    </div>
  );
}

export default Table;
