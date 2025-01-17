import { PathState } from '../path-state.js';


/** 
 * @hidden
 * Z and z: (from www.w3.org) 
 * 
 * params: (none)
 * 
 * Close the current subpath by drawing a straight line from the current point 
 * to current subpath's initial point. Since the Z and z commands take no 
 * parameters, they have an identical effect.
 */
function z(s: PathState): number[][] {
    const ps = [
        s.p,
        s.initialPoint!
    ];

    s.prev2ndCubicControlPoint = undefined;
    s.prev2ndQuadraticControlPoint = undefined;

    return ps;
}


export { z }
