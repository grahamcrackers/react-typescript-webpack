import * as React from 'react';
import { Link } from 'react-router-dom';
import '../styles/about-page.css';

// Since this component is simple and static, there's no parent container for it.
const TypeSafeActionsPage: React.SFC = () => {
  return (
    <div>
      <h2 className="alt-header">Type Safe Actions Example Page</h2>

    </div>
  );
};

export default TypeSafeActionsPage;