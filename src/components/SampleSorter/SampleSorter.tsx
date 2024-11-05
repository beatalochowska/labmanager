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

const SampleSorter: React.FC = () => {
  const [testTubes, setTestTubes] = useState<TestTube[]>([]);
  const [racks, setRacks] = useState<Rack[]>([]);
  const [renderLoadTubesButton, setRenderLoadTubesButton] =
    useState<boolean>(true);
  const [numRacks, setNumRacks] = useState<number>(5); // TO DO: Add input field for numRacks

  useEffect(() => {
    if (testTubes.length === 0) {
      setRenderLoadTubesButton(true);
    } else {
      setRenderLoadTubesButton(false);
    }
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
      {renderLoadTubesButton && (
        <Button variant="outlined" onClick={handleAddExampleTubes}>
          Load example tubes
        </Button>
      )}
      <Button variant="contained" onClick={handleSort}>
        Sort Test Tubes
      </Button>
      {Boolean(racks.length) && <RackDisplay racks={racks} />}
      {Boolean(testTubes.length) && <TubesDisplay tubes={testTubes} />}
    </Box>
  );
};

export default SampleSorter;
