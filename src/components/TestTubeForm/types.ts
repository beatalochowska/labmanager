export type TestTube = {
  id: string;
  age: number;
  company: string;
  district: string;
  visionDefect: string;
};

export type TestTubeFormProps = {
  onAddTestTube: (testTube: TestTube) => void;
};
