import React from 'react';

const ReplyHeading = ({ replyCounts }) => (
  <div className="replbox__header">
    <p className="replyCounts">
      {`반응 ${replyCounts} 개`}
    </p>
  </div>
);

export default ReplyHeading;
