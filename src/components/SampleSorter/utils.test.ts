import { TestTube } from "../TestTubeForm/types";
import { assignToRacks } from "./utils";


describe('assignToRacks', () => {
    const sampleTestTubes: TestTube[] = [
        { id: 'tube1', age: 25, company: 'CompanyA', district: 'District1', visionDefect: 'Nearsighted' },
        { id: 'tube2', age: 30, company: 'CompanyB', district: 'District2', visionDefect: 'Farsighted' },
        { id: 'tube3', age: 35, company: 'CompanyA', district: 'District3', visionDefect: 'Astigmatism' }
    ];

    test('sorts test tubes into racks without constraint violations', () => {
        const racks = assignToRacks(sampleTestTubes, 2);
        expect(racks.length).toBeGreaterThan(0);
        racks.forEach(rack => {
            const ages = new Set();
            const companies = new Set();
            const districts = new Set();
            const visionDefects = new Set();
            rack.testTubes.forEach(tube => {
                expect(ages.has(tube.age)).toBe(false);
                expect(companies.has(tube.company)).toBe(false);
                expect(districts.has(tube.district)).toBe(false);
                expect(visionDefects.has(tube.visionDefect)).toBe(false);
                
                ages.add(tube.age);
                companies.add(tube.company);
                districts.add(tube.district);
                visionDefects.add(tube.visionDefect);
            });
        });
    });

    test('throws an error if there are not enough racks', () => {
        expect(() => assignToRacks(sampleTestTubes, 1)).toThrow('Insufficient racks to satisfy constraints');
    });
});