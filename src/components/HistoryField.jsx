import React, { useState } from "react";
import "../App.css";
import "../styles/history.css";
import PaginatedItems from "../components/paginate";
import Collapsible from "./Collapsible";
import { useAuth0 } from "@auth0/auth0-react";
import jwt_decode from 'jwt-decode'; 
export default function HistoryField(props) {
  const { getAccessTokenSilently } = useAuth0();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const golfData = props.golfData
  const scoreData = props.scores

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  scoreData.sort((a,b) => b.id-a.id);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const scoresSliced = scoreData.slice(indexOfFirst, indexOfLast);

  const token = localStorage.getItem("@@auth0spajs@@::vJiNOBCQEuCRNoFU7I4tO9ORIBm6l5Eb::https://golfApp.guillaume.hogent.be::openid profile email offline_access")
  //const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im5VVzJsR2d1SkdRVUtWRXBIbV9hRiJ9.eyJpc3MiOiJodHRwczovL2Rldi04Y3BiYmgyMXcyZ3NmOHlvLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2Mzg4NzI1ODM3NTk1ZTRjOTk1NmM2YTYiLCJhdWQiOlsiaHR0cHM6Ly9nb2xmQXBwLmd1aWxsYXVtZS5ob2dlbnQuYmUiLCJodHRwczovL2Rldi04Y3BiYmgyMXcyZ3NmOHlvLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2NzA4NDI1MTQsImV4cCI6MTY3MDkyODkxNCwiYXpwIjoidkppTk9CQ1FFdUNSTm9GVTdJNHRPOU9SSUJtNmw1RWIiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIG9mZmxpbmVfYWNjZXNzIiwicGVybWlzc2lvbnMiOltdfQ.HK8gGS-73s4EY1HYDhMi7Rz4MAy7v_pcy1XxIlvsQ_spQyIBdaaUI4xdcheq3YvupVq3clacOk15zkMkM8zcUeeNGbg7xKSPa5HnhmEJ09td5I--QYa4Sw__zACUb6LlWiTKKc6tZ4cPJKPGfdUZhv_GbGo-RpAhYZ3vF89PyYxoButtlKwkyFcAp93t9DFgBoXFm5fnHUU93nFjSs8v5Z12jlRztz_VyEI9ZAGuZAMP_ZydQQRv3HGqtaTr_yTfOYofK2-H2jzwybYhlTa8b_yQGVXn13HY2pteZ8i-2fZDrMoIo9qIKgj7gmrYw2EraV4WSUO_zuMYbih474F_Ow"
  //const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im5VVzJsR2d1SkdRVUtWRXBIbV9hRiJ9.eyJpc3MiOiJodHRwczovL2Rldi04Y3BiYmgyMXcyZ3NmOHlvLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2MzdlOWEzOGE4YjJjMmVjNjBiMzFkYzAiLCJhdWQiOlsiaHR0cHM6Ly9nb2xmQXBwLmd1aWxsYXVtZS5ob2dlbnQuYmUiLCJodHRwczovL2Rldi04Y3BiYmgyMXcyZ3NmOHlvLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2NzA4NDQxNzQsImV4cCI6MTY3MDkzMDU3NCwiYXpwIjoidkppTk9CQ1FFdUNSTm9GVTdJNHRPOU9SSUJtNmw1RWIiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIG9mZmxpbmVfYWNjZXNzIiwicGVybWlzc2lvbnMiOltdfQ.uAS2pE8l-sm0VnIvfPDIROugkadR4PRTOmgQEjjTPn2jBv0-PRU_qATk4AYhWQ_MZhcJgUn-fT2hliHO87qcJWGhyMAvtv1V88prMjPNg8eXMdjfnuNw7-fYtR9xzPdsb_eEx8dznx5D8VEdVcRqoJbFxOj_BIKSbEy9ifiNG7xOnejiXbwAjkn3UjGTYcLFJ60ztp4Gvp_ZOqgEmvEGdOHtT11W3pI82uZvLcRwIabm3kiS8gQUmPXuo0ePhWnKRKVzBJmaS5SEhYdmf-M5bUr3jcITfr6gptXZsEaKnTcMonOE5VwBIKkHUwoweq8dYnJIOmer0bwUZEoPzPOF5w"
  const decoded = jwt_decode(token)
  

  return (
    <>
      <div className="vak" id="scroll">
        {scoresSliced.filter(e => e.userID === decoded.sub).map((score) => (
          <div className="vakken" style={{ backgroundColor: "white" }}>
            <span className="logos2 grid-vak-logo" id="span1">
              <img
                id="logo-golf2"
                src={`${golfData[score.coursID - 1]?.image}`}
                alt="y"
              />
            </span>
            <span className="grid-vak-naam" id="text">
              {golfData[score.coursID - 1]?.name}
            </span>
            <span className="grid-vak-date" id="text">
              {new Date(score.createdAt).toLocaleDateString()}
            </span>

            <span className="grid-vak-result" id="text">

              { score.result > 0 ? '+'+score.result : score.result }

            </span>
            
            <span className="grid-table-review">
              <Collapsible golfData={golfData} scoreData={scoresSliced} tel={score.coursID}/>
            </span>
            
          </div>
        ))}
        <div>
          <PaginatedItems
            scoresPerPage={postsPerPage}
            total={scoreData.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
}