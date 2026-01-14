import './Error.css';

interface ErrorProps {
  error: Error;
  onRetry?: () => void;
}

const Error: React.FC<ErrorProps> = ({ error, onRetry }) => {
  return (
    <div className="error-container">
      <div className="error-icon">⚠️</div>
      <h2 className="error-title">加载失败</h2>
      <p className="error-message">{error.message}</p>
      {onRetry && (
        <button 
          className="error-retry-btn"
          onClick={onRetry}
        >
          重试
        </button>
      )}
    </div>
  );
};

export default Error;
