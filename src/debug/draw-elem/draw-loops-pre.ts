import { drawLoopPre } from "./draw-loop-pre.js";


function drawLoopsPre(
        g: SVGGElement, 
        loops: number[][][][]): SVGElement[] {

    const $svgs = [];

    for (let loop of loops) {
        $svgs.push(...drawLoopPre(g, loop));
    } 

    return $svgs;
}


export { drawLoopsPre }