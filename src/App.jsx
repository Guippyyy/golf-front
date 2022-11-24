import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScoreCard from "./pages/ScoreCard";
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import History from "./pages/History"
import Stats from "./pages/Stats";
import NotFound from "./pages/NotFound";
import Instellingen from "./pages/instellingen";
import Page from "./components/Page"

export default function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/scoreCard" element={<ScoreCard />} />
          <Route
            exact path="/profile"
            element={<Page><Profile/> </Page>}
          />
          <Route exact path="/History" element ={<Page> <History/> </Page>} />
          <Route exact path="/stats" element ={<Page><Stats/></Page>} />
          <Route index element={<Login />} />
          <Route exact path="/Settings" element={<Page><Instellingen /></Page>} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
