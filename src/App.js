import Labs from "./labs"
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
                    integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
                    crossOrigin="anonymous" referrerPolicy="no-referrer"/>
              <Routes>
                  <Route path="/tuiter/*" element={<Tuiter/>}/>
                  <Route path="/*" element={<Labs/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}
export default App;