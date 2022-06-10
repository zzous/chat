
const messageContext = React.createContext();

export function useMessage() {
  const context = useContext(messageContext);
  if (!context) throw new Error('Cannot find TodoProvider');
  return context;
}