/** @hidden */
class PathState {
    constructor() {
        this.initialPoint = undefined;
        this.vals = undefined;
        // Used in conjunction with "S", "s"
        this.prev2ndCubicControlPoint = undefined;
        // Used in conjunction with "T", "t"
        this.prev2ndQuadraticControlPoint = undefined;
        this.p = [0, 0];
    }
}
export { PathState };
//# sourceMappingURL=path-state.js.map