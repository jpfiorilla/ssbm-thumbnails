import { useEffect, useState } from "react";
import { useToken } from "./context";
import { TokenModal } from "./features";
import "./App.css";

function App() {
  const { token } = useToken();
  console.log({ token });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!token) {
      setShowModal(true);
    }
  }, [token]);

  return (
    <div className="App">
      <TokenModal onClose={() => setShowModal(false)} open={showModal} />
    </div>
  );
}

export default App;
