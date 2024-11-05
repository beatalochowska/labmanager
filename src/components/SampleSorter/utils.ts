import { Rack } from "../RackDisplay/types";
import { TestTube } from "../TestTubeForm/types";

export function canAddToRack(rack: Rack, testTube: TestTube): boolean {
    for (const tube of rack.testTubes) {
        if (tube.age === testTube.age || 
            tube.company === testTube.company || 
            tube.district === testTube.district || 
            tube.visionDefect === testTube.visionDefect) {
            return false;
        }
    }
    return true;
}

export function assignToRacks(testTubes: TestTube[], numRacks: number): Rack[] {
    const racks: Rack[] = Array.from({ length: numRacks }, (_, i) => ({ id: i + 1, testTubes: [] }));

    for (const testTube of testTubes) {
        let placed = false;
        for (const rack of racks) {
            if (canAddToRack(rack, testTube)) {
                rack.testTubes.push(testTube);
                placed = true;
                break;
            }
        }
        if (!placed) throw new Error("Insufficient racks to satisfy constraints.");
    }

    return racks;
}