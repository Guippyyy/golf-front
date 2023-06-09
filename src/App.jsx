import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScoreCard from "./pages/ScoreCard";
import Profile from "./pages/Profile";
import History from "./pages/History";
import Stats from "./pages/Stats";
import NotFound from "./pages/NotFound";
import Play from "./pages/play";
import Page from "./components/Page";
import RequireAuth from "./authentication/RequireAuth";
import Login from "./pages/Login";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/scoreCard" element={(<RequireAuth> <ScoreCard /></RequireAuth> )} />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Page>
                  <Profile />
                </Page>
              </RequireAuth>
            }
          />
          <Route
            index
            element={
              <Page>
                <Login />
              </Page>
            }
          />
          <Route
            exact
            path="/History"
            element={
              <RequireAuth>
                <Page>
                  <History />
                </Page>
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/stats"
            element={
                <Page>
                  <Stats />
                </Page>
            }
          />
          {/* <Route index element={<LoginButton />} /> */}
          <Route
            exact
            path="/play"
            element={
              <RequireAuth>
                <Page>
                  <Play />
                </Page>
              </RequireAuth>
            }
          />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
