import styles from "./App.module.scss";
import { Button } from "@mui/material";
import { Autocomplete, TextField, Fab } from "@mui/material";

function App() {
  const options = ["The Godfather", "Pulp Fiction"];
  return (
    <div className={styles.gridConatiner}>
      <div className={styles.header}>
        <h1>Many more on official docs</h1>
        <Button variant="contained">Material UI Button</Button>

        <Autocomplete
          disablePortal
          onChange={(event, value) => console.log(value)}
          id="combo-box-demo"
          options={options}
          sx={{ width: 300, margin: "1vh" }}
          renderInput={(params) => (
            <TextField {...params} label="AutoComplete input component" />
          )}
        />
      </div>
      <div className={styles.navigation}></div>
      <div className={styles.mainBodyPart1}>
        <span>Main Body Part 1</span>
      </div>
      <div className={styles.mainBodyPart2}>
        <span>Main Body Part 2</span>
      </div>
      <div className={styles.footer}>
        <span>Footer</span>
      </div>

      <Fab
        color="secondary"
        className={styles.floatingEditIcon}
        aria-label="edit"
      >
        Edit
      </Fab>
    </div>
  );
}

export default App;
