import { TestTube } from "./types";
export const getTubesInputs = (formState: TestTube) => [
  { name: "id", value: formState.id, label: "ID", required: true },
  {
    name: "age",
    value: formState.age,
    label: "Age",
    required: true,
    type: "number",
    inputProps: { min: 0 },
  },
  {
    name: "company",
    value: formState.company,
    label: "Company",
    required: true,
  },
  {
    name: "district",
    value: formState.district,
    label: "District",
    required: true,
  },
  {
    name: "visionDefect",
    value: formState.visionDefect,
    label: "Vision Defect",
    required: true,
  },
];

export const defaultTubeState: TestTube = {
  id: "",
  age: 0,
  company: "",
  district: "",
  visionDefect: "",
};

export const exampleTubes: TestTube[] = [
  {
    id: "1",
    age: 20,
    company: "Company A",
    district: "District 1",
    visionDefect: "Red",
  },
  {
    id: "2",
    age: 20,
    company: "Company B",
    district: "District 2",
    visionDefect: "Green",
  },
  {
    id: "3",
    age: 30,
    company: "Company B",
    district: "District 3",
    visionDefect: "Red",
  },
  {
    id: "4",
    age: 30,
    company: "Company D",
    district: "District 4",
    visionDefect: "Yellow",
  },
  {
    id: "5",
    age: 40,
    company: "Company E",
    district: "District 5",
    visionDefect: "Purple",
  },
  {
    id: "6",
    age: 20,
    company: "Company F",
    district: "District 6",
    visionDefect: "Yellow",
  },
  {
    id: "7",
    age: 50,
    company: "Company F",
    district: "District 7",
    visionDefect: "Black",
  },
  {
    id: "8",
    age: 20,
    company: "Company H",
    district: "District 8",
    visionDefect: "White",
  },
  {
    id: "9",
    age: 20,
    company: "Company I",
    district: "District 9",
    visionDefect: "Black",
  },
  {
    id: "10",
    age: 60,
    company: "Company H",
    district: "District 10",
    visionDefect: "White",
  },
];
