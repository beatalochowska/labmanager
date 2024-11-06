import { TestTube } from "../TestTubeForm/types";

export interface Rack {
  id: number;
  testTubes: TestTube[];
}

export type RackDisplayProps = {
  racks: Rack[];
  numRacks: number;
};
