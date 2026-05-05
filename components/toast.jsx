// Toast hook + container — global "coming soon" và các thông báo ngắn khác
const ToastContext = React.createContext({ showToast: () => {} });

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = React.useState([]);
  const showToast = React.useCallback((msg, opts = {}) => {
    const id = Date.now() + Math.random();
    setToasts((arr) => [...arr, { id, msg, icon: opts.icon || "clock" }]);
    setTimeout(() => {
      setToasts((arr) => arr.filter((t) => t.id !== id));
    }, opts.duration || 2400);
  }, []);
  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="toast-stack">
        {toasts.map((t) => (
          <div key={t.id} className="toast">
            <span className="toast-ico"><Icon name={t.icon} size={14} stroke={2.2}/></span>
            <span>{t.msg}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

const useToast = () => React.useContext(ToastContext);

window.ToastProvider = ToastProvider;
window.useToast = useToast;
