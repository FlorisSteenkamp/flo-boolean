import { PathState } from '../path-state.js';


/**
 * @hidden
 * T and t: (from www.w3.org) 
 *
 * params: x y
 * 
 * Draws a quadratic Bézier curve from the current point to (x,y). The control 
 * point is assumed to be the reflection of the control point on the previous 
 * command relative to the current point. (If there is no previous command or if 
 * the previous command was not a Q, q, T or t, assume the control point is 
 * coincident with the current point.) T (uppercase) indicates that absolute 
 * coordinates will follow; t (lowercase) indicates that relative coordinates 
 * will follow. At the end of the command, the new current point becomes the 
 * final (x,y) coordinate pair used in the polybézier.
 */
function t(s: PathState): number[][] {
    const p = s.prev2ndQuadraticControlPoint
        ? [(s.p[0] - s.prev2ndQuadraticControlPoint[0]) + s.p[0], 
           (s.p[1] - s.prev2ndQuadraticControlPoint[1]) + s.p[1]]
        : s.p;

    const QP1 = p;
    const QP2 = [s.vals![0], s.vals![1]];
    
    s.prev2ndCubicControlPoint = undefined;
    s.prev2ndQuadraticControlPoint = QP1;

    return [s.p, QP1, QP2];
}


export { t }
