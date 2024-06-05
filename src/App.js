import "./App.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const theme = createTheme({
  palette: {
    op: {
      main: "slategrey",
      contrastText: "white",
    },
  },
});

function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
        <Grid
          container
          spacing={{ xs: 0.5, md: 0.5 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={6}>
            <Button
              sx={{
                height: "50px",
                fontFamily: "digital",
                fontSize: "1.5rem",
              }}
              className="btn"
              variant="contained"
              color="error"
            >
              AC
            </Button>
          </Grid>
          <Grid item xs={1} sm={2} md={3}>
            <Button
              sx={{ height: "50px", fontFamily: "digital", fontSize: "2rem" }}
              className="btn"
              variant="contained"
              color="op"
            >
              /
            </Button>
          </Grid>
          <Grid item xs={1} sm={2} md={3}>
            <Button
              sx={{ height: "50px", fontFamily: "digital", fontSize: "2rem" }}
              className="btn"
              variant="contained"
              color="op"
            >
              X
            </Button>
          </Grid>

          <Grid item xs={1} sm={2} md={3}>
            <Button
              sx={{ height: "50px", fontFamily: "digital", fontSize: "1.5rem" }}
              className="btn"
              variant="contained"
            >
              7
            </Button>
          </Grid>
          <Grid item xs={1} sm={2} md={3}>
            <Button
              sx={{ height: "50px", fontFamily: "digital", fontSize: "1.5rem" }}
              className="btn"
              variant="contained"
            >
              8
            </Button>
          </Grid>
          <Grid item xs={1} sm={2} md={3}>
            <Button
              sx={{ height: "50px", fontFamily: "digital", fontSize: "1.5rem" }}
              className="btn"
              variant="contained"
            >
              9
            </Button>
          </Grid>
          <Grid item xs={1} sm={2} md={3}>
            <Button
              sx={{ height: "50px", fontFamily: "digital", fontSize: "2rem" }}
              className="btn"
              variant="contained"
              color="op"
            >
              -
            </Button>
          </Grid>

          <Grid item xs={1} sm={2} md={3}>
            <Button
              sx={{ height: "50px", fontFamily: "digital", fontSize: "1.5rem" }}
              className="btn"
              variant="contained"
            >
              4
            </Button>
          </Grid>
          <Grid item xs={1} sm={2} md={3}>
            <Button
              sx={{ height: "50px", fontFamily: "digital", fontSize: "1.5rem" }}
              className="btn"
              variant="contained"
            >
              5
            </Button>
          </Grid>
          <Grid item xs={1} sm={2} md={3}>
            <Button
              sx={{ height: "50px", fontFamily: "digital", fontSize: "1.5rem" }}
              className="btn"
              variant="contained"
            >
              6
            </Button>
          </Grid>
          <Grid item xs={1} sm={2} md={3}>
            <Button
              sx={{ height: "50px", fontFamily: "digital", fontSize: "2rem" }}
              className="btn"
              variant="contained"
              color="op"
            >
              +
            </Button>
          </Grid>

          <Grid item xs={1} sm={2} md={3}>
            <Button
              sx={{ height: "50px", fontFamily: "digital", fontSize: "1.5rem" }}
              className="btn"
              variant="contained"
            >
              1
            </Button>
          </Grid>
          <Grid item xs={1} sm={2} md={3}>
            <Button
              sx={{ height: "50px", fontFamily: "digital", fontSize: "1.5rem" }}
              className="btn"
              variant="contained"
            >
              2
            </Button>
          </Grid>
          <Grid item xs={1} sm={2} md={3}>
            <Button
              sx={{ height: "50px", fontFamily: "digital", fontSize: "1.5rem" }}
              className="btn"
              variant="contained"
            >
              3
            </Button>
          </Grid>
          <Grid item xs={1} sm={2} md={3}>
            <Button
              sx={{ height: "50px", fontFamily: "digital", fontSize: "2rem" }}
              className="btn"
              variant="contained"
              color="op"
            >
              =
            </Button>
          </Grid>

          <Grid item xs={2.5} sm={5} md={7.5}>
            <Button
              sx={{ height: "50px", fontFamily: "digital", fontSize: "1.5rem" }}
              className="btn"
              variant="contained"
            >
              0
            </Button>
          </Grid>
          <Grid item xs={1.5} sm={3} md={4.5}>
            <Button
              sx={{ height: "50px", fontFamily: "digital", fontSize: "2rem" }}
              className="btn"
              variant="contained"
              color="op"
            >
              .
            </Button>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
}

function App() {
  return (
    <div className="App">
      <Box class="calculator">
        <div class="formulaScreen">1/4+1-2*31231231231232w6ew112</div>
        <div class="outputScreen" id="display">
          0
        </div>
        <ResponsiveGrid />
      </Box>
    </div>
  );
}

export default App;
