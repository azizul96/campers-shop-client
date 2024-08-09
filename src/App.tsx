import useUnloadWarning from "./hooks/useUnloadWarning";
import MainLayout from "./layout/MainLayout";

function App() {
  useUnloadWarning();
  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
