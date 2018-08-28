import React from 'react';

const Header = ({activeUserId}) => {
  return (
    <div className="chat__header">
      {activeUserId}
    </div>
  );
};

export default Header;
