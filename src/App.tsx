import SampleSorter from "./components/SampleSorter/SampleSorter";
import Container from "@mui/material/Container";

function App() {
  return (
    <Container>
      <h1>Lab Sample Manager</h1>
      <p>Sort and manage test tubes across racks.</p>
      <SampleSorter />
    </Container>
  );
}

export default App;
