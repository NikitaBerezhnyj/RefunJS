import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
    </>
  );
}

export default App;
