import React from 'react';
import { Icon } from '@iconify/react';

interface ErrorProps {
  error: Error;
  onRetry?: () => void;
}

const Error: React.FC<ErrorProps> = ({ error, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 gap-8">
      <div className="brutal-card p-12 max-w-2xl w-full">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-20 h-20 bg-primary border-4 border-border flex items-center justify-center">
            <Icon icon="mdi:alert" className="w-12 h-12 text-white" />
          </div>
          <h3 className="brutal-title text-5xl text-primary">加载失败</h3>
        </div>
        
        <div className="bg-surface border-4 border-border p-6 mb-8">
          <p className="text-xl text-text">
            {error.message}
          </p>
        </div>
        
        {onRetry && (
          <button
            onClick={onRetry}
            className="brutal-btn w-full text-xl"
          >
            <Icon icon="mdi:refresh" className="w-6 h-6 mr-2" />
            重试
          </button>
        )}
      </div>
    </div>
  );
};

export default Error;
