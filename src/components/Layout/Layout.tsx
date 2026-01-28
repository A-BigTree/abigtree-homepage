import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        {children}
      </main>
      <footer className="py-8 px-4 md:px-8 border-t-4 border-border bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-lg font-bold text-text">
            &copy; {new Date().getFullYear()} 个人主页
          </p>
          <div className="flex gap-4">
            <a 
              href="mailto:shuxinwang662@gmail.com"
              className="text-text hover:text-primary transition-colors duration-200 font-medium"
            >
              联系我
            </a>
            <span className="text-text">|</span>
            <span className="text-text">Designed with ❤️</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
