import React, { useEffect, useState } from "react";
import { TestTube } from "../TestTubeForm/types";
import { Rack } from "../RackDisplay/types";
import TestTubeForm from "../TestTubeForm/TestTubeForm";
import RackDisplay from "../RackDisplay/ReackDiplay";
import { assignToRacks } from "./utils";
import Button from "@mui/material/Button";
import { exampleTubes } from "../TestTubeForm/const";
import Box from "@mui/material/Box";
import TubesDisplay from "../TubesDisplay/TubesDisplay";
import { numRacks } from "./const";

const SampleSorter: React.FC = () => {
  const [testTubes, setTestTubes] = useState<TestTube[]>([]);
  const [racks, setRacks] = useState<Rack[]>([]);
  const [isLoadButtonRendered, setIsLoadButtonRendered] =
    useState<boolean>(true);

  useEffect(() => {
    setIsLoadButtonRendered(testTubes.length === 0);
  }, [testTubes]);

  const addTestTube = (testTube: TestTube) =>
    setTestTubes([...testTubes, testTube]);

  const handleSort = () => {
    try {
      const sortedRacks = assignToRacks(testTubes, numRacks);
      setRacks(sortedRacks);
    } catch (error) {
      alert(error);
    }
  };
  const handleAddExampleTubes = () => {
    setTestTubes(exampleTubes);
  };
  return (
    <Box
      component="section"
      sx={{ "& .MuiButtonBase-root": { m: 1, width: "200px" } }}
    >
      <h2>Sample Sorter</h2>
      <TestTubeForm onAddTestTube={addTestTube} />
      {isLoadButtonRendered && (
        <Button variant="outlined" onClick={handleAddExampleTubes}>
          Load example tubes
        </Button>
      )}
      <Button variant="contained" onClick={handleSort}>
        Sort Test Tubes
      </Button>
      <RackDisplay racks={racks} numRacks={numRacks} />
      {Boolean(testTubes.length) && <TubesDisplay tubes={testTubes} />}
    </Box>
  );
};

export default SampleSorter;
