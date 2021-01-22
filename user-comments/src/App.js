import React from "react";
import faker from "faker";
import Comment from "./components/Comment";
import ApprovalCard from "./components/ApprovalCard";

function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
        <h4>Warning!</h4>
        Are you sure?
        </div>
        </ApprovalCard>

      <ApprovalCard>
        <Comment
          author="Liban"
          image={faker.image.image()}
          date={new Date().toLocaleTimeString()}
          text="nice post"
        />
      </ApprovalCard>

      <ApprovalCard>
        <Comment
          author="Abdi"
          image={faker.image.image()}
          date={new Date().toLocaleTimeString()}
          text="nice post"
        />
      </ApprovalCard>

      <ApprovalCard>
        <Comment
          author="Mahmoud"
          image={faker.image.image()}
          date={new Date().toLocaleTimeString()}
          text="nice post"
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
