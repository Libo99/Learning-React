import React from "react";

const ApprovalCard = (props) => {
    const {children} = props;
  return (
    <div className="ui card">
      <div className="content">{children}</div>
      <div className="extracontent">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
      {/* <button className="ui basic green button">
          Approve
      </button>

      <button className="ui basic red button">
          Reject
      </button> */}
    </div>
  );
};

export default ApprovalCard;
