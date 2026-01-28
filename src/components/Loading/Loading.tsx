import React from 'react';

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = '加载中...' }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8 px-4">
      <div className="brutal-card p-12">
        <div className="w-20 h-20 border-4 border-primary border-t-transparent animate-spin"></div>
      </div>
      
      <div className="brutal-card p-8">
        <p className="text-2xl font-bold text-text">
          {message}
        </p>
      </div>
    </div>
  );
};

export default Loading;
