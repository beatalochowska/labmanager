import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SampleSorter from "./SampleSorter";

describe("SampleSorter", () => {
  test("renders form and allows adding test tubes", () => {
    render(<SampleSorter />);
    const idInput = screen.getByLabelText(/ID/);
    const ageInput = screen.getByLabelText(/Age/);
    const companyInput = screen.getByLabelText(/Company/);
    const districtInput = screen.getByLabelText(/District/);
    const visionInput = screen.getByLabelText(/Vision Defect/);
    const addButton = screen.getByText(/Add Test Tube/);

    // Simulate adding a test tube
    fireEvent.change(idInput, { target: { value: "tube1" } });
    fireEvent.change(ageInput, { target: { value: "25" } });
    fireEvent.change(companyInput, { target: { value: "CompanyA" } });
    fireEvent.change(districtInput, { target: { value: "District1" } });
    fireEvent.change(visionInput, { target: { value: "Red" } });
    fireEvent.click(addButton);
    expect(screen.getByText(/Available tubes/)).toBeInTheDocument();
    expect(screen.getByText(/tube1/)).toBeInTheDocument();
    expect(screen.getByText(/25/)).toBeInTheDocument();
    expect(screen.getByText(/CompanyA/)).toBeInTheDocument();
    expect(screen.getByText(/District1/)).toBeInTheDocument();
    expect(screen.getByText(/Red/)).toBeInTheDocument();
  });

  test("displays sorted racks after clicking Sort Test Tubes", () => {
    render(<SampleSorter />);
    const addButton = screen.getByText(/Add Test Tube/);
    const sortButton = screen.getByText(/Sort Test Tubes/);

    const addTestTube = (
      id: string,
      age: string,
      company: string,
      district: string,
      vision: string
    ) => {
      fireEvent.change(screen.getByLabelText(/ID/), {
        target: { value: id },
      });
      fireEvent.change(screen.getByLabelText(/Age/), {
        target: { value: age },
      });
      fireEvent.change(screen.getByLabelText(/Company/), {
        target: { value: company },
      });
      fireEvent.change(screen.getByLabelText(/District/), {
        target: { value: district },
      });
      fireEvent.change(screen.getByLabelText(/Vision Defect/), {
        target: { value: vision },
      });
      fireEvent.click(addButton);
    };

    addTestTube("tube1", "25", "CompanyA", "District1", "Red");

    fireEvent.click(sortButton);

    expect(screen.getByText(/Rack 1/)).toBeInTheDocument();
    expect(screen.getAllByText(/tube1/)).toHaveLength(2);
    expect(screen.getAllByText(/25/)).toHaveLength(2);
    expect(screen.getAllByText(/CompanyA/)).toHaveLength(2);
    expect(screen.getAllByText(/District1/)).toHaveLength(2);
    expect(screen.getAllByText(/Red/)).toHaveLength(2);
  });
});
