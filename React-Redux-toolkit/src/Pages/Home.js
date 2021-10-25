import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DenseAppBar from "../Components/Header";
import { useSelector, useDispatch } from "react-redux";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import DataCard from "../features/data/Data";
import { Button } from "@mui/material";
import { fetchData } from "../features/data/DataSlice";

function Home() {
  const [search, setsearch] = useState("");
  let [limit, setlimit] = useState(8);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);

  useEffect(() => {
    dispatch(fetchData(limit));
  }, [dispatch, limit]);

  console.log(data);
  return (
    <div>
      <DenseAppBar />
      <input
        className="search-box"
        type="text"
        placeholder="Search by rocket name.."
        onChange={(e) => setsearch(e.target.value)}
      />

      <div style={{ margin: "1rem" }}>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            spacing={0}
            rowSpacing={1}
            columnSpacing={{ xs: 1, lg: 1, md: 1 }}
          >
            {data.length === 0 ? (
              <Loader className="loader" type="ThreeDots" color="#00BFFF" />
            ) : (
              data
                .filter((val) => {
                  if (search === "") {
                    return val;
                  } else if (
                    val.rocket.rocket_name
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map(function (element, index) {
                  return (
                    <Grid key={index} item xs={3}>
                      <DataCard item={element} />
                    </Grid>
                  );
                })
            )}
          </Grid>
        </Box>
      </div>
      <div style={{ textAlign: "center", margin: "0.3rem" }}>
        <Button variant="contained" onClick={() => setlimit((limit += 4))}>
          Add 4 more Cards
        </Button>
      </div>
    </div>
  );
}

export default Home;
