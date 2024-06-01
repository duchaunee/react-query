import { useEffect } from "react";
import "./App.css";

//OUTPUT:
/**
 * start
 * end
 * XONG ROI NE
 */

//VẪN BẮT ĐƯỢC onSuccess MẶC DÙ KHÔNG DÙNG AWAIT
function App() {
  useEffect(() => {
    const run = async () => {
      console.log("start");
      resolve(() => {
        console.log("XONG ROI NE");
      });
      console.log("end");
    };
    run();
  }, []);

  const resolve = (onSuccess: () => void) => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then(() => {
        onSuccess();
      });
  };
  return <>DWCHAU</>;
}

export default App;
