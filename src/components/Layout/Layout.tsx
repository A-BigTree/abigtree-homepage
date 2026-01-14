import React from 'react';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout-container">
        {children}
      </div>
      <footer className="layout-footer">
        <p>&copy; {new Date().getFullYear()} 个人主页. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
