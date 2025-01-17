import { getMinY } from "../loop/get-min-y.js";
import { makeSimpleX } from "./make-simple-x.js";
/**
 * Get an extreme point (point with minimum y value) of the given loop.
 * @param loop
 */
function getExtreme(loop) {
    const { curve, y } = getMinY(loop);
    const ts = y.ts;
    if (ts[0] <= 0) {
        return [
            makeSimpleX(0, curve, 0),
            makeSimpleX(1, curve.prev, 0) // extreme
        ];
    }
    if (ts[1] >= 1) {
        return [
            makeSimpleX(1, curve, 0),
            makeSimpleX(0, curve.next, 0) // extreme
        ];
    }
    return [
        // TODO - should multiplicity be undefined in these cases?
        // TODO - do we need 2 intersections???
        {
            x: {
                ri: { tS: ts[0], tE: ts[1], multiplicity: 1 },
                kind: 0,
                box: y.box
            },
            curve
        },
        {
            x: {
                ri: { tS: ts[0], tE: ts[1], multiplicity: 1 },
                kind: 0,
                box: y.box
            },
            curve
        } // extreme
    ];
}
export { getExtreme };
//# sourceMappingURL=get-extreme.js.map