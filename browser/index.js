/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Rf: () => (/* reexport */ areBoxesIntersectingDd),
  A3: () => (/* reexport */ beziersToSvgPathStr),
  X7: () => (/* reexport */ doConvexPolygonsIntersect),
  At: () => (/* reexport */ enableDebugForBooleanOp),
  Q8: () => (/* reexport */ getIntersections),
  QP: () => (/* reexport */ getLoopArea),
  C2: () => (/* reexport */ getLoopCentroid),
  Jt: () => (/* reexport */ getPathsFromStr),
  bQ: () => (/* reexport */ loopFromBeziers),
  FU: () => (/* reexport */ simplifyPaths),
  Dw: () => (/* reexport */ sweepLine)
});

;// CONCATENATED MODULE: ./node_modules/flo-vector2d/node/distance-and-length/squared-distance-between.js
/**
 * Returns the squared distance between two 2d points.
 * @param p a point
 * @param q another point
 */
function squared_distance_between_squaredDistanceBetween(p, q) {
    const x = q[0] - p[0];
    const y = q[1] - p[1];
    return x * x + y * y;
}

//# sourceMappingURL=squared-distance-between.js.map
;// CONCATENATED MODULE: ./node_modules/flo-vector2d/node/affine-transformations/linear/rotate.js
function rotate(sinθ, cosθ, p) {
    function rotateByθ(p) {
        return [
            p[0] * cosθ - p[1] * sinθ,
            p[0] * sinθ + p[1] * cosθ
        ];
    }
    // Curry the function
    return p === undefined ? rotateByθ : rotateByθ(p);
}

//# sourceMappingURL=rotate.js.map
;// CONCATENATED MODULE: ./node_modules/flo-vector2d/node/affine-transformations/translate/translate.js
// From: https://en.wikipedia.org/wiki/Affine_transformation
// "If X is the point set of an affine space, then every affine transformation 
// on X can be represented as the composition of a linear transformation on X 
// and a translation of X"
function translate(a, b) {
    function f(b) {
        return [a[0] + b[0], a[1] + b[1]];
    }
    // Curry the function
    return b === undefined ? f : f(b);
}

//# sourceMappingURL=translate.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-estimate.js
/**
 * Returns the result of the given floating point expansion rounded to a double
 * floating point number.
 *
 * The result is within 1 ulps of the actual value, e.g. imagine the worst case
 * situation where we add (in 4dot4) 1111.1000 + 0.000011111111... The result
 * will be 1111.1000 whereas as the correct result should be 1111.1001 and we
 * thus lost 1 ulp of accuracy. It does not matter that the expansion contain
 * several floats since none is overlapping.
 *
 * See Shewchuk https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 *
 * @param e a floating point expansion
 */
function eEstimate(e) {
    let Q = e[0];
    for (let i = 1; i < e.length; i++) {
        Q += e[i];
    }
    return Q;
}

//# sourceMappingURL=e-estimate.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-sign.js
/**
 * Returns the sign of the given expansion.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * From Shewchuk: "A nonoverlapping expansion is desirable because it is easy to
 * determine its sign (take the sign of the largest component) ... "
 *
 * @param e A floating point expansion with zeroes eliminated.
 */
function e_sign_eSign(e) {
    return e[e.length - 1];
}

//# sourceMappingURL=e-sign.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/error-analysis/gamma.js
const u = Number.EPSILON / 2;
const uu = u * u;
/**
 * The canonical floating point error function, γ.
 *
 * * roughly `=== n * (Number.EPSILON / 2)`
 * * see e.g. [Algorithms for Accurate, Validated and Fast Polynomial Evaluation](https://hal.archives-ouvertes.fr/hal-00285603/document)
 * @param n the parameter - typically a small positive integer, e.g. for
 * polynomial evaluation this === 2*d + 1, where d is the degree of the
 * polynomial
 *
 * @doc
 */
function γ(n) {
    const nu = n * u;
    return nu / (1 - nu);
}
/**
 * The canonical, once compensated (implying double-double precision),
 * floating point error function.
 *
 * * roughly `=== n * (Number.EPSILON / 2)**2`
 * * see e.g. [Algorithms for Accurate, Validated and Fast Polynomial Evaluation](https://hal.archives-ouvertes.fr/hal-00285603/document)
 * @param n the parameter - typically a small positive integer, e.g. for
 * polynomial evaluation this === 2*d + 1, where d is the degree of the
 * polynomial
 *
 * @doc
 */
function γγ(n) {
    const nuu = n * uu;
    return nuu / (1 - nuu);
}

//# sourceMappingURL=gamma.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/binary/dd-diff-dd.js
/**
 * Returns the result of subtracting the second given double-double-precision
 * floating point number from the first.
 *
 * * relative error bound: 3u^2 + 13u^3, i.e. fl(a-b) = (a-b)(1+ϵ),
 * where ϵ <= 3u^2 + 13u^3, u = 0.5 * Number.EPSILON
 * * the error bound is not sharp - the worst case that could be found by the
 * authors were 2.25u^2
 *
 * ALGORITHM 6 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param x a double-double precision floating point number
 * @param y another double-double precision floating point number
 */
function ddDiffDd(x, y) {
    const xl = x[0];
    const xh = x[1];
    const yl = y[0];
    const yh = y[1];
    //const [sl,sh] = twoSum(xh,yh);
    const sh = xh - yh;
    const _1 = sh - xh;
    const sl = (xh - (sh - _1)) + (-yh - _1);
    //const [tl,th] = twoSum(xl,yl);
    const th = xl - yl;
    const _2 = th - xl;
    const tl = (xl - (th - _2)) + (-yl - _2);
    const c = sl + th;
    //const [vl,vh] = fastTwoSum(sh,c)
    const vh = sh + c;
    const vl = c - (vh - sh);
    const w = tl + vl;
    //const [zl,zh] = fastTwoSum(vh,w)
    const zh = vh + w;
    const zl = w - (zh - vh);
    return [zl, zh];
}

//# sourceMappingURL=dd-diff-dd.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/binary/dd-min.js

// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗
/** @internal */
const diff = ddDiffDd;
/**
 * Returns the minimum of a and b.
 * @param a a double-double precision floating point number
 * @param b another double-double precision floating point number
 */
function ddMin(a, b) {
    const res = diff(a, b)[1];
    return res > 0 ? b : a;
}

//# sourceMappingURL=dd-min.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/binary/dd-max.js

// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗
/** @internal */
const dd_max_diff = ddDiffDd;
/**
 * Returns the maximum of a and b.
 * @param a a double-double precision floating point number
 * @param b another double-double precision floating point number
 */
function ddMax(a, b) {
    const res = dd_max_diff(a, b)[1];
    return res > 0 ? a : b;
}

//# sourceMappingURL=dd-max.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/unary/dd-sqrt.js
/** @internal */
const f = 134217729; // 2**27 + 1;
// Taken from https://github.com/munrocket/double.js/blob/master/src/double.ts
// Unfortunately no error bound given
/**
 * Returns the square root of a double-double as a double-double.
 * * no error bound is returned
 *
 * @param x a double-double precision floating point number
 */
// TODO - calculate an error bound and add to function description
function ddSqrt(x) {
    const xl = x[0];
    const xh = x[1];
    if (xh === 0) {
        return [0, 0];
    }
    const s = Math.sqrt(xh);
    //const [tl,th] = twoSquare(s);
    const th = s * s;
    const c = f * s;
    const ah = c - (c - s);
    const al = s - ah;
    const tl = (al * al) - ((th - (ah * ah)) - 2 * (ah * al));
    const e = (xh - th - tl + xl) * 0.5 / s;
    return [e - ((s + e) - s), s + e];
}

//# sourceMappingURL=dd-sqrt.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-mixed-double-double/double-sqrt.js
/** @internal */
const double_sqrt_f = 134217729; // 2**27 + 1;
// Taken from https://github.com/munrocket/double.js/blob/master/src/double.ts
// Unfortunately no error bound given
/**
 * Returns the square root of a double as a double-double.
 * * no error bound is returned
 */
// TODO - calculate an error bound and add to function description
function doubleSqrt(x) {
    if (x === 0) {
        return [0, 0];
    }
    const s = Math.sqrt(x);
    //const [tl,th] = twoSquare(s);
    const th = s * s;
    const c = double_sqrt_f * s;
    const ah = c - (c - s);
    const al = s - ah;
    const tl = (al * al) - ((th - (ah * ah)) - 2 * (ah * al));
    const e = (x - th - tl) * 0.5 / s;
    x = s + e;
    const xl = e - (x - s);
    return [xl, x];
}

//# sourceMappingURL=double-sqrt.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-with-err/sqrt-with-err.js
/** @internal */
const eps = Number.EPSILON;
/**
 * Returns the result of the square root of a double floating point number
 * together with an absolute error bound where x_ is an absolute error
 * bound on the input value.
 * * see also "A Reduced Product of Absolute and Relative Error Bounds for Floating-point Analysis"
 * by Maxime Jacquemin, Sylvie Putot, and Franck Vedrine
 * @param x numerator
 * @param x_ absolute value error bound in numerator
 */
function sqrtWithErr(x, x_) {
    // Note: it is assumed x + x_ >= 0, else the error in x_ was wrong in the
    // first place (since we can't have a negative input to the square root)
    // estimate the result of the square root
    if (x - x_ <= 0) {
        const est = x > 0 ? Math.sqrt(x) : 0;
        return {
            est,
            err: Math.max(Math.sqrt(x + x_) - est, est)
        };
    }
    const est = Math.sqrt(x);
    const minSqrt = Math.sqrt(x - x_);
    const maxSqrt = Math.sqrt(x + x_);
    const err = Math.max(Math.abs(minSqrt - est), Math.abs(maxSqrt - est));
    //err += eps*abs(est + err);
    //err = eps*abs(est + err);
    // approx relative input error
    //const rel = x_/abs(x);
    // propogated error bound
    //const err = est*(Math.sqrt(1 + rel) - 1) + u*abs(est);
    return { est, err };
}

//# sourceMappingURL=sqrt-with-err.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/unary/dd-abs.js
/**
 * Returns the absolute value of the given double-double precision floating
 * point number.
 * @param f a double-double precision floating point number
 */
function ddAbs(f) {
    const Q = f[1];
    return (Q < 0) ? [-f[0], -Q] : f;
}

//# sourceMappingURL=dd-abs.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-mixed-double-double/dd-add-double.js
/**
 * Returns the result of adding a double to a double-double precision floating
 * point number.
 *
 * * relative error bound: 2u^2, i.e. fl(a+b) = (a+b)(1+ϵ),
 * where ϵ <= 2u^2, u = 0.5 * Number.EPSILON
 * * the error bound is sharp
 *
 * ALGORITHM 4 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param x a double-double precision floating point number
 * @param y a double precision floating point number
 */
function ddAddDouble(x, y) {
    const xl = x[0];
    const xh = x[1];
    //const [sl,sh] = twoSum(xh, y);
    const sh = xh + y;
    const c = sh - xh;
    const sl = (xh - (sh - c)) + (y - c);
    const v = xl + sl;
    //const [zl,zh] = fastTwoSum(sh,v);
    const zh = sh + v;
    const zl = v - (zh - sh);
    return [zl, zh];
}

//# sourceMappingURL=dd-add-double.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/binary/dd-add-dd.js
/**
 * Returns the result of adding two double-double-precision floating point
 * numbers.
 *
 * * relative error bound: 3u^2 + 13u^3, i.e. fl(a+b) = (a+b)(1+ϵ),
 * where ϵ <= 3u^2 + 13u^3, u = 0.5 * Number.EPSILON
 * * the error bound is not sharp - the worst case that could be found by the
 * authors were 2.25u^2
 *
 * ALGORITHM 6 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param x a double-double precision floating point number
 * @param y another double-double precision floating point number
 */
function ddAddDd(x, y) {
    const xl = x[0];
    const xh = x[1];
    const yl = y[0];
    const yh = y[1];
    //const [sl,sh] = twoSum(xh,yh);
    const sh = xh + yh;
    const _1 = sh - xh;
    const sl = (xh - (sh - _1)) + (yh - _1);
    //const [tl,th] = twoSum(xl,yl);
    const th = xl + yl;
    const _2 = th - xl;
    const tl = (xl - (th - _2)) + (yl - _2);
    const c = sl + th;
    //const [vl,vh] = fastTwoSum(sh,c)
    const vh = sh + c;
    const vl = c - (vh - sh);
    const w = tl + vl;
    //const [zl,zh] = fastTwoSum(vh,w)
    const zh = vh + w;
    const zl = w - (zh - vh);
    return [zl, zh];
}

//# sourceMappingURL=dd-add-dd.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/binary/dd-mult-dd.js
/** @internal */
const dd_mult_dd_f = 2 ** 27 + 1;
/**
 * Returns the product of two double-double-precision floating point numbers.
 *
 * * relative error bound: 7u^2, i.e. fl(a+b) = (a+b)(1+ϵ),
 * where ϵ <= 7u^2, u = 0.5 * Number.EPSILON
 * the error bound is not sharp - the worst case that could be found by the
 * authors were 5u^2
 *
 * * ALGORITHM 10 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param x a double-double precision floating point number
 * @param y another double-double precision floating point number
 */
function ddMultDd(x, y) {
    //const xl = x[0];
    const xh = x[1];
    //const yl = y[0];
    const yh = y[1];
    //const [cl1,ch] = twoProduct(xh,yh);
    const ch = xh * yh;
    const c = dd_mult_dd_f * xh;
    const ah = c - (c - xh);
    const al = xh - ah;
    const d = dd_mult_dd_f * yh;
    const bh = d - (d - yh);
    const bl = yh - bh;
    const cl1 = (al * bl) - ((ch - (ah * bh)) - (al * bh) - (ah * bl));
    //return fastTwoSum(ch,cl1 + (xh*yl + xl*yh));
    const b = cl1 + (xh * y[0] + x[0] * yh);
    const xx = ch + b;
    return [b - (xx - ch), xx];
}

//# sourceMappingURL=dd-mult-dd.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/multi/dd-product.js

/**
 * Returns the result of multiplying together an array of double-double-precision
 * floating point numbers naively (i.e. not using pairwise addition to reduce
 * error a bit).
 *
 * * an error bound is given by: (n-1)(1+ϵ),
 * where ϵ <= 7u^2, u = 0.5 * Number.EPSILON
 */
function ddProduct(qs) {
    let q = qs[0];
    for (let i = 1; i < qs.length; i++) {
        q = ddMultDd(q, qs[i]);
    }
    return q;
}

//# sourceMappingURL=dd-product.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/multi/dd-sum.js

/**
 * Returns the result of summing an array of double-double-precision floating
 * point numbers naively (i.e. not using pairwise addition to reduce error a bit).
 *
 * * an error bound is given by: (n-1)(1+ϵ),
 * where ϵ <= 3u^2 + 13u^3, u = 0.5 * Number.EPSILON
 */
function ddSum(qs) {
    let q = qs[0];
    for (let i = 1; i < qs.length; i++) {
        q = ddAddDd(q, qs[i]);
    }
    return q;
}

//# sourceMappingURL=dd-sum.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/binary/dd-compare.js
/**
 * Returns 0 if a === b, a +tive value if a > b or a negative value if a < b.
 *
 * @param x a double-double precision floating point number
 * @param y another double-double precision floating point number
 */
function ddCompare(x, y) {
    //return ddDiffDd(x,y)[1];
    const xl = x[0];
    const xh = x[1];
    const yl = y[0];
    const yh = y[1];
    //const [sl,sh] = twoSum(xh,yh);
    const sh = xh - yh;
    const _1 = sh - xh;
    const sl = (xh - (sh - _1)) + (-yh - _1);
    //const [tl,th] = twoSum(xl,yl);
    const th = xl - yl;
    const _2 = th - xl;
    const tl = (xl - (th - _2)) + (-yl - _2);
    const c = sl + th;
    //const [vl,vh] = fastTwoSum(sh,c)
    const vh = sh + c;
    const vl = c - (vh - sh);
    const w = tl + vl;
    //const [zl,zh] = fastTwoSum(vh,w)
    const zh = vh + w;
    return zh;
}

//# sourceMappingURL=dd-compare.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-mixed-double-double/dd-mult-double.js
/** @internal */
const dd_mult_double_f = 134217729; // 2**27 + 1;
/**
 * Returns the product of a double-double-precision floating point number and a
 * double.
 *
 * * slower than ALGORITHM 8 (one call to fastTwoSum more) but about 2x more
 * accurate
 * * relative error bound: 1.5u^2 + 4u^3, i.e. fl(a+b) = (a+b)(1+ϵ),
 * where ϵ <= 1.5u^2 + 4u^3, u = 0.5 * Number.EPSILON
 * * the bound is very sharp
 * * probably prefer `ddMultDouble2` due to extra speed
 *
 * * ALGORITHM 7 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param y a double
 * @param x a double-double precision floating point number
 */
function ddMultDouble1(y, x) {
    const xl = x[0];
    const xh = x[1];
    //const [cl1,ch] = twoProduct(xh,y);
    const ch = xh * y;
    const c = dd_mult_double_f * xh;
    const ah = c - (c - xh);
    const al = xh - ah;
    const d = dd_mult_double_f * y;
    const bh = d - (d - y);
    const bl = y - bh;
    const cl1 = (al * bl) - ((ch - (ah * bh)) - (al * bh) - (ah * bl));
    const cl2 = xl * y;
    //const [tl1,th] = fastTwoSum(ch,cl2);
    const th = ch + cl2;
    const tl1 = cl2 - (th - ch);
    const tl2 = tl1 + cl1;
    //const [zl,zh] = fastTwoSum(th,tl2);
    const zh = th + tl2;
    const zl = tl2 - (zh - th);
    return [zl, zh];
}
/**
 * Returns the product of a double-double-precision floating point number and a double.
 *
 * * faster than ALGORITHM 7 (one call to fastTwoSum less) but about 2x less
 * accurate
 * * relative error bound: 3u^2, i.e. fl(a*b) = (a*b)(1+ϵ),
 * where ϵ <= 3u^2, u = 0.5 * Number.EPSILON
 * * the bound is sharp
 * * probably prefer this algorithm due to extra speed
 *
 * * ALGORITHM 8 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param y a double
 * @param x a double-double precision floating point number
 */
function ddMultDouble2(y, x) {
    const xl = x[0];
    const xh = x[1];
    //const [cl1,ch] = twoProduct(xh,y);
    const ch = xh * y;
    const c = dd_mult_double_f * xh;
    const ah = c - (c - xh);
    const al = xh - ah;
    const d = dd_mult_double_f * y;
    const bh = d - (d - y);
    const bl = y - bh;
    const cl1 = (al * bl) - ((ch - (ah * bh)) - (al * bh) - (ah * bl));
    const cl2 = xl * y;
    const cl3 = cl1 + cl2;
    //return fastTwoSum(ch,cl3);
    const xx = ch + cl3;
    return [cl3 - (xx - ch), xx];
}

//# sourceMappingURL=dd-mult-double.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/unary/dd-mult-by-2.js
/**
 * Returns the result of multiplying the given double-double by 2.
 * * The result is exact
 * @param f a double-double precision floating point number
 */
function ddMultBy2(f) {
    return [2 * f[0], 2 * f[1]];
}

//# sourceMappingURL=dd-mult-by-2.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/unary/dd-mult-by-4.js
/**
 * Returns the result of multiplying the given double-double by 4.
 * * The result is exact
 * @param f a double-double precision floating point number
 */
function ddMultBy4(f) {
    return [4 * f[0], 4 * f[1]];
}

//# sourceMappingURL=dd-mult-by-4.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/unary/dd-div-by-2.js
/**
 * Returns the result of dividing the given double-double by 2.
 * @param f a double-double precision floating point number
 */
function ddDivBy2(f) {
    return [f[0] / 2, f[1] / 2];
}

//# sourceMappingURL=dd-div-by-2.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/unary/dd-mult-by-neg-2.js
/**
 * Returns the result of multiplying the given double-double by -2.
 * * The result is exact
 * @param f a double-double precision floating point number
 */
function ddMultByNeg2(f) {
    return [-2 * f[0], -2 * f[1]];
}

//# sourceMappingURL=dd-mult-by-neg-2.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/unary/dd-mult-by-neg-4.js
/**
 * Returns the result of multiplying the given double-double by -4.
 * * The result is exact
 * @param f a double-double precision floating point number
 */
function ddMultByNeg4(f) {
    return [-4 * f[0], -4 * f[1]];
}

//# sourceMappingURL=dd-mult-by-neg-4.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-mixed-double-double/dd-div-double.js
/** @internal */
const dd_div_double_f = 134217729; // 2**27 + 1;
/**
 * Returns the result of dividing a double-double-precision floating point
 * number by a double.
 *
 * * relative error bound: 3u^2, i.e. fl(a/b) = (a/b)(1+ϵ), where ϵ <= 3u^2,
 * u = 0.5 * Number.EPSILON
 * * the bound is very sharp
 *
 * * ALGORITHM 15 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param x a double-double precision floating point number
 * @param y the double-precision divisor
 */
function ddDivDouble(x, y) {
    const xl = x[0];
    const xh = x[1];
    const th = xh / y;
    //const [πl,πh] = twoProduct(th,y);
    const πh = th * y;
    const c = dd_div_double_f * th;
    const ah = c - (c - th);
    const al = th - ah;
    const d = dd_div_double_f * y;
    const bh = d - (d - y);
    const bl = y - bh;
    const πl = (al * bl) - ((πh - (ah * bh)) - (al * bh) - (ah * bl));
    const δh = xh - πh; // exact operation
    const δt = δh - πl; // exact operation
    const δ = δt + xl;
    const tl = δ / y;
    //return fastTwoSum(th,tl);
    const rl = th + tl;
    return [tl - (rl - th), rl];
}

//# sourceMappingURL=dd-div-double.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/binary/dd-div-dd.js
/** @internal */
const dd_div_dd_f = 134217729; // 2**27 + 1;
/**
 * Returns the result of dividing two double-double-precision floating point
 * numbers, i.e. returns x/y.
 *
 * * relative error bound: 15u^2 + 56u^3, i.e. fl(a/b) = (a/b)(1+ϵ),
 * where ϵ <= 15u^2 + 56u^3, u = 0.5 * Number.EPSILON
 * * the largest error found was 8.465u^2
 *
 * * ALGORITHM 17 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param x a double-double precision floating point number
 * @param y another double-double precision floating point number
 */
function ddDivDd(x, y) {
    const xl = x[0];
    const xh = x[1];
    const yl = y[0];
    const yh = y[1];
    const th = xh / yh;
    // approximation to th*(yh + yl) using Algorithm 7
    //const [rl,rh] = ddMultDouble1(th,[yl,yh]);  
    const ch = yh * th;
    const c = dd_div_dd_f * yh;
    const ah = c - (c - yh);
    const al = yh - ah;
    const d = dd_div_dd_f * th;
    const bh = d - (d - th);
    const bl = th - bh;
    const cl1 = (al * bl) - ((ch - (ah * bh)) - (al * bh) - (ah * bl));
    const cl2 = yl * th;
    const th_ = ch + cl2;
    const tl1 = cl2 - (th_ - ch);
    const tl2 = tl1 + cl1;
    const rh = th_ + tl2;
    const rl = tl2 - (rh - th_);
    const πh = xh - rh; // exact operation
    const δl = xl - rl;
    const δ = πh + δl;
    const tl = δ / yh;
    //return fastTwoSum(th,tl);
    const xx = th + tl;
    return [tl - (xx - th), xx];
}

//# sourceMappingURL=dd-div-dd.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/unary/dd-negative-of.js
/**
 * Returns the negative of the given double-double precision floating point
 * number.
 * * the result is exact
 * @param f a double-double precision floating point number
 */
function ddNegativeOf(f) {
    return [-f[0], -f[1]];
}

//# sourceMappingURL=dd-negative-of.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/unary/dd-sign.js
/**
 * Returns the sign of the given double-double-precision floating point number.
 * * a positive or negative double or zero is returned - not necessarily +1, 0
 * or -1
 * * prefer inlining this - it is really only here for reference
 */
function ddSign(f) {
    return f[1];
}

//# sourceMappingURL=dd-sign.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/basic/fast-two-diff.js
/**
 * Returns the difference and exact error of subtracting two floating point
 * numbers.
 * Uses an EFT (error-free transformation), i.e. `a-b === x+y` exactly.
 * The returned result is a non-overlapping expansion (smallest value first!).
 *
 * * **precondition:** `abs(a) >= abs(b)` - A fast test that can be used is
 * `(a > b) === (a > -b)`
 *
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 */
function fastTwoDiff(a, b) {
    const x = a - b;
    const y = (a - x) - b;
    return [y, x];
}

//# sourceMappingURL=fast-two-diff.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/basic/fast-two-sum.js
/**
 * Returns the sum and exact error of adding two floating point numbers.
 * Uses an EFT (error-free transformation), i.e. a+b === x+y exactly.
 * The returned sum is a non-overlapping expansion (smallest value first!).
 *
 * Precondition: abs(a) >= abs(b) - A fast test that can be used is
 * (a > b) === (a > -b)
 *
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 */
function fast_two_sum_fastTwoSum(a, b) {
    const x = a + b;
    return [b - (x - a), x];
}
// inlined
//const R = a + b; const r = b - (R - a); return [r, R];

//# sourceMappingURL=fast-two-sum.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/basic/split.js
/**
 * === 2^Math.ceil(p/2) + 1 where p is the # of significand bits in a double === 53.
 * @internal
 */
const split_f = 134217729; // 2**27 + 1;
/**
 * Returns the result of splitting a double into 2 26-bit doubles.
 *
 * Theorem 17 (Veltkamp-Dekker): Let a be a p-bit floating-point number, where
 * p >= 3. Choose a splitting point s such that p/2 <= s <= p-1. Then the
 * following algorithm will produce a (p-s)-bit value a_hi and a
 * nonoverlapping (s-1)-bit value a_lo such that abs(a_hi) >= abs(a_lo) and
 * a = a_hi + a_lo.
 *
 * see e.g. [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 * @param a A double floating point number
 */
function split(a) {
    const c = split_f * a;
    const a_h = c - (c - a);
    const a_l = a - a_h;
    return [a_h, a_l];
}
// inlined - input a, output a_h, a_l
// const c = f * a; const a_h = c - (c - a); const a_l = a - a_h; return [a_h, a_l];

//# sourceMappingURL=split.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/basic/two-diff.js
/**
 * Returns the exact result of subtracting b from a.
 *
 * @param a minuend - a double-double precision floating point number
 * @param b subtrahend - a double-double precision floating point number
 */
function twoDiff(a, b) {
    const x = a - b;
    const bvirt = a - x;
    const y = (a - (x + bvirt)) + (bvirt - b);
    return [y, x];
}

//# sourceMappingURL=two-diff.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/basic/two-product.js
/** @internal */
const two_product_f = 134217729; // 2**27 + 1;
/**
 * Returns the exact result of multiplying two doubles.
 *
 * * the resulting array is the reverse of the standard twoSum in the literature.
 *
 * Theorem 18 (Shewchuk): Let a and b be p-bit floating-point numbers, where
 * p >= 6. Then the following algorithm will produce a nonoverlapping expansion
 * x + y such that ab = x + y, where x is an approximation to ab and y
 * represents the roundoff error in the calculation of x. Furthermore, if
 * round-to-even tiebreaking is used, x and y are non-adjacent.
 *
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 * @param a A double
 * @param b Another double
 */
function two_product_twoProduct(a, b) {
    const x = a * b;
    //const [ah, al] = split(a);
    const c = two_product_f * a;
    const ah = c - (c - a);
    const al = a - ah;
    //const [bh, bl] = split(b);
    const d = two_product_f * b;
    const bh = d - (d - b);
    const bl = b - bh;
    const y = (al * bl) - ((x - (ah * bh)) - (al * bh) - (ah * bl));
    //const err1 = x - (ah * bh);
    //const err2 = err1 - (al * bh);
    //const err3 = err2 - (ah * bl);
    //const y = (al * bl) - err3;
    return [y, x];
}

//# sourceMappingURL=two-product.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-mixed-double-double/double-div-double.js
/** @internal */
const double_div_double_f = 134217729; // 2**27 + 1;
/**
 * Returns the result of dividing a double-precision floating point
 * number by a double with the result given as a double-double.
 * This is a slight modification of ddDivDd.
 *
 * * **!! NOT an error-free transformation !!**
 * * relative error bound: 3u^2, i.e. fl(a/b) = (a/b)(1+ϵ), where ϵ <= 3u^2,
 * u = 0.5 * Number.EPSILON
 *
 * * ALGORITHM 15 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * (slightly modified)
 * @param x dividend
 * @param y divisor
 */
function doubleDivDouble(x, y) {
    const th = x / y;
    //const [πl,πh] = twoProduct(th,y);
    const πh = th * y;
    const c = double_div_double_f * th;
    const ah = c - (c - th);
    const al = th - ah;
    const d = double_div_double_f * y;
    const bh = d - (d - y);
    const bl = y - bh;
    const πl = (al * bl) - ((πh - (ah * bh)) - (al * bh) - (ah * bl));
    const δh = x - πh; // exact operation
    const δt = δh - πl; // exact operation
    const tl = δt / y;
    //return fastTwoSum(th,tl);
    const xx = th + tl;
    return [tl - (xx - th), xx];
}

//# sourceMappingURL=double-div-double.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/basic/two-sum.js
/**
 * Returns the exact result of adding two doubles.
 *
 * * the resulting array is the reverse of the standard twoSum in the literature.
 *
 * Theorem 7 (Knuth): Let a and b be p-bit floating-point numbers. Then the
 * following algorithm will produce a nonoverlapping expansion x + y such that
 * a + b = x + y, where x is an approximation to a + b and y is the roundoff
 * error in the calculation of x.
 *
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 */
function two_sum_twoSum(a, b) {
    const x = a + b;
    const bv = x - a;
    return [(a - (x - bv)) + (b - bv), x];
}
// inlined
//const R = a + b; const _ = R - a; const r = (a - (R - _)) + (b - _); return [r,R]

//# sourceMappingURL=two-sum.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/basic/reduce-significand.js
/**
 * Truncates a floating point value's significand and returns the result.
 * Similar to split, but with the ability to specify the number of bits to keep.
 *
 * **Theorem 17 (Veltkamp-Dekker)**: Let a be a p-bit floating-point number, where
 * p >= 3. Choose a splitting point s such that p/2 <= s <= p-1. Then the
 * following algorithm will produce a (p-s)-bit value a_hi and a
 * nonoverlapping (s-1)-bit value a_lo such that abs(a_hi) >= abs(a_lo) and
 * a = a_hi + a_lo.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param a a double
 * @param bits the number of significand bits to leave intact
 */
function reduceSignificand(a, bits) {
    const s = 53 - bits;
    const f = 2 ** s + 1;
    const c = f * a;
    const r = c - (c - a);
    return r;
}

//# sourceMappingURL=reduce-significand.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-representation/double-to-octets.js
// Modified from https://github.com/bartaz/ieee754-visualization/
// under the MIT license
// Copyright 2013 Bartek Szopka (original author)
/**
 * Returns the ieee-574 8 bytes composing the given double, starting from the
 * sign bit and ending in the lsb of the significand.
 * e.g. 123.456 -> [64, 94, 221, 47, 26, 159, 190, 119]
 * @internal
 */
function doubleToOctets(number) {
    const buffer = new ArrayBuffer(8);
    new DataView(buffer).setFloat64(0, number, false);
    return Array.from(new Uint8Array(buffer));
}

//# sourceMappingURL=double-to-octets.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-representation/double-to-binary-string.js
// Modified from https://github.com/bartaz/ieee754-visualization/
// under the MIT license
// Copyright 2013 Bartek Szopka (original author)

/** @internal */
function doubleToBinaryString(number) {
    return octetsToBinaryString(doubleToOctets(number));
}
/**
 * @param octets The 8 bytes composing a double (msb first)
 * @internal
 */
function octetsToBinaryString(octets) {
    return octets
        .map(int8ToBinaryString)
        .join('');
}
/**
 * intToBinaryString(8) -> "00001000"
 * @internal
 */
function int8ToBinaryString(i) {
    let iStr = i.toString(2);
    for (; iStr.length < 8; iStr = "0" + iStr)
        ;
    return iStr;
}

//# sourceMappingURL=double-to-binary-string.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-representation/parse-double.js
// Modified from https://github.com/bartaz/ieee754-visualization/
// under the MIT license
// Copyright 2013 Bartek Szopka (original author)


/**
 * Returns the relevant parts of the given IEEE-754 double. The returned
 * exponent has been normalized (i.e. 1023 ha been subtracted) and the
 * significand has the hidden bit added if appropriate.
 * See https://github.com/bartaz/ieee754-visualization
 */
function parseDouble(x) {
    const parts = doubleToOctets(x);
    const p0 = parts[0];
    const p1 = parts[1];
    const sign = p0 >> 7;
    const exponent_ = ((p0 & 127) << 4) + ((p1 & 0b11110000) >> 4);
    //---- Check for negative / positive zero / denormalized numbers.
    const hiddenMsb = exponent_ === 0 ? 0 : 16;
    // Note: exponent === 0 => 0 or denormalized number (a.k.a. subnormal number).
    const exponent = exponent_ === 0
        ? exponent_ - 1022 // Subnormals use a biased exponent of 1 (not 0!)
        : exponent_ - 1023;
    //---- Break up the significand into bytes
    const significand = parts.slice(1);
    significand[0] = (p1 & 15) + hiddenMsb;
    return {
        sign,
        exponent,
        significand
    };
}
/**
 * Returns the relevant parts of the given IEEE-754 double.
 * See https://github.com/bartaz/ieee754-visualization.
 * This is a slower version of parseDouble that gives binary string
 * representations of the components.
 */
function parseDoubleDetailed(x) {
    const str = doubleToBinaryString(x);
    // sign{1} exponent{11} fraction{52} === 64 bits (+1 hidden!)
    const [, sign, exponent, significand] = str.match(/^(.)(.{11})(.{52})$/);
    const exponent_ = parseInt(exponent, 2);
    const hidden = exponent_ === 0 ? "0" : "1";
    return {
        full: sign + exponent + hidden + significand,
        sign,
        exponent,
        hidden,
        significand
    };
}

//# sourceMappingURL=parse-double.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-representation/significand.js

/**
 * Return the significand of the given double with the hidden bit added (in case
 * a is not subnormal or 0, etc.)
 *
 * @param a A double
 */
function significand(a) {
    return parseDouble(a).significand;
}

//# sourceMappingURL=significand.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-representation/get-max-set-bit.js

/**
 * Returns the lowest set bit of the given value in [1, (2**31)-1],
 * i.e. from 1 up to 2147483647 else if no bit is set (input === 0) returns
 * NaN, otherwise if the number is out of range returns a non-finite
 * number.
 * See https://stackoverflow.com/a/35190288/2010061
 * @internal
 */
function getLowestSetBit_(a) {
    return Math.log2(a & -a);
}
/**
 * Returns the lowest set bit of the given number's significand (where the lsb
 * is bit 0 and the msb is bit 52). If no bit is set (input === 0 or +-inf or
 * NaN) returns NaN.
 * See https://stackoverflow.com/a/35190288/2010061
 */
function getLowestSetBit(a) {
    if (a === 0 || !Number.isFinite(a)) {
        // There is no lowest set bit
        return NaN;
    }
    // Note: the significand includes the hidden bit!
    const s = significand(a);
    const len = s.length;
    for (let i = len - 1; i >= 0; i--) {
        if (s[i] === 0) {
            continue;
        }
        const l = getLowestSetBit_(s[i]);
        if (Number.isFinite(l)) {
            return (8 * (len - i - 1)) + l;
        }
    }
    return NaN;
}
/**
 * Returns the highest set bit of the given value in [1, 255], i.e. from 1 up
 * to 255. If the input number === 0 returns NaN.
 * See https://stackoverflow.com/a/35190288/2010061
 * @internal
 */
function getHighestSetBit_(a) {
    return a >= 128 ? 7
        : a >= 64 ? 6
            : a >= 32 ? 5
                : a >= 16 ? 4
                    : a >= 8 ? 3
                        : a >= 4 ? 2
                            : a >= 2 ? 1
                                : a >= 1 ? 0
                                    : NaN;
}
/**
 * Returns the highest set bit of the given double. If no bit is set (input
 * === 0 or +/-inf or NaN) returns NaN.
 * See https://stackoverflow.com/a/35190288/2010061
 */
function getHighestSetBit(a) {
    if (a === 0 || !Number.isFinite(a)) {
        // There is no lowest set bit
        return NaN;
    }
    // At this point there must be a highest set bit (always === 52 if the 
    // number is not a subnormal.
    const s = significand(a);
    const len = s.length;
    for (let i = 0; i < len; i++) {
        const l = getHighestSetBit_(s[i]);
        if (Number.isFinite(l)) {
            return (8 * (len - i - 1)) + l;
        }
    }
    return NaN;
}

//# sourceMappingURL=get-max-set-bit.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-representation/exponent.js

/**
 * Returns the normalized exponent of the given number.
 * @param a A double
 */
function exponent(a) {
    return parseDouble(a).exponent;
}

//# sourceMappingURL=exponent.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-representation/is-bit-aligned.js


/**
 * Returns true if the given number is bit-aligned in the sense that its a
 * multiple of a given power of 2, say e, and such that the number, say a,
 * conforms to: a/2^e < 2^(l-e), where l is the max allowed bit length.
 * This essentially means the numbers act somewhat like fixed-point numbers
 * which can drastically speed up some geometric algorithms and also reduce
 * their complexity.
 *
 * Visually:
 * These numbers (a,b and c) are grid aligned with e === 3 and max
 * bitlength === 6:
 *   a -> 00|101100|000
 *   b -> 00|000100|000
 *   c -> 00|110111|000
 * These are not
 *   a -> 01|101100|000
 *   b -> 00|000100|000
 * These are not
 *   a -> 00|101100|000
 *   b -> 00|000100|100
 * These are not
 *   a -> 00|101100|100
 *   b -> 00|000100|100
 * @param as An array of numbers to check
 * @param maxBitLength The max allowed bitlength
 * @param gridSpacingExponent The grid spacing === 1^gridSpacingExponent
 */
function isBitAligned(a, maxBitLength, gridSpacingExponent) {
    if (a === 0) {
        return true;
    }
    const e = exponent(a);
    const maxSetBit = getHighestSetBit(a) - 52 + e;
    const minSetBit = getLowestSetBit(a) - 52 + e;
    const minBitBigEnough = minSetBit >= gridSpacingExponent;
    const maxBitSmallEnough = maxSetBit <= maxBitLength - 1 + gridSpacingExponent;
    return minBitBigEnough && maxBitSmallEnough;
}

//# sourceMappingURL=is-bit-aligned.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-representation/msb-exponent.js


/**
 * Returns the true exponent of the msb that is set of the given number or
 * NaN if a === 0 or +-inf or NaN.
 * @param a An array of numbers to check
 */
function msbExponent(a) {
    if (a === 0 || !Number.isFinite(a)) {
        return NaN;
    }
    const e = exponent(a);
    // Will return e for all but subnormal numbers
    return getHighestSetBit(a) - 52 + e;
}

//# sourceMappingURL=msb-exponent.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-representation/lsb-exponent.js


/**
 * Returns the true exponent of the lsb that is set of the given number or
 * NaN if a === 0 or +-inf or NaN.
 * @param a An array of numbers to check
 */
function lsbExponent(a) {
    if (a === 0 || !Number.isFinite(a)) {
        return NaN;
    }
    const e = exponent(a);
    return getLowestSetBit(a) - 52 + e;
}

//# sourceMappingURL=lsb-exponent.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-representation/bit-length.js

/**
 * Returns the bit-length of the significand of the given number in such a way
 * that trailing zeros are not counted.
 * @param a a double precision floating point number
 */
function bitLength(a) {
    if (a === 0) {
        return 0;
    }
    return getHighestSetBit(a) - getLowestSetBit(a) + 1;
}

//# sourceMappingURL=bit-length.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double-with-error/dd-div-dd-with-error.js

// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗
/** @internal */
const div = ddDivDd;
/** @internal */
const dd_div_dd_with_error_eps = Number.EPSILON;
/** @internal */
const dd_div_dd_with_error_u = dd_div_dd_with_error_eps / 2;
/** @internal */
const dd_div_dd_with_error_uu = dd_div_dd_with_error_u * dd_div_dd_with_error_u;
/**
 * Returns the result of dividing two double-double-precision floating point
 * numbers together with an absolute error bound where nE and dE are absolute
 * error bounds on the *input* values.
 *
 * @param numer numerator - a double-double-precision float
 * @param denom denominator - a double-double-precision float
 * @param nE absolute value error bound in numerator
 * @param dE absolute value error bound in denominator
 */
function ddDivDdWithError(numer, denom, nE, dE) {
    const n = numer[0];
    const N = numer[1];
    const d = denom[0];
    const D = denom[1];
    // estimate the result of the division
    const est = div(numer, denom);
    const _n = Math.abs(n + N); // absolute value of estimate of n accurate to within 1/2 ulp
    const _d = Math.abs(d + D); // absolute value of estimate of d accurate to within 1/2 ulp
    const δd = dd_div_dd_with_error_u * _d; // the max error in the rounding to _d
    // if the error in the denominator is too high the error can be 
    // arbitrarily high
    const minD = _d - δd - dE;
    // maxErr is only valid if minD > 0
    if (minD <= 0) {
        // the error can be arbitrarily high; est is mostly irrelevant
        return { est, err: Number.POSITIVE_INFINITY };
    }
    const err = ((_d * nE + _n * dE) / minD ** 2) + 9 * dd_div_dd_with_error_uu * Math.abs(_n / _d);
    return { est, err };
}

//# sourceMappingURL=dd-div-dd-with-error.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-with-err/div-with-err.js
/** @internal */
const div_with_err_u = Number.EPSILON / 2;
/**
 * Returns the result of dividing two double floating point numbers
 * together with an absolute error bound where nE and dE are absolute error
 * bounds on the input values.
 * @param n numerator
 * @param d denominator
 * @param nE absolute value error bound in numerator
 * @param dE absolute value error bound in denominator
 */
function divWithErr(n, d, nE, dE) {
    // estimate the result of the division
    const est = n / d;
    const _n = Math.abs(n);
    const _d = Math.abs(d);
    // if the error in the denominator is too high the error can be 
    // arbitrarily high
    const minD = _d - dE;
    // maxErr is only valid if minD > 0
    if (minD <= 0) {
        // the error can be arbitrarily high; est is mostly irrelevant
        return { est, err: Number.POSITIVE_INFINITY };
    }
    const err = ((_d * nE + _n * dE) / minD ** 2) + div_with_err_u * Math.abs(_n / _d);
    return { est, err };
}

//# sourceMappingURL=div-with-err.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/index.js











































const node_ddMultDouble2 = ddMultDouble2;
const node_parseDoubleDetailed = parseDoubleDetailed;
const node_getLowestSetBit = getLowestSetBit;
const node_ddMin = ddMin;
const node_ddMax = ddMax;
const node_ddSqrt = ddSqrt;
const node_doubleSqrt = doubleSqrt;
const node_sqrtWithErr = sqrtWithErr;
const node_ddAbs = ddAbs;
const node_ddAddDouble = ddAddDouble;
const node_ddAddDd = ddAddDd;
const node_ddProduct = ddProduct;
const node_ddSum = ddSum;
const node_ddCompare = ddCompare;
const node_ddDiffDd = ddDiffDd;
const node_ddMultDouble1 = ddMultDouble1;
const node_ddMultBy2 = ddMultBy2;
const node_ddMultBy4 = ddMultBy4;
const node_ddDivBy2 = ddDivBy2;
const node_ddMultByNeg2 = ddMultByNeg2;
const node_ddMultByNeg4 = ddMultByNeg4;
const node_ddMultDd = ddMultDd;
const node_ddDivDouble = ddDivDouble;
const node_ddDivDd = ddDivDd;
const node_ddNegativeOf = ddNegativeOf;
const node_ddSign = ddSign;
const node_fastTwoDiff = fastTwoDiff;
const node_fastTwoSum = fast_two_sum_fastTwoSum;
const node_split = split;
const node_twoDiff = twoDiff;
const node_twoProduct = two_product_twoProduct;
const node_doubleDivDouble = doubleDivDouble;
const node_twoSum = two_sum_twoSum;
const node_reduceSignificand = reduceSignificand;
const node_parseDouble = parseDouble;
const node_isBitAligned = isBitAligned;
const node_msbExponent = msbExponent;
const node_lsbExponent = lsbExponent;
const node_bitLength = bitLength;
const node_exponent = exponent;
const node_significand = significand;
const node_doubleToBinaryString = doubleToBinaryString;
const node_doubleToOctets = doubleToOctets;
const node_getHighestSetBit = getHighestSetBit;
const node_ddDivDdWithError = ddDivDdWithError;
const node_divWithErr = divWithErr;
const operators = {
    //---- basic ----//
    fastTwoDiff: node_fastTwoDiff,
    fastTwoSum: node_fastTwoSum,
    split: node_split,
    twoDiff: node_twoDiff,
    twoProduct: node_twoProduct,
    doubleDivDouble: node_doubleDivDouble,
    twoSum: node_twoSum,
    reduceSignificand: node_reduceSignificand,
    //---- double-double precision ----//
    doubleSqrt: node_doubleSqrt,
    ddSqrt: node_ddSqrt,
    ddAbs: node_ddAbs,
    ddAddDouble: node_ddAddDouble,
    ddAddDd: node_ddAddDd,
    ddProduct: node_ddProduct,
    ddSum: node_ddSum,
    ddCompare: node_ddCompare,
    ddDiffDd: node_ddDiffDd,
    ddMultDouble1: node_ddMultDouble1,
    ddMultDouble2: node_ddMultDouble2,
    ddMultDd: node_ddMultDd,
    ddDivDouble: node_ddDivDouble,
    ddDivDd: node_ddDivDd,
    ddNegativeOf: node_ddNegativeOf,
    ddSign: node_ddSign,
    ddMultBy2: node_ddMultBy2,
    ddMultBy4: node_ddMultBy4,
    ddDivBy2: node_ddDivBy2,
    ddMultByNeg2: node_ddMultByNeg2,
    ddMultByNeg4: node_ddMultByNeg4,
    ddMin: node_ddMin,
    ddMax: node_ddMax,
    //---- double-double precision error propagation - with error bound on input parameters
    ddDivDdWithError: node_ddDivDdWithError,
    //---- double precision error propagation - with error bound on input parameters
    divWithErr: node_divWithErr,
    sqrtWithErr: node_sqrtWithErr,
    //---- double floating point representation ----//
    parseDouble: node_parseDouble,
    parseDoubleDetailed: node_parseDoubleDetailed,
    isBitAligned: node_isBitAligned,
    msbExponent: node_msbExponent,
    lsbExponent: node_lsbExponent,
    bitLength: node_bitLength,
    doubleToBinaryString: node_doubleToBinaryString,
    doubleToOctets: node_doubleToOctets,
    getHighestSetBit: node_getHighestSetBit,
    getLowestSetBit: node_getLowestSetBit,
    exponent: node_exponent,
    significand: node_significand
};


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/calculus/double-double/dd-differentiate-with-err.js



// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗ Otherwise code is too slow❗
const dd_differentiate_with_err_ddMultDouble2 = node_ddMultDouble2;
const dd_differentiate_with_err_eEstimate = eEstimate;
const γγ3 = γγ(3);
/**
 * Returns the result (and resulting coefficient-wise error bound) of
 * differentiating the given polynomial (with coefficients given in
 * double-double precision) in double-double precision.
 *
 * @param pWithErr an object with 2 properties: `p`: a polynomial with
 * coefficients given densely as an array of double-double precision floating
 * point numbers from highest to lowest power, e.g. `[[5],[-3],[0]]` represents
 * the polynomial `5x^2 - 3x` **and** `pE`: the coefficient-wise error bound of
 * the input polynomial
 *
 * @doc
 */
function ddDifferentiateWithError(pWithErr) {
    const { p, pE } = pWithErr;
    const dp = [];
    const dpE = [];
    const d = p.length - 1;
    for (let i = 0; i < d; i++) {
        const deg = d - i;
        const c = dd_differentiate_with_err_ddMultDouble2(deg, p[i]);
        dp.push(c);
        // if 1,2,4 or 8, etc. then no additional error occurs on multiply
        // if 3,5,7 or 9, etc. then additional error occurs
        // deg is a power of 2 <=> (deg & deg-1) === 0
        const extraErr = (deg & deg - 1) === 0 ? 0 : γγ3;
        const $c = dd_differentiate_with_err_eEstimate(c);
        dpE.push(
        //deg * (pE[i] + Math.abs($c)*extraErr)
        deg * pE[i] + Math.abs($c) * extraErr);
    }
    return { p: dp, pE: dpE };
}

//# sourceMappingURL=dd-differentiate-with-err.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/scale-expansion.js




const scale_expansion_f = 134217729; // 2**27 + 1;
// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗
const tp = (/* unused pure expression or super */ null && (twoProduct));
const ts = (/* unused pure expression or super */ null && (twoSum));
const fts = (/* unused pure expression or super */ null && (fastTwoSum));
const compress = (/* unused pure expression or super */ null && (eCompress));
/**
 * Returns the result of multiplying an expansion by a double.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * Theorem 19 (Shwechuk): Let e = sum_(i=1)^m(e_i) be a nonoverlapping expansion
 * of m p-bit components, and const b be a p-bit value where p >= 4. Suppose that
 * the components of e are sorted in order of increasing magnitude, except that
 * any of the e_i may be zero. Then the following algorithm will produce a
 * nonoverlapping expansion h such that h = sum_(i=1)^(2m)(h_i) = be, where the
 * components of h are also in order of increasing magnitude, except that any of
 * the h_i may be zero. Furthermore, if e is nonadjacent and round-to-even
 * tiebreaking is used, then h is non-adjacent.
 *
 * @param e a double floating point expansion
 * @param b a double
 */
function scaleExpansion(e, b) {
    const m = e.length;
    //const h: number[] = new Array(2*m);
    let q_;
    //[h[0], q] = tp(e[0], b);
    // inlined (above line)
    const a = e[0];
    let q = a * b;
    const c = scale_expansion_f * a;
    const ah = c - (c - a);
    const al = a - ah;
    const d = scale_expansion_f * b;
    const bh = d - (d - b);
    const bl = b - bh;
    const h = [];
    //h[0] = (al*bl) - ((q - (ah*bh)) - (al*bh) - (ah*bl));
    const hh = (al * bl) - ((q - (ah * bh)) - (al * bh) - (ah * bl));
    if (hh !== 0) {
        h.push(hh);
    }
    for (let i = 1; i < m; i++) {
        //const [t, T] = tp(e[i], b);
        // inlined (above line)
        const a = e[i];
        const T = a * b;
        const c = scale_expansion_f * a;
        const ah = c - (c - a);
        const al = a - ah;
        const d = scale_expansion_f * b;
        const bh = d - (d - b);
        const bl = b - bh;
        const t = (al * bl) - ((T - (ah * bh)) - (al * bh) - (ah * bl));
        //[h[2*i-1], q_] = ts(q, t);
        // inlined (above line)
        const x = q + t;
        const bv = x - q;
        //h[2*i-1] = (q - (x - bv)) + (t - bv);
        //h.push((q - (x - bv)) + (t - bv));
        const hh = (q - (x - bv)) + (t - bv);
        if (hh !== 0) {
            h.push(hh);
        }
        q_ = x;
        //[h[2*i], q] = fts(T, q_);
        // inlined (above line)
        const xx = T + q_;
        //h[2*i] = q_ - (xx - T);
        //h.push(q_ - (xx - T));
        const hhh = q_ - (xx - T);
        if (hhh !== 0) {
            h.push(hhh);
        }
        q = xx;
    }
    //h[2*m - 1] = q;
    //h.push(q);
    if (q !== 0 || h.length === 0) {
        h.push(q);
    }
    //return eCompress(h);
    return h;
}
/**
 * Returns the result of multiplying an expansion by a double.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * Theorem 19 (Shwechuk): Let e = sum_(i=1)^m(e_i) be a nonoverlapping expansion
 * of m p-bit components, and const b be a p-bit value where p >= 4. Suppose that
 * the components of e are sorted in order of increasing magnitude, except that
 * any of the e_i may be zero. Then the following algorithm will produce a
 * nonoverlapping expansion h such that h = sum_(i=1)^(2m)(h_i) = be, where the
 * components of h are also in order of increasing magnitude, except that any of
 * the h_i may be zero. Furthermore, if e is nonadjacent and round-to-even
 * tiebreaking is used, then h is non-adjacent.
 *
 * @param e a double floating point expansion
 * @param b a double
 */
function scaleExpansion2(b, e) {
    const m = e.length;
    //const h: number[] = new Array(2*m);
    let q_;
    //[h[0], q] = tp(e[0], b);
    // inlined (above line)
    const a = e[0];
    let q = a * b;
    const c = scale_expansion_f * a;
    const ah = c - (c - a);
    const al = a - ah;
    const d = scale_expansion_f * b;
    const bh = d - (d - b);
    const bl = b - bh;
    const h = [];
    //h[0] = (al*bl) - ((q - (ah*bh)) - (al*bh) - (ah*bl));
    const hh = (al * bl) - ((q - (ah * bh)) - (al * bh) - (ah * bl));
    if (hh !== 0) {
        h.push(hh);
    }
    for (let i = 1; i < m; i++) {
        //const [t, T] = tp(e[i], b);
        // inlined (above line)
        const a = e[i];
        const T = a * b;
        const c = scale_expansion_f * a;
        const ah = c - (c - a);
        const al = a - ah;
        const d = scale_expansion_f * b;
        const bh = d - (d - b);
        const bl = b - bh;
        const t = (al * bl) - ((T - (ah * bh)) - (al * bh) - (ah * bl));
        //[h[2*i-1], q_] = ts(q, t);
        // inlined (above line)
        const x = q + t;
        const bv = x - q;
        //h[2*i-1] = (q - (x - bv)) + (t - bv);
        //h.push((q - (x - bv)) + (t - bv));
        const hh = (q - (x - bv)) + (t - bv);
        if (hh !== 0) {
            h.push(hh);
        }
        q_ = x;
        //[h[2*i], q] = fts(T, q_);
        // inlined (above line)
        const xx = T + q_;
        //h[2*i] = q_ - (xx - T);
        //h.push(q_ - (xx - T));
        const hhh = q_ - (xx - T);
        if (hhh !== 0) {
            h.push(hhh);
        }
        q = xx;
    }
    //h[2*m - 1] = q;
    //h.push(q);
    if (q !== 0 || h.length === 0) {
        h.push(q);
    }
    //return eCompress(h);
    return h;
}

//# sourceMappingURL=scale-expansion.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/calculus/expansion/e-differentiate.js

// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗ Otherwise code is too slow❗
const e_differentiate_scaleExpansion = scaleExpansion;
/**
 * Returns the exact result (bar underflow / overflow) of differentiating the
 * given polynomial (with Shewchuk expansion coefficients).
 *
 * @param p a polynomial with coefficients given densely as an array of Shewchuk
 * floating point expansions from highest to lowest power, e.g. `[[5],[-3],[0]]`
 * represents the polynomial `5x^2 - 3x`
 *
 * @example
 * ```typescript
 * eDifferentiate([[5], [4], [3], [2], [1]]); //=> [[20], [12], [6], [2]]
 * ```
 *
 * @doc
 */
function eDifferentiate(p) {
    const result = [];
    const d = p.length - 1;
    for (let i = 0; i < d; i++) {
        result.push(e_differentiate_scaleExpansion(p[i], d - i));
    }
    return result;
}

//# sourceMappingURL=e-differentiate.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/basic/two-product.js
const basic_two_product_f = 134217729; // 2**27 + 1;
/**
 * Returns the exact result of multiplying two doubles.
 *
 * * the resulting array is the reverse of the standard twoSum in the literature.
 *
 * Theorem 18 (Shewchuk): Let a and b be p-bit floating-point numbers, where
 * p >= 6. Then the following algorithm will produce a nonoverlapping expansion
 * x + y such that ab = x + y, where x is an approximation to ab and y
 * represents the roundoff error in the calculation of x. Furthermore, if
 * round-to-even tiebreaking is used, x and y are non-adjacent.
 *
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 * @param a A double
 * @param b Another double
 */
function basic_two_product_twoProduct(a, b) {
    const x = a * b;
    //const [ah, al] = split(a);
    const c = basic_two_product_f * a;
    const ah = c - (c - a);
    const al = a - ah;
    //const [bh, bl] = split(b);
    const d = basic_two_product_f * b;
    const bh = d - (d - b);
    const bl = b - bh;
    const y = (al * bl) - ((x - (ah * bh)) - (al * bh) - (ah * bl));
    //const err1 = x - (ah * bh);
    //const err2 = err1 - (al * bh);
    //const err3 = err2 - (ah * bl);
    //const y = (al * bl) - err3;
    return [y, x];
}

//# sourceMappingURL=two-product.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/basic/two-sum.js
/**
 * Returns the exact result of adding two doubles.
 *
 * * the resulting array is the reverse of the standard twoSum in the literature.
 *
 * Theorem 7 (Knuth): Let a and b be p-bit floating-point numbers. Then the
 * following algorithm will produce a nonoverlapping expansion x + y such that
 * a + b = x + y, where x is an approximation to a + b and y is the roundoff
 * error in the calculation of x.
 *
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 */
function basic_two_sum_twoSum(a, b) {
    const x = a + b;
    const bv = x - a;
    return [(a - (x - bv)) + (b - bv), x];
}
// inlined
//const R = a + b; const _ = R - a; const r = (a - (R - _)) + (b - _); return [r,R]

//# sourceMappingURL=two-sum.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/evaluate/double/eft-horner.js


// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗ Otherwise code is too slow❗
const eft_horner_twoSum = basic_two_sum_twoSum;
const eft_horner_twoProduct = basic_two_product_twoProduct;
/**
 * Returns an EFT (error free transformation) for the Horner evaluation of a
 * polymial at a specified x. The result is returned as an object with
 * properties: r̂ -> the calculated evaluation, pπ and pσ -> two polynomials
 * with coefficients around 2^53 times smaller than the input polynomial.
 *
 * * r̂ + pπ(x) + pσ(x) = the *exact* evaluation (no error)
 *
 * * see [Algorithms for Accurate, Validated and Fast Polynomial Evaluation, *Stef Graillat, Philippe Langlois and Nicolas Louvet*](https://projecteuclid.org/download/pdf_1/euclid.jjiam/1265033778)
 * * see also [*Philippe Langlois, Nicolas Louvet.* Faithful Polynomial Evaluation with Compensated Horner Algorithm. ARITH18: 18th IEEE International Symposium on Computer Arithmetic, Jun 2007, Montpellier, France. pp.141–149. ffhal-00107222f](https://hal.archives-ouvertes.fr/hal-00107222/document)
 * * see also [Horner's Method](https://en.wikipedia.org/wiki/Horner%27s_method)
 *
 * @param p a polynomial with coefficients given densely as an array of double
 * floating point numbers from highest to lowest power, e.g. `[5,-3,0]`
 * represents the polynomial `5x^2 - 3x`
 * @param x the value at which to evaluate the polynomial
 *
 * @doc
 */
function EFTHorner(p, x) {
    const pπ = []; // A polynomial containing part of the error
    const pσ = []; // Another polynomial containing part of the error
    let σ;
    let r̂ = p[0];
    for (let i = 1; i < p.length; i++) {
        const [π, pi] = eft_horner_twoProduct(r̂, x);
        [σ, r̂] = eft_horner_twoSum(pi, p[i]);
        // inlined
        //r̂ = pi + p[i]; const bv = r̂ - pi; σ = (pi - (x-bv)) + (p[i]-bv);
        pπ.push(π);
        pσ.push(σ);
    }
    return { r̂, pπ, pσ };
}
// inlined
//const pπ: number[] = []; const pσ: number[] = []; const σ: number; const r̂ = p[0];	for (const i=1; i<p.length; i++) { const [π,pi] = twoProduct(r̂,x); [σ,r̂] = twoSum(pi, p[i]); pπ.push(π); pσ.push(σ); } return { r̂, pπ, pσ }

//# sourceMappingURL=eft-horner.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/evaluate/double/horner-with-running-error.js
const abs = Math.abs;
const horner_with_running_error_u = Number.EPSILON / 2;
/**
 * Returns the result of evaluating a polyniomial at a point x, including a
 * running error bound as an array in the form `[r,e]` where `r` is the result
 * of the evaluation and `e` is the error.
 *
 * * see e.g. page 95 (at bottom) of [Higham 2002](http://ftp.demec.ufpr.br/CFD/bibliografia/Higham_2002_Accuracy%20and%20Stability%20of%20Numerical%20Algorithms.pdf)
 *
 * @param p a polynomial with coefficients given densely as an array of double
 * floating point numbers from highest to lowest power, e.g. `[5,-3,0]`
 * represents the polynomial `5x^2 - 3x`
 * @param x the value at which to evaluate the polynomial
 *
 * @doc
 */
function hornerWithRunningError(p, x) {
    let r̂ = p[0];
    let e = abs(r̂) * 0.5;
    for (let i = 1; i < p.length; i++) {
        r̂ = r̂ * x + p[i];
        e = e * abs(x) + abs(r̂);
    }
    e = horner_with_running_error_u * (2 * e - abs(r̂));
    return [r̂, e];
}
// inlined (where r̂ => r, e => e1, p => p0)
//let r = p0[0]; let e1 = Math.abs(r) / 2; for (let i=1; i<p0.length; i++) { r = r*x + p0[i]; e1 = Math.abs(x)*e1 + Math.abs(r); } e1 = Number.EPSILON * (2*e1 - Math.abs(r));

//# sourceMappingURL=horner-with-running-error.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/evaluate/double/horner.js
/**
 * Returns the result of evaluating a univariate polynomial using
 * Horner's method in double precision floating point arithmetic.
 *
 * * see [Horner's Method](https://en.wikipedia.org/wiki/Horner%27s_method)
 *
 * @param p a polynomial with coefficients given densely as an array of double
 * floating point numbers from highest to lowest power, e.g. `[5,-3,0]`
 * represents the polynomial `5x^2 - 3x`
 * @param x the value at which to evaluate the polynomial
 *
 * @doc
 */
function Horner(p, x) {
    let q = 0;
    for (let i = 0; i < p.length; i++) {
        q = q * x + p[i];
    }
    return q;
}
// inlined (with q => E, p => p0)
//let E = p0[0]; for (let i=1; i<p0.length; i++) {E = E*x + p0[i]; }

//# sourceMappingURL=horner.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/evaluate/double/abs-horner.js
const abs_horner_abs = Math.abs;
/**
 * Returns the result of evaluating a univariate polynomial using
 * Horner's method and where the absolute value of each coefficient is taken.
 *
 * * intermediate calculations are done in double precision
 *
 * @param p a polynomial with coefficients given densely as an array of double
 * floating point numbers from highest to lowest power, e.g. `[5,-3,0]`
 * represents the polynomial `5x^2 - 3x`
 * @param x the value at which `p` should be evaluated
 *
 * @doc
 */
function AbsHorner(p, x) {
    let q = 0;
    for (let i = 0; i < p.length; i++) {
        q = q * x + abs_horner_abs(p[i]);
    }
    return q;
}
// inlined (with q => e2, p => p0)
//let e2 = abs(p0[0]); for (let i=1; i<p0.length; i++) { e2 = e2*x + abs(p0[i]); }

//# sourceMappingURL=abs-horner.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/evaluate/double/eval-certified.js





// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗ Otherwise code is too slow❗
const eval_certified_ = γ;
const eval_certified_EFTHorner = EFTHorner;
const eval_certified_hornerWithRunningError = hornerWithRunningError;
const eval_certified_Horner = Horner;
const eval_certified_AbsHorner = AbsHorner;
const γ1 = eval_certified_(1);
const γ2 = eval_certified_(2);
/**
 * Returns the result of evaluating the given polynomial (with specified
 * coefficient-wise error bounds) at x such that the sign is correct when
 * positive or negative and undecided when 0 - an additional `multiplier`
 * parameter can enforce additional bits (beyond the sign) to be correct.
 *
 * * designed to be fast in 'easy' cases (say condition number < 2^53) and
 * harder cases (condition number < 2^106) since nearly all typical
 * calculations will have condition number < 2^106
 * * a staggered approach is used - first double precision, then simulated
 * double-double precision (i.e. once compensated Horner evluation) is tried
 * before giving up and returning 0 - see point below
 * * if zero is returned then the calculated result is too close to 0 to
 * determine the sign; the caller of this function can then resort to a more
 * accurate (possibly exact) evaluation
 *
 * @param p an array of 2 polynomials with coefficients given densely as an
 * array of double precision floating point numbers from highest to
 * lowest power, e.g. `[5,-3,0]` represents the polynomial `5x^2 - 3x`;
 * the first polynomial's coefficients represent the 'high part' (a double) of a
 * double-double precision value, while the second polynomial's coefficients
 * represent the 'low part', i.e. designating `hp` for high part and `lp` for
 * low part it must be that they are non-overlapping -> `twoSum(lp,hp)` will
 * equal `[lp,hp]`; put another way, if the given polynomial is given as e.g. a
 * linear polynomial with coefficients in double precision,
 * e.g. `[[1.7053025658242404e-13, 2354.33721613], [-7.105427357601002e-15,284.5673337]]`
 * then this parameter, `p`, should be `[[2354.33721613], 284.5673337], [1.7053025658242404e-13, -7.105427357601002e-15]]`
 * which is simply the result of transposing the original polynomial if it is
 * seen as a matrix
 * @param pE defaults to `undefined`; an error polynomial that provides a
 * coefficient-wise error bound on the input polynomial; all coefficients must
 * be positive; if `undefined` then the input polynomial will be assumed exact
 * @param x the value at which to evaluate the polynomial
 * @param multiplier defaults to 1; the final calculation error needs to be a
 * multiple of this number smaller than the evaluated value, otherwise zero is
 * returned - useful if not only the sign is important but also some bits, e.g.
 * if multiplier = 8 then 3 bits will have to be correct otherwise 0 is returned
 *
 * @doc
 */
function evalCertified(p, x, pE = undefined, multiplier = 1) {
    const absX = Math.abs(x);
    const p0 = p[0];
    // first do a fast evaluation
    const [r, e1] = eval_certified_hornerWithRunningError(p0, x);
    // inlined above line:
    //const r = p0[0]; const e1 = Math.abs(r) / 2; for (const i=1; i<p0.length; i++) { r = r*x + p0[i]; e1 = Math.abs(x)*e1 + Math.abs(r); } e1 = Number.EPSILON * (2*e1 - Math.abs(r));
    /** the error due to not considering p[1] */
    // the line below was changed due to negative values of x now also allowed
    const e2 = γ2 * eval_certified_AbsHorner(p0, absX);
    // inlined above line:
    //const e2 = abs(p0[0]); for (const i=1; i<p0.length; i++) { e2 = e2*x + abs(p0[i]); }
    /** error due to imprecision in coefficients */
    // the line below was changed due to negative values of x now also allowed
    const E = pE !== undefined ? eval_certified_Horner(pE, absX) : 0;
    //const E = p0[0]; for (const i=1; i<p0.length; i++) {E = E*x + p0[i]; }
    const ee = e1 + e2 + E; // in difficult cases E can be larger than e1+e2
    if (ee * multiplier < Math.abs(r)) {
        // we are within bounds
        return r;
    }
    // error is too large - do a more precise evaluation (i.e. once compensated
    // with K === 2)
    const EFTHorner_ = eval_certified_EFTHorner(p0, x);
    const { pπ, pσ } = EFTHorner_;
    let { r̂ } = EFTHorner_;
    const [C1, c1] = eval_certified_hornerWithRunningError(pπ, x);
    const [C2, c2] = eval_certified_hornerWithRunningError(pσ, x);
    const [C3, c3] = eval_certified_hornerWithRunningError(p[1], x);
    // typically: c1,c2 < c3 < E
    let e = (c1 + c2 + c3) + E;
    // typically: C1,C2 < C3 < r̂ and (C1 + C2 + C3 < r̂)
    r̂ = (C1 + C2 + C3) + r̂;
    e += γ1 * r̂;
    if (e * multiplier < Math.abs(r̂)) {
        return r̂;
    }
    // error is still too large to return the correct sign (if multiplier === 1)
    return 0;
}

//# sourceMappingURL=eval-certified.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/fast-expansion-sum.js

// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗
const fast_expansion_sum_compress = (/* unused pure expression or super */ null && (eCompress));
/**
 * Returns the result of adding two expansions.
 *
 * Theorem 13: Let e = sum_(i=1)^m(e_i) and f = sum_(i=1)^n(f_i) be strongly
 * nonoverlapping expansions of m and n p-bit components, respectively, where
 * p >= 4. Suppose that the components of both e and f are sorted in order of
 * increasing magnitude, except that any of the e_i or f_i may be zero. On a
 * machine whose arithmetic uses the round-to-even rule, the following algorithm
 * will produce a strongly nonoverlapping expansion h such that
 * sum_(i=1)^(m+n)(e_i + f_i) = e + f, where the components of h are also in
 * order of increasing magnitude, except that any of the h_i may be zero.
 *
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 */
function fastExpansionSum(e, f) {
    //const g = merge(e,f);
    // inlined (above line)
    const lenE = e.length;
    const lenF = f.length;
    let i = 0;
    let j = 0;
    const g = [];
    while (i < lenE && j < lenF) {
        if (e[i] === 0) {
            i++;
            continue;
        }
        if (f[j] === 0) {
            j++;
            continue;
        }
        if (Math.abs(e[i]) <= Math.abs(f[j])) {
            g.push(e[i]);
            i++;
        }
        else {
            g.push(f[j]);
            j++;
        }
    }
    while (i < lenE) {
        g.push(e[i]);
        i++;
    }
    while (j < lenF) {
        g.push(f[j]);
        j++;
    }
    if (g.length === 0) {
        return [0];
    }
    // end inlined
    const len = g.length;
    if (len === 1) {
        return g;
    }
    //const h: number[] = new Array(len);
    const h = [];
    //const q: number;
    //[h[0], q] = fastTwoSum(g[1], g[0]);
    // inlined (above line)
    const a = g[1];
    const b = g[0];
    let q = a + b;
    //h[0] = b - (q - a);
    const hh = b - (q - a);
    if (hh !== 0) {
        h.push(hh);
    }
    //let j = 0;
    j = 0;
    for (let i = 2; i < len; i++) {
        //[h[i-1], q] = twoSum(q, g[i]);
        // inlined (above line)
        const b = g[i];
        const R = q + b;
        const _ = R - q;
        //h[i-1] = (q - (R - _)) + (b - _);
        const hh = (q - (R - _)) + (b - _);
        if (hh !== 0) {
            h.push(hh);
        }
        q = R;
    }
    //h[len-1] = q;
    //h.push(q);
    if (q !== 0 || h.length === 0) {
        h.push(q);
    }
    //return compress(h);
    return h;
}
/**
 * Returns the result of merging an expansion e and f into a single expansion,
 * in order of nondecreasing magnitude (possibly with interspersed zeros).
 * (This function is zero-eliminating)
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param e a floating point expansion
 * @param f another floating point expansion
 */
function merge(e, f) {
    const lenE = e.length;
    const lenF = f.length;
    let i = 0;
    let j = 0;
    const merged = [];
    while (i < lenE && j < lenF) {
        if (e[i] === 0) {
            i++;
            continue;
        }
        if (f[j] === 0) {
            j++;
            continue;
        }
        if (Math.abs(e[i]) <= Math.abs(f[j])) {
            merged.push(e[i]);
            i++;
        }
        else {
            merged.push(f[j]);
            j++;
        }
    }
    while (i < lenE) {
        merged.push(e[i]);
        i++;
    }
    while (j < lenF) {
        merged.push(f[j]);
        j++;
    }
    if (merged.length === 0) {
        return [0];
    }
    return merged;
}

//# sourceMappingURL=fast-expansion-sum.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/evaluate/expansion/e-horner.js

// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗ Otherwise code is too slow❗
const fes = fastExpansionSum;
const sce = scaleExpansion;
/**
 * Returns the exact result (bar underflow / overflow) of evaluating a
 * univariate polynomial using Horner's method - the result is returned as a
 * Shewchuk expansion.
 *
 * @param p a polynomial with coefficients given densely as an array of
 * Shewchuk expansions from highest to lowest power, e.g. `[[5],[-3],[0]]`
 * represents the polynomial `5x^2 - 3x`
 * @param x the value at which to evaluate the polynomial
 *
 * @doc
 */
function eHorner(p, x) {
    let q = [0];
    for (let i = 0; i < p.length; i++) {
        // q = p[i] + x*q;
        q = fes(p[i], sce(q, x));
    }
    return q;
}

//# sourceMappingURL=e-horner.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/roots/certified/transpose-poly.js
/**
 * Transposes the given polynomial (given with multi-precision coefficients)
 * into multiple polynomials with each consecutive polynomial 'adjusting'
 * the prior one to higher precision.
 *
 * @param p
 *
 * @internal
 */
function transposePoly(p) {
    // transpose the polynomial coefficients into multiple polynomials
    const len = p[0].length;
    const p_ = [];
    for (let i = 0; i < len; i++) {
        const _p = [];
        for (let j = 0; j < p.length; j++) {
            _p.push(p[j][len - (i + 1)]); // from highest to lowest
        }
        p_.push(_p);
    }
    return p_;
}

//# sourceMappingURL=transpose-poly.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/roots/certified/eval-adaptive.js



// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗ Otherwise code is too slow❗
const eval_adaptive_evalCertified = evalCertified;
const eval_adaptive_eHorner = eHorner;
const eval_adaptive_eEstimate = eEstimate;
/**
 * Returns the result of evaluating the given polynomial (with double-double
 * precision coefficients) at the given value, where the coefficient-wise error
 * is also given.
 *
 * * **the sign of the returned result is guaranteed to be correct**
 * * the evaluation is done adaptively, i.e. if the evaluation cannot be done
 * accurately enough then an exact precision polynomial is requested
 *
 * @param p a polynomial given as an array with each consecutive element of
 * the array having more accurate coefficients than the previous (by adding
 * consecutive double precision coefficients to prior coefficients)
 * @param pE a coefficientwise error bound
 * @param x the point of evaluation
 * @param psExact an object holding the exact polynomial and all its exact
 * derivatives - this object may be modified!
 * @param getPsExact a function to retrieve the exact polynomial and all its
 * exact derivatives
 * @param diffCount the number of differentiations done up to this point
 *
 * @internal
 */
function evalAdaptive(p, pE, x, getPolyExact) {
    const r = eval_adaptive_evalCertified(p, x, pE, 4);
    if (r !== 0) {
        return r;
    }
    // condition number is too high - request higher precision
    return eval_adaptive_eEstimate(eval_adaptive_eHorner(getPolyExact(), x));
}

//# sourceMappingURL=eval-adaptive.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/roots/certified/refine-certified.js



// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗ Otherwise code is too slow❗
const refine_certified_evalCertified = evalCertified;
const refine_certified_eHorner = eHorner;
const refine_certified_eEstimate = eEstimate;
const refine_certified_eps = Number.EPSILON;
const refine_certified_abs = Math.abs;
const max = Math.max;
/**
 * Returns a refined root given a root bracketed in the interval (a,b) of the
 * given polynomial using Brent's Method - modified slightly to allow for
 * error certified bounds.
 *
 * * near exact implementation of the original Brent Dekker Method (also known
 * as Brent's Method), except that it is specialzed to polynomial evaluation
 *
 * * Brent's Method is an excellent root-refinement choice since:
 *  * guaranteed converge (unlike the Newton and other so-called single-point
 * methods),
 *  * converges in a reasonable number of iterations even for highly contrived
 * functions (unlike Dekker's Method) and
 *  * nearly always converges fast, i.e. super-linearly (unlike the Secant and
 * Regula-Falsi methods).
 * * unfortunately the algorithm given on [Wikipedia](https://en.wikipedia.org/wiki/Brent%27s_method)
 * works but is not precisely Brent's method and runs about 2x or more slower
 * due to it not implementing the critically important 'micro-step' (Aug 2020).
 *
 * * see [Brent (page 47)](https://maths-people.anu.edu.au/~brent/pd/rpb011i.pdf)
 * * [c++ implementation of Brent's Method](https://people.sc.fsu.edu/~jburkardt/cpp_src/brent/brent.cpp)
 *
 * @param p A polynomial with coefficients given densely as an array of double-double
 * floating point numbers from highest to lowest power, e.g. `[[0,5],[0,-3],[0,0]]`
 * represents the polynomial `5x^2 - 3x`. If `exact` is `true` then this is allowed
 * to be `undefined`.
 * @param pE An error polynomial that provides a coefficientwise error bound on
 * the input polynomial; all coefficients must be positive. If `exact` is `true`
 * then this is allowed to be `undefined`.
 * @param lb the lower limit of the search interval.
 * @param ub the upper limit of the search interval.
 * @param fa the result of evaluating the input polynomial at `a`
 * @param fb the result of evaluating the input polynomial at `b`
 * @param psExact
 * @param getPsExact
 * @param diffCount
 * @param exact set to true if you need to do exact evaluations from the start
 *
 * @internal
 */
function refineCertified(p, pE, lb, ub, fa, fb, getPolyExact, exact) {
    //---- Make local copies of a and b.
    let a = lb;
    let b = ub;
    let c = a;
    let fc = fa;
    let e = b - a;
    let d = e;
    while (true) {
        // update delta
        if (refine_certified_abs(fc) < refine_certified_abs(fb)) {
            a = b;
            b = c;
            c = a;
            fa = fb;
            fb = fc;
            fc = fa;
        }
        // Original c++ code had the line below but with us t === 0 and b is 
        // taken as 1 and 2.0 * macheps is taken as 2*u === Number.EPSILON (eps)
        // or can also be taken as 4*u === 2*Number.EPSILON (2*eps)
        // adaptive tolerance
        //let δ = 2 * eps * max(1,abs(b));
        //let δ = 2 * u * max(1,abs(b));
        let δ;
        const mm = max(refine_certified_abs(a), refine_certified_abs(b));
        if (mm <= 1) {
            δ = refine_certified_eps;
        }
        else {
            // keep δ = eps * a power of 2
            //δ = eps * 2**Math.ceil(Math.log2(Math.ceil(mm)));  // may be faster to get log2 of an integer
            δ = refine_certified_eps * 2 ** Math.ceil(Math.log2(mm));
        }
        //tol = 2.0 * macheps * abs ( b ) + t;
        const m = 0.5 * (c - b);
        //if (abs(m) <= δ || fb === 0) {
        // modified from the original since we dont need the fb === 0 check here
        if (refine_certified_abs(m) <= δ) {
            // TODO - could potentially make b - c a power of 2 here δ
            return b < c ? [b, c] : [c, b];
        }
        if (refine_certified_abs(e) < δ || refine_certified_abs(fa) <= refine_certified_abs(fb)) {
            e = m;
            d = e;
        }
        else {
            let s = fb / fa;
            let p;
            let q;
            if (a === c) {
                p = 2 * m * s;
                q = 1 - s;
            }
            else {
                q = fa / fc;
                const r = fb / fc;
                p = s * (2 * m * q * (q - r) - (b - a) * (r - 1));
                q = (q - 1) * (r - 1) * (s - 1);
            }
            if (0 < p) {
                q = -q;
            }
            else {
                p = -p;
            }
            s = e;
            e = d;
            if (2 * p < 3 * m * q - refine_certified_abs(δ * q) && p < refine_certified_abs(0.5 * s * q)) {
                d = p / q;
            }
            else {
                e = m;
                d = e;
            }
        }
        a = b;
        fa = fb;
        if (δ < refine_certified_abs(d)) {
            b = b + d;
        }
        else if (0 < m) {
            b = b + δ;
        }
        else {
            //b = b - eps;
            b = b - δ;
        }
        fb = exact
            ? refine_certified_eEstimate(refine_certified_eHorner(getPolyExact(), b))
            // keep TypeScript happy; neither `p` nor `pE` can be `undefined` 
            // here by a precondition
            : refine_certified_evalCertified(p, b, pE);
        if (fb === 0) {
            // Since `evalCertified` returns zero if undecided the zero result
            // cannot be fully trusted at this point.
            // if we are already doing exact evaluations this is an exact root
            if (exact) {
                return [b, b];
            }
            // We need to calculate δ/2 to the left and right of b to get 
            // results that should usually be !== 0. 
            // It is a pre-filter. If the result === 0 we need to sharpen the
            // ability of the evaluation by somehow reducing the error bound
            const sL = Math.max(lb, b - δ); // dont overstep bounds
            const sR = Math.min(ub, b + δ); // dont overstep bounds
            // Note: sR - sL <= 2*δ provided lb, ub are in [-1..1] - usually 
            // (when sL === s - δ and sR === s + δ) sR - sL === 2*δ. Also δ > 0
            // keep TypeScript happy; neither `p` nor `pE` can be `undefined` 
            // here by a precondition
            const fsL = refine_certified_evalCertified(p, sL, pE);
            const fsR = refine_certified_evalCertified(p, sR, pE);
            // if the evaluation method is strong enough return the result
            if (fsL * fsR !== 0) {
                return [sL, sR];
            }
            // At this point either fsL or fsR === 0 so we need to sharpen the
            // evaluation method
            exact = true;
            // get and cache the exact polynomial (we cache this since getting
            // an exact polynomial takes about 15 times more time than getting
            // a double-double polynomial and we very rarely expect to get to 
            // this point)
            fb = refine_certified_eEstimate(refine_certified_eHorner(getPolyExact(), b));
            // if the exact evaluation returns 0 we have an exact root
            if (fb === 0) {
                return [b, b];
            }
            // else we've got a new value for fb and from here on we use exact
            // evaluations
        }
        if ((0 < fb && 0 < fc) || (fb <= 0 && fc <= 0)) {
            c = a;
            fc = fa;
            e = b - a;
            d = e;
        }
    }
}

//# sourceMappingURL=refine-certified.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/basic/double/negate.js
/**
 * Returns the negative of the given polynomial (p -> -p).
 *
 * @param p a polynomial with coefficients given densely as an array of double
 * floating point numbers from highest to lowest power, e.g. `[5,-3,0]`
 * represents the polynomial `5x^2 - 3x`
 * @example
 * ```typescript
 * negate([0.1, -0.2]); //=> [-0.1, 0.2]
 * ```
 *
 * @doc
 */
function negate(p) {
    const p_ = [];
    for (let i = 0; i < p.length; i++) {
        p_.push(-p[i]);
    }
    return p_;
}

//# sourceMappingURL=negate.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/basic/double/invert.js
/**
 * Inverts the given polynomial by reversing the order of the coefficients,
 * i.e. p(x) -> x^deg(p) * p(1/x)
 *
 * @param p a polynomial with coefficients given densely as an array of double
 * floating point numbers from highest to lowest power, e.g. `[5,-3,0]`
 * represents the polynomial `5x^2 - 3x`
 *
 * @example
 * ```typescript
 * invert([3,2,-5]);  // => [-5,2,3]
 * ```
 *
 * @doc
 */
function invert(p) {
    return p.slice().reverse();
}

//# sourceMappingURL=invert.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/roots/root-bounds/upper-to-lower-bound.js

// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗ Otherwise code is too slow❗
const upper_to_lower_bound_invert = invert;
/**
 * Returns a function that returns a positive lower root bound given a function
 * that returns a positive upper root bound.
 *
 * @param positiveUpperBoundFunction
 *
 * @internal
 */
function upperToLowerBound(positiveUpperBoundFunction) {
    return (p) => {
        return 1 / positiveUpperBoundFunction(upper_to_lower_bound_invert(p));
    };
}

//# sourceMappingURL=upper-to-lower-bound.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/change-variables/double/reflect-about-y-axis.js
/**
 * Returns the result of reflecting the given polynomial about the Y-axis, i.e.
 * perform the change of variables: p(x) <- p(-x).
 *
 * @param p a polynomial with coefficients given densely as an array of double
 * floating point numbers from highest to lowest power, e.g. `[5,-3,0]`
 * represents the polynomial `5x^2 - 3x`
 *
 * @example
 * ```typescript
 * reflectAboutYAxis([5,4,3,2,1]); //=> [5, -4, 3, -2, 1]
 * ```
 *
 * @doc
 */
function reflectAboutYAxis(p) {
    const d = p.length - 1;
    if (d < 0) {
        return [];
    }
    const result = p.slice();
    for (let i = 0; i < d + 1; i++) {
        if (i % 2) {
            result[i] = -result[i];
        }
    }
    return result;
}

//# sourceMappingURL=reflect-about-y-axis.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/roots/root-bounds/positive-to-negative-bound.js

// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗ Otherwise code is too slow❗
const positive_to_negative_bound_reflectAboutYAxis = reflectAboutYAxis;
/**
 * Returns a function that returns a negative root bound given a function that
 * returns a positive root bound.
 *
 * @param positiveBoundFunction
 *
 * @internal
 */
function positiveToNegativeBound(positiveBoundFunction) {
    return (p) => {
        return -positiveBoundFunction(positive_to_negative_bound_reflectAboutYAxis(p));
    };
}

//# sourceMappingURL=positive-to-negative-bound.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/roots/root-bounds/root-bounds-lmq.js



// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗ Otherwise code is too slow❗
const root_bounds_lmq_negate = negate;
const root_bounds_lmq_upperToLowerBound = upperToLowerBound;
const root_bounds_lmq_positiveToNegativeBound = positiveToNegativeBound;
/**
 * Returns an upper bound for the positive real roots of the given polynomial.
 *
 * See algoritm 6 of the paper by Vigklas, Akritas and Strzeboński,
 * specifically the LocalMaxQuadratic algorithm hence LMQ.
 *
 * @param p a polynomial with coefficients given densely as an array of double
 * floating point numbers from highest to lowest power, e.g. `[5,-3,0]`
 * represents the polynomial `5x^2 - 3x`
 *
 * @example
 * ```typescript
 * positiveRootUpperBound_LMQ([2,-3,6,5,-130]); //=> 4.015534272870436
 * positiveRootUpperBound_LMQ([2,3]);           //=> 0
 * positiveRootUpperBound_LMQ([-2,-3,-4]);      //=> 0
 * ```
 *
 * @doc
 */
function positiveRootUpperBound_LMQ(p) {
    const deg = p.length - 1;
    if (deg < 1) {
        return 0;
    }
    if (p[0] < 0) {
        p = root_bounds_lmq_negate(p);
    }
    const timesUsed = [];
    for (let i = 0; i < deg; i++) {
        timesUsed.push(1);
    }
    let ub = 0;
    for (let m = 0; m <= deg; m++) {
        if (p[m] >= 0) {
            continue;
        }
        let tempub = Number.POSITIVE_INFINITY;
        let any = false;
        for (let k = 0; k < m; k++) {
            if (p[k] <= 0) {
                continue;
            }
            const temp = (-p[m] / (p[k] / 2 ** timesUsed[k])) ** (1 / (m - k));
            timesUsed[k]++;
            if (tempub > temp) {
                tempub = temp;
            }
            any = true;
        }
        if (any && ub < tempub)
            ub = tempub;
    }
    return ub;
}
/**
 * Returns a positive lower bound of the real roots of the given polynomial
 *
 * See algoritm 6 of the paper by Vigklas, Akritas and Strzeboński,
 * specifically the LocalMaxQuadratic algorithm hence LMQ.
 *
 * @param p a polynomial with coefficients given densely as an array of double
 * floating point numbers from highest to lowest power, e.g. `[5,-3,0]`
 * represents the polynomial `5x^2 - 3x`
 *
 * @doc
 */
const positiveRootLowerBound_LMQ = root_bounds_lmq_upperToLowerBound(positiveRootUpperBound_LMQ);
/**
 * Returns a negative lower (further from zero) bound of the real roots of the
 * given polynomial.
 *
 * See algoritm 6 of the paper by Vigklas, Akritas and Strzeboński,
 * specifically the LocalMaxQuadratic algorithm hence LMQ.
 *
 * @param p a polynomial with coefficients given densely as an array of double
 * floating point numbers from highest to lowest power, e.g. `[5,-3,0]`
 * represents the polynomial `5x^2 - 3x`
 *
 * @doc
 */
const negativeRootLowerBound_LMQ = root_bounds_lmq_positiveToNegativeBound(positiveRootUpperBound_LMQ);
/**
 * Returns a negative upper (closer to zero) bound of the real roots of the
 * given polynomial.
 *
 * See algoritm 6 of the paper by Vigklas, Akritas and Strzeboński,
 * specifically the LocalMaxQuadratic algorithm hence LMQ.
 *
 * @param p a polynomial with coefficients given densely as an array of double
 * floating point numbers from highest to lowest power, e.g. `[5,-3,0]`
 * represents the polynomial `5x^2 - 3x`
 *
 * @doc
 */
const negativeRootUpperBound_LMQ = root_bounds_lmq_upperToLowerBound(negativeRootLowerBound_LMQ);

//# sourceMappingURL=root-bounds-lmq.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/roots/certified/all-roots-certified.js











// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗ Otherwise code is too slow❗
const all_roots_certified_ddDifferentiateWithError = ddDifferentiateWithError;
const all_roots_certified_evalCertified = evalCertified;
const all_roots_certified_eHorner = eHorner;
const all_roots_certified_transposePoly = transposePoly;
const all_roots_certified_evalAdaptive = evalAdaptive;
const all_roots_certified_refineCertified = refineCertified;
const all_roots_certified_negativeRootUpperBound_LMQ = negativeRootLowerBound_LMQ;
const all_roots_certified_positiveRootUpperBound_LMQ = positiveRootUpperBound_LMQ;
const all_roots_certified_eDifferentiate = eDifferentiate;
const all_roots_certified_eEstimate = eEstimate;
const all_roots_certified_hornerWithRunningError = hornerWithRunningError;
const all_roots_certified_eSign = e_sign_eSign;
const all_roots_certified_max = Math.max;
const min = Math.min;
const all_roots_certified_abs = Math.abs;
const all_roots_certified_eps = Number.EPSILON;
const onePlusEps = 1 + all_roots_certified_eps;
function allRootsCertified(p, lb = 0, ub = 1, pE, getPExact, returnUndefinedForZeroPoly) {
    // if `getPExact` is not specified then assume the given double-double 
    // precision coefficient polynomial is exact
    if (!getPExact) {
        getPExact = () => p;
    }
    //const δ = 2*Number.EPSILON * max(1, max(abs(lb), abs(ub)));
    // if `pE` is not specified then assume there is no error
    pE = pE || new Array(p.length).fill(0); // no error
    // set `diffCount` to 0 so `getPolyExact` can be accurate
    let diffCount = 0;
    // lazy loaded array of the given polynomial and its derivatives
    let psExact = undefined;
    //----------------------------------------------------------------------
    // Remove leading zero coefficients 
    // (the case of leading zero coefficients can now be handled)
    // `p` and `getPExact()` *must* be of same length
    //----------------------------------------------------------------------
    let polyExact = undefined; // lazy loaded
    // while the leading coefficient is smaller then the error bound 
    // i.e. possibly zero	
    while (p.length > 0 && all_roots_certified_abs(p[0][1]) <= pE[0]) {
        polyExact = polyExact || getPExact();
        // if leading coefficient really is zero
        if (all_roots_certified_eSign(polyExact[0]) === 0) {
            // shift the leading coefficient and error out without altering the 
            // given polynomial and error bound (shift is destructive, slice is not)
            p = p.slice();
            p.shift();
            pE = pE.slice();
            pE.shift();
            // also shift out the exact polynomial's leading coefficient
            polyExact.shift();
            continue;
        }
        break;
    }
    if (p.length === 0) {
        // return `undefined` for the zero polynomial?
        return returnUndefinedForZeroPoly ? undefined : [];
    }
    else if (p.length === 1) {
        // return `[]` for a degree 1 polynomial (a non-zero constant)
        return [];
    }
    if (lb === Number.NEGATIVE_INFINITY || ub === Number.POSITIVE_INFINITY) {
        const pDoubleCoeffs = p.map(c => c[1]);
        if (lb === Number.NEGATIVE_INFINITY) {
            lb = all_roots_certified_negativeRootUpperBound_LMQ(pDoubleCoeffs);
        }
        if (ub === Number.POSITIVE_INFINITY) {
            ub = all_roots_certified_positiveRootUpperBound_LMQ(pDoubleCoeffs);
        }
    }
    const p_ = all_roots_certified_transposePoly(p);
    let bCount;
    let exact;
    const deg = p.length - 1;
    bCount = 0;
    exact = false;
    let LB; // evaluation at lb
    do {
        LB = exact
            ? all_roots_certified_eEstimate(all_roots_certified_eHorner(getPolyExact(), lb))
            : all_roots_certified_evalCertified(p_, lb, pE);
        if (LB === 0) {
            bCount++;
            // the max bCount is empirically selected for max performance
            if (bCount >= 3 && !exact) {
                exact = true;
                continue;
            }
            lb -= 2 * Number.EPSILON * all_roots_certified_max(1, all_roots_certified_abs(lb));
        }
    } while (LB === 0);
    bCount = 0;
    exact = false;
    let UB; // evaluation at ub
    do {
        UB = exact
            ? all_roots_certified_eEstimate(all_roots_certified_eHorner(getPolyExact(), ub))
            : all_roots_certified_evalCertified(p_, ub, pE);
        if (UB === 0) {
            bCount++;
            if (bCount >= 3 && !exact) { // the max bCount is empirically selected for max performance
                exact = true;
                continue;
            }
            ub += 2 * Number.EPSILON * all_roots_certified_max(1, all_roots_certified_abs(ub));
        }
    } while (UB === 0);
    // Get all derivatives with their coefficient-wise error bounds, i.e. 
    // ps === [p, dp, ddp, ..., constant]
    //        [0,  1,   2, ..., deg     ]
    const ps = [{ p, pE }];
    const ps_ = [all_roots_certified_transposePoly(p)]; // the transposed versions
    for (let i = 1; i <= deg; i++) {
        const dP = all_roots_certified_ddDifferentiateWithError(ps[i - 1]);
        ps.push(dP);
        ps_.push(all_roots_certified_transposePoly(dP.p)); // the transposed versions
    }
    let is = [];
    let curPE;
    let curP_;
    diffCount = deg - 1; // update diffcount
    for (; diffCount >= 0; diffCount--) {
        curPE = ps[diffCount].pE;
        // on first iteration curP_ is linear, 
        // on second it is quadratic, etc. ...
        curP_ = ps_[diffCount];
        is = getRootsWithin();
    }
    // depends externally on `diffCount` and `psExact`
    function getPolyExact() {
        // cache
        if (psExact !== undefined) {
            return psExact[diffCount];
        }
        // keep TypeScript happy; `getPExact` cannot be `undefined` here
        let poly = polyExact || getPExact();
        psExact = [poly];
        while (poly.length > 1) {
            poly = all_roots_certified_eDifferentiate(poly);
            psExact.push(poly);
        }
        return psExact[diffCount];
    }
    return is;
    // All cases:
    // ----------
    // Note: [_a,a_] denotes a micro-interval, whereas [b_,_a], [a_,_b] denotes a
    // normal interval.
    // Note: In all iterations we check [_a,a_] and [a_,_b]. In the final
    // iteration we check [_b,b_], then we've checked all intervals.
    // 
    // ⇑ represents +pos (above x-axis) and ⇓ represents -neg
    // (the symmetric cases also applies where + and - are interchanged)
    // ? means does not matter
    // -----------------------------------------------------------------
    // CASE 1A:
    // _A⇑ | A_⇑ | _B⇑
    //  - [_a,a_] → 
    //    - _a === a_
    //        ? no root 
    //        : A_/_A close enough to zero
    //            ? close even root 
    //            : no roots
    //  - [a_,_b] → no root (curve is monotone increasing or decreasing)
    // CASE 1B:
    // _A⇑ | A_⇑ | _B⇓  
    //  - [_a,a_] → 
    //    - _a === a_
    //        ? no root 
    //        : A_/_A close enough to zero ? close even root : no roots
    //  - [a_,_b] → single root (curve is monotone increasing or decreasing)
    // CASE 2A:
    // _A⇑ | A_⇓ | _B⇑
    //  - [_a,a_] → odd root(s)
    //  - [a_,_b] → single root (curve is monotone increasing or decreasing)
    // CASE 2B:
    // _A⇑ | A_⇓ | _B⇓
    //  - [_a,a_] → odd root(s)
    //  - [a_,_b] → no root (curve is monotone increasing or decreasing)
    // CASE 3A: 
    // A_0 | A_? | _B? | B_?  
    // CASE 3B: 
    // A_? | A_0 | _B? | B_?  
    /**
     * Finds and returns all roots of the given polynomial within the given
     * intervals, starting from the lower bound (lb) and ending at the upper
     * bound (ub) as fetched from the closure.
     *
     * * **precondition** intervals should be disjoint, i.e endpoints are not allowed
     * to be equal - it must be that a_ !== _b
     * * **precondition** the curve must be monotone increasing or decreasing between
     * b_ and _a AND a_ and _b
     * * **precondition** the value at the lower bound (LB) and upper bound (UB)
     * must !== 0
     *
     * @internal
     *
     * @param curP_ a polynomial given as an array with each consecutive element of
     * the array having more accurate coefficients than the previous (by adding
     * consecutive double precision coefficients to prior coefficients)
     * @param is the micro-intervals
     */
    function getRootsWithin() {
        const roots = [];
        // If there are no micro-intervals then check the interval between lb and ub.
        const LB = all_roots_certified_evalAdaptive(curP_, curPE, lb, getPolyExact);
        if (!is.length) {
            // close even root not possible
            const UB = all_roots_certified_evalAdaptive(curP_, curPE, ub, getPolyExact);
            if (LB * UB >= 0) {
                return [];
            }
            const [tS, tE] = all_roots_certified_refineCertified(curP_, curPE, lb, ub, LB, UB, getPolyExact /*, δ*/);
            return [{ tS, tE, multiplicity: 1 }];
        }
        //---- First check from lb to the left side of the first micro-interval.
        let _a = is[0].tS;
        let _A = all_roots_certified_evalAdaptive(curP_, curPE, _a, getPolyExact);
        if (LB * _A > 0) {
            // no roots possible (curve is monotone increasing or decreasing)
        }
        else if (LB * _A < 0) {
            // recall LB must !== 0 as a precondition
            const [tS, tE] = all_roots_certified_refineCertified(curP_, curPE, lb, _a, LB, _A, getPolyExact /*, δ*/);
            roots.push({ tS, tE, multiplicity: 1 });
        } //else {
        // _A === 0
        // no roots possible in [lb,_a]
        //}
        let a_ = lb;
        let A_ = LB;
        let _b = _a;
        let _B = _A;
        let a;
        for (let i = 0; i < is.length; i++) {
            const i_ = is[i + 1]; // right micro-interval
            a = is[i];
            _a = _b;
            a_ = is[i].tE;
            _b = i_ ? i_.tS : ub;
            const B_ = A_;
            _A = _B;
            A_ = all_roots_certified_evalAdaptive(curP_, curPE, a_, getPolyExact);
            _B = all_roots_certified_evalAdaptive(curP_, curPE, _b, getPolyExact);
            if (_A * A_ > 0) {
                //---- CASE 1: _A⇑ | A_⇑   OR   _A⇓ | A_⇓
                if (A_ * _B > 0) {
                    //---- CASE 1A: _A⇑ | A_⇑ | _B⇑   OR   _A⇓ | A_⇓ | _B⇓
                    //console.log('CASE 1A');
                    if (a_ !== _a && a.multiplicity % 2 === 1) {
                        checkEvenAA();
                    }
                    // [a_,_b] → no root
                }
                else if (A_ * _B < 0) {
                    //---- CASE 1B: _A⇑ | A_⇑ | _B⇓   OR   _A⇓ | A_⇓ | _B⇑
                    //console.log('CASE 1B');
                    // we cannot exclude this case as their may be even 
                    // multiplicity >= 4 roots; we would've been able if we
                    // knew that a.multiplicity === 1 exactly and thus the code
                    // could still be improved slightly
                    if (a_ !== _a && a.multiplicity % 2 === 1) {
                        checkEvenAA();
                    }
                    // [a_,_b] → single root (curve is monotone increasing or decreasing)
                    const [tS, tE] = all_roots_certified_refineCertified(curP_, curPE, a_, _b, A_, _B, getPolyExact /*, δ*/);
                    roots.push({ tS, tE, multiplicity: 1 });
                }
                else { // _B === 0
                    //---- CASE 1C: _A⇑ | A_⇑ | _B0   OR   _A⇓ | A_⇓ | _B0
                    //console.log('CASE 1C');
                    // we cannot exclude this case as their may be even 
                    // multiplicity >= 4 roots; we would've been able if we
                    // knew that a.multiplicity === 1 exactly and thus the code
                    // could still be improved slightly
                    if (a_ !== _a && a.multiplicity % 2 === 1) {
                        checkEvenAA();
                    }
                    // [a_,_b] → no root
                }
            }
            else if (_A * A_ < 0) {
                //---- CASE 2 _A⇑ | A_⇓   OR   _A⇓ | A_⇑
                //console.log('CASE 2');
                // - [_a,a_] → odd root(s)
                roots.push({ tS: a.tS, tE: a.tE, multiplicity: 3 });
                if (A_ * _B < 0) {
                    //---- CASE 2A: _A⇑ | A_⇓ | _B⇑   OR   _A⇓ | A_⇑ | _B⇓
                    //console.log('CASE 2A');
                    // [a_,_b] → single root
                    const [tS, tE] = all_roots_certified_refineCertified(curP_, curPE, a_, _b, A_, _B, getPolyExact /*, δ*/);
                    roots.push({ tS, tE, multiplicity: 1 });
                }
                else if (A_ * _B > 0) {
                    //---- CASE 2B: _A⇑ | A_⇓ | _B⇓   OR   _A⇓ | A_⇑ | _B⇑
                    //console.log('CASE 2B');
                    // [a_,_b] → no roots
                }
                else { // _B === 0
                    //console.log('CASE 2C');
                    // [a_,_b] → no roots
                }
            }
            else if (A_ === 0) {
                //---- CASE 3A A_0
                //console.log('CASE 3A');
                // [_a,a_] → rational root at a_
                // There cannot be a root between a_ and _b since _B !== 0
                if ( /*_a === a_ ||*/_A === 0) {
                    // multiple rational root at a_ OR both _A and A_ is 0
                    // so update multiplicity parity
                    roots.push({ tS: a.tS, tE: a.tE, multiplicity: a.multiplicity + 1 });
                }
                else {
                    // now _A and _B are both !== 0
                    if (_A * _B > 0) {
                        roots.push({ tS: a.tS, tE: a.tE, multiplicity: 2 });
                    }
                    else {
                        roots.push({ tS: a.tS, tE: a.tE, multiplicity: 3 });
                    }
                }
            }
            else { // _A === 0
                //---- CASE 3B _A0
                //console.log('CASE 3B');
                // A_ !== 0 here and _a !== a_
                // [_a,a_] → rational root at _a
                if (A_ * _B < 0) {
                    // [a_,_b] → single root
                    const [tS, tE] = all_roots_certified_refineCertified(curP_, curPE, a_, _b, A_, _B, getPolyExact /*, δ*/);
                    roots.push({ tS, tE, multiplicity: 1 });
                }
                else if (A_ * _B > 0) {
                    // [a_,_b] → no roots
                }
                // - [_a,a_] → 
                // B_ and A_ are both !== 0
                if (B_ * A_ > 0) {
                    roots.push({ tS: a.tS, tE: a.tE, multiplicity: 2 });
                }
                else {
                    roots.push({ tS: a.tS, tE: a.tE, multiplicity: 3 });
                }
            }
        }
        // Combine the root intervals if they are adjacent (they are not 
        // allowed to overlap)
        for (let i = 0; i < roots.length - 1; i++) {
            const r = roots[i];
            const r_ = roots[i + 1];
            if (r.tE >= r_.tS) {
                return joinRoots(roots);
            }
        }
        return roots;
        /**
         * Calculates and returns max 2nd derivative - calculated using something
         * akin to a Taylor expansion - could be improved by not taking absolute
         * values, but rather minimum mins. and maximum max values of f(s)?.
         * maxDdP = |f(s)| + δ|f'(s)| + δ^2|f''(s)| + ..., where δ = (a_ - _a),
         * s = _a and f is the second derivative of the current polynomial. We can
         * also potentially short circuit the maxDdP calculation after some terms,
         * the point being there are very likely many optimizations that can still
         * be done.
         *
         * @internal
         */
        function checkEvenAA() {
            //This was the old method when the function only supported lb = 0, ub = 1
            //-----------------------------------------------------------------------
            //const ddP0 = diffCount+2 > deg ? undefined : ps_[diffCount+2][0];
            //const maxDdP2 = 0;
            //for (const j=0; j<ddP0.length; j++) {
            //	// evaluate at 1
            //	maxDdP2 += abs(ddP0[j]);  // this is valid only if |lb| and |ub| <= 1
            //}
            const d = (a_ - _a) * onePlusEps;
            let mult = 1;
            let maxDdP = 0;
            for (let ddDiffCount = diffCount + 2; ddDiffCount <= deg; ddDiffCount++) {
                const p = ps_[ddDiffCount][0];
                const h = all_roots_certified_hornerWithRunningError(p, _a);
                const fs = all_roots_certified_abs(h[0]) + h[1];
                maxDdP += fs * mult;
                mult *= d * onePlusEps;
            }
            // maxDdP is now calculated
            const AMinMax = A_ > 0 ? min(_A, A_) : all_roots_certified_max(_A, A_);
            const δ = 2 * Number.EPSILON * all_roots_certified_max(1, all_roots_certified_abs(a_));
            const dMax = maxDdP * (2 * δ); // since the first derivative === 0 somewhere in [_a,a_]
            const yShift = A_ > 0 ? -dMax * 2 * δ : dMax * 2 * δ;
            const y = AMinMax + yShift;
            if (y * A_ < 0) {
                // possible even multiplicity root
                //console.log('A_, yShift', A_, yShift);
                //console.log(toCasStr(ps_[0][0]));
                //console.log('possible even multiplicty root: ', _a, a_);
                // The below multiplicity can really be any non-negative 
                // multiple of 2
                roots.push({ tS: a.tS, tE: a.tE, multiplicity: 2 });
            }
        }
    }
}
function joinRoots(rs) {
    const newRs = [];
    const r = rs[0];
    // make a clone of the first interval
    let curR = { tS: r.tS, tE: r.tE, multiplicity: r.multiplicity };
    for (let i = 0; i < rs.length - 1; i++) {
        const r = rs[i];
        const r_ = rs[i + 1];
        if (r.tE < r_.tS) {
            // they don't stick together
            newRs.push(curR);
            // make a clone of the next interval
            curR = { tS: r_.tS, tE: r_.tE, multiplicity: r_.multiplicity };
        }
        else {
            // they stick together - expand
            curR.tE = r_.tE;
            curR.multiplicity = r.multiplicity + r_.multiplicity;
        }
    }
    newRs.push(curR);
    return newRs;
}

//# sourceMappingURL=all-roots-certified.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/roots/certified/all-roots-certified-simplified.js

function allRootsCertifiedSimplified(p, lb = Number.NEGATIVE_INFINITY, ub = Number.POSITIVE_INFINITY, returnUndefinedForZeroPoly) {
    return allRootsCertified(p.map(c => [0, c]), lb, ub, undefined, undefined, returnUndefinedForZeroPoly);
}

//# sourceMappingURL=all-roots-certified-simplified.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/to-power-basis/to-power-basis-1st-derivative/double/to-power-basis-1st-derivative.js
/**
 * Returns the derivative of the power basis representation of a
 * bezier curve of order cubic or less (with intermediate calculations done in
 * double precision).
 *
 * * returns the resulting power basis x and y coordinate polynomials from
 * highest power to lowest, e.g. if `x(t) = at^2 + bt + c`
 * and `y(t) = dt^2 + et + f` then  the result is returned
 * as `[[a,b,c],[d,e,f]]`
 *
 * @param ps an order 0,1,2 or 3 bezier curve given by an ordered array of its
 * control points, e.g. `[[0,0],[1,1],[2,1],[2,0]]`
 *
 * @doc
 */
function toPowerBasis_1stDerivative(ps) {
    if (ps.length === 4) {
        return toPowerBasis3_1stDerivative(ps);
    }
    if (ps.length === 3) {
        return toPowerBasis2_1stDerivative(ps);
    }
    if (ps.length === 2) {
        return toPowerBasis1_1stDerivative(ps);
    }
    if (ps.length === 1) {
        return [[0], [0]];
    }
    throw new Error('The bezier curve must be of order <= 3.');
}
/** @internal */
function toPowerBasis3_1stDerivative(ps) {
    const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;
    return [[
            3 * ((x3 - x0) + 3 * (x1 - x2)),
            6 * ((x2 + x0) - 2 * x1),
            3 * (x1 - x0)
        ], [
            3 * ((y3 - y0) + 3 * (y1 - y2)),
            6 * ((y2 + y0) - 2 * y1),
            3 * (y1 - y0)
        ]];
}
/** @internal */
function toPowerBasis2_1stDerivative(ps) {
    const [[x0, y0], [x1, y1], [x2, y2]] = ps;
    return [[
            2 * ((x2 + x0) - 2 * x1),
            2 * (x1 - x0)
        ], [
            2 * ((y2 + y0) - 2 * y1),
            2 * (y1 - y0)
        ]];
}
/** @internal */
function toPowerBasis1_1stDerivative(ps) {
    const [[x0, y0], [x1, y1]] = ps;
    return [[
            x1 - x0
        ], [
            y1 - y0
        ]];
}

//# sourceMappingURL=to-power-basis-1st-derivative.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/local-properties-at-t/evaluate/double/eval-de-casteljau.js
/**
 * Returns the resulting point of evaluating the given bezier curve at the
 * given parameter `t`.
 *
 * * uses [De Casteljau's algorithm](https://en.wikipedia.org/wiki/De_Casteljau%27s_algorithm)
 * in double precision floating point arithmetic
 *
 * The resulting point `p` is returned as the pair `[x,y]`, where `x` and `y` are
 * double precision floating point numbers.
 *
 * @param ps an order 1,2 or 3 bezier curve, e.g. `[[0,0],[1,1],[2,1],[2,0]]`
 * @param t the parameter value where the bezier should be evaluated
 *
 * @doc mdx
 **/
function evalDeCasteljau(ps, t) {
    if (t === 0) {
        return ps[0];
    }
    else if (t === 1) {
        return ps[ps.length - 1];
    }
    if (ps.length === 4) {
        const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;
        const a01 = x0 + (x1 - x0) * t;
        const a11 = x1 + (x2 - x1) * t;
        const a21 = x2 + (x3 - x2) * t;
        const a02 = a01 + (a11 - a01) * t;
        const a12 = a11 + (a21 - a11) * t;
        const x = a02 + (a12 - a02) * t;
        const b01 = y0 + (y1 - y0) * t;
        const b11 = y1 + (y2 - y1) * t;
        const b21 = y2 + (y3 - y2) * t;
        const b02 = b01 + (b11 - b01) * t;
        const b12 = b11 + (b21 - b11) * t;
        const y = b02 + (b12 - b02) * t;
        return [x, y];
    }
    if (ps.length === 3) {
        const [[x0, y0], [x1, y1], [x2, y2]] = ps;
        const a01 = x0 + (x1 - x0) * t;
        const a11 = x1 + (x2 - x1) * t;
        const x = a01 + (a11 - a01) * t;
        const b01 = y0 + (y1 - y0) * t;
        const b11 = y1 + (y2 - y1) * t;
        const y = b01 + (b11 - b01) * t;
        return [x, y];
    }
    if (ps.length === 2) {
        const [[x0, y0], [x1, y1]] = ps;
        const x = x0 + (x1 - x0) * t;
        const y = y0 + (y1 - y0) * t;
        return [x, y];
    }
    if (ps.length === 1) {
        return ps[0];
    }
    throw new Error('The given bezier curve must be of order <= 3.');
}

//# sourceMappingURL=eval-de-casteljau.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/local-properties-at-t/evaluate/eval-de-casteljau-error.js
const eval_de_casteljau_error_abs = Math.abs;
/**
 * Returns a representation of the error (from which an absolute error bound
 * can be calculated) when evaluating the given bezier curve at the parameter `t`
 * using [De Casteljau's algorithm](https://en.wikipedia.org/wiki/De_Casteljau%27s_algorithm).
 *
 * The returned error representation needs to be multiplied with
 * [Stewart error counters¹](https://www.amazon.ca/Introduction-Matrix-Computations-G-Stewart/dp/0126703507)
 * and an appropriate error function, `γ`, depending on the precision used (e.g. double
 * or double-double). This is explained in more detail below. See
 * also [Higham 2002](http://ftp.demec.ufpr.br/CFD/bibliografia/Higham_2002_Accuracy%20and%20Stability%20of%20Numerical%20Algorithms.pdf)
 * p. 68 near the bottom.
 *
 * (1) G. W. Stewart. Introduction to Matrix Computations. Academic Press, New York,
 *  1973. xiii+441 pp. ISBN 0-12-670350-7
 *
 * The absolute erros below can be calculated as follows (where `<E>` are the
 * error counters as indicated in the comments of the return value below):
 *  * double precision: `<E> * (γ(1)) * result_`
 *  * double-double precision: `<E> * (2*γγ(3)) * result_`
 *
 * where [[γ]] and [[γγ]] are the usual error functions with `γ(1) === 1.1102230246251568e-16`
 * and `γγ(3) === 3.697785493223493e-32`.
 * The `T` in the error counter formula is the input error given as an error
 * counter on `t`. For example, if the exact `t` (let's call it `te`) is bounded
 * by `(|t| - 5u) < |te| < (|t| + 5u)` where `u === Number.EPSILON/2` then `T`
 * should be given as `5`. If `t` is exact then `T` is zero.
 *
 * ```
 * // for cubic bezier curves
 * return [
 * 	x_,  // <E> === 3T + 9
 * 	y_   // <E> === 3T + 9
 * ];
 * // for quadratic bezier curves
 * return [
 * 	x_,  // <E> === 2T + 6
 * 	y_   // <E> === 2T + 6
 * ];
 * // for linear bezier curves (i.e. lines)
 * return [
 * 	x_,  // <E> === T + 3
 * 	y_   // <E> === T + 3
 * ];
 * ```
 *
 * @param ps an order 0,1,2 or 3 bezier curve given by an ordered array of its
 * control points, e.g. `[[0,0],[1,1],[2,1],[2,0]]`
 * @param t the parameter value where the bezier should be evaluated (given in
 * double-double precision)
 *
 * @example
 * ```typescript
 * const ps = [[1.1,1.1],[2.3,2.3],[0.7,2.1],[3.11,-1.27]];  // some cubic bezier curve
 * const t = [0,0.1];  // some `t` in double-double precision, i.e. `t` equals `0.1`
 * const r = evalDeCasteljau(ps, t[1]) //=> [1.3828099999999999, 1.41623]
 * let error = evalDeCasteljauError(ps,t); //=> [2.32521, 2.3695700000000004]
 * const γ1 = 1*(Number.EPSILON)/(1-1*(Number.EPSILON));  // this is the error constant for double precision
 * error = error.map(c => γ1*c); //=> [5.163003358177322e-16, 5.261502344922066e-16]
 * // so, for instance, the *real* x coordinate of the point, i.e. `r[0]`, is somewhere between
 * // `1.3828099999999999 - 5.163003358177322e-16` and `1.3828099999999999 + 5.163003358177322e-16`, i.e.
 * // `1.3828099999999994 < r[0] < 1.3828100000000003`
 * ```
 *
 * @internal
 **/
function evalDeCasteljauError(ps, t) {
    if (t[0] === 0 && t[1] === 0) {
        return [0, 0]; // No error
    }
    else if (t[0] === 0 && t[1] === 1) {
        return [0, 0]; // No error
    }
    const t_ = eval_de_casteljau_error_abs(t[1]); // <T>
    // <M> --> the cost of multiplication === <1> except for `qmq` in which
    // case it is <2>. One might as well just double the error in the end for
    // double-double precision calculations (thus losing 1 bit) and take 
    // <M> === 1 always. This simplifies the calculation a bit.
    if (ps.length === 4) {
        const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;
        const _x0 = eval_de_casteljau_error_abs(x0); // <0>
        const _y0 = eval_de_casteljau_error_abs(y0); // <0>
        const _x1 = eval_de_casteljau_error_abs(x1); // <0>
        const _y1 = eval_de_casteljau_error_abs(y1); // <0>
        const _x2 = eval_de_casteljau_error_abs(x2); // <0>
        const _y2 = eval_de_casteljau_error_abs(y2); // <0>
        const _x3 = eval_de_casteljau_error_abs(x3); // <0>
        const _y3 = eval_de_casteljau_error_abs(y3); // <0>
        // a01<T+3> <-- <T+3>(x0 + <T+2>(<1>(x1 + x0)*<T>t));
        const a01_ = _x0 + (_x1 + _x0) * t_;
        // a11<T+3> <-- <T+3>(x1 + <1>(<0>(x2 + x1)*<T>t));
        const a11_ = _x1 + (_x2 + _x1) * t_;
        // a21<T+3> <-- <T+3>(x2 + <1>(<0>(x3 + x2)*<T>t));
        const a21_ = _x2 + (_x3 + _x2) * t_;
        // a02<2T+6> <-- <2T+6>(<T+3>a01 + <2T+5>(<T+4>(<T+3>a11 + <T+3>a01)*<T>t));
        const a02_ = a01_ + (a11_ + a01_) * t_;
        // a12<2T+6> <-- <2T+6>(<T+3>a11 + <2T+5>(<T+4>(<T+3>a21 + <T+3>a11)*<T>t));
        const a12_ = a11_ + (a21_ + a11_) * t_;
        // x<3T+9> <-- <3T+9>(<2T+6>a02 + <3T+8>(<2T+7>(<2T+6>a12 + <2T+6>a02)*<T>t));
        const x_ = a02_ + (a12_ + a02_) * t_;
        const b01_ = _y0 + (_y1 + _y0) * t_;
        const b11_ = _y1 + (_y2 + _y1) * t_;
        const b21_ = _y2 + (_y3 + _y2) * t_;
        const b02_ = b01_ + (b11_ + b01_) * t_;
        const b12_ = b11_ + (b21_ + b11_) * t_;
        const y_ = b02_ + (b12_ + b02_) * t_;
        return [x_, y_];
    }
    if (ps.length === 3) {
        const [[x0, y0], [x1, y1], [x2, y2]] = ps;
        const _x0 = eval_de_casteljau_error_abs(x0);
        const _y0 = eval_de_casteljau_error_abs(y0);
        const _x1 = eval_de_casteljau_error_abs(x1);
        const _y1 = eval_de_casteljau_error_abs(y1);
        const _x2 = eval_de_casteljau_error_abs(x2);
        const _y2 = eval_de_casteljau_error_abs(y2);
        // <T+3>a01 <-- <T+3>(x0 + <T+2>(<1>(x1 + x0)*<T>t));
        const a01_ = _x0 + (_x1 + _x0) * t_;
        // <T+3>a11 <-- <T+3>(x1 + <T+2>(<1>(x2 + x1)*<T>t));
        const a11_ = _x1 + (_x2 + _x1) * t_;
        // <2T+6>x <-- <2T+6>(<T+3>a01 + <2T+5>(<T+4>(<T+3>a11 + <T+3>a01)*<T>t));
        const x_ = a01_ + (a11_ + a01_) * t_;
        const b01_ = _y0 + (_y1 + _y0) * t_;
        const b11_ = _y1 + (_y2 + _y1) * t_;
        const y_ = b01_ + (b11_ + b01_) * t_;
        return [x_, y_];
    }
    if (ps.length === 2) {
        const [[x0, y0], [x1, y1]] = ps;
        const _x0 = eval_de_casteljau_error_abs(x0);
        const _y0 = eval_de_casteljau_error_abs(y0);
        const _x1 = eval_de_casteljau_error_abs(x1);
        const _y1 = eval_de_casteljau_error_abs(y1);
        // <T+3>x = <T+3>(x0 + <T+2>(<1>(x1 + x0)*<T>t));
        const x_ = _x0 + (_x1 + _x0) * t_;
        const y_ = _y0 + (_y1 + _y0) * t_;
        return [x_, y_];
    }
    if (ps.length === 1) {
        return [0, 0];
    }
    throw new Error('The given bezier curve must be of order <= 3.');
}

//# sourceMappingURL=eval-de-casteljau-error.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/error-analysis/error-analysis.js
const error_analysis_u = Number.EPSILON / 2;
const error_analysis_uu = error_analysis_u * error_analysis_u;
/** @internal */
function error_analysis_(n) {
    const nu = n * error_analysis_u;
    return nu / (1 - nu);
}
/** @internal */
function error_analysis_error_analysis_(n) {
    const nuu = n * error_analysis_uu;
    return nuu / (1 - nuu);
}

error_analysis_(1); //=> 1.1102230246251568e-16
error_analysis_error_analysis_(3); //=> 3.697785493223493e-32
//# sourceMappingURL=error-analysis.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/transformation/split/from-to/from-to-3-incl-error-bound.js
const from_to_3_incl_error_bound_abs = Math.abs;
/** error free error bounds */
const psErrorFree = [[0, 0], [0, 0], [0, 0], [0, 0]];
/**
 * Returns a bezier curve that starts and ends at the given t parameters
 * including an error bound (that needs to be multiplied by `9u`, where
 * `u === Number.EPSILON/2`).
 *
 * @param ps a cubic bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 * @param tS the `t` parameter where the resultant bezier should start
 * @param tE the `t` parameter where the resultant bezier should end
 *
 * @internal
 */
function fromTo3InclErrorBound(ps, tS, tE) {
    if (tS === 0) {
        if (tE === 1) {
            return { ps, _ps: psErrorFree };
        }
        return splitLeft3(ps, tE);
    }
    if (tE === 1) {
        return splitRight3(ps, tS);
    }
    return splitAtBoth3(ps, tS, tE);
}
/**
 * Returns a bezier curve that starts at the given t parameter and ends
 * at `t === 1` including an error bound (that needs to be multiplied
 * by `9u`, where `u === Number.EPSILON/2`).
 *
 * @param ps a cubic bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 * @param t the `t` parameter where the resultant bezier should start
 *
 * @internal
 */
function splitRight3(ps, t) {
    // --------------------------------------------------------
    // const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps; 
    const p0 = ps[0];
    const p1 = ps[1];
    const p2 = ps[2];
    const p3 = ps[3];
    const x00 = p0[0];
    const y00 = p0[1];
    const x10 = p1[0];
    const y10 = p1[1];
    const x20 = p2[0];
    const y20 = p2[1];
    const x30 = p3[0];
    const y30 = p3[1];
    // --------------------------------------------------------
    // error bound using counters <k>:
    // counter rules:
    //   1. <k>a + <l>b = <max(k,l) + 1>(a + b)
    //   2. <k>a<l>b = <k + l + 1>ab
    //   3. fl(a) === <1>a
    const x01 = x00 - t * (x00 - x10);
    const x11 = x10 - t * (x10 - x20);
    const x21 = x20 - t * (x20 - x30);
    const x02 = x01 - t * (x01 - x11);
    const x12 = x11 - t * (x11 - x21);
    const x03 = x02 - t * (x02 - x12);
    const y01 = y00 - t * (y00 - y10);
    const y11 = y10 - t * (y10 - y20);
    const y21 = y20 - t * (y20 - y30);
    const y02 = y01 - t * (y01 - y11);
    const y12 = y11 - t * (y11 - y21);
    const y03 = y02 - t * (y02 - y12);
    // -----------------------
    // Calculate error bounds
    // -----------------------
    const _t = from_to_3_incl_error_bound_abs(t);
    const _x00 = from_to_3_incl_error_bound_abs(x00);
    const _x10 = from_to_3_incl_error_bound_abs(x10);
    const _x20 = from_to_3_incl_error_bound_abs(x20);
    const _x30 = from_to_3_incl_error_bound_abs(x30);
    const _y00 = from_to_3_incl_error_bound_abs(y00);
    const _y10 = from_to_3_incl_error_bound_abs(y10);
    const _y20 = from_to_3_incl_error_bound_abs(y20);
    const _y30 = from_to_3_incl_error_bound_abs(y30);
    const _x01 = _x00 + _t * (_x00 + _x10); // <3>x01 = <3>(x00 - <2>(t*<1>(x00 - x10)))
    const _x11 = _x10 + _t * (_x10 + _x20); // <3>x11
    const _x21 = _x20 + _t * (_x20 + _x30); // <3>x21
    const _x02 = _x01 + _t * (_x01 + _x11); // <6>x02 = <6>(x01 - <5>(t*<4>(<3>x01 - <3>x11)))
    const _x12 = _x11 + _t * (_x11 + _x21); // <6>x12
    const _x03 = _x02 + _t * (_x02 + _x12); // <9>x03 = <9>(x02 - <8>(t*<7>(<6>x02 - <6>x12)))
    const _y01 = _y00 + _t * (_y00 + _y10);
    const _y11 = _y10 + _t * (_y10 + _y20);
    const _y21 = _y20 + _t * (_y20 + _y30);
    const _y02 = _y01 + _t * (_y01 + _y11);
    const _y12 = _y11 + _t * (_y11 + _y21);
    const _y03 = _y02 + _t * (_y02 + _y12);
    return {
        ps: [[x03, y03], [x12, y12], [x21, y21], [x30, y30]],
        _ps: [
            // the coordinate-wise error bounds
            [_x03, _y03],
            [_x12, _y12],
            [_x21, _y21],
            [0, 0] // [0, 0],
        ]
    };
}
/**
 * Returns a bezier curve that starts at `t === 0` and ends at the given t
 * parameter including an error bound (that needs to be multiplied by `9u`, where
 * `u === Number.EPSILON/2`).
 *
 * @param ps a cubic bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 * @param t the `t` parameter where the resultant bezier should end
 *
 * @internal
 */
function splitLeft3(ps, t) {
    // --------------------------------------------------------
    // const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps; 
    const p0 = ps[0];
    const p1 = ps[1];
    const p2 = ps[2];
    const p3 = ps[3];
    const x00 = p0[0];
    const y00 = p0[1];
    const x10 = p1[0];
    const y10 = p1[1];
    const x20 = p2[0];
    const y20 = p2[1];
    const x30 = p3[0];
    const y30 = p3[1];
    // --------------------------------------------------------
    // error bound using counters <k>:
    // counter rules:
    //   1. <k>a + <l>b = <max(k,l) + 1>(a + b)
    //   2. <k>a<l>b = <k + l + 1>ab
    //   3. fl(a) === <1>a
    const x01 = x00 - t * (x00 - x10);
    const x11 = x10 - t * (x10 - x20);
    const x21 = x20 - t * (x20 - x30);
    const x02 = x01 - t * (x01 - x11);
    const x12 = x11 - t * (x11 - x21);
    const x03 = x02 - t * (x02 - x12);
    const y01 = y00 - t * (y00 - y10);
    const y11 = y10 - t * (y10 - y20);
    const y21 = y20 - t * (y20 - y30);
    const y02 = y01 - t * (y01 - y11);
    const y12 = y11 - t * (y11 - y21);
    const y03 = y02 - t * (y02 - y12);
    // -----------------------
    // Calculate error bounds
    // -----------------------
    const _t = from_to_3_incl_error_bound_abs(t);
    const _x00 = from_to_3_incl_error_bound_abs(x00);
    const _x10 = from_to_3_incl_error_bound_abs(x10);
    const _x20 = from_to_3_incl_error_bound_abs(x20);
    const _x30 = from_to_3_incl_error_bound_abs(x30);
    const _y00 = from_to_3_incl_error_bound_abs(y00);
    const _y10 = from_to_3_incl_error_bound_abs(y10);
    const _y20 = from_to_3_incl_error_bound_abs(y20);
    const _y30 = from_to_3_incl_error_bound_abs(y30);
    const _x01 = _x00 + _t * (_x00 + _x10); // <3>x01 = <3>(x00 - <2>(t*<1>(x00 - x10)))
    const _x11 = _x10 + _t * (_x10 + _x20); // <3>x11
    const _x21 = _x20 + _t * (_x20 + _x30); // <3>x21
    const _x02 = _x01 + _t * (_x01 + _x11); // <6>x02 = <6>(x01 - <5>(t*<4>(<3>x01 - <3>x11)))
    const _x12 = _x11 + _t * (_x11 + _x21); // <6>x12
    const _x03 = _x02 + _t * (_x02 + _x12); // <9>x03 = <9>(x02 - <8>(t*<7>(<6>x02 - <6>x12)))
    const _y01 = _y00 + _t * (_y00 + _y10);
    const _y11 = _y10 + _t * (_y10 + _y20);
    const _y21 = _y20 + _t * (_y20 + _y30);
    const _y02 = _y01 + _t * (_y01 + _y11);
    const _y12 = _y11 + _t * (_y11 + _y21);
    const _y03 = _y02 + _t * (_y02 + _y12);
    return {
        ps: [[x00, y00], [x01, y01], [x02, y02], [x03, y03]],
        _ps: [
            // the coordinate-wise error bounds
            [0, 0],
            [_x01, _y01],
            [_x02, _y02],
            [_x03, _y03] // [9*u*_x03, 9*u*_y03]
        ]
    };
}
/**
 * Returns a bezier curve that starts and ends at the given `t` parameters
 * including an error bound (that needs to be multiplied by `8u`, where
 * `u === Number.EPSILON/2`).
 *
 * @param ps a cubic bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 * @param tS the `t` parameter where the resultant bezier should start
 * @param tE the `t` parameter where the resultant bezier should end
 *
 * @internal
 */
function splitAtBoth3(ps, tS, tE) {
    // --------------------------------------------------------
    // const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps; 
    const p0 = ps[0];
    const p1 = ps[1]; // exact
    const p2 = ps[2];
    const p3 = ps[3]; // exact
    const x0 = p0[0];
    const y0 = p0[1]; // exact
    const x1 = p1[0];
    const y1 = p1[1]; // exact
    const x2 = p2[0];
    const y2 = p2[1]; // exact
    const x3 = p3[0];
    const y3 = p3[1]; // exact
    // --------------------------------------------------------
    // error bound using counters <k>:
    // counter rules:
    //   1. <k>a + <l>b = <max(k,l) + 1>(a + b)
    //   2. <k>a<l>b = <k + l + 1>ab
    //   3. fl(a) === <1>a
    const ttS = tS * tS; // <1>ttS  <= <0>tS<0>tS   (by counter rule 2)
    const tttS = tS * ttS; // <2>tttS <= <0>tS<1>ttS  (again by counter rule 2)
    const ttE = tE * tE; // ...
    const tttE = tE * ttE; // ...
    const tStE = tS * tE; // <1>tStE
    const xA = x0 - x1; // <1>xA
    const xB = x2 - x1; // <1>xB
    const xC = x3 - x0; // <1>xC
    const xD = xA + xB; // <2>xD
    const tSxA = tS * xA; // <2>tSxA
    const tExA = tE * xA; // <2>tExA
    const xC3xB = xC - 3 * xB; // <3>xC3xB = <3>(<1>xC - <2>(3*<1>xB))
    const yA = y0 - y1;
    const yB = y2 - y1;
    const yC = y3 - y0;
    const yD = yA + yB;
    const tSyA = tS * yA;
    const tEyA = tE * yA;
    const yC3yB = yC - 3 * yB;
    const xx0 = tttS * xC3xB + (3 * tS * (tS * xD - xA) + x0);
    const xx1 = tStE * (tS * xC3xB + 2 * xD) + ((ttS * xD + x0) - (tExA + 2 * tSxA));
    const xx2 = tStE * (tE * xC3xB + 2 * xD) + ((ttE * xD + x0) - (2 * tExA + tSxA));
    const xx3 = tttE * xC3xB + (3 * tE * (tE * xD - xA) + x0);
    const yy0 = tttS * yC3yB + (3 * tS * (tS * yD - yA) + y0);
    const yy1 = tStE * (tS * yC3yB + 2 * yD) + ((ttS * yD + y0) - (tEyA + 2 * tSyA));
    const yy2 = tStE * (tE * yC3yB + 2 * yD) + ((ttE * yD + y0) - (2 * tEyA + tSyA));
    const yy3 = tttE * yC3yB + (3 * tE * (tE * yD - yA) + y0);
    // ----------------------------------------------
    // Calculate error bounds
    // ----------------------------------------------
    const _tS = from_to_3_incl_error_bound_abs(tS);
    const _tE = from_to_3_incl_error_bound_abs(tE);
    const _tStE = from_to_3_incl_error_bound_abs(tStE);
    const _tttS = from_to_3_incl_error_bound_abs(tttS);
    const _tttE = from_to_3_incl_error_bound_abs(tttE);
    const _x0 = from_to_3_incl_error_bound_abs(x0);
    const _x1 = from_to_3_incl_error_bound_abs(x1);
    const _x2 = from_to_3_incl_error_bound_abs(x2);
    const _xA = _x0 + _x1;
    const _xB = _x2 + _x1;
    const _xD = _xA + _xB;
    const _tSxA = _tS * _xA;
    const _tExA = _tE * _xA;
    const _xC3xB = from_to_3_incl_error_bound_abs(xC) + 3 * _xB;
    const _y0 = from_to_3_incl_error_bound_abs(y0);
    const _y1 = from_to_3_incl_error_bound_abs(y1);
    const _y2 = from_to_3_incl_error_bound_abs(y2);
    const _yA = _y0 + _y1;
    const _yB = _y2 + _y1;
    const _yD = _yA + _yB;
    const _tSyA = _tS * _yA;
    const _tEyA = _tE * _yA;
    const _yC3yB = from_to_3_incl_error_bound_abs(yC) + 3 * _yB;
    // <8>xx0 = <8>(<6>(<2>tttS*<3>xC3xB) + <7>(<6>(<1>(3*tS)*(<4>(<3>(tS*<2>xD) - <1>xA))) + x0));
    const _xx0 = _tttS * _xC3xB + (3 * _tS * (_tS * _xD + _xA) + _x0);
    // <7>xx1 = <7>(<6>(<1>tStE*<5>(<4>(tS*<3>xC3xB) + <2>(2*xD))) + <6>(<5>(<4>(<1>ttS*<2>xD) + x0) - <3>(<2>tExA + <2>(2*tSxA))));
    const _xx1 = _tStE * (_tS * _xC3xB + 2 * _xD) + ((ttS * _xD + _x0) + (_tExA + 2 * _tSxA));
    // <7>xx2 = <7>(<6>(<1>tStE*<5>(<4>(tE*<3>xC3xB) + <2>(2*xD))) + <6>(<5>(<4>(<1>ttE*<2>xD) + x0) - <3>(<2>(2*tExA) + <2>tSxA)));
    const _xx2 = _tStE * (_tE * _xC3xB + 2 * _xD) + ((ttE * _xD + _x0) + (2 * _tExA + _tSxA));
    // <8>xx3 = <8>(<6>(<2>tttE*<3>xC3xB) + <7>(<6>(<1>(3*tE)*(<4>(<3>(tE*<2>xD) - <1>xA))) + x0));
    const _xx3 = _tttE * _xC3xB + (3 * _tE * (_tE * _xD + _xA) + _x0);
    const _yy0 = _tttS * _yC3yB + (3 * _tS * (_tS * _yD + _yA) + _y0);
    const _yy1 = _tStE * (_tS * _yC3yB + 2 * _yD) + ((ttS * _yD + _y0) + (_tEyA + 2 * _tSyA));
    const _yy2 = _tStE * (_tE * _yC3yB + 2 * _yD) + ((ttE * _yD + _y0) + (2 * _tEyA + _tSyA));
    const _yy3 = _tttE * _yC3yB + (3 * _tE * (_tE * _yD + _yA) + _y0);
    return {
        ps: [[xx0, yy0], [xx1, yy1], [xx2, yy2], [xx3, yy3]],
        _ps: [
            [_xx0, _yy0],
            [_xx1, _yy1],
            [_xx2, _yy2],
            [_xx3, _yy3] // [8*u*_xx3, 8*u*_yy3]
        ]
    };
}

//# sourceMappingURL=from-to-3-incl-error-bound.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/transformation/split/from-to/from-to-2-incl-error-bound.js
const from_to_2_incl_error_bound_abs = Math.abs;
/** error free error bounds */
const from_to_2_incl_error_bound_psErrorFree = [[0, 0], [0, 0], [0, 0]];
/**
 * Returns a bezier curve that starts and ends at the given `t` parameters
 * including an error bound (that needs to be multiplied by `5u`, where
 * `u === Number.EPSILON/2`).
 *
 * @param ps a quadratic bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1]]`
 * @param tS the `t` parameter where the resultant bezier should start
 * @param tE the `t` parameter where the resultant bezier should end
 *
 * @internal
 */
function fromTo2InclErrorBound(ps, tS, tE) {
    if (tS === 0) {
        if (tE === 1) {
            return { ps, _ps: from_to_2_incl_error_bound_psErrorFree };
        }
        return splitLeft2(ps, tE);
    }
    if (tE === 1) {
        return splitRight2(ps, tS);
    }
    return splitAtBoth2(ps, tS, tE);
}
/**
 * Returns a bezier curve that starts at the given t parameter and ends
 * at `t === 1` including an error bound (that needs to be multiplied
 * by `5u`, where `u === Number.EPSILON/2`).
 *
 * @param ps a quadratic bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1]]`
 * @param t the `t` parameter where the resultant bezier should start
 *
 * @internal
 */
function splitRight2(ps, t) {
    // --------------------------------------------------------
    // const [[x0, y0], [x1, y1], [x2, y2]] = ps; 
    const p0 = ps[0]; // exact
    const p1 = ps[1]; // exact
    const p2 = ps[2]; // exact
    const x0 = p0[0];
    const y0 = p0[1]; // exact
    const x1 = p1[0];
    const y1 = p1[1]; // exact
    const x2 = p2[0];
    const y2 = p2[1]; // exact
    // --------------------------------------------------------
    // error bound using counters <k>:
    // counter rules:
    //   1. <k>a + <l>b = <max(k,l) + 1>(a + b)
    //   2. <k>a<l>b = <k + l + 1>ab
    //   3. fl(a) === <1>a
    const tt = t * t; // <1>tt  <= <0>t<0>t   (by counter rule 2)
    const xA = x0 - x1; // <1>xA
    const xB = x2 - x1; // <1>xB
    const yA = y0 - y1;
    const yB = y2 - y1;
    const psR = [
        [tt * (xA + xB) - (2 * t * xA - x0),
            tt * (yA + yB) - (2 * t * yA - y0)],
        [t * xB + x1,
            t * yB + y1],
        [x2,
            y2] // yy2
    ];
    // -----------------------
    // Calculate error bounds
    // -----------------------
    const _t = from_to_2_incl_error_bound_abs(t);
    const _x0 = from_to_2_incl_error_bound_abs(x0);
    const _x1 = from_to_2_incl_error_bound_abs(x1);
    const _x2 = from_to_2_incl_error_bound_abs(x2);
    const _xA = _x0 + _x1;
    const _xB = _x2 + _x1;
    const _y0 = from_to_2_incl_error_bound_abs(y0);
    const _y1 = from_to_2_incl_error_bound_abs(y1);
    const _y2 = from_to_2_incl_error_bound_abs(y2);
    const _yA = _y0 + _y1;
    const _yB = _y2 + _y1;
    // <5>xx0 <= <5>(<4>(<1>tt*<2>(<1>xA + <1>xB)) - <3>(<2>(2*t*<1>xA) - x0))
    const _xx0 = tt * (_xA + _xB) + (2 * _t * _xA + _x0);
    // <3>xx1 <= <3>(<2>(t*<1>xB) + x1)
    const _xx1 = _t * _xB + _x1;
    const _yy0 = tt * (_yA + _yB) + (2 * _t * _yA + _y0);
    const _yy1 = 0;
    /** the coordinate-wise error bound */
    //const psR_ = [
    //    [5*u*_xx0, 5*u*_yy0],
    //    [3*u*_xx1, 3*u*_yy1],
    //    [0, 0]
    //];
    const psR_ = [
        [_xx0, _yy0],
        [_xx1, _yy1],
        [0, 0]
    ];
    return {
        ps: psR,
        _ps: psR_
    };
}
/**
 * Returns a bezier curve that starts at `t === 0` and ends at the given `t`
 * parameter including an error bound (that needs to be multiplied by `5u`,
 * where `u === Number.EPSILON/2`).
 *
 * @param ps a quadratic bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1]]`
 * @param t the `t` parameter where the resultant bezier should end
 *
 * @internal
 */
function splitLeft2(ps, t) {
    // --------------------------------------------------------
    // const [[x0, y0], [x1, y1], [x2, y2]] = ps; 
    const p0 = ps[0]; // exact 
    const p1 = ps[1]; // exact
    const p2 = ps[2]; // exact
    const x0 = p0[0];
    const y0 = p0[1]; // exact
    const x1 = p1[0];
    const y1 = p1[1]; // exact
    const x2 = p2[0];
    const y2 = p2[1]; // exact
    // --------------------------------------------------------
    // error bound using counters <k>:
    // counter rules:
    //   1. <k>a + <l>b = <max(k,l) + 1>(a + b)
    //   2. <k>a<l>b = <k + l + 1>ab
    //   3. fl(a) === <1>a
    const tt = t * t; // <1>tt  <= <0>t<0>t   (by counter rule 2)
    const xA = x0 - x1; // <1>xA
    const yA = y0 - y1;
    const psL = [
        [x0,
            y0],
        [-t * xA + x0,
            -t * yA + y0],
        [tt * (xA + (x2 - x1)) - (2 * t * xA - x0),
            tt * (yA + (y2 - y1)) - (2 * t * yA - y0)] // yy2 - split point y
    ];
    // -----------------------
    // Calculate error bounds
    // -----------------------
    const _t = from_to_2_incl_error_bound_abs(t);
    const _x0 = from_to_2_incl_error_bound_abs(x0);
    const _x1 = from_to_2_incl_error_bound_abs(x1);
    const _x2 = from_to_2_incl_error_bound_abs(x2);
    const _xA = _x0 + _x1;
    const _y0 = from_to_2_incl_error_bound_abs(y0);
    const _y1 = from_to_2_incl_error_bound_abs(y1);
    const _y2 = from_to_2_incl_error_bound_abs(y2);
    const _yA = _y0 + _y1;
    // <3>xx1 <= <3>(<2>(-t*<1>xA) + x0)
    const _xx1 = _t * _xA + _x0;
    // <5>xx2 <= <5>(<4>(<1>tt*<2>(<1>xA + <1>(x2 - x1))) - <3>(<2>(2*t*<1>xA) - x0))
    const _xx2 = tt * (_xA + (_x2 + _x1)) + (2 * _t * _xA + _x0);
    const _yy1 = _t * _yA + _y0;
    const _yy2 = tt * (_yA + (_y2 + _y1)) + (2 * _t * _yA + _y0);
    /** the coordinate-wise error bound */
    //const psL_ = [
    //    [0, 0],
    //    [3*u*_xx1, 3*u*_yy1],
    //    [5*u*_xx2, 5*u*_yy2],
    //];
    const psL_ = [
        [0, 0],
        [_xx1, _yy1],
        [_xx2, _yy2]
    ];
    return {
        ps: psL,
        _ps: psL_
    };
}
/**
 * Returns a bezier curve that starts and ends at the given `t` parameters
 * including an error bound (that needs to be multiplied by `5u`, where
 * `u === Number.EPSILON/2`).
 *
 * @param ps a quadratic bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1]]`
 * @param tS the `t` parameter where the resultant bezier should start
 * @param tE the `t` parameter where the resultant bezier should end
 *
 * @internal
 */
function splitAtBoth2(ps, tS, tE) {
    // --------------------------------------------------------
    // const [[x0, y0], [x1, y1], [x2, y2]] = ps; 
    const p0 = ps[0]; // exact
    const p1 = ps[1]; // exact
    const p2 = ps[2]; // exact
    const x0 = p0[0];
    const y0 = p0[1]; // exact
    const x1 = p1[0];
    const y1 = p1[1]; // exact
    const x2 = p2[0];
    const y2 = p2[1]; // exact
    // --------------------------------------------------------
    // error bound using counters <k>:
    // counter rules:
    //   1. <k>a + <l>b = <max(k,l) + 1>(a + b)
    //   2. <k>a<l>b = <k + l + 1>ab
    //   3. fl(a) === <1>a
    const ttS = tS * tS; // <1>ttS  <= <0>tS<0>tS   (by counter rule 2)
    const ttE = tE * tE; // ...
    const tStE = tS * tE; // <1>tStE
    const xA = x0 - x1; // <1>xA
    const xB = x2 - x1; // <1>xB
    const xC = xA + xB; // <2>xC
    const yA = y0 - y1;
    const yB = y2 - y1;
    const yC = yA + yB;
    const xx0 = ttS * xC - (2 * tS * xA - x0);
    const xx1 = tStE * xC - (xA * (tE + tS) - x0);
    const xx2 = ttE * xC - (2 * tE * xA - x0);
    const yy0 = ttS * yC - (2 * tS * yA - y0);
    const yy1 = tStE * yC - (yA * (tE + tS) - y0);
    const yy2 = ttE * yC - (2 * tE * yA - y0);
    // -----------------------
    // Calculate error bounds
    // -----------------------
    const _tS = from_to_2_incl_error_bound_abs(tS);
    const _tE = from_to_2_incl_error_bound_abs(tE);
    const _tStE = from_to_2_incl_error_bound_abs(tStE);
    const _x0 = from_to_2_incl_error_bound_abs(x0);
    const _x1 = from_to_2_incl_error_bound_abs(x1);
    const _x2 = from_to_2_incl_error_bound_abs(x2);
    const _xA = _x0 + _x1;
    const _xC = _xA + _x2 + _x1;
    const _y0 = from_to_2_incl_error_bound_abs(y0);
    const _y1 = from_to_2_incl_error_bound_abs(y1);
    const _y2 = from_to_2_incl_error_bound_abs(y2);
    const _yA = _y0 + _y1;
    const _yC = _yA + _y2 + _y1;
    // <5>xx0 = <5>(<4>(<1>ttS*<2>xC) - <3>(<2>(2*tS*<1>xA) - x0))
    const _xx0 = ttS * _xC + (2 * _tS * _xA + _x0);
    // <5>xx1 = <5>(<4>(<1>tStE*<2>xC) - <4>((<3>(<1>xA*<1>(tE + tS)) - x0)))
    const _xx1 = _tStE * _xC + (_xA * (_tE + _tS) + _x0);
    // <5>xx2 = <5>(<4>(<1>ttE*<2>xC) - <3>(<2>(2*tE*<1>xA) - x0))
    const _xx2 = ttE * _xC + (2 * _tE * _xA + _x0);
    const _yy0 = ttS * _yC + (2 * _tS * _yA + _y0);
    const _yy1 = _tStE * yC + (_yA * (_tE + _tS) + _y0);
    const _yy2 = ttE * _yC + (2 * _tE * _yA + _y0);
    return {
        ps: [[xx0, yy0], [xx1, yy1], [xx2, yy2]],
        //ps_: [
        //    [5*u*_xx0, 5*u*_yy0],
        //    [5*u*_xx1, 5*u*_yy1],
        //    [5*u*_xx2, 5*u*_yy2]
        //]
        _ps: [
            [_xx0, _yy0],
            [_xx1, _yy1],
            [_xx2, _yy2]
        ]
    };
}

//# sourceMappingURL=from-to-2-incl-error-bound.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/transformation/split/from-to/from-to-1-incl-error-bound.js
const from_to_1_incl_error_bound_abs = Math.abs;
/** error free error bounds */
const from_to_1_incl_error_bound_psErrorFree = [[0, 0], [0, 0]];
/**
 * Returns a bezier curve that starts and ends at the given `t` parameters
 * including an error bound (that needs to be multiplied by `3u` before use,
 * where `u === Number.EPSILON/2`).
 *
 * @param ps a linear bezier curve (a line) given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1]]`
 * @param tS the `t` parameter where the resultant bezier should start
 * @param tE the `t` parameter where the resultant bezier should end
 *
 * @internal
 */
function fromTo1InclErrorBound(ps, tS, tE) {
    if (tS === 0) {
        if (tE === 1) {
            return { ps, _ps: from_to_1_incl_error_bound_psErrorFree };
        }
        return splitLeft1(ps, tE);
    }
    if (tE === 1) {
        return splitRight1(ps, tS);
    }
    return splitAtBoth1(ps, tS, tE);
}
/**
 * Returns a bezier curve that starts at the given `t` parameter and ends
 * at `t === 1` including an error bound (that needs to be multiplied
 * by `3u`, where `u === Number.EPSILON/2`).
 *
 * @param ps a lineer bezier curve (a line) given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1]]`
 * @param t the `t` parameter where the resultant bezier should start
 *
 * @internal
 */
function splitRight1(ps, t) {
    // --------------------------------------------------------
    // const [[x0, y0], [x1, y1]] = ps; 
    const p0 = ps[0]; // exact
    const p1 = ps[1]; // exact
    const x0 = p0[0];
    const y0 = p0[1]; // exact
    const x1 = p1[0];
    const y1 = p1[1]; // exact
    // --------------------------------------------------------
    // error bound using counters <k>:
    // counter rules:
    //   1. <k>a + <l>b = <max(k,l) + 1>(a + b)
    //   2. <k>a<l>b = <k + l + 1>ab
    //   3. fl(a) === <1>a
    const psR = [
        [t * (x1 - x0) + x0,
            t * (y1 - y0) + y0],
        [x1,
            y1] // yy1
    ];
    // -----------------------
    // Calculate error bounds
    // -----------------------
    const _t = from_to_1_incl_error_bound_abs(t);
    const _x0 = from_to_1_incl_error_bound_abs(x0);
    const _x1 = from_to_1_incl_error_bound_abs(x1);
    const _y0 = from_to_1_incl_error_bound_abs(y0);
    const _y1 = from_to_1_incl_error_bound_abs(y1);
    // <3>xx0 <= <3>(<2>(t*<1>(x1 - x0)) + x0)
    const _xx0 = _t * (_x1 + _x0) + _x0;
    const _yy0 = _t * (_y1 + _y0) + _y0;
    /** the coordinate-wise error bound */
    //const psR_ = [
    //    [3*u*_xx0, 3*u*_yy0],
    //    [0, 0]
    //];
    const psR_ = [
        [_xx0, _yy0],
        [0, 0]
    ];
    return {
        ps: psR,
        _ps: psR_
    };
}
/**
 * Returns a bezier curve that starts at `t === 0` and ends at the given `t`
 * parameter including an error bound (that needs to be multiplied by `3u`,
 * where `u === Number.EPSILON/2`).
 *
 * @param ps a lineer bezier curve (a line) given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1]]`
 * @param t the `t` parameter where the resultant bezier should end
 *
 * @internal
 */
function splitLeft1(ps, t) {
    // --------------------------------------------------------
    // const [[x0, y0], [x1, y1]] = ps; 
    const p0 = ps[0]; // exact 
    const p1 = ps[1]; // exact
    const x0 = p0[0];
    const y0 = p0[1]; // exact
    const x1 = p1[0];
    const y1 = p1[1]; // exact
    // --------------------------------------------------------
    // error bound using counters <k>:
    // counter rules:
    //   1. <k>a + <l>b = <max(k,l) + 1>(a + b)
    //   2. <k>a<l>b = <k + l + 1>ab
    //   3. fl(a) === <1>a
    const psL = [
        [x0,
            y0],
        [t * (x1 - x0) + x0,
            t * (y1 - y0) + y0] // yy1
    ];
    // -----------------------
    // Calculate error bounds
    // -----------------------
    const _t = from_to_1_incl_error_bound_abs(t);
    const _x0 = from_to_1_incl_error_bound_abs(x0);
    const _x1 = from_to_1_incl_error_bound_abs(x1);
    const _y0 = from_to_1_incl_error_bound_abs(y0);
    const _y1 = from_to_1_incl_error_bound_abs(y1);
    // <3>xx1 <= <3>(<2>(t*<1>(x1 - x0)) + x0)
    const _xx1 = _t * (_x1 + _x0) + _x0;
    const _yy1 = _t * (_y1 + _y0) + _y0;
    /** the coordinate-wise error bound */
    //const psL_ = [
    //    [0, 0],
    //    [3*u*_xx1, 3*u*_yy1],
    //];
    const psL_ = [
        [0, 0],
        [_xx1, _yy1],
    ];
    return {
        ps: psL,
        _ps: psL_
    };
}
/**
 * Returns a bezier curve that starts and ends at the given `t` parameters
 * including an error bound (that needs to be multiplied by `3u`, where
 * `u === Number.EPSILON/2`).
 *
 * @param ps a lineer bezier curve (a line) given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1]]`
 * @param tS the `t` parameter where the resultant bezier should start
 * @param tE the `t` parameter where the resultant bezier should end
 *
 * @internal
 */
function splitAtBoth1(ps, tS, tE) {
    // --------------------------------------------------------
    // const [[x0, y0], [x1, y1]] = ps; 
    const p0 = ps[0]; // exact
    const p1 = ps[1]; // exact
    const x0 = p0[0];
    const y0 = p0[1]; // exact
    const x1 = p1[0];
    const y1 = p1[1]; // exact
    // --------------------------------------------------------
    // error bound using counters <k>:
    // counter rules:
    //   1. <k>a + <l>b = <max(k,l) + 1>(a + b)
    //   2. <k>a<l>b = <k + l + 1>ab
    //   3. fl(a) === <1>a
    const psB = [
        [tS * (x1 - x0) + x0,
            tS * (y1 - y0) + y0],
        [tE * (x1 - x0) + x0,
            tE * (y1 - y0) + y0] // yy1
    ];
    // -----------------------
    // Calculate error bounds
    // -----------------------
    const _tS = from_to_1_incl_error_bound_abs(tS);
    const _tE = from_to_1_incl_error_bound_abs(tE);
    const _x0 = from_to_1_incl_error_bound_abs(x0);
    const _x1 = from_to_1_incl_error_bound_abs(x1);
    const _y0 = from_to_1_incl_error_bound_abs(y0);
    const _y1 = from_to_1_incl_error_bound_abs(y1);
    // <3>xx0 <= <3>(<2>(tS*<1>(x1 - x0)) + x0)
    const _xx0 = _tS * (_x1 + _x0) + _x0;
    // <3>xx1
    const _xx1 = _tE * (_x1 + _x0) + _x0;
    const _yy0 = _tS * (_y1 + _y0) + _y0;
    const _yy1 = _tE * (_y1 + _y0) + _y0;
    /** the coordinate-wise error bound */
    //const psR_ = [
    //    [3*u*_xx0, 3*u*_yy0],
    //    [0, 0]
    //];
    const psB_ = [
        [_xx0, _yy0],
        [_xx1, _yy1]
    ];
    return {
        ps: psB,
        _ps: psB_
    };
}

//# sourceMappingURL=from-to-1-incl-error-bound.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/global-properties/bounds/get-interval-box/get-interval-box.js






const get_interval_box_eps = Number.EPSILON;
const get_interval_box_u = get_interval_box_eps / 2;
const get_interval_box_1 = error_analysis_(1);
/**
 * Returns an axis-aligned-box that is guaranteed to engulf the entire
 * given bezier curve from t1 to t2. The returned box is given as a pair
 * of points (the box corners) in double precision, e.g. `[[1,1], [2,2]]`.
 *
 * * **precondition:** (to satisfy guarantee) t1 < t2
 * * **precondition:** (to satisfy guarantee) t1,t2 >= 0 && t1,t2 <= 1
 *
 * @param ps an order 1,2 or 3 bezier curve given as an array of its control
 * points, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 * @param ts [first, second] parameter values, e.g. [0.11, 0.12]
 *
 * @doc mdx
 */
function getIntervalBox(ps, ts) {
    if (ts[0] !== ts[1]) {
        if (ps.length === 4) {
            return getIntervalBox3(ps, ts);
        }
        if (ps.length === 3) {
            return getIntervalBox2(ps, ts);
        }
        return getIntervalBox1(ps, ts);
    }
    // ts[0] === ts[1]
    return getIntervalBoxAtT(ps, ts[0]);
}
/**
 * Returns an axis-aligned-box that is guaranteed to engulf the entire given
 * bezier curve from t1 to t2.
 *
 * This is achieved by calculating the error bounds of a new curve calculated
 * form t1 to t2 using a splitting algorithm and then taking its extreme
 * control points and finally finding a box that engulfs the control points.
 * @internal
 *
 * @param ps
 * @param ts
 */
function getIntervalBox3(ps, ts) {
    const { ps: psI, _ps: _psI } = fromTo3InclErrorBound(ps, ts[0], ts[1]);
    const x0 = psI[0][0];
    const x1 = psI[1][0];
    const x2 = psI[2][0];
    const x3 = psI[3][0];
    const _x0 = 9 * get_interval_box_u * _psI[0][0];
    const _x1 = 9 * get_interval_box_u * _psI[1][0];
    const _x2 = 9 * get_interval_box_u * _psI[2][0];
    const _x3 = 9 * get_interval_box_u * _psI[3][0];
    const y0 = psI[0][1];
    const y1 = psI[1][1];
    const y2 = psI[2][1];
    const y3 = psI[3][1];
    const _y0 = 9 * get_interval_box_u * _psI[0][1];
    const _y1 = 9 * get_interval_box_u * _psI[1][1];
    const _y2 = 9 * get_interval_box_u * _psI[2][1];
    const _y3 = 9 * get_interval_box_u * _psI[3][1];
    const minX = Math.min(x0 - _x0, x1 - _x1, x2 - _x2, x3 - _x3);
    const maxX = Math.max(x0 + _x0, x1 + _x1, x2 + _x2, x3 + _x3);
    const minY = Math.min(y0 - _y0, y1 - _y1, y2 - _y2, y3 - _y3);
    const maxY = Math.max(y0 + _y0, y1 + _y1, y2 + _y2, y3 + _y3);
    return [[minX, minY], [maxX, maxY]];
}
/**
 * Returns an axis-aligned-box that is guaranteed to engulf the entire given
 * bezier curve from t1 to t2.
 *
 * This is achievied by calculating the error bounds of a new curve calculated
 * form t1 to t2 using a splitting algorithm and then taking its extreme
 * control points and finally finding a box that engulfs the control points
 *
 * @param param0
 * @param param1
 *
 * @internal
 */
function getIntervalBox2(ps, ts) {
    const { ps: psI, _ps: _psI } = fromTo2InclErrorBound(ps, ts[0], ts[1]);
    const x0 = psI[0][0];
    const x1 = psI[1][0];
    const x2 = psI[2][0];
    const _x0 = 5 * get_interval_box_u * _psI[0][0];
    const _x1 = 5 * get_interval_box_u * _psI[1][0];
    const _x2 = 5 * get_interval_box_u * _psI[2][0];
    const y0 = psI[0][1];
    const y1 = psI[1][1];
    const y2 = psI[2][1];
    const _y0 = 5 * get_interval_box_u * _psI[0][1];
    const _y1 = 5 * get_interval_box_u * _psI[1][1];
    const _y2 = 5 * get_interval_box_u * _psI[2][1];
    const minX = Math.min(x0 - _x0, x1 - _x1, x2 - _x2);
    const maxX = Math.max(x0 + _x0, x1 + _x1, x2 + _x2);
    const minY = Math.min(y0 - _y0, y1 - _y1, y2 - _y2);
    const maxY = Math.max(y0 + _y0, y1 + _y1, y2 + _y2);
    return [[minX, minY], [maxX, maxY]];
}
/**
 * Returns an axis-aligned-box that is guaranteed to engulf the entire given
 * bezier curve from t1 to t2.
 *
 * This is achievied by calculating the error bounds of a new curve calculated
 * form t1 to t2 using a splitting algorithm and then taking its extreme
 * control points and finally finding a box that engulfs the control points
 *
 * @param param0
 * @param param1
 *
 * @internal
 */
function getIntervalBox1(ps, ts) {
    // Implementation for lines kept for symmetry - there are obviously much
    // simpler ways to calculate the required box in the case of a line.
    const { ps: psI, _ps: _psI } = fromTo1InclErrorBound(ps, ts[0], ts[1]);
    const x0 = psI[0][0];
    const x1 = psI[1][0];
    const _x0 = 3 * get_interval_box_u * _psI[0][0];
    const _x1 = 3 * get_interval_box_u * _psI[1][0];
    const y0 = psI[0][1];
    const y1 = psI[1][1];
    const _y0 = 3 * get_interval_box_u * _psI[0][1];
    const _y1 = 3 * get_interval_box_u * _psI[1][1];
    const minX = Math.min(x0 - _x0, x1 - _x1);
    const maxX = Math.max(x0 + _x0, x1 + _x1);
    const minY = Math.min(y0 - _y0, y1 - _y1);
    const maxY = Math.max(y0 + _y0, y1 + _y1);
    return [[minX, minY], [maxX, maxY]];
}
/**
 * @param ps
 * @param t
 *
 * @internal
 */
function getIntervalBoxAtT(ps, t) {
    const _pS = ps[0];
    const _pE = ps[ps.length - 1];
    if (t === 0) {
        return [_pS, _pS];
    }
    else if (t === 1) {
        return [_pE, _pE];
    }
    const p = evalDeCasteljau(ps, t);
    let pE;
    if (ps.length === 4) {
        pE = evalDeCasteljauError(ps, [0, t]).map(c_ => 8 * get_interval_box_1 * c_);
    }
    else if (ps.length === 3) {
        pE = evalDeCasteljauError(ps, [0, t]).map(c_ => 5 * get_interval_box_1 * c_);
    }
    else if (ps.length === 2) {
        pE = evalDeCasteljauError(ps, [0, t]).map(c_ => 2 * get_interval_box_1 * c_);
    }
    else if (ps.length === 1) {
        return [p, p];
    }
    return [
        [p[0] - pE[0], p[1] - pE[1]],
        [p[0] + pE[0], p[1] + pE[1]]
    ];
}

// 416
//# sourceMappingURL=get-interval-box.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/global-properties/bounds/get-x-bounds-tight.js



/**
 * Returns tight x-coordinate bounds of the given bezier curve.
 *
 * @param ps an order 1, 2 or 3 bezier curve given as an array of control
 * points, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 *
 * @doc mdx
 */
function getXBoundsTight(ps) {
    const pS = ps[0];
    const pE = ps[ps.length - 1];
    let minX;
    let maxX;
    if (pS[0] < pE[0]) {
        minX = { ts: [0, 0], box: [pS, pS] };
        maxX = { ts: [1, 1], box: [pE, pE] };
    }
    else {
        minX = { ts: [1, 1], box: [pE, pE] };
        maxX = { ts: [0, 0], box: [pS, pS] };
    }
    if (ps.length === 2) {
        return { minX, maxX };
    }
    const [dx,] = toPowerBasis_1stDerivative(ps);
    const rootsX = allRootsCertifiedSimplified(dx, 0, 1);
    // Test points
    for (let i = 0; i < rootsX.length; i++) {
        const r = rootsX[i];
        const ts = [r.tS, r.tE];
        const box = getIntervalBox(ps, ts);
        if (box[0][0] < minX.box[0][0]) {
            minX = { ts, box };
        }
        if (box[1][0] > maxX.box[0][0]) {
            maxX = { ts, box };
        }
    }
    return { minX, maxX };
}

//# sourceMappingURL=get-x-bounds-tight.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/global-properties/bounds/get-y-bounds-tight.js



/**
 * Returns tight y-coordinate bounds of the given bezier curve.
 *
 * @param ps an order 1, 2 or 3 bezier curve given as an array of control
 * points, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 *
 * @doc mdx
 */
function getYBoundsTight(ps) {
    const pS = ps[0];
    const pE = ps[ps.length - 1];
    let minY;
    let maxY;
    if (pS[1] < pE[1]) {
        minY = { ts: [0, 0], box: [pS, pS] };
        maxY = { ts: [1, 1], box: [pE, pE] };
    }
    else {
        minY = { ts: [1, 1], box: [pE, pE] };
        maxY = { ts: [0, 0], box: [pS, pS] };
    }
    if (ps.length === 2) {
        return { minY, maxY };
    }
    const [, dy] = toPowerBasis_1stDerivative(ps);
    const rootsY = allRootsCertifiedSimplified(dy, 0, 1);
    // Test points
    for (let i = 0; i < rootsY.length; i++) {
        const r = rootsY[i];
        const ts = [r.tS, r.tE];
        const box = getIntervalBox(ps, ts);
        if (box[0][1] < minY.box[0][1]) {
            minY = { ts, box };
        }
        if (box[1][1] > maxY.box[0][1]) {
            maxY = { ts, box };
        }
    }
    return { minY, maxY };
}

//# sourceMappingURL=get-y-bounds-tight.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/global-properties/bounds/get-bounding-box.js


/**
 * Returns a tight axis-aligned bounding box of the given bezier curve.
 *
 * * **certified**: the box is guaranteed to engulf the given bezier curve.
 *
 * * returns the box in the form `[[minX, minY], [maxX, maxY]`
 *
 * @param ps an order 1,2 or 3 bezier curve given as an array of its control
 * points, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 *
 * @doc mdx
 */
function getBoundingBox(ps) {
    const xBounds = getXBoundsTight(ps);
    const yBounds = getYBoundsTight(ps);
    return [
        [xBounds.minX.box[0][0], yBounds.minY.box[0][1]],
        [xBounds.maxX.box[1][0], yBounds.maxY.box[1][1]]
    ];
}

//# sourceMappingURL=get-bounding-box.js.map
;// CONCATENATED MODULE: ./node_modules/flo-vector2d/node/distance-and-length/distance-between.js
/**
 * Returns the distance between two 2d points.
 * @param p a point
 * @param q another point
 */
function distanceBetween(p, q) {
    const x = q[0] - p[0];
    const y = q[1] - p[1];
    return Math.sqrt(x * x + y * y);
}

//# sourceMappingURL=distance-between.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/global-properties/length/control-point-lines-length.js

/**
 * Returns an upper bound for the length of the given bezier curve - this bound
 * is not very strict as it uses the sum of the straight-line distances between
 * control points as a measure.
 *
 * @param ps an order 0,1,2 or 3 bezier curve given as an array of its control
 * points, e.g. `[[1,2],[3,4],[5,6],[7,8]]`
 *
 * @doc mdx
 */
function controlPointLinesLength(ps) {
    let totalLength = 0;
    for (let i = 0; i < ps.length - 1; i++) {
        totalLength += distanceBetween(ps[i], ps[i + 1]);
    }
    return totalLength;
}

//# sourceMappingURL=control-point-lines-length.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/global-properties/bounds/get-bounding-box-tight.js




/**
 * Returns a **non-certified**, **rotated**, **tight** bounding box of the given
 * bezier curve as four ordered points of a rotated rectangle (with each given
 * as `[x,y]`)
 *
 * @param ps an order 1,2 or 3 bezier curve given as an array of its control
 * points, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 *
 * @doc mdx
 */
function getBoundingBoxTight(ps) {
    const [xS, yS] = ps[0];
    const [xE, yE] = ps[ps.length - 1];
    let sinθ;
    let cosθ;
    // take care of the case the endpoints are close together
    const len = controlPointLinesLength(ps);
    if (squared_distance_between_squaredDistanceBetween(ps[0], ps[ps.length - 1]) * 2 ** 8 < len * len) {
        const [xE_, yE_] = evalDeCasteljau(ps, 0.5);
        const hypotenuse = Math.sqrt((xE_ - xS) * (xE_ - xS) + (yE_ - yS) * (yE_ - yS));
        sinθ = (yE_ - yS) / hypotenuse;
        cosθ = (xE_ - xS) / hypotenuse;
    }
    else {
        const hypotenuse = Math.sqrt((xE - xS) * (xE - xS) + (yE - yS) * (yE - yS));
        sinθ = (yE - yS) / hypotenuse;
        cosθ = (xE - xS) / hypotenuse;
    }
    const box = getNormalizedBoundingBox(ps, sinθ, cosθ);
    const [[p0x, p0y], [p1x, p1y]] = box;
    const axisAlignedBox = [
        box[0], [p1x, p0y],
        box[1], [p0x, p1y]
    ];
    const rotate_ = rotate(sinθ, cosθ);
    return axisAlignedBox.map(p => translate(ps[0], rotate_(p)));
}
/**
 * Helper function. Returns the bounding box of the normalized (i.e. first point
 * moved to origin and rotated so that last point lies on x-axis) given cubic
 * bezier.
 *
 * * returns the bounding box in the form [[minX, minY], [maxX,maxY]
 *
 * @param ps - A cubic bezier, e.g. [[0,0],[1,1],[2,1],[2,0]]
 * @param sinθ - Sine of angle made by line from first bezier point to
 * last with x-axis.
 * @param cosθ - Cosine of angle made by line from first bezier point
 * to last with x-axis.
 *
 * @internal
 */
function getNormalizedBoundingBox(ps, sinθ, cosθ) {
    const vectorToOrigin = ps[0].map(x => -x);
    const f = translate(vectorToOrigin);
    const boundingPs = ps.map(p => rotate(-sinθ, cosθ, f(p)));
    return getBoundingBox(boundingPs);
}

//# sourceMappingURL=get-bounding-box-tight.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-negative-of.js
/**
 * Returns the negative of the given floating point expansion.
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param e a floating point expansion
 */
function eNegativeOf(e) {
    const m = e.length;
    const h = new Array(m);
    for (let i = 0; i < m; i++) {
        h[i] = -e[i];
    }
    return h;
}

//# sourceMappingURL=e-negative-of.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-diff.js


// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗
const negativeOf = eNegativeOf;
const add = fastExpansionSum;
/**
 * Returns the difference between two floating point expansions, i.e. e - f.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param e a floating point expansion
 * @param f another floating point expansion
 */
function eDiff(e, f) {
    const g = negativeOf(f);
    return add(e, g);
}

//# sourceMappingURL=e-diff.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/basic/two-diff.js
/**
 * Returns the exact result of subtracting b from a (as a floating point
 * expansion).
 * @param a
 * @param b
 */
function two_diff_twoDiff(a, b) {
    const x = a - b;
    const bvirt = a - x;
    const y = (a - (x + bvirt)) + (bvirt - b);
    return [y, x];
}

//# sourceMappingURL=two-diff.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-compress.js
/**
 * Returns the result of compressing the given floating point expansion.
 *
 * * primarily for internal library use
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * Theorem 23 (Shewchuck): Let e = sum_(i=1)^m(e_i) be a nonoverlapping
 * expansion of m p-bit components, where m >= 3. Suppose that the components of
 * e are sorted in order of increasing magnitude, except that any of the e_i may
 * be zero. Then the following algorithm will produce a nonoverlapping expansion
 * (nonadjacent if round-to even tiebreaking is used) such that
 * h = sum_(i=1)^n(h_i) = e, where the components h_i are in order of increasing
 * magnitude. If h != 0, none of the h_i will be zero. Furthermore, the largest
 * component h_n approximates h with an error smaller than ulp(h_n).
 */
function e_compress_eCompress(e) {
    //return e;
    const e_ = e.slice();
    const m = e_.length;
    if (m === 1) {
        return e_;
    }
    let Q = e_[m - 1];
    let bottom = m;
    for (let i = m - 2; i >= 0; --i) {
        const a = Q;
        const b = e_[i];
        Q = a + b;
        const bv = Q - a;
        const q = b - bv;
        if (q) {
            e_[--bottom] = Q;
            Q = q;
        }
    }
    let top = 0;
    for (let i = bottom; i < m; ++i) {
        const a = e_[i];
        const b = Q;
        Q = a + b;
        const bv = Q - a;
        const q = b - bv;
        if (q) {
            e_[top++] = q;
        }
    }
    e_[top++] = Q;
    e_.length = top;
    return e_;
}

//# sourceMappingURL=e-compress.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/geometric-primitives/orient2d.js






const ccwerrboundA = 3.330669073875472e-16;
const ccwerrboundB = 2.220446049250315e-16;
const ccwerrboundC = 1.109335647967049e-31;
const resulterrbound = 3.330669073875471e-16;
/**
 * * Ported from [Shewchuk](http://docs.ros.org/kinetic/api/asr_approx_mvbb/html/Predicates_8cpp_source.html)
 * * see also https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 *
 * * Adaptive exact 2d orientation test.
 *
 * * Robust.
 *
 * Return a positive value if the points pa, pb, and pc occur in
 * counterclockwise order; a negative value if they occur in clockwise order;
 * and zero if they are collinear.  The result is also a rough approximation of
 * twice the signed area of the triangle defined by the three points.
 *
 * The result returned is the determinant of a matrix. This determinant is
 * computed adaptively, in the sense that exact arithmetic is used only to the
 * degree it is needed to ensure that the returned value has the correct sign.
 * Hence, orient2d() is usually quite fast, but will run more slowly when the
 * input points are collinear or nearly so.
 */
function orient2d_orient2d(A, B, C) {
    const detleft = (A[0] - C[0]) * (B[1] - C[1]);
    const detright = (A[1] - C[1]) * (B[0] - C[0]);
    const det = detleft - detright;
    let detsum;
    if (detleft > 0) {
        if (detright <= 0) {
            // Anti-clockwise
            return det;
        }
        else {
            detsum = detleft + detright;
        }
    }
    else if (detleft < 0) {
        if (detright >= 0) {
            // Clockwise
            return det;
        }
        else {
            detsum = -detleft - detright;
        }
    }
    else {
        // Anti-clockwise, clockwise or straight
        return det;
    }
    if (Math.abs(det) >= ccwerrboundA * detsum) {
        // Anti-clockwise or clockwise
        return det;
    }
    return orient2dAdapt(A, B, C, detsum);
}
function orient2dAdapt(A, B, C, detsum) {
    const acx = A[0] - C[0];
    const bcx = B[0] - C[0];
    const acy = A[1] - C[1];
    const bcy = B[1] - C[1];
    const b = eDiff(basic_two_product_twoProduct(acx, bcy), basic_two_product_twoProduct(acy, bcx));
    let det = eEstimate(b);
    if (Math.abs(det) >= ccwerrboundB * detsum) {
        // Anti-clockwise or clockwise
        return det;
    }
    const acxtail = two_diff_twoDiff(A[0], C[0])[0];
    const bcxtail = two_diff_twoDiff(B[0], C[0])[0];
    const acytail = two_diff_twoDiff(A[1], C[1])[0];
    const bcytail = two_diff_twoDiff(B[1], C[1])[0];
    if (acxtail === 0 && acytail === 0 &&
        bcxtail === 0 && bcytail === 0) {
        // Straight
        return det;
    }
    const errbound = ccwerrboundC * detsum + resulterrbound * Math.abs(det);
    det += (acx * bcytail + bcy * acxtail) - (acy * bcxtail + bcx * acytail);
    if (Math.abs(det) >= errbound) {
        return det;
    }
    const a = eDiff(basic_two_product_twoProduct(acxtail, bcy), basic_two_product_twoProduct(acytail, bcx));
    const c = fastExpansionSum(b, a);
    const d = eDiff(basic_two_product_twoProduct(acx, bcytail), basic_two_product_twoProduct(acy, bcxtail));
    const e = fastExpansionSum(c, d);
    const f = eDiff(basic_two_product_twoProduct(acxtail, bcytail), basic_two_product_twoProduct(acytail, bcxtail));
    let D = fastExpansionSum(e, f);
    D = e_compress_eCompress(D);
    return D[D.length - 1];
}

//# sourceMappingURL=orient2d.js.map
;// CONCATENATED MODULE: ./node_modules/flo-graham-scan/node/get-smallest-idx-y-then-x.js
/**
 * @internal
 */
function getSmallestIdxYThenX(ps) {
    let smallest = [
        Number.POSITIVE_INFINITY,
        Number.POSITIVE_INFINITY
    ];
    let smallestI = undefined;
    for (let i = 0; i < ps.length; i++) {
        const y = ps[i][1];
        if ((y < smallest[1]) ||
            (y === smallest[1] && ps[i][0] < smallest[0])) {
            smallestI = i;
            smallest = ps[i];
        }
    }
    return smallestI;
}

//# sourceMappingURL=get-smallest-idx-y-then-x.js.map
;// CONCATENATED MODULE: ./node_modules/flo-graham-scan/node/index.js


/**
 * Finds the convex hull of the given set of 2d points using the
 * Graham Scan algorithm and returns the hull as an array of points.
 * See https://en.wikipedia.org/wiki/Graham_scan
 *
 * Robust: This algorithm is robust via adaptive infinite precision floating
 * point arithmetic.
 *
 * @param ps A set of points
 * @param includeAllBoundaryPoints Set this to true to if all boundary points
 * should be returned, even redundant ones - defaults to `false`
 */
function grahamScan(ps) {
    const n = ps.length;
    if (n === 0) {
        return undefined;
    }
    const ps_ = ps.slice();
    const idx = getSmallestIdxYThenX(ps_);
    const [p] = ps_.splice(idx, 1);
    ps_.sort((a, b) => {
        let res = -orient2d_orient2d(p, a, b);
        if (res !== 0) {
            return res;
        }
        res = a[1] - b[1];
        if (res !== 0) {
            return res;
        }
        return a[0] - b[0];
    });
    ps_.unshift(p);
    let stack = [];
    for (const p of ps_) {
        while (stack.length > 1) {
            const r = orient2d_orient2d(stack[stack.length - 2], stack[stack.length - 1], p) <= 0;
            if (!r) {
                break;
            }
            stack.pop();
        }
        stack.push(p);
    }
    const len = stack.length;
    const stack_ = [stack[0]];
    for (let i = 1; i < len; i++) {
        const pS = stack[(i - 1) % len];
        const pM = stack[(i) % len];
        const pE = stack[(i + 1) % len];
        if (orient2d_orient2d(pS, pM, pE) !== 0 || dot(pS, pM, pE) < 0) {
            stack_.push(pM);
        }
    }
    return stack_;
}
/**
 * No need to be accurate
 */
function dot(p1, p2, p3) {
    const v1x = p2[0] - p1[0];
    const v1y = p2[1] - p1[1];
    const v2x = p3[0] - p2[0];
    const v2y = p3[1] - p2[1];
    return v1x * v2x + v1y * v2y;
}

//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/global-properties/bounds/get-bounding-hull.js

/**
 * Finds the convex hull of the given set of 2d points using the
 * Graham Scan algorithm and returns the hull as an array of points.
 *
 * * see https://en.wikipedia.org/wiki/Graham_scan
 *
 * **exact**: this algorithm is robust via adaptive infinite precision floating
 * point arithmetic.
 *
 * @param ps a set of points, e.g. a bezier curve, e.g. [[0,0],[1,1],[2,1],[2,0]]
 * @param includeAllBoundaryPoints set this to `true` to if all boundary points
 * should be returned, even redundant ones; defaults to `false`
 *
 * @dox mdx
 */
const getBoundingHull = grahamScan;

//# sourceMappingURL=get-bounding-hull.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/roots/certified/root-interval.js
/**
 * Simple function that creates and returns an exact root (with a bracketing
 * interval width of 0 and multiplicity 1)
 *
 * @param t
 *
 * @doc
 */
function createRootExact(t) {
    return { tS: t, tE: t, multiplicity: 1 };
}
/**
 * Simple function that returns the middle of the root bracketing interval - can
 * be used to estimate the root
 *
 * @param ri a root interval
 *
 * @doc
 */
function mid(ri) {
    return (ri.tS + ri.tE) / 2;
}

//# sourceMappingURL=root-interval.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/bezier-bezier-intersection/x.js
/** @internal */
function getPFromBox(box) {
    const tl = box[0];
    const br = box[1];
    return [
        (tl[0] + br[0]) / 2,
        (tl[1] + br[1]) / 2,
    ];
}

//# sourceMappingURL=x.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-representation/double-to-octets.js
// Modified from https://github.com/bartaz/ieee754-visualization/
// under the MIT license
// Copyright 2013 Bartek Szopka (original author)
/**
 * Returns the ieee-574 8 bytes composing the given double, starting from the
 * sign bit and ending in the lsb of the significand.
 * e.g. 123.456 -> [64, 94, 221, 47, 26, 159, 190, 119]
 */
function double_to_octets_doubleToOctets(number) {
    const buffer = new ArrayBuffer(8);
    new DataView(buffer).setFloat64(0, number, false);
    return Array.from(new Uint8Array(buffer));
}

//# sourceMappingURL=double-to-octets.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-representation/double-to-binary-string.js
// Modified from https://github.com/bartaz/ieee754-visualization/
// under the MIT license
// Copyright 2013 Bartek Szopka (original author)

function double_to_binary_string_doubleToBinaryString(number) {
    return double_to_binary_string_octetsToBinaryString(double_to_octets_doubleToOctets(number));
}
/**
 * @param octets The 8 bytes composing a double (msb first)
 */
function double_to_binary_string_octetsToBinaryString(octets) {
    return octets
        .map(double_to_binary_string_int8ToBinaryString)
        .join('');
}
/**
 * intToBinaryString(8) -> "00001000"
 */
function double_to_binary_string_int8ToBinaryString(i) {
    let iStr = i.toString(2);
    for (; iStr.length < 8; iStr = "0" + iStr)
        ;
    return iStr;
}

//# sourceMappingURL=double-to-binary-string.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-representation/parse-double.js
// Modified from https://github.com/bartaz/ieee754-visualization/
// under the MIT license
// Copyright 2013 Bartek Szopka (original author)


/**
 * Returns the relevant parts of the given IEEE-754 double. The returned
 * exponent has been normalized (i.e. 1023 ha been subtracted) and the
 * significand has the hidden bit added if appropriate.
 * See https://github.com/bartaz/ieee754-visualization
 */
function parse_double_parseDouble(x) {
    const parts = double_to_octets_doubleToOctets(x);
    const p0 = parts[0];
    const p1 = parts[1];
    const sign = p0 >> 7;
    const exponent_ = ((p0 & 127) << 4) + ((p1 & 0b11110000) >> 4);
    //---- Check for negative / positive zero / denormalized numbers.
    const hiddenMsb = exponent_ === 0 ? 0 : 16;
    // Note: exponent === 0 => 0 or denormalized number (a.k.a. subnormal number).
    const exponent = exponent_ === 0
        ? exponent_ - 1022 // Subnormals use a biased exponent of 1 (not 0!)
        : exponent_ - 1023;
    //---- Break up the significand into bytes
    const significand = parts.slice(1);
    significand[0] = (p1 & 15) + hiddenMsb;
    return {
        sign,
        exponent,
        significand
    };
}
/**
 * Returns the relevant parts of the given IEEE-754 double.
 * See https://github.com/bartaz/ieee754-visualization.
 * This is a slower version of parseDouble that gives binary string
 * representations of the components.
 */
function parse_double_parseDoubleDetailed(x) {
    const str = double_to_binary_string_doubleToBinaryString(x);
    // sign{1} exponent{11} fraction{52} === 64 bits (+1 hidden!)
    const [, sign, exponent, significand] = str.match(/^(.)(.{11})(.{52})$/);
    const exponent_ = parseInt(exponent, 2);
    const hidden = exponent_ === 0 ? "0" : "1";
    return {
        full: sign + exponent + hidden + significand,
        sign,
        exponent,
        hidden,
        significand
    };
}

//# sourceMappingURL=parse-double.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-representation/significand.js

/**
 * Return the significand of the given double with the hidden bit added (in case
 * a is not subnormal or 0, etc.)
 * @param a A double
 */
function significand_significand(a) {
    return parse_double_parseDouble(a).significand;
}

//# sourceMappingURL=significand.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-representation/get-max-set-bit.js

/**
 * Returns the lowest set bit of the given value in [1, (2**31)-1],
 * i.e. from 1 up to 2147483647 else if no bit is set (input === 0) returns
 * NaN, otherwise if the number is out of range returns a non-finite
 * number.
 * See https://stackoverflow.com/a/35190288/2010061
 */
function get_max_set_bit_getLowestSetBit_(a) {
    return Math.log2(a & -a);
}
/**
 * Returns the lowest set bit of the given number's significand (where the lsb
 * is bit 0 and the msb is bit 52). If no bit is set (input === 0 or +-inf or
 * NaN) returns NaN.
 * See https://stackoverflow.com/a/35190288/2010061
 */
function get_max_set_bit_getLowestSetBit(a) {
    if (a === 0 || !Number.isFinite(a)) {
        // There is no lowest set bit
        return NaN;
    }
    // Note: the significand includes the hidden bit!
    const s = significand_significand(a);
    const len = s.length;
    for (let i = len - 1; i >= 0; i--) {
        if (s[i] === 0) {
            continue;
        }
        const l = get_max_set_bit_getLowestSetBit_(s[i]);
        if (Number.isFinite(l)) {
            return (8 * (len - i - 1)) + l;
        }
    }
    return NaN;
}
/**
 * Returns the highest set bit of the given value in [1, 255], i.e. from 1 up
 * to 255. If the input number === 0 returns NaN.
 * See https://stackoverflow.com/a/35190288/2010061
 */
function get_max_set_bit_getHighestSetBit_(a) {
    return a >= 128 ? 7
        : a >= 64 ? 6
            : a >= 32 ? 5
                : a >= 16 ? 4
                    : a >= 8 ? 3
                        : a >= 4 ? 2
                            : a >= 2 ? 1
                                : a >= 1 ? 0
                                    : NaN;
}
/**
 * Returns the highest set bit of the given double. If no bit is set (input
 * === 0 or +/-inf or NaN) returns NaN.
 * See https://stackoverflow.com/a/35190288/2010061
 */
function get_max_set_bit_getHighestSetBit(a) {
    if (a === 0 || !Number.isFinite(a)) {
        // There is no lowest set bit
        return NaN;
    }
    // At this point there must be a highest set bit (always === 52 if the 
    // number is not a subnormal.
    const s = significand_significand(a);
    const len = s.length;
    for (let i = 0; i < len; i++) {
        const l = get_max_set_bit_getHighestSetBit_(s[i]);
        if (Number.isFinite(l)) {
            return (8 * (len - i - 1)) + l;
        }
    }
    return NaN;
}

//# sourceMappingURL=get-max-set-bit.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-representation/exponent.js

/**
 * Returns the normalized exponent of the given number.
 * @param a A double
 */
function exponent_exponent(a) {
    return parse_double_parseDouble(a).exponent;
}

//# sourceMappingURL=exponent.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-representation/msb-exponent.js


/**
 * Returns the true exponent of the msb that is set of the given number or
 * NaN if a === 0 or +-inf or NaN.
 * @param a An array of numbers to check
 */
function msb_exponent_msbExponent(a) {
    if (a === 0 || !Number.isFinite(a)) {
        return NaN;
    }
    const e = exponent_exponent(a);
    // Will return e for all but subnormal numbers
    return get_max_set_bit_getHighestSetBit(a) - 52 + e;
}

//# sourceMappingURL=msb-exponent.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/basic/reduce-significand.js
/**
 * Truncates a floating point value's significand and returns the result.
 * Similar to split, but with the ability to specify the number of bits to keep.
 *
 * Theorem 17 (Veltkamp-Dekker): Let a be a p-bit floating-point number, where
 * p >= 3. Choose a splitting point s such that p/2 <= s <= p-1. Then the
 * following algorithm will produce a (p-s)-bit value a_hi and a
 * nonoverlapping (s-1)-bit value a_lo such that abs(a_hi) >= abs(a_lo) and
 * a = a_hi + a_lo.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param a a double
 * @param bits the number of significand bits to leave intact
 */
function reduce_significand_reduceSignificand(a, bits) {
    const s = 53 - bits;
    const f = 2 ** s + 1;
    const c = f * a;
    const r = c - (c - a);
    return r;
}

//# sourceMappingURL=reduce-significand.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-to-bitlength.js




// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗
const sign = e_sign_eSign;
const e_to_bitlength_compress = e_compress_eCompress;
/**
 * Returns a floating point expansion accurate to the given number of bits.
 * Extraneous bits are discarded.
 * @param a a floating point expansion
 * @param l the number of accurate bits to keep
 */
// TODO - make faster
function eToBitlength(a, l) {
    a = e_to_bitlength_compress(a);
    if (sign(a) === 0) {
        return [0];
    }
    const maxMsb = msb_exponent_msbExponent(a[a.length - 1]);
    let msb = maxMsb;
    let i = a.length - 1; // start at most significant byte
    while (i > 0) {
        const msb_ = msb_exponent_msbExponent(a[i - 1]);
        if (maxMsb - msb_ > l) {
            break;
        }
        msb = msb_;
        i--;
    }
    const keepBits = Math.min(l - (maxMsb - msb), 53);
    let b = a[i];
    b = reduce_significand_reduceSignificand(b, keepBits);
    const result = a.slice(i);
    result[0] = b;
    return result;
}

//# sourceMappingURL=e-to-bitlength.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/expansion-product.js



// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗
const multByDouble = scaleExpansion;
const expansion_product_add = fastExpansionSum;
const expansion_product_compress = (/* unused pure expression or super */ null && (eCompress));
/**
 * Returns the product of two double floating point expansions.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * As per Shewchuk in the above paper: "To find the product of two expansions
 * e and f, use SCALE-EXPANSION (with zero elimination) to form the expansions
 * ef_1, ef_2, ..., then sum these using a distillation tree."
 *
 * A distillation tree used with fastExpansionSum will give O(k*log k) vs O(k^2)
 * operations.
 *
 * Implemented naively and not as described by Shewchuk (i.e. the algorithm
 * takes O(k^2) operations).
 * @param e a double floating point expansion
 * @param f another double floating point expansion
 */
function expansionProduct(e, f) {
    let sum = [0];
    for (let i = 0; i < e.length; i++) {
        sum = expansion_product_add(sum, multByDouble(f, e[i]));
    }
    //return compress(sum);
    return sum;
}

//# sourceMappingURL=expansion-product.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-representation/bit-length.js




/**
 * Returns the bit-length of the significand of the given number in such a way
 * that trailing zeros are not counted.
 * @param a A double precision floating point number
 */
function bit_length_bitLength(a) {
    if (a === 0) {
        return 0;
    }
    return get_max_set_bit_getHighestSetBit(a) - get_max_set_bit_getLowestSetBit(a) + 1;
}
/**
 * Returns the bit-length of the significand of the given floating point
 * expansion in such a way that trailing zeros are not counted.
 * * precondition: subnormals not currently supported
 * @param a A double precision floating point expansion
 */
function expBitLength(a) {
    const a_ = e_compress_eCompress(a);
    if (e_sign_eSign(a_) === 0) {
        return 0;
    }
    const msbyte = a_[a_.length - 1];
    const lsbyte = a_[0];
    return exponent_exponent(msbyte) - exponent_exponent(lsbyte) + (53 - get_max_set_bit_getLowestSetBit(lsbyte));
}

//# sourceMappingURL=bit-length.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-div.js





// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗
const mult = expansionProduct;
const toBitlength = eToBitlength;
const e_div_bitLength = expBitLength;
const e_div_diff = eDiff;
const estimate = eEstimate;
/**
 * Returns the result of a/b using Goldschmidt division.
 *
 * The result will only be exact if b|a, i.e. if b divides a exactly, else the
 * result will be rounded to the longest bitlength between a and b.
 *
 * @param a the numerator
 * @param b the denominator
 *
 * @param expansionLength the bitlength/53 of the final result, e.g. 1 means
 * standard double precision, 2 means double-double, etc up to a max of about 20 at
 * which point underflow cease precision improvement. If the division is known
 * to be exact beforehand (such as in the pseudo remainder sequence algorithm)
 * then set expansionLength === 0 and an exact division will be done.
 */
// TODO - test this function properly or replace with a better one
function eDiv(N, D, expansionLength) {
    let D_ = D;
    let N_ = N;
    let exact = false;
    let resultBitlengthUpperBound = 0;
    if (!expansionLength) {
        const bitlengthN = e_div_bitLength(N_);
        const bitlengthD = e_div_bitLength(D_);
        // resultBitlengthUpperBound is only valid if the division is known
        // to be exact
        resultBitlengthUpperBound = bitlengthN - bitlengthD + 1;
        expansionLength = (resultBitlengthUpperBound / 53) + 1;
        exact = true;
    }
    let F = [1 / estimate(D_)]; // Initial guess - out by 1/2 upls
    let i = 1;
    while (true) {
        N_ = mult(N_, F);
        // The precision bitlength doubles on each iteration
        if (i > expansionLength) {
            // we now have roughly double the needed precision - we actually 
            // only require about the precision and then round properly - this
            // could be implemented in the future.
            if (exact) {
                // We must throw away bits known to be zero. 
                // Any bits > expansionLength * 53 must be thrown away as they
                // are wrong - all other bits are exact.
                N_ = toBitlength(N_, resultBitlengthUpperBound);
                // TODO - below is just for testing - remove later
                //if (compare(mult(D, N_), N) !== 0) {
                //    console.log(mult(D, N_))
                //    throw new Error(`division in-exact - probably due to underflow, N: ${N}, D: ${D}, Result: ${N_}, product: ${mult(D, N_)}`); 
                //} 
                return N_;
            }
            // Returning only significant bits helps with sign determination later on.
            return N_.slice(N_.length - expansionLength, N_.length);
        }
        D_ = mult(D_, F);
        F = e_div_diff([2], D_);
        i *= 2;
    }
}

//# sourceMappingURL=e-div.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/grow-expansion.js

// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗
const grow_expansion_compress = (/* unused pure expression or super */ null && (eCompress));
/**
 * Returns the result of adding a double to an expansion.
 *
 * Let e be a nonoverlapping expansion of m p-bit components, and let b be a
 * p-bit value where p >= 3. Suppose that the components e_1, ..., e_m are
 * sorted in order of *increasing* magnitude, except that any of the ei may be
 * zero.
 * Then the following algorithm will produce a nonoverlapping expansion such
 * that h = sum_i(h_i) = e + b, where the components h_1, ..., h_(m+1) are also
 * in order of increasing magnitude, except that any of the h_i may be zero.
 * Furthermore, if e is nonadjacent and round-to-even tiebreaking is used, then
 * h is nonadjacent.
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 * @param e A floating point expansion
 * @param b Another floating point expansion
 */
function growExpansion(e, b) {
    const m = e.length;
    let q = b;
    //const h: number[] = new Array(m+1);
    const h = [];
    //let j = 0;
    for (let i = 0; i < m; i++) {
        // Note the use of twoSum and not fastTwoSum.
        //[h[i], q] = ts(q, e[i]);
        const ee = e[i];
        const x = q + ee;
        const bv = x - q;
        const hh = (q - (x - bv)) + (ee - bv);
        if (hh !== 0) {
            h.push(hh);
        }
        q = x;
    }
    //h[j] = q;
    if (q !== 0 || h.length === 0) {
        h.push(q);
    }
    //return compress(h);
    return h;
}

//# sourceMappingURL=grow-expansion.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-sum.js



// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗
const e_sum_ts = basic_two_sum_twoSum;
const addDouble = growExpansion;
const e_sum_add = fastExpansionSum;
/**
 * Returns the result of summing an array of floating point expansions.
 *
 * * The result is exact in the form of a non-overlapping floating point
 * expansion.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param terms An array of numbers to be summed; A term is represented by a
 * floating point expansion.
 */
// The terms parameter were chosen to always be expansions in order to keep the 
// function monomorhic, but whether it's really worth it I am not sure.
function eSum(terms) {
    let total = [0];
    for (let i = 0; i < terms.length; i++) {
        const term = terms[i];
        // add
        if (term.length === 1) {
            if (total.length === 1) {
                total = e_sum_ts(total[0], term[0]);
            }
            else {
                total = addDouble(total, term[0]);
            }
        }
        else {
            if (total.length === 1) {
                total = addDouble(term, total[0]);
            }
            else {
                total = e_sum_add(total, term);
            }
        }
    }
    return total;
}

//# sourceMappingURL=e-sum.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-long-divide.js







// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗
const e_long_divide_eNegativeOf = eNegativeOf;
const e_long_divide_fastExpansionSum = fastExpansionSum;
const e_long_divide_eCompress = e_compress_eCompress;
const e_long_divide_growExpansion = growExpansion;
const e_long_divide_eSum = eSum;
const e_long_divide_scaleExpansion = scaleExpansion;
const e_long_divide_eDiff = eDiff;
const e_long_divide_sign = Math.sign;
function eLongDivide(N, D) {
    N = e_long_divide_eCompress(N);
    D = e_long_divide_eCompress(D);
    // get the most significant double
    // out by at most 1 ulp, exact if d < MAX_SAFE_INT
    const d = D[D.length - 1];
    // trivial cases
    if (D.length === 1) {
        if (d === 0) {
            throw new Error('division by zero');
        }
        if (d === 1) {
            return { div: N, rem: [0] };
        }
        if (d === -1) {
            return { div: e_long_divide_eNegativeOf(N), rem: [0] };
        }
    }
    const signN = e_long_divide_sign(N[N.length - 1]);
    if (signN === 0) {
        return { div: [0], rem: [0] };
    }
    const signD = e_long_divide_sign(d);
    const divs = [];
    let oldLen = 0;
    while (true) {
        const rems = [];
        // loop from big `n[i]` to small `n[i]`
        for (let i = N.length - 1; i >= 0; i--) {
            const n = N[i];
            // `n % d` is the exact rem (for rem < MAX_SAFE_INTEGER) but is preliminary 
            // as it is subject to round-off for rem > MAX_SAFE_INTEGER; thus out by at 
            // most 1/2 ulp
            // Due to roundoff (and the fact we'e using `d` and not `D`!), `_div` does 
            // not necessarily represent the exact quotient.
            const div = Math.round((n - (n % d)) / d);
            // get the remainder by calculating `rem = n - d*div`
            rems.push(e_long_divide_scaleExpansion(D, div)); // exact
            if (div === 0) {
                break;
            }
            divs.push(div);
        }
        N = e_long_divide_eCompress(e_long_divide_eDiff(N, e_long_divide_eSum(rems)));
        if (oldLen === divs.length) {
            break;
        }
        oldLen = divs.length;
    }
    let rem = N;
    let div = [0];
    for (let i = 0; i < divs.length; i++) {
        div = e_long_divide_growExpansion(div, divs[i]);
    }
    div = e_long_divide_eCompress(div);
    //----------------------
    // fix signs (possibly)
    //----------------------
    //const signDiv = sign(div[div.length-1]);
    const signRem = e_long_divide_sign(rem[rem.length - 1]);
    //const signND = signN * signD;
    // We must have:
    // sign(div) === sign(n) * sign(d)
    // sign(rem) === sign(n)
    // At this point: `signN !== 0` and `signD !== 0`
    if (signRem !== 0 && signRem !== signN) {
        if (signN > 0) {
            if (signD > 0) {
                // div = div - 1  (div is positive)
                // rem = rem + D
                div = e_long_divide_growExpansion(div, -1);
                rem = e_long_divide_fastExpansionSum(rem, D);
            }
            else {
                // div = div + 1  (div is positive)
                // rem = rem - D
                div = e_long_divide_growExpansion(div, +1);
                rem = e_long_divide_fastExpansionSum(rem, e_long_divide_eNegativeOf(D));
            }
        }
        else if (signN < 0) {
            if (signD > 0) {
                // div = div + 1 (div is negative)
                // rem = rem - D
                div = e_long_divide_growExpansion(div, +1);
                rem = e_long_divide_fastExpansionSum(rem, e_long_divide_eNegativeOf(D));
            }
            else {
                // div = div - 1  (div is positive)
                // rem = rem + D
                div = e_long_divide_growExpansion(div, -1);
                rem = e_long_divide_fastExpansionSum(rem, D);
            }
        }
    }
    return { div, rem };
}

//# sourceMappingURL=e-long-divide.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-int-div.js

// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗
const e_int_div_eLongDivide = eLongDivide;
/**
 * Returns the result of the integer division a/b.
 *
 * * **precondition:** a and b must be integers, b !== 0
 */
function eIntDiv(a, b) {
    return e_int_div_eLongDivide(a, b).div;
}

//# sourceMappingURL=e-int-div.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-rem.js

// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗
const e_rem_eLongDivide = eLongDivide;
/**
 * Returns a % b
 *
 * * **precondition:** a and b must be integers, b !== 0
 */
function eRem(a, b) {
    return e_rem_eLongDivide(a, b).rem;
}

//# sourceMappingURL=e-rem.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-compare.js


/**
 * Returns 0 if a === b, a +tive value if a > b or a negative value if a < b.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * "The easiest way to compare two expansions is to subtract one from the other,
 * and test the sign of the result. An expansion’s sign can be easily tested
 * because of the nonoverlapping property; simply check the sign of the
 * expansion's most significant nonzero component..."
 *
 * @param a a floating point expansion
 * @param b another floating point expansion
 */
function eCompare(a, b) {
    return e_sign_eSign(eDiff(a, b));
}

//# sourceMappingURL=e-compare.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-abs.js


// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗
const e_abs_sign = (/* unused pure expression or super */ null && (eSign));
const e_abs_negativeOf = eNegativeOf;
/**
 * Returns the absolute value of the given floating point expansion.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param e a floating point expansion
 */
function eAbs(e) {
    if (e[e.length - 1] < 0) {
        return e_abs_negativeOf(e);
    }
    return e;
}

//# sourceMappingURL=e-abs.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/basic/fast-two-diff.js
/**
 * Returns the difference and exact error of subtracting two floating point
 * numbers.
 * Uses an EFT (error-free transformation), i.e. a-b === x+y exactly.
 * The returned result is a non-overlapping expansion (smallest value first!).
 *
 * Precondition: abs(a) >= abs(b) - A fast test that can be used is
 * (a > b) === (a > -b)
 *
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 */
function fast_two_diff_fastTwoDiff(a, b) {
    const x = a - b;
    const y = (a - x) - b;
    return [y, x];
}

//# sourceMappingURL=fast-two-diff.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/basic/fast-two-sum.js
/**
 * Returns the sum and exact error of adding two floating point numbers.
 * Uses an EFT (error-free transformation), i.e. a+b === x+y exactly.
 * The returned sum is a non-overlapping expansion (smallest value first!).
 *
 * Precondition: abs(a) >= abs(b) - A fast test that can be used is
 * (a > b) === (a > -b)
 *
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 */
function basic_fast_two_sum_fastTwoSum(a, b) {
    const x = a + b;
    return [b - (x - a), x];
}
// inlined
//const R = a + b; const r = b - (R - a); return [r, R];

//# sourceMappingURL=fast-two-sum.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-mult-by-2.js
/**
 * Returns the result of multiplying a floating point expansion by 2.
 * * **error free**
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param e a floating point expansion
 */
function eMultBy2(e) {
    const e_ = [];
    for (let i = 0; i < e.length; i++) {
        e_.push(2 * e[i]);
    }
    return e_;
}

//# sourceMappingURL=e-mult-by-2.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-mult-by-neg-2.js
/**
 * Multiply a floating point expansion by -2.
 * * **error free**
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param e a floating point expansion
 */
function eMultByNeg2(e) {
    const e_ = [];
    for (let i = 0; i < e.length; i++) {
        e_.push(-2 * e[i]);
    }
    return e_;
}

//# sourceMappingURL=e-mult-by-neg-2.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-div-by-2.js
/**
 * Returns the result of dividing a floating point expansion by 2.
 * * **error free**
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param e a floating point expansion
 */
function eDivBy2(e) {
    const e_ = [];
    for (let i = 0; i < e.length; i++) {
        e_.push(0.5 * e[i]);
    }
    return e_;
}

//# sourceMappingURL=e-div-by-2.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/basic/split.js
/**
 * === Math.ceil(p/2) where p is the # of significand bits in a double === 53.
 */
const basic_split_f = 134217729; // 2**27 + 1;
/**
 * Returns the result of splitting a double into 2 26-bit doubles.
 *
 * Theorem 17 (Veltkamp-Dekker): Let a be a p-bit floating-point number, where
 * p >= 3. Choose a splitting point s such that p/2 <= s <= p-1. Then the
 * following algorithm will produce a (p-s)-bit value a_hi and a
 * nonoverlapping (s-1)-bit value a_lo such that abs(a_hi) >= abs(a_lo) and
 * a = a_hi + a_lo.
 *
 * see e.g. [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 * @param a A double floating point number
 */
function split_split(a) {
    const c = basic_split_f * a;
    const a_h = c - (c - a);
    const a_l = a - a_h;
    return [a_h, a_l];
}
// inlined - input a, output a_h, a_l
// const c = f * a; const a_h = c - (c - a); const a_l = a - a_h; return [a_h, a_l];

//# sourceMappingURL=split.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-representation/is-bit-aligned.js


/**
 * Returns true if the given number is bit-aligned in the sense that its a
 * multiple of a given power of 2, say e, and such that the number, say a,
 * conforms to: a/2^e < 2^(l-e), where l is the max allowed bit length.
 * This essentially means the numbers act somewhat like fixed-point numbers
 * which can drastically speed up some geometric algorithms and also reduce
 * their complexity.
 *
 * Visually:
 * These numbers (a,b and c) are bit aligned with e === 3 and max
 * bitlength === 6:
 *    a -> 00|101100|000
 *    b -> 00|000100|000
 *    c -> 00|110111|000
 * These are not
 *    a -> 01|101100|000
 *    b -> 00|000100|000
 * These are not
 *    a -> 00|101100|000
 *    b -> 00|000100|100
 * These are not
 *    a -> 00|101100|100
 *    b -> 00|000100|100
 * @param as An array of numbers to check
 * @param maxBitLength The max allowed bitlength
 * @param gridSpacingExponent The grid spacing === 1^gridSpacingExponent
 */
function is_bit_aligned_isBitAligned(a, maxBitLength, gridSpacingExponent) {
    if (a === 0) {
        return true;
    }
    const e = exponent_exponent(a);
    const maxSetBit = get_max_set_bit_getHighestSetBit(a) - 52 + e;
    const minSetBit = get_max_set_bit_getLowestSetBit(a) - 52 + e;
    const minBitBigEnough = minSetBit >= gridSpacingExponent;
    const maxBitSmallEnough = maxSetBit <= maxBitLength - 1 + gridSpacingExponent;
    return minBitBigEnough && maxBitSmallEnough;
}

//# sourceMappingURL=is-bit-aligned.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-representation/lsb-exponent.js


/**
 * Returns the true exponent of the lsb that is set of the given number or
 * NaN if a === 0 or +-inf or NaN.
 * @param a An array of numbers to check
 */
function lsb_exponent_lsbExponent(a) {
    if (a === 0 || !Number.isFinite(a)) {
        return NaN;
    }
    const e = exponent_exponent(a);
    return get_max_set_bit_getLowestSetBit(a) - 52 + e;
}

//# sourceMappingURL=lsb-exponent.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-calculate.js







// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗
const e_calculate_mult = expansionProduct;
const e_calculate_tp = basic_two_product_twoProduct;
const e_calculate_multByDouble = scaleExpansion;
const e_calculate_ts = basic_two_sum_twoSum;
const e_calculate_addDouble = growExpansion;
const e_calculate_add = fastExpansionSum;
const e_calculate_compress = (/* unused pure expression or super */ null && (eCompress));
/**
 * Return the result of summing an array of terms, each term being an array of
 * floating point expansions to be multiplied together.
 *
 * * The result is exact in the form of a non-overlapping floating point
 * expansion.
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param terms An array of terms to be summed; A term consists of an
 * array of floating point expansions to be multiplied together.
 */
// The terms parameter were chosen to always be expansions in order to keep the 
// function monomorhic, but whether it's really worth it I am not sure.
function eCalculate(terms) {
    let total = [0];
    for (let i = 0; i < terms.length; i++) {
        const term = terms[i];
        let product = term[0];
        for (let j = 1; j < term.length; j++) {
            const multiplicant = term[j];
            if (multiplicant.length == 1) {
                if (product.length === 1) {
                    product = e_calculate_tp(product[0], multiplicant[0]);
                }
                else {
                    product = e_calculate_multByDouble(product, multiplicant[0]);
                }
            }
            else if (product.length === 1) {
                product = e_calculate_multByDouble(multiplicant, product[0]);
            }
            else {
                product = e_calculate_mult(multiplicant, product);
            }
        }
        // add
        if (product.length === 1) {
            if (total.length === 1) {
                total = e_calculate_ts(total[0], product[0]);
            }
            else {
                total = e_calculate_addDouble(total, product[0]);
            }
        }
        else {
            if (total.length === 1) {
                total = e_calculate_addDouble(product, total[0]);
            }
            else {
                total = e_calculate_add(total, product);
            }
        }
    }
    //return compress(total);
    return total;
}

//# sourceMappingURL=e-calculate.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-product.js




// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗
const e_product_mult = expansionProduct;
const e_product_tp = basic_two_product_twoProduct;
const e_product_multByDouble = scaleExpansion;
const e_product_compress = e_compress_eCompress;
/**
 * Return the result of multiplying together an array of floating point
 * expansions.
 *
 * * The result is exact in the form of a non-overlapping floating point
 * expansion.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param terms an array of multiplicands
 */
function eProduct(term) {
    let product = term[0];
    for (let j = 1; j < term.length; j++) {
        const multiplicant = term[j];
        if (multiplicant.length == 1) {
            if (product.length === 1) {
                product = e_product_tp(product[0], multiplicant[0]);
            }
            else {
                product = e_product_multByDouble(product, multiplicant[0]);
            }
        }
        else if (product.length === 1) {
            product = e_product_multByDouble(multiplicant, product[0]);
        }
        else {
            product = e_product_mult(multiplicant, product);
        }
    }
    return e_product_compress(product);
    //return product;
}

//# sourceMappingURL=e-product.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-int-pow.js


// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗
const e_int_pow_mult = expansionProduct;
const prod = eProduct;
/**
 * Returns a**i, where i is a non-negative integer.
 * @param a a floating point expansion
 */
// TODO - this algorithm's speed can easily be improved significantly using 'repeated squaring'
function eIntPow(a, p) {
    // a^0 === 1
    if (p === 0) {
        return [1];
    }
    // a^1 === a
    if (p === 1) {
        return a;
    }
    if (p === 2) {
        return e_int_pow_mult(a, a);
    }
    const as = [];
    for (let i = 0; i < p; i++) {
        as.push(a);
    }
    return prod(as);
}

//# sourceMappingURL=e-int-pow.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-to-double-double.js

// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗
const e_to_double_double_compress = e_compress_eCompress;
/**
 * Returns the result of converting a floating point expansion to a
 * double-double precision floating point number.
 */
function eToDd(e) {
    e = e_to_double_double_compress(e);
    const len = e.length;
    if (len === 2) {
        return e; // already a double-double
    }
    else if (len === 1) {
        return [0, e[0]]; // double-doubles have a fixed length of 2
    }
    return [e[len - 2], e[len - 1]]; // return only most significant parts
}

//# sourceMappingURL=e-to-double-double.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/is-overlapping.js


/**
 * Returns true if a and b overlaps, false otherwise.
 *
 * Two floating-point values x and y are nonoverlapping if the least significant
 * nonzero bit of x is more significant than the most significant nonzero bit of
 * y.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * Implemented for testing purposes.
 * @param a a double
 * @param b another double
 */
function isOverlapping(a, b) {
    return !isNonOverlapping(a, b);
}
/**
 * Returns true if a and b does not overlap, false otherwise.
 *
 * Two floating-point values x and y are nonoverlapping if the least significant
 * nonzero bit of x is more significant than the most significant nonzero bit of
 * y.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * Implemented for testing purposes.
 *
 * @param a A double
 * @param b Another double
 */
function isNonOverlapping(a, b) {
    if (a === 0 || b === 0) {
        return true;
    }
    if (Math.abs(b) > Math.abs(a)) {
        [a, b] = [b, a];
    }
    // At this point abs(a) > abs(b)
    const l = get_max_set_bit_getLowestSetBit(a);
    const h = get_max_set_bit_getHighestSetBit(b);
    const shift = exponent_exponent(a) - exponent_exponent(b);
    return (l + shift) > h;
}
/**
 * Returns true if all components of the given floating point expansion is
 * non-overlapping, false otherwise.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param e a double floating point expansion
 */
function isNonOverlappingAll(e) {
    for (let i = 1; i < e.length; i++) {
        if (isOverlapping(e[i - 1], e[i])) {
            return false;
        }
    }
    return true;
}

//# sourceMappingURL=is-overlapping.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/is-adjacent.js

/**
 * Returns true if x and y are adjacent, false otherwise.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 * for details
 *
 * @param x a double floating point number
 * @param y another double floating point number
 */
function isAdjacent(x, y) {
    return isOverlapping(x, y) ||
        isOverlapping(x, 2 * y) ||
        isOverlapping(2 * x, y);
}

//# sourceMappingURL=is-adjacent.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-is-integer.js

function eIsInteger(a) {
    a = e_compress_eCompress(a);
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 1 !== 0) {
            return false;
        }
    }
    return true;
}

//# sourceMappingURL=e-is-integer.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/index.js














































// Aliases for some functions which names were not changed due to them being
// used extensively in the literature with a particular recognizable name
const eAdd = fastExpansionSum;
const eAddDouble = growExpansion;
const eMult = expansionProduct;
const eMultDouble1 = scaleExpansion;
const eMultDouble2 = scaleExpansion2;
const node_operators = {
    //---- basic ----//
    fastTwoDiff: fast_two_diff_fastTwoDiff,
    fastTwoSum: basic_fast_two_sum_fastTwoSum,
    split: split_split,
    twoDiff: two_diff_twoDiff,
    twoProduct: basic_two_product_twoProduct,
    twoSum: basic_two_sum_twoSum,
    reduceSignificand: reduce_significand_reduceSignificand,
    //---- double floating point expansions ----//
    fastExpansionSum: fastExpansionSum, eAdd,
    growExpansion: growExpansion, eAddDouble,
    expansionProduct: expansionProduct, eMult,
    scaleExpansion: scaleExpansion, eMultDouble1,
    scaleExpansion2: scaleExpansion2, eMultDouble2,
    eDiv: eDiv,
    eLongDivide: eLongDivide,
    eIntDiv: eIntDiv,
    eRem: eRem,
    eCompress: e_compress_eCompress,
    eEstimate: eEstimate,
    eDiff: eDiff,
    eNegativeOf: eNegativeOf,
    eMultBy2: eMultBy2,
    eMultByNeg2: eMultByNeg2,
    eDivBy2: eDivBy2,
    eSign: e_sign_eSign,
    eCompare: eCompare,
    eAbs: eAbs,
    eToBitlength: eToBitlength,
    eIntPow: eIntPow,
    eCalculate: eCalculate,
    eSum: eSum,
    eProduct: eProduct,
    eToDd: eToDd,
    //---- double floating point representation ----//
    parseDouble: parse_double_parseDouble,
    parseDoubleDetailed: parse_double_parseDoubleDetailed,
    isBitAligned: is_bit_aligned_isBitAligned,
    msbExponent: msb_exponent_msbExponent,
    lsbExponent: lsb_exponent_lsbExponent,
    bitLength: bit_length_bitLength,
    expBitLength: expBitLength,
    doubleToBinaryString: double_to_binary_string_doubleToBinaryString,
    doubleToOctets: double_to_octets_doubleToOctets,
    getHighestSetBit: get_max_set_bit_getHighestSetBit,
    getLowestSetBit: get_max_set_bit_getLowestSetBit,
    exponent: exponent_exponent,
    significand: significand_significand,
    //---- geometric primitives
    orient2d: orient2d_orient2d,
    //---- others
    isAdjacent: isAdjacent,
    isNonOverlappingAll: isNonOverlappingAll,
    eIsInteger: eIsInteger
};


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/simultaneous-properties/closest-and-furthest-point-on-bezier/root-interval-to-distance-squared-interval.js

// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗
const root_interval_to_distance_squared_interval_estimate = eEstimate;
const td = two_diff_twoDiff;
const emult = eMult;
const eadd = eAdd;
const root_interval_to_distance_squared_interval_eps = Number.EPSILON;
/**
 * Returns the distance interval squared given the root interval (currently
 * ignoring multiplicity)
 *
 * @param box
 * @param p
 *
 * @internal
 */
function rootIntervalToDistanceSquaredInterval(box, p) {
    const bl = box[0];
    const tr = box[1];
    const minX = bl[0];
    const minY = bl[1];
    const maxX = tr[0];
    const maxY = tr[1];
    const x = p[0]; // <0>
    const y = p[1]; // <0>
    let minDSquared = Number.POSITIVE_INFINITY;
    let maxDSquared = Number.NEGATIVE_INFINITY;
    // for each corner of the interval box
    for (const [a, b] of [[minX, minY], [minX, maxY], [maxX, minY], [maxX, maxY]]) {
        /*
        // distance to 1st corner of interval box - `distance² = x² + y²`
        const dc1 = (a - x)**2 + (b - y)**2;
        // max absolute roundoff error of `dc1`
        // <4>dc1 <-- <4>(<3>(<1>(a - x)**2) + <3>(<1>((b - y)**2))
        const dc1E = 4*γ1*((a + x)**2 + (b + y)**2);
        const dc1Min = dc1 - dc1E;  // distance minus max error
        const dc1Max = dc1 + dc1E;  // distance plus max error
        */
        /** distance to 1st corner of interval box - `distance² = x² + y²` */
        const ax = td(a, x); // a - x
        const by = td(b, y); // b - y
        const dc1Exact = eadd(emult(ax, ax), emult(by, by)); // ax**2 + bx**2
        const dc1 = root_interval_to_distance_squared_interval_estimate(dc1Exact);
        const dc1Min = dc1 * (1 - root_interval_to_distance_squared_interval_eps); // distance minus max error
        const dc1Max = dc1 * (1 + root_interval_to_distance_squared_interval_eps); // distance plus max error
        if (dc1Min <= minDSquared) {
            minDSquared = dc1Min;
        }
        if (dc1Max >= maxDSquared) {
            maxDSquared = dc1Max;
        }
    }
    return [minDSquared, maxDSquared];
}

//# sourceMappingURL=root-interval-to-distance-squared-interval.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/simultaneous-properties/closest-and-furthest-point-on-bezier/get-coeffs/double-double/get-footpoint-poly-3-dd.js

// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗
const get_footpoint_poly_3_dd_td = node_twoDiff;
const qaq = node_ddAddDd;
const qmd = node_ddMultDouble2;
const qmq = node_ddMultDd;
const qm2 = node_ddMultBy2;
const qm4 = node_ddMultBy4;
const qdq = node_ddDiffDd;
/**
 * Returns the polynomial whose roots are all the `t` values on the given bezier
 * curve such that the line from the given point to the point on the bezier
 * evaluated at `t` is tangent to the bezier curve at `t`.
 *
 * * intermediate calculations are done (and the final result returned in)
 * double-double precision
 *
 * @param ps an order 3 bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 * @param p a point, e.g. `[1,2]`
 *
 * @internal
 */
function getFootpointPoly3Dd(ps, p) {
    //const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;
    const p0 = ps[0];
    const p1 = ps[1];
    const p2 = ps[2];
    const p3 = ps[3];
    const x0 = p0[0];
    const y0 = p0[1];
    const x1 = p1[0];
    const y1 = p1[1];
    const x2 = p2[0];
    const y2 = p2[1];
    const x3 = p3[0];
    const y3 = p3[1];
    const [x, y] = p;
    const xx0 = get_footpoint_poly_3_dd_td(x0, x); // exact
    const xx1 = get_footpoint_poly_3_dd_td(x1, x); // exact
    const xx2 = get_footpoint_poly_3_dd_td(x2, x); // exact
    const xx3 = get_footpoint_poly_3_dd_td(x3, x); // exact
    const yy0 = get_footpoint_poly_3_dd_td(y0, y); // exact
    const yy1 = get_footpoint_poly_3_dd_td(y1, y); // exact
    const yy2 = get_footpoint_poly_3_dd_td(y2, y); // exact
    const yy3 = get_footpoint_poly_3_dd_td(y3, y); // exact
    const x00 = qmq(xx0, xx0);
    const x01 = qmd(6, qmq(xx0, xx1));
    const x02 = qmd(6, qmq(xx0, xx2));
    const x03 = qm2(qmq(xx0, xx3));
    const x11 = qmd(9, qmq(xx1, xx1));
    const x12 = qmd(18, qmq(xx1, xx2));
    const x13 = qmd(6, qmq(xx1, xx3));
    const x22 = qmd(9, qmq(xx2, xx2));
    const x23 = qmd(6, qmq(xx2, xx3));
    const x33 = qmq(xx3, xx3);
    const y00 = qmq(yy0, yy0);
    const y01 = qmd(6, qmq(yy0, yy1));
    const y02 = qmd(6, qmq(yy0, yy2));
    const y03 = qm2(qmq(yy0, yy3));
    const y11 = qmd(9, qmq(yy1, yy1));
    const y12 = qmd(18, qmq(yy1, yy2));
    const y13 = qmd(6, qmq(yy1, yy3));
    const y22 = qmd(9, qmq(yy2, yy2));
    const y23 = qmd(6, qmq(yy2, yy3));
    const y33 = qmq(yy3, yy3);
    const q1 = qaq(x13, x22);
    const q2 = qaq(x03, x12);
    const q3 = qaq(x02, x11);
    const r1 = qaq(y13, y22);
    const r2 = qaq(y03, y12);
    const r3 = qaq(y02, y11);
    // const t5 = 6*(((((x33 - x23) + (x00 - x01)) + q1) + (q3 - q2)) + 
    //               ((((y33 - y23) + (y00 - y01)) + r1) + (r3 - r2)));
    const t5 = qmd(6, qaq(qaq(qaq(qaq(qdq(x33, x23), qdq(x00, x01)), q1), qdq(q3, q2)), qaq(qaq(qaq(qdq(y33, y23), qdq(y00, y01)), r1), qdq(r3, r2))));
    //const t4 = 5*((((x23 + 5*x01) + 3*q2) - 2*(q1 + 2*q3 + 3*x00)) +
    //              (((y23 + 5*y01) + 3*r2) - 2*(r1 + 2*r3 + 3*y00)));
    const t4 = qmd(5, qaq(qdq(qaq(qaq(x23, qmd(5, x01)), qmd(3, q2)), qm2(qaq(qaq(q1, qm2(q3)), qmd(3, x00)))), qdq(qaq(qaq(y23, qmd(5, y01)), qmd(3, r2)), qm2(qaq(qaq(r1, qm2(r3)), qmd(3, y00))))));
    //const t3 = 4*(((q1 - 3*(q2 - 2*q3)) - 5*(2*x01 - 3*x00)) +
    //              ((r1 - 3*(r2 - 2*r3)) - 5*(2*y01 - 3*y00)));
    const t3 = qm4(qaq(qdq(qdq(q1, qmd(3, (qdq(q2, qm2(q3))))), qmd(5, qdq(qm2(x01), qmd(3, x00)))), qdq(qdq(r1, qmd(3, (qdq(r2, qm2(r3))))), qmd(5, qdq(qm2(y01), qmd(3, y00))))));
    //const t2 = 3*((q2 - 2*(2*q3 - 5*(x01 - 2*x00))) +
    //              (r2 - 2*(2*r3 - 5*(y01 - 2*y00))));
    const t2 = qmd(3, qaq(qdq(q2, qm2(qdq(qm2(q3), qmd(5, qdq(x01, qm2(x00)))))), qdq(r2, qm2(qdq(qm2(r3), qmd(5, qdq(y01, qm2(y00))))))));
    //const t1 = 2*((q3 - 5*(x01 - 3*x00)) +
    //              (r3 - 5*(y01 - 3*y00)));
    const t1 = qm2(qaq(qdq(q3, qmd(5, (qdq(x01, qmd(3, x00))))), qdq(r3, qmd(5, (qdq(y01, qmd(3, y00)))))));
    //const t0 = ((x01 - 6*x00) +
    //            (y01 - 6*y00));
    const t0 = qaq(qdq(x01, qmd(6, x00)), qdq(y01, qmd(6, y00)));
    return [t5, t4, t3, t2, t1, t0];
}

//# sourceMappingURL=get-footpoint-poly-3-dd.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/simultaneous-properties/closest-and-furthest-point-on-bezier/get-coeffs/double-double/get-footpoint-poly-2-dd.js

// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗
const get_footpoint_poly_2_dd_td = node_twoDiff;
const get_footpoint_poly_2_dd_qaq = node_ddAddDd;
const get_footpoint_poly_2_dd_qmd = node_ddMultDouble2;
const get_footpoint_poly_2_dd_qmq = node_ddMultDd;
const get_footpoint_poly_2_dd_qm2 = node_ddMultBy2;
const qdifq = node_ddDiffDd;
const get_footpoint_poly_2_dd_qm4 = node_ddMultBy4;
/**
 * Returns the polynomial whose roots are all the `t` values on the given bezier
 * curve such that the line from the given point to the point on the bezier
 * evaluated at `t` is tangent to the bezier curve at `t`.
 *
 * * intermediate calculations are done (and the final result returned in)
 * double-double precision
 *
 * @param ps an order 2 bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1]]`
 * @param p a point, e.g. `[1,2]`
 *
 * @internal
 */
function getFootpointPoly2Dd(ps, p) {
    const [[x0, y0], [x1, y1], [x2, y2]] = ps;
    const [x, y] = p;
    const xx0 = get_footpoint_poly_2_dd_td(x0, x);
    const xx1 = get_footpoint_poly_2_dd_td(x1, x);
    const xx2 = get_footpoint_poly_2_dd_td(x2, x);
    const yy0 = get_footpoint_poly_2_dd_td(y0, y);
    const yy1 = get_footpoint_poly_2_dd_td(y1, y);
    const yy2 = get_footpoint_poly_2_dd_td(y2, y);
    const x00 = get_footpoint_poly_2_dd_qmq(xx0, xx0);
    const x01 = get_footpoint_poly_2_dd_qmq(xx0, xx1);
    const x02 = get_footpoint_poly_2_dd_qmq(xx0, xx2);
    const x11 = get_footpoint_poly_2_dd_qmq(xx1, xx1);
    const x12 = get_footpoint_poly_2_dd_qmq(xx1, xx2);
    const x22 = get_footpoint_poly_2_dd_qmq(xx2, xx2);
    const y00 = get_footpoint_poly_2_dd_qmq(yy0, yy0);
    const y01 = get_footpoint_poly_2_dd_qmq(yy0, yy1);
    const y02 = get_footpoint_poly_2_dd_qmq(yy0, yy2);
    const y11 = get_footpoint_poly_2_dd_qmq(yy1, yy1);
    const y12 = get_footpoint_poly_2_dd_qmq(yy1, yy2);
    const y22 = get_footpoint_poly_2_dd_qmq(yy2, yy2);
    const q1 = get_footpoint_poly_2_dd_qaq(y02, get_footpoint_poly_2_dd_qm2(y11));
    const r1 = get_footpoint_poly_2_dd_qaq(x02, get_footpoint_poly_2_dd_qm2(x11));
    //const t3 = ((y22 + y00) + 2*q1 - 4*(y12 + y01)) + 
    //           ((x22 + x00) + 2*r1 - 4*(x12 + x01));
    const t3 = get_footpoint_poly_2_dd_qaq(qdifq(get_footpoint_poly_2_dd_qaq(get_footpoint_poly_2_dd_qaq(y22, y00), get_footpoint_poly_2_dd_qm2(q1)), get_footpoint_poly_2_dd_qm4(get_footpoint_poly_2_dd_qaq(y12, y01))), qdifq(get_footpoint_poly_2_dd_qaq(get_footpoint_poly_2_dd_qaq(x22, x00), get_footpoint_poly_2_dd_qm2(r1)), get_footpoint_poly_2_dd_qm4(get_footpoint_poly_2_dd_qaq(x12, x01))));
    //const t2 = 3*(((y12 - q1) + (3*y01 - y00)) + 
    //              ((x12 - r1) + (3*x01 - x00)));
    const t2 = get_footpoint_poly_2_dd_qmd(3, get_footpoint_poly_2_dd_qaq(get_footpoint_poly_2_dd_qaq(qdifq(y12, q1), qdifq(get_footpoint_poly_2_dd_qmd(3, y01), y00)), get_footpoint_poly_2_dd_qaq(qdifq(x12, r1), qdifq(get_footpoint_poly_2_dd_qmd(3, x01), x00))));
    //const t1 = (q1 - 3*(2*y01 - y00)) + 
    //           (r1 - 3*(2*x01 - x00));
    const t1 = get_footpoint_poly_2_dd_qaq(qdifq(q1, get_footpoint_poly_2_dd_qmd(3, qdifq(get_footpoint_poly_2_dd_qm2(y01), y00))), qdifq(r1, get_footpoint_poly_2_dd_qmd(3, qdifq(get_footpoint_poly_2_dd_qm2(x01), x00))));
    //const t0 = (y01 - y00) + 
    //           (x01 - x00);
    const t0 = get_footpoint_poly_2_dd_qaq(qdifq(y01, y00), qdifq(x01, x00));
    return [t3, t2, t1, t0];
}

//# sourceMappingURL=get-footpoint-poly-2-dd.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/simultaneous-properties/closest-and-furthest-point-on-bezier/get-coeffs/double-double/get-footpoint-poly-1-dd.js

// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗
const get_footpoint_poly_1_dd_tp = node_twoProduct;
const get_footpoint_poly_1_dd_qaq = node_ddAddDd;
const qmn2 = node_ddMultByNeg2;
const get_footpoint_poly_1_dd_qdifq = node_ddDiffDd;
/**
 * Returns the polynomial whose roots are all the `t` values on the given bezier
 * curve such that the line from the given point to the point on the bezier
 * evaluated at `t` is tangent to the bezier curve at `t`.
 *
 * * intermediate calculations are done (and the final result returned in)
 * double-double precision
 *
 * @param ps an order 1 bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1]]`
 * @param p a point, e.g. `[1,2]`
 *
 * @internal
 */
function getFootpointPoly1Dd(ps, p) {
    const [[x0, y0], [x1, y1]] = ps;
    const [x, y] = p;
    const xx0 = x0 - x;
    const xx1 = x1 - x;
    const yy0 = y0 - y;
    const yy1 = y1 - y;
    const x00 = get_footpoint_poly_1_dd_tp(xx0, xx0);
    const x01 = get_footpoint_poly_1_dd_tp(xx0, xx1);
    const x11 = get_footpoint_poly_1_dd_tp(xx1, xx1);
    const y00 = get_footpoint_poly_1_dd_tp(yy0, yy0);
    const y01 = get_footpoint_poly_1_dd_tp(yy0, yy1);
    const y11 = get_footpoint_poly_1_dd_tp(yy1, yy1);
    const s1 = get_footpoint_poly_1_dd_qaq(x01, y01);
    const s2 = get_footpoint_poly_1_dd_qaq(y00, x00);
    //const t1 = (x11 + y11) + (s2 - 2*s1)
    const t1 = get_footpoint_poly_1_dd_qaq(get_footpoint_poly_1_dd_qaq(x11, y11), get_footpoint_poly_1_dd_qaq(s2, qmn2(s1)));
    //const t0 = s1 - s2;
    const t0 = get_footpoint_poly_1_dd_qdifq(s1, s2);
    return [t1, t0];
}

//# sourceMappingURL=get-footpoint-poly-1-dd.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/simultaneous-properties/closest-and-furthest-point-on-bezier/get-coeffs/exact/get-footpoint-poly-3-exact.js

// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗
const get_footpoint_poly_3_exact_td = two_diff_twoDiff;
const get_footpoint_poly_3_exact_emult = eMult;
const get_footpoint_poly_3_exact_sce = scaleExpansion2;
const em2 = eMultBy2;
const emn2 = eMultByNeg2;
const get_footpoint_poly_3_exact_eadd = eAdd;
const ediff = eDiff;
/**
 * Returns the *exact* polynomial whose roots are all the `t` values on the
 * given bezier curve such that the line from the given point to the point on
 * the bezier evaluated at `t` is tangent to the bezier curve at `t`.
 *
 * * The returned polynomial coefficients are given densely as an array of
 * [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf) floating
 * point expansions from highest to lowest power,
 * e.g. `[[5],[-3],[0]]` represents the polynomial `5x^2 - 3x`.
 *
 * @param ps an order 3 bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 * @param p a point, e.g. `[1,2]`
 */
function getFootpointPoly3Exact(ps, p) {
    //const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;
    const p0 = ps[0];
    const p1 = ps[1];
    const p2 = ps[2];
    const p3 = ps[3];
    const x0 = p0[0];
    const y0 = p0[1];
    const x1 = p1[0];
    const y1 = p1[1];
    const x2 = p2[0];
    const y2 = p2[1];
    const x3 = p3[0];
    const y3 = p3[1];
    const [x, y] = p;
    const xx0 = get_footpoint_poly_3_exact_td(x0, x);
    const xx1 = get_footpoint_poly_3_exact_td(x1, x);
    const xx2 = get_footpoint_poly_3_exact_td(x2, x);
    const xx3 = get_footpoint_poly_3_exact_td(x3, x);
    const yy0 = get_footpoint_poly_3_exact_td(y0, y);
    const yy1 = get_footpoint_poly_3_exact_td(y1, y);
    const yy2 = get_footpoint_poly_3_exact_td(y2, y);
    const yy3 = get_footpoint_poly_3_exact_td(y3, y);
    const x00 = get_footpoint_poly_3_exact_emult(xx0, xx0);
    const x01 = get_footpoint_poly_3_exact_sce(6, get_footpoint_poly_3_exact_emult(xx0, xx1));
    const x02 = get_footpoint_poly_3_exact_sce(6, get_footpoint_poly_3_exact_emult(xx0, xx2));
    const x03 = em2(get_footpoint_poly_3_exact_emult(xx0, xx3));
    const x11 = get_footpoint_poly_3_exact_sce(9, get_footpoint_poly_3_exact_emult(xx1, xx1));
    const x12 = get_footpoint_poly_3_exact_sce(18, get_footpoint_poly_3_exact_emult(xx1, xx2));
    const x13 = get_footpoint_poly_3_exact_sce(6, get_footpoint_poly_3_exact_emult(xx1, xx3));
    const x22 = get_footpoint_poly_3_exact_sce(9, get_footpoint_poly_3_exact_emult(xx2, xx2));
    const x23 = get_footpoint_poly_3_exact_sce(6, get_footpoint_poly_3_exact_emult(xx2, xx3));
    const x33 = get_footpoint_poly_3_exact_emult(xx3, xx3);
    const y00 = get_footpoint_poly_3_exact_emult(yy0, yy0);
    const y01 = get_footpoint_poly_3_exact_sce(6, get_footpoint_poly_3_exact_emult(yy0, yy1));
    const y02 = get_footpoint_poly_3_exact_sce(6, get_footpoint_poly_3_exact_emult(yy0, yy2));
    const y03 = em2(get_footpoint_poly_3_exact_emult(yy0, yy3));
    const y11 = get_footpoint_poly_3_exact_sce(9, get_footpoint_poly_3_exact_emult(yy1, yy1));
    const y12 = get_footpoint_poly_3_exact_sce(18, get_footpoint_poly_3_exact_emult(yy1, yy2));
    const y13 = get_footpoint_poly_3_exact_sce(6, get_footpoint_poly_3_exact_emult(yy1, yy3));
    const y22 = get_footpoint_poly_3_exact_sce(9, get_footpoint_poly_3_exact_emult(yy2, yy2));
    const y23 = get_footpoint_poly_3_exact_sce(6, get_footpoint_poly_3_exact_emult(yy2, yy3));
    const y33 = get_footpoint_poly_3_exact_emult(yy3, yy3);
    const q1 = get_footpoint_poly_3_exact_eadd(x13, x22);
    const q2 = get_footpoint_poly_3_exact_eadd(x03, x12);
    const q3 = get_footpoint_poly_3_exact_eadd(x02, x11);
    const r1 = get_footpoint_poly_3_exact_eadd(y13, y22);
    const r2 = get_footpoint_poly_3_exact_eadd(y03, y12);
    const r3 = get_footpoint_poly_3_exact_eadd(y02, y11);
    //const t5 = 6*((x33 - x23 + q1 - q2 + q3 - x01 + x00) + 
    //              (y33 - y23 + r1 - r2 + r3 - y01 + y00));
    const t5a = ediff(get_footpoint_poly_3_exact_eadd(get_footpoint_poly_3_exact_eadd(x33, x00), get_footpoint_poly_3_exact_eadd(q1, q3)), (get_footpoint_poly_3_exact_eadd(get_footpoint_poly_3_exact_eadd(q2, x23), x01)));
    const t5b = ediff(get_footpoint_poly_3_exact_eadd(get_footpoint_poly_3_exact_eadd(y33, y00), get_footpoint_poly_3_exact_eadd(r1, r3)), (get_footpoint_poly_3_exact_eadd(get_footpoint_poly_3_exact_eadd(r2, y23), y01)));
    const t5 = get_footpoint_poly_3_exact_sce(6, get_footpoint_poly_3_exact_eadd(t5a, t5b));
    //const t4 = 5*((x23 - 2*(q1 + 2*q3 + 3*x00) + 3*q2 + 5*x01) +
    //              (y23 - 2*(r1 + 2*r3 + 3*y00) + 3*r2 + 5*y01));
    const t4a = get_footpoint_poly_3_exact_eadd(emn2(get_footpoint_poly_3_exact_eadd(get_footpoint_poly_3_exact_eadd(q1, em2(q3)), get_footpoint_poly_3_exact_sce(3, x00))), get_footpoint_poly_3_exact_eadd(get_footpoint_poly_3_exact_eadd(x23, get_footpoint_poly_3_exact_sce(3, q2)), get_footpoint_poly_3_exact_sce(5, x01)));
    const t4b = get_footpoint_poly_3_exact_eadd(emn2(get_footpoint_poly_3_exact_eadd(get_footpoint_poly_3_exact_eadd(r1, em2(r3)), get_footpoint_poly_3_exact_sce(3, y00))), get_footpoint_poly_3_exact_eadd(get_footpoint_poly_3_exact_eadd(y23, get_footpoint_poly_3_exact_sce(3, r2)), get_footpoint_poly_3_exact_sce(5, y01)));
    const t4 = get_footpoint_poly_3_exact_sce(5, get_footpoint_poly_3_exact_eadd(t4a, t4b));
    //const t3 = 4*((q1 - 3*(q2 - 2*q3) - 5*(2*x01 - 3*x00)) +
    //              (r1 - 3*(r2 - 2*r3) - 5*(2*y01 - 3*y00)));
    const t3a = get_footpoint_poly_3_exact_eadd(get_footpoint_poly_3_exact_eadd(q1, get_footpoint_poly_3_exact_sce(3, (ediff(em2(q3), q2)))), get_footpoint_poly_3_exact_sce(5, (ediff(get_footpoint_poly_3_exact_sce(3, x00), em2(x01)))));
    const t3b = get_footpoint_poly_3_exact_eadd(get_footpoint_poly_3_exact_eadd(r1, get_footpoint_poly_3_exact_sce(3, (ediff(em2(r3), r2)))), get_footpoint_poly_3_exact_sce(5, (ediff(get_footpoint_poly_3_exact_sce(3, y00), em2(y01)))));
    const t3 = get_footpoint_poly_3_exact_sce(4, get_footpoint_poly_3_exact_eadd(t3a, t3b));
    //const t2 = 3*((q2 - 2*(2*q3 - 5*(x01 - 2*x00))) +
    //              (r2 - 2*(2*r3 - 5*(y01 - 2*y00))));
    const t2a = ediff(q2, em2(ediff(em2(q3), get_footpoint_poly_3_exact_sce(5, (ediff(x01, em2(x00)))))));
    const t2b = ediff(r2, em2(ediff(em2(r3), get_footpoint_poly_3_exact_sce(5, (ediff(y01, em2(y00)))))));
    const t2 = get_footpoint_poly_3_exact_sce(3, get_footpoint_poly_3_exact_eadd(t2a, t2b));
    //const t1 = 2*((q3 - 5*(x01 - 3*x00)) +
    //              (r3 - 5*(y01 - 3*y00)));
    const t1a = ediff(q3, get_footpoint_poly_3_exact_sce(5, (ediff(x01, get_footpoint_poly_3_exact_sce(3, x00)))));
    const t1b = ediff(r3, get_footpoint_poly_3_exact_sce(5, (ediff(y01, get_footpoint_poly_3_exact_sce(3, y00)))));
    const t1 = em2(get_footpoint_poly_3_exact_eadd(t1a, t1b));
    //const t0 = ((x01 - 6*x00) +
    //            (y01 - 6*y00));
    const t0a = ediff(x01, get_footpoint_poly_3_exact_sce(6, x00));
    const t0b = ediff(y01, get_footpoint_poly_3_exact_sce(6, y00));
    const t0 = get_footpoint_poly_3_exact_eadd(t0a, t0b);
    return [t5, t4, t3, t2, t1, t0];
}

//# sourceMappingURL=get-footpoint-poly-3-exact.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/simultaneous-properties/closest-and-furthest-point-on-bezier/get-coeffs/exact/get-footpoint-poly-2-exact.js

// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗
const get_footpoint_poly_2_exact_td = two_diff_twoDiff;
const get_footpoint_poly_2_exact_emult = eMult;
const get_footpoint_poly_2_exact_sce = scaleExpansion2;
const get_footpoint_poly_2_exact_em2 = eMultBy2;
const get_footpoint_poly_2_exact_eadd = eAdd;
const get_footpoint_poly_2_exact_ediff = eDiff;
/**
 * Returns the result of multiplying a floating point expansion by 4.
 *
 * * **error free**
 *
 * * see [[Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param e a floating point expansion
 *
 * @internal
 */
function em4(e) {
    const e_ = [];
    for (let i = 0; i < e.length; i++) {
        e_.push(4 * e[i]);
    }
    return e_;
}
/**
 * Returns the *exact* polynomial whose roots are all the `t` values on the
 * given bezier curve such that the line from the given point to the point on
 * the bezier evaluated at `t` is tangent to the bezier curve at `t`.
 *
 * * The returned polynomial coefficients are given densely as an array of
 * [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf) floating
 * point expansions from highest to lowest power,
 * e.g. `[[5],[-3],[0]]` represents the polynomial `5x^2 - 3x`.
 *
 * @param ps an order 2 curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1]]`
 * @param p a point, e.g. `[1,2]`
 *
 * @internal
 */
function getFootpointPoly2Exact(ps, p) {
    const [[x0, y0], [x1, y1], [x2, y2]] = ps;
    const [x, y] = p;
    const xx0 = get_footpoint_poly_2_exact_td(x0, x);
    const xx1 = get_footpoint_poly_2_exact_td(x1, x);
    const xx2 = get_footpoint_poly_2_exact_td(x2, x);
    const yy0 = get_footpoint_poly_2_exact_td(y0, y);
    const yy1 = get_footpoint_poly_2_exact_td(y1, y);
    const yy2 = get_footpoint_poly_2_exact_td(y2, y);
    const x00 = get_footpoint_poly_2_exact_emult(xx0, xx0);
    const x01 = get_footpoint_poly_2_exact_emult(xx0, xx1);
    const x02 = get_footpoint_poly_2_exact_emult(xx0, xx2);
    const x11 = get_footpoint_poly_2_exact_emult(xx1, xx1);
    const x12 = get_footpoint_poly_2_exact_emult(xx1, xx2);
    const x22 = get_footpoint_poly_2_exact_emult(xx2, xx2);
    const y00 = get_footpoint_poly_2_exact_emult(yy0, yy0);
    const y01 = get_footpoint_poly_2_exact_emult(yy0, yy1);
    const y02 = get_footpoint_poly_2_exact_emult(yy0, yy2);
    const y11 = get_footpoint_poly_2_exact_emult(yy1, yy1);
    const y12 = get_footpoint_poly_2_exact_emult(yy1, yy2);
    const y22 = get_footpoint_poly_2_exact_emult(yy2, yy2);
    const q1 = get_footpoint_poly_2_exact_eadd(y02, get_footpoint_poly_2_exact_em2(y11));
    const r1 = get_footpoint_poly_2_exact_eadd(x02, get_footpoint_poly_2_exact_em2(x11));
    //const t3 = y22 + 2*q1 - 4*(y12 + y01) + y00 + 
    //           x22 + 2*r1 - 4*(x12 + x01) + x00;
    const t3a = get_footpoint_poly_2_exact_eadd(get_footpoint_poly_2_exact_ediff(get_footpoint_poly_2_exact_eadd(x22, get_footpoint_poly_2_exact_em2(r1)), em4(get_footpoint_poly_2_exact_eadd(x12, x01))), x00);
    const t3b = get_footpoint_poly_2_exact_eadd(get_footpoint_poly_2_exact_ediff(get_footpoint_poly_2_exact_eadd(y22, get_footpoint_poly_2_exact_em2(q1)), em4(get_footpoint_poly_2_exact_eadd(y12, y01))), y00);
    const t3 = get_footpoint_poly_2_exact_eadd(t3a, t3b);
    //const t2 = 3*(y12 - q1 + 3*y01 - y00 + 
    //              x12 - r1 + 3*x01 - x00);
    const t2a = get_footpoint_poly_2_exact_eadd(get_footpoint_poly_2_exact_ediff(x12, r1), get_footpoint_poly_2_exact_ediff(get_footpoint_poly_2_exact_sce(3, x01), x00));
    const t2b = get_footpoint_poly_2_exact_eadd(get_footpoint_poly_2_exact_ediff(y12, q1), get_footpoint_poly_2_exact_ediff(get_footpoint_poly_2_exact_sce(3, y01), y00));
    const t2 = get_footpoint_poly_2_exact_sce(3, get_footpoint_poly_2_exact_eadd(t2a, t2b));
    //const t1 = q1 - 3*(2*y01 - y00) + 
    //           r1 - 3*(2*x01 - x00);
    const t1a = get_footpoint_poly_2_exact_ediff(q1, get_footpoint_poly_2_exact_sce(3, get_footpoint_poly_2_exact_ediff(get_footpoint_poly_2_exact_em2(y01), y00)));
    const t1b = get_footpoint_poly_2_exact_ediff(r1, get_footpoint_poly_2_exact_sce(3, get_footpoint_poly_2_exact_ediff(get_footpoint_poly_2_exact_em2(x01), x00)));
    const t1 = get_footpoint_poly_2_exact_eadd(t1a, t1b);
    //const t0 = y01 - y00 + 
    //           x01 - x00;
    const t0a = get_footpoint_poly_2_exact_ediff(y01, y00);
    const t0b = get_footpoint_poly_2_exact_ediff(x01, x00);
    const t0 = get_footpoint_poly_2_exact_eadd(t0a, t0b);
    return [t3, t2, t1, t0];
}

//# sourceMappingURL=get-footpoint-poly-2-exact.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/simultaneous-properties/closest-and-furthest-point-on-bezier/get-coeffs/exact/get-footpoint-poly-1-exact.js

// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗
const get_footpoint_poly_1_exact_td = two_diff_twoDiff;
const get_footpoint_poly_1_exact_emult = eMult;
const get_footpoint_poly_1_exact_emn2 = eMultByNeg2;
const get_footpoint_poly_1_exact_eadd = eAdd;
const get_footpoint_poly_1_exact_ediff = eDiff;
/**
 * Returns the *exact* polynomial whose roots are all the `t` values on the
 * given bezier curve such that the line from the given point to the point on
 * the bezier evaluated at `t` is tangent to the bezier curve at `t`.
 *
 * * The returned polynomial coefficients are given densely as an array of
 * [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf) floating
 * point expansions from highest to lowest power,
 * e.g. `[[5],[-3],[0]]` represents the polynomial `5x^2 - 3x`.
 *
 * @param ps an order 1 bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1]]`
 * @param p a point, e.g. `[1,2]`
 *
 * @internal
 */
function getFootpointPoly1Exact(ps, p) {
    const [[x0, y0], [x1, y1]] = ps;
    const [x, y] = p;
    const xx0 = get_footpoint_poly_1_exact_td(x0, x);
    const xx1 = get_footpoint_poly_1_exact_td(x1, x);
    const yy0 = get_footpoint_poly_1_exact_td(y0, y);
    const yy1 = get_footpoint_poly_1_exact_td(y1, y);
    const x00 = get_footpoint_poly_1_exact_emult(xx0, xx0);
    const x01 = get_footpoint_poly_1_exact_emult(xx0, xx1);
    const x11 = get_footpoint_poly_1_exact_emult(xx1, xx1);
    const y00 = get_footpoint_poly_1_exact_emult(yy0, yy0);
    const y01 = get_footpoint_poly_1_exact_emult(yy0, yy1);
    const y11 = get_footpoint_poly_1_exact_emult(yy1, yy1);
    const s1 = get_footpoint_poly_1_exact_eadd(x01, y01);
    const s2 = get_footpoint_poly_1_exact_eadd(y00, x00);
    //const t1 = x11 + y11 - 2*s1 + s2;
    const t1 = get_footpoint_poly_1_exact_eadd(get_footpoint_poly_1_exact_eadd(x11, y11), get_footpoint_poly_1_exact_eadd(get_footpoint_poly_1_exact_emn2(s1), s2));
    //const t0 = s1 - s2;
    const t0 = get_footpoint_poly_1_exact_ediff(s1, s2);
    return [t1, t0];
}

//# sourceMappingURL=get-footpoint-poly-1-exact.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/simultaneous-properties/closest-and-furthest-point-on-bezier/get-coeffs/get-closest-on-bezier-from-point-error-counters.js
const get_closest_on_bezier_from_point_error_counters_abs = Math.abs;
/**
 * Returns a representation of the error when calculating the polynomial whose
 * roots are all the `t` values on the given bezier curve such that the line
 * from the given point to the point on the bezier evaluated at `t` is tangent
 * to the bezier at `t`.
 *
 * @param ps a cubic bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 * @param p a point, e.g. `[1,2]`
 *
 * ```
 * return [
 *      t5_,  // <9>
 *      t4_,  // <10>
 *      t3_,  // <10>
 *      t2_,  // <10>
 *      t1_,  // <9>
 *      t0_   // <7>
 * ];
 * ```
 *
 * @internal
 */
function getClosestOnBezier3FromPointErrorCounters(ps, p) {
    //const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;
    //const [xp, yp] = p;
    const p0 = ps[0];
    const p1 = ps[1];
    const p2 = ps[2];
    const p3 = ps[3];
    const x0_ = get_closest_on_bezier_from_point_error_counters_abs(p0[0]); // <0>  (error counters)
    const y0_ = get_closest_on_bezier_from_point_error_counters_abs(p0[1]); // <0>
    const x1_ = get_closest_on_bezier_from_point_error_counters_abs(p1[0]); // <0>
    const y1_ = get_closest_on_bezier_from_point_error_counters_abs(p1[1]); // <0>
    const x2_ = get_closest_on_bezier_from_point_error_counters_abs(p2[0]); // <0>
    const y2_ = get_closest_on_bezier_from_point_error_counters_abs(p2[1]); // <0>
    const x3_ = get_closest_on_bezier_from_point_error_counters_abs(p3[0]); // <0>
    const y3_ = get_closest_on_bezier_from_point_error_counters_abs(p3[1]); // <0>
    const xp_ = get_closest_on_bezier_from_point_error_counters_abs(p[0]); // <0>
    const yp_ = get_closest_on_bezier_from_point_error_counters_abs(p[1]); // <0>
    // <1>xx0 <-- <1>(x0 - xp);
    const xx0_ = x0_ + xp_;
    // <1>xx1 <-- <1>(x1 - xp);
    const xx1_ = x1_ + xp_;
    // <1>xx2 <-- <1>(x2 - xp);
    const xx2_ = x2_ + xp_;
    // <1>xx3 <-- <1>(x3 - xp);
    const xx3_ = x3_ + xp_;
    // <1>yy0 <-- <1>(y0 - yp);
    const yy0_ = y0_ + yp_;
    // <1>yy1 <-- <1>(y1 - yp);
    const yy1_ = y1_ + yp_;
    // <1>yy2 <-- <1>(y2 - yp);
    const yy2_ = y2_ + yp_;
    // <1>yy3 <-- <1>(y3 - yp);
    const yy3_ = y3_ + yp_;
    // <3>x00 <-- <3>(<1>xx0*<1>xx0);
    const x00_ = xx0_ * xx0_;
    // <4>x01 <-- <4>(6 *<3>(<1>xx0*<1>xx1));
    const x01_ = 6 * xx0_ * xx1_;
    // <4>x02 <-- <4>(6 *<3>(<1>xx0*<1>xx2));
    const x02_ = 6 * xx0_ * xx2_;
    // <3>x03 <-- 2 *<3>(<1>xx0*<1>xx3);
    const x03_ = 2 * xx0_ * xx3_;
    // <4>x11 <-- <4>(9 *<3>(<1>xx1*<1>xx1));
    const x11_ = 9 * xx1_ * xx1_;
    // <4>x12 <-- <4>(18*<3>(<1>xx1*<1>xx2));
    const x12_ = 18 * xx1_ * xx2_;
    // <4>x13 <-- <4>(6 *<3>(<1>xx1*<1>xx3));
    const x13_ = 6 * xx1_ * xx3_;
    // <4>x22 <-- <4>(9 *<3>(<1>xx2*<1>xx2));
    const x22_ = 9 * xx2_ * xx2_;
    // <4>x23 <-- <4>(6 *<3>(<1>xx2*<1>xx3));
    const x23_ = 6 * xx2_ * xx3_;
    // <3>x33 <--    <3>(<1>xx3*<1>xx3);
    const x33_ = xx3_ * xx3_;
    const y00_ = yy0_ * yy0_;
    const y01_ = 6 * yy0_ * yy1_;
    const y02_ = 6 * yy0_ * yy2_;
    const y03_ = 2 * yy0_ * yy3_;
    const y11_ = 9 * yy1_ * yy1_;
    const y12_ = 18 * yy1_ * yy2_;
    const y13_ = 6 * yy1_ * yy3_;
    const y22_ = 9 * yy2_ * yy2_;
    const y23_ = 6 * yy2_ * yy3_;
    const y33_ = yy3_ * yy3_;
    // <5>q1 <-- (5>(<4>x13 + <4>x22);
    const q1_ = x13_ + x22_;
    // <5>q2 <-- (5>(<3>x03 + <4>x12);
    const q2_ = x03_ + x12_;
    // <5>q3 <-- (5>(<4>x02 + <4>x11);
    const q3_ = x02_ + x11_;
    const r1_ = y13_ + y22_; // <5>
    const r2_ = y03_ + y12_; // <5>
    const r3_ = y02_ + y11_; // <5>
    // <9>t5 <-- <9>(6*<8>(<7>(<6>(<5>(<4>(x33 - x23) + <4>(x00 - x01)) + <5>q1) + <6>(q3 - q2)) + 
    //                     <7>(<6>(<5>(<4>(y33 - y23) + <4>(y00 - y01)) + <5>r1) + <6>(r3 - r2))));
    const t5_ = 6 * (((((x33_ + x23_) + (x00_ + x01_)) + q1_) + (q3_ + q2_)) +
        ((((y33_ + y23_) + (y00_ + y01_)) + r1_) + (r3_ + r2_)));
    // <10>t4 <-- <10>(5*<9>(<8>(<7>(<6>(x23 + <5>(5*x01)) + <6>(3*q2)) - 2*<7>(<6>(q1 + 2*q3) + <5>(3*x00))) +
    //                       <8>(<7>(<6>(y23 + <5>(5*y01)) + <6>(3*r2)) - 2*<7>(<6>(r1 + 2*r3) + <5>(3*y00)))));
    const t4_ = 5 * ((((x23_ + 5 * x01_) + 3 * q2_) + 2 * (q1_ + 2 * q3_ + 3 * x00_)) +
        (((y23_ + 5 * y01_) + 3 * r2_) + 2 * (r1_ + 2 * r3_ + 3 * y00_)));
    // <10>t3 <-- 4*<10>(<9>(<8>(q1 - <7>(3*<6>(q2 - 2*q3))) - <7>(5*<6>(2*x01 - <5>(3*x00)))) +
    //                 <9>(<8>(r1 - <7>(3*<6>(r2 - 2*r3))) - <7>(5*<6>(2*y01 - <5>(3*y00)))))
    const t3_ = 4 * (((q1_ + 3 * (q2_ + 2 * q3_)) + 5 * (2 * x01_ + 3 * x00_)) +
        ((r1_ + 3 * (r2_ + 2 * r3_)) + 5 * (2 * y01_ + 3 * y00_)));
    // <10>t2 <-- <10>(3*<9>(<8>(q2 - 2*<7>(2*q3 - <6>(5*<5>(x01 - 2*x00)))) +
    //                       <8>(r2 - 2*<7>(2*r3 - <6>(5*<5>(y01 - 2*y00))))));
    const t2_ = 3 * ((q2_ + 2 * (2 * q3_ + 5 * (x01_ + 2 * x00_))) +
        (r2_ + 2 * (2 * r3_ + 5 * (y01_ + 2 * y00_))));
    // <9>t1 <-- 2*<9>(<8>(q3 - <7>(5*<6>(x01 - <5>(3*x00)))) +
    //                 <8>(r3 - <7>(5*<6>(y01 - <5>(3*y00)))));
    const t1_ = 2 * ((q3_ + 5 * (x01_ + 3 * x00_)) +
        (r3_ + 5 * (y01_ + 3 * y00_)));
    // <7>t0 <-- <7>(<6>(x01 - <5>(6*x00)) +
    //              <6>(y01 - <5>(6*y00)));
    const t0_ = ((x01_ + 6 * x00_) +
        (y01_ + 6 * y00_));
    return [
        t5_,
        t4_,
        t3_,
        t2_,
        t1_,
        t0_ // <7>
    ];
}
/**
 * Returns a representation of the error when calculating the polynomial whose
 * roots are all the `t` values on the given bezier curve such that the line
 * from the given point to the point on the bezier evaluated at `t` is tangent
 * to the bezier at `t`.
 *
 * @param ps a quadratic bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1]]`
 * @param p a point, e.g. `[1,2]`
 * ```
 * return [
 *      t3_,  // <7>
 *      t2_,  // <8>
 *      t1_,  // <7>
 *      t0_   // <5>
 * ];
 * ```
 *
 * @internal
 */
function getClosestOnBezier2FromPointErrorCounters(ps, p) {
    //const [[x0, y0], [x1, y1], [x2, y2]] = ps;
    //const [xp, yp] = p;
    const p0 = ps[0];
    const p1 = ps[1];
    const p2 = ps[2];
    const x0_ = get_closest_on_bezier_from_point_error_counters_abs(p0[0]); // <0>
    const y0_ = get_closest_on_bezier_from_point_error_counters_abs(p0[1]); // <0>
    const x1_ = get_closest_on_bezier_from_point_error_counters_abs(p1[0]); // <0>
    const y1_ = get_closest_on_bezier_from_point_error_counters_abs(p1[1]); // <0>
    const x2_ = get_closest_on_bezier_from_point_error_counters_abs(p2[0]); // <0>
    const y2_ = get_closest_on_bezier_from_point_error_counters_abs(p2[1]); // <0>
    const xp_ = get_closest_on_bezier_from_point_error_counters_abs(p[0]); // <0>
    const yp_ = get_closest_on_bezier_from_point_error_counters_abs(p[1]); // <0>
    // <1>xx0 <-- <1>(x0 - xp);
    const xx0_ = x0_ + xp_;
    // <1>xx1 <-- <1>(x1 - xp);
    const xx1_ = x1_ + xp_;
    // <1>xx2 <-- <1>(x2 - xp);
    const xx2_ = x2_ + xp_;
    // <1>yy0 <-- <1>(y0 - yp);
    const yy0_ = y0_ + yp_;
    // <1>yy1 <-- <1>(y1 - yp);
    const yy1_ = y1_ + yp_;
    // <1>yy2 <-- <1>(y2 - yp);
    const yy2_ = y2_ + yp_;
    // <3>x00 <-- <3>(xx0*xx0);
    const x00_ = xx0_ * xx0_;
    // <3>x01 <-- <3>(xx0*xx1);
    const x01_ = xx0_ * xx1_;
    // <3>x02 <-- <3>(xx0*xx2);
    const x02_ = xx0_ * xx2_;
    // <3>x11 <-- <3>(xx1*xx1);
    const x11_ = xx1_ * xx1_;
    // <3>x12 <-- <3>(xx1*xx2);
    const x12_ = xx1_ * xx2_;
    // <3>x22 <-- <3>(xx2*xx2);
    const x22_ = xx2_ * xx2_;
    const y00_ = yy0_ * yy0_;
    const y01_ = yy0_ * yy1_;
    const y02_ = yy0_ * yy2_;
    const y11_ = yy1_ * yy1_;
    const y12_ = yy1_ * yy2_;
    const y22_ = yy2_ * yy2_;
    // <4>q1 <-- <4>(y02 + 2*y11);
    const q1_ = y02_ + 2 * y11_;
    // <4>r1 <-- <4>(x02 + 2*x11);
    const r1_ = x02_ + 2 * x11_;
    // <7>t3 <-- <7>(<6>(<5>(<4>(y22 + y00) + 2*q1) - 4*<4>(y12 + y01))) + 
    //              (<6>(<5>(<4>(x22 + x00) + 2*r1) - 4*<4>(x12 + x01)));
    const t3_ = ((y22_ + y00_) + 2 * q1_ + 4 * (y12_ + y01_)) +
        ((x22_ + x00_) + 2 * r1_ + 4 * (x12_ + x01_));
    // <8>t2 <-- <8>(3*<7>(<6>(<5>(y12 - q1) + <5>(<4>(3*y01) - y00)) + 
    //                     <6>(<5>(x12 - r1) + <5>(<4>(3*x01) - x00))));
    const t2_ = 3 * (((y12_ + q1_) + (3 * y01_ + y00_)) +
        ((x12_ + r1_) + (3 * x01_ + x00_)));
    // <7>t1 <-- <7>(<6>(<4>q1 - <5>(3*<4>(2*y01 - y00))) + 
    //               <6>(<4>r1 - <5>(3*<4>(2*x01 - x00))));
    const t1_ = (q1_ + 3 * (2 * y01_ + y00_)) +
        (r1_ + 3 * (2 * x01_ + x00_));
    // <5>t0 <-- <5>(<4>(y01 - y00) + 
    //              <4>(x01 - x00));
    const t0_ = (y01_ + y00_) +
        (x01_ + x00_);
    return [
        t3_,
        t2_,
        t1_,
        t0_ // <5>
    ];
}
/**
 * Returns a representation of the error when calculating the polynomial whose
 * roots are all the `t` values on the given bezier curve such that the line
 * from the given point to the point on the bezier evaluated at `t` is tangent
 * to the bezier at `t`.
 *
 * @param ps a linear bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1]]`
 * @param p a point, e.g. `[1,2]`
 *
 * ```
 * return [
 *     t1,  // <6>
 *     t0   // <5>
 * ];
 * ```
 *
 * @internal
 */
function getClosestOnBezier1FromPointErrorCounters(ps, p) {
    //const [[x0, y0], [x1, y1]] = ps;
    //const [xp, yp] = p;
    const p0 = ps[0];
    const p1 = ps[1];
    const x0_ = get_closest_on_bezier_from_point_error_counters_abs(p0[0]); // <0>
    const y0_ = get_closest_on_bezier_from_point_error_counters_abs(p0[1]); // <0>
    const x1_ = get_closest_on_bezier_from_point_error_counters_abs(p1[0]); // <0>
    const y1_ = get_closest_on_bezier_from_point_error_counters_abs(p1[1]); // <0>
    const xp_ = get_closest_on_bezier_from_point_error_counters_abs(p[0]); // <0>
    const yp_ = get_closest_on_bezier_from_point_error_counters_abs(p[1]); // <0>
    // <1>xx0 <-- <1>(x0 - xp);
    const xx0_ = x0_ + xp_;
    // <1>xx1 <-- <1>(x1 - xp);    
    const xx1_ = x1_ + xp_;
    // <1>yy0 <-- <1>(y0 - yp);    
    const yy0_ = y0_ + yp_;
    // <1>yy1 <-- <1>(y1 - yp);    
    const yy1_ = y1_ + yp_;
    // <3>x00 <-- <3>(xx0*xx0);
    const x00_ = xx0_ * xx0_;
    // <3>x01 <-- <3>(xx0*xx1);
    const x01_ = xx0_ * xx1_;
    // <3>x11 <-- <3>(xx1*xx1);
    const x11_ = xx1_ * xx1_;
    const y00_ = yy0_ * yy0_;
    const y01_ = yy0_ * yy1_;
    const y11_ = yy1_ * yy1_;
    // <4>s1 <-- <4>(x01 + y01);
    const s1_ = x01_ + y01_;
    // <4>s2 <-- <4>(y00 + x00);
    const s2_ = y00_ + x00_;
    // <6>t1 = <6>(<4>(x11 + y11) + <5>(s2 - 2*s1));
    const t1 = x11_ + y11_ + 2 * s1_ + s2_;
    // <5>t0 = <5>(s1 - s2);
    const t0 = s1_ + s2_;
    return [
        t1,
        t0 // <5>
    ];
}

//# sourceMappingURL=get-closest-on-bezier-from-point-error-counters.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/simultaneous-properties/closest-and-furthest-point-on-bezier/get-foot-points-polys-on-bezier-certified.js










const γγ6 = error_analysis_error_analysis_(6);
/**
 * Returns the footpoint(s) (and parameter `t` value(s)) on the
 * given bezier curve to the given point (with `t ∈ [0,1]`).
 *
 * * guaranteed accurate to within `4*Number.EPSILON` in the returned `t`
 * value(s)
 * * the returned point(s) are objects with the following properties:
 *     * `p`: the best estimate point on the bezier curve (calculated from the root interval `ri`)
 *     * `t`: the best estimate `t` parameter value (calculated from the root interval `ri`)
 *     * `d`: the best estimate closest distance from the point to the bezier curve (calculated from the root interval `ri`)
 *     * `ri`: a root interval guaranteed to contain the actual `t` value
 *     * `box`: a small box guaranteed to contain the relevant point on the bezier curve
 *     * `dSquaredI`: a small squared distance interval guaranteed to contain the actual distance squared
 *        between the point and the bezier curve
 *
 * @param ps an order 0,1,2 or 3 bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 * @param p a point, e.g. `[1,2]`
 *
 * @doc
 */
function getFootPointsOnBezierPolysCertified(ps, p) {
    const order = ps.length - 1;
    if (order === 3) {
        return {
            polyDd: getFootpointPoly3Dd(ps, p),
            polyE: getClosestOnBezier3FromPointErrorCounters(ps, p).map(e => 10 * γγ6 * e),
            getPolyExact: () => getFootpointPoly3Exact(ps, p)
        };
    }
    else if (order === 2) {
        return {
            polyDd: getFootpointPoly2Dd(ps, p),
            polyE: getClosestOnBezier2FromPointErrorCounters(ps, p).map(e => 8 * γγ6 * e),
            getPolyExact: () => getFootpointPoly2Exact(ps, p)
        };
    }
    else if (order === 1) {
        return {
            polyDd: getFootpointPoly1Dd(ps, p),
            polyE: getClosestOnBezier1FromPointErrorCounters(ps, p).map(e => 6 * γγ6 * e),
            getPolyExact: () => getFootpointPoly1Exact(ps, p)
        };
    }
    else if (order === 0) {
        return {
            polyDd: [[0, 1]],
            polyE: [0],
            getPolyExact: () => [[1]]
        };
    }
    else {
        throw new Error('The given bezier curve must be of order <= 3');
    }
}

//# sourceMappingURL=get-foot-points-polys-on-bezier-certified.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/simultaneous-properties/closest-and-furthest-point-on-bezier/closest-point-on-bezier-certified.js





const { sqrt } = Math;
/**
 * Returns the closest point(s) (and parameter `t` value(s)) on the given
 * bezier curve to the given point (with `t ∈ [0,1]`).
 *
 * * guaranteed accurate to within `4*Number.EPSILON` in the returned `t`
 * value(s)
 * * in some cases there can be more than one closest point, e.g. on the axis
 * of symmetry of a parabola
 * * the returned point(s) are objects with the following properties:
 *     * `p`: the best estimate point on the bezier curve (calculated from the root interval `ri`)
 *     * `t`: the best estimate `t` parameter value (calculated from the root interval `ri`)
 *     * `d`: the best estimate closest distance from the point to the bezier curve (calculated from the root interval `ri`)
 *     * `ri`: a root interval guaranteed to contain the actual `t` value
 *     * `box`: a small box guaranteed to contain the relevant point on the bezier curve
 *     * `dSquaredI`: a small squared distance interval guaranteed to contain the actual distance squared
 *        between the point and the bezier curve
 *
 * @param ps an order 0,1,2 or 3 bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 * @param p a point, e.g. `[1,2]`
 *
 * @doc
 */
function closestPointOnBezierCertified(ps, p, lb = 0, ub = 1) {
    const { polyDd, polyE, getPolyExact } = getFootPointsOnBezierPolysCertified(ps, p);
    const ris = allRootsCertified(polyDd, lb, ub, polyE, getPolyExact);
    ris.push({ tS: lb, tE: lb, multiplicity: 1 });
    ris.push({ tS: ub, tE: ub, multiplicity: 1 });
    const infos = ris.map((ri) => {
        const box = getIntervalBox(ps, [ri.tS, ri.tE]);
        const dSquaredI = rootIntervalToDistanceSquaredInterval(box, p);
        return {
            p: getPFromBox(box),
            t: mid(ri),
            d: (sqrt(dSquaredI[0]) + sqrt(dSquaredI[1])) / 2,
            dSquaredI,
            box,
            ri
        };
    });
    /** the minimum max interval value */
    let minMax = Number.POSITIVE_INFINITY;
    for (let i = 0; i < infos.length; i++) {
        const diMax = infos[i].dSquaredI[1];
        if (diMax < minMax) {
            minMax = diMax;
        }
    }
    const closestPointInfos = [];
    for (let i = 0; i < infos.length; i++) {
        const info = infos[i];
        if (info.dSquaredI[0] <= minMax) {
            closestPointInfos.push(info);
        }
    }
    return closestPointInfos;
}

//# sourceMappingURL=closest-point-on-bezier-certified.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/transformation/split/from-to/from-to-3.js
/**
 * Returns a bezier curve that starts and ends at the given t parameters.
 *
 * @param ps a cubic bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 * @param tS the `t` parameter where the resultant bezier should start
 * @param tE the `t` parameter where the resultant bezier should end
 *
 * @internal
 */
function fromTo3(ps, tS, tE) {
    if (tS === 0) {
        if (tE === 1) {
            return ps;
        }
        return from_to_3_splitLeft3(ps, tE);
    }
    if (tE === 1) {
        return from_to_3_splitRight3(ps, tS);
    }
    return from_to_3_splitAtBoth3(ps, tS, tE);
}
/**
 * Returns a bezier curve that starts at the given t parameter and ends
 * at `t === 1`.
 *
 * @param ps a cubic bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 * @param t the `t` parameter where the resultant bezier should start
 *
 * @internal
 */
function from_to_3_splitRight3(ps, t) {
    // --------------------------------------------------------
    // const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps; 
    const p0 = ps[0];
    const p1 = ps[1];
    const p2 = ps[2];
    const p3 = ps[3];
    const x00 = p0[0];
    const y00 = p0[1];
    const x10 = p1[0];
    const y10 = p1[1];
    const x20 = p2[0];
    const y20 = p2[1];
    const x30 = p3[0];
    const y30 = p3[1];
    // --------------------------------------------------------
    const x01 = x00 - t * (x00 - x10);
    const x11 = x10 - t * (x10 - x20);
    const x21 = x20 - t * (x20 - x30);
    const x02 = x01 - t * (x01 - x11);
    const x12 = x11 - t * (x11 - x21);
    const x03 = x02 - t * (x02 - x12);
    const y01 = y00 - t * (y00 - y10);
    const y11 = y10 - t * (y10 - y20);
    const y21 = y20 - t * (y20 - y30);
    const y02 = y01 - t * (y01 - y11);
    const y12 = y11 - t * (y11 - y21);
    const y03 = y02 - t * (y02 - y12);
    return [[x03, y03], [x12, y12], [x21, y21], [x30, y30]];
}
/**
 * Returns a bezier curve that starts at `t === 0` and ends at the given t
 * parameter.
 *
 * @param ps a cubic bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 * @param t the `t` parameter where the resultant bezier should end
 *
 * @internal
 */
function from_to_3_splitLeft3(ps, t) {
    // --------------------------------------------------------
    // const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps; 
    const p0 = ps[0];
    const p1 = ps[1];
    const p2 = ps[2];
    const p3 = ps[3];
    const x00 = p0[0];
    const y00 = p0[1];
    const x10 = p1[0];
    const y10 = p1[1];
    const x20 = p2[0];
    const y20 = p2[1];
    const x30 = p3[0];
    const y30 = p3[1];
    // --------------------------------------------------------
    const x01 = x00 - t * (x00 - x10);
    const x11 = x10 - t * (x10 - x20);
    const x21 = x20 - t * (x20 - x30);
    const x02 = x01 - t * (x01 - x11);
    const x12 = x11 - t * (x11 - x21);
    const x03 = x02 - t * (x02 - x12);
    const y01 = y00 - t * (y00 - y10);
    const y11 = y10 - t * (y10 - y20);
    const y21 = y20 - t * (y20 - y30);
    const y02 = y01 - t * (y01 - y11);
    const y12 = y11 - t * (y11 - y21);
    const y03 = y02 - t * (y02 - y12);
    return [[x00, y00], [x01, y01], [x02, y02], [x03, y03]];
}
/**
 * Returns a bezier curve that starts and ends at the given `t` parameters.
 *
 * @param ps a cubic bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 * @param tS the `t` parameter where the resultant bezier should start
 * @param tE the `t` parameter where the resultant bezier should end
 *
 * @internal
 */
function from_to_3_splitAtBoth3(ps, tS, tE) {
    // --------------------------------------------------------
    // const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps; 
    const p0 = ps[0];
    const p1 = ps[1];
    const p2 = ps[2];
    const p3 = ps[3];
    const x0 = p0[0];
    const y0 = p0[1];
    const x1 = p1[0];
    const y1 = p1[1];
    const x2 = p2[0];
    const y2 = p2[1];
    const x3 = p3[0];
    const y3 = p3[1];
    // --------------------------------------------------------
    const ttS = tS * tS;
    const tttS = tS * ttS;
    const ttE = tE * tE;
    const tttE = tE * ttE;
    const tStE = tS * tE;
    const xA = x0 - x1;
    const xB = x2 - x1;
    const xC = x3 - x0;
    const xD = xA + xB;
    const tSxA = tS * xA;
    const tExA = tE * xA;
    const xC3xB = xC - 3 * xB;
    const yA = y0 - y1;
    const yB = y2 - y1;
    const yC = y3 - y0;
    const yD = yA + yB;
    const tSyA = tS * yA;
    const tEyA = tE * yA;
    const yC3yB = yC - 3 * yB;
    const xx0 = tttS * xC3xB + (3 * tS * (tS * xD - xA) + x0);
    const xx1 = tStE * (tS * xC3xB + 2 * xD) + ((ttS * xD + x0) - (tExA + 2 * tSxA));
    const xx2 = tStE * (tE * xC3xB + 2 * xD) + ((ttE * xD + x0) - (2 * tExA + tSxA));
    const xx3 = tttE * xC3xB + (3 * tE * (tE * xD - xA) + x0);
    const yy0 = tttS * yC3yB + (3 * tS * (tS * yD - yA) + y0);
    const yy1 = tStE * (tS * yC3yB + 2 * yD) + ((ttS * yD + y0) - (tEyA + 2 * tSyA));
    const yy2 = tStE * (tE * yC3yB + 2 * yD) + ((ttE * yD + y0) - (2 * tEyA + tSyA));
    const yy3 = tttE * yC3yB + (3 * tE * (tE * yD - yA) + y0);
    return [[xx0, yy0], [xx1, yy1], [xx2, yy2], [xx3, yy3]];
}

//# sourceMappingURL=from-to-3.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/transformation/split/from-to/from-to-2.js
/**
 * Returns a bezier curve that starts and ends at the given `t` parameters.
 *
 * @param ps a quadratic bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1]]`
 * @param tS the `t` parameter where the resultant bezier should start
 * @param tE the `t` parameter where the resultant bezier should end
 *
 * @internal
 */
function fromTo2(ps, tS, tE) {
    if (tS === 0) {
        if (tE === 1) {
            return ps;
        }
        return from_to_2_splitLeft2(ps, tE);
    }
    if (tE === 1) {
        return from_to_2_splitRight2(ps, tS);
    }
    return from_to_2_splitAtBoth2(ps, tS, tE);
}
/**
 * Returns a bezier curve that starts at the given t parameter and ends
 * at `t === 1`.
 *
 * @param ps a quadratic bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1]]`
 * @param t the `t` parameter where the resultant bezier should start
 *
 * @internal
 */
function from_to_2_splitRight2(ps, t) {
    // --------------------------------------------------------
    // const [[x0, y0], [x1, y1], [x2, y2]] = ps; 
    const p0 = ps[0];
    const p1 = ps[1];
    const p2 = ps[2];
    const x0 = p0[0];
    const y0 = p0[1];
    const x1 = p1[0];
    const y1 = p1[1];
    const x2 = p2[0];
    const y2 = p2[1];
    // --------------------------------------------------------
    const tt = t * t;
    const xA = x0 - x1;
    const xB = x2 - x1;
    const yA = y0 - y1;
    const yB = y2 - y1;
    return [
        [tt * (xA + xB) - (2 * t * xA - x0),
            tt * (yA + yB) - (2 * t * yA - y0)],
        [t * xB + x1,
            t * yB + y1],
        [x2,
            y2] // yy2
    ];
}
/**
 * Returns a bezier curve that starts at `t === 0` and ends at the given `t`
 * parameter.
 *
 * @param ps a quadratic bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1]]`
 * @param t the `t` parameter where the resultant bezier should end
 *
 * @internal
 */
function from_to_2_splitLeft2(ps, t) {
    // --------------------------------------------------------
    // const [[x0, y0], [x1, y1], [x2, y2]] = ps; 
    const p0 = ps[0];
    const p1 = ps[1];
    const p2 = ps[2];
    const x0 = p0[0];
    const y0 = p0[1];
    const x1 = p1[0];
    const y1 = p1[1];
    const x2 = p2[0];
    const y2 = p2[1];
    // --------------------------------------------------------
    const tt = t * t;
    const xA = x0 - x1;
    const yA = y0 - y1;
    return [
        [x0,
            y0],
        [-t * xA + x0,
            -t * yA + y0],
        [tt * (xA + (x2 - x1)) - (2 * t * xA - x0),
            tt * (yA + (y2 - y1)) - (2 * t * yA - y0)] // yy2 - split point y
    ];
}
/**
 * Returns a bezier curve that starts and ends at the given `t` parameters.
 *
 * @param ps a quadratic bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1]]`
 * @param tS the `t` parameter where the resultant bezier should start
 * @param tE the `t` parameter where the resultant bezier should end
 *
 * @internal
 */
function from_to_2_splitAtBoth2(ps, tS, tE) {
    // --------------------------------------------------------
    // const [[x0, y0], [x1, y1], [x2, y2]] = ps; 
    const p0 = ps[0];
    const p1 = ps[1];
    const p2 = ps[2];
    const x0 = p0[0];
    const y0 = p0[1];
    const x1 = p1[0];
    const y1 = p1[1];
    const x2 = p2[0];
    const y2 = p2[1];
    // --------------------------------------------------------
    const ttS = tS * tS;
    const ttE = tE * tE;
    const tStE = tS * tE;
    const xA = x0 - x1;
    const xB = x2 - x1;
    const xC = xA + xB;
    const yA = y0 - y1;
    const yB = y2 - y1;
    const yC = yA + yB;
    const xx0 = ttS * xC - (2 * tS * xA - x0);
    const xx1 = tStE * xC - (xA * (tE + tS) - x0);
    const xx2 = ttE * xC - (2 * tE * xA - x0);
    const yy0 = ttS * yC - (2 * tS * yA - y0);
    const yy1 = tStE * yC - (yA * (tE + tS) - y0);
    const yy2 = ttE * yC - (2 * tE * yA - y0);
    return [[xx0, yy0], [xx1, yy1], [xx2, yy2]];
}

//# sourceMappingURL=from-to-2.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/transformation/split/from-to/from-to-1.js
/**
 * Returns a bezier curve that starts and ends at the given `t` parameters.
 *
 * @param ps a lineer bezier curve (a line) given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1]]`
 * @param tS the `t` parameter where the resultant bezier should start
 * @param tE the `t` parameter where the resultant bezier should end
 *
 * @internal
 */
function fromTo1(ps, tS, tE) {
    if (tS === 0) {
        if (tE === 1) {
            return ps;
        }
        return from_to_1_splitLeft1(ps, tE);
    }
    if (tE === 1) {
        return from_to_1_splitRight1(ps, tS);
    }
    return from_to_1_splitAtBoth1(ps, tS, tE);
}
/**
 * Returns a bezier curve that starts at the given `t` parameter and ends
 * at `t === 1`.
 *
 * @param ps a lineer bezier curve (a line) given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1]]`
 * @param t the `t` parameter where the resultant bezier should start
 *
 * @internal
 */
function from_to_1_splitRight1(ps, t) {
    // --------------------------------------------------------
    // const [[x0, y0], [x1, y1]] = ps; 
    const p0 = ps[0];
    const p1 = ps[1];
    const x0 = p0[0];
    const y0 = p0[1];
    const x1 = p1[0];
    const y1 = p1[1];
    // --------------------------------------------------------
    return [
        [t * (x1 - x0) + x0,
            t * (y1 - y0) + y0],
        [x1,
            y1] // yy1
    ];
}
/**
 * Returns a bezier curve that starts at `t === 0` and ends at the given `t`
 * parameter.
 *
 * @param ps a lineer bezier curve (a line) given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1]]`
 * @param t the `t` parameter where the resultant bezier should end
 *
 * @internal
 */
function from_to_1_splitLeft1(ps, t) {
    // --------------------------------------------------------
    // const [[x0, y0], [x1, y1]] = ps; 
    const p0 = ps[0];
    const p1 = ps[1];
    const x0 = p0[0];
    const y0 = p0[1];
    const x1 = p1[0];
    const y1 = p1[1];
    // --------------------------------------------------------
    return [
        [x0,
            y0],
        [t * (x1 - x0) + x0,
            t * (y1 - y0) + y0] // yy1
    ];
}
/**
 * Returns a bezier curve that starts and ends at the given `t` parameters.
 *
 * @param ps a lineer bezier curve (a line) given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1]]`
 * @param tS the `t` parameter where the resultant bezier should start
 * @param tE the `t` parameter where the resultant bezier should end
 *
 * @internal
 */
function from_to_1_splitAtBoth1(ps, tS, tE) {
    // --------------------------------------------------------
    // const [[x0, y0], [x1, y1]] = ps; 
    const p0 = ps[0];
    const p1 = ps[1];
    const x0 = p0[0];
    const y0 = p0[1];
    const x1 = p1[0];
    const y1 = p1[1];
    // --------------------------------------------------------
    return [
        [tS * (x1 - x0) + x0,
            tS * (y1 - y0) + y0],
        [tE * (x1 - x0) + x0,
            tE * (y1 - y0) + y0] // yy1
    ];
}

//# sourceMappingURL=from-to-1.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/transformation/split/from-to.js



const from_to_fromTo3 = fromTo3;
const from_to_fromTo2 = fromTo2;
const from_to_fromTo1 = fromTo1;
/**
 * Returns a bezier curve that starts and ends at the given `t` parameters.
 *
 * @param ps an order 0,1,2 or 3 bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 * @param tS the `t` parameter where the resultant bezier should start
 * @param tE the `t` parameter where the resultant bezier should end
 *
 * @doc mdx
 */
function fromTo(ps, tS, tE) {
    if (ps.length === 4) {
        return from_to_fromTo3(ps, tS, tE);
    }
    if (ps.length === 3) {
        return from_to_fromTo2(ps, tS, tE);
    }
    if (ps.length === 2) {
        return from_to_fromTo1(ps, tS, tE);
    }
    if (ps.length === 1) {
        return ps;
    }
    throw new Error('The given bezier curve must be of order <= 3.');
}

//# sourceMappingURL=from-to.js.map
;// CONCATENATED MODULE: ./src/container.ts
/**
 * Returns true if the container is basic, i.e. contains only 1 interface
 * intersection or contains only 1 general, extreme or loop intersection
 * (not cusp, or endpoint overlap), false otherwise.
 *
 * @param container
 */
function containerIsBasic(expMax, container) {
    const xs = container.xs;
    if (xs.length <= 2 && xs[0].x.kind !== 7) {
        return true;
    }
    return false;
}


;// CONCATENATED MODULE: ./src/calc-paths/get-next-exit.ts

/**
 *
 * @param in_ the in for which the next exit should be found
 * @param additionalOutsToCheck
 */
function getNextExit(expMax, in_, originalOut, additionalOutsToCheck, takenOuts) {
    const markOutForChecking_ = markOutForChecking(originalOut, takenOuts, additionalOutsToCheck);
    let additionalBezier = undefined;
    let fromCount = 0;
    let toCount = 1;
    let next = in_;
    let outToUse = undefined;
    do {
        next = originalOut.orientation === +1
            ? next.nextAround
            : next.prevAround;
        if (next === in_) {
            break;
        }
        fromCount = toCount;
        toCount = toCount - next.dir;
        if (next.dir === -1) {
            continue;
        }
        if (!outToUse) {
            // we are still rotating on the inside of the loop
            if (toCount === 0) {
                outToUse = next;
            }
            else if (toCount === 1) {
                // the outermost inner loop must have the same orientation
                markOutForChecking_(next, +1, originalOut);
            }
        }
        else {
            // else we are rotating on the outside of the loop
            if (fromCount === 1 && toCount === 0) {
                markOutForChecking_(next, +1, originalOut.parent);
            }
            else if (fromCount === 0 && toCount === -1) {
                markOutForChecking_(next, -1, originalOut.parent);
            }
        }
    } while (true);
    if (!containerIsBasic(expMax, in_.container)) {
        // if there is multiple intersection pairs then add an additional bezier
        additionalBezier = [in_.p, outToUse.p];
    }
    return { out_: outToUse, additionalBezier };
}
function markOutForChecking(originalOut, takenOuts, additionalOutsToCheck) {
    return (out, parity, parent) => {
        if (!takenOuts.has(out) && !out.orientation) {
            out.orientation = parity * originalOut.orientation;
            out.parent = parent;
            out.windingNum = parent.windingNum + out.orientation;
            additionalOutsToCheck.push(out);
        }
    };
}


;// CONCATENATED MODULE: ./src/calc-paths/get-beziers-to-next-container.ts



function getBeziersToNextContainer(expMax, out) {
    const in_ = out.next;
    const endCurve = in_._x_.curve;
    const endT = in_._x_.x.ri.tS;
    let curCurve = out._x_.curve;
    let curT = out._x_.x.ri.tS;
    if (!containerIsBasic(expMax, out.container)) {
        // we must clip the outgoing curve
        curT = mid(closestPointOnBezierCertified(curCurve.ps, out.p)[0].ri);
    }
    const beziers = [];
    let inBez;
    while (true) {
        if (curCurve === endCurve &&
            (curT < endT || (curT === endT && beziers.length))) {
            inBez = fromTo(curCurve.ps, curT, endT);
            return { beziers, in_, inBez };
        }
        else {
            const ps = fromTo(curCurve.ps, curT, 1);
            beziers.push(ps);
        }
        curT = 0;
        curCurve = curCurve.next;
    }
}


;// CONCATENATED MODULE: ./src/calc-paths/complete-loop.ts




/**
 * Completes a loop for a specific intersection point entry curve.
 * @param expMax
 * @param takenOuts
 * @param out
 */
function completeLoop(expMax, takenOuts, out) {
    const additionalOutsToCheck = [];
    const beziers = [];
    // Move immediately to the outgoing start of the loop
    let out_ = out;
    let additionalBezier;
    // console.log(out_);
    do {
        takenOuts.add(out_); // Mark this intersection as taken
        const { beziers: additionalBeziers, in_, inBez } = getBeziersToNextContainer(expMax, out_);
        // TODO - it will probably better to remove additionalBeziers and just
        // connect the endpoints of adjacent beziers - even if we had near
        // exact coordinates (think quad or better precision) of intersections
        // they are still not returned as algebraic numbers so we can never have
        // a perfect algorithm anyway without returning algebraic numbers as 
        // intersection coordinates, hence we might as well remove 
        // additionalBeziers whose length is about a trillionth of the max
        // coordinate of loops
        beziers.push(...additionalBeziers);
        ({ out_, additionalBezier } = getNextExit(expMax, in_, out, additionalOutsToCheck, takenOuts));
        if (additionalBezier) {
            const t = mid(closestPointOnBezierCertified(inBez, additionalBezier[0])[0].ri);
            const inBez_ = fromTo(inBez, 0, t);
            beziers.push(inBez_);
            beziers.push(additionalBezier);
        }
        else {
            beziers.push(inBez);
        }
    } while (out_ !== out /* && ii++ < 100*/);
    return { beziers, additionalOutsToCheck };
}


;// CONCATENATED MODULE: ./src/calc-paths/complete-path.ts

/**
 * Completes the path of a disjoint set of loops, i.e. this function is called
 * for each disjoint set of paths.
 * @param intersections
 * @param takenLoops
 * @param parent
 * @param loop
 */
function completePath(expMax, initialOut, takenLoops, takenOuts) {
    const outStack = [initialOut];
    while (outStack.length) {
        const out = outStack.pop();
        takenLoops.add(out._x_.curve.loop);
        if (takenOuts.has(out)) {
            continue;
        }
        out.children = new Set();
        const { beziers, additionalOutsToCheck } = completeLoop(expMax, takenOuts, out);
        out.beziers = beziers;
        out.parent.children = out.parent.children || new Set();
        out.parent.children.add(out);
        outStack.push(...additionalOutsToCheck);
    }
}


;// CONCATENATED MODULE: ./node_modules/flo-poly/node/basic/double/remove-leading-zeros.js
/**
 * If the highest power coefficient of the given polynomial is 0 then
 * removeLeadingZeros can be called to remove all such highest terms so that
 * the returned array is a valid presentation of a polynomial.
 *
 * @param p a polynomial whose leading zeros should be removed
 *
 * @example
 * ```typescript
 * removeLeadingZeros([1e-18, 1e-10, 1e-1]); //=> [1e-18, 1e-10, 1e-1]
 * removeLeadingZeros([0, 1e-10, 1e-1]); //=> [1e-10, 1e-1]
 * ```
 *
 * @doc
 */
function removeLeadingZeros(p) {
    let lzCount = 0;
    for (let i = 0; i <= p.length - 1; i++) {
        if (p[i] !== 0) {
            break;
        }
        lzCount++;
    }
    if (lzCount !== 0) {
        p = p.slice(lzCount);
    }
    return p;
}

//# sourceMappingURL=remove-leading-zeros.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/basic/double/multiply.js

// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗ Otherwise code is too slow❗
const multiply_removeLeadingZeros = removeLeadingZeros;
/**
 * Returns the result of multiplying 2 polynomials in double precision.
 *
 * * see [polynomial arithmetic](https://en.wikipedia.org/wiki/Polynomial_arithmetic)
 * * see [polynomial multiplication](https://en.wikipedia.org/wiki/Discrete_Fourier_transform#Polynomial_multiplication)
 * * see [polynomial multiplication](http://web.cs.iastate.edu/~cs577/handouts/polymultiply.pdf)
 *
 * @param p1 a polynomial with coefficients given densely as an array of double
 * floating point numbers from highest to lowest power, e.g. `[5,-3,0]`
 * represents the polynomial `5x^2 - 3x`
 * @param p2 another polynomial.
 * @example
 * ```typescript
 * multiply([1,2,3], [2,5,3,5]); //=> [2, 9, 19, 26, 19, 15]
 * ```
 *
 * @doc
 */
function multiply(p1, p2) {
    const d1 = p1.length - 1;
    const d2 = p2.length - 1;
    // if either or both is the zero polynomial
    if (d1 < 0 || d2 < 0) {
        return [];
    }
    const d = d1 + d2;
    const r = new Array(d + 1).fill(0);
    for (let i = 0; i < d1 + 1; i++) {
        for (let j = 0; j < d2 + 1; j++) {
            r[d - (i + j)] += (p1[d1 - i] * p2[d2 - j]);
        }
    }
    return multiply_removeLeadingZeros(r);
}

//# sourceMappingURL=multiply.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/roots/from-roots/double/from-roots.js

// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗ Otherwise code is too slow❗
const from_roots_multiply = multiply;
/**
 * Constructs a polynomial from the given roots by multiplying out the
 * factors (x - root1)(x - root2) in double precision
 *
 * * the resulting polynomial may have complex roots close to zero due to
 * round-off caused by working in double precision.
 *
 * * mostly for testing purposes.
 *
 * * the real roots of the constructed polynomial is unlikely to be exactly
 * the same as the roots that the polynomial has been constructed from due to
 * floating-point round-off.
 *
 * @param roots an array of roots
 *
 * @example
 * ```typescript
 * fromRoots([1,2,3,3]); //=> [1, -9, 29, -39, 18]
 * allRoots([1, -9, 29, -39, 18]); //=> [1.0000000000000007, 2.000000000000004]
 *
 * // In the above note the rounding error. Also note the multiple root of 3 that has been missed.
 * allRoots([1, -9, 29, -39, 17.99999999999999]); //=> [0.9999999999999973, 2.00000000000002, 2.9999999999999982]
 * allRoots([1, -9, 29, -39, 17.9999999999999]); //=> [0.999999999999975, 2.0000000000000986, 2.9999997898930832, 3.0000002095475775]
 * ```
 *
 * @doc
 */
function fromRoots(roots) {
    let p = [1];
    for (let i = 0; i < roots.length; i++) {
        p = from_roots_multiply(p, [1, -roots[i]]);
    }
    return p;
}

//# sourceMappingURL=from-roots.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/predictive-random/double/random.js

/**
 * Arbitrary seed value for the simple random number generator.
 *
 * @internal
 */
const SEED = 123456789;
/**
 * The range for the simple random number generator, i.e. the generated
 * numbers will be in [0,RANGE].
 *
 * @internal
 */
const RANGE = 4294967296;
/**
 * Creates a function from the given function with parameters similar
 * to flatRoots but with an extra parameter in the beginning indicating
 * the length of the array generated by the original function.
 *
 * @param f
 *
 * @internal
 */
function createArrFunction(f) {
    return function (n, d, a, b, seed = SEED, odds = 0) {
        const res = [];
        for (let i = 0; i < n; i++) {
            const v = f(d, a, b, seed, odds);
            const p = v.p;
            seed = v.seed;
            res.push(p);
        }
        return res;
    };
}
/**
 * Generates and returns an array of polynomials with random **roots** (with coefficients
 * given densely as an array of double floating point numbers from highest to
 * lowest power, e.g. `[5,-3,0]` represents the polynomial `5x^2 - 3x`).
 *
 * * all roots will approximate real values so is not at all representative of
 * a natural random root distribution
 *
 * * the exact same polynomials will be created on each call to this function
 * if the same seed is used; this is by design to improve testing.
 *
 * @param n the number of polynomials to generate.
 * @param d the degree of the polynomials
 * @param a defaults to 0; the lower bound of the coefficients
 * @param b defaults to 1; the upper bound of the coefficients
 * @param seed defaults to 123456789; a seed value in [0,4294967296]
 * @param odds defaults to 0; the odds that a root will be doubled (applied
 * recursively so that some roots could be tripled, etc.
 *
 * @example
 * ```typescript
 * flatRootsArr(2,3,0,10); //=> [[1, -17.27247918024659, 97.33487287168995, -179.34094494147305], [1, -14.934967160224915, 57.624514485645406, -14.513933300587215]]
 * flatRootsArr(2,3,0,10); //=> [[1, -17.27247918024659, 97.33487287168995, -179.34094494147305], [1, -14.934967160224915, 57.624514485645406, -14.513933300587215]]
 * ```
 *
 * @doc
 */
const flatRootsArr = createArrFunction(flatRoots);
/**
 * Generates and returns an array of polynomials with random **coefficients** (with coefficients
 * given densely as an array of double floating point numbers from highest to
 * lowest power, e.g. `[5,-3,0]` represents the polynomial `5x^2 - 3x`).
 *
 * * the exact same polynomials will be created on each call to this function
 * if the same seed is used; this is by design to improve testing.
 *
 * @param n the number of polynomials to generate.
 * @param d the length of the polynomial coefficients array
 * @param a defaults to 0; the lower bound of the coefficients
 * @param b defaults to 1; the upper bound of the coefficients
 * @param seed defaults to 123456789; a seed value in [0,4294967296]
 * @param odds defaults to 0; the odds that a root will be doubled (applied
 * recursively so that some roots could be tripled, etc.
 *
 * @example
 * ```typescript
 * flatCoefficientsArr(2,3,-2,2); //=> [[0.1749166026711464, -0.20349335670471191, 0.9375684261322021], [1.0617692470550537, -1.8918039798736572, 0.8040215969085693]]
 * flatCoefficientsArr(2,3,-2,2); //=> [[0.1749166026711464, -0.20349335670471191, 0.9375684261322021], [1.0617692470550537, -1.8918039798736572, 0.8040215969085693]]
 * ```
 *
 * @doc
 */
const flatCoefficientsArr = createArrFunction(flatCoefficients);
/**
 * Returns a quasi-random number to be used as the next input to this function.
 *
 * * see [stackoverflow](https://stackoverflow.com/questions/3062746/special-simple-random-number-generator)
 *
 * @param seed
 *
 * @internal
 */
function predictiveRandom(seed) {
    const a = 134775813;
    return (a * seed + 1) % RANGE;
}
/**
 * Generates a random array of numbers picked from a bounded flat
 * distribution (i.e. a rectangular distribution) with specified odds of
 * duplication of consecutive values.
 *
 * @param n the number of values to generate
 * @param a defaults to 0; the lower bound of the distribution
 * @param b defaults to 1; the upper bound of the distribution
 * @param seed defaults to 123456789; a seed
 * @param odds defaults to 0; the odds that a number will be doubled (applied
 * recursively so that some numbers will be tripled, etc.
 *
 * @internal
 */
function randomArray(n, a, b, seed, odds = 0) {
    let vs = [];
    for (let i = 0; i < n; i++) {
        seed = predictiveRandom(seed);
        const v = ((seed / RANGE) * (b - a)) + a;
        seed = push(seed, vs, v, odds);
    }
    vs = vs.slice(0, n);
    return { vs, seed };
}
/**
 * Helper function that will add more numbers to the passed array - modifies the
 * values parameter.
 *
 * @param seed
 * @param values an existing array of values - will be modified!
 * @param x the number that will be added (possibly multiple times)
 * @param odds the odds that the number will be added again (recursively).
 *
 * @internal
 */
function push(seed, values, x, odds) {
    seed = predictiveRandom(seed);
    values.push(x);
    if ((seed / RANGE) < odds) {
        seed = push(seed, values, x, odds);
    }
    return seed;
}
/**
 * Generates and returns an array of polynomials with random **roots** (with coefficients
 * given densely as an array of double floating point numbers from highest to
 * lowest power, e.g. `[5,-3,0]` represents the polynomial `5x^2 - 3x`).
 *
 * * also returns a new seed value that can be used as the input to the next
 * call to a predictive random function
 *
 * * all roots will approximate real values so is not at all representative of
 * a natural random root distribution
 *
 * * the exact same polynomial will be created on each call to this function
 * if the same seed is used; this is by design to improve testing.
 *
 * @param d the degree of the polynomials
 * @param a defaults to 0; the lower bound of the coefficients
 * @param b defaults to 1; the upper bound of the coefficients
 * @param seed defaults to 123456789; a seed value in [0,4294967296]
 * @param odds defaults to 0; the odds that a root will be doubled (applied
 * recursively so that some roots could be tripled, etc.
 *
 * @example
 * ```typescript
 * flatRoots(3,0,10); //=> { p: [1, -17.27247918024659, 97.33487287168995, -179.34094494147305], seed: 939629312 }
 * ```
 *
 * @doc
 */
function flatRoots(d, a = 0, b = 1, seed = SEED, odds = 0) {
    const randArr = randomArray(d, a, b, seed, odds);
    seed = randArr.seed;
    const p = fromRoots(randArr.vs);
    return { p, seed };
}
/**
 * Generates and returns an array of polynomials with random **coefficients** (with coefficients
 * given densely as an array of double floating point numbers from highest to
 * lowest power, e.g. `[5,-3,0]` represents the polynomial `5x^2 - 3x`).
 *
 * * also returns a new seed value that can be used as the input to the next
 * call to a predictive random function
 *
 * * the exact same polynomial will be created on each call to this function
 * if the same seed is used; this is by design to improve testing.
 *
 * @param d the length of the polynomial coefficients array
 * @param a defaults to 0; the lower bound of the coefficients
 * @param b defaults to 1; the upper bound of the coefficients
 * @param seed defaults to 123456789; a seed value in [0,4294967296]
 * @param odds defaults to 0; the odds that a root will be doubled (applied
 * recursively so that some roots could be tripled, etc.
 *
 * @example
 * ```typescript
 * flatCoefficients(3,-5,5); //=> { p: [0.437291506677866, -0.5087333917617798, 2.3439210653305054], seed: 939629312 }
 * ```
 *
 * @doc
 */
function flatCoefficients(d, a = -1, b = +1, seed = SEED) {
    const randArr = randomArray(d, a, b, seed);
    seed = randArr.seed;
    const p = randArr.vs;
    return { p, seed };
}

//# sourceMappingURL=random.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/calculus/double/differentiate.js
/**
 * Returns the result of differentiating the given polynomial in double
 * precision.
 *
 * @param p a polynomial with coefficients given densely as an array of double
 * floating point numbers from highest to lowest power, e.g. `[5,-3,0]`
 * represents the polynomial `5x^2 - 3x`
 *
 * @example
 * ```typescript
 * differentiate([5, 4, 3, 2, 1]); //=> [20, 12, 6, 2]
 * ```
 *
 * @doc
 */
function differentiate(p) {
    const result = [];
    const d = p.length - 1;
    for (let i = 0; i < d; i++) {
        result.push((d - i) * p[i]);
    }
    return result;
}

//# sourceMappingURL=differentiate.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/roots/naive/brent-poly.js

const brent_poly_Horner = Horner;
const brent_poly_eps = Number.EPSILON;
const brent_poly_u = brent_poly_eps / 2;
const brent_poly_abs = Math.abs;
const brent_poly_max = Math.max;
/**
 * Returns a refined root given a root bracketed in the interval (a,b) of the
 * given polynomial using Brent's Method.
 *
 * * near exact implementation of the original Brent Dekker Method (also known
 * as Brent's Method), except that it is specialzed to polynomial evaluation
 *
 * * the algorithm stops once the interval width becomes equal or less than
 * `2 * Number.EPSILON/2 * max(1,abs(a),abs(b))` where `a` and `b` are the current
 * lower and upper interval limits
 *
 * * Brent's Method is an excellent root-refinement choice since:
 *  * guaranteed converge (unlike the Newton and other so-called single-point
 * methods),
 *  * converges in a reasonable number of iterations even for highly contrived
 * functions (unlike Dekker's Method) and
 *  * nearly always converges fast, i.e. super-linearly (unlike the Secant and
 * Regula-Falsi methods).
 * * unfortunately the algorithm given on [Wikipedia](https://en.wikipedia.org/wiki/Brent%27s_method)
 * works but is not precisely Brent's method and runs about 2x or more slower
 * due to it not implementing the critically important 'micro-step' (Aug 2020).
 *
 * * see [Brent (page 47)](https://maths-people.anu.edu.au/~brent/pd/rpb011i.pdf)
 *
 * @param p a polynomial with coefficients given densely as an array of double
 * floating point numbers from highest to lowest power, e.g. `[5,-3,0]`
 * represents the polynomial `5x^2 - 3x`
 * @param lb the lower limit of the search interval.
 * @param ub the upper limit of the search interval.
 * @param fa (may be left out - will be calculated automatically) the result of
 * evaluating the input polynomial at `a`
 * @param fb (may be left out - will be calculated automatically) the result of
 * evaluating the input polynomial at `b`
 *
 * @example
 * ```typescript
 * const p = fromRoots([-10,2,3,4]);  //=> [1, 1, -64, 236, -240]
 * const a = 2.2;
 * const b = 3.8;
 * brent(p,a,b); //=> 3.000000000000003
 * b = 3.1;
 * brent(p,a,b); //=> 3.000000000000001
 * ```
 *
 * @doc
 */
function brentPoly(p, lb, ub, fa = brent_poly_Horner(p, lb), fb = brent_poly_Horner(p, ub)) {
    // Precondition: fa, fb !== 0
    //---- Make local copies of a and b.
    let a = lb;
    let b = ub;
    let c = a;
    let fc = fa;
    let e = b - a;
    let d = e;
    while (true) {
        if (brent_poly_abs(fc) < brent_poly_abs(fb)) {
            a = b;
            b = c;
            c = a;
            fa = fb;
            fb = fc;
            fc = fa;
        }
        const δ = 2 * brent_poly_u * brent_poly_max(1, brent_poly_abs(a), brent_poly_abs(b));
        const m = 0.5 * (c - b);
        //if (abs(m) <= δ || fb === 0) {
        if (brent_poly_abs(m) <= δ) {
            // uncomment below if range to be returned
            //return b < c ? [b,c] : [c,b];
            // uncomment below if leftmost guess to be returned
            //return b < c ? b : c;
            // uncomment below if rightmost guess to be returned
            //return b < c ? b : c;
            // uncomment below if any guess to be returned
            return b;
        }
        if (brent_poly_abs(e) < δ || brent_poly_abs(fa) <= brent_poly_abs(fb)) {
            e = m;
            d = e;
        }
        else {
            let s = fb / fa;
            let p;
            let q;
            if (a === c) {
                p = 2 * m * s;
                q = 1 - s;
            }
            else {
                q = fa / fc;
                const r = fb / fc;
                p = s * (2 * m * q * (q - r) - (b - a) * (r - 1));
                q = (q - 1) * (r - 1) * (s - 1);
            }
            if (0 < p) {
                q = -q;
            }
            else {
                p = -p;
            }
            s = e;
            e = d;
            if (2 * p < 3 * m * q - brent_poly_abs(δ * q) && p < brent_poly_abs(0.5 * s * q)) {
                d = p / q;
            }
            else {
                e = m;
                d = e;
            }
        }
        a = b;
        fa = fb;
        if (δ < brent_poly_abs(d)) {
            b = b + d;
        }
        else if (0 < m) {
            b = b + δ;
        }
        else {
            //b = b - eps;
            b = b - δ;
        }
        fb = brent_poly_Horner(p, b);
        // inlined above line:
        //fb = p[0]; for (let i=1; i<p.length; i++) { fb = fb*b + p[i]; }
        if (fb === 0) {
            return b;
        }
        if (fb * fc > 0) {
            c = a;
            fc = fa;
            e = b - a;
            d = e;
        }
    }
}

//# sourceMappingURL=brent-poly.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/roots/naive/all-roots.js






// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗ Otherwise code is too slow❗
const all_roots_differentiate = differentiate;
const all_roots_Horner = Horner;
const all_roots_brentPoly = brentPoly;
const all_roots_negativeRootUpperBound_LMQ = negativeRootLowerBound_LMQ;
const all_roots_positiveRootUpperBound_LMQ = positiveRootUpperBound_LMQ;
const all_roots_removeLeadingZeros = removeLeadingZeros;
/**
 * Find and return all roots of the given polynomial in the given interval.
 *
 * * an empty array is returned for a constant or the zero polynomial
 *
 * * **non-exact:** roots are found 'naively' using double-precision arithmetic
 * and accuracy will thus depend on the condition number around the root - use
 * [[allRootsCertifiedSimplified]] or [[allRootsCertified]] instead if certified
 * root bounds are required (it is about 3x slower, but still very fast!)
 *
 * * close (where the definition of closeness depends on the condition
 * number) or multiple *even* roots can be returned as 0, 1 or more close
 * roots, whereas close or multiple *odd* roots are guaranteed to return *at
 * least 1 root*
 *
 * * optimized for polynomials of degree 1 to about 30
 *
 * * roots are refined using the celebrated Brent's Method (and evaluated using
 * Horner's Method) until a root interval is found with
 * width `<= eps * max(1, 2^⌈log₂r⌉)`, where `eps = Number.EPSILON` and
 * `r` is a root
 *
 * * **ordered:** the returned roots are ordered from lowest to highest
 *
 * @param p a polynomial with coefficients given densely as an array of double
 * floating point numbers from highest to lowest power, e.g. `[5,-3,0]`
 * represents the polynomial `5x^2 - 3x`
 * @param lb defaults to `Number.NEGATIVE_INFINITY`; lower bound of roots to be
 * returned
 * @param ub defaults to `Number.POSITIVE_INFINITY`; upper bound of roots to be
 * returned
 *
 * @doc
 */
function allRoots(p, lb = Number.NEGATIVE_INFINITY, ub = Number.POSITIVE_INFINITY) {
    p = all_roots_removeLeadingZeros(p);
    //---- count and remove roots at zero
    let numZerosAtZero = 0;
    while (p[p.length - 1] === 0) {
        p = p.slice(0, -1);
        numZerosAtZero++;
    }
    //------------------------
    // return an empty array for a constant or the zero polynomial
    if (p.length <= 1) {
        const roots = [];
        for (let j = 0; j < numZerosAtZero; j++) {
            roots.push(0);
        }
        return roots;
    }
    if (lb === Number.NEGATIVE_INFINITY) {
        lb = all_roots_negativeRootUpperBound_LMQ(p);
    }
    if (ub === Number.POSITIVE_INFINITY) {
        ub = all_roots_positiveRootUpperBound_LMQ(p);
    }
    // Get all derivatives, i.e. 
    // ps === [p, dp, ddp, ..., constant]
    //        [0,  1,   2, ..., deg     ]
    const ps = [p];
    for (let i = 1; i <= p.length - 1; i++) {
        ps.push(all_roots_differentiate(ps[i - 1]));
    }
    //const δ = Math.max(2*eps, 2*eps * Math.max(Math.abs(lb), Math.abs(ub)));
    /** root intervals */
    let is = [];
    // loop: ps[diffCount] === [linear, quadratic, ..., deg]
    for (let diffCount = p.length - 2; diffCount >= 0; diffCount--) {
        // Get roots within intervals:
        // ---------------------------
        // Finds and returns all roots of the given polynomial within the given 
        // intervals, starting from the lower bound (lb) and ending at the upper
        // bound (ub)
        const p = ps[diffCount];
        const roots = [];
        let _a_ = lb;
        let _A_ = all_roots_Horner(p, _a_);
        // if lower bound value is zero and this is the last iteration with 
        // p === the original polynomial then push the root at the lower bound
        if (_A_ === 0 && diffCount === 0) {
            roots.push(lb);
        }
        for (let i = 0; i < is.length; i++) {
            const _b_ = is[i];
            const _B_ = all_roots_Horner(p, _b_);
            // if there is a root at the right interval then add it
            if (_B_ === 0) {
                roots.push(_b_);
            }
            else if (_A_ * _B_ < 0) {
                roots.push(all_roots_brentPoly(p, _a_, _b_, _A_, _B_));
            }
            _a_ = _b_;
            _A_ = _B_;
        }
        const _B_ = all_roots_Horner(p, ub);
        if (_A_ * _B_ < 0) {
            roots.push(all_roots_brentPoly(p, _a_, ub, _A_, _B_));
        }
        // if upper bound value is zero and this is the last iteration with 
        // p === the original polynomial then push the root at the upper bound
        if (_B_ === 0 && diffCount === 0) {
            roots.push(ub);
        }
        is = roots;
    }
    if (numZerosAtZero > 0 && lb <= 0 && ub >= 0) {
        // at this point the existing intervals, `is`, are sorted
        // find the insertion spot and insert the zero roots to keep the roots
        // sorted
        const isWithZeroRoots = [];
        let zerosInserted = false;
        for (let i = 0; i < is.length; i++) {
            if (!zerosInserted && is[i] >= 0) {
                // push the zero roots
                for (let j = 0; j < numZerosAtZero; j++) {
                    isWithZeroRoots.push(0);
                }
                zerosInserted = true;
            }
            isWithZeroRoots.push(is[i]);
        }
        return isWithZeroRoots;
    }
    return is;
}

//# sourceMappingURL=all-roots.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/to-power-basis/to-power-basis/double/to-power-basis.js
/**
 * Returns the power basis representation of a bezier curve of order cubic or
 * less.
 *
 * * intermediate calculations are done in double precision
 * * returns the resulting power basis x and y coordinate polynomials from
 * highest power to lowest, e.g. if `x(t) = at^2 + bt + c`
 * and `y(t) = dt^2 + et + f` then  the result is returned
 * as `[[a,b,c],[d,e,f]]`
 *
 * @param ps an order 0,1,2 or 3 bezier curve given by an ordered array of its
 * control points, e.g. `[[0,0],[1,1],[2,1],[2,0]]`
 *
 * @doc
 */
function toPowerBasis(ps) {
    if (ps.length === 4) {
        return toPowerBasis3(ps);
    }
    if (ps.length === 3) {
        return toPowerBasis2(ps);
    }
    if (ps.length === 2) {
        return toPowerBasis1(ps);
    }
    if (ps.length === 1) {
        return toPowerBasis0(ps);
    }
    throw new Error('The given bezier curve must be of order <= 3.');
}
/** @internal */
function toPowerBasis3(ps) {
    const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;
    return [[
            (x3 - x0) + 3 * (x1 - x2),
            3 * ((x2 + x0) - 2 * x1),
            3 * (x1 - x0),
            x0
        ], [
            (y3 - y0) + 3 * (y1 - y2),
            3 * ((y2 + y0) - 2 * y1),
            3 * (y1 - y0),
            y0
        ]];
}
/** @internal */
function toPowerBasis2(ps) {
    const [[x0, y0], [x1, y1], [x2, y2]] = ps;
    return [[
            (x2 + x0) - 2 * x1,
            2 * (x1 - x0),
            x0
        ], [
            (y2 + y0) - 2 * y1,
            2 * (y1 - y0),
            y0
        ]];
}
/** @internal */
function toPowerBasis1(ps) {
    const [[x0, y0], [x1, y1]] = ps;
    return [[
            x1 - x0,
            x0,
        ], [
            y1 - y0,
            y0,
        ]];
}
/** @internal */
function toPowerBasis0(ps) {
    const [[x0, y0]] = ps;
    return [[x0], [y0]];
}

//# sourceMappingURL=to-power-basis.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/local-properties-at-t/tangent/double/tangent.js


/**
 * Returns the tangent vector (not necessarily of unit length) of an
 * order 0,1,2 or 3 bezier curve at a specific given parameter value `t`, i.e.
 * returns the `[x,y]` value of the once differentiated (with respect to `t`)
 * bezier curve's power basis when evaluated at `t`.
 *
 * * uses double precision calculations internally
 *
 * @param ps a linear, quadratic or cubic bezier, e.g. `[[0,0],[1,1],[2,1],[2,0]]`
 * @param t the t parameter
 *
 * @doc mdx
 */
function tangent(ps, t) {
    const [dX, dY] = toPowerBasis_1stDerivative(ps);
    return [
        Horner(dX, t),
        Horner(dY, t)
    ];
}

//# sourceMappingURL=tangent.js.map
;// CONCATENATED MODULE: ./node_modules/flo-vector2d/node/distance-and-length/to-unit-vector.js
/**
 * Returns the given 2-vector scaled to a length of one.
 * @param p a vector
 */
function toUnitVector(p) {
    const scaleFactor = 1 / (Math.sqrt(p[0] * p[0] + p[1] * p[1]));
    return [p[0] * scaleFactor, p[1] * scaleFactor];
}

//# sourceMappingURL=to-unit-vector.js.map
;// CONCATENATED MODULE: ./node_modules/flo-memoize/node/memoize.js
/**
 * Memoize (by reference on the input parameter) the given arity 1 function.
 *
 * * the input parameter must be an `object` (so it can be used as a key to
 * `WeakMap` and thus garbage collected later; this is especially important
 * in functional programming where a lot of garbage collection takes place;
 *
 * * use `memoizePrimitive` instead if it is not important that the keys
 * will *never* be garbage collected
 */
function memoize(f) {
    const results = new WeakMap();
    return function (t) {
        let r = results.get(t);
        if (r !== undefined) {
            //console.log('cache hit');
            return r;
        }
        //console.log('cache miss');
        r = f(t);
        results.set(t, r);
        return r;
    };
}

//# sourceMappingURL=memoize.js.map
;// CONCATENATED MODULE: ./src/get-bounding-box-.ts


const getBoundingBox_ = memoize(getBoundingBox);


;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/global-properties/bounds/get-bounds.js



/**
 * Returns an axis-aligned bounding box together with the `t` values where the
 * bounds on the bezier are reached.
 *
 * @param ps an order 1,2 or 3 bezier curve given as an array of its control
 * points, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 *
 * @doc mdx
 */
function getBounds(ps) {
    // Roots of derivative
    const dxy = toPowerBasis_1stDerivative(ps);
    const rootsX = allRoots(dxy[0], 0, 1);
    const rootsY = allRoots(dxy[1], 0, 1);
    // Endpoints
    rootsX.push(0, 1);
    rootsY.push(0, 1);
    let minX = Number.POSITIVE_INFINITY;
    let maxX = Number.NEGATIVE_INFINITY;
    let minY = Number.POSITIVE_INFINITY;
    let maxY = Number.NEGATIVE_INFINITY;
    let tMinX;
    let tMaxX;
    let tMinY;
    let tMaxY;
    // Test points
    for (let i = 0; i < rootsX.length; i++) {
        const t = rootsX[i];
        const [x,] = evalDeCasteljau(ps, t);
        if (x < minX) {
            minX = x;
            tMinX = t;
        }
        if (x > maxX) {
            maxX = x;
            tMaxX = t;
        }
    }
    for (let i = 0; i < rootsY.length; i++) {
        const t = rootsY[i];
        const [, y] = evalDeCasteljau(ps, t);
        if (y < minY) {
            minY = y;
            tMinY = t;
        }
        if (y > maxY) {
            maxY = y;
            tMaxY = t;
        }
    }
    // `tMinX`, ... is guaranteed defined below - TS was (understandably) 
    // unable to follow the logic.
    const ts = [[tMinX, tMinY], [tMaxX, tMaxY]];
    const box = [[minX, minY], [maxX, maxY]];
    return { ts, box };
}

//# sourceMappingURL=get-bounds.js.map
;// CONCATENATED MODULE: ./src/get-bounds-.ts


const getBounds_ = memoize(getBounds);


;// CONCATENATED MODULE: ./src/calc-paths/is-loop-in-loop.ts





// TODO - remove delta by basing isLoopInLoop on a solid numerical analytic 
// basis - isLoopInLoop is the only sub-algorithm left having a DELTA.
const DELTA = 1e-6;
/**
 * Returns true if the first loop is wholly contained within the second loop's
 * boundary.
 *
 * Precondition: the loop is either wholly contained inside the loop or is wholly outside.
 * @param loop1
 * @param loop2
 */
function isLoopInLoop(loop1, loop2) {
    let i = 0;
    let seed = 1231; // Just some value
    do {
        i++;
        // This gets us a predictable random number between 0 and 1;
        const rand1 = flatCoefficients(1, 0, 1, seed);
        const t = rand1.p[0];
        seed = rand1.seed; // Get next seed.
        // This gets us a predictable random number roughly between 0 and the 
        // number of curves in the loop.
        const curveCount = loop1.length;
        const rand2 = flatCoefficients(1, 0, curveCount, seed);
        const idx = Math.floor(rand2.p[0]);
        seed = rand2.seed; // Get next seed.
        const ps = loop1[idx];
        const p = evalDeCasteljau(ps, t);
        const res = f(loop1, loop2, p);
        if (res !== undefined) {
            return res;
        }
    } while (i < 100);
    return undefined; // There's no chance we'll get up to this point.
    function f(loop1, loop2, p) {
        if (isLoopNotInLoop(loop1, loop2)) {
            return false;
        }
        const count = getAxisAlignedRayLoopIntersections(loop2, p, 'left');
        if (count !== undefined) {
            return count % 2 !== 0;
        }
    }
}
/**
 * Returns true if the first loop is not wholly within the second. The converse
 * is not necessarily true. It is assumed the loops don't intersect.
 * @param loops
 */
function isLoopNotInLoop(loop1, loop2) {
    const boundss = [loop1, loop2].map(getLoopBounds);
    return (boundss[0].minX < boundss[1].minX ||
        boundss[0].maxX > boundss[1].maxX ||
        boundss[0].minY < boundss[1].minY ||
        boundss[0].maxY > boundss[1].maxY);
}
function getLoopBounds(pss) {
    const bounds = pss.map(ps => getBounds_(ps));
    return {
        minX: Math.min(...bounds.map(bound => bound.box[0][0])),
        maxX: Math.max(...bounds.map(bound => bound.box[1][0])),
        minY: Math.min(...bounds.map(bound => bound.box[0][1])),
        maxY: Math.max(...bounds.map(bound => bound.box[1][1])),
    };
}
/**
 * @param p The point where the horizontal ray starts
 * @param toLeft The ray to the left of this point (else right)
 * @param loop A loop of curves
 *
 * @internal
 */
function getAxisAlignedRayLoopIntersections(loop, p, dir) {
    const [x, y] = p;
    let count = 0;
    for (let i = 0; i < loop.length; i++) {
        const ps = loop[i];
        //------------------------------------------------------/
        //---- Check if ray intersects bezier bounding box -----/
        //------------------------------------------------------/
        const [[minX, minY], [maxX, maxY]] = getBoundingBox_(ps);
        let notIntersecting = ((dir === 'left' || dir === 'right') && (minY > y || maxY < y)) ||
            ((dir === 'up' || dir === 'down') && (minX > x || maxX < x));
        notIntersecting = notIntersecting ||
            (dir === 'left' && minX > x) || (dir === 'right' && maxX < x) ||
            (dir === 'down' && minY > y) || (dir === 'up' && maxY < y);
        if (notIntersecting) {
            continue;
        } // No intersection with bezier
        //------------------------------------------------------/
        //----------- Get intersection ts on bezier ------------/
        //------------------------------------------------------/
        // Get the bezier's x-coordinate power representation.
        const ts = [];
        let f;
        let offset;
        let axis;
        const dirIsDecreasing = (dir === 'left' || dir === 'up');
        if (dir === 'left' || dir === 'right') {
            //f = getY;
            f = (ps) => toPowerBasis(ps)[1];
            offset = [0, -y];
            axis = 0;
        }
        else {
            //f = getX;
            f = (ps) => toPowerBasis(ps)[0];
            offset = [-x, 0];
            axis = 1;
        }
        //let translatedPs = translate(offset, ps);
        const translatedPs = ps.map(translate(offset));
        const poly = f(translatedPs);
        //let ev = evalDeCasteljau(translatedPs);
        const ts_ = allRoots(poly, 0 - DELTA, 1 + DELTA);
        for (let i = 0; i < ts_.length; i++) {
            const t = ts_[i];
            if (Math.abs(t) < DELTA || Math.abs(t - 1) < DELTA) {
                // We don't know the exact number of intersections due to
                // floating point arithmetic. 
                return undefined;
            }
            //let p_ = ev(t);
            const p_ = evalDeCasteljau(translatedPs, t);
            if ((dirIsDecreasing && p[axis] >= p_[axis]) ||
                (!dirIsDecreasing && p[axis] <= p_[axis])) {
                ts.push(t);
            }
        }
        //------------------------------------------------------/
        //----- Check if line is tangent to intersections ------/
        //------------------------------------------------------/
        // We only care if there were 1 or 3 intersections.
        if (ts.length === 1 || ts.length === 3) {
            for (const t of ts) {
                const tan = toUnitVector(tangent(ps, t));
                if (((dir === 'left' || dir === 'right') && Math.abs(tan[1]) < DELTA) ||
                    ((dir === 'down' || dir === 'up') && Math.abs(tan[0]) < DELTA)) {
                    // We don't know the exact number of intersections due to
                    // floating point arithmetic
                    return undefined;
                }
            }
        }
        count += ts.length;
    }
    return count;
}


;// CONCATENATED MODULE: ./src/calc-paths/get-tightest-containing-loop.ts

/**
 * @param root
 * @param loop
 */
function getTightestContainingLoop(root, loop) {
    let containingLoop = undefined;
    const stack = [root];
    while (stack.length) {
        const inOut = stack.pop();
        f(inOut);
    }
    return containingLoop;
    function f(parent) {
        if (parent === root || isLoopInLoop(loop.beziers, parent.beziers)) {
            containingLoop = parent;
            for (const child of parent.children) {
                stack.push(child);
            }
        }
    }
}


;// CONCATENATED MODULE: ./src/calc-paths/order-loop-ascending-by-min-y.ts

/**
 * Returns < 0 if loopA's topmost point is higher (i.e. smaller) than that of
 * loopB. Using this function in a sort will sort from highest topmost (smallest
 * y) point loops to lowest in a left-handed coordinate system.
 * @param loopA
 * @param loopB
 */
function orderLoopAscendingByMinY(loopA, loopB) {
    return getMinY(loopA) - getMinY(loopB);
}
function getMinY(pss) {
    let minY = Number.POSITIVE_INFINITY;
    for (const ps of pss) {
        const y = getBounds_(ps).box[0][1];
        if (y < minY) {
            minY = y;
        }
    }
    return minY;
}


;// CONCATENATED MODULE: ./src/calc-paths/split-loop-trees.ts
/**
 * Take the forest of trees, create a new root making it a tree and snip
 * branches such that each branch determines a new set of loops each
 * representing an individual independent shape (possibly with holes).
 * @param root
 */
function splitLoopTrees(root) {
    const iLoopTrees = [];
    const stack = [root];
    while (stack.length) {
        const tree = stack.pop();
        tree.children = tree.children || new Set();
        for (const child of tree.children) {
            if (tree.windingNum === 0) {
                iLoopTrees.push(child);
            }
            stack.push(child);
        }
        if (tree.windingNum === 0) {
            tree.children = new Set(); // Make it a leaf
        }
    }
    return iLoopTrees;
}


;// CONCATENATED MODULE: ./src/calc-paths/get-loops-from-tree.ts
/**
 * Returns an array of LoopTrees from the given LoopTree where each returned
 * LoopTree is one of the nodes of the tree. Nodes with winding number absolute
 * value > 1 are not returned.
 * @param root
 */
function getLoopsFromTree(root) {
    const trees = [root];
    const stack = Array.from(root.children);
    while (stack.length) {
        const tree = stack.pop();
        if (tree.windingNum === 0) {
            trees.push(tree);
        }
        for (const child of tree.children) {
            stack.push(child);
        }
    }
    return trees;
}


;// CONCATENATED MODULE: ./src/are-boxes-intersecting.ts
/**
 * Returns `true` if the 2 given axis-aligned rectangular boxes intersect.
 *
 * * **exact**: not susceptible to floating point round-off
 *
 * @param closed if `true`, interpret boxes as being closed (i.e. they contain
 * their border), otherwise open.
 * @param a an axis-aligned rectangular box (given by an array of two points,
 * e.g. `[[1,2], [3,4]]`)
 * @param b another axis-aligned rectangular box
 *
 * @doc mdx
 */
function areBoxesIntersecting(closed, a, b) {
    let [[ax0, ay0], [ax1, ay1]] = a;
    let [[bx0, by0], [bx1, by1]] = b;
    // Swap so smaller coordinate comes first
    if (ay0 > ay1) {
        [ay0, ay1] = [ay1, ay0];
    }
    if (by0 > by1) {
        [by0, by1] = [by1, by0];
    }
    if (ax0 > ax1) {
        [ax0, ax1] = [ax1, ax0];
    }
    if (bx0 > bx1) {
        [bx0, bx1] = [bx1, bx0];
    }
    const closedX = closed || (ax0 === ax1 && bx0 === bx1);
    const closedY = closed || (ay0 === ay1 && by0 === by1);
    return ((closedX ? ax0 <= bx1 : ax0 < bx1) &&
        (closedX ? ax1 >= bx0 : ax1 > bx0) &&
        (closedY ? by0 <= ay1 : by0 < ay1) &&
        (closedY ? by1 >= ay0 : by1 > ay0));
    // return closed
    //     ? ax0 <= bx1 &&
    //       ax1 >= bx0 && 
    //       by0 <= ay1 &&
    //       by1 >= ay0
    //     : ax0 < bx1 &&
    //       ax1 > bx0 && 
    //       by0 < ay1 &&
    //       by1 > ay0
}


;// CONCATENATED MODULE: ./src/calc-containers/are-containers-intersecting.ts

function areContainersIntersecting(container1, container2) {
    return areBoxesIntersecting(true, container1.box, container2.box);
}


;// CONCATENATED MODULE: ./src/graph/get-connected-components.ts
function addEdges(graph, edges) {
    for (let i = 0; i < edges.length; i++) {
        const edge = edges[i];
        addEdge(graph, [edge.a, edge.b]);
    }
}
/**
 * Adds an edge to an undirected graph.
 */
function addEdge(graph, vertices) {
    const [src, dest] = vertices;
    let srcList = graph.get(src);
    if (!srcList) {
        srcList = [];
        graph.set(src, srcList);
    }
    let destList = graph.get(dest);
    if (!destList) {
        destList = [];
        graph.set(dest, destList);
    }
    srcList.push(dest);
    destList.push(src);
}
function DFSUtil(graph, v, visited, component) {
    // Mark the current node as visited and print it 
    visited.add(v);
    component.push(v);
    // Recur for all the vertices adjacent to this vertex 
    const list = graph.get(v);
    for (let i = 0; i < list.length; i++) {
        const x = list[i];
        if (!visited.has(x)) {
            DFSUtil(graph, x, visited, component);
        }
    }
}
/**
 * Returns connected components for the given undirected graph
 */
function getConnectedComponents(graph) {
    // Mark all the vertices as not visited 
    const components = [];
    const visited = new Set();
    for (const item of graph) {
        const node = item[0];
        if (!visited.has(node)) {
            // print all reachable vertices from v 
            components.push([]);
            DFSUtil(graph, node, visited, components[components.length - 1]);
        }
    }
    return components;
}


;// CONCATENATED MODULE: ./src/calc-containers/get-isolated-containers.ts
/**
 * @param containers all containers
 * @param connectedContainers
 */
function getIsolatedComponents(containers, connectedContainers) {
    const connectedContainers_ = new Set();
    for (const cs of connectedContainers) {
        for (const c of cs) {
            connectedContainers_.add(c);
        }
    }
    const res = [];
    for (let i = 0; i < containers.length; i++) {
        const container = containers[i];
        if (!connectedContainers_.has(container)) {
            res.push(container);
        }
    }
    return res;
}


;// CONCATENATED MODULE: ./src/calc-containers/merge-containers.ts
function mergeContainers(ccs) {
    const containers = [];
    for (const cc of ccs) {
        let minLeft = Number.POSITIVE_INFINITY;
        let minTop = Number.POSITIVE_INFINITY;
        let maxRight = Number.NEGATIVE_INFINITY;
        let maxBottom = Number.NEGATIVE_INFINITY;
        const xs = [];
        for (const c of cc) {
            const [[left, top], [right, bottom]] = c.box;
            if (left < minLeft) {
                minLeft = left;
            }
            if (top < minTop) {
                minTop = top;
            }
            if (right > maxRight) {
                maxRight = right;
            }
            if (bottom > maxBottom) {
                maxBottom = bottom;
            }
            xs.push(...c.xs);
        }
        // console.log(minLeft)
        const container = {
            box: [[minLeft, minTop], [maxRight, maxBottom]],
            xs: xs,
            inOuts: undefined
        };
        containers.push(container);
    }
    return containers;
}


;// CONCATENATED MODULE: ./node_modules/flo-poly/node/roots/certified/root-interval-to-exp.js
/**
 * Returns the result of converting a double precision root interval to a
 * double-double precision one
 *
 * @param ri a root interval
 *
 * @doc
 */
function rootIntervalToExp(ri) {
    return {
        tS: [0, ri.tS],
        tE: [0, ri.tE],
        multiplicity: ri.multiplicity
    };
}

//# sourceMappingURL=root-interval-to-exp.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/change-variables/expansion/e-change-variables-linear.js



// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗ Otherwise code is too slow❗
const e_change_variables_linear_expansionProduct = expansionProduct;
const e_change_variables_linear_fastExpansionSum = fastExpansionSum;
const e_change_variables_linear_scaleExpansion2 = scaleExpansion2;
/**
 * Returns the exact result (bar underflow / overflow) of performing a change
 * of variables of the form: p(x) <- p(ax + b) on the given polynomial (with
 * coefficients given as Shewchuk expansions).
 *
 * * see [this stackoverflow question](http://stackoverflow.com/questions/141422/how-can-a-transform-a-polynomial-to-another-coordinate-system)
 *
 * @param p a polynomial with coefficients given densely as an array of Shewchuk
 * floating point expansions from highest to lowest power, e.g. `[[5],[-3],[0]]`
 * represents the polynomial `5x^2 - 3x`
 * @param a the `a` in `ax + b`
 * @param b the `b` in `ax + b`
 *
 * @example
 * ```typescript
 * eChangeVariablesLinear([[1],[2],[7]], 3, 4); //=> [[9], [30], [31]]
 * ```
 *
 * @doc
 */
function eChangeVariablesLinear(p, a, b) {
    // We let the coefficients of p(ax + b) be denoted by d_i in the code below. 
    // d_i is calculated as d = T*c, where c are the original coefficients.
    const d = p.length - 1;
    if (d < 0) {
        return [];
    }
    // Initialize a zero matrix
    const t = [];
    for (let i = 0; i < d + 1; i++) {
        t.push(new Array(d + 1).fill([0]));
    }
    // Calculate the triangular matrix T
    t[0][0] = [1];
    for (let j = 1; j <= d; j++) {
        t[0][j] = e_change_variables_linear_scaleExpansion2(b, t[0][j - 1]);
        for (let i = 1; i <= j; i++) {
            t[i][j] = e_change_variables_linear_fastExpansionSum(e_change_variables_linear_scaleExpansion2(b, t[i][j - 1]), e_change_variables_linear_scaleExpansion2(a, t[i - 1][j - 1]));
        }
    }
    // Multiply
    const res = new Array(d + 1).fill([0]);
    for (let i = 0; i <= d; i++) {
        res[d - i] = [0];
        for (let j = i; j <= d; j++) {
            const acc = e_change_variables_linear_expansionProduct(t[i][j], p[d - j]);
            res[d - i] = e_change_variables_linear_fastExpansionSum(res[d - i], acc);
        }
    }
    return res;
}

//# sourceMappingURL=e-change-variables-linear.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/roots/certified/refine-k1.js




// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗ Otherwise code is too slow❗
const refine_k1_eChangeVariablesLinear = eChangeVariablesLinear;
const refine_k1_allRootsCertified = allRootsCertified;
const refine_k1_eToDd = eToDd;
const refine_k1_twoSum = basic_two_sum_twoSum;
const refine_k1_eps = Number.EPSILON;
/**
 * Returns once compensated root(s) (bar underflow / overflow) given a root
 * interval previously calculated using [[allRootsCertified]].
 *
 * * 'once-compensated' here means that the typical root interval, `W`,
 * (`= Number.EPSILON` at `1`) is reduced to `W**2`; if multiple roots were
 * present in the original interval they may be resolved to individual
 * intervals
 *
 * @param ri a root interval previously calculated
 * @param p the exact polynomial with coefficients given densely as an array of
 * Shewchuk floating point expansions from highest to lowest power,
 * e.g. `[[5],[-3],[0]]` represents the polynomial `5x^2 - 3x`
 *
 * @doc
 */
function refineK1(ri, p) {
    const tS = ri.tS;
    // scale is exact by the precondition put on `RootInterval`
    const δ = ri.tE - tS;
    if (δ === 0) {
        return [{
                tS: [0, tS],
                tE: [0, tS],
                multiplicity: ri.multiplicity
            }];
    }
    // Translate the polynomial such that the root is within δ from 0, then
    // scale it such that the roots stay <= 1, i.e. is in [0,1]
    const pExactK1 = refine_k1_eChangeVariablesLinear(p, δ, tS);
    // reduce the polynomial to double-double precision for faster root finding
    const pDdK1 = pExactK1.map(refine_k1_eToDd);
    // update the double-double precision error bound - it is simply the error 
    // in rounding the exact coefficients to double-double precision
    const errBoundK1 = pDdK1.map(c => refine_k1_eps * refine_k1_eps * c[1]);
    const getPExactK1 = () => pExactK1;
    // keep TypeScript happy; `allRootsCertified` can safely be assumed not to
    // return `undefined`
    const risLo = refine_k1_allRootsCertified(pDdK1, 0, 1, errBoundK1, getPExactK1);
    const ris = [];
    for (const riLo of risLo) {
        ris.push({
            tS: refine_k1_twoSum(tS, riLo.tS * δ),
            tE: refine_k1_twoSum(tS, riLo.tE * δ),
            multiplicity: riLo.multiplicity
        });
    }
    return ris;
}

//# sourceMappingURL=refine-k1.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/to-power-basis/to-power-basis/double-double/to-power-basis-dd-with-running-error.js

// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗
const to_power_basis_dd_with_running_error_td = node_twoDiff; // error -> 0
const to_power_basis_dd_with_running_error_qmd = node_ddMultDouble2; // error -> 3*u²
const to_power_basis_dd_with_running_error_qaq = node_ddAddDd;
const qad = node_ddAddDouble; // error -> 2*u²
const to_power_basis_dd_with_running_error_abs = Math.abs;
/**
 * Returns the power basis representation of a bezier curve of order cubic or
 * less including a coefficient-wise absolute error bound that need to be multiplied
 * by `γγ(3)`
 *
 * * intermediate calculations done in double-double precision
 * * the error bound need to be multiplied by `γγ(3) === 3.697785493223493e-32` before use
 * * returns the power basis x and y coordinate polynomials from highest power
 * to lowest, e.g. if `x(t) = at^3 + bt^2 + ct + d`
 * and `y(t) = et^3 + ft^2 + gt + h` then the result is returned
 * as `[[a,b,c,d],[e,f,g,h]]`, where the `a,b,c,...` are in double-double
 * precision
 *
 * @param ps an order 0,1,2 or 3 bezier curve given by an ordered array of its
 * control points, e.g. `[[0,0],[1,1],[2,1],[2,0]]`
 *
 * @doc
 */
function toPowerBasisDdWithRunningError(ps) {
    if (ps.length === 4) {
        return toPowerBasis3DdWithRunningError(ps);
    }
    if (ps.length === 3) {
        return toPowerBasis2DdWithRunningError(ps);
    }
    if (ps.length === 2) {
        return {
            coeffs: toPowerBasis1DdWithRunningError(ps),
            errorBound: [[0, 0], [0, 0]]
        };
    }
    if (ps.length === 1) {
        return {
            coeffs: toPowerBasis0DdWithRunningError(ps),
            errorBound: [[0], [0]]
        };
    }
    throw new Error('The given bezier curve must be of order <= cubic.');
}
/** @internal */
function toPowerBasis3DdWithRunningError(ps) {
    const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;
    // ----------------------------
    // xx3 = (x3 - x0) + 3*(x1 - x2)
    // ----------------------------
    const xa = to_power_basis_dd_with_running_error_td(x3, x0); // error free
    const xb = to_power_basis_dd_with_running_error_td(x1, x2); // error free
    const $xc = 3 * (x1 - x2);
    const xc = to_power_basis_dd_with_running_error_qmd(3, xb);
    const _xc_ = to_power_basis_dd_with_running_error_abs($xc);
    const xx3 = to_power_basis_dd_with_running_error_qaq(xa, xc);
    const xx3_ = _xc_ + to_power_basis_dd_with_running_error_abs(x3 - x0 + $xc);
    // ----------------------------
    // xx2 = 3*(x2 - 2*x1 + x0)
    // ----------------------------
    const xd = to_power_basis_dd_with_running_error_td(x2, 2 * x1); // error free
    const xe = qad(xd, x0);
    const _xe_ = to_power_basis_dd_with_running_error_abs(x2 - 2 * x1 + x0);
    const xx2 = to_power_basis_dd_with_running_error_qmd(3, xe);
    //const xx2_ = 3*_xe_ + 3*_xe_;
    const xx2_ = 6 * _xe_;
    // ----------------------------
    // xx1 = 3*(x1 - x0)
    // ----------------------------
    const xg = to_power_basis_dd_with_running_error_td(x1, x0); // error free
    const xx1 = to_power_basis_dd_with_running_error_qmd(3, xg);
    const xx1_ = to_power_basis_dd_with_running_error_abs(3 * (x1 - x0));
    // ----------------------------
    // yy3 = y3 + 3*(y1 - y2) - y0
    // ----------------------------
    const ya = to_power_basis_dd_with_running_error_td(y3, y0); // error free
    const yb = to_power_basis_dd_with_running_error_td(y1, y2); // error free
    const $yc = 3 * (y1 - y2);
    const yc = to_power_basis_dd_with_running_error_qmd(3, yb);
    const _yc_ = to_power_basis_dd_with_running_error_abs($yc);
    const yy3 = to_power_basis_dd_with_running_error_qaq(ya, yc);
    const yy3_ = _yc_ + to_power_basis_dd_with_running_error_abs(y3 - y0 + $yc);
    // ----------------------------
    // yy2 = 3*(y2 - 2*y1 + y0)
    // ----------------------------
    const yd = to_power_basis_dd_with_running_error_td(y2, 2 * y1); // error free
    const ye = qad(yd, y0);
    const _ye_ = to_power_basis_dd_with_running_error_abs(y2 - 2 * y1 + y0);
    const yy2 = to_power_basis_dd_with_running_error_qmd(3, ye);
    //const yy2_ = 3*_ye_ + 3*_ye_;
    const yy2_ = 6 * _ye_;
    // ----------------------------
    // yy1 = 3*(y1 - y0)
    // ----------------------------
    const yg = to_power_basis_dd_with_running_error_td(y1, y0); // error free
    const yy1 = to_power_basis_dd_with_running_error_qmd(3, yg);
    const yy1_ = to_power_basis_dd_with_running_error_abs(3 * (y1 - y0));
    return {
        coeffs: [[xx3, xx2, xx1, [0, x0]], [yy3, yy2, yy1, [0, y0]]],
        errorBound: [[xx3_, xx2_, xx1_, 0], [yy3_, yy2_, yy1_, 0]]
    };
}
/** @internal */
function toPowerBasis2DdWithRunningError(ps) {
    const [[x0, y0], [x1, y1], [x2, y2]] = ps;
    // ---------------------
    // xx2 = x2 - 2*x1 + x0
    // ---------------------
    const $a = x2 - 2 * x1;
    const a = to_power_basis_dd_with_running_error_td(x2, 2 * x1); // error free
    const xx2 = qad(a, x0);
    const xx2_ = to_power_basis_dd_with_running_error_abs($a + x0);
    // ---------------------
    // xx1 = 2*(x1 - x0)
    // ---------------------
    const xx1 = to_power_basis_dd_with_running_error_td(2 * x1, 2 * x0); // error free
    // ---------------------
    // yy2 = y2 - 2*y1 + y0
    // ---------------------
    const $b = y2 - 2 * y1;
    const b = to_power_basis_dd_with_running_error_td(y2, 2 * y1); // error free
    const yy2 = qad(b, y0);
    const yy2_ = to_power_basis_dd_with_running_error_abs($b + y0);
    // ---------------------
    // yy1 = 2*(y1 - y0)
    // ---------------------
    const yy1 = to_power_basis_dd_with_running_error_td(2 * y1, 2 * y0); // error free
    return {
        coeffs: [[xx2, xx1, [0, x0]], [yy2, yy1, [0, y0]]],
        errorBound: [[xx2_, 0, 0], [yy2_, 0, 0]]
    };
}
/** @internal */
function toPowerBasis1DdWithRunningError(ps) {
    const [[x0, y0], [x1, y1]] = ps;
    return [[
            to_power_basis_dd_with_running_error_td(x1, x0),
            [0, x0]
        ], [
            to_power_basis_dd_with_running_error_td(y1, y0),
            [0, y0]
        ]];
}
/** @internal */
function toPowerBasis0DdWithRunningError(ps) {
    const [[x0, y0]] = ps;
    return [[[0, x0]], [[0, y0]]];
}

//# sourceMappingURL=to-power-basis-dd-with-running-error.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/implicit-form/double-double/get-implicit-form1-dd-with-running-error.js



// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗
const get_implicit_form1_dd_with_running_error_qdq = node_ddDiffDd; // error -> 3*γ²
const get_implicit_form1_dd_with_running_error_qmd = node_ddMultDouble2;
const eno = eNegativeOf;
const get_implicit_form1_dd_with_running_error_abs = Math.abs;
/**
 * Returns a double-double precision implicit form of the given line segment
 * and a coefficientwise error bound.
 *
 * Returned coefficients are subscripted to match their monomial's variables,
 * e.g. `vₓᵧ` is the coefficient of the monomial `vₓᵧxy`
 *
 * * the implicit form is given by: `vₓx + vᵧy + v = 0`
 * * intermediate calculations are done in double-double precision and this is
 * reflected in the error bound
 * * the error bound returned first needs to be scaled by `γγ3 === (3*u*u) / (1 - 3*u*u) === 3.697785493223493e-32`,
 * where `u === Number.EPSILON / 2` before use
 * * adapted from [Indrek Mandre](http://www.mare.ee/indrek/misc/2d.pdf)
 *
 * @param ps a line segment given as an array of its control points,
 * e.g. `[[1,2],[3,4]]`
 *
 * @doc mdx
 */
function getImplicitForm1DdWithRunningError(ps) {
    // The implicit form is given by:
    // vₓx + vᵧy + v = 0
    const [[a1, [, a0]], [b1, [, b0]]] = toPowerBasis1DdWithRunningError(ps);
    const vₓ = eno(b1); // exact
    const vᵧ = a1; // exact
    //const v = a1*b0 - a0*b1;
    const a1b0 = get_implicit_form1_dd_with_running_error_qmd(b0, a1);
    const _a1b0_ = get_implicit_form1_dd_with_running_error_abs(a1b0[1]);
    const a0b1 = get_implicit_form1_dd_with_running_error_qmd(a0, b1);
    const _a0b1_ = get_implicit_form1_dd_with_running_error_abs(a0b1[1]);
    const v = get_implicit_form1_dd_with_running_error_qdq(a0b1, a1b0);
    const v_ = _a1b0_ + _a0b1_ + get_implicit_form1_dd_with_running_error_abs(v[1]);
    return {
        coeffs: { vₓ, vᵧ, v },
        errorBound: { v_ } // vₓ_, vᵧ_ === 0
    };
}

//# sourceMappingURL=get-implicit-form1-dd-with-running-error.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/bezier-bezier-intersection/get-coefficients/double-double/get-coeffs-bez1-bez1-dd.js




// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗
const get_coeffs_bez1_bez1_dd_qaq = node_ddAddDd;
const get_coeffs_bez1_bez1_dd_qmd = node_ddMultDouble2;
const get_coeffs_bez1_bez1_dd_qmq = node_ddMultDd;
const get_coeffs_bez1_bez1_dd_abs = Math.abs;
const get_coeffs_bez1_bez1_dd_3 = error_analysis_error_analysis_(3);
/**
 * Returns a polynomial in 1 variable (including coefficientwise error bound)
 * whose roots are the parameter values of the intersection points of two
 * order 1 bezier curves (i.e. 2 lines).
 *
 * The returned polynomial degree will be 1
 * (see [Bézout's theorem](https://en.wikipedia.org/wiki/B%C3%A9zout%27s_theorem))
 *
 * The returned polynomial coefficients are given densely as an array of
 * double-double precision floating point numbers from highest to lowest power,
 * e.g. `[[0,5],[0,-3],[0,0]]` represents the polynomial `5x^2 - 3x`.
 *
 * * intermediate calculations are done in double-double precision
 * * adapted from [Indrek Mandre](http://www.mare.ee/indrek/misc/2d.pdf)
 *
 * @param ps1
 * @param ps2
 *
 * @internal
 */
function getCoeffsBez1Bez1Dd(ps1, ps2) {
    const { coeffs: { vₓ, vᵧ, v }, // all these are double-doubles
    errorBound: { v_ } } = getImplicitForm1DdWithRunningError(ps1);
    const [[c1, [, c0]], [d1, [, d0]]] = toPowerBasis1DdWithRunningError(ps2);
    const $c1 = c1[1];
    const $d1 = d1[1];
    const $vₓ = vₓ[1];
    const $vᵧ = vᵧ[1];
    const $v = v[1];
    //----------------------------------
    // const v1 = c1*vₓ + d1*vᵧ;
    //----------------------------------
    const $p1 = $c1 * $vₓ;
    const _p1 = get_coeffs_bez1_bez1_dd_abs($p1);
    const p1_ = 2 * _p1;
    const p1 = get_coeffs_bez1_bez1_dd_qmq(c1, vₓ);
    const $p2 = $d1 * $vᵧ;
    const _p2 = get_coeffs_bez1_bez1_dd_abs($p2);
    const p2_ = 2 * _p2;
    const p2 = get_coeffs_bez1_bez1_dd_qmq(d1, vᵧ);
    const $v1 = $p1 + $p2;
    //const _$v1 = abs($v1);
    const v1 = get_coeffs_bez1_bez1_dd_qaq(p1, p2);
    const v1_ = p1_ + p2_ + get_coeffs_bez1_bez1_dd_abs($v1);
    //----------------------------------
    // const v0 = c0*vₓ + d0*vᵧ + v_0;
    //----------------------------------
    const $p3 = c0 * $vₓ;
    const p3 = get_coeffs_bez1_bez1_dd_qmd(c0, vₓ);
    const _p3_ = get_coeffs_bez1_bez1_dd_abs($p3);
    const $p4 = d0 * $vᵧ;
    const p4 = get_coeffs_bez1_bez1_dd_qmd(d0, vᵧ);
    const _p4_ = get_coeffs_bez1_bez1_dd_abs($p4);
    const $p5 = $p3 + $p4;
    //const _p5 = abs($p5);
    const p5 = get_coeffs_bez1_bez1_dd_qaq(p3, p4);
    const p5_ = _p3_ + _p4_ + get_coeffs_bez1_bez1_dd_abs($p5);
    const v0 = get_coeffs_bez1_bez1_dd_qaq(p5, v);
    const v0_ = p5_ + v_ + get_coeffs_bez1_bez1_dd_abs($p5 + $v);
    return {
        coeffs: [v1, v0],
        errBound: [get_coeffs_bez1_bez1_dd_3 * v1_, get_coeffs_bez1_bez1_dd_3 * v0_]
    };
}

//# sourceMappingURL=get-coeffs-bez1-bez1-dd.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/implicit-form/double-double/get-implicit-form2-dd-with-running-error.js


const qno = node_ddNegativeOf; // error -> 0
const get_implicit_form2_dd_with_running_error_qm2 = node_ddMultBy2; // error -> 0 
//const qmd2 = qMultDouble1;  // error -> 1.5*γ²
const get_implicit_form2_dd_with_running_error_qmd = node_ddMultDouble2; // error -> 3*γ²
const get_implicit_form2_dd_with_running_error_qmq = node_ddMultDd; // error -> 7*γ² (theoretical), 5*γ² (worst found), we use 6*γ²
const get_implicit_form2_dd_with_running_error_qdq = node_ddDiffDd; // error -> 3*γ²
const get_implicit_form2_dd_with_running_error_abs = Math.abs;
/**
 * Returns a double-double precision implicit form of the given quadratic
 * bezier curve and a coefficientwise error bound.
 *
 * Returned coefficients are subscripted to match their monomial's variables,
 * e.g. `vₓᵧ` is the coefficient of the monomial `vₓᵧxy`
 *
 * * the implicit form is given by: `vₓₓx² +vₓᵧxy + vᵧᵧy² + vₓx + vᵧy + v = 0`
 * * intermediate calculations are done in double-double precision and this is
 * reflected in the error bound
 * * the error bound returned first needs to be scaled by `γγ3 === (3*u*u) / (1 - 3*u*u) === 3.697785493223493e-32`,
 * where `u === Number.EPSILON / 2` before use
 * * adapted from [Indrek Mandre](http://www.mare.ee/indrek/misc/2d.pdf)
 *
 * @param ps a quadratic bezier curve given as an array of its control points,
 * e.g. `[[1,2],[3,4],[5,7]]`
 *
 * @doc mdx
 */
function getImplicitForm2DdWithRunningError(ps) {
    // The implicit form is given by:
    // vₓₓx² +vₓᵧxy + vᵧᵧy² + vₓx + vᵧy + v = 0
    const { coeffs: [[a2, a1, [, a0]], [b2, b1, [, b0]]], errorBound: [[a2_], [b2_]] } = toPowerBasis2DdWithRunningError(ps);
    const $a2 = a2[1];
    const $a1 = a1[1];
    const $b2 = b2[1];
    const $b1 = b1[1];
    const _a0 = get_implicit_form2_dd_with_running_error_abs(a0);
    const _a1 = get_implicit_form2_dd_with_running_error_abs($a1);
    const _a2 = get_implicit_form2_dd_with_running_error_abs($a2);
    const _b0 = get_implicit_form2_dd_with_running_error_abs(b0);
    const _b1 = get_implicit_form2_dd_with_running_error_abs($b1);
    const _b2 = get_implicit_form2_dd_with_running_error_abs($b2);
    const a2b1 = get_implicit_form2_dd_with_running_error_qmq(a2, b1);
    const a2b1_ = a2_ * _b1 + 2 * get_implicit_form2_dd_with_running_error_abs($a2 * $b1);
    const a1b2 = get_implicit_form2_dd_with_running_error_qmq(a1, b2);
    const a1b2_ = _a1 * b2_ + 2 * get_implicit_form2_dd_with_running_error_abs($a1 * $b2);
    const a2b0 = get_implicit_form2_dd_with_running_error_qmd(b0, a2);
    const a2b0_ = _b0 * a2_ + get_implicit_form2_dd_with_running_error_abs(b0 * $a2);
    const a0b2 = get_implicit_form2_dd_with_running_error_qmd(a0, b2);
    const a0b2_ = _a0 * b2_ + get_implicit_form2_dd_with_running_error_abs(a0 * $b2);
    const a1b0 = get_implicit_form2_dd_with_running_error_qmd(b0, a1);
    const a1b0_ = get_implicit_form2_dd_with_running_error_abs(b0 * $a1);
    const a0b1 = get_implicit_form2_dd_with_running_error_qmd(a0, b1);
    const a0b1_ = get_implicit_form2_dd_with_running_error_abs(a0 * $b1);
    const a2a2 = get_implicit_form2_dd_with_running_error_qmq(a2, a2);
    const a2a2_ = 2 * (a2_ * _a2 + get_implicit_form2_dd_with_running_error_abs($a2 * $a2));
    const a2b2 = get_implicit_form2_dd_with_running_error_qmq(a2, b2);
    const a2b2_ = a2_ * _b2 + _a2 * b2_ + 2 * get_implicit_form2_dd_with_running_error_abs($a2 * $b2);
    const b2b2 = get_implicit_form2_dd_with_running_error_qmq(b2, b2);
    const b2b2_ = 2 * (b2_ * _b2 + get_implicit_form2_dd_with_running_error_abs($b2 * $b2));
    const $a2b1 = $a2 * $b1;
    const $a1b2 = $a1 * $b2;
    const $a2b0 = $a2 * b0;
    const $a0b2 = a0 * $b2;
    const $a1b0 = $a1 * b0;
    const $a0b1 = a0 * $b1;
    const $q1 = $a2b1 - $a1b2;
    const $q2 = $a2b0 - $a0b2;
    const $q3 = $a1b0 - $a0b1;
    const q1 = get_implicit_form2_dd_with_running_error_qdq(a2b1, a1b2);
    const _q1 = get_implicit_form2_dd_with_running_error_abs($q1);
    const q1_ = a2b1_ + a1b2_ + get_implicit_form2_dd_with_running_error_abs($q1);
    const q2 = get_implicit_form2_dd_with_running_error_qdq(a2b0, a0b2);
    const _q2 = get_implicit_form2_dd_with_running_error_abs($q2);
    const q2_ = a2b0_ + a0b2_ + get_implicit_form2_dd_with_running_error_abs($q2);
    const q3 = get_implicit_form2_dd_with_running_error_qdq(a1b0, a0b1);
    const _q3 = get_implicit_form2_dd_with_running_error_abs($q3);
    const q3_ = a1b0_ + a0b1_ + get_implicit_form2_dd_with_running_error_abs($q3);
    // -a1*q1*y - a2**2*y**2 + 2*a2*b2*x*y + 2*a2*q2*y + b1*q1*x - b2**2*x**2 - 2*b2*q2*x + q1*q3 - q2**2
    // -------------
    // b2**2 *x**2
    // -b2**2 *x**2
    // -------------
    const vₓₓ = qno(b2b2);
    const vₓₓ_ = b2b2_;
    // -------------
    // -2*a2*b2 *x*y
    // 2*a2*b2 *x*y
    // -------------
    const vₓᵧ = get_implicit_form2_dd_with_running_error_qm2(a2b2);
    const vₓᵧ_ = a2b2_;
    // -------------
    // a2**2 *y**2 
    // -a2**2 *y**2 
    // -------------
    const vᵧᵧ = qno(a2a2);
    const vᵧᵧ_ = a2a2_;
    // -----------------------------------------------
    // -2*a0*b2**2 + a1*b1*b2 + 2*a2*b0*b2 - a2*b1**2
    // (b1*q1 + -2*b2*q2) *x
    //const vₓ = b1*q1 - 2*b2*q2;
    // -----------------------------------------------
    const $w1 = $b1 * $q1;
    const w1 = get_implicit_form2_dd_with_running_error_qmq(b1, q1);
    const w1_ = _b1 * q1_ + 2 * get_implicit_form2_dd_with_running_error_abs($w1);
    const $w2 = 2 * $q2 * $b2;
    const w2 = get_implicit_form2_dd_with_running_error_qm2(get_implicit_form2_dd_with_running_error_qmq(b2, q2));
    const w2_ = 2 * (b2_ * _q2 + _b2 * q2_ + 2 * get_implicit_form2_dd_with_running_error_abs($w2));
    const $vₓ = $w1 - $w2;
    const vₓ = get_implicit_form2_dd_with_running_error_qdq(w1, w2);
    const vₓ_ = w1_ + w2_ + get_implicit_form2_dd_with_running_error_abs($vₓ);
    // -----------------------------------------------
    // 2*a0*a2*b2 - a1**2*b2 + a1*a2*b1 - 2*a2**2*b0
    // (-a1*q1 + 2*a2*q2) *y
    // -----------------------------------------------
    const $w3 = 2 * $a2 * $q2;
    const w3 = get_implicit_form2_dd_with_running_error_qm2(get_implicit_form2_dd_with_running_error_qmq(a2, q2));
    const w3_ = 2 * (a2_ * _q2 + _a2 * q2_ + 2 * get_implicit_form2_dd_with_running_error_abs($w3));
    const $w4 = $a1 * $q1;
    const w4 = get_implicit_form2_dd_with_running_error_qmq(a1, q1);
    const w4_ = _a1 * q1_ + 2 * get_implicit_form2_dd_with_running_error_abs($w4);
    const $vᵧ = $w3 - $w4;
    const vᵧ = get_implicit_form2_dd_with_running_error_qdq(w3, w4);
    const vᵧ_ = w3_ + w4_ + get_implicit_form2_dd_with_running_error_abs($vᵧ);
    // --------------------------------------------------------------------------------------------------
    // a0**2*b2**2 - a0*a1*b1*b2 - 2*a0*a2*b0*b2 + a0*a2*b1**2 + a1**2*b0*b2 - a1*a2*b0*b1 + a2**2*b0**2
    // q1*q3 + -q2**2
    // --------------------------------------------------------------------------------------------------
    const $w5 = $q1 * $q3;
    const w5 = get_implicit_form2_dd_with_running_error_qmq(q1, q3);
    const w5_ = q1_ * _q3 + _q1 * q3_ + 2 * get_implicit_form2_dd_with_running_error_abs($w5);
    const $w6 = $q2 * $q2;
    const w6 = get_implicit_form2_dd_with_running_error_qmq(q2, q2);
    const w6_ = 2 * (q2_ * _q2 + get_implicit_form2_dd_with_running_error_abs($w6));
    const $v = $w5 - $w6;
    const v = get_implicit_form2_dd_with_running_error_qdq(w5, w6);
    const v_ = w5_ + w6_ + get_implicit_form2_dd_with_running_error_abs($v);
    return {
        coeffs: { vₓₓ, vₓᵧ, vᵧᵧ, vₓ, vᵧ, v },
        errorBound: { vₓₓ_, vₓᵧ_, vᵧᵧ_, vₓ_, vᵧ_, v_ }
    };
}

//# sourceMappingURL=get-implicit-form2-dd-with-running-error.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/bezier-bezier-intersection/get-coefficients/double-double/get-coeffs-bez2-bez1-dd.js




// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗
const get_coeffs_bez2_bez1_dd_tp = node_twoProduct;
const get_coeffs_bez2_bez1_dd_qm2 = node_ddMultBy2;
const get_coeffs_bez2_bez1_dd_qmd = node_ddMultDouble2;
const get_coeffs_bez2_bez1_dd_qmq = node_ddMultDd;
const get_coeffs_bez2_bez1_dd_qaq = node_ddAddDd;
const get_coeffs_bez2_bez1_dd_abs = Math.abs;
const get_coeffs_bez2_bez1_dd_3 = error_analysis_error_analysis_(3);
/**
 * Returns a polynomial in 1 variable (including coefficientwise error bound)
 * whose roots are the parameter values of the intersection points of an order
 * 2 and 1 bezier curve (i.e. a quadratic bezier curve and a line).
 *
 * The returned polynomial degree will be 2
 * (see [Bézout's theorem](https://en.wikipedia.org/wiki/B%C3%A9zout%27s_theorem))
 *
 * The returned polynomial coefficients are given densely as an array of
 * double-double precision floating point numbers from highest to lowest power,
 * e.g. `[[0,5],[0,-3],[0,0]]` represents the polynomial `5x^2 - 3x`.
 *
 * * intermediate calculations are done in double-double precision
 * * adapted from [Indrek Mandre](http://www.mare.ee/indrek/misc/2d.pdf)
 *
 * @param ps1
 * @param ps2
 *
 * @internal
 */
function getCoeffsBez2Bez1Dd(ps1, ps2) {
    const { coeffs: { vₓₓ, vₓᵧ, vᵧᵧ, vₓ, vᵧ, v }, errorBound: { vₓₓ_, vₓᵧ_, vᵧᵧ_, vₓ_, vᵧ_, v_ } } = getImplicitForm2DdWithRunningError(ps1);
    const [[c1, [, c0]], [d1, [, d0]]] = toPowerBasis1DdWithRunningError(ps2);
    const $vₓₓ = vₓₓ[1];
    const $vₓᵧ = vₓᵧ[1];
    const $vᵧᵧ = vᵧᵧ[1];
    const $vₓ = vₓ[1];
    const $vᵧ = vᵧ[1];
    const $v = v[1];
    const _vₓₓ = get_coeffs_bez2_bez1_dd_abs($vₓₓ);
    const _vₓᵧ = get_coeffs_bez2_bez1_dd_abs($vₓᵧ);
    const _vᵧᵧ = get_coeffs_bez2_bez1_dd_abs($vᵧᵧ);
    const $c1 = c1[1];
    const $d1 = d1[1];
    const _c0 = get_coeffs_bez2_bez1_dd_abs(c0);
    const _c1 = get_coeffs_bez2_bez1_dd_abs($c1);
    const _d0 = get_coeffs_bez2_bez1_dd_abs(d0);
    const _d1 = get_coeffs_bez2_bez1_dd_abs($d1);
    const $c0c0 = c0 * c0;
    const $c0c1 = c0 * $c1;
    const $c0d0 = c0 * d0;
    const $c0d1 = c0 * $d1;
    const $c1c1 = $c1 * $c1;
    const $c1d0 = $c1 * d0;
    const $c1d1 = $c1 * $d1;
    const $d0d0 = d0 * d0;
    const $d0d1 = d0 * $d1;
    const $d1d1 = $d1 * $d1;
    const c0c0 = get_coeffs_bez2_bez1_dd_tp(c0, c0);
    const c0c1 = get_coeffs_bez2_bez1_dd_qmd(c0, c1);
    const _c0c1_ = get_coeffs_bez2_bez1_dd_abs($c0c1);
    const c0d0 = get_coeffs_bez2_bez1_dd_tp(c0, d0);
    const c0d1 = get_coeffs_bez2_bez1_dd_qmd(c0, d1);
    const c0d1_ = get_coeffs_bez2_bez1_dd_abs($c0d1);
    const _c1c1 = get_coeffs_bez2_bez1_dd_abs($c1c1);
    const c1c1 = get_coeffs_bez2_bez1_dd_qmq(c1, c1);
    const c1c1_ = 2 * _c1c1;
    const c1d0 = get_coeffs_bez2_bez1_dd_qmd(d0, c1);
    const c1d0_ = get_coeffs_bez2_bez1_dd_abs($c1d0);
    const _c1d1 = get_coeffs_bez2_bez1_dd_abs($c1d1);
    const c1d1 = get_coeffs_bez2_bez1_dd_qmq(c1, d1);
    const c1d1_ = 2 * _c1d1;
    const d0d0 = get_coeffs_bez2_bez1_dd_tp(d0, d0);
    const d0d1 = get_coeffs_bez2_bez1_dd_qmd(d0, d1);
    const _d0d1_ = get_coeffs_bez2_bez1_dd_abs($d0d1);
    const _d1d1 = get_coeffs_bez2_bez1_dd_abs($d1d1);
    const d1d1 = get_coeffs_bez2_bez1_dd_qmq(d1, d1);
    const d1d1_ = 2 * _d1d1;
    // a1**2*vₓₓ + a1*b1*vₓᵧ + b1**2*vᵧᵧ
    const $p1 = $c1c1 * $vₓₓ;
    const p1 = get_coeffs_bez2_bez1_dd_qmq(c1c1, vₓₓ);
    const p1_ = c1c1_ * _vₓₓ * _c1c1 * vₓₓ_ + 2 * get_coeffs_bez2_bez1_dd_abs($p1);
    const $p2 = $d1d1 * $vᵧᵧ;
    const p2 = get_coeffs_bez2_bez1_dd_qmq(d1d1, vᵧᵧ);
    const p2_ = d1d1_ * _vᵧᵧ * _d1d1 * vᵧᵧ_ + 2 * get_coeffs_bez2_bez1_dd_abs($p2);
    const $p3 = $c1d1 * $vₓᵧ;
    const p3 = get_coeffs_bez2_bez1_dd_qmq(c1d1, vₓᵧ);
    const p3_ = c1d1_ * _vₓᵧ * _c1d1 * vₓᵧ_ + 2 * get_coeffs_bez2_bez1_dd_abs($p3);
    const $p4 = $p1 + $p2;
    const p4 = get_coeffs_bez2_bez1_dd_qaq(p1, p2);
    const p4_ = p1_ + p2_ + get_coeffs_bez2_bez1_dd_abs($p4);
    const $v2 = $p4 + $p3;
    const v2 = get_coeffs_bez2_bez1_dd_qaq(p4, p3);
    const v2_ = p4_ + p3_ + get_coeffs_bez2_bez1_dd_abs($v2);
    // 2*a0*a1*vₓₓ + a0*b1*vₓᵧ + a1*b0*vₓᵧ + a1*vₓ + 2*b0*b1*vᵧᵧ + b1*vᵧ
    const $p5 = $c0c1 * $vₓₓ;
    const p5 = get_coeffs_bez2_bez1_dd_qmq(c0c1, vₓₓ);
    const p5_ = _c0c1_ * (_vₓₓ + vₓₓ_) + 2 * get_coeffs_bez2_bez1_dd_abs($p5);
    const $p6 = $d0d1 * $vᵧᵧ;
    const p6 = get_coeffs_bez2_bez1_dd_qmq(d0d1, vᵧᵧ);
    const p6_ = _d0d1_ * (_vᵧᵧ + vᵧᵧ_) + 2 * get_coeffs_bez2_bez1_dd_abs($p6);
    const $p7 = $c0d1 + $c1d0;
    const p7 = get_coeffs_bez2_bez1_dd_qaq(c0d1, c1d0);
    const p7_ = c0d1_ + c1d0_ + get_coeffs_bez2_bez1_dd_abs($p7);
    const $pn = $p7 * $vₓᵧ;
    const pn = get_coeffs_bez2_bez1_dd_qmq(p7, vₓᵧ);
    const pn_ = p7_ * _vₓᵧ + get_coeffs_bez2_bez1_dd_abs($p7) * vₓᵧ_ + 2 * get_coeffs_bez2_bez1_dd_abs($pn);
    const $p8 = 2 * ($p5 + $p6);
    const p8 = get_coeffs_bez2_bez1_dd_qm2(get_coeffs_bez2_bez1_dd_qaq(p5, p6));
    const p8_ = 2 * (p5_ + p6_) + get_coeffs_bez2_bez1_dd_abs($p8);
    const $p9 = $p8 + $pn;
    const p9 = get_coeffs_bez2_bez1_dd_qaq(p8, pn);
    const p9_ = p8_ + pn_ + get_coeffs_bez2_bez1_dd_abs($p9);
    const $pa = $c1 * $vₓ;
    const pa = get_coeffs_bez2_bez1_dd_qmq(c1, vₓ);
    const pa_ = _c1 * vₓ_ + 2 * get_coeffs_bez2_bez1_dd_abs($pa);
    const $pb = $d1 * $vᵧ;
    const pb = get_coeffs_bez2_bez1_dd_qmq(d1, vᵧ);
    const pb_ = _d1 * vᵧ_ + 2 * get_coeffs_bez2_bez1_dd_abs($pb);
    const $pc = $pa + $pb;
    const pc = get_coeffs_bez2_bez1_dd_qaq(pa, pb);
    const pc_ = pa_ + pb_ + get_coeffs_bez2_bez1_dd_abs($pc);
    const $v1 = $p9 + $pc;
    const v1 = get_coeffs_bez2_bez1_dd_qaq(p9, pc);
    const v1_ = p9_ + pc_ + get_coeffs_bez2_bez1_dd_abs($v1);
    // a0**2*vₓₓ + a0*b0*vₓᵧ + a0*vₓ + b0**2*vᵧᵧ + b0*vᵧ + v_0
    const $pe = $c0c0 * $vₓₓ;
    const pe = get_coeffs_bez2_bez1_dd_qmq(c0c0, vₓₓ);
    const pe_ = 2 * get_coeffs_bez2_bez1_dd_abs($pe);
    const $pf = $c0d0 * $vₓᵧ;
    const pf = get_coeffs_bez2_bez1_dd_qmq(c0d0, vₓᵧ);
    const pf_ = 2 * get_coeffs_bez2_bez1_dd_abs($pf);
    const $pg = $d0d0 * $vᵧᵧ;
    const pg = get_coeffs_bez2_bez1_dd_qmq(d0d0, vᵧᵧ);
    const pg_ = 2 * get_coeffs_bez2_bez1_dd_abs($pg);
    const $ph = $pe + $pf;
    const ph = get_coeffs_bez2_bez1_dd_qaq(pe, pf);
    const ph_ = pe_ + pf_ + get_coeffs_bez2_bez1_dd_abs($ph);
    const $pi = $ph + $pg;
    const pi = get_coeffs_bez2_bez1_dd_qaq(ph, pg);
    const pi_ = ph_ + pg_ + get_coeffs_bez2_bez1_dd_abs($pi);
    const $pj = c0 * $vₓ;
    const pj = get_coeffs_bez2_bez1_dd_qmd(c0, vₓ);
    const pj_ = _c0 * vₓ_ + get_coeffs_bez2_bez1_dd_abs($pj);
    const $pk = d0 * $vᵧ;
    const pk = get_coeffs_bez2_bez1_dd_qmd(d0, vᵧ);
    const pk_ = _d0 * vᵧ_ + get_coeffs_bez2_bez1_dd_abs($pk);
    const $pl = $pj + $pk;
    const pl = get_coeffs_bez2_bez1_dd_qaq(pj, pk);
    const pl_ = pj_ + pk_ + get_coeffs_bez2_bez1_dd_abs($pl);
    const $pm = $pi + $pl;
    const pm = get_coeffs_bez2_bez1_dd_qaq(pi, pl);
    const pm_ = pi_ + pl_ + get_coeffs_bez2_bez1_dd_abs($pm);
    const $v0 = $pm + $v;
    const v0 = get_coeffs_bez2_bez1_dd_qaq(pm, v);
    const v0_ = pm_ + v_ + get_coeffs_bez2_bez1_dd_abs($v0);
    return {
        coeffs: [v2, v1, v0],
        errBound: [get_coeffs_bez2_bez1_dd_3 * v2_, get_coeffs_bez2_bez1_dd_3 * v1_, get_coeffs_bez2_bez1_dd_3 * v0_]
    };
}

//# sourceMappingURL=get-coeffs-bez2-bez1-dd.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/implicit-form/double-double/get-implicit-form3-dd-with-running-error.js


const get_implicit_form3_dd_with_running_error_abs = Math.abs;
const get_implicit_form3_dd_with_running_error_qno = node_ddNegativeOf; // error -> 0
const get_implicit_form3_dd_with_running_error_qm2 = node_ddMultBy2; // error -> 0 
const qd2 = node_ddDivBy2; // error -> 0 
//const qmd2 = qMultDouble1;  // error -> 1.5*γ²
const get_implicit_form3_dd_with_running_error_qmd = node_ddMultDouble2; // error -> 3*γ²
const get_implicit_form3_dd_with_running_error_qmq = node_ddMultDd; // error -> 5*γ² (worst found), 7*γ² (theoretical), we use 6*γ²
const get_implicit_form3_dd_with_running_error_qdq = node_ddDiffDd; // error -> 3*γ²
const get_implicit_form3_dd_with_running_error_qaq = node_ddAddDd; // error -> 3*γ²
/**
 * Returns a double-double precision implicit form of the given cubic
 * bezier curve curve and a coefficientwise error bound.
 *
 * Returned coefficients are subscripted to match their monomial's variables,
 * e.g. `vₓᵧ` is the coefficient of the monomial `vₓᵧxy`
 *
 * * the implicit form is given by: `vₓₓₓx³ + vₓₓᵧx²y + vₓᵧᵧxy² + vᵧᵧᵧy³ + vₓₓx² +vₓᵧxy + vᵧᵧy² + vₓx + vᵧy + v = 0`
 * * intermediate calculations are done in double-double precision and this is
 * reflected in the error bound
 * * the error bound returned first needs to be scaled by `γγ3 === (3*u*u) / (1 - 3*u*u) === 3.697785493223493e-32`,
 * where `u === Number.EPSILON / 2` before use
 * * adapted from [Indrek Mandre](http://www.mare.ee/indrek/misc/2d.pdf)
 *
 * @param ps a cubic bezier curve given as an array of its control points,
 * e.g. `[[1,2],[3,4],[5,7],[0,0]]`
 *
 * @doc mdx
 */
function getImplicitForm3DdWithRunningError(ps) {
    // Takes about 15 micro-seconds on a 3rd gen i7 and Chrome 79.
    //--------------------------------------------------------------------------
    // `var` -> a variable
    // `$var` -> the double precision approximation to `var`
    // `_var` -> the absolute value of $var (a prefix underscore on a variable means absolute value)
    // `var_` -> the error in var (a postfix underscore means error bound but should still be multiplied by 3*γ²)
    // `_var_` -> means both absolute value and absolute error bound
    // recall: `a*b`, where both `a` and `b` have errors |a| and |b| we get for the
    //   * error bound of (a*b) === a_|b| + |a|b_ + |a*b|   (when either of a and b is double)
    //   * error bound of (a*b) === a_|b| + |a|b_ + 2|a*b|  (when both a and b is double-double)
    //   * error bound of (a+b) === a_ + b_ + |a+b|         (when a and/or b is double or double-double)
    // * the returned errors need to be multiplied by 3γ² to get the true error
    // * can use either `$var` or `var[var.length-1]` (the approx value) in error calculations
    //   due to multiplication by 3*γ² and not 3*u²
    //--------------------------------------------------------------------------
    // examples:
    // ----------------
    // let qmd === ddMultDouble2, etc.
    //
    // ---------------
    // 1. double-double X by double
    // ---------------
    // qmd(a,b);  // both `a` and `b` is error-free
    // use: error bound of (a*b) === a_|b| + |a|b_ + |a*b| (by definition)
    //                           === 0|b| + |a|0 + |a*b|
    //                           === |a*b|
    //
    // ---------------
    // 2a. double-double +/- double-double
    // ---------------
    // qdq(a,b);  // error in a === |a|, thus call the error _a_, same with b
    // use: error bound of (a+b) === a_ + b_ + |a+b| (by definition)
    //                           === _a_ + _b_ + |a+b|
    //
    // ---------------
    // 2b. double-double +/- double-double
    // ---------------
    // qaq(a,b);  // error in a === 2|a|, thus the error is 2*_a, same with b
    // use: error bound of (a+b) === a_ + b_ + |a+b| (by definition)
    //                           === 2*_a + 2*_b + |a+b|
    //                           === 2*(_a + _b) + |a+b| OR
    //                           === a_ + b_ + |a+b|
    //
    // ---------------
    // 3a. double-double X double-double
    // ---------------
    // qmq(a,b);  // both `a` and `b` error-free
    // use: error bound of (a*b) === a_|b| + |a|b_ + |a*b| (by definition)
    //                           === 0|b| + |a|0 + 2|a*b|
    //                           === 2|a*b| 
    //
    // ---------------
    // 3b. double-double X double-double
    // ---------------
    // qmq(a,b);  // both `a` and `b` not error-free
    // use: error bound of (a*b) === a_|b| + |a|b_ + 2|a*b| (by definition)
    //
    // ---------------
    // 3b. double-double X double-double
    // ---------------
    // qmq(a,b);  // both `a` not error-free and `b` error-free
    // use: error bound of (a*b) === a_|b| + |a|b_ + 2|a*b| (by definition)
    //                           === a_|b| + 2|a*b| 
    //
    // ---------------
    // 4a. double-double +/- double
    // ---------------
    // qad(a,b);  // both `a` and `b` error-free
    // use: error bound of (a+b) === a_ + b_ + |a+b| (by definition)
    //                           === 0 + 0 + |a+b|
    //                           === |a+b| 
    //--------------------------------------------------------------------------
    const { coeffs: [[a3, a2, a1, [, a0]], [b3, b2, b1, [, b0]]], errorBound: [[a3_, a2_, a1_], [b3_, b2_, b1_]] // a0, b0 - error free
     } = toPowerBasis3DdWithRunningError(ps);
    // The implicit form is given by:
    // vₓₓₓx³ + vₓₓᵧx²y + vₓᵧᵧxy² + vᵧᵧᵧy³ + vₓₓx² +vₓᵧxy + vᵧᵧy² + vₓx + vᵧy + v = 0
    const $a1 = a1[1];
    const $a2 = a2[1];
    const $a3 = a3[1];
    const $b1 = b1[1];
    const $b2 = b2[1];
    const $b3 = b3[1];
    const _a0 = get_implicit_form3_dd_with_running_error_abs(a0);
    const _a1 = get_implicit_form3_dd_with_running_error_abs($a1);
    const _a2 = get_implicit_form3_dd_with_running_error_abs($a2);
    const _a3 = get_implicit_form3_dd_with_running_error_abs($a3);
    const _b0 = get_implicit_form3_dd_with_running_error_abs(b0);
    const _b1 = get_implicit_form3_dd_with_running_error_abs($b1);
    const _b2 = get_implicit_form3_dd_with_running_error_abs($b2);
    const _b3 = get_implicit_form3_dd_with_running_error_abs($b3);
    const a3b1 = get_implicit_form3_dd_with_running_error_qmq(a3, b1);
    const $a3b1 = $a3 * $b1;
    const a3b1_ = a3_ * _b1 + _a3 * b1_ + 2 * get_implicit_form3_dd_with_running_error_abs($a3b1);
    const a1b3 = get_implicit_form3_dd_with_running_error_qmq(a1, b3);
    const $a1b3 = $a1 * $b3;
    const a1b3_ = a1_ * _b3 + _a1 * b3_ + 2 * get_implicit_form3_dd_with_running_error_abs($a1b3);
    const a3b2 = get_implicit_form3_dd_with_running_error_qmq(a3, b2);
    const $a3b2 = $a3 * $b2;
    const a3b2_ = a3_ * _b2 + _a3 * b2_ + 2 * get_implicit_form3_dd_with_running_error_abs($a3b2);
    const a2b2 = get_implicit_form3_dd_with_running_error_qmq(a2, b2);
    const $a2b2 = $a2 * $b2;
    const a2b2_ = a2_ * _b2 + _a2 * b2_ + 2 * get_implicit_form3_dd_with_running_error_abs($a2b2);
    const a2b3 = get_implicit_form3_dd_with_running_error_qmq(a2, b3);
    const $a2b3 = $a2 * $b3;
    const a2b3_ = a2_ * _b3 + _a2 * b3_ + 2 * get_implicit_form3_dd_with_running_error_abs($a2b3);
    const a3a3 = get_implicit_form3_dd_with_running_error_qmq(a3, a3);
    const $a3a3 = $a3 * $a3;
    const _a3a3 = get_implicit_form3_dd_with_running_error_abs($a3a3);
    const a3a3_ = a3_ * _a3 + _a3 * a3_ + 2 * get_implicit_form3_dd_with_running_error_abs($a3a3);
    const b2b2 = get_implicit_form3_dd_with_running_error_qmq(b2, b2);
    const $b2b2 = $b2 * $b2;
    const b2b2_ = b2_ * _b2 + _b2 * b2_ + 2 * get_implicit_form3_dd_with_running_error_abs($b2b2);
    const b3b3 = get_implicit_form3_dd_with_running_error_qmq(b3, b3);
    const $b3b3 = $b3 * $b3;
    const _b3b3 = get_implicit_form3_dd_with_running_error_abs($b3b3);
    const b3b3_ = b3_ * _b3 + _b3 * b3_ + 2 * get_implicit_form3_dd_with_running_error_abs($b3b3);
    const a1a3 = get_implicit_form3_dd_with_running_error_qmq(a1, a3);
    const $a1a3 = $a1 * $a3;
    const a1a3_ = a1_ * _a3 + _a1 * a3_ + 2 * get_implicit_form3_dd_with_running_error_abs($a1a3);
    const a2a2 = get_implicit_form3_dd_with_running_error_qmq(a2, a2);
    const $a2a2 = $a2 * $a2;
    const a2a2_ = a2_ * _a2 + _a2 * a2_ + 2 * get_implicit_form3_dd_with_running_error_abs($a2a2);
    const b1b3 = get_implicit_form3_dd_with_running_error_qmq(b1, b3);
    const $b1b3 = $b1 * $b3;
    const b1b3_ = b1_ * _b3 + _b1 * b3_ + 2 * get_implicit_form3_dd_with_running_error_abs($b1b3);
    const b2b3 = get_implicit_form3_dd_with_running_error_qmq(b2, b3);
    const _b2b3 = get_implicit_form3_dd_with_running_error_abs($b2 * $b3); // or equivalently `_b2b3 = _b2*_b3`;
    const b2b3_ = b2_ * _b3 + _b2 * b3_ + 2 * _b2b3;
    const a2a3 = get_implicit_form3_dd_with_running_error_qmq(a2, a3);
    const _a2a3 = get_implicit_form3_dd_with_running_error_abs($a2 * $a3);
    const a2a3_ = a2_ * _a3 + _a2 * a3_ + 2 * _a2a3;
    const a3b3 = get_implicit_form3_dd_with_running_error_qmq(a3, b3);
    const _a3b3 = get_implicit_form3_dd_with_running_error_abs($a3 * $b3);
    const a3b3_ = a3_ * _b3 + _a3 * b3_ + 2 * _a3b3;
    const a3b0 = get_implicit_form3_dd_with_running_error_qmd(b0, a3);
    const $a3b0 = $a3 * b0;
    const a3b0_ = a3_ * _b0 + get_implicit_form3_dd_with_running_error_abs($a3b0);
    const a0b3 = get_implicit_form3_dd_with_running_error_qmd(a0, b3);
    const $a0b3 = a0 * $b3;
    const a0b3_ = _a0 * b3_ + get_implicit_form3_dd_with_running_error_abs($a0b3);
    const a2b0 = get_implicit_form3_dd_with_running_error_qmd(b0, a2);
    const $a2b0 = $a2 * b0;
    const a2b0_ = a2_ * _b0 + get_implicit_form3_dd_with_running_error_abs($a2b0);
    const a0b2 = get_implicit_form3_dd_with_running_error_qmd(a0, b2);
    const $a0b2 = a0 * $b2;
    const a0b2_ = _a0 * b2_ + get_implicit_form3_dd_with_running_error_abs($a0b2);
    const a2b1 = get_implicit_form3_dd_with_running_error_qmq(a2, b1);
    const $a2b1 = $a2 * $b1;
    const a2b1_ = a2_ * _b1 + _a2 * b1_ + 2 * get_implicit_form3_dd_with_running_error_abs($a2b1);
    const a1b2 = get_implicit_form3_dd_with_running_error_qmq(a1, b2);
    const $a1b2 = $a1 * $b2;
    const a1b2_ = a1_ * _b2 + _a1 * b2_ + 2 * get_implicit_form3_dd_with_running_error_abs($a1b2);
    const a1b0 = get_implicit_form3_dd_with_running_error_qmd(b0, a1);
    const $a1b0 = $a1 * b0;
    const a1b0_ = a1_ * _b0 + get_implicit_form3_dd_with_running_error_abs($a1b0);
    const a0b1 = get_implicit_form3_dd_with_running_error_qmd(a0, b1);
    const $a0b1 = a0 * $b1;
    const a0b1_ = _a0 * b1_ + get_implicit_form3_dd_with_running_error_abs($a0b1);
    const q1 = get_implicit_form3_dd_with_running_error_qdq(a3b0, a0b3);
    const q1_ = a3b0_ + a0b3_ + get_implicit_form3_dd_with_running_error_abs($a3b0 - $a0b3);
    const q2 = get_implicit_form3_dd_with_running_error_qdq(a3b1, a1b3);
    const q2_ = a3b1_ + a1b3_ + get_implicit_form3_dd_with_running_error_abs($a3b1 - $a1b3);
    const q3 = get_implicit_form3_dd_with_running_error_qdq(a3b2, a2b3);
    const q3_ = a3b2_ + a2b3_ + get_implicit_form3_dd_with_running_error_abs($a3b2 - $a2b3);
    const q4 = get_implicit_form3_dd_with_running_error_qdq(a2b0, a0b2);
    const q4_ = a2b0_ + a0b2_ + get_implicit_form3_dd_with_running_error_abs($a2b0 - $a0b2);
    const q5 = get_implicit_form3_dd_with_running_error_qdq(a2b1, a1b2);
    const q5_ = a2b1_ + a1b2_ + get_implicit_form3_dd_with_running_error_abs($a2b1 - $a1b2);
    const q6 = get_implicit_form3_dd_with_running_error_qdq(a1b0, a0b1);
    const q6_ = a1b0_ + a0b1_ + get_implicit_form3_dd_with_running_error_abs($a1b0 - $a0b1);
    const _t1 = get_implicit_form3_dd_with_running_error_abs($b1b3 - $b2b2);
    const t1 = get_implicit_form3_dd_with_running_error_qdq(b1b3, b2b2);
    const t1_ = b1b3_ + b2b2_ + _t1;
    const _t2 = get_implicit_form3_dd_with_running_error_abs($a1a3 - $a2a2);
    const t2 = get_implicit_form3_dd_with_running_error_qdq(a1a3, a2a2);
    const t2_ = a1a3_ + a2a2_ + get_implicit_form3_dd_with_running_error_abs($a1a3 - $a2a2);
    const _p1 = get_implicit_form3_dd_with_running_error_abs($a2b3 + $a3b2);
    const p1 = get_implicit_form3_dd_with_running_error_qaq(a2b3, a3b2);
    const p1_ = a2b3_ + a3b2_ + get_implicit_form3_dd_with_running_error_abs($a2b3 + $a3b2);
    const $p2 = $a1b3 + $a3b1;
    const _p2 = get_implicit_form3_dd_with_running_error_abs($p2);
    const p2 = get_implicit_form3_dd_with_running_error_qaq(a1b3, a3b1);
    const p2_ = a1b3_ + a3b1_ + _p2;
    const tq2 = get_implicit_form3_dd_with_running_error_qm2(q2);
    const tq2_ = 2 * q2_;
    const $q1 = $a3b0 - $a0b3;
    const $q2 = $a3b1 - $a1b3;
    const $q3 = $a3b2 - $a2b3;
    const $q4 = $a2b0 - $a0b2;
    const $q5 = $a2b1 - $a1b2;
    const $q6 = $a1b0 - $a0b1;
    const _q1 = get_implicit_form3_dd_with_running_error_abs($q1);
    const _q2 = get_implicit_form3_dd_with_running_error_abs($q2);
    const _q3 = get_implicit_form3_dd_with_running_error_abs($q3);
    const _q4 = get_implicit_form3_dd_with_running_error_abs($q4);
    const _q5 = get_implicit_form3_dd_with_running_error_abs($q5);
    const _q6 = get_implicit_form3_dd_with_running_error_abs($q6);
    const _tq2 = 2 * _q2;
    const q1q1 = get_implicit_form3_dd_with_running_error_qmq(q1, q1);
    const q1q2 = get_implicit_form3_dd_with_running_error_qmq(q1, q2);
    const q1q3 = get_implicit_form3_dd_with_running_error_qmq(q1, q3);
    const q1q5 = get_implicit_form3_dd_with_running_error_qmq(q1, q5);
    const q2q2 = get_implicit_form3_dd_with_running_error_qmq(q2, q2);
    const tq2q4 = get_implicit_form3_dd_with_running_error_qmq(tq2, q4);
    const q3q4 = get_implicit_form3_dd_with_running_error_qmq(q3, q4);
    const q3q5 = get_implicit_form3_dd_with_running_error_qmq(q3, q5);
    const q3q6 = get_implicit_form3_dd_with_running_error_qmq(q3, q6);
    const q1q1_ = q1_ * _q1 + _q1 * q1_ + 2 * get_implicit_form3_dd_with_running_error_abs(q1q1[1]);
    const q1q2_ = q1_ * _q2 + _q1 * q2_ + 2 * get_implicit_form3_dd_with_running_error_abs(q1q2[1]);
    const q1q3_ = q1_ * _q3 + _q1 * q3_ + 2 * get_implicit_form3_dd_with_running_error_abs(q1q3[1]);
    const q1q5_ = q1_ * _q5 + _q1 * q5_ + 2 * get_implicit_form3_dd_with_running_error_abs(q1q5[1]);
    const q2q2_ = q2_ * _q2 + _q2 * q2_ + 2 * get_implicit_form3_dd_with_running_error_abs(q2q2[1]);
    const tq2q4_ = tq2_ * _q4 + _tq2 * q4_ + 2 * get_implicit_form3_dd_with_running_error_abs(tq2q4[1]);
    const q3q4_ = q3_ * _q4 + _q3 * q4_ + 2 * get_implicit_form3_dd_with_running_error_abs(q3q4[1]);
    const q3q5_ = q3_ * _q5 + _q3 * q5_ + 2 * get_implicit_form3_dd_with_running_error_abs(q3q5[1]);
    const q3q6_ = q3_ * _q6 + _q3 * q6_ + 2 * get_implicit_form3_dd_with_running_error_abs(q3q4[1]);
    const vₓₓₓ = get_implicit_form3_dd_with_running_error_qmq(get_implicit_form3_dd_with_running_error_qno(b3), b3b3);
    const vₓₓₓ_ = b3_ * _b3b3 + _b3 * b3b3_ + 2 * get_implicit_form3_dd_with_running_error_abs(vₓₓₓ[1]);
    const _z1 = 3 * _a3;
    const z1 = get_implicit_form3_dd_with_running_error_qmd(3, a3);
    const z1_ = 3 * a3_ + _z1;
    const vₓₓᵧ = get_implicit_form3_dd_with_running_error_qmq(z1, b3b3);
    const vₓₓᵧ_ = z1_ * _b3b3 + _z1 * b3b3_ + 2 * get_implicit_form3_dd_with_running_error_abs(vₓₓᵧ[1]);
    const _z2 = 3 * _b3;
    const z2 = get_implicit_form3_dd_with_running_error_qmd(-3, b3);
    const z2_ = 3 * b3_ + _z2;
    const vₓᵧᵧ = get_implicit_form3_dd_with_running_error_qmq(z2, a3a3);
    const vₓᵧᵧ_ = z2_ * _a3a3 + _z2 * a3a3_ + 2 * get_implicit_form3_dd_with_running_error_abs(vₓᵧᵧ[1]);
    const vᵧᵧᵧ = get_implicit_form3_dd_with_running_error_qmq(a3, a3a3);
    const vᵧᵧᵧ_ = a3_ * _a3a3 + _a3 * a3a3_ + 2 * get_implicit_form3_dd_with_running_error_abs(vᵧᵧᵧ[1]);
    const $z3 = -3 * $q1;
    const _z3 = 3 * _q1;
    const z3 = get_implicit_form3_dd_with_running_error_qmd(-3, q1);
    const z3_ = 3 * q1_ + _z3;
    const u1 = get_implicit_form3_dd_with_running_error_qdq(z3, q5);
    const _u1 = get_implicit_form3_dd_with_running_error_abs($z3 - $q5);
    const u1_ = z3_ + q5_ + _u1;
    //const t1_ = _b1b3 + _b2b2 + _t1;
    //const _t2 = abs(t2);
    //const t2_ = _a1a3 + _a2a2 + abs(t2);
    const w1 = get_implicit_form3_dd_with_running_error_qmq(u1, b3b3);
    const w1_ = u1_ * _b3b3 + _u1 * b3b3_ + 2 * get_implicit_form3_dd_with_running_error_abs(w1[1]);
    const w2 = get_implicit_form3_dd_with_running_error_qmq(q3, t1);
    const w2_ = q3_ * _t1 + _q3 * t1_ + 2 * get_implicit_form3_dd_with_running_error_abs(w2[1]);
    const w3 = get_implicit_form3_dd_with_running_error_qaq(w1, w2);
    const w3_ = w1_ + w2_ + get_implicit_form3_dd_with_running_error_abs(w3[1]);
    const w4 = get_implicit_form3_dd_with_running_error_qmq(tq2, b2b3);
    const w4_ = tq2_ * _b2b3 + _tq2 * b2b3_ + 2 * get_implicit_form3_dd_with_running_error_abs(w4[1]);
    //const vₓₓ = (u1*b3b3 + q3*(b1b3 - b2b2)) + tq2*b2b3;
    const vₓₓ = get_implicit_form3_dd_with_running_error_qaq(w3, w4);
    const vₓₓ_ = w3_ + w4_ + get_implicit_form3_dd_with_running_error_abs(vₓₓ[1]);
    const w5 = get_implicit_form3_dd_with_running_error_qmq(u1, a3a3);
    const w5_ = u1_ * _a3a3 + _u1 * a3a3_ + 2 * get_implicit_form3_dd_with_running_error_abs(w5[1]);
    const w6 = get_implicit_form3_dd_with_running_error_qmq(q3, t2);
    const w6_ = q3_ * _t2 + _q3 * t2_ + 2 * get_implicit_form3_dd_with_running_error_abs(w6[1]);
    const w7 = get_implicit_form3_dd_with_running_error_qaq(w5, w6);
    const w7_ = w5_ + w6_ + get_implicit_form3_dd_with_running_error_abs(w7[1]);
    const w8 = get_implicit_form3_dd_with_running_error_qmq(tq2, a2a3);
    const w8_ = tq2_ * _a2a3 + _tq2 * a2a3_ + 2 * get_implicit_form3_dd_with_running_error_abs(w8[1]);
    //const vᵧᵧ = (u1*a3a3 + q3*t2) + tq2*a2a3;
    const vᵧᵧ = get_implicit_form3_dd_with_running_error_qaq(w7, w8);
    const vᵧᵧ_ = w7_ + w8_ + get_implicit_form3_dd_with_running_error_abs(vᵧᵧ[1]);
    const _wa = get_implicit_form3_dd_with_running_error_abs($a2b2 - $p2 / 2);
    const wa = get_implicit_form3_dd_with_running_error_qdq(a2b2, qd2(p2));
    const wa_ = a2b2_ + p2_ / 2 + get_implicit_form3_dd_with_running_error_abs(wa[1]);
    const wb = get_implicit_form3_dd_with_running_error_qmq(u1, a3b3);
    const wb_ = u1_ * _a3b3 + _u1 * a3b3_ + 2 * get_implicit_form3_dd_with_running_error_abs(wb[1]);
    const wc = get_implicit_form3_dd_with_running_error_qmq(q2, p1);
    const wc_ = q2_ * _p1 + _q2 * p1_ + 2 * get_implicit_form3_dd_with_running_error_abs(wc[1]);
    const wd = get_implicit_form3_dd_with_running_error_qaq(wb, wc);
    const wd_ = wb_ + wc_ + get_implicit_form3_dd_with_running_error_abs(wd[1]);
    const wq = get_implicit_form3_dd_with_running_error_qmq(q3, wa);
    const wq_ = q3_ * _wa + _q3 * wa_ + 2 * get_implicit_form3_dd_with_running_error_abs(wq[1]);
    //-------------------------------------------------------
    // const vₓᵧ = 2*(q3*(a2b2 - p2/2) - (u1*a3b3 + q2*p1));
    //-------------------------------------------------------
    const vₓᵧ = get_implicit_form3_dd_with_running_error_qm2(get_implicit_form3_dd_with_running_error_qdq(wq, wd));
    const vₓᵧ_ = 2 * (wq_ + wd_) + get_implicit_form3_dd_with_running_error_abs(vₓᵧ[1]);
    const wr = get_implicit_form3_dd_with_running_error_qmd(-3, q1q1);
    const wr_ = 3 * q1q1_ + get_implicit_form3_dd_with_running_error_abs(wr[1]);
    const we = get_implicit_form3_dd_with_running_error_qdq(wr, get_implicit_form3_dd_with_running_error_qm2(q1q5));
    const we_ = wr_ + 2 * q1q5_ + get_implicit_form3_dd_with_running_error_abs(we[1]);
    const wf = get_implicit_form3_dd_with_running_error_qaq(tq2q4, q3q6);
    const wf_ = tq2q4_ + q3q6_ + get_implicit_form3_dd_with_running_error_abs(wf[1]);
    //------------------------------------------------
    // const s1 = (-3*q1q1 - 2*q1q5) + (tq2q4 + q3q6);
    //------------------------------------------------
    const s1 = get_implicit_form3_dd_with_running_error_qaq(we, wf);
    const _s1 = get_implicit_form3_dd_with_running_error_abs(s1[1]);
    const s1_ = we_ + wf_ + _s1;
    //-----------------------------
    // const s2 = 2*(q1q2 - q3q4);
    //-----------------------------
    const s2 = get_implicit_form3_dd_with_running_error_qm2(get_implicit_form3_dd_with_running_error_qdq(q1q2, q3q4));
    const _s2 = get_implicit_form3_dd_with_running_error_abs(s2[1]);
    const s2_ = 2 * (q1q2_ + q3q4_) + _s2;
    const wl = get_implicit_form3_dd_with_running_error_qdq(q1q3, q2q2);
    const wl_ = q1q3_ + q2q2_ + get_implicit_form3_dd_with_running_error_abs(wl[1]);
    //-------------------------------
    // const s3 = q1q3 - q2q2 + q3q5;
    //-------------------------------
    const s3 = get_implicit_form3_dd_with_running_error_qaq(wl, q3q5);
    const _s3 = get_implicit_form3_dd_with_running_error_abs(s3[1]);
    const s3_ = wl_ + q3q5_ + _s3;
    const wm = get_implicit_form3_dd_with_running_error_qmq(b3, s1);
    const wm_ = b3_ * _s1 + _b3 * s1_ + 2 * get_implicit_form3_dd_with_running_error_abs(wm[1]);
    const ws = get_implicit_form3_dd_with_running_error_qmq(b2, s2);
    const ws_ = b2_ * _s2 + _b2 * s2_ + 2 * get_implicit_form3_dd_with_running_error_abs(ws[1]);
    const wt = get_implicit_form3_dd_with_running_error_qmq(b1, s3);
    const wt_ = b1_ * _s3 + _b1 * s3_ + 2 * get_implicit_form3_dd_with_running_error_abs(wt[1]);
    const wn = get_implicit_form3_dd_with_running_error_qaq(ws, wt);
    const wn_ = ws_ + wt_ + get_implicit_form3_dd_with_running_error_abs(wn[1]);
    //-------------------------------
    // const vₓ = b3*s1 + (b2*s2 + b1*s3);
    //-------------------------------
    const vₓ = get_implicit_form3_dd_with_running_error_qaq(wm, wn);
    const vₓ_ = wm_ + wn_ + get_implicit_form3_dd_with_running_error_abs(vₓ[1]);
    const wo = get_implicit_form3_dd_with_running_error_qmq(a3, s1);
    const wo_ = a3_ * _s1 + _a3 * s1_ + 2 * get_implicit_form3_dd_with_running_error_abs(wo[1]);
    const wu = get_implicit_form3_dd_with_running_error_qmq(a2, s2);
    const wu_ = a2_ * _s2 + _a2 * s2_ + 2 * get_implicit_form3_dd_with_running_error_abs(wu[1]);
    const wv = get_implicit_form3_dd_with_running_error_qmq(a1, s3);
    const wv_ = a1_ * _s3 + _a1 * s3_ + 2 * get_implicit_form3_dd_with_running_error_abs(wv[1]);
    const wp = get_implicit_form3_dd_with_running_error_qaq(wu, wv);
    const wp_ = wu_ + wv_ + get_implicit_form3_dd_with_running_error_abs(wp[1]);
    //-------------------------------------
    // const vᵧ = -a3*s1 - (a2*s2 + a1*s3);
    //-------------------------------------
    const vᵧ = get_implicit_form3_dd_with_running_error_qno(get_implicit_form3_dd_with_running_error_qaq(wo, wp));
    const vᵧ_ = wo_ + wp_ + get_implicit_form3_dd_with_running_error_abs(vᵧ[1]);
    // the commented part above is re
    const v3 = get_implicit_form3_dd_with_running_error_qdq(tq2q4, q1q1);
    const v1 = get_implicit_form3_dd_with_running_error_qdq(v3, q1q5);
    const _v1 = get_implicit_form3_dd_with_running_error_abs(v1[1]);
    const v4 = get_implicit_form3_dd_with_running_error_qmq(s3, q6);
    const v5 = get_implicit_form3_dd_with_running_error_qmq(q3q4, q4);
    const v2 = get_implicit_form3_dd_with_running_error_qdq(v4, v5);
    const v2_ = s3_ * get_implicit_form3_dd_with_running_error_abs(q6[1]) + 2 * get_implicit_form3_dd_with_running_error_abs(v4[1]) + q3q4_ * get_implicit_form3_dd_with_running_error_abs(q4[1]) + 2 * get_implicit_form3_dd_with_running_error_abs(v5[1]) + get_implicit_form3_dd_with_running_error_abs(v2[1]);
    const v6 = get_implicit_form3_dd_with_running_error_qmq(q1, v1);
    const v6_ = q1_ * _v1 + _q1 * tq2q4_ + q1q1_ + get_implicit_form3_dd_with_running_error_abs(v3[1]) + q1q5_ + _v1 + 2 * get_implicit_form3_dd_with_running_error_abs(v6[1]);
    // -------------------------------------------------------------------------
    //-------------------------------------------------------
    // const v = q1*(tq2q4 - q1q1 - q1q5) + s3*q6 - q3q4*q4;
    //-------------------------------------------------------
    const v = get_implicit_form3_dd_with_running_error_qaq(v6, v2);
    const v_ = v6_ + v2_ + get_implicit_form3_dd_with_running_error_abs(v[1]);
    return {
        coeffs: { vₓₓₓ, vₓₓᵧ, vₓᵧᵧ, vᵧᵧᵧ, vₓₓ, vₓᵧ, vᵧᵧ, vₓ, vᵧ, v },
        errorBound: { vₓₓₓ_, vₓₓᵧ_, vₓᵧᵧ_, vᵧᵧᵧ_, vₓₓ_, vₓᵧ_, vᵧᵧ_, vₓ_, vᵧ_, v_ }
    };
}

//# sourceMappingURL=get-implicit-form3-dd-with-running-error.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/bezier-bezier-intersection/get-coefficients/double-double/get-coeffs-bez3-bez1-dd.js




// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗
const get_coeffs_bez3_bez1_dd_tp = node_twoProduct;
const get_coeffs_bez3_bez1_dd_qm2 = node_ddMultBy2;
const get_coeffs_bez3_bez1_dd_qmd = node_ddMultDouble2;
const get_coeffs_bez3_bez1_dd_qmq = node_ddMultDd;
const get_coeffs_bez3_bez1_dd_qaq = node_ddAddDd;
const get_coeffs_bez3_bez1_dd_abs = Math.abs;
const get_coeffs_bez3_bez1_dd_3 = error_analysis_error_analysis_(3);
/**
 * Returns a polynomial in 1 variable (including coefficientwise error bound)
 * whose roots are the parameter values of the intersection points of an order
 * 3 and 1 bezier curve (i.e. a cubic bezier curve and a line).
 *
 * The returned polynomial degree will be 3
 * (see [Bézout's theorem](https://en.wikipedia.org/wiki/B%C3%A9zout%27s_theorem))
 *
 * The returned polynomial coefficients are given densely as an array of
 * double-double precision floating point numbers from highest to lowest power,
 * e.g. `[[0,5],[0,-3],[0,0]]` represents the polynomial `5x^2 - 3x`.
 *
 * * intermediate calculations are done in double-double precision
 * * adapted from [Indrek Mandre](http://www.mare.ee/indrek/misc/2d.pdf)
 *
 * @param ps1
 * @param ps2
 *
 * @internal
 */
function getCoeffsBez3Bez1Dd(ps1, ps2) {
    const { coeffs: { vₓₓₓ, vₓₓᵧ, vₓᵧᵧ, vᵧᵧᵧ, vₓₓ, vₓᵧ, vᵧᵧ, vₓ, vᵧ, v }, errorBound: { vₓₓₓ_, vₓₓᵧ_, vₓᵧᵧ_, vᵧᵧᵧ_, vₓₓ_, vₓᵧ_, vᵧᵧ_, vₓ_, vᵧ_, v_ } } = getImplicitForm3DdWithRunningError(ps1);
    const [[c1, [, c0]], [d1, [, d0]]] = toPowerBasis1DdWithRunningError(ps2);
    const $vₓₓₓ = vₓₓₓ[1];
    const $vₓₓᵧ = vₓₓᵧ[1];
    const $vₓᵧᵧ = vₓᵧᵧ[1];
    const $vᵧᵧᵧ = vᵧᵧᵧ[1];
    const $vₓₓ = vₓₓ[1];
    const $vₓᵧ = vₓᵧ[1];
    const $vᵧᵧ = vᵧᵧ[1];
    const $vₓ = vₓ[1];
    const $vᵧ = vᵧ[1];
    const $v = v[1];
    const $c1 = c1[1];
    const $d1 = d1[1];
    const _c0 = get_coeffs_bez3_bez1_dd_abs(c0);
    const _c1 = get_coeffs_bez3_bez1_dd_abs($c1);
    const _d0 = get_coeffs_bez3_bez1_dd_abs(d0);
    const _d1 = get_coeffs_bez3_bez1_dd_abs($d1);
    const $c0c0 = c0 * c0;
    const $c0c1 = c0 * $c1;
    const $c0d0 = c0 * d0;
    const $c0d1 = c0 * $d1;
    const $c1c1 = $c1 * $c1;
    const $c1d0 = $c1 * d0;
    const $c1d1 = $c1 * $d1;
    const $d0d0 = d0 * d0;
    const $d0d1 = d0 * $d1;
    const $d1d1 = $d1 * $d1;
    const c0c0 = get_coeffs_bez3_bez1_dd_tp(c0, c0); // error free
    const c0c1 = get_coeffs_bez3_bez1_dd_qmd(c0, c1);
    const c0c1_ = get_coeffs_bez3_bez1_dd_abs($c0c1);
    const c0d0 = get_coeffs_bez3_bez1_dd_tp(c0, d0); // error free
    const c0d1 = get_coeffs_bez3_bez1_dd_qmd(c0, d1);
    const c0d1_ = get_coeffs_bez3_bez1_dd_abs($c0d1);
    const c1c1 = get_coeffs_bez3_bez1_dd_qmq(c1, c1);
    const c1c1_ = 2 * get_coeffs_bez3_bez1_dd_abs($c1c1);
    const c1d0 = get_coeffs_bez3_bez1_dd_qmd(d0, c1);
    const c1d0_ = get_coeffs_bez3_bez1_dd_abs($c1d0);
    const c1d1 = get_coeffs_bez3_bez1_dd_qmq(c1, d1);
    const c1d1_ = 2 * get_coeffs_bez3_bez1_dd_abs($c1d1);
    const d0d0 = get_coeffs_bez3_bez1_dd_tp(d0, d0); // error free
    const d0d1 = get_coeffs_bez3_bez1_dd_qmd(d0, d1);
    const d0d1_ = get_coeffs_bez3_bez1_dd_abs($d0d1);
    const d1d1 = get_coeffs_bez3_bez1_dd_qmq(d1, d1);
    const d1d1_ = 2 * get_coeffs_bez3_bez1_dd_abs($d1d1);
    const _c0c0 = get_coeffs_bez3_bez1_dd_abs($c0c0);
    const _c0c1 = get_coeffs_bez3_bez1_dd_abs($c0c1);
    const _c0d0 = get_coeffs_bez3_bez1_dd_abs($c0d0);
    const _c0d1 = get_coeffs_bez3_bez1_dd_abs($c0d1);
    const _c1c1 = get_coeffs_bez3_bez1_dd_abs($c1c1);
    const _c1d0 = get_coeffs_bez3_bez1_dd_abs($c1d0);
    const _c1d1 = get_coeffs_bez3_bez1_dd_abs($c1d1);
    const _d0d0 = get_coeffs_bez3_bez1_dd_abs($d0d0);
    const _d0d1 = get_coeffs_bez3_bez1_dd_abs($d0d1);
    const _d1d1 = get_coeffs_bez3_bez1_dd_abs($d1d1);
    const $z1 = c0 * $vₓₓₓ;
    const z1 = get_coeffs_bez3_bez1_dd_qmd(c0, vₓₓₓ);
    const z1_ = _c0 * vₓₓₓ_ + get_coeffs_bez3_bez1_dd_abs($z1);
    const $za = 3 * c0;
    const za = get_coeffs_bez3_bez1_dd_tp(3, c0);
    const _za = get_coeffs_bez3_bez1_dd_abs($za);
    const $z7 = $za * $vₓₓₓ;
    const z7 = get_coeffs_bez3_bez1_dd_qmq(za, vₓₓₓ);
    const z7_ = _za * vₓₓₓ_ + 2 * get_coeffs_bez3_bez1_dd_abs($z7);
    const $z2 = c0 * $vₓₓᵧ;
    const z2 = get_coeffs_bez3_bez1_dd_qmd(c0, vₓₓᵧ);
    const z2_ = _c0 * vₓₓᵧ_ + get_coeffs_bez3_bez1_dd_abs($z2);
    const $z3 = d0 * $vₓₓᵧ;
    const z3 = get_coeffs_bez3_bez1_dd_qmd(d0, vₓₓᵧ);
    const z3_ = _d0 * vₓₓᵧ_ + get_coeffs_bez3_bez1_dd_abs($z3);
    const $z4 = c0 * $vₓᵧᵧ;
    const z4 = get_coeffs_bez3_bez1_dd_qmd(c0, vₓᵧᵧ);
    const z4_ = _c0 * vₓᵧᵧ_ + get_coeffs_bez3_bez1_dd_abs($z4);
    const $z5 = d0 * $vₓᵧᵧ;
    const z5 = get_coeffs_bez3_bez1_dd_qmd(d0, vₓᵧᵧ);
    const z5_ = _d0 * vₓᵧᵧ_ + get_coeffs_bez3_bez1_dd_abs($z5);
    const $z6 = d0 * $vᵧᵧᵧ;
    const z6 = get_coeffs_bez3_bez1_dd_qmd(d0, vᵧᵧᵧ);
    const z6_ = _d0 * vᵧᵧᵧ_ + get_coeffs_bez3_bez1_dd_abs($z6);
    const $zb = 3 * d0;
    const zb = get_coeffs_bez3_bez1_dd_tp(3, d0);
    const _zb = get_coeffs_bez3_bez1_dd_abs($zb);
    const $z8 = $zb * $vᵧᵧᵧ;
    const z8 = get_coeffs_bez3_bez1_dd_qmq(zb, vᵧᵧᵧ);
    const z8_ = _zb * vᵧᵧᵧ_ + 2 * get_coeffs_bez3_bez1_dd_abs($z8);
    // a1**3*v_xxx + a1**2*b1*v_xxy + a1*b1**2*v_xyy + b1**3*v_yyy
    //const v3 =
    //    c1c1*(c1*vₓₓₓ + d1*vₓₓᵧ) +
    //    d1d1*(c1*vₓᵧᵧ + d1*vᵧᵧᵧ);
    const $u1 = $c1 * $vₓₓₓ;
    const u1 = get_coeffs_bez3_bez1_dd_qmq(c1, vₓₓₓ);
    const u1_ = _c1 * vₓₓₓ_ + 2 * get_coeffs_bez3_bez1_dd_abs($u1);
    const $u2 = $c1 * $vₓᵧᵧ;
    const u2 = get_coeffs_bez3_bez1_dd_qmq(c1, vₓᵧᵧ);
    const u2_ = _c1 * vₓᵧᵧ_ + 2 * get_coeffs_bez3_bez1_dd_abs($u2);
    const $u3 = $d1 * $vₓₓᵧ;
    const u3 = get_coeffs_bez3_bez1_dd_qmq(d1, vₓₓᵧ);
    const u3_ = _d1 * vₓₓᵧ_ + 2 * get_coeffs_bez3_bez1_dd_abs($u3);
    const $u4 = $d1 * $vᵧᵧᵧ;
    const u4 = get_coeffs_bez3_bez1_dd_qmq(d1, vᵧᵧᵧ);
    const u4_ = _d1 * vᵧᵧᵧ_ + 2 * get_coeffs_bez3_bez1_dd_abs($u4);
    const $u5 = $u1 + $u3;
    const u5 = get_coeffs_bez3_bez1_dd_qaq(u1, u3);
    const _u5 = get_coeffs_bez3_bez1_dd_abs($u5);
    const u5_ = u1_ + u3_ + _u5;
    const $u6 = $u2 + $u4;
    const u6 = get_coeffs_bez3_bez1_dd_qaq(u2, u4);
    const _u6 = get_coeffs_bez3_bez1_dd_abs($u6);
    const u6_ = u2_ + u4_ + _u6;
    const $u7 = $c1c1 * $u5;
    const u7 = get_coeffs_bez3_bez1_dd_qmq(c1c1, u5);
    const u7_ = c1c1_ * _u5 + _c1c1 * u5_ + 2 * get_coeffs_bez3_bez1_dd_abs($u7);
    const $u8 = $d1d1 * $u6;
    const u8 = get_coeffs_bez3_bez1_dd_qmq(d1d1, u6);
    const u8_ = d1d1_ * _u6 + _d1d1 * u6_ + 2 * get_coeffs_bez3_bez1_dd_abs($u8);
    const $v3 = $u7 + $u8;
    const v3 = get_coeffs_bez3_bez1_dd_qaq(u7, u8);
    const v3_ = u7_ + u8_ + get_coeffs_bez3_bez1_dd_abs($v3);
    // 3*a0*a1**2*v_xxx + 2*a0*a1*b1*v_xxy + a0*b1**2*v_xyy + a1**2*b0*v_xxy + a1**2*v_xx + 2*a1*b0*b1*v_xyy + a1*b1*v_xy + 3*b0*b1**2*v_yyy + b1**2*v_yy
    //const v2 =
    //    c1c1*(3*c0*vₓₓₓ +   d0*vₓₓᵧ + vₓₓ) +
    //    c1d1*(2*c0*vₓₓᵧ + 2*d0*vₓᵧᵧ + vₓᵧ) +
    //    d1d1*(  c0*vₓᵧᵧ + 3*d0*vᵧᵧᵧ + vᵧᵧ);
    //const v2 =
    //    c1c1*(3*z1 +   z3 + vₓₓ) +
    //    c1d1*(2*z2 + 2*z5 + vₓᵧ) +
    //    d1d1*(  z4 + 3*z6 + vᵧᵧ);
    const $u9 = $z7 + $z3;
    const u9 = get_coeffs_bez3_bez1_dd_qaq(z7, z3);
    const u9_ = z7_ + z3_ + get_coeffs_bez3_bez1_dd_abs($u9);
    const $ua = 2 * ($z2 + $z5);
    const ua = get_coeffs_bez3_bez1_dd_qm2(get_coeffs_bez3_bez1_dd_qaq(z2, z5));
    const ua_ = 2 * (z2_ + z5_) + get_coeffs_bez3_bez1_dd_abs($ua);
    const $ub = $z4 + $z8;
    const ub = get_coeffs_bez3_bez1_dd_qaq(z4, z8);
    const ub_ = z4_ + z8_ + get_coeffs_bez3_bez1_dd_abs($ub);
    const $uc = $u9 + $vₓₓ;
    const uc = get_coeffs_bez3_bez1_dd_qaq(u9, vₓₓ);
    const _uc = get_coeffs_bez3_bez1_dd_abs($uc);
    const uc_ = u9_ + vₓₓ_ + _uc;
    const $ud = $ua + $vₓᵧ;
    const ud = get_coeffs_bez3_bez1_dd_qaq(ua, vₓᵧ);
    const _ud = get_coeffs_bez3_bez1_dd_abs($ud);
    const ud_ = ua_ + vₓᵧ_ + _ud;
    const $ue = $ub + $vᵧᵧ;
    const ue = get_coeffs_bez3_bez1_dd_qaq(ub, vᵧᵧ);
    const _ue = get_coeffs_bez3_bez1_dd_abs($ue);
    const ue_ = ub_ + vᵧᵧ_ + _ue;
    const $uf = $c1c1 * $uc;
    const uf = get_coeffs_bez3_bez1_dd_qmq(c1c1, uc);
    const uf_ = c1c1_ * _uc + _c1c1 * uc_ + 2 * get_coeffs_bez3_bez1_dd_abs($uf);
    const $ug = $c1d1 * $ud;
    const ug = get_coeffs_bez3_bez1_dd_qmq(c1d1, ud);
    const ug_ = c1d1_ * _ud + _c1d1 * ud_ + 2 * get_coeffs_bez3_bez1_dd_abs($ug);
    const $uh = $d1d1 * $ue;
    const uh = get_coeffs_bez3_bez1_dd_qmq(d1d1, ue);
    const uh_ = d1d1_ * _ue + _d1d1 * ue_ + 2 * get_coeffs_bez3_bez1_dd_abs($uh);
    const $ui = $uf + $ug;
    const ui = get_coeffs_bez3_bez1_dd_qaq(uf, ug);
    const ui_ = uf_ + ug_ + get_coeffs_bez3_bez1_dd_abs($ui);
    const $v2 = $ui + $uh;
    const v2 = get_coeffs_bez3_bez1_dd_qaq(ui, uh);
    const v2_ = ui_ + uh_ + get_coeffs_bez3_bez1_dd_abs($v2);
    // 3*a0**2*a1*v_xxx + a0**2*b1*v_xxy + 2*a0*a1*b0*v_xxy + 2*a0*a1*v_xx + 2*a0*b0*b1*v_xyy + a0*b1*v_xy + a1*b0**2*v_xyy + a1*b0*v_xy + a1*v_x + 3*b0**2*b1*v_yyy + 2*b0*b1*v_yy + b1*v_y
    //const v1 =
    //    c0c1*(3*c0*vₓₓₓ + 2*(d0*vₓₓᵧ + vₓₓ)) +
    //    d0d1*(3*d0*vᵧᵧᵧ + 2*(c0*vₓᵧᵧ + vᵧᵧ)) +
    //    c0d1*(c0*vₓₓᵧ + vₓᵧ) +
    //    c1d0*(d0*vₓᵧᵧ + vₓᵧ) +
    //    vₓ*c1 +
    //    vᵧ*d1;
    const $uj = 2 * ($z3 + $vₓₓ);
    const uj = get_coeffs_bez3_bez1_dd_qm2(get_coeffs_bez3_bez1_dd_qaq(z3, vₓₓ));
    const uj_ = 2 * (z3_ + vₓₓ_) + get_coeffs_bez3_bez1_dd_abs($uj);
    const $uk = 2 * ($z4 + $vᵧᵧ);
    const uk = get_coeffs_bez3_bez1_dd_qm2(get_coeffs_bez3_bez1_dd_qaq(z4, vᵧᵧ));
    const uk_ = 2 * (z4_ + vᵧᵧ_) + get_coeffs_bez3_bez1_dd_abs($uk);
    const $un = $z7 + $uj;
    const un = get_coeffs_bez3_bez1_dd_qaq(z7, uj);
    const _un = get_coeffs_bez3_bez1_dd_abs($un);
    const un_ = z7_ + uj_ + _un;
    const $uo = $z8 + $uk;
    const uo = get_coeffs_bez3_bez1_dd_qaq(z8, uk);
    const _uo = get_coeffs_bez3_bez1_dd_abs($uo);
    const uo_ = z8_ + uk_ + _uo;
    const $up = $z2 + $vₓᵧ;
    const up = get_coeffs_bez3_bez1_dd_qaq(z2, vₓᵧ);
    const _up = get_coeffs_bez3_bez1_dd_abs($up);
    const up_ = z2_ + vₓᵧ_ + _up;
    const $uq = $z5 + $vₓᵧ;
    const uq = get_coeffs_bez3_bez1_dd_qaq(z5, vₓᵧ);
    const _uq = get_coeffs_bez3_bez1_dd_abs($uq);
    const uq_ = z5_ + vₓᵧ_ + _uq;
    const $ur = $c0c1 * $un;
    const ur = get_coeffs_bez3_bez1_dd_qmq(c0c1, un);
    const ur_ = c0c1_ * _un + _c0c1 * un_ + 2 * get_coeffs_bez3_bez1_dd_abs($ur);
    const $us = $d0d1 * $uo;
    const us = get_coeffs_bez3_bez1_dd_qmq(d0d1, uo);
    const us_ = d0d1_ * _uo + _d0d1 * uo_ + 2 * get_coeffs_bez3_bez1_dd_abs($us);
    const $ut = $c0d1 * $up;
    const ut = get_coeffs_bez3_bez1_dd_qmq(c0d1, up);
    const ut_ = c0d1_ * _up + _c0d1 * up_ + 2 * get_coeffs_bez3_bez1_dd_abs($ut);
    const $uu = $c1d0 * $uq;
    const uu = get_coeffs_bez3_bez1_dd_qmq(c1d0, uq);
    const uu_ = c1d0_ * _uq + _c1d0 * uq_ + 2 * get_coeffs_bez3_bez1_dd_abs($uu);
    const $uv = $c1 * $vₓ;
    const uv = get_coeffs_bez3_bez1_dd_qmq(c1, vₓ);
    const uv_ = _c1 * vₓ_ + 2 * get_coeffs_bez3_bez1_dd_abs($uv);
    const $uw = $d1 * $vᵧ;
    const uw = get_coeffs_bez3_bez1_dd_qmq(d1, vᵧ);
    const uw_ = _d1 * vᵧ_ + 2 * get_coeffs_bez3_bez1_dd_abs($uw);
    const $ux = $ur + $us;
    const ux = get_coeffs_bez3_bez1_dd_qaq(ur, us);
    const ux_ = ur_ + us_ + get_coeffs_bez3_bez1_dd_abs($ux);
    const $uy = $ut + $uu;
    const uy = get_coeffs_bez3_bez1_dd_qaq(ut, uu);
    const uy_ = ut_ + uu_ + get_coeffs_bez3_bez1_dd_abs($uy);
    const $uz = $ux + $uy;
    const uz = get_coeffs_bez3_bez1_dd_qaq(ux, uy);
    const uz_ = ux_ + uy_ + get_coeffs_bez3_bez1_dd_abs($uz);
    const $u0 = $uv + $uw;
    const u0 = get_coeffs_bez3_bez1_dd_qaq(uv, uw);
    const u0_ = uv_ + uw_ + get_coeffs_bez3_bez1_dd_abs($u0);
    const $v1 = $uz + $u0;
    const v1 = get_coeffs_bez3_bez1_dd_qaq(uz, u0);
    const v1_ = uz_ + u0_ + get_coeffs_bez3_bez1_dd_abs($v1);
    // a0**3*v_xxx + a0**2*b0*v_xxy + a0**2*v_xx + a0*b0**2*v_xyy + a0*b0*v_xy + a0*v_x + b0**3*v_yyy + b0**2*v_yy + b0*v_y + v_0
    //const v0 =
    //    c0c0*(c0*vₓₓₓ + d0*vₓₓᵧ + vₓₓ) +
    //    d0d0*(d0*vᵧᵧᵧ + c0*vₓᵧᵧ + vᵧᵧ) +
    //    c0d0*vₓᵧ +
    //    c0*vₓ    +
    //    d0*vᵧ    +
    //    v;
    //const v0 =
    //    c0c0*(z1 + z3 + vₓₓ) +
    //    d0d0*(z6 + z4 + vᵧᵧ) +
    //    c0d0*vₓᵧ +
    //    c0*vₓ    +
    //    d0*vᵧ    +
    //    v;
    const $f1 = $z1 + $z3;
    const f1 = get_coeffs_bez3_bez1_dd_qaq(z1, z3);
    const f1_ = z1_ + z3_ + get_coeffs_bez3_bez1_dd_abs($f1);
    const $f2 = $z6 + $z4;
    const f2 = get_coeffs_bez3_bez1_dd_qaq(z6, z4);
    const f2_ = z6_ + z4_ + get_coeffs_bez3_bez1_dd_abs($f2);
    const $f3 = $f1 + $vₓₓ;
    const f3 = get_coeffs_bez3_bez1_dd_qaq(f1, vₓₓ);
    const _f3 = get_coeffs_bez3_bez1_dd_abs($f3);
    const f3_ = f1_ + vₓₓ_ + _f3;
    const $f4 = $f2 + $vᵧᵧ;
    const f4 = get_coeffs_bez3_bez1_dd_qaq(f2, vᵧᵧ);
    const _f4 = get_coeffs_bez3_bez1_dd_abs($f4);
    const f4_ = f2_ + vᵧᵧ_ + _f4;
    const $f5 = $c0c0 * $f3;
    const f5 = get_coeffs_bez3_bez1_dd_qmq(c0c0, f3);
    const f5_ = _c0c0 * f3_ + 2 * get_coeffs_bez3_bez1_dd_abs($f5);
    const $f6 = $d0d0 * $f4;
    const f6 = get_coeffs_bez3_bez1_dd_qmq(d0d0, f4);
    const f6_ = _d0d0 * f4_ + 2 * get_coeffs_bez3_bez1_dd_abs($f6);
    const $f7 = $c0d0 * $vₓᵧ;
    const f7 = get_coeffs_bez3_bez1_dd_qmq(c0d0, vₓᵧ);
    const f7_ = _c0d0 * vₓᵧ_ + 2 * get_coeffs_bez3_bez1_dd_abs($f7);
    const $f8 = $f5 + $f6;
    const f8 = get_coeffs_bez3_bez1_dd_qaq(f5, f6);
    const f8_ = f5_ + f6_ + get_coeffs_bez3_bez1_dd_abs($f8);
    const $f9 = $f8 + $f7;
    const f9 = get_coeffs_bez3_bez1_dd_qaq(f8, f7);
    const f9_ = f8_ + f7_ + get_coeffs_bez3_bez1_dd_abs($f9);
    const $fa = c0 * $vₓ;
    const fa = get_coeffs_bez3_bez1_dd_qmd(c0, vₓ);
    const fa_ = _c0 * vₓ_ + get_coeffs_bez3_bez1_dd_abs($fa);
    const $fb = d0 * $vᵧ;
    const fb = get_coeffs_bez3_bez1_dd_qmd(d0, vᵧ);
    const fb_ = _d0 * vᵧ_ + get_coeffs_bez3_bez1_dd_abs($fb);
    const $fc = $fa + $fb;
    const fc = get_coeffs_bez3_bez1_dd_qaq(fa, fb);
    const fc_ = fa_ + fb_ + get_coeffs_bez3_bez1_dd_abs($fc);
    const $fd = $f9 + $fc;
    const fd = get_coeffs_bez3_bez1_dd_qaq(f9, fc);
    const fd_ = f9_ + fc_ + get_coeffs_bez3_bez1_dd_abs($fd);
    const $v0 = $fd + $v;
    const v0 = get_coeffs_bez3_bez1_dd_qaq(fd, v);
    const v0_ = fd_ + v_ + get_coeffs_bez3_bez1_dd_abs($v0);
    return {
        coeffs: [v3, v2, v1, v0],
        errBound: [get_coeffs_bez3_bez1_dd_3 * v3_, get_coeffs_bez3_bez1_dd_3 * v2_, get_coeffs_bez3_bez1_dd_3 * v1_, get_coeffs_bez3_bez1_dd_3 * v0_]
    };
}

//# sourceMappingURL=get-coeffs-bez3-bez1-dd.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/bezier-bezier-intersection/get-coefficients/double-double/get-coeffs-bez1-bez2-dd.js




// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗
const get_coeffs_bez1_bez2_dd_tp = (/* unused pure expression or super */ null && (twoProduct));
const get_coeffs_bez1_bez2_dd_qaq = node_ddAddDd;
const get_coeffs_bez1_bez2_dd_qmd = node_ddMultDouble2;
const get_coeffs_bez1_bez2_dd_qmq = node_ddMultDd;
const get_coeffs_bez1_bez2_dd_abs = Math.abs;
const get_coeffs_bez1_bez2_dd_3 = error_analysis_error_analysis_(3);
/**
 * Returns a polynomial in 1 variable (including coefficientwise error bound)
 * whose roots are the parameter values of the intersection points of an order
 * 1 and order 2 bezier curve (i.e. a line and a quadratic bezier curve).
 *
 * The returned polynomial degree will be 2
 * (see [Bézout's theorem](https://en.wikipedia.org/wiki/B%C3%A9zout%27s_theorem))
 *
 * The returned polynomial coefficients are given densely as an array of
 * double-double precision floating point numbers from highest to lowest power,
 * e.g. `[[0,5],[0,-3],[0,0]]` represents the polynomial `5x^2 - 3x`.
 *
 * * intermediate calculations are done in double-double precision
 * * adapted from [Indrek Mandre](http://www.mare.ee/indrek/misc/2d.pdf)
 *
 * @param ps1
 * @param ps2
 *
 * @internal
 */
function getCoeffsBez1Bez2Dd(ps1, ps2) {
    const { coeffs: { vₓ, vᵧ, v }, errorBound: { v_ } } = getImplicitForm1DdWithRunningError(ps1);
    const { coeffs: [[c2, c1, [, c0]], [d2, d1, [, d0]]], errorBound: [[c2_], [d2_]] } = toPowerBasis2DdWithRunningError(ps2);
    const $vₓ = vₓ[1];
    const $vᵧ = vᵧ[1];
    const $v = v[1];
    const _vₓ = get_coeffs_bez1_bez2_dd_abs($vₓ);
    const _vᵧ = get_coeffs_bez1_bez2_dd_abs($vᵧ);
    const _v = get_coeffs_bez1_bez2_dd_abs($v);
    const $c1 = c1[1];
    const $c2 = c2[1];
    const $d1 = d1[1];
    const $d2 = d2[1];
    // --------------------------
    // a2*v_x + b2*v_y
    // const v2 = c2*vₓ + d2*vᵧ;
    // --------------------------
    const $p1 = $c2 * $vₓ;
    const p1 = get_coeffs_bez1_bez2_dd_qmq(c2, vₓ);
    const p1_ = c2_ * _vₓ + 2 * get_coeffs_bez1_bez2_dd_abs($p1);
    const $p2 = $d2 * $vᵧ;
    const p2 = get_coeffs_bez1_bez2_dd_qmq(d2, vᵧ);
    const p2_ = d2_ * _vᵧ + 2 * get_coeffs_bez1_bez2_dd_abs($p2);
    const $v2 = $p1 + $p2;
    const v2 = get_coeffs_bez1_bez2_dd_qaq(p1, p2);
    const v2_ = p1_ + p2_ + get_coeffs_bez1_bez2_dd_abs($v2);
    // a1*v_x + b1*v_y
    //const v1 = c1*vₓ + d1*vᵧ;
    const $p3 = $c1 * $vₓ;
    const p3 = get_coeffs_bez1_bez2_dd_qmq(c1, vₓ);
    const p3_ = 2 * get_coeffs_bez1_bez2_dd_abs($p3);
    const $p4 = $d1 * $vᵧ;
    const p4 = get_coeffs_bez1_bez2_dd_qmq(d1, vᵧ);
    const p4_ = 2 * get_coeffs_bez1_bez2_dd_abs($p4);
    const $v1 = $p3 + $p4;
    const v1 = get_coeffs_bez1_bez2_dd_qaq(p3, p4);
    const v1_ = p3_ + p4_ + get_coeffs_bez1_bez2_dd_abs($v1);
    // a0*v_x + b0*v_y + v_0
    //const v0 = c0*vₓ + d0*vᵧ + v;
    const p5 = get_coeffs_bez1_bez2_dd_qmd(c0, vₓ);
    const $p5 = c0 * $vₓ;
    const p5_ = get_coeffs_bez1_bez2_dd_abs($p5);
    const p6 = get_coeffs_bez1_bez2_dd_qmd(d0, vᵧ);
    const $p6 = d0 * $vᵧ;
    const p6_ = get_coeffs_bez1_bez2_dd_abs($p6);
    const $p7 = $p5 + $p6;
    const p7 = get_coeffs_bez1_bez2_dd_qaq(p5, p6);
    const p7_ = p5_ + p6_ + get_coeffs_bez1_bez2_dd_abs($p7);
    const $v0 = $p7 + $v;
    const v0 = get_coeffs_bez1_bez2_dd_qaq(p7, v);
    const v0_ = p7_ + v_ + get_coeffs_bez1_bez2_dd_abs($v0);
    return {
        coeffs: [v2, v1, v0],
        errBound: [get_coeffs_bez1_bez2_dd_3 * v2_, get_coeffs_bez1_bez2_dd_3 * v1_, get_coeffs_bez1_bez2_dd_3 * v0_]
    };
}

//# sourceMappingURL=get-coeffs-bez1-bez2-dd.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/bezier-bezier-intersection/get-coefficients/double-double/get-coeffs-bez2-bez2-dd.js




// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗
const get_coeffs_bez2_bez2_dd_tp = node_twoProduct;
const get_coeffs_bez2_bez2_dd_qm2 = node_ddMultBy2;
const get_coeffs_bez2_bez2_dd_qmd = node_ddMultDouble2;
const get_coeffs_bez2_bez2_dd_qmq = node_ddMultDd;
const get_coeffs_bez2_bez2_dd_qaq = node_ddAddDd;
const get_coeffs_bez2_bez2_dd_abs = Math.abs;
const get_coeffs_bez2_bez2_dd_3 = error_analysis_error_analysis_(3);
/**
 * Returns a polynomial in 1 variable (including coefficientwise error bound)
 * whose roots are the parameter values of the intersection points of 2 order
 * 2 bezier curves (i.e. 2 quadratic bezier curves).
 *
 * The returned polynomial degree will be 4
 * (see [Bézout's theorem](https://en.wikipedia.org/wiki/B%C3%A9zout%27s_theorem))
 *
 * The returned polynomial coefficients are given densely as an array of
 * double-double precision floating point numbers from highest to lowest power,
 * e.g. `[[0,5],[0,-3],[0,0]]` represents the polynomial `5x^2 - 3x`.
 *
 * * intermediate calculations are done in double-double precision
 * * adapted from [Indrek Mandre](http://www.mare.ee/indrek/misc/2d.pdf)
 *
 * @param ps1
 * @param ps2
 *
 * @internal
 */
function getCoeffsBez2Bez2Dd(ps1, ps2) {
    const { coeffs: { vₓₓ, vₓᵧ, vᵧᵧ, vₓ, vᵧ, v }, errorBound: { vₓₓ_, vₓᵧ_, vᵧᵧ_, vₓ_, vᵧ_, v_ } } = getImplicitForm2DdWithRunningError(ps1);
    const { coeffs: [[c2, c1, [, c0]], [d2, d1, [, d0]]], errorBound: [[c2_], [d2_]] } = toPowerBasis2DdWithRunningError(ps2);
    const $vₓₓ = vₓₓ[1];
    const $vₓᵧ = vₓᵧ[1];
    const $vᵧᵧ = vᵧᵧ[1];
    const $vₓ = vₓ[1];
    const $vᵧ = vᵧ[1];
    const $v = v[1];
    const _vₓₓ = get_coeffs_bez2_bez2_dd_abs($vₓₓ);
    const _vₓᵧ = get_coeffs_bez2_bez2_dd_abs($vₓᵧ);
    const _vᵧᵧ = get_coeffs_bez2_bez2_dd_abs($vᵧᵧ);
    const _vₓ = get_coeffs_bez2_bez2_dd_abs($vₓ);
    const _vᵧ = get_coeffs_bez2_bez2_dd_abs($vᵧ);
    const $c1 = c1[1];
    const $c2 = c2[1];
    const $d1 = d1[1];
    const $d2 = d2[1];
    const _c0 = get_coeffs_bez2_bez2_dd_abs(c0);
    const _c1 = get_coeffs_bez2_bez2_dd_abs($c1);
    const _c2 = get_coeffs_bez2_bez2_dd_abs($c2);
    const _d0 = get_coeffs_bez2_bez2_dd_abs(d0);
    const _d1 = get_coeffs_bez2_bez2_dd_abs($d1);
    const _d2 = get_coeffs_bez2_bez2_dd_abs($d2);
    const $c0c0 = c0 * c0;
    const $c0c1 = c0 * $c1;
    const $c0c2 = c0 * $c2;
    const $c0d0 = c0 * d0;
    const $c0d1 = c0 * $d1;
    const $c0d2 = c0 * $d2;
    const $c1c1 = $c1 * $c1;
    const $c1c2 = $c1 * $c2;
    const $c1d0 = $c1 * d0;
    const $c1d1 = $c1 * $d1;
    const $c1d2 = $c1 * $d2;
    const $c2d1 = $c2 * $d1;
    const $c2c2 = $c2 * $c2;
    const $c2d0 = $c2 * d0;
    const $c2d2 = $c2 * $d2;
    const $d0d0 = d0 * d0;
    const $d0d1 = d0 * $d1;
    const $d0d2 = d0 * $d2;
    const $d1d1 = $d1 * $d1;
    const $d1d2 = $d1 * $d2;
    const $d2d2 = $d2 * $d2;
    const _c0c0 = get_coeffs_bez2_bez2_dd_abs($c0c0);
    const _c0d0 = get_coeffs_bez2_bez2_dd_abs($c0d0);
    const _d0d0 = get_coeffs_bez2_bez2_dd_abs($d0d0);
    const c0c0 = get_coeffs_bez2_bez2_dd_tp(c0, c0); // error free
    const c0c1 = get_coeffs_bez2_bez2_dd_qmd(c0, c1);
    const _c0c1_ = get_coeffs_bez2_bez2_dd_abs($c0c1);
    const c0c2 = get_coeffs_bez2_bez2_dd_qmd(c0, c2);
    const _c0c2_ = get_coeffs_bez2_bez2_dd_abs($c0c2);
    const c0d0 = get_coeffs_bez2_bez2_dd_tp(c0, d0); // error free
    const c0d1 = get_coeffs_bez2_bez2_dd_qmd(c0, d1);
    const _c0d1_ = get_coeffs_bez2_bez2_dd_abs($c0d1);
    const c0d2 = get_coeffs_bez2_bez2_dd_qmd(c0, d2);
    const _c0d2_ = get_coeffs_bez2_bez2_dd_abs($c0d2);
    const c1c1 = get_coeffs_bez2_bez2_dd_qmq(c1, c1);
    const c1c1_ = 2 * get_coeffs_bez2_bez2_dd_abs($c1c1);
    const c1c2 = get_coeffs_bez2_bez2_dd_qmq(c1, c2);
    const _c1c2 = get_coeffs_bez2_bez2_dd_abs($c1c2);
    const c1c2_ = _c1 * c2_ + 2 * _c1c2;
    const c1d0 = get_coeffs_bez2_bez2_dd_qmd(d0, c1);
    const _c1d0_ = get_coeffs_bez2_bez2_dd_abs($c1d0);
    const c1d1 = get_coeffs_bez2_bez2_dd_qmq(c1, d1);
    const c1d1_ = 2 * get_coeffs_bez2_bez2_dd_abs($c1d1);
    const c1d2 = get_coeffs_bez2_bez2_dd_qmq(c1, d2);
    const c1d2_ = _c1 * d2_ + 2 * get_coeffs_bez2_bez2_dd_abs($c1d2);
    const c2d1 = get_coeffs_bez2_bez2_dd_qmq(c2, d1);
    const c2d1_ = c2_ * _d1 + 2 * get_coeffs_bez2_bez2_dd_abs($c2d1);
    const c2c2 = get_coeffs_bez2_bez2_dd_qmq(c2, c2);
    const _c2c2 = get_coeffs_bez2_bez2_dd_abs($c2c2);
    const c2c2_ = 2 * (c2_ * _c2 + _c2c2);
    const c2d0 = get_coeffs_bez2_bez2_dd_qmd(d0, c2);
    const _c2d0_ = get_coeffs_bez2_bez2_dd_abs($c2d0);
    const c2d2 = get_coeffs_bez2_bez2_dd_qmq(c2, d2);
    const _c2d2 = get_coeffs_bez2_bez2_dd_abs($c2d2);
    const c2d2_ = c2_ * _d2 + _c2 * d2_ + 2 * _c2d2;
    const d0d0 = get_coeffs_bez2_bez2_dd_tp(d0, d0); // error free
    const d0d1 = get_coeffs_bez2_bez2_dd_qmd(d0, d1);
    const _d0d1_ = get_coeffs_bez2_bez2_dd_abs($d0d1);
    const d0d2 = get_coeffs_bez2_bez2_dd_qmd(d0, d2);
    const _d0d2_ = get_coeffs_bez2_bez2_dd_abs($d0d2);
    const d1d1 = get_coeffs_bez2_bez2_dd_qmq(d1, d1);
    const d1d1_ = 2 * get_coeffs_bez2_bez2_dd_abs($d1d1);
    const d1d2 = get_coeffs_bez2_bez2_dd_qmq(d1, d2);
    const _d1d2 = get_coeffs_bez2_bez2_dd_abs($d1d2);
    const d1d2_ = _d1 * d2_ + 2 * _d1d2;
    const d2d2 = get_coeffs_bez2_bez2_dd_qmq(d2, d2);
    const _d2d2 = get_coeffs_bez2_bez2_dd_abs($d2d2);
    const d2d2_ = 2 * (d2_ * _d2 + _d2d2);
    // a2**2*v_xx + a2*b2*v_xy + b2**2*v_yy
    //const v4 = 
    //    (c2*c2)*vₓₓ +
    //    (c2*d2)*vₓᵧ +
    //    (d2*d2)*vᵧᵧ;
    const $p1 = $c2c2 * $vₓₓ;
    const p1 = get_coeffs_bez2_bez2_dd_qmq(c2c2, vₓₓ);
    const p1_ = c2c2_ * _vₓₓ + _c2c2 * vₓₓ_ + 2 * get_coeffs_bez2_bez2_dd_abs($p1);
    const $p2 = $c2d2 * $vₓᵧ;
    const p2 = get_coeffs_bez2_bez2_dd_qmq(c2d2, vₓᵧ);
    const p2_ = c2d2_ * _vₓᵧ + _c2d2 * vₓᵧ_ + 2 * get_coeffs_bez2_bez2_dd_abs($p2);
    const $p3 = $d2d2 * $vᵧᵧ;
    const p3 = get_coeffs_bez2_bez2_dd_qmq(d2d2, vᵧᵧ);
    const p3_ = d2d2_ * _vᵧᵧ + _d2d2 * vᵧᵧ_ + 2 * get_coeffs_bez2_bez2_dd_abs($p3);
    const $p4 = $p1 + $p2;
    const p4 = get_coeffs_bez2_bez2_dd_qaq(p1, p2);
    const p4_ = p1_ + p2_ + get_coeffs_bez2_bez2_dd_abs($p4);
    const $v4 = $p4 + $p3;
    const v4 = get_coeffs_bez2_bez2_dd_qaq(p4, p3);
    const v4_ = p4_ + p3_ + get_coeffs_bez2_bez2_dd_abs($v4);
    // 2*a1*a2*v_xx + a1*b2*v_xy + a2*b1*v_xy + 2*b1*b2*v_yy
    //const v3 =
    //    2*((c1*c2)*vₓₓ + (d1*d2)*vᵧᵧ) +
    //    ((c1*d2) + (c2*d1))*vₓᵧ;
    const $p5 = $c1c2 * $vₓₓ;
    const p5 = get_coeffs_bez2_bez2_dd_qmq(c1c2, vₓₓ);
    const p5_ = c1c2_ * _vₓₓ + _c1c2 * vₓₓ_ + 2 * get_coeffs_bez2_bez2_dd_abs($p5);
    const $p6 = $d1d2 * $vᵧᵧ;
    const p6 = get_coeffs_bez2_bez2_dd_qmq(d1d2, vᵧᵧ);
    const p6_ = d1d2_ * _vᵧᵧ + _d1d2 * vᵧᵧ_ + 2 * get_coeffs_bez2_bez2_dd_abs($p6);
    const $p7 = $c1d2 + $c2d1;
    const p7 = get_coeffs_bez2_bez2_dd_qaq(c1d2, c2d1);
    const _p7 = get_coeffs_bez2_bez2_dd_abs($p7);
    const p7_ = c1d2_ + c2d1_ + _p7;
    const $p8 = $p7 * $vₓᵧ;
    const p8 = get_coeffs_bez2_bez2_dd_qmq(p7, vₓᵧ);
    const p8_ = p7_ * _vₓᵧ + _p7 * vₓᵧ_ + 2 * get_coeffs_bez2_bez2_dd_abs($p8);
    const $p9 = 2 * ($p5 + $p6);
    const p9 = get_coeffs_bez2_bez2_dd_qm2(get_coeffs_bez2_bez2_dd_qaq(p5, p6));
    const p9_ = 2 * (p5_ + p6_) + get_coeffs_bez2_bez2_dd_abs($p9);
    const $v3 = $p9 + $p8;
    const v3 = get_coeffs_bez2_bez2_dd_qaq(p9, p8);
    const v3_ = p9_ + p8_ + get_coeffs_bez2_bez2_dd_abs($v3);
    // 2*a0*a2*v_xx + a0*b2*v_xy + a1**2*v_xx + 
    // a1*b1*v_xy + a2*b0*v_xy + a2*v_x + 
    // 2*b0*b2*v_yy + b1**2*v_yy + b2*v_y
    //const v2 = 
    //    (2*(c0*c2) + (c1*c1))*vₓₓ +
    //    (2*(d0*d2) + (d1*d1))*vᵧᵧ +          
    //    ((c0*d2) + (c1*d1) + (c2*d0))*vₓᵧ +
    //    c2*vₓ  +          
    //    d2*vᵧ;
    const $pa = 2 * $c0c2 + $c1c1;
    const _pa = get_coeffs_bez2_bez2_dd_abs($pa);
    const pa = get_coeffs_bez2_bez2_dd_qaq(get_coeffs_bez2_bez2_dd_qm2(c0c2), c1c1);
    const pa_ = 2 * _c0c2_ + c1c1_ + get_coeffs_bez2_bez2_dd_abs($pa);
    const $pb = 2 * $d0d2 + $d1d1;
    const _pb = get_coeffs_bez2_bez2_dd_abs($pb);
    const pb = get_coeffs_bez2_bez2_dd_qaq(get_coeffs_bez2_bez2_dd_qm2(d0d2), d1d1);
    const pb_ = 2 * _d0d2_ + d1d1_ + get_coeffs_bez2_bez2_dd_abs($pb);
    const $pc = $c0d2 + $c1d1;
    const _pc = get_coeffs_bez2_bez2_dd_abs($pc);
    const pc = get_coeffs_bez2_bez2_dd_qaq(c0d2, c1d1);
    const pc_ = _c0d2_ + c1d1_ + get_coeffs_bez2_bez2_dd_abs($pc);
    const $pd = $pc + $c2d0;
    const pd = get_coeffs_bez2_bez2_dd_qaq(pc, c2d0);
    const _pd = get_coeffs_bez2_bez2_dd_abs($pd);
    const pd_ = pc_ + _c2d0_ + _pd;
    const $pe = $pa * $vₓₓ;
    const pe = get_coeffs_bez2_bez2_dd_qmq(pa, vₓₓ);
    const pe_ = pa_ * _vₓₓ + _pa * vₓₓ_ + 2 * get_coeffs_bez2_bez2_dd_abs($pe);
    const $pf = $pb * $vᵧᵧ;
    const pf = get_coeffs_bez2_bez2_dd_qmq(pb, vᵧᵧ);
    const pf_ = pb_ * _vᵧᵧ + _pb * vᵧᵧ_ + 2 * get_coeffs_bez2_bez2_dd_abs($pf);
    const $pg = $pd * $vₓᵧ;
    const pg = get_coeffs_bez2_bez2_dd_qmq(pd, vₓᵧ);
    const pg_ = pd_ * _vₓᵧ + _pd * vₓᵧ_ + 2 * get_coeffs_bez2_bez2_dd_abs($pg);
    const $ph = $c2 * $vₓ;
    const ph = get_coeffs_bez2_bez2_dd_qmq(c2, vₓ);
    const ph_ = c2_ * _vₓ + _c2 * vₓ_ + get_coeffs_bez2_bez2_dd_abs($ph);
    const $pi = $d2 * $vᵧ;
    const pi = get_coeffs_bez2_bez2_dd_qmq(d2, vᵧ);
    const pi_ = d2_ * _vᵧ + _d2 * vᵧ_ + get_coeffs_bez2_bez2_dd_abs($pi);
    const $pj = $pe + $pf;
    const pj = get_coeffs_bez2_bez2_dd_qaq(pe, pf);
    const pj_ = pe_ + pf_ + get_coeffs_bez2_bez2_dd_abs($pj);
    const $pk = $pj + $pg;
    const pk = get_coeffs_bez2_bez2_dd_qaq(pj, pg);
    const pk_ = pj_ + pg_ + get_coeffs_bez2_bez2_dd_abs($pk);
    const $pl = $ph + $pi;
    const pl = get_coeffs_bez2_bez2_dd_qaq(ph, pi);
    const pl_ = ph_ + pi_ + get_coeffs_bez2_bez2_dd_abs($pl);
    const $v2 = $pk + $pl;
    const v2 = get_coeffs_bez2_bez2_dd_qaq(pk, pl);
    const v2_ = pk_ + pl_ + get_coeffs_bez2_bez2_dd_abs($v2);
    // 2*a0*a1*v_xx + a0*b1*v_xy + a1*b0*v_xy + 
    // a1*v_x + 2*b0*b1*v_yy + b1*v_y
    //const v1 =
    //    2*((c0*c1)*vₓₓ + (d0*d1)*vᵧᵧ) +
    //    ((c0*d1) + (c1*d0))*vₓᵧ +
    //    c1*vₓ  +
    //    d1*vᵧ;
    const $pm = $c0c1 * $vₓₓ;
    const pm = get_coeffs_bez2_bez2_dd_qmq(c0c1, vₓₓ);
    const pm_ = _c0c1_ * (_vₓₓ + vₓₓ_) + 2 * get_coeffs_bez2_bez2_dd_abs($pm);
    const $pn = $d0d1 * $vᵧᵧ;
    const pn = get_coeffs_bez2_bez2_dd_qmq(d0d1, vᵧᵧ);
    const pn_ = _d0d1_ * (_vᵧᵧ + vᵧᵧ_) + 2 * get_coeffs_bez2_bez2_dd_abs($pn);
    const $po = $c0d1 + $c1d0;
    const po = get_coeffs_bez2_bez2_dd_qaq(c0d1, c1d0);
    const _po = get_coeffs_bez2_bez2_dd_abs($po);
    const po_ = _c0d1_ + _c1d0_ + _po;
    const $pp = $po * $vₓᵧ;
    const pp = get_coeffs_bez2_bez2_dd_qmq(po, vₓᵧ);
    const pp_ = po_ * _vₓᵧ + _po * vₓᵧ_ + 2 * get_coeffs_bez2_bez2_dd_abs($pp);
    const $pq = 2 * ($pm + $pn);
    const pq = get_coeffs_bez2_bez2_dd_qm2(get_coeffs_bez2_bez2_dd_qaq(pm, pn));
    const pq_ = 2 * (pm_ + pn_) + get_coeffs_bez2_bez2_dd_abs($pq);
    const $pr = $c1 * $vₓ;
    const pr = get_coeffs_bez2_bez2_dd_qmq(c1, vₓ);
    const pr_ = _c1 * vₓ_ + 2 * get_coeffs_bez2_bez2_dd_abs($pr);
    const $ps = $d1 * $vᵧ;
    const ps = get_coeffs_bez2_bez2_dd_qmq(d1, vᵧ);
    const ps_ = _d1 * vᵧ_ + 2 * get_coeffs_bez2_bez2_dd_abs($ps);
    const $pt = $pq + $pp;
    const pt = get_coeffs_bez2_bez2_dd_qaq(pq, pp);
    const pt_ = pq_ + pp_ + get_coeffs_bez2_bez2_dd_abs($pt);
    const $pu = $pr + $ps;
    const pu = get_coeffs_bez2_bez2_dd_qaq(pr, ps);
    const pu_ = pr_ + ps_ + get_coeffs_bez2_bez2_dd_abs($pu);
    const $v1 = $pt + $pu;
    const v1 = get_coeffs_bez2_bez2_dd_qaq(pt, pu);
    const v1_ = pt_ + pu_ + get_coeffs_bez2_bez2_dd_abs($v1);
    // a0**2*v_xx + a0*b0*v_xy + a0*v_x + 
    // b0**2*v_yy + b0*v_y + v_0
    //const v0 =
    //    (c0*c0)*vₓₓ + 
    //    (c0*d0)*vₓᵧ + 
    //    (d0*d0)*vᵧᵧ + 
    //    c0*vₓ  +         
    //    d0*vᵧ  +
    //    v;
    const $pv = $c0c0 * $vₓₓ;
    const pv = get_coeffs_bez2_bez2_dd_qmq(c0c0, vₓₓ);
    const pv_ = _c0c0 * vₓₓ_ + 2 * get_coeffs_bez2_bez2_dd_abs($pv);
    const $pw = $c0d0 * $vₓᵧ;
    const pw = get_coeffs_bez2_bez2_dd_qmq(c0d0, vₓᵧ);
    const pw_ = _c0d0 * vₓᵧ_ + 2 * get_coeffs_bez2_bez2_dd_abs($pw);
    const $px = $d0d0 * $vᵧᵧ;
    const px = get_coeffs_bez2_bez2_dd_qmq(d0d0, vᵧᵧ);
    const px_ = _d0d0 * vᵧᵧ_ + 2 * get_coeffs_bez2_bez2_dd_abs($px);
    const $py = c0 * $vₓ;
    const py = get_coeffs_bez2_bez2_dd_qmd(c0, vₓ);
    const py_ = _c0 * vₓ_ + get_coeffs_bez2_bez2_dd_abs($py);
    const $pz = d0 * $vᵧ;
    const pz = get_coeffs_bez2_bez2_dd_qmd(d0, vᵧ);
    const pz_ = _d0 * vᵧ_ + get_coeffs_bez2_bez2_dd_abs($pz);
    const $q1 = $pv + $pw;
    const q1 = get_coeffs_bez2_bez2_dd_qaq(pv, pw);
    const q1_ = pv_ + pw_ + get_coeffs_bez2_bez2_dd_abs($q1);
    const $q2 = $q1 + $px;
    const q2 = get_coeffs_bez2_bez2_dd_qaq(q1, px);
    const q2_ = q1_ + px_ + get_coeffs_bez2_bez2_dd_abs($q2);
    const $q3 = $py + $pz;
    const q3 = get_coeffs_bez2_bez2_dd_qaq(py, pz);
    const q3_ = py_ + pz_ + get_coeffs_bez2_bez2_dd_abs($q3);
    const $q4 = $q2 + $q3;
    const q4 = get_coeffs_bez2_bez2_dd_qaq(q2, q3);
    const q4_ = q2_ + q3_ + get_coeffs_bez2_bez2_dd_abs($q4);
    const $v0 = $q4 + $v;
    const v0 = get_coeffs_bez2_bez2_dd_qaq(q4, v);
    const v0_ = q4_ + v_ + get_coeffs_bez2_bez2_dd_abs($v0);
    return {
        coeffs: [v4, v3, v2, v1, v0],
        errBound: [get_coeffs_bez2_bez2_dd_3 * v4_, get_coeffs_bez2_bez2_dd_3 * v3_, get_coeffs_bez2_bez2_dd_3 * v2_, get_coeffs_bez2_bez2_dd_3 * v1_, get_coeffs_bez2_bez2_dd_3 * v0_]
    };
}

//# sourceMappingURL=get-coeffs-bez2-bez2-dd.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/bezier-bezier-intersection/get-coefficients/double-double/get-coeffs-bez3-bez2-dd.js




// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗
const get_coeffs_bez3_bez2_dd_tp = node_twoProduct;
const get_coeffs_bez3_bez2_dd_qm2 = node_ddMultBy2;
const get_coeffs_bez3_bez2_dd_qmd = node_ddMultDouble2;
const get_coeffs_bez3_bez2_dd_qmq = node_ddMultDd;
const get_coeffs_bez3_bez2_dd_qaq = node_ddAddDd;
const get_coeffs_bez3_bez2_dd_abs = Math.abs;
const get_coeffs_bez3_bez2_dd_3 = error_analysis_error_analysis_(3);
/**
 * Returns a polynomial in 1 variable (including coefficientwise error bound)
 * whose roots are the parameter values of the intersection points of an order
 * 3 and 2 bezier curve (i.e. a cubic bezier curve and a quadratic bezier curve).
 *
 * The returned polynomial degree will be 6
 * (see [Bézout's theorem](https://en.wikipedia.org/wiki/B%C3%A9zout%27s_theorem))
 *
 * The returned polynomial coefficients are given densely as an array of
 * double-double precision floating point numbers from highest to lowest power,
 * e.g. `[[0,5],[0,-3],[0,0]]` represents the polynomial `5x^2 - 3x`.
 *
 * * intermediate calculations are done in double-double precision
 * * adapted from [Indrek Mandre](http://www.mare.ee/indrek/misc/2d.pdf)
 *
 * @param ps1
 * @param ps2
 *
 * @internal
 */
function getCoeffsBez3Bez2Dd(ps1, ps2) {
    const { coeffs: { vₓₓₓ, vₓₓᵧ, vₓᵧᵧ, vᵧᵧᵧ, vₓₓ, vₓᵧ, vᵧᵧ, vₓ, vᵧ, v }, errorBound: { vₓₓₓ_, vₓₓᵧ_, vₓᵧᵧ_, vᵧᵧᵧ_, vₓₓ_, vₓᵧ_, vᵧᵧ_, vₓ_, vᵧ_, v_ } } = getImplicitForm3DdWithRunningError(ps1);
    const { coeffs: [[c2, c1, [, c0]], [d2, d1, [, d0]]], errorBound: [[c2_], [d2_]] } = toPowerBasis2DdWithRunningError(ps2);
    const $vₓₓₓ = vₓₓₓ[1];
    const $vₓₓᵧ = vₓₓᵧ[1];
    const $vₓᵧᵧ = vₓᵧᵧ[1];
    const $vᵧᵧᵧ = vᵧᵧᵧ[1];
    const $vₓₓ = vₓₓ[1];
    const $vₓᵧ = vₓᵧ[1];
    const $vᵧᵧ = vᵧᵧ[1];
    const $vₓ = vₓ[1];
    const $vᵧ = vᵧ[1];
    const $v = v[1];
    const _vₓₓₓ = get_coeffs_bez3_bez2_dd_abs($vₓₓₓ);
    const _vₓₓᵧ = get_coeffs_bez3_bez2_dd_abs($vₓₓᵧ);
    const _vₓᵧᵧ = get_coeffs_bez3_bez2_dd_abs($vₓᵧᵧ);
    const _vᵧᵧᵧ = get_coeffs_bez3_bez2_dd_abs($vᵧᵧᵧ);
    const _vₓₓ = get_coeffs_bez3_bez2_dd_abs($vₓₓ);
    const _vᵧᵧ = get_coeffs_bez3_bez2_dd_abs($vᵧᵧ);
    const _vₓᵧ = get_coeffs_bez3_bez2_dd_abs($vₓᵧ);
    const _vₓ = get_coeffs_bez3_bez2_dd_abs($vₓ);
    const _vᵧ = get_coeffs_bez3_bez2_dd_abs($vᵧ);
    const $c1 = c1[1];
    const $c2 = c2[1];
    const $d1 = d1[1];
    const $d2 = d2[1];
    const _c0 = get_coeffs_bez3_bez2_dd_abs(c0);
    const _c1 = get_coeffs_bez3_bez2_dd_abs($c1);
    const _c2 = get_coeffs_bez3_bez2_dd_abs($c2);
    const _d0 = get_coeffs_bez3_bez2_dd_abs(d0);
    const _d1 = get_coeffs_bez3_bez2_dd_abs($d1);
    const _d2 = get_coeffs_bez3_bez2_dd_abs($d2);
    const $c0c0 = c0 * c0;
    const $c0c1 = c0 * $c1;
    const $c0c2 = c0 * $c2;
    const $c0d0 = c0 * d0;
    const $c0d1 = c0 * $d1;
    const $c0d2 = c0 * $d2;
    const $c1c1 = $c1 * $c1;
    const $c1c2 = $c1 * $c2;
    const $c1d0 = $c1 * d0;
    const $c1d1 = $c1 * $d1;
    const $c1d2 = $c1 * $d2;
    const $c2d1 = $c2 * $d1;
    const $c2c2 = $c2 * $c2;
    const $c2d0 = $c2 * d0;
    const $c2d2 = $c2 * $d2;
    const $d0d0 = d0 * d0;
    const $d0d1 = d0 * $d1;
    const $d0d2 = d0 * $d2;
    const $d1d1 = $d1 * $d1;
    const $d1d2 = $d1 * $d2;
    const $d2d2 = $d2 * $d2;
    const c0c0 = get_coeffs_bez3_bez2_dd_tp(c0, c0); // error free
    const c0c1 = get_coeffs_bez3_bez2_dd_qmd(c0, c1);
    const c0c1_ = get_coeffs_bez3_bez2_dd_abs($c0c1);
    const c0c2 = get_coeffs_bez3_bez2_dd_qmd(c0, c2);
    const c0c2_ = _c0 * c2_ + get_coeffs_bez3_bez2_dd_abs($c0c2);
    const c0d0 = get_coeffs_bez3_bez2_dd_tp(c0, d0); // error free
    const c0d1 = get_coeffs_bez3_bez2_dd_qmd(c0, d1);
    const c0d1_ = get_coeffs_bez3_bez2_dd_abs($c0d1);
    const c0d2 = get_coeffs_bez3_bez2_dd_qmd(c0, d2);
    const c0d2_ = _c0 * d2_ + get_coeffs_bez3_bez2_dd_abs($c0d2);
    const c1c1 = get_coeffs_bez3_bez2_dd_qmq(c1, c1);
    const c1c1_ = 2 * get_coeffs_bez3_bez2_dd_abs($c1c1);
    const c1c2 = get_coeffs_bez3_bez2_dd_qmq(c1, c2);
    const c1c2_ = _c1 * c2_ + 2 * get_coeffs_bez3_bez2_dd_abs($c1c2);
    const c1d0 = get_coeffs_bez3_bez2_dd_qmd(d0, c1);
    const c1d0_ = get_coeffs_bez3_bez2_dd_abs($c1d0);
    const c1d1 = get_coeffs_bez3_bez2_dd_qmq(c1, d1);
    const c1d1_ = 2 * get_coeffs_bez3_bez2_dd_abs($c1d1);
    const c1d2 = get_coeffs_bez3_bez2_dd_qmq(c1, d2);
    const c1d2_ = _c1 * d2_ + 2 * get_coeffs_bez3_bez2_dd_abs($c1d2);
    const c2d1 = get_coeffs_bez3_bez2_dd_qmq(c2, d1);
    const c2d1_ = c2_ * _d1 + 2 * get_coeffs_bez3_bez2_dd_abs($c2d1);
    const c2c2 = get_coeffs_bez3_bez2_dd_qmq(c2, c2);
    const c2c2_ = 2 * (c2_ * _c2 + get_coeffs_bez3_bez2_dd_abs($c2c2));
    const c2d0 = get_coeffs_bez3_bez2_dd_qmd(d0, c2);
    const c2d0_ = _d0 * c2_ + get_coeffs_bez3_bez2_dd_abs($c2d0);
    const c2d2 = get_coeffs_bez3_bez2_dd_qmq(c2, d2);
    const c2d2_ = c2_ * _d2 + _c2 * d2_ + 2 * get_coeffs_bez3_bez2_dd_abs($c2d2);
    const d0d0 = get_coeffs_bez3_bez2_dd_tp(d0, d0); // error free
    const d0d1 = get_coeffs_bez3_bez2_dd_qmd(d0, d1);
    const d0d1_ = get_coeffs_bez3_bez2_dd_abs($d0d1);
    const d0d2 = get_coeffs_bez3_bez2_dd_qmd(d0, d2);
    const d0d2_ = _d0 * d2_ + get_coeffs_bez3_bez2_dd_abs($d0d2);
    const d1d1 = get_coeffs_bez3_bez2_dd_qmq(d1, d1);
    const d1d1_ = 2 * get_coeffs_bez3_bez2_dd_abs($d1d1);
    const d1d2 = get_coeffs_bez3_bez2_dd_qmq(d1, d2);
    const d1d2_ = _d1 * d2_ + 2 * get_coeffs_bez3_bez2_dd_abs($d1d2);
    const d2d2 = get_coeffs_bez3_bez2_dd_qmq(d2, d2);
    const d2d2_ = 2 * (d2_ * _d2 + get_coeffs_bez3_bez2_dd_abs($d2d2));
    const _c0c0 = get_coeffs_bez3_bez2_dd_abs($c0c0);
    const _c0c1 = get_coeffs_bez3_bez2_dd_abs($c0c1);
    const _c0d0 = get_coeffs_bez3_bez2_dd_abs($c0d0);
    const _c0d1 = get_coeffs_bez3_bez2_dd_abs($c0d1);
    const _c1c2 = get_coeffs_bez3_bez2_dd_abs($c1c2);
    const _c2c2 = get_coeffs_bez3_bez2_dd_abs($c2c2);
    const _c2d2 = get_coeffs_bez3_bez2_dd_abs($c2d2);
    const _c1d0 = get_coeffs_bez3_bez2_dd_abs($c1d0);
    const _d0d0 = get_coeffs_bez3_bez2_dd_abs($d0d0);
    const _d0d1 = get_coeffs_bez3_bez2_dd_abs($d0d1);
    const _d1d2 = get_coeffs_bez3_bez2_dd_abs($d1d2);
    const _d2d2 = get_coeffs_bez3_bez2_dd_abs($d2d2);
    // a2**3*v_xxx + a2**2*b2*v_xxy + a2*b2**2*v_xyy + b2**3*v_yyy
    //const v6 =
    //    c2c2*(c2*vₓₓₓ + d2*vₓₓᵧ) +
    //    d2d2*(c2*vₓᵧᵧ + d2*vᵧᵧᵧ);
    const e1 = get_coeffs_bez3_bez2_dd_qmq(c2, vₓₓₓ);
    const $e1 = $c2 * $vₓₓₓ;
    const e1_ = c2_ * _vₓₓₓ + _c2 * vₓₓₓ_ + 2 * get_coeffs_bez3_bez2_dd_abs($e1);
    const e2 = get_coeffs_bez3_bez2_dd_qmq(c2, vₓᵧᵧ);
    const $e2 = $c2 * $vₓᵧᵧ;
    const e2_ = c2_ * _vₓᵧᵧ + _c2 * vₓᵧᵧ_ + 2 * get_coeffs_bez3_bez2_dd_abs($e2);
    const e3 = get_coeffs_bez3_bez2_dd_qmq(d2, vₓₓᵧ);
    const $e3 = $d2 * $vₓₓᵧ;
    const e3_ = d2_ * _vₓₓᵧ + _d2 * vₓₓᵧ_ + 2 * get_coeffs_bez3_bez2_dd_abs($e3);
    const e4 = get_coeffs_bez3_bez2_dd_qmq(d2, vᵧᵧᵧ);
    const $e4 = $d2 * $vᵧᵧᵧ;
    const e4_ = d2_ * _vᵧᵧᵧ + _d2 * vᵧᵧᵧ_ + 2 * get_coeffs_bez3_bez2_dd_abs($e4);
    const $e5 = $e1 + $e3;
    const e5 = get_coeffs_bez3_bez2_dd_qaq(e1, e3);
    const _e5 = get_coeffs_bez3_bez2_dd_abs($e5);
    const e5_ = e1_ + e3_ + _e5;
    const $e6 = $e2 + $e4;
    const e6 = get_coeffs_bez3_bez2_dd_qaq(e2, e4);
    const _e6 = get_coeffs_bez3_bez2_dd_abs($e6);
    const e6_ = e2_ + e4_ + _e6;
    const $e7 = $c2c2 * $e5;
    const e7 = get_coeffs_bez3_bez2_dd_qmq(c2c2, e5);
    const e7_ = c2c2_ * _e5 + _c2c2 * e5_ + 2 * get_coeffs_bez3_bez2_dd_abs($e7);
    const $e8 = $d2d2 * $e6;
    const e8 = get_coeffs_bez3_bez2_dd_qmq(d2d2, e6);
    const e8_ = d2d2_ * _e6 + _d2d2 * e6_ + 2 * get_coeffs_bez3_bez2_dd_abs($e8);
    const $v6 = $e7 + $e8;
    const v6 = get_coeffs_bez3_bez2_dd_qaq(e7, e8);
    const v6_ = e7_ + e8_ + get_coeffs_bez3_bez2_dd_abs($v6);
    ///
    const $z1 = $c0c2 + $c1c1;
    const z1 = get_coeffs_bez3_bez2_dd_qaq(c0c2, c1c1);
    const _z1 = get_coeffs_bez3_bez2_dd_abs($z1);
    const z1_ = c0c2_ + c1c1_ + _z1;
    const $z2 = $d0d2 + $d1d1;
    const z2 = get_coeffs_bez3_bez2_dd_qaq(d0d2, d1d1);
    const _z2 = get_coeffs_bez3_bez2_dd_abs($z2);
    const z2_ = d0d2_ + d1d1_ + _z2;
    const $z3 = 2 * $c0c2 + $c1c1;
    const _z3 = get_coeffs_bez3_bez2_dd_abs($z3);
    const z3 = get_coeffs_bez3_bez2_dd_qaq(get_coeffs_bez3_bez2_dd_qm2(c0c2), c1c1);
    const z3_ = 2 * c0c2_ + c1c1_ + _z3;
    const $z4 = 2 * $d0d2 + $d1d1;
    const z4 = get_coeffs_bez3_bez2_dd_qaq(get_coeffs_bez3_bez2_dd_qm2(d0d2), d1d1);
    const _z4 = get_coeffs_bez3_bez2_dd_abs($z4);
    const z4_ = 2 * d0d2_ + d1d1_ + _z4;
    const $z5 = 2 * $c1d1 + $c2d0;
    const z5 = get_coeffs_bez3_bez2_dd_qaq(get_coeffs_bez3_bez2_dd_qm2(c1d1), c2d0);
    const _z5 = get_coeffs_bez3_bez2_dd_abs($z5);
    const z5_ = 2 * c1d1_ + c2d0_ + _z5;
    const $z6 = 2 * $c1d1 + $c0d2;
    const z6 = get_coeffs_bez3_bez2_dd_qaq(get_coeffs_bez3_bez2_dd_qm2(c1d1), c0d2);
    const _z6 = get_coeffs_bez3_bez2_dd_abs($z6);
    const z6_ = 2 * c1d1_ + c0d2_ + _z6;
    const $z7 = 2 * $c2d0 + $c1d1;
    const z7 = get_coeffs_bez3_bez2_dd_qaq(get_coeffs_bez3_bez2_dd_qm2(c2d0), c1d1);
    const z7_ = 2 * c2d0_ + c1d1_ + get_coeffs_bez3_bez2_dd_abs($z7);
    const $z8 = 6 * $c0c2 + $c1c1;
    const $q1 = 6 * $c0c2;
    const q1 = get_coeffs_bez3_bez2_dd_qmd(6, c0c2);
    const q1_ = 6 * c0c2_ + get_coeffs_bez3_bez2_dd_abs($q1);
    const z8 = get_coeffs_bez3_bez2_dd_qaq(q1, c1c1);
    const z8_ = q1_ + c1c1_ + get_coeffs_bez3_bez2_dd_abs($q1 + $c1c1);
    const $z9 = 6 * $d0d2 + $d1d1;
    const $q2 = 6 * $d0d2;
    const q2 = get_coeffs_bez3_bez2_dd_qmd(6, d0d2);
    const q2_ = 6 * d0d2_ + get_coeffs_bez3_bez2_dd_abs($q2);
    const z9 = get_coeffs_bez3_bez2_dd_qaq(q2, d1d1);
    const z9_ = q2_ + d1d1_ + get_coeffs_bez3_bez2_dd_abs($q2 + $d1d1);
    const $za = $c1d2 + $c2d1;
    const za = get_coeffs_bez3_bez2_dd_qaq(c1d2, c2d1);
    const _za = get_coeffs_bez3_bez2_dd_abs($za);
    const za_ = c1d2_ + c2d1_ + _za;
    const $zb = $c0d2 + $c2d0;
    const zb = get_coeffs_bez3_bez2_dd_qaq(c0d2, c2d0);
    const zb_ = c0d2_ + c2d0_ + get_coeffs_bez3_bez2_dd_abs($zb);
    const $zc = 2 * $c1d0 + $c0d1;
    const zc = get_coeffs_bez3_bez2_dd_qaq(get_coeffs_bez3_bez2_dd_qm2(c1d0), c0d1);
    const zc_ = 2 * c1d0_ + c0d1_ + get_coeffs_bez3_bez2_dd_abs($zc);
    const $zd = 2 * $c0d1 + $c1d0;
    const zd = get_coeffs_bez3_bez2_dd_qaq(get_coeffs_bez3_bez2_dd_qm2(c0d1), c1d0);
    const zd_ = 2 * c0d1_ + c1d0_ + get_coeffs_bez3_bez2_dd_abs($zd);
    const $zf = $c0d2 + $c1d1;
    const zf = get_coeffs_bez3_bez2_dd_qaq(c0d2, c1d1);
    const zf_ = c0d2_ + c1d1_ + get_coeffs_bez3_bez2_dd_abs($zf);
    const $ze = $zf + $c2d0;
    const ze = get_coeffs_bez3_bez2_dd_qaq(zf, c2d0);
    const _ze = get_coeffs_bez3_bez2_dd_abs($ze);
    const ze_ = zf_ + c2d0_ + _ze;
    // 3*a1*a2**2*v_xxx + 2*a1*a2*b2*v_xxy + a1*b2**2*v_xyy + 
    // a2**2*b1*v_xxy + 2*a2*b1*b2*v_xyy + 3*b1*b2**2*v_yyy
    //const v5 =
    //    c1*(3*c2c2*vₓₓₓ + 2*c2d2*vₓₓᵧ +   d2d2*vₓᵧᵧ) +
    //    d1*(  c2c2*vₓₓᵧ + 2*c2d2*vₓᵧᵧ + 3*d2d2*vᵧᵧᵧ);
    const $s0 = 3 * $c2c2;
    const s0 = get_coeffs_bez3_bez2_dd_qmd(3, c2c2);
    const s0_ = 3 * c2c2_ + get_coeffs_bez3_bez2_dd_abs($s0);
    const _s0 = get_coeffs_bez3_bez2_dd_abs($s0);
    const $t1 = 3 * $d2d2;
    const t1 = get_coeffs_bez3_bez2_dd_qmd(3, d2d2);
    const t1_ = 3 * d2d2_ + get_coeffs_bez3_bez2_dd_abs($t1);
    const _t1 = get_coeffs_bez3_bez2_dd_abs($t1);
    const $s1 = $s0 * $vₓₓₓ;
    const s1 = get_coeffs_bez3_bez2_dd_qmq(s0, vₓₓₓ);
    const s1_ = s0_ * _vₓₓₓ + _s0 * vₓₓₓ_ + 2 * get_coeffs_bez3_bez2_dd_abs($s1);
    const $s2 = $c2c2 * $vₓₓᵧ;
    const s2 = get_coeffs_bez3_bez2_dd_qmq(c2c2, vₓₓᵧ);
    const s2_ = c2c2_ * _vₓₓᵧ + _c2c2 * vₓₓᵧ_ + 2 * get_coeffs_bez3_bez2_dd_abs($s2);
    const $s3 = 2 * $c2d2 * $vₓₓᵧ;
    const s3 = get_coeffs_bez3_bez2_dd_qm2(get_coeffs_bez3_bez2_dd_qmq(c2d2, vₓₓᵧ));
    const s3_ = 2 * (c2d2_ * _vₓₓᵧ + _c2d2 * vₓₓᵧ_ + get_coeffs_bez3_bez2_dd_abs($s3));
    const $s4 = 2 * $c2d2 * $vₓᵧᵧ;
    const s4 = get_coeffs_bez3_bez2_dd_qm2(get_coeffs_bez3_bez2_dd_qmq(c2d2, vₓᵧᵧ));
    const s4_ = 2 * (c2d2_ * _vₓᵧᵧ + _c2d2 * vₓᵧᵧ_ + get_coeffs_bez3_bez2_dd_abs($s4));
    const $s5 = $d2d2 * $vₓᵧᵧ;
    const s5 = get_coeffs_bez3_bez2_dd_qmq(d2d2, vₓᵧᵧ);
    const s5_ = d2d2_ * _vₓᵧᵧ + _d2d2 * vₓᵧᵧ_ + 2 * get_coeffs_bez3_bez2_dd_abs($s5);
    const $s6 = $t1 * $vᵧᵧᵧ;
    const s6 = get_coeffs_bez3_bez2_dd_qmq(t1, vᵧᵧᵧ);
    const s6_ = t1_ * _vᵧᵧᵧ + _t1 * vᵧᵧᵧ_ + 2 * get_coeffs_bez3_bez2_dd_abs($s6);
    const $s7 = $s1 + $s3;
    const s7 = get_coeffs_bez3_bez2_dd_qaq(s1, s3);
    const s7_ = s1_ + s3_ + get_coeffs_bez3_bez2_dd_abs($s7);
    const $s8 = $s2 + $s4;
    const s8 = get_coeffs_bez3_bez2_dd_qaq(s2, s4);
    const s8_ = s2_ + s4_ + get_coeffs_bez3_bez2_dd_abs($s8);
    const $s9 = $s7 + $s5;
    const s9 = get_coeffs_bez3_bez2_dd_qaq(s7, s5);
    const s9_ = s7_ + s5_ + get_coeffs_bez3_bez2_dd_abs($s9);
    const $sa = $s8 + $s6;
    const sa = get_coeffs_bez3_bez2_dd_qaq(s8, s6);
    const sa_ = s8_ + s6_ + get_coeffs_bez3_bez2_dd_abs($sa);
    const $sb = $c1 * $s9;
    const sb = get_coeffs_bez3_bez2_dd_qmq(c1, s9);
    const sb_ = _c1 * s9_ + get_coeffs_bez3_bez2_dd_abs($sb);
    const $sc = $d1 * $sa;
    const sc = get_coeffs_bez3_bez2_dd_qmq(d1, sa);
    const sc_ = _d1 * sa_ + get_coeffs_bez3_bez2_dd_abs($sc);
    const $v5 = $sb + $sc;
    const v5 = get_coeffs_bez3_bez2_dd_qaq(sb, sc);
    const v5_ = sb_ + sc_ + get_coeffs_bez3_bez2_dd_abs($v5);
    // 3*a0*a2**2*v_xxx + 2*a0*a2*b2*v_xxy + a0*b2**2*v_xyy + 
    // 3*a1**2*a2*v_xxx + a1**2*b2*v_xxy + 2*a1*a2*b1*v_xxy + 
    // 2*a1*b1*b2*v_xyy + a2**2*b0*v_xxy + a2**2*v_xx + 
    // 2*a2*b0*b2*v_xyy + a2*b1**2*v_xyy + a2*b2*v_xy + 
    // 3*b0*b2**2*v_yyy + 3*b1**2*b2*v_yyy + b2**2*v_yy
    //const v4 =
    //    3*c2*(c0c2 + c1c1)*vₓₓₓ + 
    //    3*d2*(d0d2 + d1d1)*vᵧᵧᵧ + 
    //    (d2*(2*c0c2 + c1c1) + c2*(2*c1d1 + c2d0))*vₓₓᵧ +
    //    (d2*(2*c1d1 + c0d2) + c2*(2*d0d2 + d1d1))*vₓᵧᵧ +
    //    vₓₓ*c2c2 +
    //    vᵧᵧ*d2d2 +
    //    vₓᵧ*c2d2;
    //const v4 =
    //    (3*c2)*z1*vₓₓₓ + 
    //    (3*d2)*z2*vᵧᵧᵧ + 
    //    (d2*z3 + c2*z5)*vₓₓᵧ +
    //    (d2*z6 + c2*z4)*vₓᵧᵧ +
    //    vₓₓ*c2c2 +
    //    vᵧᵧ*d2d2 +
    //    vₓᵧ*c2d2;
    const $sd = $d2 * $z3;
    const sd = get_coeffs_bez3_bez2_dd_qmq(d2, z3);
    const sd_ = d2_ * _z3 + _d2 * z3_ + 2 * get_coeffs_bez3_bez2_dd_abs($sd);
    const $se = $d2 * $z6;
    const se = get_coeffs_bez3_bez2_dd_qmq(d2, z6);
    const se_ = d2_ * _z6 + _d2 * z6_ + 2 * get_coeffs_bez3_bez2_dd_abs($se);
    const $sf = $c2 * $z5;
    const sf = get_coeffs_bez3_bez2_dd_qmq(c2, z5);
    const sf_ = c2_ * _z5 + _c2 * z5_ + 2 * get_coeffs_bez3_bez2_dd_abs($sf);
    const $sg = $c2 * $z4;
    const sg = get_coeffs_bez3_bez2_dd_qmq(c2, z4);
    const sg_ = c2_ * _z4 + _c2 * z4_ + 2 * get_coeffs_bez3_bez2_dd_abs($sg);
    const $q3 = 3 * $c2;
    const q3 = get_coeffs_bez3_bez2_dd_qmd(3, c2);
    const _q3 = get_coeffs_bez3_bez2_dd_abs($q3);
    const q3_ = 3 * c2_ + _q3;
    const $sh = $q3 * $z1;
    const sh = get_coeffs_bez3_bez2_dd_qmq(q3, z1);
    const _sh = get_coeffs_bez3_bez2_dd_abs($sh);
    const sh_ = q3_ * _z1 + _q3 * z1_ + _sh;
    const $q4 = 3 * $d2;
    const q4 = get_coeffs_bez3_bez2_dd_qmd(3, d2);
    const _q4 = get_coeffs_bez3_bez2_dd_abs($q4);
    const q4_ = 3 * d2_ + _q4;
    const $si = $q4 * $z2;
    const si = get_coeffs_bez3_bez2_dd_qmq(q4, z2);
    const _si = get_coeffs_bez3_bez2_dd_abs($si);
    const si_ = q4_ * _z2 + _q4 * z2_ + _si;
    const $sj = $sd + $sf;
    const sj = get_coeffs_bez3_bez2_dd_qaq(sd, sf);
    const _sj = get_coeffs_bez3_bez2_dd_abs($sj);
    const sj_ = sd_ + sf_ + _sj;
    const $sk = $se + $sg;
    const sk = get_coeffs_bez3_bez2_dd_qaq(se, sg);
    const _sk = get_coeffs_bez3_bez2_dd_abs($sk);
    const sk_ = se_ + sg_ + _sk;
    const $sl = $sh * $vₓₓₓ;
    const sl = get_coeffs_bez3_bez2_dd_qmq(sh, vₓₓₓ);
    const sl_ = sh_ * _vₓₓₓ + _sh * vₓₓₓ_ + 2 * get_coeffs_bez3_bez2_dd_abs($sl);
    const $sm = $si * $vᵧᵧᵧ;
    const sm = get_coeffs_bez3_bez2_dd_qmq(si, vᵧᵧᵧ);
    const sm_ = si_ * _vᵧᵧᵧ + _si * vᵧᵧᵧ_ + 2 * get_coeffs_bez3_bez2_dd_abs($sm);
    const $sn = $sj * $vₓₓᵧ;
    const sn = get_coeffs_bez3_bez2_dd_qmq(sj, vₓₓᵧ);
    const sn_ = sj_ * _vₓₓᵧ + _sj * vₓₓᵧ_ + 2 * get_coeffs_bez3_bez2_dd_abs($sn);
    const $so = $sk * $vₓᵧᵧ;
    const so = get_coeffs_bez3_bez2_dd_qmq(sk, vₓᵧᵧ);
    const so_ = sk_ * _vₓᵧᵧ + _sk * vₓᵧᵧ_ + 2 * get_coeffs_bez3_bez2_dd_abs($so);
    const $sp = $sl + $sm;
    const sp = get_coeffs_bez3_bez2_dd_qaq(sl, sm);
    const sp_ = sl_ + sm_ + get_coeffs_bez3_bez2_dd_abs($sp);
    const $sq = $sn + $so;
    const sq = get_coeffs_bez3_bez2_dd_qaq(sn, so);
    const sq_ = sn_ + so_ + get_coeffs_bez3_bez2_dd_abs($sq);
    const $sr = $c2c2 * $vₓₓ;
    const sr = get_coeffs_bez3_bez2_dd_qmq(c2c2, vₓₓ);
    const sr_ = c2c2_ * _vₓₓ + _c2c2 * vₓₓ_ + 2 * get_coeffs_bez3_bez2_dd_abs($sr);
    const $ss = $d2d2 * $vᵧᵧ;
    const ss = get_coeffs_bez3_bez2_dd_qmq(d2d2, vᵧᵧ);
    const ss_ = d2d2_ * _vᵧᵧ + _d2d2 * vᵧᵧ_ + 2 * get_coeffs_bez3_bez2_dd_abs($ss);
    const $st = $c2d2 * $vₓᵧ;
    const st = get_coeffs_bez3_bez2_dd_qmq(c2d2, vₓᵧ);
    const st_ = c2d2_ * _vₓᵧ + _c2d2 * vₓᵧ_ + 2 * get_coeffs_bez3_bez2_dd_abs($st);
    const $su = $sr + $ss;
    const su = get_coeffs_bez3_bez2_dd_qaq(sr, ss);
    const su_ = sr_ + ss_ + get_coeffs_bez3_bez2_dd_abs($su);
    const $sv = $sp + $sq;
    const sv = get_coeffs_bez3_bez2_dd_qaq(sp, sq);
    const sv_ = sp_ + sq_ + get_coeffs_bez3_bez2_dd_abs($sv);
    const $sw = $su + $st;
    const sw = get_coeffs_bez3_bez2_dd_qaq(su, st);
    const sw_ = su_ + st_ + get_coeffs_bez3_bez2_dd_abs($sw);
    const $v4 = $sv + $sw;
    const v4 = get_coeffs_bez3_bez2_dd_qaq(sv, sw);
    const v4_ = sv_ + sw_ + get_coeffs_bez3_bez2_dd_abs($v4);
    // 6*a0*a1*a2*v_xxx + 2*a0*a1*b2*v_xxy + 2*a0*a2*b1*v_xxy + 
    // 2*a0*b1*b2*v_xyy + a1**3*v_xxx + a1**2*b1*v_xxy + 
    // 2*a1*a2*b0*v_xxy + 2*a1*a2*v_xx + 2*a1*b0*b2*v_xyy + 
    // a1*b1**2*v_xyy + a1*b2*v_xy + 2*a2*b0*b1*v_xyy + 
    // a2*b1*v_xy + 6*b0*b1*b2*v_yyy + b1**3*v_yyy + 
    // 2*b1*b2*v_yy
    //const v3 =
    //    c1*(6*c0c2 + c1c1)*vₓₓₓ +
    //    d1*(6*d0d2 + d1d1)*vᵧᵧᵧ +        
    //    (2*c0*(c1d2 + c2d1) + c1*(c1d1 + 2*c2d0))*vₓₓᵧ +
    //    (2*d1*(c0d2 + c2d0) + c1*(d1d1 + 2*d0d2))*vₓᵧᵧ +
    //    2*(d1d2*vᵧᵧ + c1c2*vₓₓ) +
    //    c1d2*vₓᵧ + c2d1*vₓᵧ;
    //const v3 =
    //    c1*z8*vₓₓₓ +
    //    d1*z9*vᵧᵧᵧ +        
    //    (2*c0*za + c1*z7)*vₓₓᵧ +
    //    (2*d1*zb + c1*z4)*vₓᵧᵧ +
    //    2*(d1d2*vᵧᵧ + c1c2*vₓₓ) +
    //    za*vₓᵧ;
    const $sx = $c1 * $z8;
    const sx = get_coeffs_bez3_bez2_dd_qmq(c1, z8);
    const _sx = _c1 * z8_ + 2 * get_coeffs_bez3_bez2_dd_abs($sx);
    const sx_ = 2 * _sx;
    const $sy = $d1 * $z9;
    const sy = get_coeffs_bez3_bez2_dd_qmq(d1, z9);
    const _sy = _d1 * z9_ + 2 * get_coeffs_bez3_bez2_dd_abs($sy);
    const sy_ = 2 * _sy;
    const $sz = 2 * c0 * $za;
    const sz = get_coeffs_bez3_bez2_dd_qmd(2 * c0, za);
    const sz_ = 2 * _c0 * za_ + get_coeffs_bez3_bez2_dd_abs($sz);
    const $o1 = 2 * $d1 * $zb;
    const o1 = get_coeffs_bez3_bez2_dd_qmq(get_coeffs_bez3_bez2_dd_qm2(d1), zb);
    const o1_ = 2 * _d1 * zb_ + 2 * get_coeffs_bez3_bez2_dd_abs($o1);
    const $o2 = $c1 * $z7;
    const o2 = get_coeffs_bez3_bez2_dd_qmq(c1, z7);
    const o2_ = _c1 * z7_ + 2 * get_coeffs_bez3_bez2_dd_abs($o2);
    const $o3 = $c1 * $z4;
    const o3 = get_coeffs_bez3_bez2_dd_qmq(c1, z4);
    const o3_ = _c1 * z4_ + 2 * get_coeffs_bez3_bez2_dd_abs($o3);
    const $o4 = $sz + $o2;
    const o4 = get_coeffs_bez3_bez2_dd_qaq(sz, o2);
    const _o4 = sz_ + o2_ + get_coeffs_bez3_bez2_dd_abs($o4);
    const o4_ = sz_ + o2_ + _o4;
    const $o5 = $o1 + $o3;
    const o5 = get_coeffs_bez3_bez2_dd_qaq(o1, o3);
    const _o5 = o1_ + o3_ + get_coeffs_bez3_bez2_dd_abs($o5);
    const o5_ = o1_ + o3_ + _o5;
    const $o6 = $d1d2 * $vᵧᵧ;
    const o6 = get_coeffs_bez3_bez2_dd_qmq(d1d2, vᵧᵧ);
    const o6_ = d1d2_ * _vᵧᵧ + _d1d2 * vᵧᵧ_ + 2 * get_coeffs_bez3_bez2_dd_abs($o6);
    const $o7 = $c1c2 * $vₓₓ;
    const o7 = get_coeffs_bez3_bez2_dd_qmq(c1c2, vₓₓ);
    const o7_ = c1c2_ * _vₓₓ + _c1c2 * vₓₓ_ + 2 * get_coeffs_bez3_bez2_dd_abs($o7);
    const $o8 = $za * $vₓᵧ;
    const o8 = get_coeffs_bez3_bez2_dd_qmq(za, vₓᵧ);
    const o8_ = za_ * _vₓᵧ + _za * vₓᵧ_ + 2 * get_coeffs_bez3_bez2_dd_abs($o8);
    const $o9 = $o6 + $o7;
    const o9 = get_coeffs_bez3_bez2_dd_qaq(o6, o7);
    const o9_ = o6_ + o7_ + get_coeffs_bez3_bez2_dd_abs($o9);
    const $oa = $sx * $vₓₓₓ;
    const oa = get_coeffs_bez3_bez2_dd_qmq(sx, vₓₓₓ);
    const oa_ = sx_ * _vₓₓₓ + _sx * vₓₓₓ_ + 2 * get_coeffs_bez3_bez2_dd_abs($oa);
    const $ob = $o4 * $vₓₓᵧ;
    const ob = get_coeffs_bez3_bez2_dd_qmq(o4, vₓₓᵧ);
    const ob_ = o4_ * _vₓₓᵧ + _o4 * vₓₓᵧ_ + 2 * get_coeffs_bez3_bez2_dd_abs($ob);
    const $oc = $sy * $vᵧᵧᵧ;
    const oc = get_coeffs_bez3_bez2_dd_qmq(sy, vᵧᵧᵧ);
    const oc_ = sy_ * _vᵧᵧᵧ + _sy * vᵧᵧᵧ_ + 2 * get_coeffs_bez3_bez2_dd_abs($oc);
    const $od = $o5 * $vₓᵧᵧ;
    const od = get_coeffs_bez3_bez2_dd_qmq(o5, vₓᵧᵧ);
    const od_ = o5_ * _vₓᵧᵧ + _o5 * vₓᵧᵧ_ + 2 * get_coeffs_bez3_bez2_dd_abs($od);
    const $oe = $oa + $oc;
    const oe = get_coeffs_bez3_bez2_dd_qaq(oa, oc);
    const oe_ = oa_ + oc_ + get_coeffs_bez3_bez2_dd_abs($oe);
    const $og = $ob + $od;
    const og = get_coeffs_bez3_bez2_dd_qaq(ob, od);
    const og_ = ob_ + od_ + get_coeffs_bez3_bez2_dd_abs($og);
    const $oh = $oe + $og;
    const oh = get_coeffs_bez3_bez2_dd_qaq(oe, og);
    const oh_ = oe_ + og_ + get_coeffs_bez3_bez2_dd_abs($oh);
    const $oi = 2 * $o9 + $o8;
    const oi = get_coeffs_bez3_bez2_dd_qaq(get_coeffs_bez3_bez2_dd_qm2(o9), o8);
    const oi_ = 2 * o9_ + o8_ + get_coeffs_bez3_bez2_dd_abs($oi);
    const $v3 = $oh + $oi;
    const v3 = get_coeffs_bez3_bez2_dd_qaq(oh, oi);
    const v3_ = oh_ + oi_ + get_coeffs_bez3_bez2_dd_abs($v3);
    // 3*a0**2*a2*v_xxx + a0**2*b2*v_xxy + 3*a0*a1**2*v_xxx + 2*a0*a1*b1*v_xxy + 2*a0*a2*b0*v_xxy + 
    // 2*a0*a2*v_xx + 2*a0*b0*b2*v_xyy + a0*b1**2*v_xyy + a0*b2*v_xy + a1**2*b0*v_xxy + a1**2*v_xx + 
    // 2*a1*b0*b1*v_xyy + a1*b1*v_xy + a2*b0**2*v_xyy + a2*b0*v_xy + a2*v_x + 3*b0**2*b2*v_yyy + 
    // 3*b0*b1**2*v_yyy + 2*b0*b2*v_yy + b1**2*v_yy + b2*v_y
    //const v2 =
    //    (3*c0*(c0c2 + c1c1))*vₓₓₓ +
    //    (3*d0*(d0d2 + d1d1))*vᵧᵧᵧ +
    //    (c0*(2*c1d1 + c0d2) + d0*(2*c0c2 + c1c1))*vₓₓᵧ +
    //    (c0*(2*d0d2 + d1d1) + d0*(2*c1d1 + c2d0))*vₓᵧᵧ +
    //    (2*c0c2 + c1c1)*vₓₓ +
    //    (2*d0d2 + d1d1)*vᵧᵧ +
    //    (c0d2 + c1d1 + c2d0)*vₓᵧ +
    //    c2*vₓ +
    //    d2*vᵧ;
    //const v2 =
    //    (3*c0*z1)*vₓₓₓ +
    //    (3*d0*z2)*vᵧᵧᵧ +
    //    (c0*z6 + d0*z3)*vₓₓᵧ +
    //    (c0*z4 + d0*z5)*vₓᵧᵧ +
    //    z3*vₓₓ +
    //    z4*vᵧᵧ +
    //    ze*vₓᵧ +
    //    c2*vₓ +
    //    d2*vᵧ;
    const $q5 = 3 * c0;
    const _q5 = get_coeffs_bez3_bez2_dd_abs($q5);
    const q5 = get_coeffs_bez3_bez2_dd_tp(3, c0); // error free
    const $oj = $q5 * $z1;
    const oj = get_coeffs_bez3_bez2_dd_qmq(q5, z1);
    const _oj = get_coeffs_bez3_bez2_dd_abs($oj);
    const oj_ = _q5 * z1_ + 2 * get_coeffs_bez3_bez2_dd_abs($oj);
    const $q6 = 3 * d0;
    const _q6 = get_coeffs_bez3_bez2_dd_abs($q6);
    const q6 = get_coeffs_bez3_bez2_dd_tp(3, d0); // error free
    const $ok = $q6 * $z2;
    const ok = get_coeffs_bez3_bez2_dd_qmq(q6, z2);
    const _ok = get_coeffs_bez3_bez2_dd_abs($ok);
    const ok_ = _q6 * z2_ + 2 * get_coeffs_bez3_bez2_dd_abs($ok);
    const $ol = c0 * $z6;
    const ol = get_coeffs_bez3_bez2_dd_qmd(c0, z6);
    const ol_ = _c0 * z6_ + get_coeffs_bez3_bez2_dd_abs($ol);
    const $om = c0 * $z4;
    const om = get_coeffs_bez3_bez2_dd_qmd(c0, z4);
    const om_ = _c0 * z4_ + get_coeffs_bez3_bez2_dd_abs($om);
    const $on = d0 * $z3;
    const on = get_coeffs_bez3_bez2_dd_qmd(d0, z3);
    const on_ = _d0 * z3_ + get_coeffs_bez3_bez2_dd_abs($on);
    const $oo = d0 * $z5;
    const oo = get_coeffs_bez3_bez2_dd_qmd(d0, z5);
    const oo_ = _d0 * z5_ + get_coeffs_bez3_bez2_dd_abs($oo);
    const $op = $ol + $on;
    const op = get_coeffs_bez3_bez2_dd_qaq(ol, on);
    const _op = get_coeffs_bez3_bez2_dd_abs($op);
    const op_ = ol_ + on_ + _op;
    const $oq = $om + $oo;
    const oq = get_coeffs_bez3_bez2_dd_qaq(om, oo);
    const _oq = get_coeffs_bez3_bez2_dd_abs($oq);
    const oq_ = om_ + oo_ + _oq;
    const $or = $oj * $vₓₓₓ;
    const or = get_coeffs_bez3_bez2_dd_qmq(oj, vₓₓₓ);
    const or_ = oj_ * _vₓₓₓ + _oj * vₓₓₓ_ + 2 * get_coeffs_bez3_bez2_dd_abs($or);
    const $os = $ok * $vᵧᵧᵧ;
    const os = get_coeffs_bez3_bez2_dd_qmq(ok, vᵧᵧᵧ);
    const os_ = ok_ * _vᵧᵧᵧ + _ok * vᵧᵧᵧ_ + 2 * get_coeffs_bez3_bez2_dd_abs($os);
    const $ot = $op * $vₓₓᵧ;
    const ot = get_coeffs_bez3_bez2_dd_qmq(op, vₓₓᵧ);
    const ot_ = op_ * _vₓₓᵧ + _op * vₓₓᵧ_ + 2 * get_coeffs_bez3_bez2_dd_abs($ot);
    const $ou = $oq * $vₓᵧᵧ;
    const ou = get_coeffs_bez3_bez2_dd_qmq(oq, vₓᵧᵧ);
    const ou_ = oq_ * _vₓᵧᵧ + _oq * vₓᵧᵧ_ + 2 * get_coeffs_bez3_bez2_dd_abs($ou);
    const $ov = $z3 * $vₓₓ;
    const ov = get_coeffs_bez3_bez2_dd_qmq(z3, vₓₓ);
    const ov_ = z3_ * _vₓₓ + _z3 * vₓₓ_ + 2 * get_coeffs_bez3_bez2_dd_abs($ov);
    const $ow = $z4 * $vᵧᵧ;
    const ow = get_coeffs_bez3_bez2_dd_qmq(z4, vᵧᵧ);
    const ow_ = z4_ * _vᵧᵧ + _z4 * vᵧᵧ_ + 2 * get_coeffs_bez3_bez2_dd_abs($ow);
    const $ox = $ze * $vₓᵧ;
    const ox = get_coeffs_bez3_bez2_dd_qmq(ze, vₓᵧ);
    const ox_ = ze_ * _vₓᵧ + _ze * vₓᵧ_ + 2 * get_coeffs_bez3_bez2_dd_abs($ox);
    const $oy = $c2 * $vₓ;
    const oy = get_coeffs_bez3_bez2_dd_qmq(c2, vₓ);
    const oy_ = c2_ * _vₓ + _c2 * vₓ_ + 2 * get_coeffs_bez3_bez2_dd_abs($oy);
    const $oz = $d2 * $vᵧ;
    const oz = get_coeffs_bez3_bez2_dd_qmq(d2, vᵧ);
    const oz_ = d2_ * _vᵧ + _d2 * vᵧ_ + 2 * get_coeffs_bez3_bez2_dd_abs($oz);
    const $p1 = $or + $os;
    const p1 = get_coeffs_bez3_bez2_dd_qaq(or, os);
    const p1_ = or_ + os_ + get_coeffs_bez3_bez2_dd_abs($p1);
    const $p2 = $ot + $ou;
    const p2 = get_coeffs_bez3_bez2_dd_qaq(ot, ou);
    const p2_ = ot_ + ou_ + get_coeffs_bez3_bez2_dd_abs($p2);
    const $p3 = $ov + $ow;
    const p3 = get_coeffs_bez3_bez2_dd_qaq(ov, ow);
    const p3_ = ov_ + ow_ + get_coeffs_bez3_bez2_dd_abs($p3);
    const $p4 = $p1 + $p2;
    const p4 = get_coeffs_bez3_bez2_dd_qaq(p1, p2);
    const p4_ = p1_ + p2_ + get_coeffs_bez3_bez2_dd_abs($p4);
    const $p5 = $p3 + $ox;
    const p5 = get_coeffs_bez3_bez2_dd_qaq(p3, ox);
    const p5_ = p3_ + ox_ + get_coeffs_bez3_bez2_dd_abs($p5);
    const $p6 = $oy + $oz;
    const p6 = get_coeffs_bez3_bez2_dd_qaq(oy, oz);
    const p6_ = oy_ + oz_ + get_coeffs_bez3_bez2_dd_abs($p6);
    const $p7 = $p4 + $p5;
    const p7 = get_coeffs_bez3_bez2_dd_qaq(p4, p5);
    const p7_ = p4_ + p5_ + get_coeffs_bez3_bez2_dd_abs($p7);
    const $v2 = $p7 + $p6;
    const v2 = get_coeffs_bez3_bez2_dd_qaq(p7, p6);
    const v2_ = p7_ + p6_ + get_coeffs_bez3_bez2_dd_abs($v2);
    // 3*a0**2*a1*v_xxx + a0**2*b1*v_xxy + 2*a0*a1*b0*v_xxy + 2*a0*a1*v_xx + 2*a0*b0*b1*v_xyy + 
    // a0*b1*v_xy + a1*b0**2*v_xyy + a1*b0*v_xy + a1*v_x + 3*b0**2*b1*v_yyy + 2*b0*b1*v_yy + b1*v_y
    //const v1 =
    //    3*((c0*c0c1)*vₓₓₓ + (d0*d0d1)*vᵧᵧᵧ) +
    //    c0*(c0d1 + 2*c1d0)*vₓₓᵧ +
    //    d0*(c1d0 + 2*c0d1)*vₓᵧᵧ +
    //    2*(c0c1*vₓₓ + d0d1*vᵧᵧ) +
    //    c0d1*vₓᵧ + c1d0*vₓᵧ +
    //    c1*vₓ + d1*vᵧ;
    //const v1 =
    //    3*((c0*c0c1)*vₓₓₓ + (d0*d0d1)*vᵧᵧᵧ) +
    //    c0*zc*vₓₓᵧ +
    //    d0*zd*vₓᵧᵧ +
    //    2*(c0c1*vₓₓ + d0d1*vᵧᵧ) +
    //    c0d1*vₓᵧ + c1d0*vₓᵧ +
    //    c1*vₓ + d1*vᵧ;
    const $p8 = $q5 * $c0c1;
    const p8 = get_coeffs_bez3_bez2_dd_qmq(q5, c0c1);
    const _p8 = get_coeffs_bez3_bez2_dd_abs($p8);
    const p8_ = _q5 * c0c1_ + 2 * _p8;
    const $p9 = $q6 * $d0d1;
    const p9 = get_coeffs_bez3_bez2_dd_qmq(q6, d0d1);
    const _p9 = get_coeffs_bez3_bez2_dd_abs($p9);
    const p9_ = _q6 * d0d1_ + 2 * _p9;
    const $pa = c0 * $zc;
    const pa = get_coeffs_bez3_bez2_dd_qmd(c0, zc);
    const _pa = get_coeffs_bez3_bez2_dd_abs($pa);
    const pa_ = _c0 * zc_ + get_coeffs_bez3_bez2_dd_abs($pa);
    const $pb = d0 * $zd;
    const pb = get_coeffs_bez3_bez2_dd_qmd(d0, zd);
    const _pb = get_coeffs_bez3_bez2_dd_abs($pb);
    const pb_ = _d0 * zd_ + get_coeffs_bez3_bez2_dd_abs($pb);
    const $pc = $c0c1 * $vₓₓ;
    const pc = get_coeffs_bez3_bez2_dd_qmq(c0c1, vₓₓ);
    const pc_ = c0c1_ * _vₓₓ + _c0c1 * vₓₓ_ + 2 * get_coeffs_bez3_bez2_dd_abs($pc);
    const $pd = $d0d1 * $vᵧᵧ;
    const pd = get_coeffs_bez3_bez2_dd_qmq(d0d1, vᵧᵧ);
    const pd_ = d0d1_ * _vᵧᵧ + _d0d1 * vᵧᵧ_ + 2 * get_coeffs_bez3_bez2_dd_abs($pd);
    const $pe = $c0d1 * $vₓᵧ;
    const pe = get_coeffs_bez3_bez2_dd_qmq(c0d1, vₓᵧ);
    const pe_ = c0d1_ * _vₓᵧ + _c0d1 * vₓᵧ_ + 2 * get_coeffs_bez3_bez2_dd_abs($pe);
    const $pf = $c1d0 * $vₓᵧ;
    const pf = get_coeffs_bez3_bez2_dd_qmq(c1d0, vₓᵧ);
    const pf_ = c1d0_ * _vₓᵧ + _c1d0 * vₓᵧ_ + 2 * get_coeffs_bez3_bez2_dd_abs($pf);
    const $pg = 2 * ($pc + $pd);
    const pg = get_coeffs_bez3_bez2_dd_qm2(get_coeffs_bez3_bez2_dd_qaq(pc, pd));
    const pg_ = 2 * (pc_ + pd_) + get_coeffs_bez3_bez2_dd_abs($pg);
    const $ph = $pe + $pf;
    const ph = get_coeffs_bez3_bez2_dd_qaq(pe, pf);
    const ph_ = pe_ + pf_ + get_coeffs_bez3_bez2_dd_abs($ph);
    const $pi = $c1 * $vₓ;
    const pi = get_coeffs_bez3_bez2_dd_qmq(c1, vₓ);
    const pi_ = _c1 * vₓ_ + 2 * get_coeffs_bez3_bez2_dd_abs($pi);
    const $pj = $d1 * $vᵧ;
    const pj = get_coeffs_bez3_bez2_dd_qmq(d1, vᵧ);
    const pj_ = _d1 * vᵧ_ + 2 * get_coeffs_bez3_bez2_dd_abs($pj);
    const $pk = $p8 * $vₓₓₓ;
    const pk = get_coeffs_bez3_bez2_dd_qmq(p8, vₓₓₓ);
    const pk_ = p8_ * _vₓₓₓ + _p8 * vₓₓₓ_ + 2 * get_coeffs_bez3_bez2_dd_abs($pk);
    const $pl = $p9 * $vᵧᵧᵧ;
    const pl = get_coeffs_bez3_bez2_dd_qmq(p9, vᵧᵧᵧ);
    const pl_ = p9_ * _vᵧᵧᵧ + _p9 * vᵧᵧᵧ_ + 2 * get_coeffs_bez3_bez2_dd_abs($pl);
    const $pm = $pa * $vₓₓᵧ;
    const pm = get_coeffs_bez3_bez2_dd_qmq(pa, vₓₓᵧ);
    const pm_ = pa_ * _vₓₓᵧ + _pa * vₓₓᵧ_ + 2 * get_coeffs_bez3_bez2_dd_abs($pm);
    const $pn = $pb * $vₓᵧᵧ;
    const pn = get_coeffs_bez3_bez2_dd_qmq(pb, vₓᵧᵧ);
    const pn_ = pb_ * _vₓᵧᵧ + _pb * vₓᵧᵧ_ + 2 * get_coeffs_bez3_bez2_dd_abs($pn);
    const $po = $pk + $pl;
    const po = get_coeffs_bez3_bez2_dd_qaq(pk, pl);
    const po_ = pk_ + pl_ + get_coeffs_bez3_bez2_dd_abs($po);
    const $pp = $pm + $pn;
    const pp = get_coeffs_bez3_bez2_dd_qaq(pm, pn);
    const pp_ = pm_ + pn_ + get_coeffs_bez3_bez2_dd_abs($pp);
    const $pq = $po + $pp;
    const pq = get_coeffs_bez3_bez2_dd_qaq(po, pp);
    const pq_ = po_ + pp_ + get_coeffs_bez3_bez2_dd_abs($pq);
    const $pr = $pg + $ph;
    const pr = get_coeffs_bez3_bez2_dd_qaq(pg, ph);
    const pr_ = pg_ + ph_ + get_coeffs_bez3_bez2_dd_abs($pr);
    const $ps = $pi + $pj;
    const ps = get_coeffs_bez3_bez2_dd_qaq(pi, pj);
    const ps_ = pi_ + pj_ + get_coeffs_bez3_bez2_dd_abs($ps);
    const $pt = $pq + $pr;
    const pt = get_coeffs_bez3_bez2_dd_qaq(pq, pr);
    const pt_ = pq_ + pr_ + get_coeffs_bez3_bez2_dd_abs($pt);
    const $v1 = $pt + $ps;
    const v1 = get_coeffs_bez3_bez2_dd_qaq(pt, ps);
    const v1_ = pt_ + ps_ + get_coeffs_bez3_bez2_dd_abs($v1);
    // a0**3*v_xxx + a0**2*b0*v_xxy + a0**2*v_xx + a0*b0**2*v_xyy + a0*b0*v_xy + a0*v_x + 
    // b0**3*v_yyy + b0**2*v_yy + b0*v_y + v_0
    //const v0 =
    //    c0c0*(c0*vₓₓₓ + d0*vₓₓᵧ + vₓₓ) +
    //    d0d0*(c0*vₓᵧᵧ + d0*vᵧᵧᵧ + vᵧᵧ) +
    //    c0d0*vₓᵧ +
    //    c0*vₓ +
    //    d0*vᵧ +
    //    v;
    const $pu = c0 * $vₓₓₓ;
    const pu = get_coeffs_bez3_bez2_dd_qmd(c0, vₓₓₓ);
    const pu_ = _c0 * vₓₓₓ_ + get_coeffs_bez3_bez2_dd_abs($pu);
    const $pv = c0 * $vₓᵧᵧ;
    const pv = get_coeffs_bez3_bez2_dd_qmd(c0, vₓᵧᵧ);
    const pv_ = _c0 * vₓᵧᵧ_ + get_coeffs_bez3_bez2_dd_abs($pv);
    const $pw = d0 * $vₓₓᵧ;
    const pw = get_coeffs_bez3_bez2_dd_qmd(d0, vₓₓᵧ);
    const pw_ = _d0 * vₓₓᵧ_ + get_coeffs_bez3_bez2_dd_abs($pw);
    const $px = d0 * $vᵧᵧᵧ;
    const px = get_coeffs_bez3_bez2_dd_qmd(d0, vᵧᵧᵧ);
    const px_ = _d0 * vᵧᵧᵧ_ + get_coeffs_bez3_bez2_dd_abs($px);
    const $py = $pu + $pw;
    const py = get_coeffs_bez3_bez2_dd_qaq(pu, pw);
    const py_ = pu_ + pw_ + get_coeffs_bez3_bez2_dd_abs($py);
    const $pz = $pv + $px;
    const pz = get_coeffs_bez3_bez2_dd_qaq(pv, px);
    const pz_ = pv_ + px_ + get_coeffs_bez3_bez2_dd_abs($pz);
    const $u1 = $py + $vₓₓ;
    const u1 = get_coeffs_bez3_bez2_dd_qaq(py, vₓₓ);
    const _u1 = get_coeffs_bez3_bez2_dd_abs($u1);
    const u1_ = py_ + vₓₓ_ + _u1;
    const $u2 = $pz + $vᵧᵧ;
    const u2 = get_coeffs_bez3_bez2_dd_qaq(pz, vᵧᵧ);
    const _u2 = get_coeffs_bez3_bez2_dd_abs($u2);
    const u2_ = pz_ + vᵧᵧ_ + _u2;
    const $u3 = $c0c0 * $u1;
    const u3 = get_coeffs_bez3_bez2_dd_qmq(c0c0, u1);
    const u3_ = _c0c0 * u1_ + 2 * get_coeffs_bez3_bez2_dd_abs($u3);
    const $u4 = $d0d0 * $u2;
    const u4 = get_coeffs_bez3_bez2_dd_qmq(d0d0, u2);
    const u4_ = _d0d0 * u2_ + 2 * get_coeffs_bez3_bez2_dd_abs($u4);
    const $u5 = $c0d0 * $vₓᵧ;
    const u5 = get_coeffs_bez3_bez2_dd_qmq(c0d0, vₓᵧ);
    const u5_ = _c0d0 * vₓᵧ_ + 2 * get_coeffs_bez3_bez2_dd_abs($u5);
    const $u6 = c0 * $vₓ;
    const u6 = get_coeffs_bez3_bez2_dd_qmd(c0, vₓ);
    const u6_ = _c0 * vₓ_ + get_coeffs_bez3_bez2_dd_abs($u6);
    const $u7 = d0 * $vᵧ;
    const u7 = get_coeffs_bez3_bez2_dd_qmd(d0, vᵧ);
    const u7_ = _d0 * vᵧ_ + get_coeffs_bez3_bez2_dd_abs($u7);
    const $u8 = $u3 + $u4;
    const u8 = get_coeffs_bez3_bez2_dd_qaq(u3, u4);
    const u8_ = u3_ + u4_ + get_coeffs_bez3_bez2_dd_abs($u8);
    const $u9 = $u8 + $u5;
    const u9 = get_coeffs_bez3_bez2_dd_qaq(u8, u5);
    const u9_ = u8_ + u5_ + get_coeffs_bez3_bez2_dd_abs($u9);
    const $ua = $u6 + $u7;
    const ua = get_coeffs_bez3_bez2_dd_qaq(u6, u7);
    const ua_ = u6_ + u7_ + get_coeffs_bez3_bez2_dd_abs($ua);
    const $ub = $u9 + $ua;
    const ub = get_coeffs_bez3_bez2_dd_qaq(u9, ua);
    const ub_ = u9_ + ua_ + get_coeffs_bez3_bez2_dd_abs($ub);
    const $v0 = $ub + $v;
    const v0 = get_coeffs_bez3_bez2_dd_qaq(ub, v);
    const v0_ = ub_ + v_ + get_coeffs_bez3_bez2_dd_abs($v0);
    return {
        coeffs: [v6, v5, v4, v3, v2, v1, v0],
        errBound: [get_coeffs_bez3_bez2_dd_3 * v6_, get_coeffs_bez3_bez2_dd_3 * v5_, get_coeffs_bez3_bez2_dd_3 * v4_, get_coeffs_bez3_bez2_dd_3 * v3_, get_coeffs_bez3_bez2_dd_3 * v2_, get_coeffs_bez3_bez2_dd_3 * v1_, get_coeffs_bez3_bez2_dd_3 * v0_]
    };
}

//# sourceMappingURL=get-coeffs-bez3-bez2-dd.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/bezier-bezier-intersection/get-coefficients/double-double/get-coeffs-bez1-bez3-dd.js




// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗
const get_coeffs_bez1_bez3_dd_tp = (/* unused pure expression or super */ null && (twoProduct));
const get_coeffs_bez1_bez3_dd_qaq = node_ddAddDd;
const get_coeffs_bez1_bez3_dd_qmd = node_ddMultDouble2;
const get_coeffs_bez1_bez3_dd_qmq = node_ddMultDd;
const get_coeffs_bez1_bez3_dd_abs = Math.abs;
const get_coeffs_bez1_bez3_dd_3 = error_analysis_error_analysis_(3);
/**
 * Returns a polynomial in 1 variable (including coefficientwise error bound)
 * whose roots are the parameter values of the intersection points of an order
 * 1 and order 3 bezier curve (i.e. a line and a cubic bezier curve).
 *
 * The returned polynomial degree will be 3
 * (see [Bézout's theorem](https://en.wikipedia.org/wiki/B%C3%A9zout%27s_theorem))
 *
 * The returned polynomial coefficients are given densely as an array of
 * double-double precision floating point numbers from highest to lowest power,
 * e.g. `[[0,5],[0,-3],[0,0]]` represents the polynomial `5x^2 - 3x`.
 *
 * * intermediate calculations are done in double-double precision
 * * adapted from [Indrek Mandre](http://www.mare.ee/indrek/misc/2d.pdf)
 *
 * @param ps1
 * @param ps2
 *
 * @internal
 */
function getCoeffsBez1Bez3Dd(ps1, ps2) {
    const { coeffs: { vₓ, vᵧ, v }, errorBound: { v_ } } = getImplicitForm1DdWithRunningError(ps1);
    const { coeffs: [[c3, c2, c1, [, c0]], [d3, d2, d1, [, d0]]], errorBound: [[c3_, c2_, c1_], [d3_, d2_, d1_]] // c0 and d0 is error free
     } = toPowerBasis3DdWithRunningError(ps2);
    const _vₓ = get_coeffs_bez1_bez3_dd_abs(vₓ[1]);
    const _vᵧ = get_coeffs_bez1_bez3_dd_abs(vᵧ[1]);
    // a3*v_x + b3*v_y
    //const v3 = c3*vₓ + d3*vᵧ;
    const p1 = get_coeffs_bez1_bez3_dd_qmq(c3, vₓ); // vₓ is error free
    const p1_ = c3_ * _vₓ + 2 * get_coeffs_bez1_bez3_dd_abs(p1[1]);
    const p2 = get_coeffs_bez1_bez3_dd_qmq(d3, vᵧ); // vᵧ is error free
    const p2_ = d3_ * _vᵧ + 2 * get_coeffs_bez1_bez3_dd_abs(p2[1]);
    const v3 = get_coeffs_bez1_bez3_dd_qaq(p1, p2);
    const v3_ = p1_ + p2_ + get_coeffs_bez1_bez3_dd_abs(v3[1]);
    // a2*v_x + b2*v_y
    //const v2 = c2*vₓ + d2*vᵧ;
    const p3 = get_coeffs_bez1_bez3_dd_qmq(c2, vₓ); // vₓ is error free
    const p3_ = c2_ * _vₓ + 2 * get_coeffs_bez1_bez3_dd_abs(p3[1]);
    const p4 = get_coeffs_bez1_bez3_dd_qmq(d2, vᵧ); // vᵧ is error free
    const p4_ = d2_ * _vᵧ + 2 * get_coeffs_bez1_bez3_dd_abs(p4[1]);
    const v2 = get_coeffs_bez1_bez3_dd_qaq(p3, p4);
    const v2_ = p3_ + p4_ + get_coeffs_bez1_bez3_dd_abs(v2[1]);
    // a1*v_x + b1*v_y
    //const v1 = c1*vₓ + d1*vᵧ;
    const p5 = get_coeffs_bez1_bez3_dd_qmq(c1, vₓ); // vₓ is error free
    const p5_ = c1_ * _vₓ + 2 * get_coeffs_bez1_bez3_dd_abs(p5[1]);
    const p6 = get_coeffs_bez1_bez3_dd_qmq(d1, vᵧ); // vᵧ is error free
    const p6_ = d1_ * _vᵧ + 2 * get_coeffs_bez1_bez3_dd_abs(p6[1]);
    const v1 = get_coeffs_bez1_bez3_dd_qaq(p5, p6);
    const v1_ = p5_ + p6_ + get_coeffs_bez1_bez3_dd_abs(v1[1]);
    // a0*v_x + b0*v_y + v_0
    //const v0 = c0*vₓ + d0*vᵧ + v;
    const p7 = get_coeffs_bez1_bez3_dd_qmd(c0, vₓ); // vₓ is error free
    const p7_ = get_coeffs_bez1_bez3_dd_abs(p7[1]);
    const p8 = get_coeffs_bez1_bez3_dd_qmd(d0, vᵧ); // vᵧ is error free
    const p8_ = get_coeffs_bez1_bez3_dd_abs(p8[1]);
    const p9 = get_coeffs_bez1_bez3_dd_qaq(p7, p8);
    const p9_ = p7_ + p8_ + get_coeffs_bez1_bez3_dd_abs(p9[1]);
    const v0 = get_coeffs_bez1_bez3_dd_qaq(p9, v);
    const v0_ = p9_ + v_ + get_coeffs_bez1_bez3_dd_abs(v0[1]);
    return {
        coeffs: [v3, v2, v1, v0],
        errBound: [get_coeffs_bez1_bez3_dd_3 * v3_, get_coeffs_bez1_bez3_dd_3 * v2_, get_coeffs_bez1_bez3_dd_3 * v1_, get_coeffs_bez1_bez3_dd_3 * v0_]
    };
}

//# sourceMappingURL=get-coeffs-bez1-bez3-dd.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/bezier-bezier-intersection/get-coefficients/double-double/get-coeffs-bez2-bez3-dd.js




// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗
const get_coeffs_bez2_bez3_dd_tp = node_twoProduct;
const get_coeffs_bez2_bez3_dd_qm2 = node_ddMultBy2;
const get_coeffs_bez2_bez3_dd_qmd = node_ddMultDouble2;
const get_coeffs_bez2_bez3_dd_qmq = node_ddMultDd;
const get_coeffs_bez2_bez3_dd_qaq = node_ddAddDd;
const get_coeffs_bez2_bez3_dd_abs = Math.abs;
const get_coeffs_bez2_bez3_dd_3 = error_analysis_error_analysis_(3);
/**
 * Returns a polynomial in 1 variable (including coefficientwise error bound)
 * whose roots are the parameter values of the intersection points of an order
 * 2 and 3 bezier curve (i.e. a quadratic bezier curve and a cubic bezier curve).
 *
 * The returned polynomial degree will be 6
 * (see [Bézout's theorem](https://en.wikipedia.org/wiki/B%C3%A9zout%27s_theorem))
 *
 * The returned polynomial coefficients are given densely as an array of
 * double-double precision floating point numbers from highest to lowest power,
 * e.g. `[[0,5],[0,-3],[0,0]]` represents the polynomial `5x^2 - 3x`.
 *
 * * intermediate calculations are done in double-double precision
  * * adapted from [Indrek Mandre](http://www.mare.ee/indrek/misc/2d.pdf)
 *
 * @param ps1
 * @param ps2
 *
 * @internal
 */
function getCoeffsBez2Bez3Dd(ps1, ps2) {
    const { coeffs: { vₓₓ, vₓᵧ, vᵧᵧ, vₓ, vᵧ, v }, errorBound: { vₓₓ_, vₓᵧ_, vᵧᵧ_, vₓ_, vᵧ_, v_ } } = getImplicitForm2DdWithRunningError(ps1);
    const { coeffs: [[c3, c2, c1, [, c0]], [d3, d2, d1, [, d0]]], errorBound: [[c3_, c2_, c1_], [d3_, d2_, d1_]] // c0 and d0 is error free
     } = toPowerBasis3DdWithRunningError(ps2);
    const $vₓₓ = vₓₓ[1];
    const $vₓᵧ = vₓᵧ[1];
    const $vᵧᵧ = vᵧᵧ[1];
    const $vₓ = vₓ[1];
    const $vᵧ = vᵧ[1];
    const $v = v[1];
    const _vₓₓ = get_coeffs_bez2_bez3_dd_abs($vₓₓ);
    const _vₓᵧ = get_coeffs_bez2_bez3_dd_abs($vₓᵧ);
    const _vᵧᵧ = get_coeffs_bez2_bez3_dd_abs($vᵧᵧ);
    const _vₓ = get_coeffs_bez2_bez3_dd_abs($vₓ);
    const _vᵧ = get_coeffs_bez2_bez3_dd_abs($vᵧ);
    const $c1 = c1[1];
    const $c2 = c2[1];
    const $c3 = c3[1];
    const $d1 = d1[1];
    const $d2 = d2[1];
    const $d3 = d3[1];
    const _c0 = get_coeffs_bez2_bez3_dd_abs(c0);
    const _c1 = get_coeffs_bez2_bez3_dd_abs($c1);
    const _c2 = get_coeffs_bez2_bez3_dd_abs($c2);
    const _c3 = get_coeffs_bez2_bez3_dd_abs($c3);
    const _d0 = get_coeffs_bez2_bez3_dd_abs(d0);
    const _d1 = get_coeffs_bez2_bez3_dd_abs($d1);
    const _d2 = get_coeffs_bez2_bez3_dd_abs($d2);
    const _d3 = get_coeffs_bez2_bez3_dd_abs($d3);
    const $c0c0 = c0 * c0;
    const $c0c1 = c0 * $c1;
    const $c0c2 = c0 * $c2;
    const $c0c3 = c0 * $c3;
    const $c0d0 = c0 * d0;
    const $c0d1 = c0 * $d1;
    const $c0d2 = c0 * $d2;
    const $c0d3 = c0 * $d3;
    const $c1c1 = $c1 * $c1;
    const $c1c2 = $c1 * $c2;
    const $c1c3 = $c1 * $c3;
    const $c1d0 = $c1 * d0;
    const $c1d1 = $c1 * $d1;
    const $c1d2 = $c1 * $d2;
    const $c1d3 = $c1 * $d3;
    const $c2d1 = $c2 * $d1;
    const $c2c2 = $c2 * $c2;
    const $c2c3 = $c2 * $c3;
    const $c2d0 = $c2 * d0;
    const $c2d2 = $c2 * $d2;
    const $c2d3 = $c2 * $d3;
    const $c3c3 = $c3 * $c3;
    const $c3d0 = $c3 * d0;
    const $c3d1 = $c3 * $d1;
    const $c3d2 = $c3 * $d2;
    const $c3d3 = $c3 * $d3;
    const $d0d0 = d0 * d0;
    const $d0d1 = d0 * $d1;
    const $d0d2 = d0 * $d2;
    const $d0d3 = d0 * $d3;
    const $d1d1 = $d1 * $d1;
    const $d1d2 = $d1 * $d2;
    const $d3d3 = $d3 * $d3;
    const $d2d2 = $d2 * $d2;
    const $d2d3 = $d2 * $d3;
    const $d1d3 = $d1 * $d3;
    const c0c0 = get_coeffs_bez2_bez3_dd_tp(c0, c0); // error free
    const _c0c0 = get_coeffs_bez2_bez3_dd_abs($c0c0);
    const c0c1 = get_coeffs_bez2_bez3_dd_qmd(c0, c1);
    const _c0c1 = get_coeffs_bez2_bez3_dd_abs($c0c1);
    const c0c1_ = _c0 * c1_ + _c0c1;
    const c0c2 = get_coeffs_bez2_bez3_dd_qmd(c0, c2);
    const c0c2_ = _c0 * c2_ + get_coeffs_bez2_bez3_dd_abs($c0c2);
    const c0c3 = get_coeffs_bez2_bez3_dd_qmd(c0, c3);
    const c0c3_ = _c0 * c3_ + get_coeffs_bez2_bez3_dd_abs($c0c3);
    const c0d0 = get_coeffs_bez2_bez3_dd_tp(c0, d0); // error free
    const _c0d0 = get_coeffs_bez2_bez3_dd_abs($c0d0);
    const c0d1 = get_coeffs_bez2_bez3_dd_qmd(c0, d1);
    const c0d1_ = _c0 * d1_ + get_coeffs_bez2_bez3_dd_abs($c0d1);
    const c0d2 = get_coeffs_bez2_bez3_dd_qmd(c0, d2);
    const c0d2_ = _c0 * d2_ + get_coeffs_bez2_bez3_dd_abs($c0d2);
    const c0d3 = get_coeffs_bez2_bez3_dd_qmd(c0, d3);
    const c0d3_ = _c0 * d3_ + get_coeffs_bez2_bez3_dd_abs($c0d3);
    const c1c1 = get_coeffs_bez2_bez3_dd_qmq(c1, c1);
    const c1c1_ = c1_ * _c1 + _c1 * c1_ + 2 * get_coeffs_bez2_bez3_dd_abs($c1c1);
    const c1c2 = get_coeffs_bez2_bez3_dd_qmq(c1, c2);
    const c1c2_ = c1_ * _c2 + _c1 * c2_ + 2 * get_coeffs_bez2_bez3_dd_abs($c1c2);
    const c1c3 = get_coeffs_bez2_bez3_dd_qmq(c1, c3);
    const c1c3_ = c1_ * _c3 + _c1 * c3_ + 2 * get_coeffs_bez2_bez3_dd_abs($c1c3);
    const c1d0 = get_coeffs_bez2_bez3_dd_qmd(d0, c1);
    const c1d0_ = _d0 * c1_ + get_coeffs_bez2_bez3_dd_abs($c1d0);
    const c1d1 = get_coeffs_bez2_bez3_dd_qmq(c1, d1);
    const c1d1_ = c1_ * _d1 + _c1 * d1_ + 2 * get_coeffs_bez2_bez3_dd_abs($c1d1);
    const c1d2 = get_coeffs_bez2_bez3_dd_qmq(c1, d2);
    const c1d2_ = c1_ * _d2 + _c1 * d2_ + 2 * get_coeffs_bez2_bez3_dd_abs($c1d2);
    const c1d3 = get_coeffs_bez2_bez3_dd_qmq(c1, d3);
    const c1d3_ = c1_ * _d3 + _c1 * d3_ + 2 * get_coeffs_bez2_bez3_dd_abs($c1d3);
    const c2d1 = get_coeffs_bez2_bez3_dd_qmq(c2, d1);
    const c2d1_ = c2_ * _d1 + _c2 * d1_ + 2 * get_coeffs_bez2_bez3_dd_abs($c2d1);
    const c2c2 = get_coeffs_bez2_bez3_dd_qmq(c2, c2);
    const c2c2_ = c2_ * _c2 + _c2 * c2_ + 2 * get_coeffs_bez2_bez3_dd_abs($c2c2);
    const c2c3 = get_coeffs_bez2_bez3_dd_qmq(c2, c3);
    const _c2c3 = get_coeffs_bez2_bez3_dd_abs($c2c3);
    const c2c3_ = c2_ * _c3 + _c2 * c3_ + 2 * _c2c3;
    const c2d0 = get_coeffs_bez2_bez3_dd_qmd(d0, c2);
    const c2d0_ = _d0 * c2_ + get_coeffs_bez2_bez3_dd_abs($c2d0);
    const c2d2 = get_coeffs_bez2_bez3_dd_qmq(c2, d2);
    const c2d2_ = c2_ * _d2 + _c2 * d2_ + 2 * get_coeffs_bez2_bez3_dd_abs($c2d2);
    const c2d3 = get_coeffs_bez2_bez3_dd_qmq(c2, d3);
    const c2d3_ = c2_ * _d3 + _c2 * d3_ + 2 * get_coeffs_bez2_bez3_dd_abs($c2d3);
    const c3c3 = get_coeffs_bez2_bez3_dd_qmq(c3, c3);
    const _c3c3 = get_coeffs_bez2_bez3_dd_abs($c3c3);
    const c3c3_ = c3_ * _c3 + _c3 * c3_ + 2 * _c3c3;
    const c3d0 = get_coeffs_bez2_bez3_dd_qmd(d0, c3);
    const c3d0_ = _d0 * c3_ + get_coeffs_bez2_bez3_dd_abs($c3d0);
    const c3d1 = get_coeffs_bez2_bez3_dd_qmq(c3, d1);
    const c3d1_ = c3_ * _d1 + _c3 * d1_ + 2 * get_coeffs_bez2_bez3_dd_abs($c3d1);
    const c3d2 = get_coeffs_bez2_bez3_dd_qmq(c3, d2);
    const c3d2_ = c3_ * _d2 + _c3 * d2_ + 2 * get_coeffs_bez2_bez3_dd_abs($c3d2);
    const c3d3 = get_coeffs_bez2_bez3_dd_qmq(c3, d3);
    const _c3d3 = get_coeffs_bez2_bez3_dd_abs($c3d3);
    const c3d3_ = c3_ * _d3 + _c3 * d3_ + 2 * _c3d3;
    const d0d0 = get_coeffs_bez2_bez3_dd_tp(d0, d0); // error free
    const _d0d0 = get_coeffs_bez2_bez3_dd_abs($d0d0);
    const d0d1 = get_coeffs_bez2_bez3_dd_qmd(d0, d1);
    const _d0d1 = get_coeffs_bez2_bez3_dd_abs($d0d1);
    const d0d1_ = _d0 * d1_ + _d0d1;
    const d0d2 = get_coeffs_bez2_bez3_dd_qmd(d0, d2);
    const d0d2_ = _d0 * d2_ + get_coeffs_bez2_bez3_dd_abs($d0d2);
    const d0d3 = get_coeffs_bez2_bez3_dd_qmd(d0, d3);
    const d0d3_ = _d0 * d3_ + get_coeffs_bez2_bez3_dd_abs($d0d3);
    const d1d1 = get_coeffs_bez2_bez3_dd_qmq(d1, d1);
    const d1d1_ = d1_ * _d1 + _d1 * d1_ + 2 * get_coeffs_bez2_bez3_dd_abs($d1d1);
    const d1d2 = get_coeffs_bez2_bez3_dd_qmq(d1, d2);
    const d1d2_ = d1_ * _d2 + _d1 * d2_ + 2 * get_coeffs_bez2_bez3_dd_abs($d1d2);
    const d3d3 = get_coeffs_bez2_bez3_dd_qmq(d3, d3);
    const _d3d3 = get_coeffs_bez2_bez3_dd_abs($d3d3);
    const d3d3_ = d3_ * _d3 + _d3 * d3_ + 2 * _d3d3;
    const d2d2 = get_coeffs_bez2_bez3_dd_qmq(d2, d2);
    const d2d2_ = d2_ * _d2 + _d2 * d2_ + 2 * get_coeffs_bez2_bez3_dd_abs($d2d2);
    const d2d3 = get_coeffs_bez2_bez3_dd_qmq(d2, d3);
    const _d2d3 = get_coeffs_bez2_bez3_dd_abs($d2d3);
    const d2d3_ = d2_ * _d3 + _d2 * d3_ + 2 * _d2d3;
    const d1d3 = get_coeffs_bez2_bez3_dd_qmq(d1, d3);
    const d1d3_ = d1_ * _d3 + _d1 * d3_ + 2 * get_coeffs_bez2_bez3_dd_abs($d1d3);
    // a3**2*vₓₓ + a3*b3*vₓᵧ + b3**2*vᵧᵧ
    //const v6 =
    //    c3c3*vₓₓ +
    //    c3d3*vₓᵧ +
    //    d3d3*vᵧᵧ;
    const $p1 = $c3c3 * $vₓₓ;
    const p1 = get_coeffs_bez2_bez3_dd_qmq(c3c3, vₓₓ);
    const p1_ = c3c3_ * _vₓₓ + _c3c3 * vₓₓ_ + 2 * get_coeffs_bez2_bez3_dd_abs($p1);
    const $p2 = $c3d3 * $vₓᵧ;
    const p2 = get_coeffs_bez2_bez3_dd_qmq(c3d3, vₓᵧ);
    const p2_ = c3d3_ * _vₓᵧ + _c3d3 * vₓᵧ_ + 2 * get_coeffs_bez2_bez3_dd_abs($p2);
    const $p3 = $d3d3 * $vᵧᵧ;
    const p3 = get_coeffs_bez2_bez3_dd_qmq(d3d3, vᵧᵧ);
    const p3_ = d3d3_ * _vᵧᵧ + _d3d3 * vᵧᵧ_ + 2 * get_coeffs_bez2_bez3_dd_abs($p3);
    const $p4 = $p1 + $p2;
    const p4 = get_coeffs_bez2_bez3_dd_qaq(p1, p2);
    const p4_ = p1_ + p2_ + get_coeffs_bez2_bez3_dd_abs($p4);
    const $v6 = $p4 + $p3;
    const v6 = get_coeffs_bez2_bez3_dd_qaq(p4, p3);
    const v6_ = p4_ + p3_ + get_coeffs_bez2_bez3_dd_abs($v6);
    // 2*a2*a3*vₓₓ + a2*b3*vₓᵧ + a3*b2*vₓᵧ + 2*b2*b3*vᵧᵧ
    //const v5 =
    //    2*(c2c3*vₓₓ + d2d3*vᵧᵧ) +
    //    vₓᵧ*(c2d3 + c3d2);
    const $p5 = $c2c3 * $vₓₓ;
    const p5 = get_coeffs_bez2_bez3_dd_qmq(c2c3, vₓₓ);
    const p5_ = c2c3_ * _vₓₓ + _c2c3 * vₓₓ_ + 2 * get_coeffs_bez2_bez3_dd_abs($p5);
    const $p6 = $d2d3 * $vᵧᵧ;
    const p6 = get_coeffs_bez2_bez3_dd_qmq(d2d3, vᵧᵧ);
    const p6_ = d2d3_ * _vᵧᵧ + _d2d3 * vᵧᵧ_ + 2 * get_coeffs_bez2_bez3_dd_abs($p6);
    const $p7 = $p5 + $p6;
    const p7 = get_coeffs_bez2_bez3_dd_qaq(p5, p6);
    const p7_ = p5_ + p6_ + get_coeffs_bez2_bez3_dd_abs($p7);
    const $p8 = $c2d3 + $c3d2;
    const p8 = get_coeffs_bez2_bez3_dd_qaq(c2d3, c3d2);
    const _p8 = get_coeffs_bez2_bez3_dd_abs($p8);
    const p8_ = c2d3_ + c3d2_ + _p8;
    const $p9 = $p8 * $vₓᵧ;
    const p9 = get_coeffs_bez2_bez3_dd_qmq(p8, vₓᵧ);
    const p9_ = p8_ * _vₓᵧ + _p8 * vₓᵧ_ + 2 * get_coeffs_bez2_bez3_dd_abs($p9);
    const $v5 = 2 * $p7 + $p9;
    const v5 = get_coeffs_bez2_bez3_dd_qaq(get_coeffs_bez2_bez3_dd_qm2(p7), p9);
    const v5_ = 2 * p7_ + p9_ + get_coeffs_bez2_bez3_dd_abs($v5);
    // 2*a1*a3*vₓₓ + a1*b3*vₓᵧ + a2**2*vₓₓ + a2*b2*vₓᵧ + a3*b1*vₓᵧ + 2*b1*b3*vᵧᵧ + b2**2*vᵧᵧ
    //const v4 =
    //    (2*c1c3 + c2c2)*vₓₓ +
    //    (2*d1d3 + d2d2)*vᵧᵧ +
    //    (c1d3 + c2d2 + c3d1)*vₓᵧ;
    const $pa = 2 * $c1c3 + $c2c2;
    const pa = get_coeffs_bez2_bez3_dd_qaq(get_coeffs_bez2_bez3_dd_qm2(c1c3), c2c2);
    const _pa = get_coeffs_bez2_bez3_dd_abs($pa);
    const pa_ = 2 * c1c3_ + c2c2_ + get_coeffs_bez2_bez3_dd_abs($pa);
    const $pb = 2 * $d1d3 + $d2d2;
    const pb = get_coeffs_bez2_bez3_dd_qaq(get_coeffs_bez2_bez3_dd_qm2(d1d3), d2d2);
    const _pb = get_coeffs_bez2_bez3_dd_abs($pb);
    const pb_ = 2 * d1d3_ + d2d2_ + get_coeffs_bez2_bez3_dd_abs($pb);
    const $pc = $c1d3 + $c2d2;
    const pc = get_coeffs_bez2_bez3_dd_qaq(c1d3, c2d2);
    const pc_ = c1d3_ + c2d2_ + get_coeffs_bez2_bez3_dd_abs($pc);
    const $pd = $pc + $c3d1;
    const pd = get_coeffs_bez2_bez3_dd_qaq(pc, c3d1);
    const _pd = get_coeffs_bez2_bez3_dd_abs($pd);
    const pd_ = pc_ + c3d1_ + _pd;
    const $pe = $pa * $vₓₓ;
    const pe = get_coeffs_bez2_bez3_dd_qmq(pa, vₓₓ);
    const pe_ = pa_ * _vₓₓ + _pa * vₓₓ_ + 2 * get_coeffs_bez2_bez3_dd_abs($pe);
    const $pf = $pb * $vᵧᵧ;
    const pf = get_coeffs_bez2_bez3_dd_qmq(pb, vᵧᵧ);
    const pf_ = pb_ * _vᵧᵧ + _pb * vᵧᵧ_ + 2 * get_coeffs_bez2_bez3_dd_abs($pf);
    const $pg = $pe + $pf;
    const pg = get_coeffs_bez2_bez3_dd_qaq(pe, pf);
    const pg_ = pe_ + pf_ + get_coeffs_bez2_bez3_dd_abs($pg);
    const $rp = $pd * $vₓᵧ;
    const rp = get_coeffs_bez2_bez3_dd_qmq(pd, vₓᵧ);
    const rp_ = pd_ * _vₓᵧ + _pd * vₓᵧ_ + 2 * get_coeffs_bez2_bez3_dd_abs($rp);
    const $v4 = $pg + $rp;
    const v4 = get_coeffs_bez2_bez3_dd_qaq(pg, rp);
    const v4_ = pg_ + rp_ + get_coeffs_bez2_bez3_dd_abs($v4);
    // 2*a0*a3*vₓₓ + a0*b3*vₓᵧ + 2*a1*a2*vₓₓ + 
    // a1*b2*vₓᵧ + a2*b1*vₓᵧ + a3*b0*vₓᵧ + 
    // a3*v_x + 2*b0*b3*vᵧᵧ + 2*b1*b2*vᵧᵧ + b3*v_y
    //const v3 =
    //    2*((c0c3 + c1c2)*vₓₓ + (d0d3 + d1d2)*vᵧᵧ) +
    //    (c0d3 + c1d2 + c2d1 + c3d0)*vₓᵧ +
    //    c3*vₓ +
    //    d3*vᵧ;
    const $ph = $c0c3 + $c1c2;
    const ph = get_coeffs_bez2_bez3_dd_qaq(c0c3, c1c2);
    const _ph = get_coeffs_bez2_bez3_dd_abs($ph);
    const ph_ = c0c3_ + c1c2_ + _ph;
    const $pi = $d0d3 + $d1d2;
    const pi = get_coeffs_bez2_bez3_dd_qaq(d0d3, d1d2);
    const _pi = get_coeffs_bez2_bez3_dd_abs($pi);
    const pi_ = d0d3_ + d1d2_ + _pi;
    const $pj = $c0d3 + $c1d2;
    const pj = get_coeffs_bez2_bez3_dd_qaq(c0d3, c1d2);
    const pj_ = c0d3_ + c1d2_ + get_coeffs_bez2_bez3_dd_abs($pj);
    const $pk = $c2d1 + $c3d0;
    const pk = get_coeffs_bez2_bez3_dd_qaq(c2d1, c3d0);
    const pk_ = c2d1_ + c3d0_ + get_coeffs_bez2_bez3_dd_abs($pk);
    const $pl = $pj + $pk;
    const pl = get_coeffs_bez2_bez3_dd_qaq(pj, pk);
    const _pl = get_coeffs_bez2_bez3_dd_abs($pl);
    const pl_ = pj_ + pk_ + _pl;
    const $pm = $ph * $vₓₓ;
    const pm = get_coeffs_bez2_bez3_dd_qmq(ph, vₓₓ);
    const pm_ = ph_ * _vₓₓ + _ph * vₓₓ_ + 2 * get_coeffs_bez2_bez3_dd_abs($pm);
    const $pn = $pi * $vᵧᵧ;
    const pn = get_coeffs_bez2_bez3_dd_qmq(pi, vᵧᵧ);
    const pn_ = pi_ * _vᵧᵧ + _pi * vᵧᵧ_ + 2 * get_coeffs_bez2_bez3_dd_abs($pn);
    const $po = 2 * ($pm + $pn);
    const po = get_coeffs_bez2_bez3_dd_qm2(get_coeffs_bez2_bez3_dd_qaq(pm, pn));
    const po_ = 2 * (pm_ + pn_) + get_coeffs_bez2_bez3_dd_abs($po);
    const $pp = $pl * $vₓᵧ;
    const pp = get_coeffs_bez2_bez3_dd_qmq(pl, vₓᵧ);
    const pp_ = pl_ * _vₓᵧ + _pl * vₓᵧ_ + 2 * get_coeffs_bez2_bez3_dd_abs($pp);
    const $rn = $c3 * $vₓ;
    const rn = get_coeffs_bez2_bez3_dd_qmq(c3, vₓ);
    const rn_ = c3_ * _vₓ + _c3 * vₓ_ + 2 * get_coeffs_bez2_bez3_dd_abs($rn);
    const $ro = $d3 * $vᵧ;
    const ro = get_coeffs_bez2_bez3_dd_qmq(d3, vᵧ);
    const ro_ = d3_ * _vᵧ + _d3 * vᵧ_ + 2 * get_coeffs_bez2_bez3_dd_abs($ro);
    const $pq = $rn + $ro;
    const pq = get_coeffs_bez2_bez3_dd_qaq(rn, ro);
    const pq_ = rn_ + ro_ + get_coeffs_bez2_bez3_dd_abs($pq);
    const $pr = $po + $pp;
    const pr = get_coeffs_bez2_bez3_dd_qaq(po, pp);
    const pr_ = po_ + pp_ + get_coeffs_bez2_bez3_dd_abs($pr);
    const $v3 = $pr + $pq;
    const v3 = get_coeffs_bez2_bez3_dd_qaq(pr, pq);
    const v3_ = pr_ + pq_ + get_coeffs_bez2_bez3_dd_abs($v3);
    // 2*a0*a2*vₓₓ + a0*b2*vₓᵧ + a1**2*vₓₓ + 
    // a1*b1*vₓᵧ + a2*b0*vₓᵧ + a2*v_x + 
    // 2*b0*b2*vᵧᵧ + b1**2*vᵧᵧ + b2*v_y
    //const v2 =
    //    (2*c0c2 + c1c1)*vₓₓ +
    //    (2*d0d2 + d1d1)*vᵧᵧ +
    //    (c0d2 + c1d1 + c2d0)*vₓᵧ +
    //    c2*vₓ +
    //    d2*vᵧ;
    const $ps = 2 * $c0c2 + $c1c1;
    const ps = get_coeffs_bez2_bez3_dd_qaq(get_coeffs_bez2_bez3_dd_qm2(c0c2), c1c1);
    const _ps = get_coeffs_bez2_bez3_dd_abs($ps);
    const ps_ = 2 * c0c2_ + c1c1_ + _ps;
    const $pt = 2 * $d0d2 + $d1d1;
    const pt = get_coeffs_bez2_bez3_dd_qaq(get_coeffs_bez2_bez3_dd_qm2(d0d2), d1d1);
    const _pt = get_coeffs_bez2_bez3_dd_abs($pt);
    const pt_ = 2 * d0d2_ + d1d1_ + _pt;
    const $pu = $c0d2 + $c1d1;
    const pu = get_coeffs_bez2_bez3_dd_qaq(c0d2, c1d1);
    const pu_ = c0d2_ + c1d1_ + get_coeffs_bez2_bez3_dd_abs($pu);
    const $pv = $pu + $c2d0;
    const pv = get_coeffs_bez2_bez3_dd_qaq(pu, c2d0);
    const _pv = get_coeffs_bez2_bez3_dd_abs($pv);
    const pv_ = pu_ + c2d0_ + _pv;
    const $pw = $ps * $vₓₓ;
    const pw = get_coeffs_bez2_bez3_dd_qmq(ps, vₓₓ);
    const pw_ = ps_ * _vₓₓ + _ps * vₓₓ_ + 2 * get_coeffs_bez2_bez3_dd_abs($pw);
    const $px = $pt * $vᵧᵧ;
    const px = get_coeffs_bez2_bez3_dd_qmq(pt, vᵧᵧ);
    const px_ = pt_ * _vᵧᵧ + _pt * vᵧᵧ_ + 2 * get_coeffs_bez2_bez3_dd_abs($px);
    const $py = $pv * $vₓᵧ;
    const py = get_coeffs_bez2_bez3_dd_qmq(pv, vₓᵧ);
    const py_ = pv_ * _vₓᵧ + _pv * vₓᵧ_ + 2 * get_coeffs_bez2_bez3_dd_abs($py);
    const $pz = $pw + $px;
    const pz = get_coeffs_bez2_bez3_dd_qaq(pw, px);
    const pz_ = pw_ + px_ + get_coeffs_bez2_bez3_dd_abs($pz);
    const $r1 = $pz + $py;
    const r1 = get_coeffs_bez2_bez3_dd_qaq(pz, py);
    const r1_ = pz_ + py_ + get_coeffs_bez2_bez3_dd_abs($r1);
    const $r2 = $c2 * $vₓ;
    const r2 = get_coeffs_bez2_bez3_dd_qmq(c2, vₓ);
    const r2_ = c2_ * _vₓ + _c2 * vₓ_ + 2 * get_coeffs_bez2_bez3_dd_abs($r2);
    const $r3 = $d2 * $vᵧ;
    const r3 = get_coeffs_bez2_bez3_dd_qmq(d2, vᵧ);
    const r3_ = d2_ * _vᵧ + _d2 * vᵧ_ + 2 * get_coeffs_bez2_bez3_dd_abs($r3);
    const $r4 = $r2 + $r3;
    const r4 = get_coeffs_bez2_bez3_dd_qaq(r2, r3);
    const r4_ = r2_ + r3_ + get_coeffs_bez2_bez3_dd_abs($r4);
    const $v2 = $r1 + $r4;
    const v2 = get_coeffs_bez2_bez3_dd_qaq(r1, r4);
    const v2_ = r1_ + r4_ + get_coeffs_bez2_bez3_dd_abs($v2);
    // 2*a0*a1*vₓₓ + a0*b1*vₓᵧ + a1*b0*vₓᵧ + a1*v_x + 2*b0*b1*vᵧᵧ + b1*v_y
    //const v1 =
    //    2*(c0c1*vₓₓ + d0d1*vᵧᵧ) +
    //    (c0d1 + c1d0)*vₓᵧ +
    //    c1*vₓ +
    //    d1*vᵧ;
    const $r5 = $c0c1 * $vₓₓ;
    const r5 = get_coeffs_bez2_bez3_dd_qmq(c0c1, vₓₓ);
    const r5_ = c0c1_ * _vₓₓ + _c0c1 * vₓₓ_ + 2 * get_coeffs_bez2_bez3_dd_abs($r5);
    const $r6 = $d0d1 * $vᵧᵧ;
    const r6 = get_coeffs_bez2_bez3_dd_qmq(d0d1, vᵧᵧ);
    const r6_ = d0d1_ * _vᵧᵧ + _d0d1 * vᵧᵧ_ + 2 * get_coeffs_bez2_bez3_dd_abs($r6);
    const $r7 = $c0d1 + $c1d0;
    const r7 = get_coeffs_bez2_bez3_dd_qaq(c0d1, c1d0);
    const _r7 = get_coeffs_bez2_bez3_dd_abs($r7);
    const r7_ = c0d1_ + c1d0_ + _r7;
    const $r8 = $r7 * $vₓᵧ;
    const r8 = get_coeffs_bez2_bez3_dd_qmq(r7, vₓᵧ);
    const r8_ = r7_ * _vₓᵧ + _r7 * vₓᵧ_ + 2 * get_coeffs_bez2_bez3_dd_abs($r8);
    const $r9 = 2 * ($r5 + $r6);
    const r9 = get_coeffs_bez2_bez3_dd_qm2(get_coeffs_bez2_bez3_dd_qaq(r5, r6));
    const r9_ = 2 * (r5_ + r6_) + get_coeffs_bez2_bez3_dd_abs($r9);
    const $ra = $r9 + $r8;
    const ra = get_coeffs_bez2_bez3_dd_qaq(r9, r8);
    const ra_ = r9_ + r8_ + get_coeffs_bez2_bez3_dd_abs($ra);
    const $rb = $c1 * $vₓ;
    const rb = get_coeffs_bez2_bez3_dd_qmq(c1, vₓ);
    const rb_ = c1_ * _vₓ + _c1 * vₓ_ + 2 * get_coeffs_bez2_bez3_dd_abs($rb);
    const $rc = $d1 * $vᵧ;
    const rc = get_coeffs_bez2_bez3_dd_qmq(d1, vᵧ);
    const rc_ = d1_ * _vᵧ + _d1 * vᵧ_ + 2 * get_coeffs_bez2_bez3_dd_abs($rc);
    const $rd = $rb + $rc;
    const rd = get_coeffs_bez2_bez3_dd_qaq(rb, rc);
    const rd_ = rb_ + rc_ + get_coeffs_bez2_bez3_dd_abs($rd);
    const $v1 = $ra + $rd;
    const v1 = get_coeffs_bez2_bez3_dd_qaq(ra, rd);
    const v1_ = ra_ + rd_ + get_coeffs_bez2_bez3_dd_abs($v1);
    // a0**2*vₓₓ + a0*b0*vₓᵧ + a0*v_x + b0**2*vᵧᵧ + b0*v_y + v_0
    //const v0 =
    //    c0c0*vₓₓ +
    //    c0d0*vₓᵧ +
    //    d0d0*vᵧᵧ +
    //    c0*vₓ +
    //    d0*vᵧ +
    //    v;
    const $re = $c0c0 * $vₓₓ;
    const re = get_coeffs_bez2_bez3_dd_qmq(c0c0, vₓₓ);
    const re_ = _c0c0 * vₓₓ_ + 2 * get_coeffs_bez2_bez3_dd_abs($re);
    const $rf = $c0d0 * $vₓᵧ;
    const rf = get_coeffs_bez2_bez3_dd_qmq(c0d0, vₓᵧ);
    const rf_ = _c0d0 * vₓᵧ_ + 2 * get_coeffs_bez2_bez3_dd_abs($rf);
    const $rg = $d0d0 * $vᵧᵧ;
    const rg = get_coeffs_bez2_bez3_dd_qmq(d0d0, vᵧᵧ);
    const rg_ = _d0d0 * vᵧᵧ_ + 2 * get_coeffs_bez2_bez3_dd_abs($rg);
    const $rh = c0 * $vₓ;
    const rh = get_coeffs_bez2_bez3_dd_qmd(c0, vₓ);
    const rh_ = _c0 * vₓ_ + get_coeffs_bez2_bez3_dd_abs($rh);
    const $ri = d0 * $vᵧ;
    const ri = get_coeffs_bez2_bez3_dd_qmd(d0, vᵧ);
    const ri_ = _d0 * vᵧ_ + get_coeffs_bez2_bez3_dd_abs($ri);
    const $rj = $re + $rf;
    const rj = get_coeffs_bez2_bez3_dd_qaq(re, rf);
    const rj_ = re_ + rf_ + get_coeffs_bez2_bez3_dd_abs($rj);
    const $rk = $rj + $rg;
    const rk = get_coeffs_bez2_bez3_dd_qaq(rj, rg);
    const rk_ = rj_ + rg_ + get_coeffs_bez2_bez3_dd_abs($rk);
    const $rl = $rh + $ri;
    const rl = get_coeffs_bez2_bez3_dd_qaq(rh, ri);
    const rl_ = rh_ + ri_ + get_coeffs_bez2_bez3_dd_abs($rl);
    const $rm = $rk + $rl;
    const rm = get_coeffs_bez2_bez3_dd_qaq(rk, rl);
    const rm_ = rk_ + rl_ + get_coeffs_bez2_bez3_dd_abs($rm);
    const $v0 = $rm + $v;
    const v0 = get_coeffs_bez2_bez3_dd_qaq(rm, v);
    const v0_ = rm_ + v_ + get_coeffs_bez2_bez3_dd_abs($v0);
    return {
        coeffs: [v6, v5, v4, v3, v2, v1, v0],
        errBound: [get_coeffs_bez2_bez3_dd_3 * v6_, get_coeffs_bez2_bez3_dd_3 * v5_, get_coeffs_bez2_bez3_dd_3 * v4_, get_coeffs_bez2_bez3_dd_3 * v3_, get_coeffs_bez2_bez3_dd_3 * v2_, get_coeffs_bez2_bez3_dd_3 * v1_, get_coeffs_bez2_bez3_dd_3 * v0_]
    };
}

//# sourceMappingURL=get-coeffs-bez2-bez3-dd.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/bezier-bezier-intersection/get-coefficients/double-double/get-coeffs-bez3-bez3-dd.js




// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗
const get_coeffs_bez3_bez3_dd_tp = node_twoProduct;
const get_coeffs_bez3_bez3_dd_qm2 = node_ddMultBy2;
const get_coeffs_bez3_bez3_dd_qmd = node_ddMultDouble2;
const get_coeffs_bez3_bez3_dd_qmq = node_ddMultDd;
const get_coeffs_bez3_bez3_dd_qaq = node_ddAddDd;
const get_coeffs_bez3_bez3_dd_abs = Math.abs;
const get_coeffs_bez3_bez3_dd_3 = error_analysis_error_analysis_(3);
/**
 * Returns a polynomial in 1 variable (including coefficientwise error bound)
 * whose roots are the parameter values of the intersection points of 2 order
 * 3 bezier curves (i.e. 2 cubic bezier curves).
 *
 * The returned polynomial degree will be 9
 * (see [Bézout's theorem](https://en.wikipedia.org/wiki/B%C3%A9zout%27s_theorem))
 *
 * The returned polynomial coefficients are given densely as an array of
 * double-double precision floating point numbers from highest to lowest power,
 * e.g. `[[0,5],[0,-3],[0,0]]` represents the polynomial `5x^2 - 3x`.
 *
 * * intermediate calculations are done in double-double precision
 * * adapted from [Indrek Mandre](http://www.mare.ee/indrek/misc/2d.pdf)
 *
 * @param ps1
 * @param ps2
 *
 * @internal
 */
function getCoeffsBez3Bez3Dd(ps1, ps2) {
    //--------------------------------------------------------------------------
    // `var` -> a variable
    // `$var` -> the double precision approximation to `var`
    // `_var` -> the absolute value of $var (a prefix underscore on a variable means absolute value)
    // `var_` -> the error in var (a postfix underscore means error bound but should still be multiplied by 3*γ²)
    // `_var_` -> means both absolute value and absolute error bound
    // recall: `a*b`, where both `a` and `b` have errors |a| and |b| we get for the
    //   * error bound of (a*b) === a_|b| + |a|b_ + |a*b|   (when either of a and b is double)
    //   * error bound of (a*b) === a_|b| + |a|b_ + 2|a*b|  (when both a and b is double-double)
    //   * error bound of (a+b) === a_ + b_ + |a+b|         (when a and/or b is double or double-double)
    // * the returned errors need to be multiplied by 3γ² to get the true error
    // * can use either `$var` or `var[var.length-1]` (the approx value) in error calculations
    //   due to multiplication by 3*γ² and not 3*u²
    //--------------------------------------------------------------------------
    // examples: (all?)
    // ----------------
    // let qmd === ddMultDouble2, etc.
    //
    // ---------------
    // 1. double-double X by double
    // ---------------
    // qmd(a,b);  // both `a` and `b` is error-free
    // use: error bound of (a*b) === a_|b| + |a|b_ + |a*b| (by definition)
    //                           === 0|b| + |a|0 + |a*b|
    //                           === |a*b|
    //
    // ---------------
    // 2a. double-double +/- double-double
    // ---------------
    // qdq(a,b);  // error in a === |a|, thus call the error _a_, same with b
    // use: error bound of (a+b) === a_ + b_ + |a+b| (by definition)
    //                           === _a_ + _b_ + |a+b|
    //
    // ---------------
    // 2b. double-double +/- double-double
    // ---------------
    // qaq(a,b);  // error in a === 2|a|, thus the error is 2*_a, same with b
    // use: error bound of (a+b) === a_ + b_ + |a+b| (by definition)
    //                           === 2*_a + 2*_b + |a+b|
    //                           === 2*(_a + _b) + |a+b| OR
    //                           === a_ + b_ + |a+b|
    //
    // ---------------
    // 3a. double-double X double-double
    // ---------------
    // qmq(a,b);  // both `a` and `b` error-free
    // use: error bound of (a*b) === a_|b| + |a|b_ + |a*b| (by definition)
    //                           === 0|b| + |a|0 + 2|a*b|
    //                           === 2|a*b| 
    //
    // ---------------
    // 3b. double-double X double-double
    // ---------------
    // qmq(a,b);  // both `a` and `b` not error-free
    // use: error bound of (a*b) === a_|b| + |a|b_ + 2|a*b| (by definition)
    //
    // ---------------
    // 3b. double-double X double-double
    // ---------------
    // qmq(a,b);  // both `a` not error-free and `b` error-free
    // use: error bound of (a*b) === a_|b| + |a|b_ + 2|a*b| (by definition)
    //                           === a_|b| + 2|a*b| 
    //
    // ---------------
    // 4a. double-double +/- double
    // ---------------
    // qad(a,b);  // both `a` and `b` error-free
    // use: error bound of (a+b) === a_ + b_ + |a+b| (by definition)
    //                           === 0 + 0 + |a+b|
    //                           === |a+b| 
    //--------------------------------------------------------------------------
    const { coeffs: { vₓₓₓ, vₓₓᵧ, vₓᵧᵧ, vᵧᵧᵧ, vₓₓ, vₓᵧ, vᵧᵧ, vₓ, vᵧ, v }, errorBound: { vₓₓₓ_, vₓₓᵧ_, vₓᵧᵧ_, vᵧᵧᵧ_, vₓₓ_, vₓᵧ_, vᵧᵧ_, vₓ_, vᵧ_, v_ } } = getImplicitForm3DdWithRunningError(ps1);
    const { coeffs: [[c3, c2, c1, [, c0]], [d3, d2, d1, [, d0]]], errorBound: [[c3_, c2_, c1_], [d3_, d2_, d1_]] // c0 and d0 is error free
     } = toPowerBasis3DdWithRunningError(ps2);
    const $vₓₓₓ = vₓₓₓ[1];
    const $vₓₓᵧ = vₓₓᵧ[1];
    const $vₓᵧᵧ = vₓᵧᵧ[1];
    const $vᵧᵧᵧ = vᵧᵧᵧ[1];
    const $vₓₓ = vₓₓ[1];
    const $vₓᵧ = vₓᵧ[1];
    const $vᵧᵧ = vᵧᵧ[1];
    const $vₓ = vₓ[1];
    const $vᵧ = vᵧ[1];
    const $v = v[1];
    const _vₓₓₓ = get_coeffs_bez3_bez3_dd_abs($vₓₓₓ);
    const _vₓₓᵧ = get_coeffs_bez3_bez3_dd_abs($vₓₓᵧ);
    const _vₓᵧᵧ = get_coeffs_bez3_bez3_dd_abs($vₓᵧᵧ);
    const _vᵧᵧᵧ = get_coeffs_bez3_bez3_dd_abs($vᵧᵧᵧ);
    const _vₓₓ = get_coeffs_bez3_bez3_dd_abs($vₓₓ);
    const _vₓᵧ = get_coeffs_bez3_bez3_dd_abs($vₓᵧ);
    const _vᵧᵧ = get_coeffs_bez3_bez3_dd_abs($vᵧᵧ);
    const _vₓ = get_coeffs_bez3_bez3_dd_abs($vₓ);
    const _vᵧ = get_coeffs_bez3_bez3_dd_abs($vᵧ);
    const _v = get_coeffs_bez3_bez3_dd_abs($v);
    const $c1 = c1[1];
    const $c2 = c2[1];
    const $c3 = c3[1];
    const $d1 = d1[1];
    const $d2 = d2[1];
    const $d3 = d3[1];
    const _c0 = get_coeffs_bez3_bez3_dd_abs(c0);
    const _c1 = get_coeffs_bez3_bez3_dd_abs($c1);
    const _c2 = get_coeffs_bez3_bez3_dd_abs($c2);
    const _c3 = get_coeffs_bez3_bez3_dd_abs($c3);
    const _d0 = get_coeffs_bez3_bez3_dd_abs(d0);
    const _d1 = get_coeffs_bez3_bez3_dd_abs($d1);
    const _d2 = get_coeffs_bez3_bez3_dd_abs($d2);
    const _d3 = get_coeffs_bez3_bez3_dd_abs($d3);
    const $c0c0 = c0 * c0;
    const $c0c1 = c0 * $c1;
    const $c0c2 = c0 * $c2;
    const $c0c3 = c0 * $c3;
    const $c0d0 = c0 * d0;
    const $c0d1 = c0 * $d1;
    const $c0d2 = c0 * $d2;
    const $c0d3 = c0 * $d3;
    const $c1c1 = $c1 * $c1;
    const $c1c2 = $c1 * $c2;
    const $c1c3 = $c1 * $c3;
    const $c1d0 = $c1 * d0;
    const $c1d1 = $c1 * $d1;
    const $c1d2 = $c1 * $d2;
    const $c1d3 = $c1 * $d3;
    const $c2d1 = $c2 * $d1;
    const $c2c2 = $c2 * $c2;
    const $c2c3 = $c2 * $c3;
    const $c2d0 = $c2 * d0;
    const $c2d2 = $c2 * $d2;
    const $c2d3 = $c2 * $d3;
    const $c3c3 = $c3 * $c3;
    const $c3d0 = $c3 * d0;
    const $c3d1 = $c3 * $d1;
    const $c3d2 = $c3 * $d2;
    const $c3d3 = $c3 * $d3;
    const $d0d0 = d0 * d0;
    const $d0d1 = d0 * $d1;
    const $d0d2 = d0 * $d2;
    const $d0d3 = d0 * $d3;
    const $d1d1 = $d1 * $d1;
    const $d1d2 = $d1 * $d2;
    const $d3d3 = $d3 * $d3;
    const $d2d2 = $d2 * $d2;
    const $d2d3 = $d2 * $d3;
    const $d1d3 = $d1 * $d3;
    const c0c0 = get_coeffs_bez3_bez3_dd_tp(c0, c0); // error free
    const c0c1 = get_coeffs_bez3_bez3_dd_qmd(c0, c1);
    const c0c1_ = _c0 * c1_ + get_coeffs_bez3_bez3_dd_abs($c0c1);
    const c0c2 = get_coeffs_bez3_bez3_dd_qmd(c0, c2);
    const c0c2_ = _c0 * c2_ + get_coeffs_bez3_bez3_dd_abs($c0c2);
    const c0c3 = get_coeffs_bez3_bez3_dd_qmd(c0, c3);
    const c0c3_ = _c0 * c3_ + get_coeffs_bez3_bez3_dd_abs($c0c3);
    const c0d0 = get_coeffs_bez3_bez3_dd_tp(c0, d0); // error free
    const c0d1 = get_coeffs_bez3_bez3_dd_qmd(c0, d1);
    const c0d1_ = _c0 * d1_ + get_coeffs_bez3_bez3_dd_abs($c0d1);
    const c0d2 = get_coeffs_bez3_bez3_dd_qmd(c0, d2);
    const c0d2_ = _c0 * d2_ + get_coeffs_bez3_bez3_dd_abs($c0d2);
    const c0d3 = get_coeffs_bez3_bez3_dd_qmd(c0, d3);
    const c0d3_ = _c0 * d3_ + get_coeffs_bez3_bez3_dd_abs($c0d3);
    const c1c1 = get_coeffs_bez3_bez3_dd_qmq(c1, c1);
    const _c1c1 = get_coeffs_bez3_bez3_dd_abs($c1c1);
    const c1c1_ = 2 * (c1_ * _c1 + _c1c1);
    const c1c2 = get_coeffs_bez3_bez3_dd_qmq(c1, c2);
    const c1c2_ = c1_ * _c2 + _c1 * c2_ + 2 * get_coeffs_bez3_bez3_dd_abs($c1c2);
    const c1c3 = get_coeffs_bez3_bez3_dd_qmq(c1, c3);
    const c1c3_ = c1_ * _c3 + _c1 * c3_ + 2 * get_coeffs_bez3_bez3_dd_abs($c1c3);
    const c1d0 = get_coeffs_bez3_bez3_dd_qmd(d0, c1);
    const c1d0_ = _d0 * c1_ + get_coeffs_bez3_bez3_dd_abs($c1d0);
    const c1d1 = get_coeffs_bez3_bez3_dd_qmq(c1, d1);
    const c1d1_ = c1_ * _d1 + _c1 * d1_ + 2 * get_coeffs_bez3_bez3_dd_abs($c1d1);
    const c1d2 = get_coeffs_bez3_bez3_dd_qmq(c1, d2);
    const c1d2_ = c1_ * _d2 + _c1 * d2_ + 2 * get_coeffs_bez3_bez3_dd_abs($c1d2);
    const c1d3 = get_coeffs_bez3_bez3_dd_qmq(c1, d3);
    const c1d3_ = c1_ * _d3 + _c1 * d3_ + 2 * get_coeffs_bez3_bez3_dd_abs($c1d3);
    const c2d1 = get_coeffs_bez3_bez3_dd_qmq(c2, d1);
    const c2d1_ = c2_ * _d1 + _c2 * d1_ + 2 * get_coeffs_bez3_bez3_dd_abs($c2d1);
    const c2c2 = get_coeffs_bez3_bez3_dd_qmq(c2, c2);
    const _c2c2 = get_coeffs_bez3_bez3_dd_abs($c2c2);
    const c2c2_ = 2 * (c2_ * _c2 + _c2c2);
    const c2c3 = get_coeffs_bez3_bez3_dd_qmq(c2, c3);
    const c2c3_ = c2_ * _c3 + _c2 * c3_ + 2 * get_coeffs_bez3_bez3_dd_abs($c2c3);
    const c2d0 = get_coeffs_bez3_bez3_dd_qmd(d0, c2);
    const c2d0_ = _d0 * c2_ + get_coeffs_bez3_bez3_dd_abs($c2d0);
    const c2d2 = get_coeffs_bez3_bez3_dd_qmq(c2, d2);
    const c2d2_ = c2_ * _d2 + _c2 * d2_ + 2 * get_coeffs_bez3_bez3_dd_abs($c2d2);
    const c2d3 = get_coeffs_bez3_bez3_dd_qmq(c2, d3);
    const c2d3_ = c2_ * _d3 + _c2 * d3_ + 2 * get_coeffs_bez3_bez3_dd_abs($c2d3);
    const c3c3 = get_coeffs_bez3_bez3_dd_qmq(c3, c3);
    const c3c3_ = 2 * (c3_ * _c3 + get_coeffs_bez3_bez3_dd_abs($c3c3));
    const c3d0 = get_coeffs_bez3_bez3_dd_qmd(d0, c3);
    const c3d0_ = _d0 * c3_ + get_coeffs_bez3_bez3_dd_abs($c3d0);
    const c3d1 = get_coeffs_bez3_bez3_dd_qmq(c3, d1);
    const c3d1_ = c3_ * _d1 + _c3 * d1_ + 2 * get_coeffs_bez3_bez3_dd_abs($c3d1);
    const c3d2 = get_coeffs_bez3_bez3_dd_qmq(c3, d2);
    const _c3d2 = get_coeffs_bez3_bez3_dd_abs($c3d2);
    const c3d2_ = c3_ * _d2 + _c3 * d2_ + 2 * _c3d2;
    const c3d3 = get_coeffs_bez3_bez3_dd_qmq(c3, d3);
    const c3d3_ = c3_ * _d3 + _c3 * d3_ + 2 * get_coeffs_bez3_bez3_dd_abs($c3d3);
    const d0d0 = get_coeffs_bez3_bez3_dd_tp(d0, d0); // error free
    const d0d1 = get_coeffs_bez3_bez3_dd_qmd(d0, d1);
    const d0d1_ = _d0 * d1_ + get_coeffs_bez3_bez3_dd_abs($d0d1);
    const d0d2 = get_coeffs_bez3_bez3_dd_qmd(d0, d2);
    const d0d2_ = _d0 * d2_ + get_coeffs_bez3_bez3_dd_abs($d0d2);
    const d0d3 = get_coeffs_bez3_bez3_dd_qmd(d0, d3);
    const d0d3_ = _d0 * d3_ + get_coeffs_bez3_bez3_dd_abs($d0d3);
    const d1d1 = get_coeffs_bez3_bez3_dd_qmq(d1, d1);
    const _d1d1 = get_coeffs_bez3_bez3_dd_abs($d1d1);
    const d1d1_ = 2 * (d1_ * _d1 + _d1d1);
    const d1d2 = get_coeffs_bez3_bez3_dd_qmq(d1, d2);
    const d1d2_ = d1_ * _d2 + _d1 * d2_ + 2 * get_coeffs_bez3_bez3_dd_abs($d1d2);
    const d3d3 = get_coeffs_bez3_bez3_dd_qmq(d3, d3);
    const d3d3_ = 2 * (d3_ * _d3 + get_coeffs_bez3_bez3_dd_abs($d3d3));
    const d2d2 = get_coeffs_bez3_bez3_dd_qmq(d2, d2);
    const _d2d2 = get_coeffs_bez3_bez3_dd_abs($d2d2);
    const d2d2_ = 2 * (d2_ * _d2 + _d2d2);
    const d2d3 = get_coeffs_bez3_bez3_dd_qmq(d2, d3);
    const d2d3_ = d2_ * _d3 + _d2 * d3_ + 2 * get_coeffs_bez3_bez3_dd_abs($d2d3);
    const d1d3 = get_coeffs_bez3_bez3_dd_qmq(d1, d3);
    const _d1d3 = get_coeffs_bez3_bez3_dd_abs($d1d3);
    const d1d3_ = d1_ * _d3 + _d1 * d3_ + 2 * _d1d3;
    const _c0c0 = get_coeffs_bez3_bez3_dd_abs($c0c0);
    const _c0c1 = get_coeffs_bez3_bez3_dd_abs($c0c1);
    const _c2c3 = get_coeffs_bez3_bez3_dd_abs($c2c3);
    const _c3c3 = get_coeffs_bez3_bez3_dd_abs($c3c3);
    const _c3d3 = get_coeffs_bez3_bez3_dd_abs($c3d3);
    const _c0d0 = get_coeffs_bez3_bez3_dd_abs($c0d0);
    const _d0d0 = get_coeffs_bez3_bez3_dd_abs($d0d0);
    const _d0d1 = get_coeffs_bez3_bez3_dd_abs($d0d1);
    const _d2d3 = get_coeffs_bez3_bez3_dd_abs($d2d3);
    const _d3d3 = get_coeffs_bez3_bez3_dd_abs($d3d3);
    //-----------------------
    //const v9 =  
    //    (c3*c3c3)*vₓₓₓ + 
    //    (c3*d3d3)*vₓᵧᵧ + 
    //    (d3*c3c3)*vₓₓᵧ + 
    //    (d3*d3d3)*vᵧᵧᵧ;
    //-----------------------
    const $g1 = $c3 * $c3c3;
    const g1 = get_coeffs_bez3_bez3_dd_qmq(c3, c3c3);
    const _g1 = _c3 * _c3c3;
    const g1_ = c3_ * _c3c3 + _c3 * c3c3_ + 2 * _g1;
    const $g2 = $c3 * $d3d3;
    const g2 = get_coeffs_bez3_bez3_dd_qmq(c3, d3d3);
    const _g2 = _c3 * _d3d3;
    const g2_ = c3_ * _d3d3 + _c3 * d3d3_ + 2 * _g2;
    const $g3 = $d3 * $c3c3;
    const g3 = get_coeffs_bez3_bez3_dd_qmq(d3, c3c3);
    const _g3 = _d3 * _c3c3;
    const g3_ = d3_ * _c3c3 + _d3 * c3c3_ + 2 * _g3;
    const $g4 = $d3 * $d3d3;
    const g4 = get_coeffs_bez3_bez3_dd_qmq(d3, d3d3);
    const _g4 = _d3 * _d3d3;
    const g4_ = d3_ * _d3d3 + _d3 * d3d3_ + 2 * _g4;
    const $g5 = $g1 * $vₓₓₓ;
    const g5 = get_coeffs_bez3_bez3_dd_qmq(g1, vₓₓₓ);
    const g5_ = g1_ * _vₓₓₓ + _g1 * vₓₓₓ_ + 2 * get_coeffs_bez3_bez3_dd_abs($g5);
    const $g6 = $g2 * $vₓᵧᵧ;
    const g6 = get_coeffs_bez3_bez3_dd_qmq(g2, vₓᵧᵧ);
    const g6_ = g2_ * _vₓᵧᵧ + _g2 * vₓᵧᵧ_ + 2 * get_coeffs_bez3_bez3_dd_abs($g6);
    const $g7 = $g3 * $vₓₓᵧ;
    const g7 = get_coeffs_bez3_bez3_dd_qmq(g3, vₓₓᵧ);
    const g7_ = g3_ * _vₓₓᵧ + _g3 * vₓₓᵧ_ + 2 * get_coeffs_bez3_bez3_dd_abs($g7);
    const $g8 = $g4 * $vᵧᵧᵧ;
    const g8 = get_coeffs_bez3_bez3_dd_qmq(g4, vᵧᵧᵧ);
    const g8_ = g4_ * _vᵧᵧᵧ + _g4 * vᵧᵧᵧ_ + 2 * get_coeffs_bez3_bez3_dd_abs($g8);
    const $g9 = $g5 + $g6;
    const g9 = get_coeffs_bez3_bez3_dd_qaq(g5, g6);
    const g9_ = g5_ + g6_ + get_coeffs_bez3_bez3_dd_abs($g9);
    const $ga = $g7 + $g8;
    const ga = get_coeffs_bez3_bez3_dd_qaq(g7, g8);
    const ga_ = g7_ + g8_ + get_coeffs_bez3_bez3_dd_abs($ga);
    const $v9 = $g9 + $ga;
    const v9 = get_coeffs_bez3_bez3_dd_qaq(g9, ga);
    const v9_ = g9_ + ga_ + get_coeffs_bez3_bez3_dd_abs($v9);
    //-----------------------
    //const v8 =  
    //    2*c2*c3d3*vₓₓᵧ + 
    //    2*c3*d2d3*vₓᵧᵧ + 
    //      c2*d3d3*vₓᵧᵧ + 
    //      d2*c3c3*vₓₓᵧ + 
    //    3*c2*c3c3*vₓₓₓ + 
    //    3*d2*d3d3*vᵧᵧᵧ;  
    //-----------------------
    const $w1 = 2 * $c2d3 + $c3d2;
    const _w1 = get_coeffs_bez3_bez3_dd_abs($w1);
    const w1 = get_coeffs_bez3_bez3_dd_qaq(get_coeffs_bez3_bez3_dd_qm2(c2d3), c3d2);
    const w1_ = 2 * c2d3_ + c3d2_ + _w1;
    const $w2 = 2 * $c3d2 + $c2d3;
    const _w2 = get_coeffs_bez3_bez3_dd_abs($w2);
    const w2 = get_coeffs_bez3_bez3_dd_qaq(get_coeffs_bez3_bez3_dd_qm2(c3d2), c2d3);
    const w2_ = 2 * c3d2_ + c2d3_ + get_coeffs_bez3_bez3_dd_abs($w2);
    const $w3 = $c3 * $w1;
    const _w3 = get_coeffs_bez3_bez3_dd_abs($w3);
    const w3 = get_coeffs_bez3_bez3_dd_qmq(c3, w1);
    const w3_ = c3_ * _w1 + _c3 * w1_ + 2 * _w3;
    const $w4 = $d3 * $w2;
    const _w4 = get_coeffs_bez3_bez3_dd_abs($w4);
    const w4 = get_coeffs_bez3_bez3_dd_qmq(d3, w2);
    const w4_ = d3_ * _w2 + _d3 * w2_ + 2 * _w4;
    const $w5 = $c2 * $c3c3;
    const _w5 = get_coeffs_bez3_bez3_dd_abs($w5);
    const w5 = get_coeffs_bez3_bez3_dd_qmq(c2, c3c3);
    const w5_ = c2_ * _c3c3 + _c2 * c3c3_ + 2 * _w5;
    const $w6 = $d2 * $d3d3;
    const _w6 = get_coeffs_bez3_bez3_dd_abs($w6);
    const w6 = get_coeffs_bez3_bez3_dd_qmq(d2, d3d3);
    const w6_ = d2_ * _d3d3 + _d2 * d3d3_ + 2 * _w6;
    const $w7 = $vₓₓₓ * $w5;
    const w7 = get_coeffs_bez3_bez3_dd_qmq(vₓₓₓ, w5);
    const w7_ = w5_ * _vₓₓₓ + _vₓₓₓ * w5_ + 2 * get_coeffs_bez3_bez3_dd_abs($w7);
    const $u1 = $vᵧᵧᵧ * $w6;
    const u1 = get_coeffs_bez3_bez3_dd_qmq(vᵧᵧᵧ, w6);
    const u1_ = w6_ * _vᵧᵧᵧ + _vᵧᵧᵧ * w6_ + 2 * get_coeffs_bez3_bez3_dd_abs($u1);
    const $u2 = $vₓₓᵧ * $w3;
    const u2 = get_coeffs_bez3_bez3_dd_qmq(vₓₓᵧ, w3);
    const u2_ = w3_ * _vₓₓᵧ + _vₓₓᵧ * w3_ + 2 * get_coeffs_bez3_bez3_dd_abs($u2);
    const $u3 = $vₓᵧᵧ * $w4;
    const u3 = get_coeffs_bez3_bez3_dd_qmq(vₓᵧᵧ, w4);
    const u3_ = w4_ * _vₓᵧᵧ + _vₓᵧᵧ * w4_ + 2 * get_coeffs_bez3_bez3_dd_abs($u3);
    const $u4 = $u2 + $u3;
    const u4 = get_coeffs_bez3_bez3_dd_qaq(u2, u3);
    const u4_ = u2_ + u3_ + get_coeffs_bez3_bez3_dd_abs($u4);
    const $u5 = 3 * ($w7 + $u1);
    const u5 = get_coeffs_bez3_bez3_dd_qmd(3, get_coeffs_bez3_bez3_dd_qaq(w7, u1));
    const u5_ = 3 * (w7_ + u1_) + 2 * get_coeffs_bez3_bez3_dd_abs($u5);
    const $v8 = $u4 + $u5;
    const v8 = get_coeffs_bez3_bez3_dd_qaq(u4, u5);
    const v8_ = u4_ + u5_ + get_coeffs_bez3_bez3_dd_abs($v8);
    //-----------------------
    //const v7 =  
    //    vₓₓᵧ*(2*(c1*c3d3 + c2*c3d2) + (d1*c3c3 + d3*c2c2)) +
    //    vₓᵧᵧ*(2*(c2*d2d3 + c3*d1d3) + (c1*d3d3 + d2*c3d2)) +
    //    vₓₓₓ*3*c3*(c1c3 + c2c2) +
    //    vᵧᵧᵧ*3*d3*(d1d3 + d2d2);
    //-----------------------
    const $o1 = $c1 * $c3d3;
    const o1 = get_coeffs_bez3_bez3_dd_qmq(c1, c3d3);
    const o1_ = c1_ * _c3d3 + _c1 * c3d3_ + 2 * get_coeffs_bez3_bez3_dd_abs($o1);
    const $o2 = $d1 * $c3c3;
    const o2 = get_coeffs_bez3_bez3_dd_qmq(d1, c3c3);
    const o2_ = d1_ * _c3c3 + _d1 * c3c3_ + 2 * get_coeffs_bez3_bez3_dd_abs($o2);
    const $o3 = $c2 * $d2d3;
    const o3 = get_coeffs_bez3_bez3_dd_qmq(c2, d2d3);
    const o3_ = c2_ * _d2d3 + _c2 * d2d3_ + 2 * get_coeffs_bez3_bez3_dd_abs($o3);
    const $o4 = $c1 * $d3d3;
    const o4 = get_coeffs_bez3_bez3_dd_qmq(c1, d3d3);
    const o4_ = c1_ * _d3d3 + _c1 * d3d3_ + 2 * get_coeffs_bez3_bez3_dd_abs($o4);
    const $o5 = $c2 * $c3d2;
    const o5 = get_coeffs_bez3_bez3_dd_qmq(c2, c3d2);
    const o5_ = c2_ * _c3d2 + _c2 * c3d2_ + 2 * get_coeffs_bez3_bez3_dd_abs($o5);
    const $o6 = $d3 * $c2c2;
    const o6 = get_coeffs_bez3_bez3_dd_qmq(d3, c2c2);
    const o6_ = d3_ * _c2c2 + _d3 * c2c2_ + 2 * get_coeffs_bez3_bez3_dd_abs($o6);
    const $o7 = $c3 * $d1d3;
    const o7 = get_coeffs_bez3_bez3_dd_qmq(c3, d1d3);
    const o7_ = c3_ * _d1d3 + _c3 * d1d3_ + 2 * get_coeffs_bez3_bez3_dd_abs($o7);
    const $o8 = $d2 * $c3d2;
    const o8 = get_coeffs_bez3_bez3_dd_qmq(d2, c3d2);
    const o8_ = d2_ * _c3d2 + _d2 * c3d2_ + 2 * get_coeffs_bez3_bez3_dd_abs($o8);
    const $w8 = $o1 + $o5;
    const w8 = get_coeffs_bez3_bez3_dd_qaq(o1, o5);
    const w8_ = o1_ + o5_ + get_coeffs_bez3_bez3_dd_abs($w8);
    const $w9 = $o2 + $o6;
    const w9 = get_coeffs_bez3_bez3_dd_qaq(o2, o6);
    const w9_ = o2_ + o6_ + get_coeffs_bez3_bez3_dd_abs($w9);
    const $wa = $o3 + $o7;
    const wa = get_coeffs_bez3_bez3_dd_qaq(o3, o7);
    const wa_ = o3_ + o7_ + get_coeffs_bez3_bez3_dd_abs($wa);
    const $wb = $o4 + $o8;
    const wb = get_coeffs_bez3_bez3_dd_qaq(o4, o8);
    const wb_ = o4_ + o8_ + get_coeffs_bez3_bez3_dd_abs($wb);
    const $wc = $c1c3 + $c2c2;
    const wc = get_coeffs_bez3_bez3_dd_qaq(c1c3, c2c2);
    const _wc = get_coeffs_bez3_bez3_dd_abs($wc);
    const wc_ = c1c3_ + c2c2_ + _wc;
    const $wd = $d1d3 + $d2d2;
    const _wd = get_coeffs_bez3_bez3_dd_abs($wd);
    const wd = get_coeffs_bez3_bez3_dd_qaq(d1d3, d2d2);
    const wd_ = d1d3_ + d2d2_ + _wd;
    const $we = 2 * $w8 + $w9;
    const we = get_coeffs_bez3_bez3_dd_qaq(get_coeffs_bez3_bez3_dd_qm2(w8), w9);
    const _we = get_coeffs_bez3_bez3_dd_abs($we);
    const we_ = 2 * w8_ + w9_ + _we;
    const $wf = 2 * $wa + $wb;
    const wf = get_coeffs_bez3_bez3_dd_qaq(get_coeffs_bez3_bez3_dd_qm2(wa), wb);
    const _wf = get_coeffs_bez3_bez3_dd_abs($wf);
    const wf_ = 2 * wa_ + wb_ + _wf;
    const $wg = $vₓₓᵧ * $we;
    const wg = get_coeffs_bez3_bez3_dd_qmq(vₓₓᵧ, we);
    const wg_ = vₓₓᵧ_ * _we + _vₓₓᵧ * we_ + 2 * get_coeffs_bez3_bez3_dd_abs($wg);
    const $wh = $vₓᵧᵧ * $wf;
    const wh = get_coeffs_bez3_bez3_dd_qmq(vₓᵧᵧ, wf);
    const wh_ = vₓᵧᵧ_ * _wf + _vₓᵧᵧ * wf_ + 2 * get_coeffs_bez3_bez3_dd_abs($wh);
    const $wi = $c3 * $wc;
    const wi = get_coeffs_bez3_bez3_dd_qmq(c3, wc);
    const _wi = get_coeffs_bez3_bez3_dd_abs($wi);
    const wi_ = c3_ * _wc + _c3 * wc_ + 2 * _wi;
    const $wj = $d3 * $wd;
    const wj = get_coeffs_bez3_bez3_dd_qmq(d3, wd);
    const _wj = get_coeffs_bez3_bez3_dd_abs($wj);
    const wj_ = d3_ * _wd + _d3 * wd_ + 2 * _wj;
    const $wk = $vₓₓₓ * $wi;
    const wk = get_coeffs_bez3_bez3_dd_qmq(vₓₓₓ, wi);
    const wk_ = vₓₓₓ_ * _wi + _vₓₓₓ * wi_ + 2 * get_coeffs_bez3_bez3_dd_abs($wk);
    const $wl = $vᵧᵧᵧ * $wj;
    const wl = get_coeffs_bez3_bez3_dd_qmq(vᵧᵧᵧ, wj);
    const wl_ = vᵧᵧᵧ_ * _wj + _vᵧᵧᵧ * wj_ + 2 * get_coeffs_bez3_bez3_dd_abs($wl);
    const $wm = $wg + $wh;
    const wm = get_coeffs_bez3_bez3_dd_qaq(wg, wh);
    const wm_ = wg_ + wh_ + get_coeffs_bez3_bez3_dd_abs($wm);
    const $wn = 3 * ($wk + $wl);
    const wn = get_coeffs_bez3_bez3_dd_qmd(3, get_coeffs_bez3_bez3_dd_qaq(wk, wl));
    const wn_ = 3 * (wk_ + wl_) + 2 * get_coeffs_bez3_bez3_dd_abs($wn);
    const $v7 = $wm + $wn;
    const v7 = get_coeffs_bez3_bez3_dd_qaq(wm, wn);
    const v7_ = wm_ + wn_ + get_coeffs_bez3_bez3_dd_abs($v7);
    //const v6 =
    //    vₓₓᵧ*(d2*c2c2 + 2*c1*(c2d3 + c3d2) + c3*(2*c0d3 + 2*c2d1 + c3d0)) +
    //    vₓᵧᵧ*(c2*d2d2 + 2*d1*(c2d3 + c3d2) + d3*(2*c1d2 + 2*c3d0 + c0d3)) +
    //    vₓₓₓ*(c2*c2c2 + 3*c3*(2*c1c2 + c0c3)) +
    //    vᵧᵧᵧ*(d2*d2d2 + 3*d3*(2*d1d2 + d0d3)) +
    //    vₓₓ *c3c3 +
    //    vᵧᵧ *d3d3 +
    //    vₓᵧ *c3d3;
    const $wo = $c2d3 + $c3d2;
    const wo = get_coeffs_bez3_bez3_dd_qaq(c2d3, c3d2);
    const _wo = get_coeffs_bez3_bez3_dd_abs($wo);
    const wo_ = c2d3_ + c3d2_ + _wo;
    const $zc = $d2 * $c2c2;
    const zc = get_coeffs_bez3_bez3_dd_qmq(d2, c2c2);
    const zc_ = d2_ * _c2c2 + _d2 * c2c2_ + 2 * get_coeffs_bez3_bez3_dd_abs($zc);
    const $zd = 2 * $c1 * $wo;
    const zd = get_coeffs_bez3_bez3_dd_qm2(get_coeffs_bez3_bez3_dd_qmq(c1, wo));
    const zd_ = 2 * (c1_ * _wo + _c1 * wo_ + 2 * get_coeffs_bez3_bez3_dd_abs($zd));
    const $wp = $zc + $zd;
    const wp = get_coeffs_bez3_bez3_dd_qaq(zc, zd);
    const wp_ = zc_ + zd_ + get_coeffs_bez3_bez3_dd_abs($wp);
    const $wq = 2 * ($c0d3 + $c2d1);
    const wq = get_coeffs_bez3_bez3_dd_qm2(get_coeffs_bez3_bez3_dd_qaq(c0d3, c2d1));
    const wq_ = 2 * (c0d3_ + c2d1_) + get_coeffs_bez3_bez3_dd_abs($wq);
    const $wr = $wq + $c3d0;
    const _wr = get_coeffs_bez3_bez3_dd_abs($wr);
    const wr = get_coeffs_bez3_bez3_dd_qaq(wq, c3d0);
    const wr_ = wq_ + c3d0_ + _wr;
    const $ze = $c3 * $wr;
    const ze = get_coeffs_bez3_bez3_dd_qmq(c3, wr);
    const ze_ = c3_ * _wr + _c3 * wr_ + 2 * get_coeffs_bez3_bez3_dd_abs($ze);
    const $ws = $wp + $ze;
    const ws = get_coeffs_bez3_bez3_dd_qaq(wp, ze);
    const _ws = get_coeffs_bez3_bez3_dd_abs($ws);
    const ws_ = wp_ + ze_ + _ws;
    const $zf = $c2 * $d2d2;
    const zf = get_coeffs_bez3_bez3_dd_qmq(c2, d2d2);
    const zf_ = c2_ * _d2d2 + _c2 * d2d2_ + 2 * get_coeffs_bez3_bez3_dd_abs($zf);
    const $zg = 2 * $d1 * $wo;
    const zg = get_coeffs_bez3_bez3_dd_qm2(get_coeffs_bez3_bez3_dd_qmq(d1, wo));
    const zg_ = 2 * (d1_ * _wo + _d1 * wo_ + get_coeffs_bez3_bez3_dd_abs($zg));
    const $wt = $zf + $zg;
    const wt = get_coeffs_bez3_bez3_dd_qaq(zf, zg);
    const wt_ = zf_ + zg_ + get_coeffs_bez3_bez3_dd_abs($wt);
    const $wu = 2 * ($c1d2 + $c3d0);
    const wu = get_coeffs_bez3_bez3_dd_qm2(get_coeffs_bez3_bez3_dd_qaq(c1d2, c3d0));
    const wu_ = 2 * (c1d2_ + c3d0_) + get_coeffs_bez3_bez3_dd_abs($wu);
    const $wv = $wu + $c0d3;
    const wv = get_coeffs_bez3_bez3_dd_qaq(wu, c0d3);
    const _wv = get_coeffs_bez3_bez3_dd_abs($wv);
    const wv_ = wu_ + c0d3_ + _wv;
    const $zh = $d3 * $wv;
    const zh = get_coeffs_bez3_bez3_dd_qmq(d3, wv);
    const zh_ = d3_ * _wv + _d3 * wv_ + 2 * get_coeffs_bez3_bez3_dd_abs($zh);
    const $ww = $wt + $zh;
    const ww = get_coeffs_bez3_bez3_dd_qaq(wt, zh);
    const _ww = get_coeffs_bez3_bez3_dd_abs($ww);
    const ww_ = wt_ + zh_ + _ww;
    const $wx = $c2 * $c2c2;
    const wx = get_coeffs_bez3_bez3_dd_qmq(c2, c2c2);
    const wx_ = c2_ * _c2c2 + _c2 * c2c2_ + 2 * get_coeffs_bez3_bez3_dd_abs($wx);
    const $wy = 2 * $c1c2 + $c0c3;
    const wy = get_coeffs_bez3_bez3_dd_qaq(get_coeffs_bez3_bez3_dd_qm2(c1c2), c0c3);
    const _wy = get_coeffs_bez3_bez3_dd_abs($wy);
    const wy_ = 2 * c1c2_ + c0c3_ + _wy;
    const $q1 = 3 * $c3;
    const q1 = get_coeffs_bez3_bez3_dd_qmd(3, c3);
    const _q1 = get_coeffs_bez3_bez3_dd_abs($q1);
    const q1_ = 3 * c3_ + _q1;
    const $wz = $q1 * $wy;
    const wz = get_coeffs_bez3_bez3_dd_qmq(q1, wy);
    const wz_ = q1_ * _wy + _q1 * wy_ + 2 * get_coeffs_bez3_bez3_dd_abs($wz);
    const $z1 = $wx + $wz;
    const z1 = get_coeffs_bez3_bez3_dd_qaq(wx, wz);
    const _z1 = get_coeffs_bez3_bez3_dd_abs($z1);
    const z1_ = wx_ + wz_ + _z1;
    const $z2 = $d2 * $d2d2;
    const z2 = get_coeffs_bez3_bez3_dd_qmq(d2, d2d2);
    const z2_ = d2_ * _d2d2 + _d2 * d2d2_ + 2 * get_coeffs_bez3_bez3_dd_abs($z2);
    const $z3 = 2 * $d1d2 + $d0d3;
    const z3 = get_coeffs_bez3_bez3_dd_qaq(get_coeffs_bez3_bez3_dd_qm2(d1d2), d0d3);
    const _z3 = get_coeffs_bez3_bez3_dd_abs($z3);
    const z3_ = 2 * d1d2_ + d0d3_ + _z3;
    const $q2 = 3 * $d3;
    const q2 = get_coeffs_bez3_bez3_dd_qmd(3, d3);
    const _q2 = get_coeffs_bez3_bez3_dd_abs($q2);
    const q2_ = 3 * d3_ + _q2;
    const $z4 = $q2 * $z3;
    const z4 = get_coeffs_bez3_bez3_dd_qmq(q2, z3);
    const z4_ = q2_ * _z3 + _q2 * z3_ + 2 * get_coeffs_bez3_bez3_dd_abs($z4);
    const $z5 = $z2 + $z4;
    const z5 = get_coeffs_bez3_bez3_dd_qaq(z2, z4);
    const _z5 = get_coeffs_bez3_bez3_dd_abs($z5);
    const z5_ = z2_ + z4_ + _z5;
    const $zi = $vₓₓᵧ * $ws;
    const zi = get_coeffs_bez3_bez3_dd_qmq(vₓₓᵧ, ws);
    const zi_ = vₓₓᵧ_ * _ws + _vₓₓᵧ * ws_ + 2 * get_coeffs_bez3_bez3_dd_abs($zi);
    const $zj = $vₓᵧᵧ * $ww;
    const zj = get_coeffs_bez3_bez3_dd_qmq(vₓᵧᵧ, ww);
    const zj_ = vₓᵧᵧ_ * _ww + _vₓᵧᵧ * ww_ + 2 * get_coeffs_bez3_bez3_dd_abs($zj);
    const $z6 = $zi + $zj;
    const z6 = get_coeffs_bez3_bez3_dd_qaq(zi, zj);
    const z6_ = zi_ + zj_ + get_coeffs_bez3_bez3_dd_abs($z6);
    const $zk = $vₓₓₓ * $z1;
    const zk = get_coeffs_bez3_bez3_dd_qmq(vₓₓₓ, z1);
    const zk_ = vₓₓₓ_ * _z1 + _vₓₓₓ * z1_ + 2 * get_coeffs_bez3_bez3_dd_abs($zk);
    const $zl = $vᵧᵧᵧ * $z5;
    const zl = get_coeffs_bez3_bez3_dd_qmq(vᵧᵧᵧ, z5);
    const zl_ = vᵧᵧᵧ_ * _z5 + _vᵧᵧᵧ * z5_ + 2 * get_coeffs_bez3_bez3_dd_abs($zl);
    const $z7 = $zk + $zl;
    const z7 = get_coeffs_bez3_bez3_dd_qaq(zk, zl);
    const z7_ = zk_ + zl_ + get_coeffs_bez3_bez3_dd_abs($z7);
    const $zm = $vₓₓ * $c3c3;
    const zm = get_coeffs_bez3_bez3_dd_qmq(c3c3, vₓₓ);
    const zm_ = c3c3_ * _vₓₓ + _c3c3 * vₓₓ_ + 2 * get_coeffs_bez3_bez3_dd_abs($zm);
    const $zn = $vᵧᵧ * $d3d3;
    const zn = get_coeffs_bez3_bez3_dd_qmq(d3d3, vᵧᵧ);
    const zn_ = d3d3_ * _vᵧᵧ + _d3d3 * vᵧᵧ_ + 2 * get_coeffs_bez3_bez3_dd_abs($zn);
    const $z8 = $zm + $zn;
    const z8 = get_coeffs_bez3_bez3_dd_qaq(zm, zn);
    const z8_ = zm_ + zn_ + get_coeffs_bez3_bez3_dd_abs($z8);
    const $z9 = $vₓᵧ * $c3d3;
    const z9 = get_coeffs_bez3_bez3_dd_qmq(c3d3, vₓᵧ);
    const z9_ = c3d3_ * _vₓᵧ + _c3d3 * vₓᵧ_ + 2 * get_coeffs_bez3_bez3_dd_abs($z9);
    const $za = $z6 + $z7;
    const za = get_coeffs_bez3_bez3_dd_qaq(z6, z7);
    const za_ = z6_ + z7_ + get_coeffs_bez3_bez3_dd_abs($za);
    const $zb = $z8 + $z9;
    const zb = get_coeffs_bez3_bez3_dd_qaq(z8, z9);
    const zb_ = z8_ + z9_ + get_coeffs_bez3_bez3_dd_abs($zb);
    const $v6 = $za + $zb;
    const v6 = get_coeffs_bez3_bez3_dd_qaq(za, zb);
    const v6_ = za_ + zb_ + get_coeffs_bez3_bez3_dd_abs($v6);
    //const r4 = c2d2 + c3d1;
    //const r5 = c1d3 + c2d2;
    //const v5 =
    //    vₓₓᵧ*(2*(c0*wo + c1*r4) + d3*c1c1 + c2*(2*c3d0 + c2d1)) +
    //    vₓᵧᵧ*(2*(d0*wo + d1*r5) + c3*d1d1 + d2*(2*c0d3 + c1d2)) +
    //    3*(vₓₓₓ*(2*c0*c2c3 + c1*wc) + 
    //       vᵧᵧᵧ*(2*d0*d2d3 + d1*wd)) +
    //    vₓᵧ*wo +
    //    2*(vₓₓ*c2c3 + vᵧᵧ*d2d3);
    const $r4 = $c2d2 + $c3d1;
    const r4 = get_coeffs_bez3_bez3_dd_qaq(c2d2, c3d1);
    const _r4 = get_coeffs_bez3_bez3_dd_abs($r4);
    const r4_ = c2d2_ + c3d1_ + _r4;
    const $r5 = $c1d3 + $c2d2;
    const r5 = get_coeffs_bez3_bez3_dd_qaq(c1d3, c2d2);
    const _r5 = get_coeffs_bez3_bez3_dd_abs($r5);
    const r5_ = c1d3_ + c2d2_ + _r5;
    const $k1 = c0 * $wo;
    const k1 = get_coeffs_bez3_bez3_dd_qmd(c0, wo);
    const k1_ = _c0 * wo_ + get_coeffs_bez3_bez3_dd_abs($k1);
    const $k2 = d0 * $wo;
    const k2 = get_coeffs_bez3_bez3_dd_qmd(d0, wo);
    const k2_ = _d0 * wo_ + get_coeffs_bez3_bez3_dd_abs($k2);
    const $k3 = $c1 * $r4;
    const k3 = get_coeffs_bez3_bez3_dd_qmq(c1, r4);
    const k3_ = c1_ * _r4 + _c1 * r4_ + 2 * get_coeffs_bez3_bez3_dd_abs($k3);
    const $k4 = $d1 * $r5;
    const k4 = get_coeffs_bez3_bez3_dd_qmq(d1, r5);
    const k4_ = d1_ * _r5 + _d1 * r5_ + 2 * get_coeffs_bez3_bez3_dd_abs($k4);
    const $k5 = 2 * $c3d0 + $c2d1;
    const k5 = get_coeffs_bez3_bez3_dd_qaq(get_coeffs_bez3_bez3_dd_qm2(c3d0), c2d1);
    const _k5 = get_coeffs_bez3_bez3_dd_abs($k5);
    const k5_ = 2 * c3d0_ + c2d1_ + _k5;
    const $k6 = 2 * $c0d3 + $c1d2;
    const k6 = get_coeffs_bez3_bez3_dd_qaq(get_coeffs_bez3_bez3_dd_qm2(c0d3), c1d2);
    const _k6 = get_coeffs_bez3_bez3_dd_abs($k6);
    const k6_ = 2 * c0d3_ + c1d2_ + _k6;
    const $k7 = $d3 * $c1c1;
    const k7 = get_coeffs_bez3_bez3_dd_qmq(d3, c1c1);
    const k7_ = d3_ * _c1c1 + _d3 * c1c1_ + 2 * get_coeffs_bez3_bez3_dd_abs($k7);
    const $k8 = $c3 * $d1d1;
    const k8 = get_coeffs_bez3_bez3_dd_qmq(c3, d1d1);
    const k8_ = c3_ * _d1d1 + _c3 * d1d1_ + 2 * get_coeffs_bez3_bez3_dd_abs($k8);
    const $k9 = $c2 * $k5;
    const k9 = get_coeffs_bez3_bez3_dd_qmq(c2, k5);
    const k9_ = c2_ * _k5 + _c2 * k5_ + 2 * get_coeffs_bez3_bez3_dd_abs($k9);
    const $ka = $d2 * $k6;
    const ka = get_coeffs_bez3_bez3_dd_qmq(d2, k6);
    const ka_ = d2_ * _k6 + _d2 * k6_ + 2 * get_coeffs_bez3_bez3_dd_abs($ka);
    const $kb = 2 * ($k1 + $k3);
    const kb = get_coeffs_bez3_bez3_dd_qm2(get_coeffs_bez3_bez3_dd_qaq(k1, k3));
    const kb_ = 2 * (k1_ + k3_) + get_coeffs_bez3_bez3_dd_abs($kb);
    const $kc = 2 * ($k2 + $k4);
    const kc = get_coeffs_bez3_bez3_dd_qm2(get_coeffs_bez3_bez3_dd_qaq(k2, k4));
    const kc_ = 2 * (k2_ + k4_) + get_coeffs_bez3_bez3_dd_abs($kc);
    const $kd = 2 * c0 * $c2c3;
    const kd = get_coeffs_bez3_bez3_dd_qm2(get_coeffs_bez3_bez3_dd_qmd(c0, c2c3));
    const kd_ = 2 * _c0 * c2c3_ + get_coeffs_bez3_bez3_dd_abs($kd);
    const $ke = 2 * d0 * $d2d3;
    const ke = get_coeffs_bez3_bez3_dd_qm2(get_coeffs_bez3_bez3_dd_qmd(d0, d2d3));
    const ke_ = 2 * _d0 * d2d3_ + get_coeffs_bez3_bez3_dd_abs($ke);
    const $kf = $c1 * $wc;
    const kf = get_coeffs_bez3_bez3_dd_qmq(c1, wc);
    const kf_ = c1_ * _wc + _c1 * wc_ + 2 * get_coeffs_bez3_bez3_dd_abs($kf);
    const $kg = $d1 * $wd;
    const kg = get_coeffs_bez3_bez3_dd_qmq(d1, wd);
    const kg_ = d1_ * _wd + _d1 * wd_ + 2 * get_coeffs_bez3_bez3_dd_abs($kg);
    const $kh = $vₓₓ * $c2c3;
    const kh = get_coeffs_bez3_bez3_dd_qmq(c2c3, vₓₓ);
    const kh_ = c2c3_ * _vₓₓ + _c2c3 * vₓₓ_ + 2 * get_coeffs_bez3_bez3_dd_abs($kh);
    const $ki = $vᵧᵧ * $d2d3;
    const ki = get_coeffs_bez3_bez3_dd_qmq(d2d3, vᵧᵧ);
    const ki_ = d2d3_ * _vᵧᵧ + _d2d3 * vᵧᵧ_ + 2 * get_coeffs_bez3_bez3_dd_abs($ki);
    const $kj = $kb + $k7;
    const kj = get_coeffs_bez3_bez3_dd_qaq(kb, k7);
    const _kj = get_coeffs_bez3_bez3_dd_abs($kj);
    const kj_ = kb_ + k7_ + _kj;
    const $kk = $kc + $k8;
    const kk = get_coeffs_bez3_bez3_dd_qaq(kc, k8);
    const _kk = get_coeffs_bez3_bez3_dd_abs($kk);
    const kk_ = kc_ + k8_ + _kk;
    const $kl = $kj + $k9;
    const kl = get_coeffs_bez3_bez3_dd_qaq(kj, k9);
    const _kl = get_coeffs_bez3_bez3_dd_abs($kl);
    const kl_ = kj_ + k9_ + _kl;
    const $km = $kk + $ka;
    const km = get_coeffs_bez3_bez3_dd_qaq(kk, ka);
    const _km = get_coeffs_bez3_bez3_dd_abs($km);
    const km_ = kk_ + ka_ + _km;
    const $kn = $kd + $kf;
    const kn = get_coeffs_bez3_bez3_dd_qaq(kd, kf);
    const _kn = get_coeffs_bez3_bez3_dd_abs($kn);
    const kn_ = kd_ + kf_ + _kn;
    const $ko = $ke + $kg;
    const ko = get_coeffs_bez3_bez3_dd_qaq(ke, kg);
    const _ko = get_coeffs_bez3_bez3_dd_abs($ko);
    const ko_ = ke_ + kg_ + _ko;
    const $kp = 2 * ($kh + $ki);
    const kp = get_coeffs_bez3_bez3_dd_qm2(get_coeffs_bez3_bez3_dd_qaq(kh, ki));
    const kp_ = 2 * (kh_ + ki_) + get_coeffs_bez3_bez3_dd_abs($kp);
    const $kq = $vₓₓᵧ * $kl;
    const kq = get_coeffs_bez3_bez3_dd_qmq(vₓₓᵧ, kl);
    const kq_ = vₓₓᵧ_ * _kl + _vₓₓᵧ * kl_ + 2 * get_coeffs_bez3_bez3_dd_abs($kq);
    const $kr = $vₓᵧᵧ * $km;
    const kr = get_coeffs_bez3_bez3_dd_qmq(vₓᵧᵧ, km);
    const kr_ = vₓᵧᵧ_ * _km + _vₓᵧᵧ * km_ + 2 * get_coeffs_bez3_bez3_dd_abs($kr);
    const $ks = $vₓₓₓ * $kn;
    const ks = get_coeffs_bez3_bez3_dd_qmq(vₓₓₓ, kn);
    const ks_ = vₓₓₓ_ * _kn + _vₓₓₓ * kn_ + 2 * get_coeffs_bez3_bez3_dd_abs($ks);
    const $kt = $vᵧᵧᵧ * $ko;
    const kt = get_coeffs_bez3_bez3_dd_qmq(vᵧᵧᵧ, ko);
    const kt_ = vᵧᵧᵧ_ * _ko + _vᵧᵧᵧ * ko_ + 2 * get_coeffs_bez3_bez3_dd_abs($kt);
    const $ku = $kq + $kr;
    const ku = get_coeffs_bez3_bez3_dd_qaq(kq, kr);
    const ku_ = kq_ + kr_ + get_coeffs_bez3_bez3_dd_abs($ku);
    const $kv = 3 * ($ks + $kt);
    const kv = get_coeffs_bez3_bez3_dd_qmd(3, get_coeffs_bez3_bez3_dd_qaq(ks, kt));
    const kv_ = 3 * (ks_ + kt_) + 2 * get_coeffs_bez3_bez3_dd_abs($kv);
    const $kw = $vₓᵧ * $wo;
    const kw = get_coeffs_bez3_bez3_dd_qmq(vₓᵧ, wo);
    const kw_ = vₓᵧ_ * _wo + _vₓᵧ * wo_ + 2 * get_coeffs_bez3_bez3_dd_abs($kw);
    const $kx = $ku + $kv;
    const kx = get_coeffs_bez3_bez3_dd_qaq(ku, kv);
    const kx_ = ku_ + kv_ + get_coeffs_bez3_bez3_dd_abs($kx);
    const $ky = $kw + $kp;
    const ky = get_coeffs_bez3_bez3_dd_qaq(kw, kp);
    const ky_ = kw_ + kp_ + get_coeffs_bez3_bez3_dd_abs($ky);
    const $v5 = $kx + $ky;
    const v5 = get_coeffs_bez3_bez3_dd_qaq(kx, ky);
    const v5_ = kx_ + ky_ + get_coeffs_bez3_bez3_dd_abs($v5);
    //const r1 = c1d3 + r4;
    //const r2 = 2*c1c3 + c2c2;
    //const r3 = 2*d1d3 + d2d2;
    //const v4 =
    //    vₓₓᵧ*(2*c0*r1 + d0*r2 + c1*(c1d2 + 2*c2d1)) +
    //    vₓᵧᵧ*(2*d0*r1 + c0*r3 + d1*(c2d1 + 2*c1d2)) +
    //    vₓₓₓ*3*(c0*r2 + c2*c1c1) +
    //    vᵧᵧᵧ*3*(d0*r3 + d2*d1d1) +
    //    vₓᵧ*r1 +
    //    vₓₓ*r2 +
    //    vᵧᵧ*r3;
    const $r1 = $c1d3 + $r4;
    const r1 = get_coeffs_bez3_bez3_dd_qaq(c1d3, r4);
    const _r1 = get_coeffs_bez3_bez3_dd_abs($r1);
    const r1_ = c1d3_ + r4_ + _r1;
    const $r2 = 2 * $c1c3 + $c2c2;
    const r2 = get_coeffs_bez3_bez3_dd_qaq(get_coeffs_bez3_bez3_dd_qm2(c1c3), c2c2);
    const _r2 = get_coeffs_bez3_bez3_dd_abs($r2);
    const r2_ = 2 * c1c3_ + c2c2_ + _r2;
    const $r3 = 2 * $d1d3 + $d2d2;
    const r3 = get_coeffs_bez3_bez3_dd_qaq(get_coeffs_bez3_bez3_dd_qm2(d1d3), d2d2);
    const _r3 = get_coeffs_bez3_bez3_dd_abs($r3);
    const r3_ = 2 * d1d3_ + d2d2_ + _r3;
    const $s1 = 2 * c0 * $r1;
    const s1 = get_coeffs_bez3_bez3_dd_qmd(2 * c0, r1);
    const s1_ = 2 * _c0 * r1_ + get_coeffs_bez3_bez3_dd_abs($s1);
    const $s2 = 2 * d0 * $r1;
    const s2 = get_coeffs_bez3_bez3_dd_qmd(2 * d0, r1);
    const s2_ = 2 * _d0 * r1_ + get_coeffs_bez3_bez3_dd_abs($s2);
    const $s5 = $c1d2 + 2 * $c2d1;
    const s5 = get_coeffs_bez3_bez3_dd_qaq(c1d2, get_coeffs_bez3_bez3_dd_qm2(c2d1));
    const _s5 = get_coeffs_bez3_bez3_dd_abs($s5);
    const s5_ = c1d2_ + 2 * c2d1_ + _s5;
    const $s6 = $c2d1 + 2 * $c1d2;
    const s6 = get_coeffs_bez3_bez3_dd_qaq(c2d1, get_coeffs_bez3_bez3_dd_qm2(c1d2));
    const _s6 = get_coeffs_bez3_bez3_dd_abs($s6);
    const s6_ = c2d1_ + 2 * c1d2_ + _s6;
    const $s3 = d0 * $r2;
    const s3 = get_coeffs_bez3_bez3_dd_qmd(d0, r2);
    const s3_ = _d0 * r2_ + get_coeffs_bez3_bez3_dd_abs($s3);
    const $s4 = c0 * $r3;
    const s4 = get_coeffs_bez3_bez3_dd_qmd(c0, r3);
    const s4_ = _c0 * r3_ + get_coeffs_bez3_bez3_dd_abs($s4);
    const $s7 = $c1 * $s5;
    const s7 = get_coeffs_bez3_bez3_dd_qmq(c1, s5);
    const s7_ = c1_ * _s5 + _c1 * s5_ + 2 * get_coeffs_bez3_bez3_dd_abs($s7);
    const $s8 = $d1 * $s6;
    const s8 = get_coeffs_bez3_bez3_dd_qmq(d1, s6);
    const s8_ = d1_ * _s6 + _d1 * s6_ + 2 * get_coeffs_bez3_bez3_dd_abs($s8);
    const $s9 = c0 * $r2;
    const s9 = get_coeffs_bez3_bez3_dd_qmd(c0, r2);
    const s9_ = _c0 * r2_ + get_coeffs_bez3_bez3_dd_abs($s9);
    const $sa = d0 * $r3;
    const sa = get_coeffs_bez3_bez3_dd_qmd(d0, r3);
    const sa_ = _d0 * r3_ + get_coeffs_bez3_bez3_dd_abs($sa);
    const $sb = $c2 * $c1c1;
    const sb = get_coeffs_bez3_bez3_dd_qmq(c2, c1c1);
    const sb_ = c2_ * _c1c1 + _c2 * c1c1_ + 2 * get_coeffs_bez3_bez3_dd_abs($sb);
    const $sc = $d2 * $d1d1;
    const sc = get_coeffs_bez3_bez3_dd_qmq(d2, d1d1);
    const sc_ = d2_ * _d1d1 + _d2 * d1d1_ + 2 * get_coeffs_bez3_bez3_dd_abs($sc);
    const $sd = $s1 + $s3;
    const sd = get_coeffs_bez3_bez3_dd_qaq(s1, s3);
    const sd_ = s1_ + s3_ + get_coeffs_bez3_bez3_dd_abs($sd);
    const $se = $s2 + $s4;
    const se = get_coeffs_bez3_bez3_dd_qaq(s2, s4);
    const se_ = s2_ + s4_ + get_coeffs_bez3_bez3_dd_abs($se);
    const $sf = $sd + $s7;
    const sf = get_coeffs_bez3_bez3_dd_qaq(sd, s7);
    const _sf = get_coeffs_bez3_bez3_dd_abs($sf);
    const sf_ = sd_ + s7_ + _sf;
    const $sg = $se + $s8;
    const sg = get_coeffs_bez3_bez3_dd_qaq(se, s8);
    const _sg = get_coeffs_bez3_bez3_dd_abs($sg);
    const sg_ = se_ + s8_ + _sg;
    const $sh = $s9 + $sb;
    const sh = get_coeffs_bez3_bez3_dd_qaq(s9, sb);
    const _sh = get_coeffs_bez3_bez3_dd_abs($sh);
    const sh_ = s9_ + sb_ + _sh;
    const $si = $sa + $sc;
    const si = get_coeffs_bez3_bez3_dd_qaq(sa, sc);
    const _si = get_coeffs_bez3_bez3_dd_abs($si);
    const si_ = sa_ + sc_ + _si;
    const $sj = $vₓₓᵧ * $sf;
    const sj = get_coeffs_bez3_bez3_dd_qmq(vₓₓᵧ, sf);
    const sj_ = vₓₓᵧ_ * _sf + _vₓₓᵧ * sf_ + 2 * get_coeffs_bez3_bez3_dd_abs($sj);
    const $sk = $vₓᵧᵧ * $sg;
    const sk = get_coeffs_bez3_bez3_dd_qmq(vₓᵧᵧ, sg);
    const sk_ = vₓᵧᵧ_ * _sg + _vₓᵧᵧ * sg_ + 2 * get_coeffs_bez3_bez3_dd_abs($sk);
    const $sl = $vₓₓₓ * $sh;
    const sl = get_coeffs_bez3_bez3_dd_qmq(vₓₓₓ, sh);
    const sl_ = vₓₓₓ_ * _sh + _vₓₓₓ * sh_ + 2 * get_coeffs_bez3_bez3_dd_abs($sl);
    const $sm = $vᵧᵧᵧ * $si;
    const sm = get_coeffs_bez3_bez3_dd_qmq(vᵧᵧᵧ, si);
    const sm_ = vᵧᵧᵧ_ * _si + _vᵧᵧᵧ * si_ + 2 * get_coeffs_bez3_bez3_dd_abs($sm);
    const $sn = $sl + $sm;
    const _sn = get_coeffs_bez3_bez3_dd_abs($sn);
    const sn = get_coeffs_bez3_bez3_dd_qaq(sl, sm);
    const sn_ = sl_ + sm_ + _sn;
    const $so = $sj + $sk;
    const so = get_coeffs_bez3_bez3_dd_qaq(sj, sk);
    const so_ = sj_ + sk_ + get_coeffs_bez3_bez3_dd_abs($so);
    const $sp = $so + 3 * $sn;
    const sp = get_coeffs_bez3_bez3_dd_qaq(so, get_coeffs_bez3_bez3_dd_qmd(3, sn));
    const sp_ = so_ + 3 * (sn_ + _sn) + get_coeffs_bez3_bez3_dd_abs($sp);
    const $ss = $vₓᵧ * $r1;
    const ss = get_coeffs_bez3_bez3_dd_qmq(vₓᵧ, r1);
    const ss_ = vₓᵧ_ * _r1 + _vₓᵧ * r1_ + 2 * get_coeffs_bez3_bez3_dd_abs($ss);
    const $st = $vₓₓ * $r2;
    const st = get_coeffs_bez3_bez3_dd_qmq(vₓₓ, r2);
    const st_ = vₓₓ_ * _r2 + _vₓₓ * r2_ + 2 * get_coeffs_bez3_bez3_dd_abs($st);
    const $sq = $ss + $st;
    const sq = get_coeffs_bez3_bez3_dd_qaq(ss, st);
    const sq_ = ss_ + st_ + get_coeffs_bez3_bez3_dd_abs($sq);
    const $su = $vᵧᵧ * $r3;
    const su = get_coeffs_bez3_bez3_dd_qmq(vᵧᵧ, r3);
    const su_ = vᵧᵧ_ * _r3 + _vᵧᵧ * r3_ + 2 * get_coeffs_bez3_bez3_dd_abs($su);
    const $sr = $sq + $su;
    const sr = get_coeffs_bez3_bez3_dd_qaq(sq, su);
    const sr_ = sq_ + su_ + get_coeffs_bez3_bez3_dd_abs($sr);
    const $v4 = $sp + $sr;
    const v4 = get_coeffs_bez3_bez3_dd_qaq(sp, sr);
    const v4_ = sp_ + sr_ + get_coeffs_bez3_bez3_dd_abs($v4);
    //const r6 = c1d2 + c2d1;
    //const r7 = c3d0 + c0d3;
    //const r8 = c1c2 + c0c3;
    //const r9 = d1d2 + d0d3;
    //const v3 =
    //    vₓₓᵧ*(c0*(2*r6 + c3d0 + r7) + c1*(2*c2d0 + c1d1)) +
    //    vₓᵧᵧ*(d0*(2*r6 + c0d3 + r7) + d1*(2*c0d2 + c1d1)) +
    //    vₓₓₓ*(3*c0*(r8 + c1c2) + c1*c1c1) + 
    //    vᵧᵧᵧ*(3*d0*(r9 + d1d2) + d1*d1d1) +
    //    vₓᵧ*(r7 + r6) +
    //    2*(vₓₓ*r8 + vᵧᵧ*r9) +
    //    vₓ*c3 + vᵧ*d3;
    const $r6 = $c1d2 + $c2d1;
    const r6 = get_coeffs_bez3_bez3_dd_qaq(c1d2, c2d1);
    const r6_ = c1d2_ + c2d1_ + get_coeffs_bez3_bez3_dd_abs($r6);
    const $r7 = $c3d0 + $c0d3;
    const r7 = get_coeffs_bez3_bez3_dd_qaq(c3d0, c0d3);
    const r7_ = c3d0_ + c0d3_ + get_coeffs_bez3_bez3_dd_abs($r7);
    const $r8 = $c1c2 + $c0c3;
    const r8 = get_coeffs_bez3_bez3_dd_qaq(c1c2, c0c3);
    const r8_ = c1c2_ + c0c3_ + get_coeffs_bez3_bez3_dd_abs($r8);
    const _r8 = get_coeffs_bez3_bez3_dd_abs($r8);
    const $r9 = $d1d2 + $d0d3;
    const r9 = get_coeffs_bez3_bez3_dd_qaq(d1d2, d0d3);
    const r9_ = d1d2_ + d0d3_ + get_coeffs_bez3_bez3_dd_abs($r9);
    const _r9 = get_coeffs_bez3_bez3_dd_abs($r9);
    const $m1 = 2 * $r6 + $c3d0;
    const m1 = get_coeffs_bez3_bez3_dd_qaq(get_coeffs_bez3_bez3_dd_qm2(r6), c3d0);
    const m1_ = 2 * r6_ + c3d0_ + get_coeffs_bez3_bez3_dd_abs($m1);
    const $m2 = 2 * $r6 + $c0d3;
    const m2 = get_coeffs_bez3_bez3_dd_qaq(get_coeffs_bez3_bez3_dd_qm2(r6), c0d3);
    const m2_ = 2 * r6_ + c0d3_ + get_coeffs_bez3_bez3_dd_abs($m2);
    const $m3 = 2 * $c2d0 + $c1d1;
    const m3 = get_coeffs_bez3_bez3_dd_qaq(get_coeffs_bez3_bez3_dd_qm2(c2d0), c1d1);
    const _m3 = get_coeffs_bez3_bez3_dd_abs($m3);
    const m3_ = 2 * c2d0_ + c1d1_ + _m3;
    const $m4 = 2 * $c0d2 + $c1d1;
    const m4 = get_coeffs_bez3_bez3_dd_qaq(get_coeffs_bez3_bez3_dd_qm2(c0d2), c1d1);
    const _m4 = get_coeffs_bez3_bez3_dd_abs($m4);
    const m4_ = 2 * c0d2_ + c1d1_ + _m4;
    const $m5 = $r8 + $c1c2;
    const m5 = get_coeffs_bez3_bez3_dd_qaq(r8, c1c2);
    const m5_ = r8_ + c1c2_ + get_coeffs_bez3_bez3_dd_abs($m5);
    const $m6 = $r9 + $d1d2;
    const m6 = get_coeffs_bez3_bez3_dd_qaq(r9, d1d2);
    const m6_ = r9_ + d1d2_ + get_coeffs_bez3_bez3_dd_abs($m6);
    const $q3 = 3 * c0;
    const q3 = get_coeffs_bez3_bez3_dd_tp(3, c0); // error free
    const $m7 = $q3 * $m5;
    const m7 = get_coeffs_bez3_bez3_dd_qmq(q3, m5);
    const m7_ = get_coeffs_bez3_bez3_dd_abs($q3) * m5_ + 2 * get_coeffs_bez3_bez3_dd_abs($m7);
    const $q4 = 3 * d0;
    const q4 = get_coeffs_bez3_bez3_dd_tp(3, d0); // error free
    const $m8 = $q4 * $m6;
    const m8 = get_coeffs_bez3_bez3_dd_qmq(q4, m6);
    const m8_ = get_coeffs_bez3_bez3_dd_abs($q4) * m6_ + 2 * get_coeffs_bez3_bez3_dd_abs($m8);
    const $m9 = $c1 * $c1c1;
    const m9 = get_coeffs_bez3_bez3_dd_qmq(c1, c1c1);
    const m9_ = c1_ * _c1c1 + _c1 * c1c1_ + 2 * get_coeffs_bez3_bez3_dd_abs($m9);
    const $ma = $d1 * $d1d1;
    const ma = get_coeffs_bez3_bez3_dd_qmq(d1, d1d1);
    const ma_ = d1_ * _d1d1 + _d1 * d1d1_ + 2 * get_coeffs_bez3_bez3_dd_abs($ma);
    const $mb = $vₓₓ * $r8;
    const mb = get_coeffs_bez3_bez3_dd_qmq(vₓₓ, r8);
    const mb_ = vₓₓ_ * _r8 + _vₓₓ * r8_ + get_coeffs_bez3_bez3_dd_abs($mb);
    const $mc = $vᵧᵧ * $r9;
    const mc = get_coeffs_bez3_bez3_dd_qmq(vᵧᵧ, r9);
    const mc_ = vᵧᵧ_ * _r9 + _vᵧᵧ * r9_ + get_coeffs_bez3_bez3_dd_abs($mc);
    const $md = $m1 + $r7;
    const md = get_coeffs_bez3_bez3_dd_qaq(m1, r7);
    const md_ = m1_ + r7_ + get_coeffs_bez3_bez3_dd_abs($md);
    const $me = $m2 + $r7;
    const me = get_coeffs_bez3_bez3_dd_qaq(m2, r7);
    const me_ = m2_ + r7_ + get_coeffs_bez3_bez3_dd_abs($me);
    const $mf = c0 * $md;
    const mf = get_coeffs_bez3_bez3_dd_qmd(c0, md);
    const mf_ = _c0 * md_ + get_coeffs_bez3_bez3_dd_abs($mf);
    const $mg = d0 * $me;
    const mg = get_coeffs_bez3_bez3_dd_qmd(d0, me);
    const mg_ = _d0 * me_ + get_coeffs_bez3_bez3_dd_abs($mg);
    const $mh = $c1 * $m3;
    const mh = get_coeffs_bez3_bez3_dd_qmq(c1, m3);
    const mh_ = c1_ * _m3 + _c1 * m3_ + 2 * get_coeffs_bez3_bez3_dd_abs($mh);
    const $mi = $d1 * $m4;
    const mi = get_coeffs_bez3_bez3_dd_qmq(d1, m4);
    const mi_ = d1_ * _m4 + _d1 * m4_ + 2 * get_coeffs_bez3_bez3_dd_abs($mi);
    const $mj = $c3 * $vₓ;
    const mj = get_coeffs_bez3_bez3_dd_qmq(c3, vₓ);
    const mj_ = c3_ * _vₓ + _c3 * vₓ_ + 2 * get_coeffs_bez3_bez3_dd_abs($mj);
    const $mk = $d3 * $vᵧ;
    const mk = get_coeffs_bez3_bez3_dd_qmq(d3, vᵧ);
    const mk_ = d3_ * _vᵧ + _d3 * vᵧ_ + 2 * get_coeffs_bez3_bez3_dd_abs($mk);
    const $ml = $mf + $mh;
    const ml = get_coeffs_bez3_bez3_dd_qaq(mf, mh);
    const _ml = get_coeffs_bez3_bez3_dd_abs($ml);
    const ml_ = mf_ + mh_ + _ml;
    const $mm = $mg + $mi;
    const mm = get_coeffs_bez3_bez3_dd_qaq(mg, mi);
    const _mm = get_coeffs_bez3_bez3_dd_abs($mm);
    const mm_ = mg_ + mi_ + _mm;
    const $mn = $m7 + $m9;
    const mn = get_coeffs_bez3_bez3_dd_qaq(m7, m9);
    const _mn = get_coeffs_bez3_bez3_dd_abs($mn);
    const mn_ = m7_ + m9_ + _mn;
    const $mo = $m8 + $ma;
    const mo = get_coeffs_bez3_bez3_dd_qaq(m8, ma);
    const _mo = get_coeffs_bez3_bez3_dd_abs($mo);
    const mo_ = m8_ + ma_ + _mo;
    const $mp = $r7 + $r6;
    const mp = get_coeffs_bez3_bez3_dd_qaq(r7, r6);
    const _mp = get_coeffs_bez3_bez3_dd_abs($mp);
    const mp_ = r7_ + r6_ + _mp;
    const $mq = 2 * ($mb + $mc);
    const mq = get_coeffs_bez3_bez3_dd_qm2(get_coeffs_bez3_bez3_dd_qaq(mb, mc));
    const mq_ = 2 * (mb_ + mc_) + get_coeffs_bez3_bez3_dd_abs($mq);
    const $mr = $vₓₓᵧ * $ml;
    const mr = get_coeffs_bez3_bez3_dd_qmq(vₓₓᵧ, ml);
    const mr_ = vₓₓᵧ_ * _ml + _vₓₓᵧ * ml_ + 2 * get_coeffs_bez3_bez3_dd_abs($mr);
    const $ms = $vₓᵧᵧ * $mm;
    const ms = get_coeffs_bez3_bez3_dd_qmq(vₓᵧᵧ, mm);
    const ms_ = vₓᵧᵧ_ * _mm + _vₓᵧᵧ * mm_ + 2 * get_coeffs_bez3_bez3_dd_abs($ms);
    const $mt = $vₓₓₓ * $mn;
    const mt = get_coeffs_bez3_bez3_dd_qmq(vₓₓₓ, mn);
    const mt_ = vₓₓₓ_ * _mn + _vₓₓₓ * mn_ + 2 * get_coeffs_bez3_bez3_dd_abs($mt);
    const $mu = $vᵧᵧᵧ * $mo;
    const mu = get_coeffs_bez3_bez3_dd_qmq(vᵧᵧᵧ, mo);
    const mu_ = vᵧᵧᵧ_ * _mo + _vᵧᵧᵧ * mo_ + 2 * get_coeffs_bez3_bez3_dd_abs($mu);
    const $mv = $vₓᵧ * $mp;
    const mv = get_coeffs_bez3_bez3_dd_qmq(vₓᵧ, mp);
    const mv_ = vₓᵧ_ * _mp + _vₓᵧ * mp_ + 2 * get_coeffs_bez3_bez3_dd_abs($mv);
    const $mw = $mr + $ms;
    const mw = get_coeffs_bez3_bez3_dd_qaq(mr, ms);
    const mw_ = mr_ + ms_ + get_coeffs_bez3_bez3_dd_abs($mw);
    const $mx = $mt + $mu;
    const mx = get_coeffs_bez3_bez3_dd_qaq(mt, mu);
    const mx_ = mt_ + mu_ + get_coeffs_bez3_bez3_dd_abs($mx);
    const $my = $mv + $mq;
    const my = get_coeffs_bez3_bez3_dd_qaq(mv, mq);
    const my_ = mv_ + mq_ + get_coeffs_bez3_bez3_dd_abs($my);
    const $mz = $mj + $mk;
    const mz = get_coeffs_bez3_bez3_dd_qaq(mj, mk);
    const mz_ = mj_ + mk_ + get_coeffs_bez3_bez3_dd_abs($mz);
    const $n1 = $mw + $mx;
    const n1 = get_coeffs_bez3_bez3_dd_qaq(mw, mx);
    const n1_ = mw_ + mx_ + get_coeffs_bez3_bez3_dd_abs($n1);
    const $n2 = $my + $mz;
    const n2 = get_coeffs_bez3_bez3_dd_qaq(my, mz);
    const n2_ = my_ + mz_ + get_coeffs_bez3_bez3_dd_abs($n2);
    const $v3 = $n1 + $n2;
    const v3 = get_coeffs_bez3_bez3_dd_qaq(n1, n2);
    const v3_ = n1_ + n2_ + get_coeffs_bez3_bez3_dd_abs($v3);
    //const ra = c1d1 + c2d0;
    //const rb = c1d1 + c0d2;
    //const v2 =
    //    vₓₓᵧ*(c0*(2*ra + c0d2) + d0*c1c1) +
    //    vₓᵧᵧ*(d0*(2*rb + c2d0) + c0*d1d1) +
    //    3*vₓₓₓ*(c0*c1c1 + c2*c0c0) + 
    //    3*vᵧᵧᵧ*(d0*d1d1 + d2*d0d0) +
    //    vₓᵧ*(ra + c0d2) +
    //    vₓₓ*(2*c0c2 + c1c1) + 
    //    vᵧᵧ*(2*d0d2 + d1d1) +
    //    c2*vₓ + d2*vᵧ;
    const $ra = $c1d1 + $c2d0;
    const ra = get_coeffs_bez3_bez3_dd_qaq(c1d1, c2d0);
    const ra_ = c1d1_ + c2d0_ + get_coeffs_bez3_bez3_dd_abs($ra);
    const $rb = $c1d1 + $c0d2;
    const rb = get_coeffs_bez3_bez3_dd_qaq(c1d1, c0d2);
    const rb_ = c1d1_ + c0d2_ + get_coeffs_bez3_bez3_dd_abs($rb);
    const $l1 = 2 * $ra + $c0d2;
    const l1 = get_coeffs_bez3_bez3_dd_qaq(get_coeffs_bez3_bez3_dd_qm2(ra), c0d2);
    const l1_ = 2 * ra_ + c0d2_ + get_coeffs_bez3_bez3_dd_abs($l1);
    const $l2 = 2 * $rb + $c2d0;
    const l2 = get_coeffs_bez3_bez3_dd_qaq(get_coeffs_bez3_bez3_dd_qm2(rb), c2d0);
    const l2_ = 2 * rb_ + c2d0_ + get_coeffs_bez3_bez3_dd_abs($l2);
    const $l3 = c0 * $l1;
    const l3 = get_coeffs_bez3_bez3_dd_qmd(c0, l1);
    const l3_ = _c0 * l1_ + get_coeffs_bez3_bez3_dd_abs($l3);
    const $l4 = d0 * $c1c1;
    const l4 = get_coeffs_bez3_bez3_dd_qmd(d0, c1c1);
    const l4_ = _d0 * c1c1_ + get_coeffs_bez3_bez3_dd_abs($l4);
    const $l5 = d0 * $l2;
    const l5 = get_coeffs_bez3_bez3_dd_qmd(d0, l2);
    const l5_ = _d0 * l2_ + get_coeffs_bez3_bez3_dd_abs($l5);
    const $l6 = c0 * $d1d1;
    const l6 = get_coeffs_bez3_bez3_dd_qmd(c0, d1d1);
    const l6_ = _c0 * d1d1_ + get_coeffs_bez3_bez3_dd_abs($l6);
    const $l7 = c0 * $c1c1;
    const l7 = get_coeffs_bez3_bez3_dd_qmd(c0, c1c1);
    const l7_ = _c0 * c1c1_ + get_coeffs_bez3_bez3_dd_abs($l7);
    const $l8 = $c2 * $c0c0;
    const l8 = get_coeffs_bez3_bez3_dd_qmq(c2, c0c0);
    const l8_ = c2_ * _c0c0 + 2 * get_coeffs_bez3_bez3_dd_abs($l8);
    const $l9 = d0 * $d1d1;
    const l9 = get_coeffs_bez3_bez3_dd_qmd(d0, d1d1);
    const l9_ = _d0 * d1d1_ + get_coeffs_bez3_bez3_dd_abs($l9);
    const $la = $d2 * $d0d0;
    const la = get_coeffs_bez3_bez3_dd_qmq(d2, d0d0);
    const la_ = d2_ * _d0d0 + 2 * get_coeffs_bez3_bez3_dd_abs($la);
    const $lb = $l3 + $l4;
    const lb = get_coeffs_bez3_bez3_dd_qaq(l3, l4);
    const _lb = l3_ + l4_ + get_coeffs_bez3_bez3_dd_abs($lb);
    const lb_ = l3_ + l4_ + _lb;
    const $lc = $l5 + $l6;
    const lc = get_coeffs_bez3_bez3_dd_qaq(l5, l6);
    const _lc = l5_ + l6_ + get_coeffs_bez3_bez3_dd_abs($lc);
    const lc_ = l5_ + l6_ + _lc;
    const $ld = $l7 + $l8;
    const ld = get_coeffs_bez3_bez3_dd_qaq(l7, l8);
    const _ld = get_coeffs_bez3_bez3_dd_abs($ld);
    const ld_ = l7_ + l8_ + _ld;
    const $le = $l9 + $la;
    const le = get_coeffs_bez3_bez3_dd_qaq(l9, la);
    const _le = get_coeffs_bez3_bez3_dd_abs($le);
    const le_ = l9_ + la_ + _le;
    const $lf = $vₓₓₓ * $ld;
    const lf = get_coeffs_bez3_bez3_dd_qmq(vₓₓₓ, ld);
    const lf_ = vₓₓₓ_ * _ld + _vₓₓₓ * ld_ + 2 * get_coeffs_bez3_bez3_dd_abs($lf);
    const $lg = $vᵧᵧᵧ * $le;
    const lg = get_coeffs_bez3_bez3_dd_qmq(vᵧᵧᵧ, le);
    const lg_ = vᵧᵧᵧ_ * _le + _vᵧᵧᵧ * le_ + 2 * get_coeffs_bez3_bez3_dd_abs($lg);
    const $lh = 3 * ($lf + $lg);
    const lh = get_coeffs_bez3_bez3_dd_qmd(3, get_coeffs_bez3_bez3_dd_qaq(lf, lg));
    const lh_ = 3 * (lf_ + lg_) + 2 * get_coeffs_bez3_bez3_dd_abs($lh);
    const $li = $ra + $c0d2;
    const li = get_coeffs_bez3_bez3_dd_qaq(ra, c0d2);
    const _li = get_coeffs_bez3_bez3_dd_abs($li);
    const li_ = ra_ + c0d2_ + _li;
    const $lj = 2 * $c0c2 + $c1c1;
    const lj = get_coeffs_bez3_bez3_dd_qaq(get_coeffs_bez3_bez3_dd_qm2(c0c2), c1c1);
    const _lj = get_coeffs_bez3_bez3_dd_abs($lj);
    const lj_ = 2 * c0c2_ + c1c1_ + _lj;
    const $lk = 2 * $d0d2 + $d1d1;
    const lk = get_coeffs_bez3_bez3_dd_qaq(get_coeffs_bez3_bez3_dd_qm2(d0d2), d1d1);
    const _lk = get_coeffs_bez3_bez3_dd_abs($lk);
    const lk_ = 2 * d0d2_ + d1d1_ + _lk;
    const $ll = $vₓₓᵧ * $lb;
    const ll = get_coeffs_bez3_bez3_dd_qmq(vₓₓᵧ, lb);
    const ll_ = vₓₓᵧ_ * _lb + _vₓₓᵧ * lb_ + 2 * get_coeffs_bez3_bez3_dd_abs($ll);
    const $lm = $vₓᵧᵧ * $lc;
    const lm = get_coeffs_bez3_bez3_dd_qmq(vₓᵧᵧ, lc);
    const lm_ = vₓᵧᵧ_ * _lc + _vₓᵧᵧ * lc_ + 2 * get_coeffs_bez3_bez3_dd_abs($lm);
    const $ln = $vₓᵧ * $li;
    const ln = get_coeffs_bez3_bez3_dd_qmq(vₓᵧ, li);
    const ln_ = vₓᵧ_ * _li + _vₓᵧ * li_ + 2 * get_coeffs_bez3_bez3_dd_abs($ln);
    const $lo = $vₓₓ * $lj;
    const lo = get_coeffs_bez3_bez3_dd_qmq(vₓₓ, lj);
    const lo_ = vₓₓ_ * _lj + _vₓₓ * lj_ + 2 * get_coeffs_bez3_bez3_dd_abs($lo);
    const $lp = $vᵧᵧ * $lk;
    const lp = get_coeffs_bez3_bez3_dd_qmq(vᵧᵧ, lk);
    const lp_ = vᵧᵧ_ * _lk + _vᵧᵧ * lk_ + 2 * get_coeffs_bez3_bez3_dd_abs($lp);
    const $lq = $c2 * $vₓ;
    const lq = get_coeffs_bez3_bez3_dd_qmq(c2, vₓ);
    const lq_ = c2_ * _vₓ + _c2 * vₓ_ + get_coeffs_bez3_bez3_dd_abs($lq);
    const $lr = $d2 * $vᵧ;
    const lr = get_coeffs_bez3_bez3_dd_qmq(d2, vᵧ);
    const lr_ = d2_ * _vᵧ + _d2 * vᵧ_ + get_coeffs_bez3_bez3_dd_abs($lr);
    const $ls = $lq + $lr;
    const ls = get_coeffs_bez3_bez3_dd_qaq(lq, lr);
    const ls_ = lq_ + lr_ + get_coeffs_bez3_bez3_dd_abs($ls);
    const $lt = $ll + $lm;
    const lt = get_coeffs_bez3_bez3_dd_qaq(ll, lm);
    const lt_ = ll_ + lm_ + get_coeffs_bez3_bez3_dd_abs($lt);
    const $lu = $lh + $ln;
    const lu = get_coeffs_bez3_bez3_dd_qaq(lh, ln);
    const lu_ = lh_ + ln_ + get_coeffs_bez3_bez3_dd_abs($lu);
    const $lv = $lo + $lp;
    const lv = get_coeffs_bez3_bez3_dd_qaq(lo, lp);
    const lv_ = lo_ + lp_ + get_coeffs_bez3_bez3_dd_abs($lv);
    const $lw = $lt + $lu;
    const lw = get_coeffs_bez3_bez3_dd_qaq(lt, lu);
    const lw_ = lt_ + lu_ + get_coeffs_bez3_bez3_dd_abs($lw);
    const $lx = $lv + $ls;
    const lx = get_coeffs_bez3_bez3_dd_qaq(lv, ls);
    const lx_ = lv_ + ls_ + get_coeffs_bez3_bez3_dd_abs($lx);
    const $v2 = $lw + $lx;
    const v2 = get_coeffs_bez3_bez3_dd_qaq(lw, lx);
    const v2_ = lw_ + lx_ + get_coeffs_bez3_bez3_dd_abs($v2);
    //const rc = c1d0 + c0d1;
    //const v1 =
    //    vₓₓᵧ*c0*(rc + c1d0) +
    //    vₓᵧᵧ*d0*(rc + c0d1) +
    //    3*(c1*c0c0*vₓₓₓ + d1*d0d0*vᵧᵧᵧ) +
    //    vₓᵧ*rc +
    //    2*(c0c1*vₓₓ + d0d1*vᵧᵧ) +
    //    c1*vₓ + d1*vᵧ ;
    const $rc = $c1d0 + $c0d1;
    const rc = get_coeffs_bez3_bez3_dd_qaq(c1d0, c0d1);
    const _rc = get_coeffs_bez3_bez3_dd_abs($rc);
    const rc_ = c1d0_ + c0d1_ + _rc;
    const $rd = c0 * $vₓₓᵧ;
    const rd = get_coeffs_bez3_bez3_dd_qmd(c0, vₓₓᵧ);
    const _rd = get_coeffs_bez3_bez3_dd_abs($rd);
    const rd_ = _c0 * vₓₓᵧ_ + _rd;
    const $re = d0 * $vₓᵧᵧ;
    const re = get_coeffs_bez3_bez3_dd_qmd(d0, vₓᵧᵧ);
    const _re = get_coeffs_bez3_bez3_dd_abs($re);
    const re_ = _d0 * vₓᵧᵧ_ + _re;
    const $rf = $rc + $c1d0;
    const rf = get_coeffs_bez3_bez3_dd_qaq(rc, c1d0);
    const _rf = get_coeffs_bez3_bez3_dd_abs($rf);
    const rf_ = rc_ + c1d0_ + _rf;
    const $rg = $rc + $c0d1;
    const rg = get_coeffs_bez3_bez3_dd_qaq(rc, c0d1);
    const _rg = get_coeffs_bez3_bez3_dd_abs($rg);
    const rg_ = rc_ + c0d1_ + _rg;
    const $rx = $c1 * $c0c0;
    const rx = get_coeffs_bez3_bez3_dd_qmq(c1, c0c0);
    const _rx = get_coeffs_bez3_bez3_dd_abs($rx);
    const rx_ = c1_ * _c0c0 + 2 * _rx;
    const $rh = $rx * $vₓₓₓ;
    const rh = get_coeffs_bez3_bez3_dd_qmq(rx, vₓₓₓ);
    const rh_ = rx_ * _vₓₓₓ + _rx * vₓₓₓ_ + 2 * get_coeffs_bez3_bez3_dd_abs($rh);
    const $ry = $d1 * $d0d0;
    const ry = get_coeffs_bez3_bez3_dd_qmq(d1, d0d0);
    const _ry = get_coeffs_bez3_bez3_dd_abs($ry);
    const ry_ = d1_ * _d0d0 + 2 * _ry;
    const $ri = $ry * $vᵧᵧᵧ;
    const ri = get_coeffs_bez3_bez3_dd_qmq(ry, vᵧᵧᵧ);
    const ri_ = ry_ * _vᵧᵧᵧ + _ry * vᵧᵧᵧ_ + 2 * get_coeffs_bez3_bez3_dd_abs($ri);
    const $rj = $vₓᵧ * $rc;
    const rj = get_coeffs_bez3_bez3_dd_qmq(vₓᵧ, rc);
    const rj_ = vₓᵧ_ * _rc + _vₓᵧ * rc_ + 2 * get_coeffs_bez3_bez3_dd_abs($rj);
    const $rk = $c0c1 * $vₓₓ;
    const rk = get_coeffs_bez3_bez3_dd_qmq(c0c1, vₓₓ);
    const rk_ = c0c1_ * _vₓₓ + _c0c1 * vₓₓ_ + 2 * get_coeffs_bez3_bez3_dd_abs($rk);
    const $rl = $d0d1 * $vᵧᵧ;
    const rl = get_coeffs_bez3_bez3_dd_qmq(d0d1, vᵧᵧ);
    const rl_ = d0d1_ * _vᵧᵧ + _d0d1 * vᵧᵧ_ + 2 * get_coeffs_bez3_bez3_dd_abs($rl);
    const $rm = $rk + $rl;
    const rm = get_coeffs_bez3_bez3_dd_qaq(rk, rl);
    const rm_ = rk_ + rl_ + get_coeffs_bez3_bez3_dd_abs($rm);
    const $rn = $c1 * $vₓ;
    const rn = get_coeffs_bez3_bez3_dd_qmq(c1, vₓ);
    const rn_ = c1_ * _vₓ + _c1 * vₓ_ + get_coeffs_bez3_bez3_dd_abs($rn);
    const $ro = $d1 * $vᵧ;
    const ro = get_coeffs_bez3_bez3_dd_qmq(d1, vᵧ);
    const ro_ = d1_ * _vᵧ + _d1 * vᵧ_ + get_coeffs_bez3_bez3_dd_abs($ro);
    const $rp = $rn + $ro;
    const rp = get_coeffs_bez3_bez3_dd_qaq(rn, ro);
    const rp_ = rn_ + ro_ + get_coeffs_bez3_bez3_dd_abs($rp);
    const $rq = $rd * $rf;
    const rq = get_coeffs_bez3_bez3_dd_qmq(rd, rf);
    const rq_ = rd_ * _rf + _rd * rf_ + 2 * get_coeffs_bez3_bez3_dd_abs($rq);
    const $rr = $re * $rg;
    const rr = get_coeffs_bez3_bez3_dd_qmq(re, rg);
    const rr_ = re_ * _rg + _re * rg_ + 2 * get_coeffs_bez3_bez3_dd_abs($rr);
    const $rs = $rq + $rr;
    const rs = get_coeffs_bez3_bez3_dd_qaq(rq, rr);
    const rs_ = rq_ + rr_ + get_coeffs_bez3_bez3_dd_abs($rs);
    const $rt = 3 * ($rh + $ri);
    const rt = get_coeffs_bez3_bez3_dd_qmd(3, get_coeffs_bez3_bez3_dd_qaq(rh, ri));
    const rt_ = 3 * (rh_ + ri_) + 2 * get_coeffs_bez3_bez3_dd_abs($rt);
    const $ru = $rj + 2 * $rm;
    const ru = get_coeffs_bez3_bez3_dd_qaq(rj, get_coeffs_bez3_bez3_dd_qm2(rm));
    const ru_ = rj_ + 2 * rm_ + get_coeffs_bez3_bez3_dd_abs($ru);
    const $rv = $rs + $rt;
    const rv = get_coeffs_bez3_bez3_dd_qaq(rs, rt);
    const rv_ = rs_ + rt_ + get_coeffs_bez3_bez3_dd_abs($rv);
    const $rw = $ru + $rp;
    const rw = get_coeffs_bez3_bez3_dd_qaq(ru, rp);
    const rw_ = ru_ + rp_ + get_coeffs_bez3_bez3_dd_abs($rw);
    const $v1 = $rv + $rw;
    const v1 = get_coeffs_bez3_bez3_dd_qaq(rv, rw);
    const v1_ = rv_ + rw_ + get_coeffs_bez3_bez3_dd_abs($v1);
    //-----
    // v0
    //-----
    const $t1 = c0 * $vₓₓₓ;
    const t1 = get_coeffs_bez3_bez3_dd_qmd(c0, vₓₓₓ);
    const t1_ = _c0 * vₓₓₓ_ + get_coeffs_bez3_bez3_dd_abs($t1);
    const $t2 = d0 * $vₓₓᵧ;
    const t2 = get_coeffs_bez3_bez3_dd_qmd(d0, vₓₓᵧ);
    const t2_ = _d0 * vₓₓᵧ_ + get_coeffs_bez3_bez3_dd_abs($t2);
    const $p4 = $t1 + $t2;
    const p4 = get_coeffs_bez3_bez3_dd_qaq(t1, t2);
    const p4_ = t1_ + t2_ + get_coeffs_bez3_bez3_dd_abs($p4);
    const $t3 = c0 * $vₓᵧᵧ;
    const t3 = get_coeffs_bez3_bez3_dd_qmd(c0, vₓᵧᵧ);
    const t3_ = _c0 * vₓᵧᵧ_ + get_coeffs_bez3_bez3_dd_abs($t3);
    const $t4 = d0 * $vᵧᵧᵧ;
    const t4 = get_coeffs_bez3_bez3_dd_qmd(d0, vᵧᵧᵧ);
    const t4_ = _d0 * vᵧᵧᵧ_ + get_coeffs_bez3_bez3_dd_abs($t4);
    const $p5 = $t3 + $t4;
    const p5 = get_coeffs_bez3_bez3_dd_qaq(t3, t4);
    const p5_ = t3_ + t4_ + get_coeffs_bez3_bez3_dd_abs($p5);
    const $p7 = $p4 + $vₓₓ;
    const p7 = get_coeffs_bez3_bez3_dd_qaq(p4, vₓₓ);
    const _p7 = get_coeffs_bez3_bez3_dd_abs($p7);
    const p7_ = p4_ + vₓₓ_ + _p7;
    const $p8 = $p5 + $vᵧᵧ;
    const p8 = get_coeffs_bez3_bez3_dd_qaq(p5, vᵧᵧ);
    const _p8 = get_coeffs_bez3_bez3_dd_abs($p8);
    const p8_ = p5_ + vᵧᵧ_ + _p8;
    const $pc = $c0c0 * $p7;
    const pc = get_coeffs_bez3_bez3_dd_qmq(c0c0, p7);
    const pc_ = _c0c0 * p7_ + 2 * get_coeffs_bez3_bez3_dd_abs($pc);
    const $pd = $d0d0 * $p8;
    const pd = get_coeffs_bez3_bez3_dd_qmq(d0d0, p8);
    const pd_ = _d0d0 * p8_ + 2 * get_coeffs_bez3_bez3_dd_abs($pd);
    const $p6 = $pc + $pd;
    const p6 = get_coeffs_bez3_bez3_dd_qaq(pc, pd);
    const p6_ = pc_ + pd_ + get_coeffs_bez3_bez3_dd_abs($p6);
    const $pe = $c0d0 * $vₓᵧ;
    const pe = get_coeffs_bez3_bez3_dd_qmq(c0d0, vₓᵧ);
    const pe_ = _c0d0 * vₓᵧ_ + get_coeffs_bez3_bez3_dd_abs($pe);
    const $p9 = $p6 + $pe;
    const p9 = get_coeffs_bez3_bez3_dd_qaq(p6, pe);
    const p9_ = p6_ + pe_ + get_coeffs_bez3_bez3_dd_abs($p9);
    const $pf = c0 * $vₓ;
    const pf = get_coeffs_bez3_bez3_dd_qmd(c0, vₓ);
    const pf_ = _c0 * vₓ_ + get_coeffs_bez3_bez3_dd_abs($pf);
    const $pg = d0 * $vᵧ;
    const pg = get_coeffs_bez3_bez3_dd_qmd(d0, vᵧ);
    const pg_ = _d0 * vᵧ_ + get_coeffs_bez3_bez3_dd_abs($pg);
    const $pa = $pf + $pg;
    const pa = get_coeffs_bez3_bez3_dd_qaq(pf, pg);
    const pa_ = pf_ + pg_ + get_coeffs_bez3_bez3_dd_abs($pa);
    const $pb = $p9 + $pa;
    const pb = get_coeffs_bez3_bez3_dd_qaq(p9, pa);
    const pb_ = p9_ + pa_ + get_coeffs_bez3_bez3_dd_abs($pb);
    const $v0 = $pb + $v;
    const v0 = get_coeffs_bez3_bez3_dd_qaq(pb, v);
    const v0_ = pb_ + v_ + get_coeffs_bez3_bez3_dd_abs($v0);
    return {
        coeffs: [v9, v8, v7, v6, v5, v4, v3, v2, v1, v0],
        errBound: [get_coeffs_bez3_bez3_dd_3 * v9_, get_coeffs_bez3_bez3_dd_3 * v8_, get_coeffs_bez3_bez3_dd_3 * v7_, get_coeffs_bez3_bez3_dd_3 * v6_, get_coeffs_bez3_bez3_dd_3 * v5_, get_coeffs_bez3_bez3_dd_3 * v4_, get_coeffs_bez3_bez3_dd_3 * v3_, get_coeffs_bez3_bez3_dd_3 * v2_, get_coeffs_bez3_bez3_dd_3 * v1_, get_coeffs_bez3_bez3_dd_3 * v0_]
    };
}

//# sourceMappingURL=get-coeffs-bez3-bez3-dd.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/to-power-basis/to-power-basis/exact/to-power-basis-exact.js

// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗
const to_power_basis_exact_td = two_diff_twoDiff;
const to_power_basis_exact_ts = basic_two_sum_twoSum;
const to_power_basis_exact_sce = scaleExpansion2;
const ge = growExpansion;
const to_power_basis_exact_eAdd = eAdd;
/**
 * Returns the *exact* power basis representation of a bezier curve of order
 * cubic or less.
 *
 * * returns the resulting power basis x and y coordinate polynomials from
 * highest power to lowest, e.g. if `x(t) = at^2 + bt + c`
 * and `y(t) = dt^2 + et + f` then  the result is returned
 * as `[[a,b,c],[d,e,f]]`, where the `a,b,c,...` are [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf) floating point
 * expansions
 *
 * @param ps an order 0,1,2 or 3 bezier curve given by an ordered array of its
 * control points, e.g. `[[0,0],[1,1],[2,1],[2,0]]`
 *
 * @doc
 */
function toPowerBasisExact(ps) {
    if (ps.length === 4) {
        return toPowerBasis3Exact(ps);
    }
    if (ps.length === 3) {
        return toPowerBasis2Exact(ps);
    }
    if (ps.length === 2) {
        return toPowerBasis1Exact(ps);
    }
    if (ps.length === 1) {
        return toPowerBasis0Exact(ps);
    }
    throw new Error('The given bezier curve must be of order <= cubic.');
}
/** @internal */
function toPowerBasis3Exact(ps) {
    const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;
    return [[
            // (x3 - x0) + 3*(x1 - x2)
            to_power_basis_exact_eAdd(to_power_basis_exact_td(x3, x0), to_power_basis_exact_sce(3, to_power_basis_exact_td(x1, x2))),
            // OR
            // (x3 - x0) - (2*x2 + x2) + (2*x1 + x1)
            //eAdd(eAdd(td(x3,x0), ts(-2*x2, -x2)), ts(2*x1, x1))
            // 3*((x2 + x0) - 2*x1)
            to_power_basis_exact_sce(3, ge(to_power_basis_exact_ts(x2, x0), -2 * x1)),
            // 3*(x1 - x0)
            to_power_basis_exact_sce(3, to_power_basis_exact_td(x1, x0)),
            // x0
            [x0]
        ], [
            //ge(ge(sce(3, td(y1, y2)), y3), -y0),
            to_power_basis_exact_eAdd(to_power_basis_exact_td(y3, y0), to_power_basis_exact_sce(3, to_power_basis_exact_td(y1, y2))),
            //sce(3, ge(td(y2, 2*y1), y0)),
            to_power_basis_exact_sce(3, ge(to_power_basis_exact_ts(y2, y0), -2 * y1)),
            to_power_basis_exact_sce(3, to_power_basis_exact_td(y1, y0)),
            [y0]
        ]];
}
/** @internal */
function toPowerBasis2Exact(ps) {
    const [[x0, y0], [x1, y1], [x2, y2]] = ps;
    return [[
            // x2 - 2*x1 + x0
            ge(to_power_basis_exact_ts(x2, x0), -2 * x1),
            // 2*(x1 - x0)
            to_power_basis_exact_td(2 * x1, 2 * x0),
            //x0
            [x0]
        ], [
            ge(to_power_basis_exact_ts(y2, y0), -2 * y1),
            to_power_basis_exact_td(2 * y1, 2 * y0),
            [y0]
        ]];
}
/** @internal */
function toPowerBasis1Exact(ps) {
    const [[x0, y0], [x1, y1]] = ps;
    return [[
            //x1 - x0,
            to_power_basis_exact_td(x1, x0),
            //x0
            [x0]
        ], [
            to_power_basis_exact_td(y1, y0),
            [y0]
        ]];
}
/** @internal */
function toPowerBasis0Exact(ps) {
    const [[x0, y0]] = ps;
    return [[[x0]], [[y0]]];
}

//# sourceMappingURL=to-power-basis-exact.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/implicit-form/exact/get-implicit-form1-exact.js

// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗


const get_implicit_form1_exact_sce = scaleExpansion2;
const edif = eDiff;
const get_implicit_form1_exact_eno = eNegativeOf;
const get_implicit_form1_exact_eSign = e_sign_eSign;
/**
 * Returns the *exact* implicit form of the given linear bezier curve (a line
 * segment) or `undefined` if the line degenerates to a point.
 *
 * * returned coefficients are subscripted to match their monomial's variables,
 * e.g. `vₓᵧ` is the coefficient of the monomial `vₓᵧxy`
 * * returned coefficients are given *exactly* as [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf) expansions
 * * the implicit form is given by: `vₓx + vᵧy + v = 0`
 * * adapted from [Indrek Mandre](http://www.mare.ee/indrek/misc/2d.pdf)
 *
 * @param ps
 *
 * @doc mdx
 */
function getImplicitForm1Exact(ps) {
    return getImplicitForm1ExactPb(toPowerBasis1Exact(ps));
}
/**
 * The power basis version of [[getImplicitForm1Exact]].
 *
 * @param pspb the power basis representation of a linear bezier curve that
 * can be found via [[toPowerBasis1Exact]]
 *
 * @internal
 */
function getImplicitForm1ExactPb(pspb) {
    const [[a1, [a0]], [b1, [b0]]] = pspb;
    if (get_implicit_form1_exact_eSign(a1) === 0 && get_implicit_form1_exact_eSign(b1) === 0) {
        // the input bezier curve is in fact not linear but has order < 1
        // it is a point and no implicit form is possible
        return undefined;
    }
    const vₓ = get_implicit_form1_exact_eno(b1);
    const vᵧ = a1;
    //const v = a1*b0 - a0*b1;
    const v = edif(get_implicit_form1_exact_sce(a0, b1), get_implicit_form1_exact_sce(b0, a1));
    return { vₓ, vᵧ, v };
}

//# sourceMappingURL=get-implicit-form1-exact.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/bezier-bezier-intersection/get-coefficients/exact/get-coeffs-bez1-bez1-exact.js


// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗

const get_coeffs_bez1_bez1_exact_sce = scaleExpansion2;
const epr = expansionProduct;
const get_coeffs_bez1_bez1_exact_fes = fastExpansionSum;
/**
 * Returns an error-free polynomial in 1 variable whose roots are the parameter
 * values of the intersection points of two order 1 bezier curves (i.e. 2 lines).
 *
 * The returned polynomial degree will be 1
 * (see [Bézout's theorem](https://en.wikipedia.org/wiki/B%C3%A9zout%27s_theorem))
 *
 * The returned polynomial coefficients are given densely as an array of
 * [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf) floating point expansions from highest to lowest power,
 * e.g. `[[5],[-3],[0]]` represents the polynomial `5x^2 - 3x`.
 *
 * * the returned polynomial coefficients are exact (i.e. error-free)
 * * adapted from [Indrek Mandre](http://www.mare.ee/indrek/misc/2d.pdf)
 *
 * @param ps1
 * @param ps2
 *
 * @internal
 */
function getCoeffsBez1Bez1Exact(ps1, ps2) {
    /** ps1 in power bases */
    const ps1pb = toPowerBasis1Exact(ps1);
    // if both polynomials' linear terms are exactly zero then it really is a point
    //if (eSign(ps1pb[0][0]) === 0 && eSign(ps1pb[1][0]) === 0) {
    // The input bezier curve is in fact not a line but has order < 1, i.e. it is a point.
    // This shouldn't happen due to being checked for earlier.
    //}
    const [[c1, [c0]], [d1, [d0]]] = toPowerBasis1Exact(ps2);
    //if (eSign(c1) === 0 && eSign(d1) === 0) {
    // The input bezier curve is in fact not a line but has order < 1, i.e. it is a point.
    // This shouldn't happen due to being checked for earlier.
    //}
    const { vₓ, vᵧ, v } = 
    // this type coercion is justified since we already checked that the
    // curve really has order 1
    getImplicitForm1ExactPb(ps1pb);
    //const v1 = c1*vₓ + d1*vᵧ;
    const p1 = epr(c1, vₓ);
    const p2 = epr(d1, vᵧ);
    const v1 = get_coeffs_bez1_bez1_exact_fes(p1, p2);
    //const v0 = c0*vₓ + d0*vᵧ + v_0;
    const p3 = get_coeffs_bez1_bez1_exact_sce(c0, vₓ);
    const p4 = get_coeffs_bez1_bez1_exact_sce(d0, vᵧ);
    const p5 = get_coeffs_bez1_bez1_exact_fes(p3, p4);
    const v0 = get_coeffs_bez1_bez1_exact_fes(p5, v);
    const r = [v1, v0];
    return r;
}

//# sourceMappingURL=get-coeffs-bez1-bez1-exact.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/implicit-form/exact/get-implicit-form2-exact.js


// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗

const get_implicit_form2_exact_sce = scaleExpansion2;
const get_implicit_form2_exact_em2 = eMultBy2;
const get_implicit_form2_exact_edif = eDiff;
const get_implicit_form2_exact_epr = expansionProduct;
const get_implicit_form2_exact_eno = eNegativeOf;
/**
 * Returns the exact implicit form of the given quadratic bezier curve
 * or `undefined` if the curve degenerates to a point.
 *
 * * returned coefficients are subscripted to match their monomial's variables,
 * e.g. `vₓᵧ` is the coefficient of the monomial `vₓᵧxy`
 * * returned coefficients are given *exactly* as [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf) expansions
 * * the implicit form is given by: `vₓₓx² +vₓᵧxy + vᵧᵧy² + vₓx + vᵧy + v = 0`
 * * adapted from [Indrek Mandre](http://www.mare.ee/indrek/misc/2d.pdf)
 *
 * @param ps
 *
 * @doc mdx
 */
function getImplicitForm2Exact(ps) {
    return getImplicitForm2ExactPb(toPowerBasis2Exact(ps));
}
/**
 * The power basis version of [[getImplicitForm2Exact]].
 *
 * @param pspb the power basis representation of a quadratic bezier curve that
 * can be found via [[toPowerBasis2Exact]]
 *
 * @internal
 */
function getImplicitForm2ExactPb(pspb) {
    const [[a2, a1, [a0]], [b2, b1, [b0]]] = pspb;
    if (e_sign_eSign(a2) === 0 && e_sign_eSign(b2) === 0) {
        // the input bezier curve is in fact not quadratic but has order < 2
        return getImplicitForm1ExactPb([[a1, [a0]], [b1, [b0]]]);
    }
    const a2b1 = get_implicit_form2_exact_epr(a2, b1);
    const a1b2 = get_implicit_form2_exact_epr(a1, b2);
    const a2b0 = get_implicit_form2_exact_sce(b0, a2);
    const a0b2 = get_implicit_form2_exact_sce(a0, b2);
    const a1b0 = get_implicit_form2_exact_sce(b0, a1);
    const a0b1 = get_implicit_form2_exact_sce(a0, b1);
    const a2a2 = get_implicit_form2_exact_epr(a2, a2);
    const a2b2 = get_implicit_form2_exact_epr(a2, b2);
    const b2b2 = get_implicit_form2_exact_epr(b2, b2);
    const q1 = get_implicit_form2_exact_edif(a2b1, a1b2);
    const q2 = get_implicit_form2_exact_edif(a2b0, a0b2);
    const q3 = get_implicit_form2_exact_edif(a1b0, a0b1);
    // -a1*q1*y - a2**2*y**2 + 2*a2*b2*x*y + 2*a2*q2*y + b1*q1*x - b2**2*x**2 - 2*b2*q2*x + q1*q3 - q2**2
    // b2**2*x**2
    // -b2**2 *x**2
    const vₓₓ = get_implicit_form2_exact_eno(b2b2);
    // -2*a2*b2*x*y
    // 2*a2*b2 *x*y
    const vₓᵧ = get_implicit_form2_exact_em2(a2b2);
    // a2**2*y**2
    // -a2**2 *y**2 
    const vᵧᵧ = get_implicit_form2_exact_eno(a2a2);
    // -2*a0*b2**2 + a1*b1*b2 + 2*a2*b0*b2 - a2*b1**2
    // (b1*q1 + -2*b2*q2) *x
    //const vₓ = b1*q1 - 2*b2*q2;
    const w1 = get_implicit_form2_exact_epr(b1, q1);
    const w2 = get_implicit_form2_exact_em2(get_implicit_form2_exact_epr(b2, q2));
    const vₓ = get_implicit_form2_exact_edif(w1, w2);
    // 2*a0*a2*b2 - a1**2*b2 + a1*a2*b1 - 2*a2**2*b0
    // (-a1*q1 + 2*a2*q2) *y
    const w3 = get_implicit_form2_exact_em2(get_implicit_form2_exact_epr(a2, q2));
    const w4 = get_implicit_form2_exact_epr(a1, q1);
    const vᵧ = get_implicit_form2_exact_edif(w3, w4);
    // a0**2*b2**2 - a0*a1*b1*b2 - 2*a0*a2*b0*b2 + a0*a2*b1**2 + a1**2*b0*b2 - a1*a2*b0*b1 + a2**2*b0**2
    // q1*q3 + -q2**2
    const w5 = get_implicit_form2_exact_epr(q1, q3);
    const w6 = get_implicit_form2_exact_epr(q2, q2);
    const v = get_implicit_form2_exact_edif(w5, w6);
    //console.log({ vₓₓ, vₓᵧ, vᵧᵧ, vₓ, vᵧ, v })
    return { vₓₓ, vₓᵧ, vᵧᵧ, vₓ, vᵧ, v };
}

//# sourceMappingURL=get-implicit-form2-exact.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/bezier-bezier-intersection/get-coefficients/exact/get-coeffs-bez2-bez1-exact.js


// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗


const get_coeffs_bez2_bez1_exact_tp = basic_two_product_twoProduct; // error -> 0
const get_coeffs_bez2_bez1_exact_sce = scaleExpansion2;
const get_coeffs_bez2_bez1_exact_epr = expansionProduct;
const get_coeffs_bez2_bez1_exact_fes = fastExpansionSum;
const get_coeffs_bez2_bez1_exact_em2 = eMultBy2;
const get_coeffs_bez2_bez1_exact_eSign = e_sign_eSign;
/**
 * Returns an error-free polynomial in 1 variable
 * whose roots are the parameter values of the intersection points of an order
 * 2 and 1 bezier curve (i.e. a quadratic bezier curve and a line).
 *
 * The returned polynomial degree will be 2
 * (see [Bézout's theorem](https://en.wikipedia.org/wiki/B%C3%A9zout%27s_theorem))
 *
 * The returned polynomial coefficients are given densely as an array of
 * [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf) floating point expansions from highest to lowest power,
 * e.g. `[[5],[-3],[0]]` represents the polynomial `5x^2 - 3x`.
 *
  * * the returned polynomial coefficients are exact (i.e. error-free)
 * * adapted from [Indrek Mandre](http://www.mare.ee/indrek/misc/2d.pdf)
 *
 * @param ps1
 * @param ps2
 *
 * @internal
 */
function getCoeffsBez2Bez1Exact(ps1, ps2) {
    /** ps1 in power bases */
    const ps1pb = toPowerBasis2Exact(ps1);
    //const [[e2,e1,e0],[f2,f1,f0]] = ps1pb;
    // if both polynomials' quadratic terms are exactly zero then its really a line
    if (get_coeffs_bez2_bez1_exact_eSign(ps1pb[0][0]) === 0 && get_coeffs_bez2_bez1_exact_eSign(ps1pb[1][0]) === 0) {
        // the input bezier curve is in fact not quadratic but has order < 2
        return getCoeffsBez1Bez1Exact([ps1[0], ps1[2]], ps2);
    }
    const [[c1, [c0]], [d1, [d0]]] = toPowerBasis1Exact(ps2);
    // if (eSign(c1) === 0 && eSign(d1) === 0) {
    // The input bezier curve is in fact not a line but has order < 1, i.e. it is a point.
    // This shouldn't happen due to being checked for earlier.
    // }
    const { vₓₓ, vₓᵧ, vᵧᵧ, vₓ, vᵧ, v } = 
    // this type coercion is justified since we already checked that the
    // curve really has order 2
    getImplicitForm2ExactPb(ps1pb);
    const c0c0 = get_coeffs_bez2_bez1_exact_tp(c0, c0);
    const c0c1 = get_coeffs_bez2_bez1_exact_sce(c0, c1);
    const c0d0 = get_coeffs_bez2_bez1_exact_tp(c0, d0);
    const c0d1 = get_coeffs_bez2_bez1_exact_sce(c0, d1);
    const c1c1 = get_coeffs_bez2_bez1_exact_epr(c1, c1);
    const c1d0 = get_coeffs_bez2_bez1_exact_sce(d0, c1);
    const c1d1 = get_coeffs_bez2_bez1_exact_epr(c1, d1);
    const d0d0 = get_coeffs_bez2_bez1_exact_tp(d0, d0);
    const d0d1 = get_coeffs_bez2_bez1_exact_sce(d0, d1);
    const d1d1 = get_coeffs_bez2_bez1_exact_epr(d1, d1);
    // a1**2*vₓₓ + a1*b1*vₓᵧ + b1**2*vᵧᵧ
    const p1 = get_coeffs_bez2_bez1_exact_epr(c1c1, vₓₓ);
    const p2 = get_coeffs_bez2_bez1_exact_epr(d1d1, vᵧᵧ);
    const p3 = get_coeffs_bez2_bez1_exact_epr(c1d1, vₓᵧ);
    const p4 = get_coeffs_bez2_bez1_exact_fes(p1, p2);
    const v2 = get_coeffs_bez2_bez1_exact_fes(p4, p3);
    // 2*a0*a1*vₓₓ + a0*b1*vₓᵧ + a1*b0*vₓᵧ + a1*vₓ + 2*b0*b1*vᵧᵧ + b1*vᵧ
    const p5 = get_coeffs_bez2_bez1_exact_epr(c0c1, vₓₓ);
    const p6 = get_coeffs_bez2_bez1_exact_epr(d0d1, vᵧᵧ);
    const p7 = get_coeffs_bez2_bez1_exact_fes(c0d1, c1d0);
    const pn = get_coeffs_bez2_bez1_exact_epr(p7, vₓᵧ);
    const p8 = get_coeffs_bez2_bez1_exact_em2(get_coeffs_bez2_bez1_exact_fes(p5, p6));
    const p9 = get_coeffs_bez2_bez1_exact_fes(p8, pn);
    const pa = get_coeffs_bez2_bez1_exact_epr(c1, vₓ);
    const pb = get_coeffs_bez2_bez1_exact_epr(d1, vᵧ);
    const pc = get_coeffs_bez2_bez1_exact_fes(pa, pb);
    const v1 = get_coeffs_bez2_bez1_exact_fes(p9, pc);
    // a0**2*vₓₓ + a0*b0*vₓᵧ + a0*vₓ + b0**2*vᵧᵧ + b0*vᵧ + v_0
    const pe = get_coeffs_bez2_bez1_exact_epr(c0c0, vₓₓ);
    const pf = get_coeffs_bez2_bez1_exact_epr(c0d0, vₓᵧ);
    const pg = get_coeffs_bez2_bez1_exact_epr(d0d0, vᵧᵧ);
    const ph = get_coeffs_bez2_bez1_exact_fes(pe, pf);
    const pi = get_coeffs_bez2_bez1_exact_fes(ph, pg);
    const pj = get_coeffs_bez2_bez1_exact_sce(c0, vₓ);
    const pk = get_coeffs_bez2_bez1_exact_sce(d0, vᵧ);
    const pl = get_coeffs_bez2_bez1_exact_fes(pj, pk);
    const pm = get_coeffs_bez2_bez1_exact_fes(pi, pl);
    const v0 = get_coeffs_bez2_bez1_exact_fes(pm, v);
    const r = [v2, v1, v0];
    return r;
}

//# sourceMappingURL=get-coeffs-bez2-bez1-exact.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/transformation/degree-or-type/cubic-to-quadratic.js

// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗
const cubic_to_quadratic_epr = expansionProduct;
const cubic_to_quadratic_td = two_diff_twoDiff;
const cubic_to_quadratic_ediff = eDiff;
const esign = e_sign_eSign;
const cubic_to_quadratic_estimate = eEstimate;
const cubic_to_quadratic_sce = scaleExpansion;
const cubic_to_quadratic_ts = basic_two_sum_twoSum;
/**
 * Returns a quadratic approximation to the given cubic bezier curve.
 *
 * * the initial and final control points of the resulting bezier coincide with
 * that of the curve being approximated
 *
 * * if `preserveTangents` is `true` and the cubic's initial and final tangents
 * are parallel (and not coincident) then `undefined` is returned
 *
 * @param ps a cubic bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 * @param preserveTangents optional; defaults to `false`; if `true` then the approximation
 * must also preserve the tangents of the cubic at the initial and final control
 * points
 *
 * @doc mdx
 */
function cubicToQuadratic(ps, preserveTangents = false) {
    // Note: if cubic is really a quad then
    //   x3 + 3*(x1 - x2) === x0 && 
    //   y3 + 3*(y1 - y2) === y0
    // Take the midpoint of the moving line of the hybrid quadratic version of 
    // the cubic as the new quadratic's middle control point.
    if (!preserveTangents) {
        const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;
        return [
            [x0, y0],
            [
                // [
                //   (3*(x1 + x2) - (x0 + x3)) / 4, 
                //   (3*(y1 + y2) - (y0 + y3)) / 4
                // ]
                cubic_to_quadratic_estimate(cubic_to_quadratic_ediff(cubic_to_quadratic_sce(cubic_to_quadratic_ts(x1 / 4, x2 / 4), 3), cubic_to_quadratic_ts(x0 / 4, x3 / 4))),
                cubic_to_quadratic_estimate(cubic_to_quadratic_ediff(cubic_to_quadratic_sce(cubic_to_quadratic_ts(y1 / 4, y2 / 4), 3), cubic_to_quadratic_ts(y0 / 4, y3 / 4)))
            ],
            [x3, y3]
        ];
    }
    // At this point: `preserveTangents === true`
    const [p0, p1, p2, p3] = ps;
    const l1 = [p0, p1];
    const l2 = [p3, p2];
    const pM = llIntersection(l1, l2);
    if (pM === undefined) {
        return undefined;
        //return [
        //    p0,
        //    [(p0[0] + p3[0])/2, (p0[1] + p3[1])/2],
        //    p3
        //];
    }
    return [p0, pM, p3];
}
/**
 * Returns the point of intersection of the given two lines or `undefined` if
 * the lines are parallel.
 *
 * * returns `undefined` *iff* the lines are *exactly* parallel
 *
 * @param l1
 * @param l2
 *
 * @internal
 */
function llIntersection(l1, l2) {
    const [[x1, y1], [x2, y2]] = l1;
    const [[x3, y3], [x4, y4]] = l2;
    const x1_ = cubic_to_quadratic_td(x2, x1);
    const y1_ = cubic_to_quadratic_td(y2, y1);
    const x2_ = cubic_to_quadratic_td(x4, x3);
    const y2_ = cubic_to_quadratic_td(y4, y3);
    const denom = cubic_to_quadratic_ediff(cubic_to_quadratic_epr(x2_, y1_), cubic_to_quadratic_epr(y2_, x1_));
    if (esign(denom) === 0) {
        // definitely parallel
        return undefined;
    }
    const x3_ = cubic_to_quadratic_td(x3, x1);
    const y3_ = cubic_to_quadratic_td(y3, y1);
    const b = cubic_to_quadratic_ediff(cubic_to_quadratic_epr(y3_, x1_), cubic_to_quadratic_epr(x3_, y1_));
    const bb = cubic_to_quadratic_estimate(b) / cubic_to_quadratic_estimate(denom);
    return [
        x3 + bb * cubic_to_quadratic_estimate(x2_),
        y3 + bb * cubic_to_quadratic_estimate(y2_)
    ];
}

//# sourceMappingURL=cubic-to-quadratic.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/implicit-form/exact/get-implicit-form3-exact.js

// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗



const get_implicit_form3_exact_sce = scaleExpansion2;
const get_implicit_form3_exact_epr = expansionProduct;
const get_implicit_form3_exact_fes = fastExpansionSum;
const get_implicit_form3_exact_edif = eDiff;
const get_implicit_form3_exact_eno = eNegativeOf;
const get_implicit_form3_exact_em2 = eMultBy2;
const ed2 = eDivBy2;
const get_implicit_form3_exact_eSign = e_sign_eSign;
/**
 * Returns the exact implicit form of the given cubic bezier curve
 * or `undefined` if the curve degenerates to a point.
 *
 * * returned coefficients are subscripted to match their monomial's variables,
 * e.g. `vₓᵧ` is the coefficient of the monomial `vₓᵧxy`
 * * returned coefficients are given *exactly* as [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf) expansions
 * * the implicit form is given by: `vₓₓₓx³ + vₓₓᵧx²y + vₓᵧᵧxy² + vᵧᵧᵧy³ + vₓₓx² +vₓᵧxy + vᵧᵧy² + vₓx + vᵧy + v = 0`
 * * adapted from [Indrek Mandre](http://www.mare.ee/indrek/misc/2d.pdf)
 *
 * @param ps
 *
 * @doc mdx
 */
function getImplicitForm3Exact(ps) {
    // Takes about 155 micro-seconds on a 3rd gen i7 and Chrome 79.
    return getImplicitForm3ExactPb(toPowerBasis3Exact(ps));
}
/**
 * The power basis version of [[getImplicitForm3Exact]].
 *
 * @param pspb the power basis representation of a cubic bezier curve that can
 * be found via [[toPowerBasis3Exact]]
 *
 * @internal
 */
function getImplicitForm3ExactPb(pspb) {
    const [[a3, a2, a1, [a0]], [b3, b2, b1, [b0]]] = pspb;
    if (get_implicit_form3_exact_eSign(a3) === 0 && get_implicit_form3_exact_eSign(b3) === 0) {
        // the input bezier curve is in fact not cubic but has order < 3
        return getImplicitForm2ExactPb([[a2, a1, [a0]], [b2, b1, [b0]]]);
    }
    const a3b1 = get_implicit_form3_exact_epr(a3, b1);
    const a1b3 = get_implicit_form3_exact_epr(a1, b3);
    const a3b2 = get_implicit_form3_exact_epr(a3, b2);
    const a2b2 = get_implicit_form3_exact_epr(a2, b2);
    const a2b3 = get_implicit_form3_exact_epr(a2, b3);
    const a3a3 = get_implicit_form3_exact_epr(a3, a3);
    const b2b2 = get_implicit_form3_exact_epr(b2, b2);
    const b3b3 = get_implicit_form3_exact_epr(b3, b3);
    const a1a3 = get_implicit_form3_exact_epr(a1, a3);
    const a2a2 = get_implicit_form3_exact_epr(a2, a2);
    const b1b3 = get_implicit_form3_exact_epr(b1, b3);
    const b2b3 = get_implicit_form3_exact_epr(b2, b3);
    const a2a3 = get_implicit_form3_exact_epr(a2, a3);
    const a3b3 = get_implicit_form3_exact_epr(a3, b3);
    const a3b0 = get_implicit_form3_exact_sce(b0, a3);
    const a0b3 = get_implicit_form3_exact_sce(a0, b3);
    const a2b0 = get_implicit_form3_exact_sce(b0, a2);
    const a0b2 = get_implicit_form3_exact_sce(a0, b2);
    const a2b1 = get_implicit_form3_exact_epr(a2, b1);
    const a1b2 = get_implicit_form3_exact_epr(a1, b2);
    const a1b0 = get_implicit_form3_exact_sce(b0, a1);
    const a0b1 = get_implicit_form3_exact_sce(a0, b1);
    const q1 = get_implicit_form3_exact_edif(a3b0, a0b3);
    const q2 = get_implicit_form3_exact_edif(a3b1, a1b3);
    const q3 = get_implicit_form3_exact_edif(a3b2, a2b3);
    const q4 = get_implicit_form3_exact_edif(a2b0, a0b2);
    const q5 = get_implicit_form3_exact_edif(a2b1, a1b2);
    const q6 = get_implicit_form3_exact_edif(a1b0, a0b1);
    const t1 = get_implicit_form3_exact_edif(b1b3, b2b2);
    const t2 = get_implicit_form3_exact_edif(a1a3, a2a2);
    const p1 = get_implicit_form3_exact_fes(a2b3, a3b2);
    const p2 = get_implicit_form3_exact_fes(a1b3, a3b1);
    const tq2 = get_implicit_form3_exact_em2(q2); // error free
    const q1q1 = get_implicit_form3_exact_epr(q1, q1);
    const q1q2 = get_implicit_form3_exact_epr(q1, q2);
    const q1q3 = get_implicit_form3_exact_epr(q1, q3);
    const q1q5 = get_implicit_form3_exact_epr(q1, q5);
    const q2q2 = get_implicit_form3_exact_epr(q2, q2);
    const tq2q4 = get_implicit_form3_exact_epr(tq2, q4);
    const q3q4 = get_implicit_form3_exact_epr(q3, q4);
    const q3q5 = get_implicit_form3_exact_epr(q3, q5);
    const q3q6 = get_implicit_form3_exact_epr(q3, q6);
    const vₓₓₓ = get_implicit_form3_exact_epr(get_implicit_form3_exact_eno(b3), b3b3);
    const vₓₓᵧ = get_implicit_form3_exact_epr(get_implicit_form3_exact_sce(3, a3), b3b3);
    const vₓᵧᵧ = get_implicit_form3_exact_epr(get_implicit_form3_exact_sce(-3, b3), a3a3);
    const vᵧᵧᵧ = get_implicit_form3_exact_epr(a3, a3a3);
    const u1 = get_implicit_form3_exact_edif(get_implicit_form3_exact_sce(-3, q1), q5);
    //const vₓₓ = (u1*b3b3 + q3*(b1b3 - b2b2)) + tq2*b2b3;
    const w1 = get_implicit_form3_exact_epr(u1, b3b3);
    const w2 = get_implicit_form3_exact_epr(q3, t1);
    const w3 = get_implicit_form3_exact_fes(w1, w2);
    const w4 = get_implicit_form3_exact_epr(tq2, b2b3);
    const vₓₓ = get_implicit_form3_exact_fes(w3, w4);
    //const vᵧᵧ = (u1*a3a3 + q3*t2) + tq2*a2a3;
    const w5 = get_implicit_form3_exact_epr(u1, a3a3);
    const w6 = get_implicit_form3_exact_epr(q3, t2);
    const w7 = get_implicit_form3_exact_fes(w5, w6);
    const w8 = get_implicit_form3_exact_epr(tq2, a2a3);
    const vᵧᵧ = get_implicit_form3_exact_fes(w7, w8);
    //const vₓᵧ = 2*(q3*(a2b2 - p2/2) - (u1*a3b3 + q2*p1));
    const wa = get_implicit_form3_exact_edif(a2b2, ed2(p2));
    const wb = get_implicit_form3_exact_epr(u1, a3b3);
    const wc = get_implicit_form3_exact_epr(q2, p1);
    const wd = get_implicit_form3_exact_fes(wb, wc);
    const wq = get_implicit_form3_exact_epr(q3, wa);
    const vₓᵧ = get_implicit_form3_exact_em2(get_implicit_form3_exact_edif(wq, wd));
    //const s1 = (-3*q1q1 - 2*q1q5) + (tq2q4 + q3q6);
    const wr = get_implicit_form3_exact_sce(-3, q1q1);
    const we = get_implicit_form3_exact_edif(wr, get_implicit_form3_exact_em2(q1q5));
    const wf = get_implicit_form3_exact_fes(tq2q4, q3q6);
    const s1 = get_implicit_form3_exact_fes(we, wf);
    //const s2 = 2*(q1q2 - q3q4);
    const s2 = get_implicit_form3_exact_em2(get_implicit_form3_exact_edif(q1q2, q3q4));
    //const s3 = q1q3 - q2q2 + q3q5;
    const wl = get_implicit_form3_exact_edif(q1q3, q2q2);
    const s3 = get_implicit_form3_exact_fes(wl, q3q5);
    //const vₓ = b3*s1 + (b2*s2 + b1*s3);
    const wm = get_implicit_form3_exact_epr(b3, s1);
    const ws = get_implicit_form3_exact_epr(b2, s2);
    const wt = get_implicit_form3_exact_epr(b1, s3);
    const wn = get_implicit_form3_exact_fes(ws, wt);
    const vₓ = get_implicit_form3_exact_fes(wm, wn);
    //const vᵧ = -a3*s1 - (a2*s2 + a1*s3);
    const wo = get_implicit_form3_exact_epr(a3, s1);
    const wu = get_implicit_form3_exact_epr(a2, s2);
    const wv = get_implicit_form3_exact_epr(a1, s3);
    const wp = get_implicit_form3_exact_fes(wu, wv);
    const vᵧ = get_implicit_form3_exact_eno(get_implicit_form3_exact_fes(wo, wp));
    const v3 = get_implicit_form3_exact_edif(tq2q4, q1q1);
    const v1 = get_implicit_form3_exact_edif(v3, q1q5);
    const v4 = get_implicit_form3_exact_epr(s3, q6);
    const v5 = get_implicit_form3_exact_epr(q3q4, q4);
    const v2 = get_implicit_form3_exact_edif(v4, v5);
    const v6 = get_implicit_form3_exact_epr(q1, v1);
    //const v = q1*(tq2q4 - q1q1 - q1q5) + s3*q6 - q3q4*q4;
    const v = get_implicit_form3_exact_fes(v6, v2);
    return { vₓₓₓ, vₓₓᵧ, vₓᵧᵧ, vᵧᵧᵧ, vₓₓ, vₓᵧ, vᵧᵧ, vₓ, vᵧ, v };
}

//# sourceMappingURL=get-implicit-form3-exact.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/bezier-bezier-intersection/get-coefficients/exact/get-coeffs-bez3-bez1-exact.js

// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗




const get_coeffs_bez3_bez1_exact_tp = basic_two_product_twoProduct; // error -> 0
const get_coeffs_bez3_bez1_exact_sce = scaleExpansion2;
const get_coeffs_bez3_bez1_exact_epr = expansionProduct;
const get_coeffs_bez3_bez1_exact_fes = fastExpansionSum;
const get_coeffs_bez3_bez1_exact_em2 = eMultBy2;
const get_coeffs_bez3_bez1_exact_eSign = e_sign_eSign;
/**
 * Returns an error-free polynomial in 1 variable
 * whose roots are the parameter values of the intersection points of an order
 * 3 and 1 bezier curve (i.e. a cubic bezier curve and a line).
 *
 * The returned polynomial degree will be 3
 * (see [Bézout's theorem](https://en.wikipedia.org/wiki/B%C3%A9zout%27s_theorem))
 *
 * The returned polynomial coefficients are given densely as an array of
 * [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf) floating point expansions from highest to lowest power,
 * e.g. `[[5],[-3],[0]]` represents the polynomial `5x^2 - 3x`.
 *
  * * the returned polynomial coefficients are exact (i.e. error-free)
 * * adapted from [Indrek Mandre](http://www.mare.ee/indrek/misc/2d.pdf)
 *
 * @param ps1
 * @param ps2
 *
 * @internal
 */
function getCoeffsBez3Bez1Exact(ps1, ps2) {
    /** ps1 in power bases */
    const ps1pb = toPowerBasis3Exact(ps1);
    //const [[e3,e2,e1,e0],[f3,f2,f1,f0]] = ps1pb;
    // if both polynomials' cubic terms are exactly zero then its really a quadratic
    if (get_coeffs_bez3_bez1_exact_eSign(ps1pb[0][0]) === 0 && get_coeffs_bez3_bez1_exact_eSign(ps1pb[1][0]) === 0) {
        // the input bezier curve is in fact not cubic but has order < 3
        return getCoeffsBez2Bez1Exact(cubicToQuadratic(ps1), ps2);
    }
    const [[c1, [c0]], [d1, [d0]]] = toPowerBasis1Exact(ps2);
    // if (eSign(c1) === 0 && eSign(d1) === 0) {
    // The input bezier curve is in fact not a line but has order < 1, i.e. it is a point.
    // This shouldn't happen due to being checked for earlier.
    // }
    const { vₓₓₓ, vₓₓᵧ, vₓᵧᵧ, vᵧᵧᵧ, vₓₓ, vₓᵧ, vᵧᵧ, vₓ, vᵧ, v } = 
    // this type coercion is justified since we already checked that the
    // curve really has order 3
    getImplicitForm3ExactPb(ps1pb);
    const c0c0 = get_coeffs_bez3_bez1_exact_tp(c0, c0);
    const c0c1 = get_coeffs_bez3_bez1_exact_sce(c0, c1);
    const c0d0 = get_coeffs_bez3_bez1_exact_tp(c0, d0);
    const c0d1 = get_coeffs_bez3_bez1_exact_sce(c0, d1);
    const c1c1 = get_coeffs_bez3_bez1_exact_epr(c1, c1);
    const c1d0 = get_coeffs_bez3_bez1_exact_sce(d0, c1);
    const c1d1 = get_coeffs_bez3_bez1_exact_epr(c1, d1);
    const d0d0 = get_coeffs_bez3_bez1_exact_tp(d0, d0);
    const d0d1 = get_coeffs_bez3_bez1_exact_sce(d0, d1);
    const d1d1 = get_coeffs_bez3_bez1_exact_epr(d1, d1);
    const z1 = get_coeffs_bez3_bez1_exact_sce(c0, vₓₓₓ);
    const z7 = get_coeffs_bez3_bez1_exact_epr(get_coeffs_bez3_bez1_exact_tp(3, c0), vₓₓₓ);
    const z2 = get_coeffs_bez3_bez1_exact_sce(c0, vₓₓᵧ);
    const z3 = get_coeffs_bez3_bez1_exact_sce(d0, vₓₓᵧ);
    const z4 = get_coeffs_bez3_bez1_exact_sce(c0, vₓᵧᵧ);
    const z5 = get_coeffs_bez3_bez1_exact_sce(d0, vₓᵧᵧ);
    const z6 = get_coeffs_bez3_bez1_exact_sce(d0, vᵧᵧᵧ);
    const z8 = get_coeffs_bez3_bez1_exact_epr(get_coeffs_bez3_bez1_exact_tp(3, d0), vᵧᵧᵧ);
    // a1**3*v_xxx + a1**2*b1*v_xxy + a1*b1**2*v_xyy + b1**3*v_yyy
    //const v3 =
    //    c1c1*(c1*vₓₓₓ + d1*vₓₓᵧ) +
    //    d1d1*(c1*vₓᵧᵧ + d1*vᵧᵧᵧ);
    const u1 = get_coeffs_bez3_bez1_exact_epr(c1, vₓₓₓ);
    const u2 = get_coeffs_bez3_bez1_exact_epr(c1, vₓᵧᵧ);
    const u3 = get_coeffs_bez3_bez1_exact_epr(d1, vₓₓᵧ);
    const u4 = get_coeffs_bez3_bez1_exact_epr(d1, vᵧᵧᵧ);
    const u5 = get_coeffs_bez3_bez1_exact_fes(u1, u3);
    const u6 = get_coeffs_bez3_bez1_exact_fes(u2, u4);
    const u7 = get_coeffs_bez3_bez1_exact_epr(c1c1, u5);
    const u8 = get_coeffs_bez3_bez1_exact_epr(d1d1, u6);
    const v3 = get_coeffs_bez3_bez1_exact_fes(u7, u8);
    // 3*a0*a1**2*v_xxx + 2*a0*a1*b1*v_xxy + a0*b1**2*v_xyy + a1**2*b0*v_xxy + a1**2*v_xx + 2*a1*b0*b1*v_xyy + a1*b1*v_xy + 3*b0*b1**2*v_yyy + b1**2*v_yy
    //const v2 =
    //    c1c1*(3*c0*vₓₓₓ +   d0*vₓₓᵧ + vₓₓ) +
    //    c1d1*(2*c0*vₓₓᵧ + 2*d0*vₓᵧᵧ + vₓᵧ) +
    //    d1d1*(  c0*vₓᵧᵧ + 3*d0*vᵧᵧᵧ + vᵧᵧ);
    //const v2 =
    //    c1c1*(3*z1 +   z3 + vₓₓ) +
    //    c1d1*(2*z2 + 2*z5 + vₓᵧ) +
    //    d1d1*(  z4 + 3*z6 + vᵧᵧ);
    const u9 = get_coeffs_bez3_bez1_exact_fes(z7, z3);
    const ua = get_coeffs_bez3_bez1_exact_em2(get_coeffs_bez3_bez1_exact_fes(z2, z5));
    const ub = get_coeffs_bez3_bez1_exact_fes(z4, z8);
    const uc = get_coeffs_bez3_bez1_exact_fes(u9, vₓₓ);
    const ud = get_coeffs_bez3_bez1_exact_fes(ua, vₓᵧ);
    const ue = get_coeffs_bez3_bez1_exact_fes(ub, vᵧᵧ);
    const uf = get_coeffs_bez3_bez1_exact_epr(c1c1, uc);
    const ug = get_coeffs_bez3_bez1_exact_epr(c1d1, ud);
    const uh = get_coeffs_bez3_bez1_exact_epr(d1d1, ue);
    const ui = get_coeffs_bez3_bez1_exact_fes(uf, ug);
    const v2 = get_coeffs_bez3_bez1_exact_fes(ui, uh);
    // 3*a0**2*a1*v_xxx + a0**2*b1*v_xxy + 2*a0*a1*b0*v_xxy + 2*a0*a1*v_xx + 2*a0*b0*b1*v_xyy + a0*b1*v_xy + a1*b0**2*v_xyy + a1*b0*v_xy + a1*v_x + 3*b0**2*b1*v_yyy + 2*b0*b1*v_yy + b1*v_y
    //const v1 =
    //    c0c1*(3*c0*vₓₓₓ + 2*(d0*vₓₓᵧ + vₓₓ)) +
    //    d0d1*(3*d0*vᵧᵧᵧ + 2*(c0*vₓᵧᵧ + vᵧᵧ)) +
    //    c0d1*(c0*vₓₓᵧ + vₓᵧ) +
    //    c1d0*(d0*vₓᵧᵧ + vₓᵧ) +
    //    vₓ*c1 +
    //    vᵧ*d1;
    const uj = get_coeffs_bez3_bez1_exact_em2(get_coeffs_bez3_bez1_exact_fes(z3, vₓₓ));
    const uk = get_coeffs_bez3_bez1_exact_em2(get_coeffs_bez3_bez1_exact_fes(z4, vᵧᵧ));
    const un = get_coeffs_bez3_bez1_exact_fes(z7, uj);
    const uo = get_coeffs_bez3_bez1_exact_fes(z8, uk);
    const up = get_coeffs_bez3_bez1_exact_fes(z2, vₓᵧ);
    const uq = get_coeffs_bez3_bez1_exact_fes(z5, vₓᵧ);
    const ur = get_coeffs_bez3_bez1_exact_epr(c0c1, un);
    const us = get_coeffs_bez3_bez1_exact_epr(d0d1, uo);
    const ut = get_coeffs_bez3_bez1_exact_epr(c0d1, up);
    const uu = get_coeffs_bez3_bez1_exact_epr(c1d0, uq);
    const uv = get_coeffs_bez3_bez1_exact_epr(c1, vₓ);
    const uw = get_coeffs_bez3_bez1_exact_epr(d1, vᵧ);
    const ux = get_coeffs_bez3_bez1_exact_fes(ur, us);
    const uy = get_coeffs_bez3_bez1_exact_fes(ut, uu);
    const uz = get_coeffs_bez3_bez1_exact_fes(ux, uy);
    const u0 = get_coeffs_bez3_bez1_exact_fes(uv, uw);
    const v1 = get_coeffs_bez3_bez1_exact_fes(uz, u0);
    // a0**3*v_xxx + a0**2*b0*v_xxy + a0**2*v_xx + a0*b0**2*v_xyy + a0*b0*v_xy + a0*v_x + b0**3*v_yyy + b0**2*v_yy + b0*v_y + v_0
    //const v0 =
    //    c0c0*(c0*vₓₓₓ + d0*vₓₓᵧ + vₓₓ) +
    //    d0d0*(d0*vᵧᵧᵧ + c0*vₓᵧᵧ + vᵧᵧ) +
    //    c0d0*vₓᵧ +
    //    c0*vₓ    +
    //    d0*vᵧ    +
    //    v;
    //const v0 =
    //    c0c0*(z1 + z3 + vₓₓ) +
    //    d0d0*(z6 + z4 + vᵧᵧ) +
    //    c0d0*vₓᵧ +
    //    c0*vₓ    +
    //    d0*vᵧ    +
    //    v;
    const f1 = get_coeffs_bez3_bez1_exact_fes(z1, z3);
    const f2 = get_coeffs_bez3_bez1_exact_fes(z6, z4);
    const f3 = get_coeffs_bez3_bez1_exact_fes(f1, vₓₓ);
    const f4 = get_coeffs_bez3_bez1_exact_fes(f2, vᵧᵧ);
    const f5 = get_coeffs_bez3_bez1_exact_epr(c0c0, f3);
    const f6 = get_coeffs_bez3_bez1_exact_epr(d0d0, f4);
    const f7 = get_coeffs_bez3_bez1_exact_epr(c0d0, vₓᵧ);
    const f8 = get_coeffs_bez3_bez1_exact_fes(f5, f6);
    const f9 = get_coeffs_bez3_bez1_exact_fes(f8, f7);
    const fa = get_coeffs_bez3_bez1_exact_sce(c0, vₓ);
    const fb = get_coeffs_bez3_bez1_exact_sce(d0, vᵧ);
    const fc = get_coeffs_bez3_bez1_exact_fes(fa, fb);
    const fd = get_coeffs_bez3_bez1_exact_fes(f9, fc);
    const v0 = get_coeffs_bez3_bez1_exact_fes(fd, v);
    const r = [v3, v2, v1, v0];
    return r;
}

//# sourceMappingURL=get-coeffs-bez3-bez1-exact.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/bezier-bezier-intersection/get-coefficients/exact/get-coeffs-bez1-bez2-exact.js


// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗


const get_coeffs_bez1_bez2_exact_sce = scaleExpansion2;
const get_coeffs_bez1_bez2_exact_epr = expansionProduct;
const get_coeffs_bez1_bez2_exact_fes = fastExpansionSum;
const get_coeffs_bez1_bez2_exact_eSign = e_sign_eSign;
/**
 * Returns an error-free polynomial in 1 variable
 * whose roots are the parameter values of the intersection points of an order
 * 1 and order 2 bezier curve (i.e. a line and a quadratic bezier curve).
 *
 * The returned polynomial degree will be 2
 * (see [Bézout's theorem](https://en.wikipedia.org/wiki/B%C3%A9zout%27s_theorem))
 *
 * The returned polynomial coefficients are given densely as an array of
 * [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf) floating point expansions from highest to lowest power,
 * e.g. `[[5],[-3],[0]]` represents the polynomial `5x^2 - 3x`.
 *
 * * the returned polynomial coefficients are exact (i.e. error-free)
 * * adapted from [Indrek Mandre](http://www.mare.ee/indrek/misc/2d.pdf)
 *
 * @param ps1
 * @param ps2
 *
 * @internal
 */
function getCoeffsBez1Bez2Exact(ps1, ps2) {
    /** ps1 in power bases */
    const ps1pb = toPowerBasis1Exact(ps1);
    // if both polynomials' linear terms are exactly zero then it really is a point
    // if (eSign(ps1pb[0][0]) === 0 && eSign(ps1pb[1][0]) === 0) {
    // The input bezier curve is in fact not a line but has order < 1, i.e. it is a point.
    // This shouldn't happen due to being checked for earlier.
    // }
    const [[c2, c1, [c0]], [d2, d1, [d0]]] = toPowerBasis2Exact(ps2);
    if (get_coeffs_bez1_bez2_exact_eSign(c2) === 0 && get_coeffs_bez1_bez2_exact_eSign(d2) === 0) {
        // the input bezier curve is in fact not quadratic but has order < 2
        return getCoeffsBez1Bez1Exact(ps1, [ps2[0], ps2[2]]);
    }
    const { vₓ, vᵧ, v } = 
    // this type coercion is justified since we already checked that the
    // curve really has order 1
    getImplicitForm1ExactPb(ps1pb);
    // a2*v_x + b2*v_y
    //const v2 = c2*vₓ + d2*vᵧ;
    const p1 = get_coeffs_bez1_bez2_exact_epr(c2, vₓ);
    const p2 = get_coeffs_bez1_bez2_exact_epr(d2, vᵧ);
    const v2 = get_coeffs_bez1_bez2_exact_fes(p1, p2);
    // a1*v_x + b1*v_y
    //const v1 = c1*vₓ + d1*vᵧ;
    const p3 = get_coeffs_bez1_bez2_exact_epr(c1, vₓ);
    const p4 = get_coeffs_bez1_bez2_exact_epr(d1, vᵧ);
    const v1 = get_coeffs_bez1_bez2_exact_fes(p3, p4);
    // a0*v_x + b0*v_y + v_0
    //const v0 = c0*vₓ + d0*vᵧ + v;
    const p5 = get_coeffs_bez1_bez2_exact_sce(c0, vₓ);
    const p6 = get_coeffs_bez1_bez2_exact_sce(d0, vᵧ);
    const p7 = get_coeffs_bez1_bez2_exact_fes(p5, p6);
    const v0 = get_coeffs_bez1_bez2_exact_fes(p7, v);
    const r = [v2, v1, v0];
    return r;
}

//# sourceMappingURL=get-coeffs-bez1-bez2-exact.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/bezier-bezier-intersection/get-coefficients/exact/get-coeffs-bez2-bez2-exact.js


// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗



const get_coeffs_bez2_bez2_exact_tp = basic_two_product_twoProduct; // error -> 0
const get_coeffs_bez2_bez2_exact_sce = scaleExpansion2;
const get_coeffs_bez2_bez2_exact_epr = expansionProduct;
const get_coeffs_bez2_bez2_exact_fes = fastExpansionSum;
const get_coeffs_bez2_bez2_exact_em2 = eMultBy2;
const get_coeffs_bez2_bez2_exact_eSign = e_sign_eSign;
/**
 * Returns an error-free polynomial in 1 variable
 * whose roots are the parameter values of the intersection points of 2 order
 * 2 bezier curves (i.e. 2 quadratic bezier curves).
 *
 * The returned polynomial degree will be 4
 * (see [Bézout's theorem](https://en.wikipedia.org/wiki/B%C3%A9zout%27s_theorem))
 *
 * The returned polynomial coefficients are given densely as an array of
 * [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf) floating point expansions from highest to lowest power,
 * e.g. `[[5],[-3],[0]]` represents the polynomial `5x^2 - 3x`.
 *
 * * the returned polynomial coefficients are exact (i.e. error-free)
 * * adapted from [Indrek Mandre](http://www.mare.ee/indrek/misc/2d.pdf)
 *
 * @param ps1
 * @param ps2
 *
 * @internal
 */
function getCoeffsBez2Bez2Exact(ps1, ps2) {
    /** ps1 in power bases */
    const ps1pb = toPowerBasis2Exact(ps1);
    // if both polynomials' quadratic terms are exactly zero then its really a line
    if (get_coeffs_bez2_bez2_exact_eSign(ps1pb[0][0]) === 0 && get_coeffs_bez2_bez2_exact_eSign(ps1pb[1][0]) === 0) {
        // the input bezier curve is in fact not quadratic but has order < 2
        return getCoeffsBez1Bez2Exact([ps1[0], ps1[2]], ps2);
    }
    const [[c2, c1, [c0]], [d2, d1, [d0]]] = toPowerBasis2Exact(ps2);
    if (get_coeffs_bez2_bez2_exact_eSign(c2) === 0 && get_coeffs_bez2_bez2_exact_eSign(d2) === 0) {
        // the input bezier curve is in fact not quadratic but has order < 2
        return getCoeffsBez2Bez1Exact(ps1, [ps2[0], ps2[2]]);
    }
    const { vₓₓ, vₓᵧ, vᵧᵧ, vₓ, vᵧ, v } = 
    // this type coercion is justified since we already checked that the
    // curve really has order 2
    getImplicitForm2ExactPb(ps1pb);
    const c0c0 = get_coeffs_bez2_bez2_exact_tp(c0, c0);
    const c0c1 = get_coeffs_bez2_bez2_exact_sce(c0, c1);
    const c0c2 = get_coeffs_bez2_bez2_exact_sce(c0, c2);
    const c0d0 = get_coeffs_bez2_bez2_exact_tp(c0, d0);
    const c0d1 = get_coeffs_bez2_bez2_exact_sce(c0, d1);
    const c0d2 = get_coeffs_bez2_bez2_exact_sce(c0, d2);
    const c1c1 = get_coeffs_bez2_bez2_exact_epr(c1, c1);
    const c1c2 = get_coeffs_bez2_bez2_exact_epr(c1, c2);
    const c1d0 = get_coeffs_bez2_bez2_exact_sce(d0, c1);
    const c1d1 = get_coeffs_bez2_bez2_exact_epr(c1, d1);
    const c1d2 = get_coeffs_bez2_bez2_exact_epr(c1, d2);
    const c2d1 = get_coeffs_bez2_bez2_exact_epr(c2, d1);
    const c2c2 = get_coeffs_bez2_bez2_exact_epr(c2, c2);
    const c2d0 = get_coeffs_bez2_bez2_exact_sce(d0, c2);
    const c2d2 = get_coeffs_bez2_bez2_exact_epr(c2, d2);
    const d0d0 = get_coeffs_bez2_bez2_exact_tp(d0, d0);
    const d0d1 = get_coeffs_bez2_bez2_exact_sce(d0, d1);
    const d0d2 = get_coeffs_bez2_bez2_exact_sce(d0, d2);
    const d1d1 = get_coeffs_bez2_bez2_exact_epr(d1, d1);
    const d1d2 = get_coeffs_bez2_bez2_exact_epr(d1, d2);
    const d2d2 = get_coeffs_bez2_bez2_exact_epr(d2, d2);
    // a2**2*v_xx + a2*b2*v_xy + b2**2*v_yy
    //const v4 = 
    //    (c2*c2)*vₓₓ +
    //    (c2*d2)*vₓᵧ +
    //    (d2*d2)*vᵧᵧ;
    const p1 = get_coeffs_bez2_bez2_exact_epr(c2c2, vₓₓ);
    const p2 = get_coeffs_bez2_bez2_exact_epr(c2d2, vₓᵧ);
    const p3 = get_coeffs_bez2_bez2_exact_epr(d2d2, vᵧᵧ);
    const p4 = get_coeffs_bez2_bez2_exact_fes(p1, p2);
    const v4 = get_coeffs_bez2_bez2_exact_fes(p4, p3);
    // 2*a1*a2*v_xx + a1*b2*v_xy + a2*b1*v_xy + 2*b1*b2*v_yy
    //const v3 =
    //    2*((c1*c2)*vₓₓ + (d1*d2)*vᵧᵧ) +
    //    ((c1*d2) + (c2*d1))*vₓᵧ;
    const p5 = get_coeffs_bez2_bez2_exact_epr(c1c2, vₓₓ);
    const p6 = get_coeffs_bez2_bez2_exact_epr(d1d2, vᵧᵧ);
    const p7 = get_coeffs_bez2_bez2_exact_fes(c1d2, c2d1);
    const p8 = get_coeffs_bez2_bez2_exact_epr(p7, vₓᵧ);
    const p9 = get_coeffs_bez2_bez2_exact_em2(get_coeffs_bez2_bez2_exact_fes(p5, p6));
    const v3 = get_coeffs_bez2_bez2_exact_fes(p9, p8);
    // 2*a0*a2*v_xx + a0*b2*v_xy + a1**2*v_xx + 
    // a1*b1*v_xy + a2*b0*v_xy + a2*v_x + 
    // 2*b0*b2*v_yy + b1**2*v_yy + b2*v_y
    //const v2 = 
    //    (2*(c0*c2) + (c1*c1))*vₓₓ +
    //    (2*(d0*d2) + (d1*d1))*vᵧᵧ +          
    //    ((c0*d2) + (c1*d1) + (c2*d0))*vₓᵧ +
    //    c2*vₓ  +          
    //    d2*vᵧ;
    const pa = get_coeffs_bez2_bez2_exact_fes(get_coeffs_bez2_bez2_exact_em2(c0c2), c1c1);
    const pb = get_coeffs_bez2_bez2_exact_fes(get_coeffs_bez2_bez2_exact_em2(d0d2), d1d1);
    const pc = get_coeffs_bez2_bez2_exact_fes(c0d2, c1d1);
    const pd = get_coeffs_bez2_bez2_exact_fes(pc, c2d0);
    const pe = get_coeffs_bez2_bez2_exact_epr(pa, vₓₓ);
    const pf = get_coeffs_bez2_bez2_exact_epr(pb, vᵧᵧ);
    const pg = get_coeffs_bez2_bez2_exact_epr(pd, vₓᵧ);
    const ph = get_coeffs_bez2_bez2_exact_epr(c2, vₓ);
    const pi = get_coeffs_bez2_bez2_exact_epr(d2, vᵧ);
    const pj = get_coeffs_bez2_bez2_exact_fes(pe, pf);
    const pk = get_coeffs_bez2_bez2_exact_fes(pj, pg);
    const pl = get_coeffs_bez2_bez2_exact_fes(ph, pi);
    const v2 = get_coeffs_bez2_bez2_exact_fes(pk, pl);
    // 2*a0*a1*v_xx + a0*b1*v_xy + a1*b0*v_xy + 
    // a1*v_x + 2*b0*b1*v_yy + b1*v_y
    //const v1 =
    //    2*((c0*c1)*vₓₓ + (d0*d1)*vᵧᵧ) +
    //    ((c0*d1) + (c1*d0))*vₓᵧ +
    //    c1*vₓ  +
    //    d1*vᵧ;
    const pm = get_coeffs_bez2_bez2_exact_epr(c0c1, vₓₓ);
    const pn = get_coeffs_bez2_bez2_exact_epr(d0d1, vᵧᵧ);
    const po = get_coeffs_bez2_bez2_exact_fes(c0d1, c1d0);
    const pp = get_coeffs_bez2_bez2_exact_epr(po, vₓᵧ);
    const pq = get_coeffs_bez2_bez2_exact_em2(get_coeffs_bez2_bez2_exact_fes(pm, pn));
    const pr = get_coeffs_bez2_bez2_exact_epr(c1, vₓ);
    const ps = get_coeffs_bez2_bez2_exact_epr(d1, vᵧ);
    const pt = get_coeffs_bez2_bez2_exact_fes(pq, pp);
    const pu = get_coeffs_bez2_bez2_exact_fes(pr, ps);
    const v1 = get_coeffs_bez2_bez2_exact_fes(pt, pu);
    // a0**2*v_xx + a0*b0*v_xy + a0*v_x + 
    // b0**2*v_yy + b0*v_y + v_0
    //const v0 =
    //    (c0*c0)*vₓₓ + 
    //    (c0*d0)*vₓᵧ + 
    //    (d0*d0)*vᵧᵧ + 
    //    c0*vₓ  +         
    //    d0*vᵧ  +
    //    v;
    const pv = get_coeffs_bez2_bez2_exact_epr(c0c0, vₓₓ);
    const pw = get_coeffs_bez2_bez2_exact_epr(c0d0, vₓᵧ);
    const px = get_coeffs_bez2_bez2_exact_epr(d0d0, vᵧᵧ);
    const py = get_coeffs_bez2_bez2_exact_sce(c0, vₓ);
    const pz = get_coeffs_bez2_bez2_exact_sce(d0, vᵧ);
    const q1 = get_coeffs_bez2_bez2_exact_fes(pv, pw);
    const q2 = get_coeffs_bez2_bez2_exact_fes(q1, px);
    const q3 = get_coeffs_bez2_bez2_exact_fes(py, pz);
    const q4 = get_coeffs_bez2_bez2_exact_fes(q2, q3);
    const v0 = get_coeffs_bez2_bez2_exact_fes(q4, v);
    const r = [v4, v3, v2, v1, v0];
    return r;
}

//# sourceMappingURL=get-coeffs-bez2-bez2-exact.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/bezier-bezier-intersection/get-coefficients/exact/get-coeffs-bez3-bez2-exact.js





// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗

const get_coeffs_bez3_bez2_exact_tp = basic_two_product_twoProduct; // error -> 0
const get_coeffs_bez3_bez2_exact_sce = scaleExpansion2;
const get_coeffs_bez3_bez2_exact_epr = expansionProduct;
const get_coeffs_bez3_bez2_exact_fes = fastExpansionSum;
const get_coeffs_bez3_bez2_exact_em2 = eMultBy2;
const get_coeffs_bez3_bez2_exact_eSign = e_sign_eSign;
/**
 * Returns an error-free polynomial in 1 variable
 * whose roots are the parameter values of the intersection points of an order
 * 3 and 2 bezier curve (i.e. a cubic bezier curve and a quadratic bezier curve).
 *
 * The returned polynomial degree will be 6
 * (see [Bézout's theorem](https://en.wikipedia.org/wiki/B%C3%A9zout%27s_theorem))
 *
 * The returned polynomial coefficients are given densely as an array of
 * [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf) floating point expansions from highest to lowest power,
 * e.g. `[[5],[-3],[0]]` represents the polynomial `5x^2 - 3x`.
 *
  * * the returned polynomial coefficients are exact (i.e. error-free)
 * * adapted from [Indrek Mandre](http://www.mare.ee/indrek/misc/2d.pdf)
 *
 * @param ps1
 * @param ps2
 *
 * @internal
 */
function getCoeffsBez3Bez2Exact(ps1, ps2) {
    /** ps1 in power bases */
    const ps1pb = toPowerBasis3Exact(ps1);
    //const [[e3,e2,e1,e0],[f3,f2,f1,f0]] = ps1pb;
    // if both polynomials' cubic terms are exactly zero then its really a quadratic
    if (get_coeffs_bez3_bez2_exact_eSign(ps1pb[0][0]) === 0 && get_coeffs_bez3_bez2_exact_eSign(ps1pb[1][0]) === 0) {
        // the input bezier curve is in fact not cubic but has order < 3
        return getCoeffsBez2Bez2Exact(cubicToQuadratic(ps1), ps2);
    }
    const [[c2, c1, [c0]], [d2, d1, [d0]]] = toPowerBasis2Exact(ps2);
    if (get_coeffs_bez3_bez2_exact_eSign(c2) === 0 && get_coeffs_bez3_bez2_exact_eSign(d2) === 0) {
        // the input bezier curve is in fact not quadratic but has order < 2
        return getCoeffsBez3Bez1Exact(ps1, [ps2[0], ps2[2]]);
    }
    const { vₓₓₓ, vₓₓᵧ, vₓᵧᵧ, vᵧᵧᵧ, vₓₓ, vₓᵧ, vᵧᵧ, vₓ, vᵧ, v } = 
    // this type coercion is justified since we already checked that the
    // curve really has order 3
    getImplicitForm3ExactPb(ps1pb);
    const c0c0 = get_coeffs_bez3_bez2_exact_tp(c0, c0);
    const c0c1 = get_coeffs_bez3_bez2_exact_sce(c0, c1);
    const c0c2 = get_coeffs_bez3_bez2_exact_sce(c0, c2);
    const c0d0 = get_coeffs_bez3_bez2_exact_tp(c0, d0);
    const c0d1 = get_coeffs_bez3_bez2_exact_sce(c0, d1);
    const c0d2 = get_coeffs_bez3_bez2_exact_sce(c0, d2);
    const c1c1 = get_coeffs_bez3_bez2_exact_epr(c1, c1);
    const c1c2 = get_coeffs_bez3_bez2_exact_epr(c1, c2);
    const c1d0 = get_coeffs_bez3_bez2_exact_sce(d0, c1);
    const c1d1 = get_coeffs_bez3_bez2_exact_epr(c1, d1);
    const c1d2 = get_coeffs_bez3_bez2_exact_epr(c1, d2);
    const c2d1 = get_coeffs_bez3_bez2_exact_epr(c2, d1);
    const c2c2 = get_coeffs_bez3_bez2_exact_epr(c2, c2);
    const c2d0 = get_coeffs_bez3_bez2_exact_sce(d0, c2);
    const c2d2 = get_coeffs_bez3_bez2_exact_epr(c2, d2);
    const d0d0 = get_coeffs_bez3_bez2_exact_tp(d0, d0);
    const d0d1 = get_coeffs_bez3_bez2_exact_sce(d0, d1);
    const d0d2 = get_coeffs_bez3_bez2_exact_sce(d0, d2);
    const d1d1 = get_coeffs_bez3_bez2_exact_epr(d1, d1);
    const d1d2 = get_coeffs_bez3_bez2_exact_epr(d1, d2);
    const d2d2 = get_coeffs_bez3_bez2_exact_epr(d2, d2);
    // a2**3*v_xxx + a2**2*b2*v_xxy + a2*b2**2*v_xyy + b2**3*v_yyy
    //const v6 =
    //    c2c2*(c2*vₓₓₓ + d2*vₓₓᵧ) +
    //    d2d2*(c2*vₓᵧᵧ + d2*vᵧᵧᵧ);
    const e1 = get_coeffs_bez3_bez2_exact_epr(c2, vₓₓₓ);
    const e2 = get_coeffs_bez3_bez2_exact_epr(c2, vₓᵧᵧ);
    const e3 = get_coeffs_bez3_bez2_exact_epr(d2, vₓₓᵧ);
    const e4 = get_coeffs_bez3_bez2_exact_epr(d2, vᵧᵧᵧ);
    const e5 = get_coeffs_bez3_bez2_exact_fes(e1, e3);
    const e6 = get_coeffs_bez3_bez2_exact_fes(e2, e4);
    const e7 = get_coeffs_bez3_bez2_exact_epr(c2c2, e5);
    const e8 = get_coeffs_bez3_bez2_exact_epr(d2d2, e6);
    const v6 = get_coeffs_bez3_bez2_exact_fes(e7, e8);
    const z1 = get_coeffs_bez3_bez2_exact_fes(c0c2, c1c1);
    const z2 = get_coeffs_bez3_bez2_exact_fes(d0d2, d1d1);
    const z3 = get_coeffs_bez3_bez2_exact_fes(get_coeffs_bez3_bez2_exact_em2(c0c2), c1c1);
    const z4 = get_coeffs_bez3_bez2_exact_fes(get_coeffs_bez3_bez2_exact_em2(d0d2), d1d1);
    const z5 = get_coeffs_bez3_bez2_exact_fes(get_coeffs_bez3_bez2_exact_em2(c1d1), c2d0);
    const z6 = get_coeffs_bez3_bez2_exact_fes(get_coeffs_bez3_bez2_exact_em2(c1d1), c0d2);
    const z7 = get_coeffs_bez3_bez2_exact_fes(get_coeffs_bez3_bez2_exact_em2(c2d0), c1d1);
    const z8 = get_coeffs_bez3_bez2_exact_fes(get_coeffs_bez3_bez2_exact_sce(6, c0c2), c1c1);
    const z9 = get_coeffs_bez3_bez2_exact_fes(get_coeffs_bez3_bez2_exact_sce(6, d0d2), d1d1);
    const za = get_coeffs_bez3_bez2_exact_fes(c1d2, c2d1);
    const zb = get_coeffs_bez3_bez2_exact_fes(c0d2, c2d0);
    const zc = get_coeffs_bez3_bez2_exact_fes(get_coeffs_bez3_bez2_exact_em2(c1d0), c0d1);
    const zd = get_coeffs_bez3_bez2_exact_fes(get_coeffs_bez3_bez2_exact_em2(c0d1), c1d0);
    const zf = get_coeffs_bez3_bez2_exact_fes(c0d2, c1d1);
    const ze = get_coeffs_bez3_bez2_exact_fes(zf, c2d0);
    // 3*a1*a2**2*v_xxx + 2*a1*a2*b2*v_xxy + a1*b2**2*v_xyy + 
    // a2**2*b1*v_xxy + 2*a2*b1*b2*v_xyy + 3*b1*b2**2*v_yyy
    //const v5 =
    //    c1*(3*c2c2*vₓₓₓ + 2*c2d2*vₓₓᵧ +   d2d2*vₓᵧᵧ) +
    //    d1*(  c2c2*vₓₓᵧ + 2*c2d2*vₓᵧᵧ + 3*d2d2*vᵧᵧᵧ);
    const s0 = get_coeffs_bez3_bez2_exact_sce(3, c2c2);
    const t1 = get_coeffs_bez3_bez2_exact_sce(3, d2d2);
    const s1 = get_coeffs_bez3_bez2_exact_epr(s0, vₓₓₓ);
    const s2 = get_coeffs_bez3_bez2_exact_epr(c2c2, vₓₓᵧ);
    const s3 = get_coeffs_bez3_bez2_exact_em2(get_coeffs_bez3_bez2_exact_epr(c2d2, vₓₓᵧ));
    const s4 = get_coeffs_bez3_bez2_exact_em2(get_coeffs_bez3_bez2_exact_epr(c2d2, vₓᵧᵧ));
    const s5 = get_coeffs_bez3_bez2_exact_epr(d2d2, vₓᵧᵧ);
    const s6 = get_coeffs_bez3_bez2_exact_epr(t1, vᵧᵧᵧ);
    const s7 = get_coeffs_bez3_bez2_exact_fes(s1, s3);
    const s8 = get_coeffs_bez3_bez2_exact_fes(s2, s4);
    const s9 = get_coeffs_bez3_bez2_exact_fes(s7, s5);
    const sa = get_coeffs_bez3_bez2_exact_fes(s8, s6);
    const sb = get_coeffs_bez3_bez2_exact_epr(c1, s9);
    const sc = get_coeffs_bez3_bez2_exact_epr(d1, sa);
    const v5 = get_coeffs_bez3_bez2_exact_fes(sb, sc);
    // 3*a0*a2**2*v_xxx + 2*a0*a2*b2*v_xxy + a0*b2**2*v_xyy + 
    // 3*a1**2*a2*v_xxx + a1**2*b2*v_xxy + 2*a1*a2*b1*v_xxy + 
    // 2*a1*b1*b2*v_xyy + a2**2*b0*v_xxy + a2**2*v_xx + 
    // 2*a2*b0*b2*v_xyy + a2*b1**2*v_xyy + a2*b2*v_xy + 
    // 3*b0*b2**2*v_yyy + 3*b1**2*b2*v_yyy + b2**2*v_yy
    //const v4 =
    //    3*c2*(c0c2 + c1c1)*vₓₓₓ + 
    //    3*d2*(d0d2 + d1d1)*vᵧᵧᵧ + 
    //    (d2*(2*c0c2 + c1c1) + c2*(2*c1d1 + c2d0))*vₓₓᵧ +
    //    (d2*(2*c1d1 + c0d2) + c2*(2*d0d2 + d1d1))*vₓᵧᵧ +
    //    vₓₓ*c2c2 +
    //    vᵧᵧ*d2d2 +
    //    vₓᵧ*c2d2;
    //const v4 =
    //    (3*c2)*z1*vₓₓₓ + 
    //    (3*d2)*z2*vᵧᵧᵧ + 
    //    (d2*z3 + c2*z5)*vₓₓᵧ +
    //    (d2*z6 + c2*z4)*vₓᵧᵧ +
    //    vₓₓ*c2c2 +
    //    vᵧᵧ*d2d2 +
    //    vₓᵧ*c2d2;
    const sd = get_coeffs_bez3_bez2_exact_epr(d2, z3);
    const se = get_coeffs_bez3_bez2_exact_epr(d2, z6);
    const sf = get_coeffs_bez3_bez2_exact_epr(c2, z5);
    const sg = get_coeffs_bez3_bez2_exact_epr(c2, z4);
    const sh = get_coeffs_bez3_bez2_exact_epr(get_coeffs_bez3_bez2_exact_sce(3, c2), z1);
    const si = get_coeffs_bez3_bez2_exact_epr(get_coeffs_bez3_bez2_exact_sce(3, d2), z2);
    const sj = get_coeffs_bez3_bez2_exact_fes(sd, sf);
    const sk = get_coeffs_bez3_bez2_exact_fes(se, sg);
    const sl = get_coeffs_bez3_bez2_exact_epr(sh, vₓₓₓ);
    const sm = get_coeffs_bez3_bez2_exact_epr(si, vᵧᵧᵧ);
    const sn = get_coeffs_bez3_bez2_exact_epr(sj, vₓₓᵧ);
    const so = get_coeffs_bez3_bez2_exact_epr(sk, vₓᵧᵧ);
    const sp = get_coeffs_bez3_bez2_exact_fes(sl, sm);
    const sq = get_coeffs_bez3_bez2_exact_fes(sn, so);
    const sr = get_coeffs_bez3_bez2_exact_epr(c2c2, vₓₓ);
    const ss = get_coeffs_bez3_bez2_exact_epr(d2d2, vᵧᵧ);
    const st = get_coeffs_bez3_bez2_exact_epr(c2d2, vₓᵧ);
    const su = get_coeffs_bez3_bez2_exact_fes(sr, ss);
    const sv = get_coeffs_bez3_bez2_exact_fes(sp, sq);
    const sw = get_coeffs_bez3_bez2_exact_fes(su, st);
    const v4 = get_coeffs_bez3_bez2_exact_fes(sv, sw);
    // 6*a0*a1*a2*v_xxx + 2*a0*a1*b2*v_xxy + 2*a0*a2*b1*v_xxy + 
    // 2*a0*b1*b2*v_xyy + a1**3*v_xxx + a1**2*b1*v_xxy + 
    // 2*a1*a2*b0*v_xxy + 2*a1*a2*v_xx + 2*a1*b0*b2*v_xyy + 
    // a1*b1**2*v_xyy + a1*b2*v_xy + 2*a2*b0*b1*v_xyy + 
    // a2*b1*v_xy + 6*b0*b1*b2*v_yyy + b1**3*v_yyy + 
    // 2*b1*b2*v_yy
    //const v3 =
    //    c1*(6*c0c2 + c1c1)*vₓₓₓ +
    //    d1*(6*d0d2 + d1d1)*vᵧᵧᵧ +        
    //    (2*c0*(c1d2 + c2d1) + c1*(c1d1 + 2*c2d0))*vₓₓᵧ +
    //    (2*d1*(c0d2 + c2d0) + c1*(d1d1 + 2*d0d2))*vₓᵧᵧ +
    //    2*(d1d2*vᵧᵧ + c1c2*vₓₓ) +
    //    c1d2*vₓᵧ + c2d1*vₓᵧ;
    //const v3 =
    //    c1*z8*vₓₓₓ +
    //    d1*z9*vᵧᵧᵧ +        
    //    (2*c0*za + c1*z7)*vₓₓᵧ +
    //    (2*d1*zb + c1*z4)*vₓᵧᵧ +
    //    2*(d1d2*vᵧᵧ + c1c2*vₓₓ) +
    //    za*vₓᵧ;
    const sx = get_coeffs_bez3_bez2_exact_epr(c1, z8);
    const sy = get_coeffs_bez3_bez2_exact_epr(d1, z9);
    const sz = get_coeffs_bez3_bez2_exact_sce(2 * c0, za);
    const o1 = get_coeffs_bez3_bez2_exact_epr(get_coeffs_bez3_bez2_exact_em2(d1), zb);
    const o2 = get_coeffs_bez3_bez2_exact_epr(c1, z7);
    const o3 = get_coeffs_bez3_bez2_exact_epr(c1, z4);
    const o4 = get_coeffs_bez3_bez2_exact_fes(sz, o2);
    const o5 = get_coeffs_bez3_bez2_exact_fes(o1, o3);
    const o6 = get_coeffs_bez3_bez2_exact_epr(d1d2, vᵧᵧ);
    const o7 = get_coeffs_bez3_bez2_exact_epr(c1c2, vₓₓ);
    const o8 = get_coeffs_bez3_bez2_exact_epr(za, vₓᵧ);
    const o9 = get_coeffs_bez3_bez2_exact_fes(o6, o7);
    const oa = get_coeffs_bez3_bez2_exact_epr(sx, vₓₓₓ);
    const ob = get_coeffs_bez3_bez2_exact_epr(o4, vₓₓᵧ);
    const oc = get_coeffs_bez3_bez2_exact_epr(sy, vᵧᵧᵧ);
    const od = get_coeffs_bez3_bez2_exact_epr(o5, vₓᵧᵧ);
    const oe = get_coeffs_bez3_bez2_exact_fes(oa, oc);
    const og = get_coeffs_bez3_bez2_exact_fes(ob, od);
    const oh = get_coeffs_bez3_bez2_exact_fes(oe, og);
    const oi = get_coeffs_bez3_bez2_exact_fes(get_coeffs_bez3_bez2_exact_em2(o9), o8);
    const v3 = get_coeffs_bez3_bez2_exact_fes(oh, oi);
    // 3*a0**2*a2*v_xxx + a0**2*b2*v_xxy + 3*a0*a1**2*v_xxx + 2*a0*a1*b1*v_xxy + 2*a0*a2*b0*v_xxy + 
    // 2*a0*a2*v_xx + 2*a0*b0*b2*v_xyy + a0*b1**2*v_xyy + a0*b2*v_xy + a1**2*b0*v_xxy + a1**2*v_xx + 
    // 2*a1*b0*b1*v_xyy + a1*b1*v_xy + a2*b0**2*v_xyy + a2*b0*v_xy + a2*v_x + 3*b0**2*b2*v_yyy + 
    // 3*b0*b1**2*v_yyy + 2*b0*b2*v_yy + b1**2*v_yy + b2*v_y
    //const v2 =
    //    (3*c0*(c0c2 + c1c1))*vₓₓₓ +
    //    (3*d0*(d0d2 + d1d1))*vᵧᵧᵧ +
    //    (c0*(2*c1d1 + c0d2) + d0*(2*c0c2 + c1c1))*vₓₓᵧ +
    //    (c0*(2*d0d2 + d1d1) + d0*(2*c1d1 + c2d0))*vₓᵧᵧ +
    //    (2*c0c2 + c1c1)*vₓₓ +
    //    (2*d0d2 + d1d1)*vᵧᵧ +
    //    (c0d2 + c1d1 + c2d0)*vₓᵧ +
    //    c2*vₓ    +
    //    d2*vᵧ;
    //const v2 =
    //    (3*c0*z1)*vₓₓₓ +
    //    (3*d0*z2)*vᵧᵧᵧ +
    //    (c0*z6 + d0*z3)*vₓₓᵧ +
    //    (c0*z4 + d0*z5)*vₓᵧᵧ +
    //    z3*vₓₓ +
    //    z4*vᵧᵧ +
    //    ze*vₓᵧ +
    //    c2*vₓ    +
    //    d2*vᵧ;
    const oj = get_coeffs_bez3_bez2_exact_epr(get_coeffs_bez3_bez2_exact_tp(3, c0), z1);
    const ok = get_coeffs_bez3_bez2_exact_epr(get_coeffs_bez3_bez2_exact_tp(3, d0), z2);
    const ol = get_coeffs_bez3_bez2_exact_sce(c0, z6);
    const om = get_coeffs_bez3_bez2_exact_sce(c0, z4);
    const on = get_coeffs_bez3_bez2_exact_sce(d0, z3);
    const oo = get_coeffs_bez3_bez2_exact_sce(d0, z5);
    const op = get_coeffs_bez3_bez2_exact_fes(ol, on);
    const oq = get_coeffs_bez3_bez2_exact_fes(om, oo);
    const or = get_coeffs_bez3_bez2_exact_epr(oj, vₓₓₓ);
    const os = get_coeffs_bez3_bez2_exact_epr(ok, vᵧᵧᵧ);
    const ot = get_coeffs_bez3_bez2_exact_epr(op, vₓₓᵧ);
    const ou = get_coeffs_bez3_bez2_exact_epr(oq, vₓᵧᵧ);
    const ov = get_coeffs_bez3_bez2_exact_epr(z3, vₓₓ);
    const ow = get_coeffs_bez3_bez2_exact_epr(z4, vᵧᵧ);
    const ox = get_coeffs_bez3_bez2_exact_epr(ze, vₓᵧ);
    const oy = get_coeffs_bez3_bez2_exact_epr(c2, vₓ);
    const oz = get_coeffs_bez3_bez2_exact_epr(d2, vᵧ);
    const p1 = get_coeffs_bez3_bez2_exact_fes(or, os);
    const p2 = get_coeffs_bez3_bez2_exact_fes(ot, ou);
    const p3 = get_coeffs_bez3_bez2_exact_fes(ov, ow);
    const p4 = get_coeffs_bez3_bez2_exact_fes(p1, p2);
    const p5 = get_coeffs_bez3_bez2_exact_fes(p3, ox);
    const p6 = get_coeffs_bez3_bez2_exact_fes(oy, oz);
    const p7 = get_coeffs_bez3_bez2_exact_fes(p4, p5);
    const v2 = get_coeffs_bez3_bez2_exact_fes(p7, p6);
    // 3*a0**2*a1*v_xxx + a0**2*b1*v_xxy + 2*a0*a1*b0*v_xxy + 2*a0*a1*v_xx + 2*a0*b0*b1*v_xyy + 
    // a0*b1*v_xy + a1*b0**2*v_xyy + a1*b0*v_xy + a1*v_x + 3*b0**2*b1*v_yyy + 2*b0*b1*v_yy + b1*v_y
    //const v1 =
    //    3*((c0*c0c1)*vₓₓₓ + (d0*d0d1)*vᵧᵧᵧ) +
    //    c0*(c0d1 + 2*c1d0)*vₓₓᵧ +
    //    d0*(c1d0 + 2*c0d1)*vₓᵧᵧ +
    //    2*(c0c1*vₓₓ + d0d1*vᵧᵧ) +
    //    c0d1*vₓᵧ + c1d0*vₓᵧ +
    //    c1*vₓ + d1*vᵧ;
    //const v1 =
    //    3*((c0*c0c1)*vₓₓₓ + (d0*d0d1)*vᵧᵧᵧ) +
    //    c0*zc*vₓₓᵧ +
    //    d0*zd*vₓᵧᵧ +
    //    2*(c0c1*vₓₓ + d0d1*vᵧᵧ) +
    //    c0d1*vₓᵧ + c1d0*vₓᵧ +
    //    c1*vₓ + d1*vᵧ;
    const p8 = get_coeffs_bez3_bez2_exact_epr(get_coeffs_bez3_bez2_exact_tp(3, c0), c0c1);
    const p9 = get_coeffs_bez3_bez2_exact_epr(get_coeffs_bez3_bez2_exact_tp(3, d0), d0d1);
    const pa = get_coeffs_bez3_bez2_exact_sce(c0, zc);
    const pb = get_coeffs_bez3_bez2_exact_sce(d0, zd);
    const pc = get_coeffs_bez3_bez2_exact_epr(c0c1, vₓₓ);
    const pd = get_coeffs_bez3_bez2_exact_epr(d0d1, vᵧᵧ);
    const pe = get_coeffs_bez3_bez2_exact_epr(c0d1, vₓᵧ);
    const pf = get_coeffs_bez3_bez2_exact_epr(c1d0, vₓᵧ);
    const pg = get_coeffs_bez3_bez2_exact_em2(get_coeffs_bez3_bez2_exact_fes(pc, pd));
    const ph = get_coeffs_bez3_bez2_exact_fes(pe, pf);
    const pi = get_coeffs_bez3_bez2_exact_epr(c1, vₓ);
    const pj = get_coeffs_bez3_bez2_exact_epr(d1, vᵧ);
    const pk = get_coeffs_bez3_bez2_exact_epr(p8, vₓₓₓ);
    const pl = get_coeffs_bez3_bez2_exact_epr(p9, vᵧᵧᵧ);
    const pm = get_coeffs_bez3_bez2_exact_epr(pa, vₓₓᵧ);
    const pn = get_coeffs_bez3_bez2_exact_epr(pb, vₓᵧᵧ);
    const po = get_coeffs_bez3_bez2_exact_fes(pk, pl);
    const pp = get_coeffs_bez3_bez2_exact_fes(pm, pn);
    const pq = get_coeffs_bez3_bez2_exact_fes(po, pp);
    const pr = get_coeffs_bez3_bez2_exact_fes(pg, ph);
    const ps = get_coeffs_bez3_bez2_exact_fes(pi, pj);
    const pt = get_coeffs_bez3_bez2_exact_fes(pq, pr);
    const v1 = get_coeffs_bez3_bez2_exact_fes(pt, ps);
    // a0**3*v_xxx + a0**2*b0*v_xxy + a0**2*v_xx + a0*b0**2*v_xyy + a0*b0*v_xy + a0*v_x + 
    // b0**3*v_yyy + b0**2*v_yy + b0*v_y + v_0
    //const v0 =
    //    c0c0*(c0*vₓₓₓ + d0*vₓₓᵧ + vₓₓ) +
    //    d0d0*(c0*vₓᵧᵧ + d0*vᵧᵧᵧ + vᵧᵧ) +
    //    c0d0*vₓᵧ +
    //    c0*vₓ +
    //    d0*vᵧ +
    //    v;
    const pu = get_coeffs_bez3_bez2_exact_sce(c0, vₓₓₓ);
    const pv = get_coeffs_bez3_bez2_exact_sce(c0, vₓᵧᵧ);
    const pw = get_coeffs_bez3_bez2_exact_sce(d0, vₓₓᵧ);
    const px = get_coeffs_bez3_bez2_exact_sce(d0, vᵧᵧᵧ);
    const py = get_coeffs_bez3_bez2_exact_fes(pu, pw);
    const pz = get_coeffs_bez3_bez2_exact_fes(pv, px);
    const u1 = get_coeffs_bez3_bez2_exact_fes(py, vₓₓ);
    const u2 = get_coeffs_bez3_bez2_exact_fes(pz, vᵧᵧ);
    const u3 = get_coeffs_bez3_bez2_exact_epr(c0c0, u1);
    const u4 = get_coeffs_bez3_bez2_exact_epr(d0d0, u2);
    const u5 = get_coeffs_bez3_bez2_exact_epr(c0d0, vₓᵧ);
    const u6 = get_coeffs_bez3_bez2_exact_sce(c0, vₓ);
    const u7 = get_coeffs_bez3_bez2_exact_sce(d0, vᵧ);
    const u8 = get_coeffs_bez3_bez2_exact_fes(u3, u4);
    const u9 = get_coeffs_bez3_bez2_exact_fes(u8, u5);
    const ua = get_coeffs_bez3_bez2_exact_fes(u6, u7);
    const ub = get_coeffs_bez3_bez2_exact_fes(u9, ua);
    const v0 = get_coeffs_bez3_bez2_exact_fes(ub, v);
    const r = [v6, v5, v4, v3, v2, v1, v0];
    return r;
}

//# sourceMappingURL=get-coeffs-bez3-bez2-exact.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/bezier-bezier-intersection/get-coefficients/exact/get-coeffs-bez1-bez3-exact.js



// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗


const get_coeffs_bez1_bez3_exact_sce = scaleExpansion2;
const get_coeffs_bez1_bez3_exact_epr = expansionProduct;
const get_coeffs_bez1_bez3_exact_fes = fastExpansionSum;
const get_coeffs_bez1_bez3_exact_eSign = e_sign_eSign;
/**
 * Returns an error-free polynomial in 1 variable
 * whose roots are the parameter values of the intersection points of an order
 * 1 and order 3 bezier curve (i.e. a line and a cubic bezier curve).
 *
 * The returned polynomial degree will be 3
 * (see [Bézout's theorem](https://en.wikipedia.org/wiki/B%C3%A9zout%27s_theorem))
 *
 * The returned polynomial coefficients are given densely as an array of
 * [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf) floating point expansions from highest to lowest power,
 * e.g. `[[5],[-3],[0]]` represents the polynomial `5x^2 - 3x`.
 *
 * * the returned polynomial coefficients are exact (i.e. error-free)
 * * adapted from [Indrek Mandre](http://www.mare.ee/indrek/misc/2d.pdf)
 *
 * @param ps1
 * @param ps2
 *
 * @internal
 */
function getCoeffsBez1Bez3Exact(ps1, ps2) {
    /** ps1 in power bases */
    const ps1pb = toPowerBasis1Exact(ps1);
    // if both polynomials' linear terms are exactly zero then it really is a point
    // if (eSign(ps1pb[0][0]) === 0 && eSign(ps1pb[1][0]) === 0) {
    // The input bezier curve is in fact not a line but has order < 1, i.e. it is a point.
    // This shouldn't happen due to being checked for earlier.
    // }
    const [[c3, c2, c1, [c0]], [d3, d2, d1, [d0]]] = toPowerBasis3Exact(ps2);
    if (get_coeffs_bez1_bez3_exact_eSign(c3) === 0 && get_coeffs_bez1_bez3_exact_eSign(d3) === 0) {
        // the input bezier curve is in fact not cubic but has order < 3
        return getCoeffsBez1Bez2Exact(ps1, cubicToQuadratic(ps2));
    }
    // it is a precondition that the curve really has order 1
    // keep TypeScript happy; `getImplicitForm1ExactPb` cannot return `undefined` here
    const { vₓ, vᵧ, v } = getImplicitForm1ExactPb(ps1pb);
    // a3*v_x + b3*v_y
    //const v3 = c3*vₓ + d3*vᵧ;
    const p1 = get_coeffs_bez1_bez3_exact_epr(c3, vₓ);
    const p2 = get_coeffs_bez1_bez3_exact_epr(d3, vᵧ);
    const v3 = get_coeffs_bez1_bez3_exact_fes(p1, p2);
    // a2*v_x + b2*v_y
    //const v2 = c2*vₓ + d2*vᵧ;
    const p3 = get_coeffs_bez1_bez3_exact_epr(c2, vₓ);
    const p4 = get_coeffs_bez1_bez3_exact_epr(d2, vᵧ);
    const v2 = get_coeffs_bez1_bez3_exact_fes(p3, p4);
    // a1*v_x + b1*v_y
    //const v1 = c1*vₓ + d1*vᵧ;
    const p5 = get_coeffs_bez1_bez3_exact_epr(c1, vₓ);
    const p6 = get_coeffs_bez1_bez3_exact_epr(d1, vᵧ);
    const v1 = get_coeffs_bez1_bez3_exact_fes(p5, p6);
    // a0*v_x + b0*v_y + v_0
    //const v0 = c0*vₓ + d0*vᵧ + v;
    const p7 = get_coeffs_bez1_bez3_exact_sce(c0, vₓ);
    const p8 = get_coeffs_bez1_bez3_exact_sce(d0, vᵧ);
    const p9 = get_coeffs_bez1_bez3_exact_fes(p7, p8);
    const v0 = get_coeffs_bez1_bez3_exact_fes(p9, v);
    const r = [v3, v2, v1, v0];
    return r;
}

//# sourceMappingURL=get-coeffs-bez1-bez3-exact.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/bezier-bezier-intersection/get-coefficients/exact/get-coeffs-bez2-bez3-exact.js


// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗




const get_coeffs_bez2_bez3_exact_tp = basic_two_product_twoProduct; // error -> 0
const get_coeffs_bez2_bez3_exact_sce = scaleExpansion2;
const get_coeffs_bez2_bez3_exact_epr = expansionProduct;
const get_coeffs_bez2_bez3_exact_fes = fastExpansionSum;
const get_coeffs_bez2_bez3_exact_em2 = eMultBy2;
const get_coeffs_bez2_bez3_exact_eSign = e_sign_eSign;
/**
 * Returns an error-free polynomial in 1 variable
 * whose roots are the parameter values of the intersection points of an order
 * 2 and 3 bezier curve (i.e. a quadratic bezier curve and a cubic bezier curve).
 *
 * The returned polynomial degree will be 6
 * (see [Bézout's theorem](https://en.wikipedia.org/wiki/B%C3%A9zout%27s_theorem))
 *
 * The returned polynomial coefficients are given densely as an array of
 * [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf) floating point expansions from highest to lowest power,
 * e.g. `[[5],[-3],[0]]` represents the polynomial `5x^2 - 3x`.
 *
 * * the returned polynomial coefficients are exact (i.e. error-free)
 * * adapted from [Indrek Mandre](http://www.mare.ee/indrek/misc/2d.pdf)
 *
 * @param ps1
 * @param ps2
 *
 * @internal
 */
function getCoeffsBez2Bez3Exact(ps1, ps2) {
    /** ps1 in power bases */
    const ps1pb = toPowerBasis2Exact(ps1);
    //const [[e2,e1,e0],[f2,f1,f0]] = ps1pb;
    // if both polynomials' quadratic terms are exactly zero then its really a line
    if (get_coeffs_bez2_bez3_exact_eSign(ps1pb[0][0]) === 0 && get_coeffs_bez2_bez3_exact_eSign(ps1pb[1][0]) === 0) {
        // the input bezier curve is in fact not quadratic but has order < 2
        return getCoeffsBez1Bez3Exact([ps1[0], ps1[2]], ps2);
    }
    const [[c3, c2, c1, [c0]], [d3, d2, d1, [d0]]] = toPowerBasis3Exact(ps2);
    if (get_coeffs_bez2_bez3_exact_eSign(c3) === 0 && get_coeffs_bez2_bez3_exact_eSign(d3) === 0) {
        // the input bezier curve is in fact not cubic but has order < 3
        return getCoeffsBez2Bez2Exact(ps1, cubicToQuadratic(ps2));
    }
    const { vₓₓ, vₓᵧ, vᵧᵧ, vₓ, vᵧ, v } = 
    // this type coercion is justified since we already checked that the
    // curve really has order 2
    getImplicitForm2ExactPb(ps1pb);
    const c0c0 = get_coeffs_bez2_bez3_exact_tp(c0, c0);
    const c0c1 = get_coeffs_bez2_bez3_exact_sce(c0, c1);
    const c0c2 = get_coeffs_bez2_bez3_exact_sce(c0, c2);
    const c0c3 = get_coeffs_bez2_bez3_exact_sce(c0, c3);
    const c0d0 = get_coeffs_bez2_bez3_exact_tp(c0, d0);
    const c0d1 = get_coeffs_bez2_bez3_exact_sce(c0, d1);
    const c0d2 = get_coeffs_bez2_bez3_exact_sce(c0, d2);
    const c0d3 = get_coeffs_bez2_bez3_exact_sce(c0, d3);
    const c1c1 = get_coeffs_bez2_bez3_exact_epr(c1, c1);
    const c1c2 = get_coeffs_bez2_bez3_exact_epr(c1, c2);
    const c1c3 = get_coeffs_bez2_bez3_exact_epr(c1, c3);
    const c1d0 = get_coeffs_bez2_bez3_exact_sce(d0, c1);
    const c1d1 = get_coeffs_bez2_bez3_exact_epr(c1, d1);
    const c1d2 = get_coeffs_bez2_bez3_exact_epr(c1, d2);
    const c1d3 = get_coeffs_bez2_bez3_exact_epr(c1, d3);
    const c2d1 = get_coeffs_bez2_bez3_exact_epr(c2, d1);
    const c2c2 = get_coeffs_bez2_bez3_exact_epr(c2, c2);
    const c2c3 = get_coeffs_bez2_bez3_exact_epr(c2, c3);
    const c2d0 = get_coeffs_bez2_bez3_exact_sce(d0, c2);
    const c2d2 = get_coeffs_bez2_bez3_exact_epr(c2, d2);
    const c2d3 = get_coeffs_bez2_bez3_exact_epr(c2, d3);
    const c3c3 = get_coeffs_bez2_bez3_exact_epr(c3, c3);
    const c3d0 = get_coeffs_bez2_bez3_exact_sce(d0, c3);
    const c3d1 = get_coeffs_bez2_bez3_exact_epr(c3, d1);
    const c3d2 = get_coeffs_bez2_bez3_exact_epr(c3, d2);
    const c3d3 = get_coeffs_bez2_bez3_exact_epr(c3, d3);
    const d0d0 = get_coeffs_bez2_bez3_exact_tp(d0, d0);
    const d0d1 = get_coeffs_bez2_bez3_exact_sce(d0, d1);
    const d0d2 = get_coeffs_bez2_bez3_exact_sce(d0, d2);
    const d0d3 = get_coeffs_bez2_bez3_exact_sce(d0, d3);
    const d1d1 = get_coeffs_bez2_bez3_exact_epr(d1, d1);
    const d1d2 = get_coeffs_bez2_bez3_exact_epr(d1, d2);
    const d3d3 = get_coeffs_bez2_bez3_exact_epr(d3, d3);
    const d2d2 = get_coeffs_bez2_bez3_exact_epr(d2, d2);
    const d2d3 = get_coeffs_bez2_bez3_exact_epr(d2, d3);
    const d1d3 = get_coeffs_bez2_bez3_exact_epr(d1, d3);
    // a3**2*vₓₓ + a3*b3*vₓᵧ + b3**2*vᵧᵧ
    //const v6 =
    //    c3c3*vₓₓ +
    //    c3d3*vₓᵧ +
    //    d3d3*vᵧᵧ;
    const p1 = get_coeffs_bez2_bez3_exact_epr(c3c3, vₓₓ);
    const p2 = get_coeffs_bez2_bez3_exact_epr(c3d3, vₓᵧ);
    const p3 = get_coeffs_bez2_bez3_exact_epr(d3d3, vᵧᵧ);
    const p4 = get_coeffs_bez2_bez3_exact_fes(p1, p2);
    const v6 = get_coeffs_bez2_bez3_exact_fes(p4, p3);
    // 2*a2*a3*vₓₓ + a2*b3*vₓᵧ + a3*b2*vₓᵧ + 2*b2*b3*vᵧᵧ
    //const v5 =
    //    2*(c2c3*vₓₓ + d2d3*vᵧᵧ) +
    //    vₓᵧ*(c2d3 + c3d2);
    const p5 = get_coeffs_bez2_bez3_exact_epr(c2c3, vₓₓ);
    const p6 = get_coeffs_bez2_bez3_exact_epr(d2d3, vᵧᵧ);
    const p7 = get_coeffs_bez2_bez3_exact_fes(p5, p6);
    const p8 = get_coeffs_bez2_bez3_exact_fes(c2d3, c3d2);
    const p9 = get_coeffs_bez2_bez3_exact_epr(p8, vₓᵧ);
    const v5 = get_coeffs_bez2_bez3_exact_fes(get_coeffs_bez2_bez3_exact_em2(p7), p9);
    // 2*a1*a3*vₓₓ + a1*b3*vₓᵧ + a2**2*vₓₓ + a2*b2*vₓᵧ + a3*b1*vₓᵧ + 2*b1*b3*vᵧᵧ + b2**2*vᵧᵧ
    //const v4 =
    //    (2*c1c3 + c2c2)*vₓₓ +
    //    (2*d1d3 + d2d2)*vᵧᵧ +
    //    (c1d3 + c2d2 + c3d1)*vₓᵧ;
    const pa = get_coeffs_bez2_bez3_exact_fes(get_coeffs_bez2_bez3_exact_em2(c1c3), c2c2);
    const pb = get_coeffs_bez2_bez3_exact_fes(get_coeffs_bez2_bez3_exact_em2(d1d3), d2d2);
    const pc = get_coeffs_bez2_bez3_exact_fes(c1d3, c2d2);
    const pd = get_coeffs_bez2_bez3_exact_fes(pc, c3d1);
    const pe = get_coeffs_bez2_bez3_exact_epr(pa, vₓₓ);
    const pf = get_coeffs_bez2_bez3_exact_epr(pb, vᵧᵧ);
    const pg = get_coeffs_bez2_bez3_exact_fes(pe, pf);
    const rp = get_coeffs_bez2_bez3_exact_epr(pd, vₓᵧ);
    const v4 = get_coeffs_bez2_bez3_exact_fes(pg, rp);
    // 2*a0*a3*vₓₓ + a0*b3*vₓᵧ + 2*a1*a2*vₓₓ + 
    // a1*b2*vₓᵧ + a2*b1*vₓᵧ + a3*b0*vₓᵧ + 
    // a3*v_x + 2*b0*b3*vᵧᵧ + 2*b1*b2*vᵧᵧ + b3*v_y
    //const v3 =
    //    2*((c0c3 + c1c2)*vₓₓ + (d0d3 + d1d2)*vᵧᵧ) +
    //    (c0d3 + c1d2 + c2d1 + c3d0)*vₓᵧ +
    //    c3*vₓ +
    //    d3*vᵧ;
    const ph = get_coeffs_bez2_bez3_exact_fes(c0c3, c1c2);
    const pi = get_coeffs_bez2_bez3_exact_fes(d0d3, d1d2);
    const pj = get_coeffs_bez2_bez3_exact_fes(c0d3, c1d2);
    const pk = get_coeffs_bez2_bez3_exact_fes(c2d1, c3d0);
    const pl = get_coeffs_bez2_bez3_exact_fes(pj, pk);
    const pm = get_coeffs_bez2_bez3_exact_epr(ph, vₓₓ);
    const pn = get_coeffs_bez2_bez3_exact_epr(pi, vᵧᵧ);
    const po = get_coeffs_bez2_bez3_exact_em2(get_coeffs_bez2_bez3_exact_fes(pm, pn));
    const pp = get_coeffs_bez2_bez3_exact_epr(pl, vₓᵧ);
    const rn = get_coeffs_bez2_bez3_exact_epr(c3, vₓ);
    const ro = get_coeffs_bez2_bez3_exact_epr(d3, vᵧ);
    const pq = get_coeffs_bez2_bez3_exact_fes(rn, ro);
    const pr = get_coeffs_bez2_bez3_exact_fes(po, pp);
    const v3 = get_coeffs_bez2_bez3_exact_fes(pr, pq);
    // 2*a0*a2*vₓₓ + a0*b2*vₓᵧ + a1**2*vₓₓ + 
    // a1*b1*vₓᵧ + a2*b0*vₓᵧ + a2*v_x + 
    // 2*b0*b2*vᵧᵧ + b1**2*vᵧᵧ + b2*v_y
    //const v2 =
    //    (2*c0c2 + c1c1)*vₓₓ +
    //    (2*d0d2 + d1d1)*vᵧᵧ +
    //    (c0d2 + c1d1 + c2d0)*vₓᵧ +
    //    c2*vₓ +
    //    d2*vᵧ;
    const ps = get_coeffs_bez2_bez3_exact_fes(get_coeffs_bez2_bez3_exact_em2(c0c2), c1c1);
    const pt = get_coeffs_bez2_bez3_exact_fes(get_coeffs_bez2_bez3_exact_em2(d0d2), d1d1);
    const pu = get_coeffs_bez2_bez3_exact_fes(c0d2, c1d1);
    const pv = get_coeffs_bez2_bez3_exact_fes(pu, c2d0);
    const pw = get_coeffs_bez2_bez3_exact_epr(ps, vₓₓ);
    const px = get_coeffs_bez2_bez3_exact_epr(pt, vᵧᵧ);
    const py = get_coeffs_bez2_bez3_exact_epr(pv, vₓᵧ);
    const pz = get_coeffs_bez2_bez3_exact_fes(pw, px);
    const r1 = get_coeffs_bez2_bez3_exact_fes(pz, py);
    const r2 = get_coeffs_bez2_bez3_exact_epr(c2, vₓ);
    const r3 = get_coeffs_bez2_bez3_exact_epr(d2, vᵧ);
    const r4 = get_coeffs_bez2_bez3_exact_fes(r2, r3);
    const v2 = get_coeffs_bez2_bez3_exact_fes(r1, r4);
    // 2*a0*a1*vₓₓ + a0*b1*vₓᵧ + a1*b0*vₓᵧ + a1*v_x + 2*b0*b1*vᵧᵧ + b1*v_y
    //const v1 =
    //    2*(c0c1*vₓₓ + d0d1*vᵧᵧ) +
    //    (c0d1 + c1d0)*vₓᵧ +
    //    c1*vₓ +
    //    d1*vᵧ;
    const r5 = get_coeffs_bez2_bez3_exact_epr(c0c1, vₓₓ);
    const r6 = get_coeffs_bez2_bez3_exact_epr(d0d1, vᵧᵧ);
    const r7 = get_coeffs_bez2_bez3_exact_fes(c0d1, c1d0);
    const r8 = get_coeffs_bez2_bez3_exact_epr(r7, vₓᵧ);
    const r9 = get_coeffs_bez2_bez3_exact_em2(get_coeffs_bez2_bez3_exact_fes(r5, r6));
    const ra = get_coeffs_bez2_bez3_exact_fes(r9, r8);
    const rb = get_coeffs_bez2_bez3_exact_epr(c1, vₓ);
    const rc = get_coeffs_bez2_bez3_exact_epr(d1, vᵧ);
    const rd = get_coeffs_bez2_bez3_exact_fes(rb, rc);
    const v1 = get_coeffs_bez2_bez3_exact_fes(ra, rd);
    // a0**2*vₓₓ + a0*b0*vₓᵧ + a0*v_x + b0**2*vᵧᵧ + b0*v_y + v_0
    //const v0 =
    //    c0c0*vₓₓ +
    //    c0d0*vₓᵧ +
    //    d0d0*vᵧᵧ +
    //    c0*vₓ +
    //    d0*vᵧ +
    //    v;
    const re = get_coeffs_bez2_bez3_exact_epr(c0c0, vₓₓ);
    const rf = get_coeffs_bez2_bez3_exact_epr(c0d0, vₓᵧ);
    const rg = get_coeffs_bez2_bez3_exact_epr(d0d0, vᵧᵧ);
    const rh = get_coeffs_bez2_bez3_exact_sce(c0, vₓ);
    const ri = get_coeffs_bez2_bez3_exact_sce(d0, vᵧ);
    const rj = get_coeffs_bez2_bez3_exact_fes(re, rf);
    const rk = get_coeffs_bez2_bez3_exact_fes(rj, rg);
    const rl = get_coeffs_bez2_bez3_exact_fes(rh, ri);
    const rm = get_coeffs_bez2_bez3_exact_fes(rk, rl);
    const v0 = get_coeffs_bez2_bez3_exact_fes(rm, v);
    const r = [v6, v5, v4, v3, v2, v1, v0];
    return r;
}

//# sourceMappingURL=get-coeffs-bez2-bez3-exact.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/bezier-bezier-intersection/get-coefficients/exact/get-coeffs-bez3-bez3-exact.js


// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗




const get_coeffs_bez3_bez3_exact_tp = basic_two_product_twoProduct; // error -> 0
const get_coeffs_bez3_bez3_exact_sce = scaleExpansion2;
const get_coeffs_bez3_bez3_exact_epr = expansionProduct;
const get_coeffs_bez3_bez3_exact_fes = fastExpansionSum;
const get_coeffs_bez3_bez3_exact_em2 = eMultBy2;
const get_coeffs_bez3_bez3_exact_eSign = e_sign_eSign;
/**
 * Returns an error-free polynomial in in 1 variable
 * whose roots are the parameter values of the intersection points of 2 order
 * 3 bezier curves (i.e. 2 cubic bezier curves).
 *
 * The returned polynomial degree will be 9
 * (see [Bézout's theorem](https://en.wikipedia.org/wiki/B%C3%A9zout%27s_theorem))
 *
 * The returned polynomial coefficients are given densely as an array of
 * [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf) floating point expansions from highest to lowest power,
 * e.g. `[[5],[-3],[0]]` represents the polynomial `5x^2 - 3x`.
 *
 * * the returned polynomial coefficients are exact (i.e. error-free)
 * * adapted from [Indrek Mandre](http://www.mare.ee/indrek/misc/2d.pdf)
 *
 * @param ps1
 * @param ps2
 *
 * @internal
 */
function getCoeffsBez3Bez3Exact(ps1, ps2) {
    /** ps1 in power bases */
    const ps1pb = toPowerBasis3Exact(ps1);
    //const [[e3,e2,e1,e0],[f3,f2,f1,f0]] = ps1pb;
    // if both polynomials' cubic terms are exactly zero then its really a quadratic
    if (get_coeffs_bez3_bez3_exact_eSign(ps1pb[0][0]) === 0 && get_coeffs_bez3_bez3_exact_eSign(ps1pb[1][0]) === 0) {
        // the input bezier curve is in fact not cubic but has order < 3
        return getCoeffsBez2Bez3Exact(cubicToQuadratic(ps1), ps2);
    }
    const [[c3, c2, c1, [c0]], [d3, d2, d1, [d0]]] = toPowerBasis3Exact(ps2);
    if (get_coeffs_bez3_bez3_exact_eSign(c3) === 0 && get_coeffs_bez3_bez3_exact_eSign(d3) === 0) {
        // the input bezier curve is in fact not cubic but has order < 3
        return getCoeffsBez3Bez2Exact(ps1, cubicToQuadratic(ps2));
    }
    const { vₓₓₓ, vₓₓᵧ, vₓᵧᵧ, vᵧᵧᵧ, vₓₓ, vₓᵧ, vᵧᵧ, vₓ, vᵧ, v } = 
    // this type coercion is justified since we already checked that the
    // curve really has order 3
    getImplicitForm3ExactPb(ps1pb);
    const c0c0 = get_coeffs_bez3_bez3_exact_tp(c0, c0);
    const c0c1 = get_coeffs_bez3_bez3_exact_sce(c0, c1);
    const c0c2 = get_coeffs_bez3_bez3_exact_sce(c0, c2);
    const c0c3 = get_coeffs_bez3_bez3_exact_sce(c0, c3);
    const c0d0 = get_coeffs_bez3_bez3_exact_tp(c0, d0);
    const c0d1 = get_coeffs_bez3_bez3_exact_sce(c0, d1);
    const c0d2 = get_coeffs_bez3_bez3_exact_sce(c0, d2);
    const c0d3 = get_coeffs_bez3_bez3_exact_sce(c0, d3);
    const c1c1 = get_coeffs_bez3_bez3_exact_epr(c1, c1);
    const c1c2 = get_coeffs_bez3_bez3_exact_epr(c1, c2);
    const c1c3 = get_coeffs_bez3_bez3_exact_epr(c1, c3);
    const c1d0 = get_coeffs_bez3_bez3_exact_sce(d0, c1);
    const c1d1 = get_coeffs_bez3_bez3_exact_epr(c1, d1);
    const c1d2 = get_coeffs_bez3_bez3_exact_epr(c1, d2);
    const c1d3 = get_coeffs_bez3_bez3_exact_epr(c1, d3);
    const c2d1 = get_coeffs_bez3_bez3_exact_epr(c2, d1);
    const c2c2 = get_coeffs_bez3_bez3_exact_epr(c2, c2);
    const c2c3 = get_coeffs_bez3_bez3_exact_epr(c2, c3);
    const c2d0 = get_coeffs_bez3_bez3_exact_sce(d0, c2);
    const c2d2 = get_coeffs_bez3_bez3_exact_epr(c2, d2);
    const c2d3 = get_coeffs_bez3_bez3_exact_epr(c2, d3);
    const c3c3 = get_coeffs_bez3_bez3_exact_epr(c3, c3);
    const c3d0 = get_coeffs_bez3_bez3_exact_sce(d0, c3);
    const c3d1 = get_coeffs_bez3_bez3_exact_epr(c3, d1);
    const c3d2 = get_coeffs_bez3_bez3_exact_epr(c3, d2);
    const c3d3 = get_coeffs_bez3_bez3_exact_epr(c3, d3);
    const d0d0 = get_coeffs_bez3_bez3_exact_tp(d0, d0);
    const d0d1 = get_coeffs_bez3_bez3_exact_sce(d0, d1);
    const d0d2 = get_coeffs_bez3_bez3_exact_sce(d0, d2);
    const d0d3 = get_coeffs_bez3_bez3_exact_sce(d0, d3);
    const d1d1 = get_coeffs_bez3_bez3_exact_epr(d1, d1);
    const d1d2 = get_coeffs_bez3_bez3_exact_epr(d1, d2);
    const d3d3 = get_coeffs_bez3_bez3_exact_epr(d3, d3);
    const d2d2 = get_coeffs_bez3_bez3_exact_epr(d2, d2);
    const d2d3 = get_coeffs_bez3_bez3_exact_epr(d2, d3);
    const d1d3 = get_coeffs_bez3_bez3_exact_epr(d1, d3);
    //const v9 =  
    //    (c3*c3c3)*vₓₓₓ + 
    //    (c3*d3d3)*vₓᵧᵧ + 
    //    (d3*c3c3)*vₓₓᵧ + 
    //    (d3*d3d3)*vᵧᵧᵧ;  
    const g1 = get_coeffs_bez3_bez3_exact_epr(c3, c3c3); // c3*c3c3
    const g2 = get_coeffs_bez3_bez3_exact_epr(c3, d3d3); // c3*d3d3
    const g3 = get_coeffs_bez3_bez3_exact_epr(d3, c3c3); // d3*c3c3
    const g4 = get_coeffs_bez3_bez3_exact_epr(d3, d3d3); // d3*d3d3
    const g5 = get_coeffs_bez3_bez3_exact_epr(g1, vₓₓₓ); // g1*vₓₓₓ
    const g6 = get_coeffs_bez3_bez3_exact_epr(g2, vₓᵧᵧ); // g2*vₓᵧᵧ
    const g7 = get_coeffs_bez3_bez3_exact_epr(g3, vₓₓᵧ); // g3*vₓₓᵧ 
    const g8 = get_coeffs_bez3_bez3_exact_epr(g4, vᵧᵧᵧ); // g4*vᵧᵧᵧ
    const g9 = get_coeffs_bez3_bez3_exact_fes(g5, g6); // g5 + g6
    const ga = get_coeffs_bez3_bez3_exact_fes(g7, g8); // g7 + g8
    const v9 = get_coeffs_bez3_bez3_exact_fes(g9, ga); // g9 + ga
    //const v8 =  
    //    2*c2*c3d3*vₓₓᵧ + 
    //    2*c3*d2d3*vₓᵧᵧ + 
    //      c2*d3d3*vₓᵧᵧ + 
    //      d2*c3c3*vₓₓᵧ + 
    //    3*c2*c3c3*vₓₓₓ + 
    //    3*d2*d3d3*vᵧᵧᵧ;  
    const w1 = get_coeffs_bez3_bez3_exact_fes(get_coeffs_bez3_bez3_exact_em2(c2d3), c3d2);
    const w2 = get_coeffs_bez3_bez3_exact_fes(get_coeffs_bez3_bez3_exact_em2(c3d2), c2d3);
    const w3 = get_coeffs_bez3_bez3_exact_epr(c3, w1);
    const w4 = get_coeffs_bez3_bez3_exact_epr(d3, w2);
    const w5 = get_coeffs_bez3_bez3_exact_epr(c2, c3c3);
    const w6 = get_coeffs_bez3_bez3_exact_epr(d2, d3d3);
    const w7 = get_coeffs_bez3_bez3_exact_epr(vₓₓₓ, w5);
    const u1 = get_coeffs_bez3_bez3_exact_epr(vᵧᵧᵧ, w6);
    const u2 = get_coeffs_bez3_bez3_exact_epr(vₓₓᵧ, w3);
    const u3 = get_coeffs_bez3_bez3_exact_epr(vₓᵧᵧ, w4);
    const u4 = get_coeffs_bez3_bez3_exact_fes(u2, u3);
    const u5 = get_coeffs_bez3_bez3_exact_sce(3, get_coeffs_bez3_bez3_exact_fes(w7, u1));
    const v8 = get_coeffs_bez3_bez3_exact_fes(u4, u5);
    //const v7 =  
    //    vₓₓᵧ*(2*(c1*c3d3 + c2*c3d2) + (d1*c3c3 + d3*c2c2)) +
    //    vₓᵧᵧ*(2*(c2*d2d3 + c3*d1d3) + (c1*d3d3 + d2*c3d2)) +
    //    vₓₓₓ*3*c3*(c1c3 + c2c2) +
    //    vᵧᵧᵧ*3*d3*(d1d3 + d2d2);
    const o1 = get_coeffs_bez3_bez3_exact_epr(c1, c3d3);
    const o2 = get_coeffs_bez3_bez3_exact_epr(d1, c3c3);
    const o3 = get_coeffs_bez3_bez3_exact_epr(c2, d2d3);
    const o4 = get_coeffs_bez3_bez3_exact_epr(c1, d3d3);
    const o5 = get_coeffs_bez3_bez3_exact_epr(c2, c3d2);
    const o6 = get_coeffs_bez3_bez3_exact_epr(d3, c2c2);
    const o7 = get_coeffs_bez3_bez3_exact_epr(c3, d1d3);
    const o8 = get_coeffs_bez3_bez3_exact_epr(d2, c3d2);
    const w8 = get_coeffs_bez3_bez3_exact_fes(o1, o5);
    const w9 = get_coeffs_bez3_bez3_exact_fes(o2, o6);
    const wa = get_coeffs_bez3_bez3_exact_fes(o3, o7);
    const wb = get_coeffs_bez3_bez3_exact_fes(o4, o8);
    const wc = get_coeffs_bez3_bez3_exact_fes(c1c3, c2c2);
    const wd = get_coeffs_bez3_bez3_exact_fes(d1d3, d2d2);
    const we = get_coeffs_bez3_bez3_exact_fes(get_coeffs_bez3_bez3_exact_em2(w8), w9);
    const wf = get_coeffs_bez3_bez3_exact_fes(get_coeffs_bez3_bez3_exact_em2(wa), wb);
    const wg = get_coeffs_bez3_bez3_exact_epr(vₓₓᵧ, we);
    const wh = get_coeffs_bez3_bez3_exact_epr(vₓᵧᵧ, wf);
    const wi = get_coeffs_bez3_bez3_exact_epr(c3, wc);
    const wj = get_coeffs_bez3_bez3_exact_epr(d3, wd);
    const wk = get_coeffs_bez3_bez3_exact_epr(vₓₓₓ, wi);
    const wl = get_coeffs_bez3_bez3_exact_epr(vᵧᵧᵧ, wj);
    const wm = get_coeffs_bez3_bez3_exact_fes(wg, wh);
    const wn = get_coeffs_bez3_bez3_exact_sce(3, get_coeffs_bez3_bez3_exact_fes(wk, wl));
    const v7 = get_coeffs_bez3_bez3_exact_fes(wm, wn);
    //const v6 =
    //    vₓₓᵧ*(d2*c2c2 + 2*c1*(c2d3 + c3d2) + c3*(2*c0d3 + 2*c2d1 + c3d0)) +
    //    vₓᵧᵧ*(c2*d2d2 + 2*d1*(c2d3 + c3d2) + d3*(2*c1d2 + 2*c3d0 + c0d3)) +
    //    vₓₓₓ*(c2*c2c2 + 3*c3*(2*c1c2 + c0c3)) +
    //    vᵧᵧᵧ*(d2*d2d2 + 3*d3*(2*d1d2 + d0d3)) +
    //    vₓₓ *c3c3 +
    //    vᵧᵧ *d3d3 +
    //    vₓᵧ *c3d3;
    const wo = get_coeffs_bez3_bez3_exact_fes(c2d3, c3d2);
    const zc = get_coeffs_bez3_bez3_exact_epr(d2, c2c2);
    const zd = get_coeffs_bez3_bez3_exact_em2(get_coeffs_bez3_bez3_exact_epr(c1, wo));
    const wp = get_coeffs_bez3_bez3_exact_fes(zc, zd);
    const wq = get_coeffs_bez3_bez3_exact_em2(get_coeffs_bez3_bez3_exact_fes(c0d3, c2d1));
    const wr = get_coeffs_bez3_bez3_exact_fes(wq, c3d0);
    const ze = get_coeffs_bez3_bez3_exact_epr(c3, wr);
    const ws = get_coeffs_bez3_bez3_exact_fes(wp, ze);
    const zf = get_coeffs_bez3_bez3_exact_epr(c2, d2d2);
    const zg = get_coeffs_bez3_bez3_exact_em2(get_coeffs_bez3_bez3_exact_epr(d1, wo));
    const wt = get_coeffs_bez3_bez3_exact_fes(zf, zg);
    const wu = get_coeffs_bez3_bez3_exact_em2(get_coeffs_bez3_bez3_exact_fes(c1d2, c3d0));
    const wv = get_coeffs_bez3_bez3_exact_fes(wu, c0d3);
    const zh = get_coeffs_bez3_bez3_exact_epr(d3, wv);
    const ww = get_coeffs_bez3_bez3_exact_fes(wt, zh);
    const wx = get_coeffs_bez3_bez3_exact_epr(c2, c2c2);
    const wy = get_coeffs_bez3_bez3_exact_fes(get_coeffs_bez3_bez3_exact_em2(c1c2), c0c3);
    const wz = get_coeffs_bez3_bez3_exact_epr(get_coeffs_bez3_bez3_exact_sce(3, c3), wy);
    const z1 = get_coeffs_bez3_bez3_exact_fes(wx, wz);
    const z2 = get_coeffs_bez3_bez3_exact_epr(d2, d2d2);
    const z3 = get_coeffs_bez3_bez3_exact_fes(get_coeffs_bez3_bez3_exact_em2(d1d2), d0d3);
    const z4 = get_coeffs_bez3_bez3_exact_epr(get_coeffs_bez3_bez3_exact_sce(3, d3), z3);
    const z5 = get_coeffs_bez3_bez3_exact_fes(z2, z4);
    const zi = get_coeffs_bez3_bez3_exact_epr(vₓₓᵧ, ws);
    const zj = get_coeffs_bez3_bez3_exact_epr(vₓᵧᵧ, ww);
    const z6 = get_coeffs_bez3_bez3_exact_fes(zi, zj);
    const zk = get_coeffs_bez3_bez3_exact_epr(vₓₓₓ, z1);
    const zl = get_coeffs_bez3_bez3_exact_epr(vᵧᵧᵧ, z5);
    const z7 = get_coeffs_bez3_bez3_exact_fes(zk, zl);
    const zm = get_coeffs_bez3_bez3_exact_epr(c3c3, vₓₓ);
    const zn = get_coeffs_bez3_bez3_exact_epr(d3d3, vᵧᵧ);
    const z8 = get_coeffs_bez3_bez3_exact_fes(zm, zn);
    const z9 = get_coeffs_bez3_bez3_exact_epr(c3d3, vₓᵧ);
    const za = get_coeffs_bez3_bez3_exact_fes(z6, z7);
    const zb = get_coeffs_bez3_bez3_exact_fes(z8, z9);
    const v6 = get_coeffs_bez3_bez3_exact_fes(za, zb);
    //const r4 = c2d2 + c3d1;
    //const r5 = c1d3 + c2d2;
    //const v5 =
    //    vₓₓᵧ*(2*(c0*wo + c1*r4) + d3*c1c1 + c2*(2*c3d0 + c2d1)) +
    //    vₓᵧᵧ*(2*(d0*wo + d1*r5) + c3*d1d1 + d2*(2*c0d3 + c1d2)) +
    //    3*(vₓₓₓ*(2*c0*c2c3 + c1*wc) + 
    //       vᵧᵧᵧ*(2*d0*d2d3 + d1*wd)) +
    //    vₓᵧ*wo +
    //    2*(vₓₓ*c2c3 + vᵧᵧ*d2d3);
    const r4 = get_coeffs_bez3_bez3_exact_fes(c2d2, c3d1);
    const r5 = get_coeffs_bez3_bez3_exact_fes(c1d3, c2d2);
    const k1 = get_coeffs_bez3_bez3_exact_sce(c0, wo);
    const k2 = get_coeffs_bez3_bez3_exact_sce(d0, wo);
    const k3 = get_coeffs_bez3_bez3_exact_epr(c1, r4);
    const k4 = get_coeffs_bez3_bez3_exact_epr(d1, r5);
    const k5 = get_coeffs_bez3_bez3_exact_fes(get_coeffs_bez3_bez3_exact_em2(c3d0), c2d1);
    const k6 = get_coeffs_bez3_bez3_exact_fes(get_coeffs_bez3_bez3_exact_em2(c0d3), c1d2);
    const k7 = get_coeffs_bez3_bez3_exact_epr(d3, c1c1);
    const k8 = get_coeffs_bez3_bez3_exact_epr(c3, d1d1);
    const k9 = get_coeffs_bez3_bez3_exact_epr(c2, k5);
    const ka = get_coeffs_bez3_bez3_exact_epr(d2, k6);
    const kb = get_coeffs_bez3_bez3_exact_em2(get_coeffs_bez3_bez3_exact_fes(k1, k3));
    const kc = get_coeffs_bez3_bez3_exact_em2(get_coeffs_bez3_bez3_exact_fes(k2, k4));
    const kd = get_coeffs_bez3_bez3_exact_em2(get_coeffs_bez3_bez3_exact_sce(c0, c2c3));
    const ke = get_coeffs_bez3_bez3_exact_em2(get_coeffs_bez3_bez3_exact_sce(d0, d2d3));
    const kf = get_coeffs_bez3_bez3_exact_epr(c1, wc);
    const kg = get_coeffs_bez3_bez3_exact_epr(d1, wd);
    const kh = get_coeffs_bez3_bez3_exact_epr(c2c3, vₓₓ);
    const ki = get_coeffs_bez3_bez3_exact_epr(d2d3, vᵧᵧ);
    const kj = get_coeffs_bez3_bez3_exact_fes(kb, k7);
    const kk = get_coeffs_bez3_bez3_exact_fes(kc, k8);
    const kl = get_coeffs_bez3_bez3_exact_fes(kj, k9);
    const km = get_coeffs_bez3_bez3_exact_fes(kk, ka);
    const kn = get_coeffs_bez3_bez3_exact_fes(kd, kf);
    const ko = get_coeffs_bez3_bez3_exact_fes(ke, kg);
    const kp = get_coeffs_bez3_bez3_exact_em2(get_coeffs_bez3_bez3_exact_fes(kh, ki));
    const kq = get_coeffs_bez3_bez3_exact_epr(vₓₓᵧ, kl);
    const kr = get_coeffs_bez3_bez3_exact_epr(vₓᵧᵧ, km);
    const ks = get_coeffs_bez3_bez3_exact_epr(vₓₓₓ, kn);
    const kt = get_coeffs_bez3_bez3_exact_epr(vᵧᵧᵧ, ko);
    const ku = get_coeffs_bez3_bez3_exact_fes(kq, kr);
    const kv = get_coeffs_bez3_bez3_exact_sce(3, get_coeffs_bez3_bez3_exact_fes(ks, kt));
    const kw = get_coeffs_bez3_bez3_exact_epr(vₓᵧ, wo);
    const kx = get_coeffs_bez3_bez3_exact_fes(ku, kv);
    const ky = get_coeffs_bez3_bez3_exact_fes(kw, kp);
    const v5 = get_coeffs_bez3_bez3_exact_fes(kx, ky);
    //const r1 = c1d3 + r4;
    //const r2 = 2*c1c3 + c2c2;
    //const r3 = 2*d1d3 + d2d2;
    //const v4 =
    //    vₓₓᵧ*(2*c0*r1 + d0*r2 + c1*(c1d2 + 2*c2d1)) +
    //    vₓᵧᵧ*(2*d0*r1 + c0*r3 + d1*(c2d1 + 2*c1d2)) +
    //    vₓₓₓ*3*(c0*r2 + c2*c1c1) +
    //    vᵧᵧᵧ*3*(d0*r3 + d2*d1d1) +
    //    vₓᵧ*r1 +
    //    vₓₓ*r2 +
    //    vᵧᵧ*r3;
    const r1 = get_coeffs_bez3_bez3_exact_fes(c1d3, r4);
    const r2 = get_coeffs_bez3_bez3_exact_fes(get_coeffs_bez3_bez3_exact_em2(c1c3), c2c2);
    const r3 = get_coeffs_bez3_bez3_exact_fes(get_coeffs_bez3_bez3_exact_em2(d1d3), d2d2);
    const s1 = get_coeffs_bez3_bez3_exact_sce((2 * c0), r1);
    const s2 = get_coeffs_bez3_bez3_exact_sce((2 * d0), r1);
    const s5 = get_coeffs_bez3_bez3_exact_fes(c1d2, get_coeffs_bez3_bez3_exact_em2(c2d1));
    const s6 = get_coeffs_bez3_bez3_exact_fes(c2d1, get_coeffs_bez3_bez3_exact_em2(c1d2));
    const s3 = get_coeffs_bez3_bez3_exact_sce(d0, r2);
    const s4 = get_coeffs_bez3_bez3_exact_sce(c0, r3);
    const s7 = get_coeffs_bez3_bez3_exact_epr(c1, s5);
    const s8 = get_coeffs_bez3_bez3_exact_epr(d1, s6);
    const s9 = get_coeffs_bez3_bez3_exact_sce(c0, r2);
    const sa = get_coeffs_bez3_bez3_exact_sce(d0, r3);
    const sb = get_coeffs_bez3_bez3_exact_epr(c2, c1c1);
    const sc = get_coeffs_bez3_bez3_exact_epr(d2, d1d1);
    const sd = get_coeffs_bez3_bez3_exact_fes(s1, s3);
    const se = get_coeffs_bez3_bez3_exact_fes(s2, s4);
    const sf = get_coeffs_bez3_bez3_exact_fes(sd, s7);
    const sg = get_coeffs_bez3_bez3_exact_fes(se, s8);
    const sh = get_coeffs_bez3_bez3_exact_fes(s9, sb);
    const si = get_coeffs_bez3_bez3_exact_fes(sa, sc);
    const sj = get_coeffs_bez3_bez3_exact_epr(vₓₓᵧ, sf);
    const sk = get_coeffs_bez3_bez3_exact_epr(vₓᵧᵧ, sg);
    const sl = get_coeffs_bez3_bez3_exact_epr(vₓₓₓ, sh);
    const sm = get_coeffs_bez3_bez3_exact_epr(vᵧᵧᵧ, si);
    const sn = get_coeffs_bez3_bez3_exact_fes(sl, sm);
    const so = get_coeffs_bez3_bez3_exact_fes(sj, sk);
    const sp = get_coeffs_bez3_bez3_exact_fes(so, get_coeffs_bez3_bez3_exact_sce(3, sn));
    const ss = get_coeffs_bez3_bez3_exact_epr(vₓᵧ, r1);
    const st = get_coeffs_bez3_bez3_exact_epr(vₓₓ, r2);
    const sq = get_coeffs_bez3_bez3_exact_fes(ss, st);
    const su = get_coeffs_bez3_bez3_exact_epr(vᵧᵧ, r3);
    const sr = get_coeffs_bez3_bez3_exact_fes(sq, su);
    const v4 = get_coeffs_bez3_bez3_exact_fes(sp, sr);
    //const r6 = c1d2 + c2d1;
    //const r7 = c3d0 + c0d3;
    //const r8 = c1c2 + c0c3;
    //const r9 = d1d2 + d0d3;
    //const v3 =
    //    vₓₓᵧ*(c0*(2*r6 + c3d0 + r7) + c1*(2*c2d0 + c1d1)) +
    //    vₓᵧᵧ*(d0*(2*r6 + c0d3 + r7) + d1*(2*c0d2 + c1d1)) +
    //    vₓₓₓ*(3*c0*(r8 + c1c2) + c1*c1c1) + 
    //    vᵧᵧᵧ*(3*d0*(r9 + d1d2) + d1*d1d1) +
    //    vₓᵧ*(r7 + r6) +
    //    2*(vₓₓ*r8 + vᵧᵧ*r9) +
    //    vₓ*c3 + vᵧ*d3;
    const r6 = get_coeffs_bez3_bez3_exact_fes(c1d2, c2d1);
    const r7 = get_coeffs_bez3_bez3_exact_fes(c3d0, c0d3);
    const r8 = get_coeffs_bez3_bez3_exact_fes(c1c2, c0c3);
    const r9 = get_coeffs_bez3_bez3_exact_fes(d1d2, d0d3);
    const m1 = get_coeffs_bez3_bez3_exact_fes(get_coeffs_bez3_bez3_exact_em2(r6), c3d0);
    const m2 = get_coeffs_bez3_bez3_exact_fes(get_coeffs_bez3_bez3_exact_em2(r6), c0d3);
    const m3 = get_coeffs_bez3_bez3_exact_fes(get_coeffs_bez3_bez3_exact_em2(c2d0), c1d1);
    const m4 = get_coeffs_bez3_bez3_exact_fes(get_coeffs_bez3_bez3_exact_em2(c0d2), c1d1);
    const m5 = get_coeffs_bez3_bez3_exact_fes(r8, c1c2);
    const m6 = get_coeffs_bez3_bez3_exact_fes(r9, d1d2);
    const m7 = get_coeffs_bez3_bez3_exact_epr(get_coeffs_bez3_bez3_exact_tp(3, c0), m5);
    const m8 = get_coeffs_bez3_bez3_exact_epr(get_coeffs_bez3_bez3_exact_tp(3, d0), m6);
    const m9 = get_coeffs_bez3_bez3_exact_epr(c1, c1c1);
    const ma = get_coeffs_bez3_bez3_exact_epr(d1, d1d1);
    const mb = get_coeffs_bez3_bez3_exact_epr(vₓₓ, r8);
    const mc = get_coeffs_bez3_bez3_exact_epr(vᵧᵧ, r9);
    const md = get_coeffs_bez3_bez3_exact_fes(m1, r7);
    const me = get_coeffs_bez3_bez3_exact_fes(m2, r7);
    const mf = get_coeffs_bez3_bez3_exact_sce(c0, md);
    const mg = get_coeffs_bez3_bez3_exact_sce(d0, me);
    const mh = get_coeffs_bez3_bez3_exact_epr(c1, m3);
    const mi = get_coeffs_bez3_bez3_exact_epr(d1, m4);
    const mj = get_coeffs_bez3_bez3_exact_epr(c3, vₓ);
    const mk = get_coeffs_bez3_bez3_exact_epr(d3, vᵧ);
    const ml = get_coeffs_bez3_bez3_exact_fes(mf, mh);
    const mm = get_coeffs_bez3_bez3_exact_fes(mg, mi);
    const mn = get_coeffs_bez3_bez3_exact_fes(m7, m9);
    const mo = get_coeffs_bez3_bez3_exact_fes(m8, ma);
    const mp = get_coeffs_bez3_bez3_exact_fes(r7, r6);
    const mq = get_coeffs_bez3_bez3_exact_em2(get_coeffs_bez3_bez3_exact_fes(mb, mc));
    const mr = get_coeffs_bez3_bez3_exact_epr(vₓₓᵧ, ml);
    const ms = get_coeffs_bez3_bez3_exact_epr(vₓᵧᵧ, mm);
    const mt = get_coeffs_bez3_bez3_exact_epr(vₓₓₓ, mn);
    const mu = get_coeffs_bez3_bez3_exact_epr(vᵧᵧᵧ, mo);
    const mv = get_coeffs_bez3_bez3_exact_epr(vₓᵧ, mp);
    const mw = get_coeffs_bez3_bez3_exact_fes(mr, ms);
    const mx = get_coeffs_bez3_bez3_exact_fes(mt, mu);
    const my = get_coeffs_bez3_bez3_exact_fes(mv, mq);
    const mz = get_coeffs_bez3_bez3_exact_fes(mj, mk);
    const n1 = get_coeffs_bez3_bez3_exact_fes(mw, mx);
    const n2 = get_coeffs_bez3_bez3_exact_fes(my, mz);
    const v3 = get_coeffs_bez3_bez3_exact_fes(n1, n2);
    //const ra = c1d1 + c2d0;
    //const rb = c1d1 + c0d2;
    //const v2 =
    //    vₓₓᵧ*(c0*(2*ra + c0d2) + d0*c1c1) +
    //    vₓᵧᵧ*(d0*(2*rb + c2d0) + c0*d1d1) +
    //    3*vₓₓₓ*(c0*c1c1 + c2*c0c0) + 
    //    3*vᵧᵧᵧ*(d0*d1d1 + d2*d0d0) +
    //    vₓᵧ*(ra + c0d2) +
    //    vₓₓ*(2*c0c2 + c1c1) + 
    //    vᵧᵧ*(2*d0d2 + d1d1) +
    //    c2*vₓ + d2*vᵧ;
    const ra = get_coeffs_bez3_bez3_exact_fes(c1d1, c2d0);
    const rb = get_coeffs_bez3_bez3_exact_fes(c1d1, c0d2);
    const l1 = get_coeffs_bez3_bez3_exact_fes(get_coeffs_bez3_bez3_exact_em2(ra), c0d2);
    const l2 = get_coeffs_bez3_bez3_exact_fes(get_coeffs_bez3_bez3_exact_em2(rb), c2d0);
    const l3 = get_coeffs_bez3_bez3_exact_sce(c0, l1);
    const l4 = get_coeffs_bez3_bez3_exact_sce(d0, c1c1);
    const l5 = get_coeffs_bez3_bez3_exact_sce(d0, l2);
    const l6 = get_coeffs_bez3_bez3_exact_sce(c0, d1d1);
    const l7 = get_coeffs_bez3_bez3_exact_sce(c0, c1c1);
    const l8 = get_coeffs_bez3_bez3_exact_epr(c2, c0c0);
    const l9 = get_coeffs_bez3_bez3_exact_sce(d0, d1d1);
    const la = get_coeffs_bez3_bez3_exact_epr(d2, d0d0);
    const lb = get_coeffs_bez3_bez3_exact_fes(l3, l4);
    const lc = get_coeffs_bez3_bez3_exact_fes(l5, l6);
    const ld = get_coeffs_bez3_bez3_exact_fes(l7, l8);
    const le = get_coeffs_bez3_bez3_exact_fes(l9, la);
    const lf = get_coeffs_bez3_bez3_exact_epr(vₓₓₓ, ld);
    const lg = get_coeffs_bez3_bez3_exact_epr(vᵧᵧᵧ, le);
    const lh = get_coeffs_bez3_bez3_exact_sce(3, get_coeffs_bez3_bez3_exact_fes(lf, lg));
    const li = get_coeffs_bez3_bez3_exact_fes(ra, c0d2);
    const lj = get_coeffs_bez3_bez3_exact_fes(get_coeffs_bez3_bez3_exact_em2(c0c2), c1c1);
    const lk = get_coeffs_bez3_bez3_exact_fes(get_coeffs_bez3_bez3_exact_em2(d0d2), d1d1);
    const ll = get_coeffs_bez3_bez3_exact_epr(vₓₓᵧ, lb);
    const lm = get_coeffs_bez3_bez3_exact_epr(vₓᵧᵧ, lc);
    const ln = get_coeffs_bez3_bez3_exact_epr(vₓᵧ, li);
    const lo = get_coeffs_bez3_bez3_exact_epr(vₓₓ, lj);
    const lp = get_coeffs_bez3_bez3_exact_epr(vᵧᵧ, lk);
    const lq = get_coeffs_bez3_bez3_exact_epr(c2, vₓ);
    const lr = get_coeffs_bez3_bez3_exact_epr(d2, vᵧ);
    const ls = get_coeffs_bez3_bez3_exact_fes(lq, lr);
    const lt = get_coeffs_bez3_bez3_exact_fes(ll, lm);
    const lu = get_coeffs_bez3_bez3_exact_fes(lh, ln);
    const lv = get_coeffs_bez3_bez3_exact_fes(lo, lp);
    const lw = get_coeffs_bez3_bez3_exact_fes(lt, lu);
    const lx = get_coeffs_bez3_bez3_exact_fes(lv, ls);
    const v2 = get_coeffs_bez3_bez3_exact_fes(lw, lx);
    //const rc = c1d0 + c0d1;
    //const v1 =
    //    vₓₓᵧ*c0*(rc + c1d0) +
    //    vₓᵧᵧ*d0*(rc + c0d1) +
    //    3*(c1*c0c0*vₓₓₓ + d1*d0d0*vᵧᵧᵧ) +
    //    vₓᵧ*rc +
    //    2*(c0c1*vₓₓ + d0d1*vᵧᵧ) +
    //    c1*vₓ + d1*vᵧ ;
    const rc = get_coeffs_bez3_bez3_exact_fes(c1d0, c0d1);
    const rd = get_coeffs_bez3_bez3_exact_sce(c0, vₓₓᵧ);
    const re = get_coeffs_bez3_bez3_exact_sce(d0, vₓᵧᵧ);
    const rf = get_coeffs_bez3_bez3_exact_fes(rc, c1d0);
    const rg = get_coeffs_bez3_bez3_exact_fes(rc, c0d1);
    const rx = get_coeffs_bez3_bez3_exact_epr(c1, c0c0);
    const rh = get_coeffs_bez3_bez3_exact_epr(rx, vₓₓₓ);
    const ry = get_coeffs_bez3_bez3_exact_epr(d1, d0d0);
    const ri = get_coeffs_bez3_bez3_exact_epr(ry, vᵧᵧᵧ);
    const rj = get_coeffs_bez3_bez3_exact_epr(vₓᵧ, rc);
    const rk = get_coeffs_bez3_bez3_exact_epr(c0c1, vₓₓ);
    const rl = get_coeffs_bez3_bez3_exact_epr(d0d1, vᵧᵧ);
    const rm = get_coeffs_bez3_bez3_exact_fes(rk, rl);
    const rn = get_coeffs_bez3_bez3_exact_epr(c1, vₓ);
    const ro = get_coeffs_bez3_bez3_exact_epr(d1, vᵧ);
    const rp = get_coeffs_bez3_bez3_exact_fes(rn, ro);
    const rq = get_coeffs_bez3_bez3_exact_epr(rd, rf);
    const rr = get_coeffs_bez3_bez3_exact_epr(re, rg);
    const rs = get_coeffs_bez3_bez3_exact_fes(rq, rr);
    const rt = get_coeffs_bez3_bez3_exact_sce(3, get_coeffs_bez3_bez3_exact_fes(rh, ri));
    const ru = get_coeffs_bez3_bez3_exact_fes(rj, get_coeffs_bez3_bez3_exact_em2(rm));
    const rv = get_coeffs_bez3_bez3_exact_fes(rs, rt);
    const rw = get_coeffs_bez3_bez3_exact_fes(ru, rp);
    const v1 = get_coeffs_bez3_bez3_exact_fes(rv, rw);
    // v0
    const t1 = get_coeffs_bez3_bez3_exact_sce(c0, vₓₓₓ);
    const t2 = get_coeffs_bez3_bez3_exact_sce(d0, vₓₓᵧ);
    const p4 = get_coeffs_bez3_bez3_exact_fes(t1, t2);
    const t3 = get_coeffs_bez3_bez3_exact_sce(c0, vₓᵧᵧ);
    const t4 = get_coeffs_bez3_bez3_exact_sce(d0, vᵧᵧᵧ);
    const p5 = get_coeffs_bez3_bez3_exact_fes(t3, t4);
    const p7 = get_coeffs_bez3_bez3_exact_fes(p4, vₓₓ);
    const p8 = get_coeffs_bez3_bez3_exact_fes(p5, vᵧᵧ);
    const pc = get_coeffs_bez3_bez3_exact_epr(c0c0, p7);
    const pd = get_coeffs_bez3_bez3_exact_epr(d0d0, p8);
    const p6 = get_coeffs_bez3_bez3_exact_fes(pc, pd);
    const pe = get_coeffs_bez3_bez3_exact_epr(c0d0, vₓᵧ);
    const p9 = get_coeffs_bez3_bez3_exact_fes(p6, pe);
    const pf = get_coeffs_bez3_bez3_exact_sce(c0, vₓ);
    const pg = get_coeffs_bez3_bez3_exact_sce(d0, vᵧ);
    const pa = get_coeffs_bez3_bez3_exact_fes(pf, pg);
    const pb = get_coeffs_bez3_bez3_exact_fes(p9, pa);
    const v0 = get_coeffs_bez3_bez3_exact_fes(pb, v);
    const r = [v9, v8, v7, v6, v5, v4, v3, v2, v1, v0];
    return r;
}

//# sourceMappingURL=get-coeffs-bez3-bez3-exact.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/bezier-bezier-intersection/get-coefficients/get-coeffs-bez-bez.js


















const coeffFunctionsDd = [
    [getCoeffsBez1Bez1Dd, getCoeffsBez1Bez2Dd, getCoeffsBez1Bez3Dd],
    [getCoeffsBez2Bez1Dd, getCoeffsBez2Bez2Dd, getCoeffsBez2Bez3Dd],
    [getCoeffsBez3Bez1Dd, getCoeffsBez3Bez2Dd, getCoeffsBez3Bez3Dd]
];
const coeffFunctionsExact = [
    [getCoeffsBez1Bez1Exact, getCoeffsBez1Bez2Exact, getCoeffsBez1Bez3Exact],
    [getCoeffsBez2Bez1Exact, getCoeffsBez2Bez2Exact, getCoeffsBez2Bez3Exact],
    [getCoeffsBez3Bez1Exact, getCoeffsBez3Bez2Exact, getCoeffsBez3Bez3Exact]
];
/**
 * Returns an object with properties containing (1) the coefficients (in double-double
 * precision) of a polynomial in 1 variable whose roots are the parameter values
 * (of the second curve) of the intersection points of two given order 1, 2 or 3 bezier curves (i.e. lines,
 * quadratic and cubic bezier curves), (2) the coefficientwise error bound of the polyomial,
 * and (3) a function that returns the *exact* polynomial coefficients as
 * [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf) expansions.
 *
 * The returned polynomial coefficients are given densely as an array of
 * double-double precision floating point numbers from highest to lowest power,
 * e.g. `[[0,5],[0,-3],[0,0]]` represents the polynomial `5x^2 - 3x`.
 *
 * * if there is an infinite number of intersections `undefined` is returned
 * * intermediate calculations are done in double-double precision with
 * fallback to infinite precision (bar underflow / overflow)
 *
 * @param ps1
 * @param ps2
 *
 * @doc mdx
 */
function getCoeffsBezBez(ps1, ps2) {
    const { coeffs, errBound } = coeffFunctionsDd[ps1.length - 2][ps2.length - 2](ps1, ps2);
    const getPExact = () => coeffFunctionsExact[ps1.length - 2][ps2.length - 2](ps1, ps2);
    return { coeffs, errBound, getPExact };
}

//# sourceMappingURL=get-coeffs-bez-bez.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/local-properties-at-t/evaluate/double-double/eval-de-casteljau-dd.js

// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗
const eval_de_casteljau_dd_qmq = node_ddMultDd;
const eval_de_casteljau_dd_qaq = node_ddAddDd;
const eval_de_casteljau_dd_qdq = node_ddDiffDd;
const eval_de_casteljau_dd_td = node_twoDiff;
const eval_de_casteljau_dd_qad = node_ddAddDouble;
/**
 * Returns the resulting point (in double-double precision) of evaluating the
 * given bezier curve at the given parameter `t` (given as a double-double
 * precision floating point number).
 *
 * * uses [De Casteljau's algorithm](https://en.wikipedia.org/wiki/De_Casteljau%27s_algorithm)
 * with intermediate calculations done in double-double precision floating point
 * arithmetic.
 *
 * * to get an absolute error bound on the result call [[evalDeCasteljauError]]
 *
 * @param ps an order 1,2 or 3 bezier curve, e.g. `[[0,0],[1,1],[2,1],[2,0]]`
 * @param t the parameter value where the bezier should be evaluated (given in
 * double-double precision)
 *
 * @doc mdx
 **/
function evalDeCasteljauDd(ps, t) {
    if (t[0] === 0 && t[1] === 0) {
        return ps[0].map(c => [0, c]);
    }
    else if (t[0] === 0 && t[1] === 1) {
        return ps[ps.length - 1].map(c => [0, c]);
    }
    if (ps.length === 4) {
        const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;
        const a01 = eval_de_casteljau_dd_qad(eval_de_casteljau_dd_qmq(eval_de_casteljau_dd_td(x1, x0), t), x0);
        const a11 = eval_de_casteljau_dd_qad(eval_de_casteljau_dd_qmq(eval_de_casteljau_dd_td(x2, x1), t), x1);
        const a21 = eval_de_casteljau_dd_qad(eval_de_casteljau_dd_qmq(eval_de_casteljau_dd_td(x3, x2), t), x2);
        const a02 = eval_de_casteljau_dd_qaq(a01, eval_de_casteljau_dd_qmq(eval_de_casteljau_dd_qdq(a11, a01), t));
        const a12 = eval_de_casteljau_dd_qaq(a11, eval_de_casteljau_dd_qmq(eval_de_casteljau_dd_qdq(a21, a11), t));
        const x = eval_de_casteljau_dd_qaq(a02, eval_de_casteljau_dd_qmq(eval_de_casteljau_dd_qdq(a12, a02), t));
        const b01 = eval_de_casteljau_dd_qad(eval_de_casteljau_dd_qmq(eval_de_casteljau_dd_td(y1, y0), t), y0);
        const b11 = eval_de_casteljau_dd_qad(eval_de_casteljau_dd_qmq(eval_de_casteljau_dd_td(y2, y1), t), y1);
        const b21 = eval_de_casteljau_dd_qad(eval_de_casteljau_dd_qmq(eval_de_casteljau_dd_td(y3, y2), t), y2);
        const b02 = eval_de_casteljau_dd_qaq(b01, eval_de_casteljau_dd_qmq(eval_de_casteljau_dd_qdq(b11, b01), t));
        const b12 = eval_de_casteljau_dd_qaq(b11, eval_de_casteljau_dd_qmq(eval_de_casteljau_dd_qdq(b21, b11), t));
        const y = eval_de_casteljau_dd_qaq(b02, eval_de_casteljau_dd_qmq(eval_de_casteljau_dd_qdq(b12, b02), t));
        return [x, y];
    }
    if (ps.length === 3) {
        const [[x0, y0], [x1, y1], [x2, y2]] = ps;
        const a01 = eval_de_casteljau_dd_qaq([0, x0], eval_de_casteljau_dd_qmq(eval_de_casteljau_dd_td(x1, x0), t));
        const a11 = eval_de_casteljau_dd_qaq([0, x1], eval_de_casteljau_dd_qmq(eval_de_casteljau_dd_td(x2, x1), t));
        const x = eval_de_casteljau_dd_qaq(a01, eval_de_casteljau_dd_qmq(eval_de_casteljau_dd_qdq(a11, a01), t));
        const b01 = eval_de_casteljau_dd_qaq([0, y0], eval_de_casteljau_dd_qmq(eval_de_casteljau_dd_td(y1, y0), t));
        const b11 = eval_de_casteljau_dd_qaq([0, y1], eval_de_casteljau_dd_qmq(eval_de_casteljau_dd_td(y2, y1), t));
        const y = eval_de_casteljau_dd_qaq(b01, eval_de_casteljau_dd_qmq(eval_de_casteljau_dd_qdq(b11, b01), t));
        return [x, y];
    }
    if (ps.length === 2) {
        const [[x0, y0], [x1, y1]] = ps;
        const x = eval_de_casteljau_dd_qad(eval_de_casteljau_dd_qmq(eval_de_casteljau_dd_td(x1, x0), t), x0);
        const y = eval_de_casteljau_dd_qad(eval_de_casteljau_dd_qmq(eval_de_casteljau_dd_td(y1, y0), t), y0);
        return [x, y];
    }
    if (ps.length === 1) {
        const [x, y] = ps[0];
        return [[0, x], [0, y]];
    }
    throw new Error('The given bezier curve must be of order <= 3.');
}

//# sourceMappingURL=eval-de-casteljau-dd.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/global-properties/bounds/get-interval-box/get-interval-box-dd.js




const get_interval_box_dd_ddDiffDd = node_ddDiffDd;
const get_interval_box_dd_ddDivDdWithError = node_ddDivDdWithError;
const get_interval_box_dd_ddAddDouble = node_ddAddDouble;
const get_interval_box_dd_ddMultDd = node_ddMultDd;
const get_interval_box_dd_ddMultDouble2 = node_ddMultDouble2;
const get_interval_box_dd_ddAddDd = node_ddAddDd;
const get_interval_box_dd_ddMultBy2 = node_ddMultBy2;
const get_interval_box_dd_ddMin = node_ddMin;
const get_interval_box_dd_ddMax = node_ddMax;
const get_interval_box_dd_u = Number.EPSILON / 2;
const get_interval_box_dd_uu = get_interval_box_dd_u * get_interval_box_dd_u;
const get_interval_box_dd_abs = Math.abs;
const get_interval_box_dd_qdq = get_interval_box_dd_ddDiffDd;
const qOne = [0, 1];
const get_interval_box_dd_qad = get_interval_box_dd_ddAddDouble;
const get_interval_box_dd_qaq = get_interval_box_dd_ddAddDd;
const get_interval_box_dd_qmq = get_interval_box_dd_ddMultDd;
const get_interval_box_dd_qmd = get_interval_box_dd_ddMultDouble2;
const get_interval_box_dd_qm2 = get_interval_box_dd_ddMultBy2;
const qDivQuadWithError = get_interval_box_dd_ddDivDdWithError;
const qMin = get_interval_box_dd_ddMin;
const qMax = get_interval_box_dd_ddMax;
const get_interval_box_dd_3 = error_analysis_error_analysis_(3);
/**
 * Returns an axis-aligned-box that is guaranteed to engulf the entire
 * given bezier curve from `t1` to `t2`. The returned box is given as an array
 * of points in double-double precision, e.g. `[[[0,1],[0,1]], [[0,2],[0,2]]]`.
 *
 * * **precondition**: (to satisfy guarantee) t1 < t2
 * * **precondition**: (to satisfy guarantee) t1,t2 >= 0 && t1,t2 <= 1
 *
 * @param ps an order 1,2 or 3 bezier curve given as an array of its control
 * points, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 * @param ts [first, second] parameter values, given in double-double
 * precision, e.g. [[0,0.11], [0,0.12]]. (Use [[getIntervalBox]] instead for
 * double precision)
 *
 * @doc mdx
 */
function getIntervalBoxDd(ps, ts) {
    if (ts[0][0] !== ts[1][0] || ts[0][1] !== ts[1][1]) {
        if (ps.length === 4) {
            return getIntervalBox3Dd(ps, ts);
        }
        if (ps.length === 3) {
            return getIntervalBox2Dd(ps, ts);
        }
        return getIntervalBox1Dd(ps, ts);
    }
    else { // ts[0] === ts[1]
        return getIntervalBoxAtTDd(ps, ts[0]);
    }
}
/**
 * quad precision t1, t2
 *
 * @param param0
 * @param param1
 *
 * @internal
 */
function getIntervalBox3Dd([[x0, y0], [x1, y1], [x2, y2], [x3, y3]], [t1, t2]) {
    //t2 = ((t2-t1) / (1-t1)) * (1 + Number.EPSILON); // <= fl(t2) > t2
    const tDel = get_interval_box_dd_qdq(t2, t1);
    const tDel_ = 3 * get_interval_box_dd_uu * get_interval_box_dd_abs(tDel[1]); // max absolute error in tDel
    const oMt1 = get_interval_box_dd_qdq(qOne, t1);
    const oMt1_ = 3 * get_interval_box_dd_uu * get_interval_box_dd_abs(oMt1[1]); // max absolute error in oMt1
    //t2 = qdivq(t2m1,omt1) //* (1 + Number.EPSILON); // <= fl(t2) > t2
    const $t2 = qDivQuadWithError(tDel, oMt1, tDel_, oMt1_);
    t2 = get_interval_box_dd_qad($t2.est, $t2.err); // the max t2 can possibly be
    const s1 = get_interval_box_dd_qdq(qOne, t1); // <1>s1
    // below uses error by counters - also note qmq is different than other operators in that it is 2ice as inaccurate
    const tt1 = get_interval_box_dd_qmq(t1, t1); // <2>tt1  
    const ts1 = get_interval_box_dd_qmq(t1, s1); // <3>(<0>t1<1>s1)  <3> === <0+1+2>
    const ss1 = get_interval_box_dd_qmq(s1, s1); // <4>(<1>s1<1>s1)  <4> === <1+1+2>
    const ttt1 = get_interval_box_dd_qmq(tt1, t1); // <4>(<2>tt1<0>t1)
    const tts1 = get_interval_box_dd_qmq(tt1, s1); // <5>(<2>tt1<1>s1)
    const tss1 = get_interval_box_dd_qmq(ss1, t1); // <6>(<4>ss1<0>t1)
    const sss1 = get_interval_box_dd_qmq(ss1, s1); // <7>(<4>ss1<1>s1)
    const s2 = get_interval_box_dd_qdq(qOne, t2); // <1>s2 <= relative error bounded by u*(1 - t2)
    const tt2 = get_interval_box_dd_qmq(t2, t2); // <2>tt2
    const ts2 = get_interval_box_dd_qmq(t2, s2); // <3>(<0>t2<1>s2)
    const ss2 = get_interval_box_dd_qmq(s2, s2); // <4>(<1>s2<1>s2)
    const ttt2 = get_interval_box_dd_qmq(tt2, t2); // <4>(<1>tt2<0>t2)
    const tts2 = get_interval_box_dd_qmq(tt2, s2); // <5>(<1>tt2<1>s2)
    const tss2 = get_interval_box_dd_qmq(ss2, t2); // <6>(<3>ss2<0>t2)
    const sss2 = get_interval_box_dd_qmq(ss2, s2); // <7>(<3>ss2<1>s2)
    const _t1 = get_interval_box_dd_abs(t1[1]);
    const _s1 = get_interval_box_dd_abs(s1[1]);
    const _tt1 = get_interval_box_dd_abs(tt1[1]);
    const _ts1 = get_interval_box_dd_abs(ts1[1]);
    const _ss1 = get_interval_box_dd_abs(ss1[1]);
    const _ttt1 = get_interval_box_dd_abs(ttt1[1]);
    const _tts1 = get_interval_box_dd_abs(tts1[1]);
    const _tss1 = get_interval_box_dd_abs(tss1[1]);
    const _sss1 = get_interval_box_dd_abs(sss1[1]);
    const _t2 = get_interval_box_dd_abs(t2[1]);
    const _s2 = get_interval_box_dd_abs(s2[1]);
    const _tt2 = get_interval_box_dd_abs(tt2[1]);
    const _ts2 = get_interval_box_dd_abs(ts2[1]);
    const _ss2 = get_interval_box_dd_abs(ss2[1]);
    const _ttt2 = get_interval_box_dd_abs(ttt2[1]);
    const _tts2 = get_interval_box_dd_abs(tts2[1]);
    const _tss2 = get_interval_box_dd_abs(tss2[1]);
    const _sss2 = get_interval_box_dd_abs(sss2[1]);
    // all of t1,s1,ts1,... are all positive so simpler to use a relative error
    // bound (using e.g. counters <k>):
    // counter rules:
    //   <k>a + <l>b = <max(k,l) + 1>(a + b)
    //   <k>a<l>b = <k + l + 1>ab
    //   fl(a) === <1>a
    let _x0 = get_interval_box_dd_abs(x0);
    let _y0 = get_interval_box_dd_abs(y0);
    let _x1 = get_interval_box_dd_abs(x1);
    let _y1 = get_interval_box_dd_abs(y1);
    let _x2 = get_interval_box_dd_abs(x2);
    let _y2 = get_interval_box_dd_abs(y2);
    let _x3 = get_interval_box_dd_abs(x3);
    let _y3 = get_interval_box_dd_abs(y3);
    //---- x - calculation
    const q8 = get_interval_box_dd_qaq(get_interval_box_dd_qmd(x3, t1), get_interval_box_dd_qmd(x2, s1));
    const q7 = get_interval_box_dd_qaq(get_interval_box_dd_qaq(get_interval_box_dd_qmd(x3, tt1), get_interval_box_dd_qmd(2 * x2, ts1)), get_interval_box_dd_qmd(x1, ss1));
    const qx0 = get_interval_box_dd_qaq(get_interval_box_dd_qaq(get_interval_box_dd_qmd(x3, ttt1), get_interval_box_dd_qmd(x0, sss1)), get_interval_box_dd_qmd(3, (get_interval_box_dd_qaq(get_interval_box_dd_qmd(x2, tts1), get_interval_box_dd_qmd(x1, tss1)))));
    const qx1 = get_interval_box_dd_qaq(get_interval_box_dd_qmq(q7, t2), get_interval_box_dd_qmq(qx0, s2));
    const qx2 = get_interval_box_dd_qaq(get_interval_box_dd_qaq(get_interval_box_dd_qmq(q8, tt2), get_interval_box_dd_qmq(qx0, ss2)), get_interval_box_dd_qmq(get_interval_box_dd_qm2(q7), ts2));
    const qx3 = get_interval_box_dd_qaq(get_interval_box_dd_qaq(get_interval_box_dd_qmd(x3, ttt2), get_interval_box_dd_qmq(qx0, sss2)), get_interval_box_dd_qmd(3, get_interval_box_dd_qaq(get_interval_box_dd_qmq(q8, tts2), get_interval_box_dd_qmq(q7, tss2))));
    const _qx0 = get_interval_box_dd_abs(qx0[1]);
    //---- error / abs value calculation
    const _q8 = _x3 * _t1 + _x2 * _s1; // <= <3>
    // q8: <3>(<1>(x3*t1) + <2>(x2*<1>s1))
    const _q7 = _x3 * _tt1 + 2 * _x2 * _ts1 + _x1 * _ss1; // <= <6> 
    // q7: <6>(<5>(<3>(x3*<2>tt1) + <4>(2*x2*<3>ts1)) + <5>(x1*<4>ss1));
    _x0 = (_x3 * _ttt1 + _x0 * _sss1) + 3 * (_x2 * _tts1 + _x1 * _tss1); // <= <11>
    // x0: <11>(<9>(x3*<4>ttt1 + x0*<7>sss1) + <10>(3*<9>(<8>(<6>(x2*<5>tts1) + <7>(x1*<6>tss1)))));
    _x1 = _q7 * _t2 + _qx0 * _s2; // <= <15>
    // x1: <15>(<7>(<6>q7*t2) + <14>(<11>x0*<1>s2));
    _x2 = _q8 * _tt2 + _qx0 * _ss2 + 2 * _q7 * _ts2; // <= <20>
    // x2: <20>(<19>(<18>(<3>q8*<2>tt2) + <17>(<11>x0*<4>ss2)) + <11>(2*<6>q7*<3>ts2));
    _x3 = _x3 * _ttt2 + _qx0 * _sss2 + 3 * (_q8 * _tts2 + _q7 * _tss2); // <= <22>
    // x3: <22>(<21>(<5>(x3*<4>ttt2) + <20>(<11>x0*<7>sss2)) + <16>(3*<15>(<10>(<3>q8*<5>tts2) + <14>(<6>q7*<6>tss2)))));
    // max errors: 
    _x0 = 11 * get_interval_box_dd_uu * _x0;
    _x1 = 15 * get_interval_box_dd_uu * _x1;
    _x2 = 20 * get_interval_box_dd_uu * _x2;
    _x3 = 22 * get_interval_box_dd_uu * _x3;
    //---- y - calculation
    const r8 = get_interval_box_dd_qaq(get_interval_box_dd_qmd(y3, t1), get_interval_box_dd_qmd(y2, s1));
    const r7 = get_interval_box_dd_qaq(get_interval_box_dd_qaq(get_interval_box_dd_qmd(y3, tt1), get_interval_box_dd_qmd(2 * y2, ts1)), get_interval_box_dd_qmd(y1, ss1));
    const qy0 = get_interval_box_dd_qaq(get_interval_box_dd_qaq(get_interval_box_dd_qmd(y3, ttt1), get_interval_box_dd_qmd(y0, sss1)), get_interval_box_dd_qmd(3, (get_interval_box_dd_qaq(get_interval_box_dd_qmd(y2, tts1), get_interval_box_dd_qmd(y1, tss1)))));
    const qy1 = get_interval_box_dd_qaq(get_interval_box_dd_qmq(r7, t2), get_interval_box_dd_qmq(qy0, s2));
    const qy2 = get_interval_box_dd_qaq(get_interval_box_dd_qaq(get_interval_box_dd_qmq(r8, tt2), get_interval_box_dd_qmq(qy0, ss2)), get_interval_box_dd_qmq(get_interval_box_dd_qm2(r7), ts2));
    const qy3 = get_interval_box_dd_qaq(get_interval_box_dd_qaq(get_interval_box_dd_qmd(y3, ttt2), get_interval_box_dd_qmq(qy0, sss2)), get_interval_box_dd_qmd(3, get_interval_box_dd_qaq(get_interval_box_dd_qmq(r8, tts2), get_interval_box_dd_qmq(r7, tss2))));
    const _qy0 = get_interval_box_dd_abs(qy0[1]);
    //---- error / abs value calculation
    const _r8 = _y3 * _t1 + _y2 * _s1; // <= <3>
    const _r7 = _y3 * _tt1 + 2 * _y2 * _ts1 + _y1 * _ss1; // <= <6> 
    _y0 = (_y3 * _ttt1 + _y0 * _sss1) + 3 * (_y2 * _tts1 + _y1 * _tss1); // <= <11>
    _y1 = _r7 * _t2 + _qy0 * _s2; // <= <15>
    _y2 = _r8 * _tt2 + _qy0 * _ss2 + 2 * _r7 * _ts2; // <= <20>
    _y3 = _y3 * _ttt2 + _qy0 * _sss2 + 3 * (_r8 * _tts2 + _r7 * _tss2); // <= <22>
    // max errors: 
    _y0 = 11 * get_interval_box_dd_uu * _y0;
    _y1 = 15 * get_interval_box_dd_uu * _y1;
    _y2 = 20 * get_interval_box_dd_uu * _y2;
    _y3 = 22 * get_interval_box_dd_uu * _y3;
    const minX = qMin(qMin(get_interval_box_dd_qad(qx0, -_x0), get_interval_box_dd_qad(qx1, -_x1)), qMin(get_interval_box_dd_qad(qx2, -_x2), get_interval_box_dd_qad(qx3, -_x3)));
    const maxX = qMax(qMax(get_interval_box_dd_qad(qx0, +_x0), get_interval_box_dd_qad(qx1, +_x1)), qMax(get_interval_box_dd_qad(qx2, +_x2), get_interval_box_dd_qad(qx3, +_x3)));
    const minY = qMin(qMin(get_interval_box_dd_qad(qy0, -_y0), get_interval_box_dd_qad(qy1, -_y1)), qMin(get_interval_box_dd_qad(qy2, -_y2), get_interval_box_dd_qad(qy3, -_y3)));
    const maxY = qMax(qMax(get_interval_box_dd_qad(qy0, +_y0), get_interval_box_dd_qad(qy1, +_y1)), qMax(get_interval_box_dd_qad(qy2, +_y2), get_interval_box_dd_qad(qy3, +_y3)));
    return [[minX, minY], [maxX, maxY]];
}
/**
 * quad precision t1, t2
 *
 * @param param0
 * @param param1
 *
 * @internal
 */
function getIntervalBox2Dd([[x0, y0], [x1, y1], [x2, y2]], [t1, t2]) {
    //t2 = ((t2-t1) / (1-t1)) * (1 + Number.EPSILON); // <= fl(t2) > t2
    const tDel = get_interval_box_dd_qdq(t2, t1);
    const tDel_ = 3 * get_interval_box_dd_uu * get_interval_box_dd_abs(tDel[1]); // max absolute error in tDel
    const oMt1 = get_interval_box_dd_qdq(qOne, t1);
    const oMt1_ = 3 * get_interval_box_dd_uu * get_interval_box_dd_abs(oMt1[1]); // max absolute error in oMt1
    //t2 = qdivq(t2m1,omt1) //* (1 + Number.EPSILON); // <= fl(t2) > t2
    const $t2 = qDivQuadWithError(tDel, oMt1, tDel_, oMt1_);
    t2 = get_interval_box_dd_qad($t2.est, $t2.err); // the max t2 can possibly be
    //const s1 = (1 - t1);  // <= exact by precondition - not anymore
    const s1 = get_interval_box_dd_qdq(qOne, t1); // <1>s1
    // below uses error by counters - also note qmq is different than other operators in that it is 2ice as inaccurate
    const tt1 = get_interval_box_dd_qmq(t1, t1); // <2>tt1  
    const ts1 = get_interval_box_dd_qmq(t1, s1); // <3>(<0>t1<1>s1)  <3> === <0+1+2>
    const ss1 = get_interval_box_dd_qmq(s1, s1); // <4>(<1>s1<1>s1)  <4> === <1+1+2>
    const s2 = get_interval_box_dd_qdq(qOne, t2); // <1>s2 <= relative error bounded by u*(1 - t2)
    const tt2 = get_interval_box_dd_qmq(t2, t2); // <2>tt2
    const ts2 = get_interval_box_dd_qmq(t2, s2); // <3>(<0>t2<1>s2)
    const ss2 = get_interval_box_dd_qmq(s2, s2); // <4>(<1>s2<1>s2)
    const _t1 = get_interval_box_dd_abs(t1[1]);
    const _s1 = get_interval_box_dd_abs(s1[1]);
    const _tt1 = get_interval_box_dd_abs(tt1[1]);
    const _ts1 = get_interval_box_dd_abs(ts1[1]);
    const _ss1 = get_interval_box_dd_abs(ss1[1]);
    const _t2 = get_interval_box_dd_abs(t2[1]);
    const _s2 = get_interval_box_dd_abs(s2[1]);
    const _tt2 = get_interval_box_dd_abs(tt2[1]);
    const _ts2 = get_interval_box_dd_abs(ts2[1]);
    const _ss2 = get_interval_box_dd_abs(ss2[1]);
    // all of t1,s1,ts1,... are all positive so simpler to use a relative error
    // bound (using e.g. counters <k>):
    // counter rules:
    //   <k>a + <l>b = <max(k,l) + 1>(a + b)
    //   <k>a<l>b = <k + l + 1>ab
    //   fl(a) === <1>a
    let _x0 = get_interval_box_dd_abs(x0);
    let _y0 = get_interval_box_dd_abs(y0);
    let _x1 = get_interval_box_dd_abs(x1);
    let _y1 = get_interval_box_dd_abs(y1);
    let _x2 = get_interval_box_dd_abs(x2);
    let _y2 = get_interval_box_dd_abs(y2);
    //---- x - calculation
    const q1 = get_interval_box_dd_qaq(get_interval_box_dd_qaq(get_interval_box_dd_qmd(x2, tt1), get_interval_box_dd_qmd(2 * x1, ts1)), get_interval_box_dd_qmd(x0, ss1));
    const q2 = get_interval_box_dd_qaq(get_interval_box_dd_qmd(x2, t1), get_interval_box_dd_qmd(x1, s1));
    const qx0 = q1;
    const qx1 = get_interval_box_dd_qaq(get_interval_box_dd_qmq(t2, q2), get_interval_box_dd_qmq(s2, q1));
    const qx2 = get_interval_box_dd_qaq(get_interval_box_dd_qaq(get_interval_box_dd_qmd(x2, tt2), get_interval_box_dd_qmq(get_interval_box_dd_qm2(ts2), q2)), get_interval_box_dd_qmq(ss2, q1));
    const _q1 = _x2 * _tt1 + 2 * _x1 * _ts1 + _x0 * _ss1; // <= <7>
    // q1: <7>(<6>(<5>(x2*<2>tt1) + <4>(2*x1*<3>ts1)) + <5>(x0*<4>ss1));
    const _q2 = _x2 * _t1 + _x1 * _s1; // <= <3>
    // q2: <3>(<1>(x2*t1) + <2>(x1*<1>s1));
    _x0 = _q1; // <= <7>
    // x0: <7>q1;
    _x1 = _t2 * _q2 + _s2 * _q1; // <= <11>
    // x1: <11>(<5>(t2*<3>q2) + <10>(<1>s2*<7>q1));
    _x2 = (_tt2 * x2 + 2 * _ts2 * _q2) + _ss2 * _q1; // <= <14>
    // x2: <14>(<9>(<3>(<2>tt2*x2) + <8>(2*<3>ts2*<3>q2)) + <13>(<4>ss2*<7>q1));
    // max errors: 
    _x0 = 7 * get_interval_box_dd_uu * _x0;
    _x1 = 11 * get_interval_box_dd_uu * _x1;
    _x2 = 14 * get_interval_box_dd_uu * _x2;
    //---- y - calculation
    const r1 = get_interval_box_dd_qaq(get_interval_box_dd_qaq(get_interval_box_dd_qmd(y2, tt1), get_interval_box_dd_qmd(2 * y1, ts1)), get_interval_box_dd_qmd(y0, ss1));
    const r2 = get_interval_box_dd_qaq(get_interval_box_dd_qmd(y2, t1), get_interval_box_dd_qmd(y1, s1));
    const qy0 = r1;
    const qy1 = get_interval_box_dd_qaq(get_interval_box_dd_qmq(t2, r2), get_interval_box_dd_qmq(s2, r1));
    const qy2 = get_interval_box_dd_qaq(get_interval_box_dd_qaq(get_interval_box_dd_qmd(y2, tt2), get_interval_box_dd_qmq(get_interval_box_dd_qm2(ts2), r2)), get_interval_box_dd_qmq(ss2, r1));
    const _r1 = _y2 * _tt1 + 2 * _y1 * _ts1 + _y0 * _ss1; // <= <7>
    // r1: <7>(<6>(<5>(y2*<2>tt1) + <4>(2*y1*<3>ts1)) + <5>(y0*<4>ss1));
    const _r2 = _y2 * _t1 + _y1 * _s1; // <= <3>
    // r2: <3>(<1>(y2*t1) + <2>(y1*<1>s1));
    _y0 = _r1; // <= <7>
    // y0: <7>r1;
    _y1 = _t2 * _r2 + _s2 * _r1; // <= <11>
    // y1: <11>(<5>(t2*<3>r2) + <10>(<1>s2*<7>r1));
    _y2 = (_tt2 * y2 + 2 * _ts2 * _r2) + _ss2 * _r1; // <= <14>
    // y2: <14>(<9>(<3>(<2>tt2*y2) + <8>(2*<3>ts2*<3>r2)) + <13>(<4>ss2*<7>r1));
    // max errors: 
    _y0 = 7 * get_interval_box_dd_uu * _y0;
    _y1 = 11 * get_interval_box_dd_uu * _y1;
    _y2 = 14 * get_interval_box_dd_uu * _y2;
    const minX = qMin(qMin(get_interval_box_dd_qad(qx0, -_x0), get_interval_box_dd_qad(qx1, -_x1)), get_interval_box_dd_qad(qx2, -_x2));
    const maxX = qMax(qMax(get_interval_box_dd_qad(qx0, +_x0), get_interval_box_dd_qad(qx1, +_x1)), get_interval_box_dd_qad(qx2, +_x2));
    const minY = qMin(qMin(get_interval_box_dd_qad(qy0, -_y0), get_interval_box_dd_qad(qy1, -_y1)), get_interval_box_dd_qad(qy2, -_y2));
    const maxY = qMax(qMax(get_interval_box_dd_qad(qy0, +_y0), get_interval_box_dd_qad(qy1, +_y1)), get_interval_box_dd_qad(qy2, +_y2));
    return [[minX, minY], [maxX, maxY]];
}
/**
 * quad precision t1, t2
 *
 * @param param0
 * @param param1
 *
 * @internal
 */
function getIntervalBox1Dd([[x0, y0], [x1, y1]], [t1, t2]) {
    // Implementation for lines kept for symmetry - there are obviously much
    // simpler ways to calculate the required box in the case of a line.
    //t2 = ((t2-t1) / (1-t1)) * (1 + Number.EPSILON); // <= fl(t2) > t2
    const tDel = get_interval_box_dd_qdq(t2, t1);
    const tDel_ = 3 * get_interval_box_dd_uu * get_interval_box_dd_abs(tDel[1]); // max absolute error in tDel
    const oMt1 = get_interval_box_dd_qdq(qOne, t1);
    const oMt1_ = 3 * get_interval_box_dd_uu * get_interval_box_dd_abs(oMt1[1]); // max absolute error in oMt1
    //t2 = qdivq(t2m1,omt1) //* (1 + Number.EPSILON); // <= fl(t2) > t2
    const $t2 = qDivQuadWithError(tDel, oMt1, tDel_, oMt1_);
    t2 = get_interval_box_dd_qad($t2.est, $t2.err); // the max t2 can possibly be
    const s1 = get_interval_box_dd_qdq(qOne, t1); // <1>s1
    const s2 = get_interval_box_dd_qdq(qOne, t2); // <1>s2 <= relative error bounded by u*(1 - t2)
    const _t1 = get_interval_box_dd_abs(t1[1]);
    const _s1 = get_interval_box_dd_abs(s1[1]);
    const _t2 = get_interval_box_dd_abs(t2[1]);
    const _s2 = get_interval_box_dd_abs(s2[1]);
    // counter rules:
    //   <k>a + <l>b = <max(k,l) + 1>(a + b)
    //   <k>a<l>b = <k + l + 1>ab
    //   fl(a) === <1>a
    let _x0 = get_interval_box_dd_abs(x0);
    let _y0 = get_interval_box_dd_abs(y0);
    let _x1 = get_interval_box_dd_abs(x1);
    let _y1 = get_interval_box_dd_abs(y1);
    //---- x - calculation
    const qx0 = get_interval_box_dd_qaq(get_interval_box_dd_qmd(x1, t1), get_interval_box_dd_qmd(x0, s1));
    const qx1 = get_interval_box_dd_qaq(get_interval_box_dd_qmd(x1, t2), get_interval_box_dd_qmq(qx0, s2));
    _x0 = _x1 * _t1 + _x0 * _s1; // <= <3>
    // x0: <3>(<1>(x1*t1) + <2>(x0*s1));
    _x1 = _x1 * _t2 + _x0 * _s2; // <= <7>
    // x1: <7>(<1>(x1*t2) + <6>(<3>x0*<1>s2));
    // max errors: 
    _x0 = 3 * get_interval_box_dd_u * _x0;
    _x1 = 7 * get_interval_box_dd_u * _x1;
    //---- y - calculation
    const qy0 = get_interval_box_dd_qaq(get_interval_box_dd_qmd(y1, t1), get_interval_box_dd_qmd(y0, s1));
    const qy1 = get_interval_box_dd_qaq(get_interval_box_dd_qmd(y1, t2), get_interval_box_dd_qmq(qy0, s2));
    _y0 = _y1 * _t1 + _y0 * _s1; // <= <3>
    _y1 = _y1 * _t2 + _y0 * _s2; // <= <7>
    // max errors: 
    _y0 = 3 * get_interval_box_dd_u * _y0;
    _y1 = 7 * get_interval_box_dd_u * _y1;
    const minX = qMin(get_interval_box_dd_qad(qx0, -_x0), get_interval_box_dd_qad(qx1, -_x1));
    const maxX = qMax(get_interval_box_dd_qad(qx0, +_x0), get_interval_box_dd_qad(qx1, +_x1));
    const minY = qMin(get_interval_box_dd_qad(qy0, -_y0), get_interval_box_dd_qad(qy1, -_y1));
    const maxY = qMax(get_interval_box_dd_qad(qy0, +_y0), get_interval_box_dd_qad(qy1, +_y1));
    //return [[x0,y0],[x1,y1]];
    return [[minX, minY], [maxX, maxY]];
}
/**
 * quad precision t1, t2
 *
 * @param ps
 * @param t
 *
 * @internal
 */
function getIntervalBoxAtTDd(ps, t) {
    const _pS = ps[0];
    const _pE = ps[ps.length - 1];
    if (t[0] === 0 && t[1] === 0) {
        const pSx = [0, _pS[0]];
        const pSy = [0, _pS[1]];
        return [
            [pSx, pSy],
            [pSx, pSy]
        ];
    }
    else if (t[0] === 0 && t[1] === 1) {
        const pEx = [0, _pE[0]];
        const pEy = [0, _pE[1]];
        return [
            [pEx, pEy],
            [pEx, pEy]
        ];
    }
    const p = evalDeCasteljauDd(ps, t);
    let pE;
    if (ps.length === 4) {
        pE = evalDeCasteljauError(ps, t).map(c_ => 8 * 2 * get_interval_box_dd_3 * c_);
    }
    else if (ps.length === 3) {
        pE = evalDeCasteljauError(ps, t).map(c_ => 5 * 2 * get_interval_box_dd_3 * c_);
    }
    else if (ps.length === 2) {
        pE = evalDeCasteljauError(ps, t).map(c_ => 2 * 2 * get_interval_box_dd_3 * c_);
    }
    else if (ps.length === 1) {
        return [p, p];
    }
    return [
        [get_interval_box_dd_qad(p[0], -pE[0]), get_interval_box_dd_qad(p[1], -pE[1])],
        [get_interval_box_dd_qad(p[0], +pE[0]), get_interval_box_dd_qad(p[1], +pE[1])]
    ];
}

//# sourceMappingURL=get-interval-box-dd.js.map
;// CONCATENATED MODULE: ./src/sweep-line/are-boxes-intersecting.ts
/**
 * Returns true if the 2 given axis-aligned rectangular boxes intersect.
 * @param a An axis-aligned rectangular box
 * @param b Another axis-aligned rectangular box
 * @param closed (defaults to false) Interpret boxes as being closed (i.e. they
 * contain their border) or open. If open then if both boxes have zero area
 * then they are both considered close.
 */
function areBoxesIntersectingDd(closed) {
    return (a, b) => {
        let [[ax0, ay0], [ax1, ay1]] = a;
        let [[bx0, by0], [bx1, by1]] = b;
        // If open then if both boxes have zero area then they are both 
        // considered closed.
        /*if ((ax0 === ax1 || ay0 === ay1) && (bx0 === bx1 || by0 === by1)) {
            closed = true;
        }*/
        // Swap so smaller coordinate comes first
        if (ay0[1] > ay1[1] || ay0[1] === ay1[1] && ay0[0] > ay1[0]) {
            [ay0, ay1] = [ay1, ay0];
        }
        if (by0[1] > by1[1] || by0[1] === by1[1] && by0[0] > by1[0]) {
            [by0, by1] = [by1, by0];
        }
        if (ax0[1] > ax1[1] || ax0[1] === ax1[1] && ax0[0] > ax1[0]) {
            [ax0, ax1] = [ax1, ax0];
        }
        if (bx0[1] > bx1[1] || bx0[1] === bx1[1] && bx0[0] > bx1[0]) {
            [bx0, bx1] = [bx1, bx0];
        }
        return closed
            ? (
            //ax0 <= bx1 && ax1 >= bx0 && 
            //by0 <= ay1 && by1 >= ay0
            (ax0[1] < bx1[1] || (ax0[1] === bx1[1] && ax0[0] <= bx1[0])) &&
                (ax1[1] > bx0[1] || (ax1[1] === bx0[1] && ax1[0] >= bx0[0])) &&
                (by0[1] < ay1[1] || (by0[1] === ay1[1] && by0[0] <= ay1[0])) &&
                (by1[1] > ay0[1] || (by1[1] === ay0[1] && by1[0] >= ay0[0])))
            : (
            //ax0 < bx1 && ax1 > bx0 && 
            //by0 < ay1 && by1 > ay0
            (ax0[1] < bx1[1] || (ax0[1] === bx1[1] && ax0[0] < bx1[0])) &&
                (ax1[1] > bx0[1] || (ax1[1] === bx0[1] && ax1[0] > bx0[0])) &&
                (by0[1] < ay1[1] || (by0[1] === ay1[1] && by0[0] < ay1[0])) &&
                (by1[1] > ay0[1] || (by1[1] === ay0[1] && by1[0] > ay0[0])));
    };
}


;// CONCATENATED MODULE: ./src/calc-containers/get-container-in-outs/get-in-outs-via-sides/get-x-in-outs.ts




function midBox(_x_) {
    return [
        (_x_.x.box[0][0] + _x_.x.box[1][0]) / 2,
        (_x_.x.box[0][1] + _x_.x.box[1][1]) / 2
    ];
}
/**
 * * **warning** modifies container.xs[i].in_
 * @param container
 */
function getXInOuts(container) {
    const [[left, top], [right, bottom]] = container.box;
    const sides = [
        [[right, top], [left, top]],
        [[left, top], [left, bottom]],
        [[left, bottom], [right, bottom]],
        [[right, bottom], [right, top]]
    ];
    return (curve, xs_, ioIdx) => {
        // At this point all xs belong to the same curve and container.
        // For each of the four sides get the t values closest to the 
        // intersection t.
        const ps = curve.ps;
        const xs = xs_.slice();
        for (let i = 0; i < sides.length; i++) {
            const xs_ = getTs(ps, sides[i]);
            for (const { psX, sideX } of xs_) {
                xs.push({
                    x: psX,
                    side: i,
                    sideX,
                    curve: undefined, // unused
                });
            }
        }
        //---- resolve in-outs
        // the sort below should always resolve if the container dimension is
        // 'large enough', where large enough is based on the maximum value that
        // the tangent magnitude of a curve can attain (no need to resort to 
        // compensated intervals)
        xs.sort((xA, xB) => xA.x.ri.tS - xB.x.ri.tS);
        const ins = [];
        const outs = [];
        let prevX = undefined;
        /** true if the prevX was a proper X, false if it was a SideX */
        let prevWasX = undefined;
        for (const x of xs) {
            if (x.side !== undefined) {
                // it is a sideX
                if (prevWasX === true) {
                    outs.push({
                        dir: +1,
                        p: midBox(x),
                        _x_: prevX,
                        container,
                        idx: ++ioIdx,
                        side: x.side,
                        sideX: x.sideX
                    });
                }
                prevWasX = false;
            }
            else {
                // it is a proper X
                if (prevWasX === false) {
                    ins.push({
                        dir: -1,
                        p: midBox(prevX),
                        _x_: x,
                        container,
                        idx: ++ioIdx,
                        side: prevX.side,
                        sideX: prevX.sideX
                    });
                    x.in_ = ins[ins.length - 1];
                }
                prevWasX = true;
            }
            prevX = x;
        }
        return { ins, outs, ioIdx };
    };
}
/**
 * Get zero times compensated roots and exact coefficents
 */
function getXs0(ps1, ps2) {
    // const _coeffs = getIntersectionCoeffs(ps1, ps2);
    const _coeffs = getCoeffsBezBez(ps1, ps2);
    if (_coeffs === undefined) {
        return undefined;
    }
    const { coeffs, errBound, getPExact } = _coeffs;
    const ris = allRootsCertified(coeffs, 0, 1, errBound, getPExact);
    if (ris.length === 0) {
        return undefined;
    }
    return { ris: ris.map(rootIntervalToExp), getPExact };
}
function rootIntervalToDouble(ri) {
    return {
        tS: eEstimate(ri.tS),
        tE: eEstimate(ri.tE),
        multiplicity: ri.multiplicity
    };
}
/**
 * Robustly get matching intersections of ps (a bezier) that matches those of
 * side. ps and side can actually be any order 1, 2 or 3 bezier curve.
 * * **precondition** RootInterval[] contains no multiple roots
 * @param ps
 * @param side
 * @param risSide_
 */
function getTs(ps, side) {
    const xs0Side = getXs0(ps, side);
    if (xs0Side === undefined) {
        return [];
    }
    const { getPExact: getPExactSide } = xs0Side;
    let { ris: risSide } = xs0Side;
    //const exactSide = getPExactSide();
    let exactSide = undefined; // lazy loaded
    const getPExactSide_ = () => {
        exactSide = exactSide || getPExactSide();
        return exactSide;
    };
    const xs0Ps = getXs0(side, ps);
    if (xs0Ps === undefined) {
        return [];
    }
    let { ris: risPs } = xs0Ps;
    const { getPExact: getPExactPs } = xs0Ps;
    //const exactPs = getPExactPs();
    let exactPs = undefined; // lazy loaded
    const getPExactPs_ = () => {
        exactPs = exactPs || getPExactPs();
        return exactPs;
    };
    //---- Make sure no boxesPs overlap. 
    // If any two boxes do operlap we cannot match the t value of a ps box to 
    // that of a side box, else we can definitively match them.
    // Note: multiplicity > 1 intersections will result in an infinite loop. 
    // It is assumed (as a precondition) the code is such that a multiple 
    // intersection is node possible here
    let maxIter;
    // currently we only go up to once compensated (double-double precision roots)
    maxIter = 1;
    /** number of compensations for ps */
    let cPs = 0;
    let boxesPs = undefined;
    loop: while ( true && cPs < maxIter) {
        // update boxes to new tighter versions
        boxesPs = risPs.map(ri => getIntervalBoxDd(ps, [ri.tS, ri.tE]));
        for (let i = 0; i < risPs.length; i++) {
            const boxPsI = boxesPs[i];
            for (let j = i + 1; j < risPs.length; j++) {
                const boxPsJ = boxesPs[j];
                if (areBoxesIntersectingDd(true)(boxPsI, boxPsJ)) {
                    const _risPs = [];
                    for (const riPs of risPs) {
                        // TODO - below we're converting riPs (using getXs0) to RootIntervalExp and below back to 
                        // RootInterval again - not necessary - fix
                        _risPs.push(...refineK1({ tS: riPs.tS[1], tE: riPs.tE[1], multiplicity: riPs.multiplicity }, getPExactPs_()));
                    }
                    risPs = _risPs;
                    cPs++;
                    continue loop;
                }
            }
        }
        break loop;
    }
    //---- Make sure no boxesSides overlap - this should be rare as we are 
    // already roughly once compensated on that (due to small length of the sides).
    // currently we only go up to once compensated (quad precision roots)
    maxIter = 1;
    /** number of compensations for sides */
    let cSide = 0;
    let boxesSide = undefined;
    loop: while ( true && cSide < maxIter) {
        boxesSide = risSide.map(ri => getIntervalBoxDd(side, [ri.tS, ri.tE]));
        for (let i = 0; i < risSide.length; i++) {
            const boxSideI = boxesSide[i];
            for (let j = i + 1; j < risSide.length; j++) {
                const boxSideJ = boxesSide[j];
                if (areBoxesIntersectingDd(true)(boxSideI, boxSideJ)) {
                    const _risSide = [];
                    for (const riSide of risSide) {
                        _risSide.push(...refineK1({ tS: riSide.tS[1], tE: riSide.tE[1], multiplicity: riSide.multiplicity }, getPExactSide_()));
                    }
                    risSide = _risSide;
                    cSide++;
                    continue loop;
                }
            }
        }
        break loop;
    }
    const xPairs = [];
    for (let i = 0; i < risPs.length; i++) {
        const boxPs = boxesPs[i];
        for (let j = 0; j < risSide.length; j++) {
            const boxSide = boxesSide[j];
            // TODO - investigate if below commented code would improve algorithm
            //const box = intersectBoxes(boxPs,boxSide);
            //if (box !== undefined) {
            if (areBoxesIntersectingDd(true)(boxPs, boxSide)) {
                const psX = {
                    compensated: cPs,
                    ri: rootIntervalToDouble(risPs[i]),
                    riExp: cPs ? risPs[i] : undefined,
                    getPExact: cPs ? undefined : getPExactPs,
                    kind: 1,
                    box: boxExpToBox(boxPs)
                };
                const sideX = {
                    compensated: cSide,
                    ri: rootIntervalToDouble(risSide[j]),
                    riExp: cSide ? risSide[j] : undefined,
                    getPExact: cSide ? undefined : getPExactSide,
                    kind: 1,
                    box: boxExpToBox(boxSide)
                };
                xPairs.push({ psX, sideX });
            }
        }
    }
    return xPairs;
}
/**
 * Converts a box with expansion coordinates into one with double coordinates.
 */
function boxExpToBox(boxExp) {
    return boxExp.map(p => p.map(eEstimate));
}


;// CONCATENATED MODULE: ./src/calc-containers/get-container-in-outs/get-in-outs-via-sides/get-in-outs-via-sides.ts

/**
 * Returns the incoming / outgoing curves (as InOuts) for the given container
 * using an extremely small rectangle around the intersections.
 * * **warning** ioIdx will be modified by this function
 * @param container
 * @param ioIdx
 */
function getInOutsViaSides(container, ioIdx) {
    // We check one __X__ for each curve with an intersection within this container
    const xs_ = container.xs;
    //if (xs_.length === 4) {
    //    console.log(xs_.map(x => x.x.kind))
    //}
    const inOuts = [];
    // get a map from each Curve to each __X__ of this container
    const xMap = new Map();
    for (const x of xs_) {
        const curve = x.curve;
        const xs = xMap.get(curve);
        if (!xs) {
            xMap.set(curve, [x]);
        }
        else {
            xs.push(x);
        }
    }
    const getXInOuts_ = getXInOuts(container);
    for (const entry of xMap) {
        const [curve, xs] = entry;
        let ins;
        let outs;
        ({ ins, outs, ioIdx } = getXInOuts_(curve, xs, ioIdx));
        inOuts.push(...ins);
        inOuts.push(...outs);
    }
    return { inOuts: inOuts, ioIdx };
}


;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/transformation/get-hodograph.js
/**
 * Returns the hodograph of the given bezier curve.
 *
 * @param ps an order 1,2 or 3 bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 *
 * @doc mdx
 */
function getHodograph(ps) {
    // * **bitlength**: If the coordinates of the control points are bit-aligned then
    // * max bitlength increase === 3, max shift === 3 (for cubics)
    // * max bitlength increase === 1, max shift === 2 (for quadratics)
    // * max bitlength increase === 1, max shift === 1 (for lines)
    if (ps.length === 4) {
        // cubic
        const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;
        return [
            [3 * (x1 - x0), 3 * (y1 - y0)],
            [3 * (x2 - x1), 3 * (y2 - y1)],
            [3 * (x3 - x2), 3 * (y3 - y2)]
        ];
    }
    if (ps.length === 3) {
        // quadratic
        const [[x0, y0], [x1, y1], [x2, y2]] = ps;
        return [
            [2 * (x1 - x0), 2 * (y1 - y0)],
            [2 * (x2 - x1), 2 * (y2 - y1)]
        ];
    }
    if (ps.length === 2) {
        // a line
        const [[x0, y0], [x1, y1]] = ps;
        return [
            [x1 - x0, y1 - y0]
        ];
    }
    throw new Error('The given bezier curve must be of order 1, 2 or 3.');
}

//# sourceMappingURL=get-hodograph.js.map
;// CONCATENATED MODULE: ./src/calc-containers/get-container-in-outs/get-in-outs-via-crossing/get-in-outs-via-crossing.ts



/**
 * Returns the incoming / outgoing curves (as InOuts) for the given container.
 * @param container
 * @param ioIdx
 */
function getInOutsViaCrossing(container, ioIdx) {
    const xs = container.xs;
    const inOuts = [];
    const x1 = xs[0];
    const x2 = xs[1];
    const ps1 = x1.curve.ps;
    const ps2 = x2.curve.ps;
    const p = evalDeCasteljau(ps1, x1.x.ri.tS);
    const t1S = x1.x.ri.tS;
    const t1E = x1.x.ri.tE;
    const t2S = x2.x.ri.tS;
    const t2E = x2.x.ri.tE;
    let v1s;
    let v2s;
    if (ps1.length === 4 || ps1.length === 3) {
        // cubic => hodograph is a parabola
        // quadratic => hodograph is a line (we still get the box, but in future maybe we can do better)
        const h1 = getHodograph(ps1); // <= cubic: 50 bit-aligned => exact, quadratic: 52 bit-aligned => exact
        v1s = getIntervalBox(h1, [t1S, t1E]);
    }
    else /*if (ps1.length === 2)*/ {
        // line => hodograph is a fixed point
        v1s = getHodograph(ps1); // <= 52 bit-aligned => exact
    }
    if (ps2.length === 4 || ps2.length === 3) {
        // cubic => hodograph is a parabola
        // quadratic => hodograph is a line (we still get the box, but in future maybe we can do better)
        const h2 = getHodograph(ps2); // <= cubic: 50 bit-aligned => exact, quadratic: 52 bit-aligned => exact
        v2s = getIntervalBox(h2, [t2S, t2E]);
    }
    else /*if (ps2.length === 2)*/ {
        // line => hodograph is a fixed point
        v2s = getHodograph(ps2); // <= 52 bit-aligned => exact
    }
    // possible configurations: (up to cyclic permutation)
    // config1: i1 o2 o1 i2 ==== i2 i1 o2 o1 ==== etc.
    // config2: i1 i2 o1 o2 ==== o2 i1 i2 o1 ==== etc.
    let cSign = undefined;
    // TODO - investigate faster method by finding and using the 2 extreme points only
    for (let i = 0; i < v1s.length; i++) {
        for (let j = 0; j < v2s.length; j++) {
            // we use orient2d below since it is completely robust (cross is not)
            //const c = Math.sign(cross(v1s[i],v2s[j]));
            const c = Math.sign(orient2d_orient2d(v1s[i], v2s[j], [0, 0]));
            if (c === 0) {
                // too close to call 
                // use a more accurate but slower method
                return getInOutsViaSides(container, ioIdx);
            }
            if (cSign === undefined) {
                cSign = c;
                continue;
            }
            if (cSign !== c) {
                // conflicting results
                // use a more accurate but slower method
                return getInOutsViaSides(container, ioIdx);
            }
        }
    }
    const config1 = cSign > 0;
    if (config1) {
        // config1 (the 1st of the 2 possible configurations)
        inOuts.push({ dir: -1, p, _x_: x1, container });
        inOuts.push({ dir: +1, p, _x_: x2, container });
        inOuts.push({ dir: +1, p, _x_: x1, container });
        inOuts.push({ dir: -1, p, _x_: x2, container });
        x1.in_ = inOuts[0];
        x2.in_ = inOuts[3];
    }
    else {
        // config2 (the 2nd of the 2 possible configurations)
        inOuts.push({ dir: -1, p, _x_: x1, container });
        inOuts.push({ dir: -1, p, _x_: x2, container });
        inOuts.push({ dir: +1, p, _x_: x1, container });
        inOuts.push({ dir: +1, p, _x_: x2, container });
        x1.in_ = inOuts[0];
        x2.in_ = inOuts[1];
    }
    return { inOuts, ioIdx };
}


;// CONCATENATED MODULE: ./src/calc-containers/get-container-in-outs/get-container-in-outs.ts


/**
 * * **warning** ioIdx will be modified by this function
 *
 * @param container
 * @param ioIdx
 */
function getContainerInOuts(container, ioIdx) {
    // We check one __X__ for each curve with an intersection within this container
    const xs = container.xs;
    // console.log(xs);
    // Check nature of Xs. If Xs is the very common case where two curves cross
    // we can use a faster check. Also in the bit less common case where all
    // curves are joining at an interface we can do a fast ccw (the ccw part
    // has not been implemented yet).
    if (xs.length === 2) {
        if (xs[0].x.kind === 1 && xs[1].x.kind === 1 &&
            xs[0].x.ri.multiplicity % 2 === 1 && xs[1].x.ri.multiplicity % 2 === 1) {
            return getInOutsViaCrossing(container, ioIdx);
        }
    }
    return getInOutsViaSides(container, ioIdx);
}


;// CONCATENATED MODULE: ./src/sweep-line/sweep-line.ts
const EVENT_LEFT = -1;
const EVENT_RIGHT = +1;
/**
 * Generalized sweepline algorithm.
 *
 * Typically used to turn O(n^2) algorithms into roughly O(n logn) algorithms.
 *
 * @param items An array of items that are to be compared. Items should
 * typically be geometric objects in 2d space with well-defined left and right
 * endpoints.
 * @param getLeftmostPoint A function that returns the leftmost point of the
 * geometric object of interest.
 * @param getRightmostPoint A function that returns the rightmost point of the
 * geometric object of interest.
 * @param predicate A predicate that takes two geometric objects and returns
 * truthy (of some specific type) if they are of interest or falsey otherwise.
 */
function sweepLine(items, getLeftmost, getRightmost, predicate) {
    // Initialize event queue to contain all endpoints.
    const events = [];
    for (const item of items) {
        events.push({
            type: EVENT_LEFT,
            item,
            x: getLeftmost(item)
        });
        events.push({
            type: EVENT_RIGHT,
            item,
            x: getRightmost(item)
        });
    }
    events.sort(compare);
    const activeItems = new Set();
    /** A list of pairs of items that passed the predicate */
    const pairedItems = [];
    for (const event of events) {
        const item = event.item;
        if (event.type === EVENT_LEFT) {
            for (const activeItem of activeItems.values()) {
                const result = predicate(item, activeItem);
                if (result) {
                    pairedItems.push({
                        a: item,
                        b: activeItem,
                        u: result
                    });
                }
            }
            activeItems.add(item);
        }
        else if (event.type === EVENT_RIGHT) {
            activeItems.delete(event.item);
        }
    }
    return pairedItems;
}
/**
 * Compare two Events by their x-axis and then by their type.
 * @param a An event
 * @param b Another event
 */
function compare(a, b) {
    const res = a.x - b.x;
    if (res !== 0) {
        return res;
    }
    // Alwys put left events before right ones.
    return a.type;
}


;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/simultaneous-properties/is-point-on-bezier-extension/is-point-on-bezier-extension-1.js


// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗



const is_point_on_bezier_extension_1_qaq = node_ddAddDd;
const is_point_on_bezier_extension_1_epr = expansionProduct;
const is_point_on_bezier_extension_1_fes = fastExpansionSum;
const is_point_on_bezier_extension_1_sign = e_sign_eSign;
const is_point_on_bezier_extension_1_estimate = eEstimate;
const is_point_on_bezier_extension_1_qmq = node_ddMultDd;
const etodd = eToDd;
const is_point_on_bezier_extension_1_abs = Math.abs;
const is_point_on_bezier_extension_1_3 = error_analysis_error_analysis_(3);
/**
 * Returns `true` if the given point is on the given line where
 * the parameter `t` is allowed to extend to ±infinity, i.e. `t` is an
 * element of `[-∞, +∞]`, `false` otherwise.
 *
 * * there are alternative implementations to this function, e.g. ccw, etc;
 * it is kept for symmetry with the order 2 and 3 implementations.
 *
 * @param ps a linear bezier curve (a line)
 * @param p a point with coordinates given as [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 * expansions; if only double precision coordinates need to be provided then
 * wrap them in a one element array, e.g. for a point with `x` and `y` coordinates
 * of `1` and `2` set `p === [[1],[2]]`.
 *
 * @internal
 */
function isPointOnBezierExtension1(ps, p) {
    const [xe, ye] = p;
    const lenX = xe.length;
    const lenY = ye.length;
    const x = xe[lenX - 1]; // get higest order double
    const y = ye[lenY - 1]; // ...
    const isDouble = (lenX === 1 && lenY === 1);
    {
        //---- pre-filter
        const { coeffs: { vₓ, vᵧ, v }, errorBound: { v_ } } = getImplicitForm1DdWithRunningError(ps);
        // In the below a prefix underscore on a variable means absolute value, 
        // a postfix underscore means error bound (before multiplication by gamma).
        // h (say height) is the the result of evaluating the implicit equation; if
        // it is 0 we are on the curve, else we're not.
        // const h = vₓ*x + vᵧ*y + v;
        const xd = etodd(xe);
        const yd = etodd(ye);
        const _x = is_point_on_bezier_extension_1_abs(x);
        const _y = is_point_on_bezier_extension_1_abs(y);
        const _vₓ = is_point_on_bezier_extension_1_abs(vₓ[1]);
        const _vᵧ = is_point_on_bezier_extension_1_abs(vᵧ[1]);
        // we're multiplying by `γγ3` at the end but the error `x_` is only `γγ1`
        // and hence we need to divide the error by 3.
        const x_ = _x / 3;
        const y_ = _y / 3;
        const $vₓx = vₓ[1] * x;
        const vₓx = is_point_on_bezier_extension_1_qmq(xd, vₓ);
        const _vₓx = is_point_on_bezier_extension_1_abs($vₓx);
        const vₓx_ = _vₓ * x_ + 2 * _vₓx;
        const $vᵧy = vᵧ[1] * y;
        const vᵧy = is_point_on_bezier_extension_1_qmq(yd, vᵧ);
        const _vᵧy = is_point_on_bezier_extension_1_abs($vᵧy);
        const vᵧy_ = _vᵧ * y_ + 2 * _vᵧy;
        // group the terms to reduce error, e.g. `v` usually has the highest bitlength
        //const h = (vₓx + vᵧy) + v;
        const q7 = is_point_on_bezier_extension_1_qaq(vₓx, vᵧy);
        const q7_ = vₓx_ + vᵧy_ + is_point_on_bezier_extension_1_abs(q7[1]);
        const h = is_point_on_bezier_extension_1_qaq(q7, v);
        const h_ = q7_ + v_ + is_point_on_bezier_extension_1_abs(h[1]);
        // if the error is not too high too discern h away from zero
        if (is_point_on_bezier_extension_1_3 * h_ < is_point_on_bezier_extension_1_abs(is_point_on_bezier_extension_1_estimate(h))) {
            return false; // <-- prefilter applied
        }
    }
    {
        const implictForm = getImplicitForm1Exact(ps);
        if (implictForm === undefined) {
            // both ps are the same point
            return isDouble && x === ps[0][0] && y === ps[0][1];
        }
        const { vₓ, vᵧ, v } = implictForm;
        const vₓx = is_point_on_bezier_extension_1_epr(xe, vₓ);
        const vᵧy = is_point_on_bezier_extension_1_epr(ye, vᵧ);
        // const h = vₓ*x + vᵧ*y + v;
        const hh = is_point_on_bezier_extension_1_fes(is_point_on_bezier_extension_1_fes(vₓx, vᵧy), v);
        return is_point_on_bezier_extension_1_sign(hh) === 0; // <= calculation was exact
    }
}

//# sourceMappingURL=is-point-on-bezier-extension-1.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/implicit-form/double/get-implicit-form2.js

/**
 * Returns the implicit form of the given quadratic bezier curve.
 *
 * * returned coefficients are subscripted to match their monomial's variables,
 * e.g. `vₓᵧ` is the coefficient of the monomial `vₓᵧxy`
 * * the implicit form is given by: `vₓₓx² +vₓᵧxy + vᵧᵧy² + vₓx + vᵧy + v = 0`
 * * intermediate calculations are done in **double** precision
 * * adapted from [Indrek Mandre](http://www.mare.ee/indrek/misc/2d.pdf)
 *
 * @param ps a quadratic bezier curve given as an array of its control points,
 * e.g. `[[1,2],[3,4],[5,7]]`
 *
 * @doc mdx
 */
function getImplicitForm2(ps) {
    // The implicit form is given by:
    // vₓₓx² +vₓᵧxy + vᵧᵧy² + vₓx + vᵧy + v = 0
    const [[a2, a1, a0], [b2, b1, b0]] = toPowerBasis2(ps);
    const q1 = a2 * b1 - a1 * b2;
    const q2 = a2 * b0 - a0 * b2;
    const vₓₓ = -b2 * b2;
    const vₓᵧ = 2 * a2 * b2;
    const vᵧᵧ = -a2 * a2;
    const vₓ = b1 * q1 - 2 * b2 * q2;
    const vᵧ = 2 * a2 * q2 - a1 * q1;
    const v = q1 * (a1 * b0 - a0 * b1) - q2 * q2;
    return { vₓₓ, vₓᵧ, vᵧᵧ, vₓ, vᵧ, v };
}

//# sourceMappingURL=get-implicit-form2.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/to-power-basis/to-power-basis/to-power-basis-error-counters.js
// Note: 
// Error counters of double-double will actually be slightly less but
// we can use this for both double and double-double precision.
// For double precision the error bound === γ * <counter> * `error_`
// For double-double precision the error bound === γγ3 * <counter> * `error_`
const to_power_basis_error_counters_abs = Math.abs;
/**
 * Returns a representation of the error (from which an absolute error bound
 * can be calculated) when calculating the power basis representation of a
 * bezier curve of order <= 3 (using e.g. `toPowerBasis` or `toPowerBasisDd`).
 *
 * The returned error representation needs to be multiplied with
 * [Stewart error counters¹](https://www.amazon.ca/Introduction-Matrix-Computations-G-Stewart/dp/0126703507)
 * and an appropriate error function, `γ`, depending on the precision used (e.g. double
 * or double-double). This is explained in more detail below. See
 * also [Higham 2002](http://ftp.demec.ufpr.br/CFD/bibliografia/Higham_2002_Accuracy%20and%20Stability%20of%20Numerical%20Algorithms.pdf)
 * p. 68 near the bottom.
 *
 * (1) G. W. Stewart. Introduction to Matrix Computations. Academic Press, New York,
 *  1973. xiii+441 pp. ISBN 0-12-670350-7
 *
 * The absolute erros below can be calculated as follows (where `<E>` are the
 * error counters as indicated in the comments of the return value below):
 *  * double precision: `<E> * (γ(1)) * result_`
 *  * double-double precision: `<E> * (γγ(3)) * result_`
 *
 * where [[γ]] and [[γγ]] are the usual error functions with `γ(1) === 1.1102230246251568e-16`
 * and `γγ(3) === 3.697785493223493e-32`.
 *
 * ```
 * // for cubic bezier curves
 * return [
 * 	[
 * 		x3,  // <E> === 3
 * 		x2,  // <E> === 3
 * 		x1,  // <E> === 2
 * 		0,
 * 	],
 * 	[
 * 		y3,  // <E> === 3
 * 		y2,  // <E> === 3
 * 		y1,  // <E> === 2
 * 		0,
 * 	]
 * ]
 *
 * // for quadratic bezier curves
 * return [
 * 	[
 * 		x2,  // <E> === 2
 * 		x1,  // <E> === 1
 * 		0,
 * 	],
 * 	[
 * 		y2,  // <E> === 2
 * 		y1,  // <E> === 1
 * 		0,
 * 	]
 * ];
 *
 * // for linear bezier curves (i.e. lines)
 * return [
 * 	[
 * 		x1_,  // <E> === 1
 * 		x0_   // <E> === 0
 * 	],
 * 	[
 * 		y1_,  // <E> === 1
 * 		y0_   // <E> === 0
 * 	]
 * ];
 * ```
 *
 * @param ps an order 0,1,2 or 3 bezier curve given by an ordered array of its
 * control points, e.g. `[[0,0],[1,1],[2,1],[2,0]]`
 *
 * @doc mdx
 */
function toPowerBasisErrorCounters(ps) {
    if (ps.length === 4) {
        return toPowerBasis3ErrorCounters(ps);
    }
    if (ps.length === 3) {
        return toPowerBasis2ErrorCounters(ps);
    }
    if (ps.length === 2) {
        return toPowerBasis1ErrorCounters(ps);
    }
    if (ps.length === 1) {
        return [[0], [0]];
    }
    throw new Error('The given bezier curve must be of order <= 3.');
}
/** @internal */
function toPowerBasis1ErrorCounters(ps) {
    const [[x0, y0], [x1, y1]] = ps;
    const _x0 = to_power_basis_error_counters_abs(x0);
    const _x1 = to_power_basis_error_counters_abs(x1);
    const _y0 = to_power_basis_error_counters_abs(y0);
    const _y1 = to_power_basis_error_counters_abs(y1);
    return [
        [
            _x1 + _x0,
            0,
        ], [
            _y1 + _y0,
            0,
        ]
    ];
}
/** @internal */
function toPowerBasis2ErrorCounters(ps) {
    const [[x0, y0], [x1, y1], [x2, y2]] = ps;
    const _x0 = to_power_basis_error_counters_abs(x0);
    const _x1 = to_power_basis_error_counters_abs(x1);
    const _x2 = to_power_basis_error_counters_abs(x2);
    const _y0 = to_power_basis_error_counters_abs(y0);
    const _y1 = to_power_basis_error_counters_abs(y1);
    const _y2 = to_power_basis_error_counters_abs(y2);
    return [
        [
            _x2 + _x0 + 2 * _x1,
            2 * (_x1 + _x0),
            0,
        ], [
            _y2 + _y0 + 2 * _y1,
            2 * (_y1 + _y0),
            0,
        ]
    ];
}
/** @internal */
function toPowerBasis3ErrorCounters(ps) {
    const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;
    const _x0 = to_power_basis_error_counters_abs(x0);
    const _x1 = to_power_basis_error_counters_abs(x1);
    const _x2 = to_power_basis_error_counters_abs(x2);
    const _x3 = to_power_basis_error_counters_abs(x3);
    const _y0 = to_power_basis_error_counters_abs(y0);
    const _y1 = to_power_basis_error_counters_abs(y1);
    const _y2 = to_power_basis_error_counters_abs(y2);
    const _y3 = to_power_basis_error_counters_abs(y3);
    return [
        [
            _x3 + _x0 + 3 * (_x1 + _x2),
            3 * (_x2 + _x0 + 2 * _x1),
            3 * (_x1 + _x0),
            0,
        ], [
            _y3 + _y0 + 3 * (_y1 + _y2),
            3 * (_y2 + _y0 + 2 * _y1),
            3 * (_y1 + _y0),
            0,
        ]
    ];
}

//# sourceMappingURL=to-power-basis-error-counters.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/implicit-form/get-error-counters/get-implicit-form2-error-counters.js

const get_implicit_form2_error_counters_abs = Math.abs;
/**
 * Returns a representation of the error (from which an absolute error bound
 * can be calculated) when calculating the implicit form of the given bezier
 * curve (using [[getImplicitForm2]] or [[getImplicitForm2Dd]]).
 *
 * * returned coefficients are subscripted to match their monomial's variables,
 * e.g. `vₓᵧ` is the coefficient of the monomial `vₓᵧxy`
 * * the implicit form is given by: `vₓₓx² +vₓᵧxy + vᵧᵧy² + vₓx + vᵧy + v`
 * * The returned error representation needs to be multiplied with
 * [Stewart error counters¹](https://www.amazon.ca/Introduction-Matrix-Computations-G-Stewart/dp/0126703507)
 * and an appropriate error function, `γ`, depending on the precision used (e.g. double
 * or double-double). This is explained in more detail below. See
 * also [Higham 2002](http://ftp.demec.ufpr.br/CFD/bibliografia/Higham_2002_Accuracy%20and%20Stability%20of%20Numerical%20Algorithms.pdf)
 * p. 68 near the bottom.
 *
 * (1) G. W. Stewart. Introduction to Matrix Computations. Academic Press, New York,
 *  1973. xiii+441 pp. ISBN 0-12-670350-7
 *
 * The absolute erros below can be calculated as follows (where `<E>` are the
 * error counters as indicated in the comments of the return value below):
 *  * double precision: `<E> * (γ(1)) * result_`
 *  * double-double precision: `<E> * (2*γγ(3)) * result_`
 *
 * where [[γ]] and [[γγ]] are the usual error functions (provided in this library
 * as functions with the same name) with `γ(1) === 1.1102230246251568e-16`
 * and `γγ(3) === 3.697785493223493e-32`.
 *
 * ```
 * return {
 *      vₓₓ_,  // <5>
 *      vₓᵧ_,  // <5>
 *      vᵧᵧ_,  // <5>
 *      vₓ_,   // <8>
 *      vᵧ_,   // <8>
 *      v_     // <10>
 * }
 * ```
 *
 * @param ps
 *
 * @doc
 */
function getImplicitForm2ErrorCounters(ps) {
    // The implicit form is given by:
    // vₓₓx² +vₓᵧxy + vᵧᵧy² + vₓx + vᵧy + v = 0
    //const [[,,a0],[,,b0]] = toPowerBasis2ErrorCounters(ps);
    const [a0, b0] = ps[0];
    const [[a2_, a1_], // <2>a2_, <1>a1_, <0>a0_  (a0_ is just abs(a0))
    [b2_, b1_] // <2>b2_, <1>b1_, <0>b0_  (b0_ is just abs(b0))
    ] = toPowerBasis2ErrorCounters(ps);
    //-------------------
    // Error calculation
    //-------------------
    const a0_ = get_implicit_form2_error_counters_abs(a0);
    const b0_ = get_implicit_form2_error_counters_abs(b0);
    // <5>q1 <-- <5>(<4>(<2>a2*<1>b1) - <4>(a1*b2))
    const q1_ = a2_ * b1_ + a1_ * b2_;
    // <4>q2 <-- <4>(<3>(a2*b0) - <3>(a0*b2))
    const q2_ = a2_ * b0_ + a0_ * b2_;
    // <5>vₓₓ <-- <5>(-<2>b2*<2>b2)
    const vₓₓ_ = b2_ * b2_;
    // <5>vₓᵧ <-- 2*a2*b2
    const vₓᵧ_ = 2 * a2_ * b2_;
    // <5>vᵧᵧ <-- -a2*a2
    const vᵧᵧ_ = a2_ * a2_;
    // <8>vₓ <-- <8>(<7>(<1>b1*<5>q1) - <7>(2*<2>b2*<4>q2))
    const vₓ_ = b1_ * q1_ + 2 * b2_ * q2_;
    // <8>vᵧ <-- <8>(<7>(2*<2>a2<4>q2) - <7>(<1>a1<5>q1))
    const vᵧ_ = 2 * a2_ * q2_ + a1_ * q1_;
    // <10>v <-- <10>(<9>(<5>q1*<3>(<2>(a1*b0) - <2>(a0*b1))) - <9>(<4>q2*<4>q2))
    const v_ = q1_ * (a1_ * b0_ + a0_ * b1_) + q2_ * q2_;
    return {
        vₓₓ_,
        vₓᵧ_,
        vᵧᵧ_,
        vₓ_,
        vᵧ_,
        v_ // <10>
    };
}

//# sourceMappingURL=get-implicit-form2-error-counters.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/simultaneous-properties/is-point-on-bezier-extension/is-point-on-bezier-extension-2.js





// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗


const is_point_on_bezier_extension_2_qmq = node_ddMultDd;
const is_point_on_bezier_extension_2_qaq = node_ddAddDd;
const is_point_on_bezier_extension_2_epr = expansionProduct;
const is_point_on_bezier_extension_2_fes = fastExpansionSum;
const is_point_on_bezier_extension_2_sign = e_sign_eSign;
const is_point_on_bezier_extension_2_estimate = eEstimate;
const is_point_on_bezier_extension_2_etodd = eToDd;
const is_point_on_bezier_extension_2_abs = Math.abs;
const is_point_on_bezier_extension_2_1 = error_analysis_(1);
const is_point_on_bezier_extension_2_3 = error_analysis_error_analysis_(3);
/**
 * Returns `true` if the given point is on the given quadratic bezier curve where
 * the parameter `t` is allowed to extend to ±infinity, i.e. `t` is an element of
 * `[-∞, +∞]`, `false` otherwise.
 *
 * @param ps a quadratic bezier curve
 * @param p a point with coordinates given as [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 * expansions; if only double precision coordinates need to be provided then
 * wrap them in a one element array, e.g. for a point with `x` and `y` coordinates
 * of `1` and `2` set `p === [[1],[2]]`.
 *
 * @internal
 */
function isPointOnBezierExtension2(ps, p) {
    const [xe, ye] = p;
    const lenX = xe.length;
    const lenY = ye.length;
    const x = xe[lenX - 1]; // get higest order double
    const y = ye[lenY - 1]; // ...
    const isDouble = (lenX === 1 && lenY === 1);
    //---- first pre-filter
    {
        const { vₓₓ, vₓᵧ, vᵧᵧ, vₓ, vᵧ, v } = getImplicitForm2(ps);
        const { vₓₓ_, // <5>
        vₓᵧ_, // <5>
        vᵧᵧ_, // <5>
        vₓ_, // <8>
        vᵧ_, // <8>
        v_ // <10>
         } = getImplicitForm2ErrorCounters(ps);
        // In the below a a postfix underscore means 
        // an error bound (>= absolute value)
        // `h` (say height) is the the result of evaluating the implicit equation; if
        // it is 0 we are on the curve, else we're not.
        // In the below, if x is given as a double then the error counter on
        // x would be 0, i.e. <0>x, else it would be <1>x. We represent the
        // error counter with a <D> so that for a point with double precion 
        // coordinates we have <D> = <0> else <D> = <1>. Same is true for y.
        // `0` if we have only double precision coordinates, `1` otherwise
        const D = isDouble ? 0 : 1;
        const x_ = is_point_on_bezier_extension_2_abs(x); // <D>x
        const y_ = is_point_on_bezier_extension_2_abs(y); // <D>y
        const xx_ = x_ * x_; // <2D+1>xx
        const xy_ = x_ * y_; // <2D+1>xy
        const yy_ = y_ * y_; // <2D+1>yy
        // group the terms to reduce error, e.g. v usually has the highest bitlength
        const h = (((vₓₓ * x * x + vₓᵧ * x * y) +
            vᵧᵧ * y * y) +
            (vₓ * x + vᵧ * y)) +
            v;
        // <D+12>h <-- <D+12>(<D+11>(<2D+9>(<2D+8> + <2D+7>) + <D+10>) + <10>);
        const h_ = ((
        // <2D+8>(<2D+7>(<5>vₓₓ*<2D+1>(xx)) + <2D+7>(<5>vₓᵧ*<2D+1>(xy)))
        (vₓₓ_ * xx_ + vₓᵧ_ * xy_) +
            // <2D+7>(<5>vᵧᵧ*<2D+1>(xy))
            vᵧᵧ_ * yy_) + (
        // <D+10>(<D+9>(<8>vₓ*<D>x) + <D+9>(<8>vᵧ*<D>y))
        vₓ_ * x_ + vᵧ_ * y_)) +
            // <10>v
            v_;
        // if the error is not too high too discern h away from zero
        if ((D + 12) * is_point_on_bezier_extension_2_1 * h_ < is_point_on_bezier_extension_2_abs(h)) {
            return false; // <-- prefilter applied
        }
    }
    // error too high - const's try double-double precision
    {
        const { coeffs: { vₓₓ, vₓᵧ, vᵧᵧ, vₓ, vᵧ, v }, errorBound: { vₓₓ_, vₓᵧ_, vᵧᵧ_, vₓ_, vᵧ_, v_ } } = getImplicitForm2DdWithRunningError(ps);
        // In the below a prefix underscore on a variable means absolute value, 
        // a postfix underscore means error bound (before multiplication by gamma).
        // h (say height) is the the result of evaluating the implicit equation; if
        // it is 0 we are on the curve, else we're not.
        // const h =
        //   vₓₓ*x*x + vₓᵧ*x*y + vᵧᵧ*y*y + vₓ*x + vᵧ*y + v;
        const xd = is_point_on_bezier_extension_2_etodd(xe);
        const yd = is_point_on_bezier_extension_2_etodd(ye);
        const _x = is_point_on_bezier_extension_2_abs(x);
        const _y = is_point_on_bezier_extension_2_abs(y);
        // we're multiplying by `γγ3` at the end but the error `x_` is only `γγ1`
        // and hence we need to divide the error by 3.
        const x_ = _x / 3;
        const y_ = _y / 3;
        const xx = is_point_on_bezier_extension_2_qmq(xd, xd);
        const _xx = xx[1];
        const xx_ = 2 * (_x * x_ + _xx);
        const yy = is_point_on_bezier_extension_2_qmq(yd, yd);
        const _yy = yy[1];
        const yy_ = 2 * (_y * y_ + _yy);
        const xy = is_point_on_bezier_extension_2_qmq(xd, yd);
        const _xy = is_point_on_bezier_extension_2_abs(xy[1]);
        const xy_ = _x * y_ + x_ * _y + 2 * _xy;
        const vₓₓxx = is_point_on_bezier_extension_2_qmq(vₓₓ, xx);
        const vₓₓxx_ = is_point_on_bezier_extension_2_abs(vₓₓ[1]) * xx_ + vₓₓ_ * _xx + 2 * is_point_on_bezier_extension_2_abs(vₓₓxx[1]);
        const vₓᵧxy = is_point_on_bezier_extension_2_qmq(vₓᵧ, xy);
        const vₓᵧxy_ = is_point_on_bezier_extension_2_abs(vₓᵧ[1]) * xy_ + vₓᵧ_ * _xy + 2 * is_point_on_bezier_extension_2_abs(vₓᵧxy[1]);
        const vᵧᵧyy = is_point_on_bezier_extension_2_qmq(vᵧᵧ, yy);
        const vᵧᵧyy_ = is_point_on_bezier_extension_2_abs(vᵧᵧ[1]) * yy_ + vᵧᵧ_ * _yy + 2 * is_point_on_bezier_extension_2_abs(vᵧᵧyy[1]);
        const vₓx = is_point_on_bezier_extension_2_qmq(xd, vₓ);
        const vₓx_ = is_point_on_bezier_extension_2_abs(vₓ[1]) * x_ + vₓ_ * _x + 2 * is_point_on_bezier_extension_2_abs(vₓx[1]);
        const vᵧy = is_point_on_bezier_extension_2_qmq(yd, vᵧ);
        const vᵧy_ = is_point_on_bezier_extension_2_abs(vᵧ[1]) * y_ + vᵧ_ * _y + 2 * is_point_on_bezier_extension_2_abs(vᵧy[1]);
        // group the terms to reduce error, e.g. v usually has the highest bitlength
        //const h = 
        //    (
        //      ((vₓₓxx + vₓᵧxy) + vᵧᵧyy) + 
        //      (vₓx + vᵧy)
        //    ) + 
        //    v;
        const q4 = is_point_on_bezier_extension_2_qaq(vₓₓxx, vₓᵧxy);
        const q4_ = vₓₓxx_ + vₓᵧxy_ + is_point_on_bezier_extension_2_abs(q4[1]);
        const q5 = is_point_on_bezier_extension_2_qaq(q4, vᵧᵧyy);
        const q5_ = q4_ + vᵧᵧyy_ + is_point_on_bezier_extension_2_abs(q5[1]);
        const q7 = is_point_on_bezier_extension_2_qaq(vₓx, vᵧy);
        const q7_ = vₓx_ + vᵧy_ + is_point_on_bezier_extension_2_abs(q7[1]);
        const q8 = is_point_on_bezier_extension_2_qaq(q5, q7);
        const q8_ = q5_ + q7_ + is_point_on_bezier_extension_2_abs(q8[1]);
        const h = is_point_on_bezier_extension_2_qaq(q8, v);
        const h_ = q8_ + v_ + is_point_on_bezier_extension_2_abs(h[1]);
        // if the error is not too high too discern h away from zero
        if (is_point_on_bezier_extension_2_3 * h_ < is_point_on_bezier_extension_2_abs(is_point_on_bezier_extension_2_estimate(h))) {
            return false; // <-- prefilter applied
        }
    }
    // error still too high - let's go exact
    {
        const implictForm = getImplicitForm2Exact(ps);
        if (implictForm === undefined) {
            // all ps are the same point
            return isDouble && x === ps[0][0] && y === ps[0][1];
        }
        if (!implictForm.hasOwnProperty('vₓₓ')) {
            implictForm.vₓₓ = [0];
            implictForm.vₓᵧ = [0];
            implictForm.vᵧᵧ = [0];
        }
        const { vₓₓ, vₓᵧ, vᵧᵧ, vₓ, vᵧ, v } = implictForm;
        // h (say height) is the the result of evaluating the implicit equation; 
        // if it is 0 we are on the curve, else we're not.
        // const h =
        //   vₓₓ*x*x + vₓᵧ*x*y + vᵧᵧ*y*y + vₓ*x + vᵧ*y + v;
        const h = is_point_on_bezier_extension_2_fes(is_point_on_bezier_extension_2_fes(is_point_on_bezier_extension_2_fes(is_point_on_bezier_extension_2_epr(vₓₓ, is_point_on_bezier_extension_2_epr(xe, xe)), is_point_on_bezier_extension_2_epr(vₓᵧ, is_point_on_bezier_extension_2_epr(xe, ye))), is_point_on_bezier_extension_2_epr(vᵧᵧ, is_point_on_bezier_extension_2_epr(ye, ye))), is_point_on_bezier_extension_2_fes(is_point_on_bezier_extension_2_fes(is_point_on_bezier_extension_2_epr(xe, vₓ), is_point_on_bezier_extension_2_epr(ye, vᵧ)), v));
        return is_point_on_bezier_extension_2_sign(h) === 0; // <= calculation was exact
    }
}

//# sourceMappingURL=is-point-on-bezier-extension-2.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/implicit-form/double/get-implicit-form3.js

/**
 * Returns the implicit form of the given cubic bezier curve.
 *
 * * returned coefficients are subscripted to match their monomial's variables,
 * e.g. `vₓᵧ` is the coefficient of the monomial `vₓᵧxy`
 * * the implicit form is given by: `vₓₓₓx³ + vₓₓᵧx²y + vₓᵧᵧxy² + vᵧᵧᵧy³ + vₓₓx² +vₓᵧxy + vᵧᵧy² + vₓx + vᵧy + v = 0`
 * * adapted from [Indrek Mandre](http://www.mare.ee/indrek/misc/2d.pdf)
 * * takes about 1.2 micro-seconds on a 3rd gen i7 and Chrome 79
 *
 * @param ps a cubic bezier curve given as an array of its control points,
 * e.g. `[[1,2],[3,4],[5,7],[0,0]]`
 *
 * @doc mdx
 */
function getImplicitForm3(ps) {
    // The implicit form is given by:
    // vₓₓₓx³ + vₓₓᵧx²y + vₓᵧᵧxy² + vᵧᵧᵧy³ + vₓₓx² +vₓᵧxy + vᵧᵧy² + vₓx + vᵧy + v = 0
    const [[a3, a2, a1, a0], [b3, b2, b1, b0]] = toPowerBasis3(ps);
    const a3b1 = a3 * b1;
    const a1b3 = a1 * b3;
    const a3b2 = a3 * b2;
    const a2b3 = a2 * b3;
    const a3a3 = a3 * a3;
    const b3b3 = b3 * b3;
    const q1 = a3 * b0 - a0 * b3;
    const q2 = a3b1 - a1b3;
    const q3 = a3b2 - a2b3;
    const q4 = a2 * b0 - a0 * b2;
    const q5 = a2 * b1 - a1 * b2;
    const q6 = a1 * b0 - a0 * b1;
    const tq2 = 2 * q2;
    const q1q1 = q1 * q1;
    const q1q5 = q1 * q5;
    const tq2q4 = tq2 * q4;
    const q3q4 = q3 * q4;
    const u1 = -3 * q1 - q5;
    const vₓₓₓ = -b3 * b3b3;
    const vₓₓᵧ = 3 * a3 * b3b3;
    const vₓᵧᵧ = -3 * b3 * a3a3;
    const vᵧᵧᵧ = a3 * a3a3;
    const vₓₓ = (u1 * b3b3 + q3 * (b1 * b3 - b2 * b2)) + tq2 * b2 * b3;
    const vᵧᵧ = (u1 * a3a3 + q3 * (a1 * a3 - a2 * a2)) + tq2 * a2 * a3;
    const vₓᵧ = 2 * (q3 * (a2 * b2 - (a1b3 + a3b1) / 2) - (u1 * a3 * b3 + q2 * (a2b3 + a3b2)));
    const s1 = (-3 * q1q1 - 2 * q1q5) + (tq2q4 + q3 * q6);
    const s2 = 2 * (q1 * q2 - q3q4);
    const s3 = q1 * q3 - q2 * q2 + q3 * q5;
    const vₓ = b3 * s1 + (b2 * s2 + b1 * s3);
    const vᵧ = -a3 * s1 - (a2 * s2 + a1 * s3);
    const v = (q1 * ((tq2q4 - q1q1) - q1q5)) + (s3 * q6 - q3q4 * q4);
    return { vₓₓₓ, vₓₓᵧ, vₓᵧᵧ, vᵧᵧᵧ, vₓₓ, vₓᵧ, vᵧᵧ, vₓ, vᵧ, v };
}

//# sourceMappingURL=get-implicit-form3.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/implicit-form/get-error-counters/get-implicit-form3-error-counters.js

const get_implicit_form3_error_counters_abs = Math.abs;
/**
 * Returns a representation of the error (from which an absolute error bound
 * can be calculated) when calculating the implicit form of the given bezier
 * curve (using [[getImplicitForm1]] or [[getImplicitForm1Dd]]).
 *
 * * returned coefficients are subscripted to match their monomial's variables,
 * e.g. `vₓᵧ` is the coefficient of the monomial `vₓᵧxy`
 * * the implicit form is given by: `vₓₓₓx³ + vₓₓᵧx²y + vₓᵧᵧxy² + vᵧᵧᵧy³ + vₓₓx² +vₓᵧxy + vᵧᵧy² + vₓx + vᵧy + v`
 * * The returned error representation needs to be multiplied with
 * [Stewart error counters¹](https://www.amazon.ca/Introduction-Matrix-Computations-G-Stewart/dp/0126703507)
 * and an appropriate error function, `γ`, depending on the precision used (e.g. double
 * or double-double). This is explained in more detail below. See
 * also [Higham 2002](http://ftp.demec.ufpr.br/CFD/bibliografia/Higham_2002_Accuracy%20and%20Stability%20of%20Numerical%20Algorithms.pdf)
 * p. 68 near the bottom.
 *
 * (1) G. W. Stewart. Introduction to Matrix Computations. Academic Press, New York,
 *  1973. xiii+441 pp. ISBN 0-12-670350-7
 *
 * The absolute erros below can be calculated as follows (where `<E>` are the
 * error counters as indicated in the comments of the return value below):
 *  * double precision: `<E> * (γ(1)) * result_`
 *  * double-double precision: `<E> * (2*γγ(3)) * result_`
 *
 * where [[γ]] and [[γγ]] are the usual error functions (provided in this library
 * as functions with the same name) with `γ(1) === 1.1102230246251568e-16`
 * and `γγ(3) === 3.697785493223493e-32`.
 *
 * ```
 * errorBound: {
 *      vₓₓₓ_,  // <11>
 *      vₓₓᵧ_,  // <12>
 *      vₓᵧᵧ_,  // <12>
 *      vᵧᵧᵧ_,  // <11>
 *      vₓₓ_,   // <19>
 *      vₓᵧ_,   // <18>
 *      vᵧᵧ_,   // <19>
 *      vₓ_,    // <22>
 *      vᵧ_,    // <22>
 *      v_      // <24>
 * }
 * ```
 * @param ps
 *
 * @doc
 */
function getImplicitForm3ErrorCounters(ps) {
    // Takes about 1.2 micro-seconds on a 3rd gen i7 and Chrome 79.
    // The implicit form is given by:
    // vₓₓₓx³ + vₓₓᵧx²y + vₓᵧᵧxy² + vᵧᵧᵧy³ + vₓₓx² +vₓᵧxy + vᵧᵧy² + vₓx + vᵧy + v = 0
    //const [[,,,a0],[,,,b0]] = toPowerBasis3ErrorCounters(ps);
    const [a0, b0] = ps[0];
    const [[a3_, a2_, a1_], // <3>a3_, <3>a2_, <2>a1_, <0>a0_  (a0_ is just abs(a0))
    [b3_, b2_, b1_] // <3>b3_, <3>b2_, <2>b1_, <0>b0_  (b0_ is just abs(b0))
    ] = toPowerBasis3ErrorCounters(ps);
    //-------------------
    // Error calculation
    //-------------------
    const a0_ = get_implicit_form3_error_counters_abs(a0);
    const b0_ = get_implicit_form3_error_counters_abs(b0);
    // <6>a3b1 <-- <6>(<3>a3*<2>b1);
    const a3b1_ = a3_ * b1_;
    // <6>a1b3 <-- a1*b3;
    const a1b3_ = a1_ * b3_;
    // <7>a3b2 <-- <7>(<3>a3*<3>b2);
    const a3b2_ = a3_ * b2_;
    // <7>a2b3 <-- a2*b3;
    const a2b3_ = a2_ * b3_;
    // <7>a3a3 <-- a3*a3;
    const a3a3_ = a3_ * a3_;
    // <7>b3b3 <-- b3*b3;
    const b3b3_ = b3_ * b3_;
    // <5>q1 <-- <5>(<4>(a3*b0) - <4>(a0*b3));
    const q1_ = a3_ * b0_ + a0_ * b3_;
    // <7>q2 <-- <7>(<6>a3b1 - <6>a1b3);
    const q2_ = a3b1_ + a1b3_;
    // <8>q3 <-- <8>(<7>a3b2 - <7>a2b3);
    const q3_ = a3b2_ + a2b3_;
    // <5>q4 <-- a2*b0 - a0*b2;
    const q4_ = a2_ * b0_ + a0_ * b2_;
    // <7>q5 <-- a2*b1 - a1*b2;
    const q5_ = a2_ * b1_ + a1_ * b2_;
    // <4>q6 <-- <4>(<3>(<2>a1*<0>b0) - <3>(<0>a0*<2>b1));
    const q6_ = a1_ * b0_ + a0_ * b1_;
    // <7>tq2 <-- 2*q2;
    const tq2_ = 2 * q2_;
    // <11>q1q1 <-- <11>(<5>q1*<5>q1)
    const q1q1_ = q1_ * q1_;
    // <13>q1q5 <-- <13>(<5>q1*<7>q5)
    const q1q5_ = q1_ * q5_;
    // <13>tq2q4 <-- <13>(<7>tq2*<5>q4)
    const tq2q4_ = tq2_ * q4_;
    // <14>q3q4 <-- <14>(<8>q3*<5>q4)
    const q3q4_ = q3_ * q4_;
    // <8>u1 <-- <8>(<6>(-3*<5>q1) - <7>q5)
    const u1_ = 3 * q1_ + q5_;
    // <11>vₓₓₓ <-- <11>(-<3>b3*<7>b3b3)
    const vₓₓₓ_ = b3_ * b3b3_;
    // <12>vₓₓᵧ <--  <12>(3*<11>(<3>a3*<7>b3b3))
    const vₓₓᵧ_ = 3 * a3_ * b3b3_;
    // <12>vₓᵧᵧ <-- -3*b3*a3a3
    const vₓᵧᵧ_ = 3 * b3_ * a3a3_;
    // <11>vᵧᵧᵧ <--  a3*a3a3
    const vᵧᵧᵧ_ = a3_ * a3a3_;
    // <19>vₓₓ <-- <19>(<18>(<16>(<8>u1*<7>b3b3) + <17>(<8>q3*(<8>(<6>(b1*b3) - <7>(b2*b2))))) + <15>(<7>tq2*<7>(b2*b3)))
    const vₓₓ_ = (u1_ * b3b3_ + q3_ * (b1_ * b3_ + b2_ * b2_)) + tq2_ * b2_ * b3_;
    // <19>vᵧᵧ <-- <19>((<18>(<16>(<8>u1*<7>a3a3) + <17>(<8>q3*<8>(<6>(a1*a3) - <7>(a2*a2))))) + <15>(<7>tq2*<7>(a2*a3)))
    const vᵧᵧ_ = (u1_ * a3a3_ + q3_ * (a1_ * a3_ + a2_ * a2_)) + tq2_ * a2_ * a3_;
    // <18>vₓᵧ <-- <18>(2*(<17>(<8>q3*<8>(<7>(a2*b2) - <7>(<6>a1b3 + <6>a3b1)/2)) - <17>(<16>(<8>u1*<7>(a3*b3)) + <16>(<7>q2*(<8>(a2b3 + a3b2))))))
    const vₓᵧ_ = 2 * (q3_ * (a2_ * b2_ + (a1b3_ + a3b1_) / 2) + (u1_ * a3_ * b3_ + q2_ * (a2b3_ + a3b2_)));
    // <15>s1 <-- <15>(<14>(<12>(-3*q1q1) - <13>2*q1q5) + <14>(<13>tq2q4 + <13>(<8>q3*<4>q6)))
    const s1_ = (3 * q1q1_ + 2 * q1q5_) + (tq2q4_ + q3_ * q6_);
    // <15>s2 <-- <15>(2*(<13>(<5>q1*<7>q2) - <14>q3q4))
    const s2_ = 2 * (q1_ * q2_ + q3q4_);
    // <17>s3 <-- <17>(<16>(<14>(<5>q1*<8>q3) - <15>(<7>q2*<7>q2)) + <16>(<8>q3*<7>q5))
    const s3_ = q1_ * q3_ + q2_ * q2_ + q3_ * q5_;
    // <22>vₓ <-- <22>(<19>(<3>b3*<15>s1) + <21>(<19>(<3>b2*<15>s2) + <20>(<2>b1*<17>s3)))
    const vₓ_ = b3_ * s1_ + (b2_ * s2_ + b1_ * s3_);
    // <22>vᵧ <-- <22>(<19>(<3>-a3*<15>s1) - <21>(<19>(<3>a2*<15>s2) + <20>(<2>a1*<17>s3)))
    const vᵧ_ = a3_ * s1_ + (a2_ * s2_ + a1_ * s3_);
    // <24>v <-- <24>(<21>(<5>q1*<15>(<14>(<13>tq2q4 - <11>q1q1) - <13>q1q5)) + <23>(<22>(<17>s3*<4>q6) - <20>(<14>q3q4*<5>q4)))
    const v_ = (q1_ * ((tq2q4_ + q1q1_) + q1q5_)) + (s3_ * q6_ + q3q4_ * q4_);
    return {
        vₓₓₓ_,
        vₓₓᵧ_,
        vₓᵧᵧ_,
        vᵧᵧᵧ_,
        vₓₓ_,
        vₓᵧ_,
        vᵧᵧ_,
        vₓ_,
        vᵧ_,
        v_ // <24>
    };
}

//# sourceMappingURL=get-implicit-form3-error-counters.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/simultaneous-properties/is-point-on-bezier-extension/is-point-on-bezier-extension-3.js





// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗


const is_point_on_bezier_extension_3_qmq = node_ddMultDd;
const is_point_on_bezier_extension_3_qaq = node_ddAddDd;
const is_point_on_bezier_extension_3_epr = expansionProduct;
const is_point_on_bezier_extension_3_fes = fastExpansionSum;
const is_point_on_bezier_extension_3_sign = e_sign_eSign;
const is_point_on_bezier_extension_3_estimate = eEstimate;
const is_point_on_bezier_extension_3_etodd = eToDd;
const is_point_on_bezier_extension_3_abs = Math.abs;
const is_point_on_bezier_extension_3_1 = error_analysis_(1);
const is_point_on_bezier_extension_3_3 = error_analysis_error_analysis_(3);
/**
 * Returns `true` if the given point is on the given cubic bezier curve where
 * the parameter, `t`, is allowed to extend to `±∞`, i.e. if `t ∈ (-∞, +∞)`,
 * `false` otherwise.
 *
 * @param ps a cubic bezier curve
 * @param p a point with coordinates given as [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 * expansions; if only double precision coordinates need to be provided then
 * wrap them in a one element array, e.g. for a point with `x` and `y` coordinates
 * of `1` and `2` set `p === [[1],[2]]`.
 *
 * @internal
 */
function isPointOnBezierExtension3(ps, p) {
    const [xe, ye] = p;
    const lenX = xe.length;
    const lenY = ye.length;
    const x = xe[lenX - 1]; // get higest order double
    const y = ye[lenY - 1]; // ...
    const isDouble = (lenX === 1 && lenY === 1);
    //---- first pre-filter
    {
        // The below takes about 1.2 micro-seconds on a 1st gen i7 and Chrome 79
        const { vₓₓₓ, vₓₓᵧ, vₓᵧᵧ, vᵧᵧᵧ, vₓₓ, vₓᵧ, vᵧᵧ, vₓ, vᵧ, v } = getImplicitForm3(ps);
        const { vₓₓₓ_, // <11>
        vₓₓᵧ_, // <12>
        vₓᵧᵧ_, // <12>
        vᵧᵧᵧ_, // <11>
        vₓₓ_, // <19>
        vₓᵧ_, // <18>
        vᵧᵧ_, // <19>
        vₓ_, // <22>
        vᵧ_, // <22>
        v_ // <24>
         } = getImplicitForm3ErrorCounters(ps);
        // In the below a a postfix underscore means 
        // an error bound (>= absolute value)
        // h (say height) is the the result of evaluating the implicit equation; if
        // it is 0 we are on the curve, else we're not.
        // const h =
        //   vₓₓₓ*x*x*x + vₓₓᵧ*x*x*y + vₓᵧᵧ*x*y*y + vᵧᵧᵧ*y*y*y + 
        //   vₓₓ*x*x + vₓᵧ*x*y + vᵧᵧ*y*y + vₓ*x + vᵧ*y + v;
        // group the terms to reduce error, e.g. v usually has the highest bitlength
        // const h = 
        //    (
        //        ((vₓₓₓxxx + vₓₓᵧxxy) + (vₓᵧᵧxyy + vᵧᵧᵧyyy)) + 
        //        (vₓₓxx + vₓᵧxy + vᵧᵧyy)
        //    ) + 
        //    (
        //        (vₓx + vᵧy) + 
        //        v
        //    );
        const xx = x * x;
        const yy = y * y;
        const h = (((vₓₓₓ * (xx * x) + vₓₓᵧ * (xx * y)) +
            (vₓᵧᵧ * (x * yy) + vᵧᵧᵧ * (yy * y))) +
            ((vₓₓ * xx + vₓᵧ * (x * y)) + vᵧᵧ * yy)) +
            ((vₓ * x + vᵧ * y) +
                v);
        //-------------------
        // Error calculation
        //-------------------
        // In the below, if x is given as a double then the error counter on
        // x would be 0, i.e. <0>x, else it would be <1>x. We represent the
        // error counter with a <D> so that for a point with double precion 
        // coordinates we have <D> = <0> else <D> = <1>. Same is true for y.
        // `0` if we have only double precision coordinates, `1` otherwise
        const D = isDouble ? 0 : 1;
        const x_ = is_point_on_bezier_extension_3_abs(x); // <D>x
        const y_ = is_point_on_bezier_extension_3_abs(y); // <D>y
        const xx_ = x_ * x_; // <2D+1>xx
        const xy_ = x_ * y_; // <2D+1>xy
        const yy_ = y_ * y_; // <2D+1>yy
        // <D+26>h <-- <D+26>(<2D+24>(<3D+17>(<3D+16> + <3D+16>) + <2D+23>) + <D+25>(<D+24> + <24>))
        const h_ = (
        // <3D+16> <-- <3D+16>((<3D+14>(<11>vₓₓₓ*<3D+2>(xx*x)) + <3D+15>(<12>vₓₓᵧ*<3D+2>(xx*y)))) +
        (vₓₓₓ_ * (xx_ * x_) + vₓₓᵧ_ * (xx_ * y_)) +
            // <3D+16> <-- <3D+16>((<3D+15>(<12>vₓᵧᵧ*<3D+2>(x*yy)) + <3D+14>(<11>vᵧᵧᵧ*<3D+2>(yy*y)))) +
            (vₓᵧᵧ_ * (x_ * yy_) + vᵧᵧᵧ_ * (yy_ * y_)) +
            // <2D+23> <-- <2D+23>(<2D+22>(<2D+21>(<19>vₓₓ*<2D+1>xx) + <2D+20>(<18>vₓᵧ*<2D+1>(x*y))) + <2D+20>(<18>vᵧᵧ*<2D+1>yy))
            ((vₓₓ_ * xx_ + vₓᵧ_ * (xy_)) + vᵧᵧ_ * yy_)) +
            (
            // <24> <-- <D+24>(<D+23>(<22>vₓ*<D>x) + <D+23>(<22>vᵧ*<D>y))
            (vₓ_ * x_ + vᵧ_ * y_) +
                // <24>
                v_);
        // if the error is not too high too discern `h` away from zero
        if ((D + 26) * is_point_on_bezier_extension_3_1 * h_ < is_point_on_bezier_extension_3_abs(h)) {
            return false; // <-- prefilter applied
        }
    }
    // error too high - let's try double-double precision
    {
        // The below takes about 15 micro-seconds on a 1st gen i7 and Chrome 79
        const { coeffs: { vₓₓₓ, vₓₓᵧ, vₓᵧᵧ, vᵧᵧᵧ, vₓₓ, vₓᵧ, vᵧᵧ, vₓ, vᵧ, v }, errorBound: { vₓₓₓ_, vₓₓᵧ_, vₓᵧᵧ_, vᵧᵧᵧ_, vₓₓ_, vₓᵧ_, vᵧᵧ_, vₓ_, vᵧ_, v_ } } = getImplicitForm3DdWithRunningError(ps);
        const _vₓₓₓ = is_point_on_bezier_extension_3_abs(vₓₓₓ[1]);
        const _vₓₓᵧ = is_point_on_bezier_extension_3_abs(vₓₓᵧ[1]);
        const _vₓᵧᵧ = is_point_on_bezier_extension_3_abs(vₓᵧᵧ[1]);
        const _vᵧᵧᵧ = is_point_on_bezier_extension_3_abs(vᵧᵧᵧ[1]);
        // In the below a prefix underscore on a variable means absolute value, 
        // a postfix underscore means error bound (before multiplication by gamma).
        // h (say height) is the the result of evaluating the implicit equation; if
        // it is 0 we are on the curve, else we're not.
        // const h =
        //   vₓₓₓ*x*x*x + vₓₓᵧ*x*x*y + vₓᵧᵧ*x*y*y + vᵧᵧᵧ*y*y*y + 
        //   vₓₓ*x*x + vₓᵧ*x*y + vᵧᵧ*y*y + vₓ*x + vᵧ*y + v;
        const xd = is_point_on_bezier_extension_3_etodd(xe);
        const yd = is_point_on_bezier_extension_3_etodd(ye);
        const _x = is_point_on_bezier_extension_3_abs(x);
        const _y = is_point_on_bezier_extension_3_abs(y);
        // we're multiplying by `γγ3` at the end but the error `x_` is only `γγ1`
        // and hence we need to divide the error by 3.
        const x_ = _x / 3;
        const y_ = _y / 3;
        const xx = is_point_on_bezier_extension_3_qmq(xd, xd);
        const _xx = xx[1];
        const xx_ = 2 * (_x * x_ + _xx);
        const xxx = is_point_on_bezier_extension_3_qmq(xd, xx);
        const _xxx = is_point_on_bezier_extension_3_abs(xxx[1]);
        const xxx_ = _x * xx_ + x_ * _xx + 2 * _xxx;
        const yy = is_point_on_bezier_extension_3_qmq(yd, yd);
        const _yy = yy[1];
        const yy_ = 2 * (_y * y_ + _yy);
        const yyy = is_point_on_bezier_extension_3_qmq(yd, yy);
        const _yyy = is_point_on_bezier_extension_3_abs(yyy[1]);
        const yyy_ = _y * yy_ + y_ * _yy + 2 * _yyy;
        const xxy = is_point_on_bezier_extension_3_qmq(yd, xx);
        const _xxy = is_point_on_bezier_extension_3_abs(xxy[1]);
        const xxy_ = _y * xx_ + y_ * _xx + 2 * _xxy;
        const xyy = is_point_on_bezier_extension_3_qmq(xd, yy);
        const _xyy = is_point_on_bezier_extension_3_abs(xyy[1]);
        const xyy_ = _x * yy_ + x_ * _yy + 2 * _xyy;
        const xy = is_point_on_bezier_extension_3_qmq(xd, yd);
        const _xy = is_point_on_bezier_extension_3_abs(xy[1]);
        const xy_ = _x * y_ + x_ * _y + 2 * _xy;
        const vₓₓₓxxx = is_point_on_bezier_extension_3_qmq(vₓₓₓ, xxx);
        const vₓₓₓxxx_ = _vₓₓₓ * xxx_ + vₓₓₓ_ * _xxx + 2 * is_point_on_bezier_extension_3_abs(vₓₓₓxxx[1]);
        const vₓₓᵧxxy = is_point_on_bezier_extension_3_qmq(vₓₓᵧ, xxy);
        const vₓₓᵧxxy_ = _vₓₓᵧ * xxy_ + vₓₓᵧ_ * _xxy + 2 * is_point_on_bezier_extension_3_abs(vₓₓᵧxxy[1]);
        const vₓᵧᵧxyy = is_point_on_bezier_extension_3_qmq(vₓᵧᵧ, xyy);
        const vₓᵧᵧxyy_ = _vₓᵧᵧ * xyy_ + vₓᵧᵧ_ * _xyy + 2 * is_point_on_bezier_extension_3_abs(vₓᵧᵧxyy[1]);
        const vᵧᵧᵧyyy = is_point_on_bezier_extension_3_qmq(vᵧᵧᵧ, yyy);
        const vᵧᵧᵧyyy_ = _vᵧᵧᵧ * yyy_ + vᵧᵧᵧ_ * _yyy + 2 * is_point_on_bezier_extension_3_abs(vᵧᵧᵧyyy[1]);
        const vₓₓxx = is_point_on_bezier_extension_3_qmq(vₓₓ, xx);
        const vₓₓxx_ = is_point_on_bezier_extension_3_abs(vₓₓ[1]) * xx_ + vₓₓ_ * _xx + 2 * is_point_on_bezier_extension_3_abs(vₓₓxx[1]);
        const vₓᵧxy = is_point_on_bezier_extension_3_qmq(vₓᵧ, xy);
        const vₓᵧxy_ = is_point_on_bezier_extension_3_abs(vₓᵧ[1]) * xy_ + vₓᵧ_ * _xy + 2 * is_point_on_bezier_extension_3_abs(vₓᵧxy[1]);
        const vᵧᵧyy = is_point_on_bezier_extension_3_qmq(vᵧᵧ, yy);
        const vᵧᵧyy_ = is_point_on_bezier_extension_3_abs(vᵧᵧ[1]) * yy_ + vᵧᵧ_ * _yy + 2 * is_point_on_bezier_extension_3_abs(vᵧᵧyy[1]);
        const vₓx = is_point_on_bezier_extension_3_qmq(xd, vₓ);
        const vₓx_ = is_point_on_bezier_extension_3_abs(vₓ[1]) * x_ + vₓ_ * _x + 2 * is_point_on_bezier_extension_3_abs(vₓx[1]);
        const vᵧy = is_point_on_bezier_extension_3_qmq(yd, vᵧ);
        const vᵧy_ = is_point_on_bezier_extension_3_abs(vᵧ[1]) * y_ + vᵧ_ * _y + 2 * is_point_on_bezier_extension_3_abs(vᵧy[1]);
        // group the terms to reduce error, e.g. v usually has the highest bitlength
        //const h = 
        //    (
        //        ((vₓₓₓxxx + vₓₓᵧxxy) + (vₓᵧᵧxyy + vᵧᵧᵧyyy)) + 
        //        (vₓₓxx + vₓᵧxy + vᵧᵧyy)
        //    ) + 
        //    (
        //        (vₓx + vᵧy) + 
        //        v
        //    );
        const q1 = is_point_on_bezier_extension_3_qaq(vₓₓₓxxx, vₓₓᵧxxy);
        const q1_ = vₓₓₓxxx_ + vₓₓᵧxxy_ + is_point_on_bezier_extension_3_abs(q1[1]);
        const q2 = is_point_on_bezier_extension_3_qaq(vₓᵧᵧxyy, vᵧᵧᵧyyy);
        const q2_ = vₓᵧᵧxyy_ + vᵧᵧᵧyyy_ + is_point_on_bezier_extension_3_abs(q2[1]);
        const q3 = is_point_on_bezier_extension_3_qaq(q1, q2);
        const q3_ = q1_ + q2_ + is_point_on_bezier_extension_3_abs(q3[1]);
        const q4 = is_point_on_bezier_extension_3_qaq(vₓₓxx, vₓᵧxy);
        const q4_ = vₓₓxx_ + vₓᵧxy_ + is_point_on_bezier_extension_3_abs(q4[1]);
        const q5 = is_point_on_bezier_extension_3_qaq(q4, vᵧᵧyy);
        const q5_ = q4_ + vᵧᵧyy_ + is_point_on_bezier_extension_3_abs(q5[1]);
        const q6 = is_point_on_bezier_extension_3_qaq(q3, q5);
        const q6_ = q3_ + q5_ + is_point_on_bezier_extension_3_abs(q6[1]);
        const q7 = is_point_on_bezier_extension_3_qaq(vₓx, vᵧy);
        const q7_ = vₓx_ + vᵧy_ + is_point_on_bezier_extension_3_abs(q7[1]);
        const q8 = is_point_on_bezier_extension_3_qaq(q7, v);
        const q8_ = q7_ + v_ + is_point_on_bezier_extension_3_abs(q8[1]);
        const h = is_point_on_bezier_extension_3_qaq(q6, q8);
        const h_ = q6_ + q8_ + is_point_on_bezier_extension_3_abs(h[1]);
        // if the error is not too high too discern h away from zero
        if (is_point_on_bezier_extension_3_3 * h_ < is_point_on_bezier_extension_3_abs(is_point_on_bezier_extension_3_estimate(h))) {
            return false; // <-- prefilter applied
        }
    }
    // error still too high - const's go exact
    {
        // The below takes about 155 micro-seconds on a 1st gen i7 and Chrome 79
        const implictForm = getImplicitForm3Exact(ps);
        if (implictForm === undefined) {
            // all ps are the same point
            return isDouble && x === ps[0][0] && y === ps[0][1];
        }
        if (!implictForm.hasOwnProperty('vₓₓₓ')) {
            implictForm.vₓₓₓ = [0];
            implictForm.vₓₓᵧ = [0];
            implictForm.vₓᵧᵧ = [0];
            implictForm.vᵧᵧᵧ = [0];
        }
        if (!implictForm.hasOwnProperty('vₓₓ')) {
            implictForm.vₓₓ = [0];
            implictForm.vₓᵧ = [0];
            implictForm.vᵧᵧ = [0];
        }
        const { vₓₓₓ, vₓₓᵧ, vₓᵧᵧ, vᵧᵧᵧ, vₓₓ, vₓᵧ, vᵧᵧ, vₓ, vᵧ, v } = implictForm;
        // `h` (say height) is the the result of evaluating the implicit 
        // equation; if it is 0 we are on the curve, else we're not.
        // const h =
        //   vₓₓₓ*x*x*x + vₓₓᵧ*x*x*y + vₓᵧᵧ*x*y*y + vᵧᵧᵧ*y*y*y + 
        //   vₓₓ*x*x + vₓᵧ*x*y + vᵧᵧ*y*y + vₓ*x + vᵧ*y + v;
        const xx = is_point_on_bezier_extension_3_epr(xe, xe); // <= error free
        const xxx = is_point_on_bezier_extension_3_epr(xe, xx);
        const yy = is_point_on_bezier_extension_3_epr(ye, ye); // <= error free
        const yyy = is_point_on_bezier_extension_3_epr(ye, yy);
        const xxy = is_point_on_bezier_extension_3_epr(ye, xx);
        const xyy = is_point_on_bezier_extension_3_epr(xe, yy);
        const xy = is_point_on_bezier_extension_3_epr(xe, ye); // <= error free
        const vₓₓₓxxx = is_point_on_bezier_extension_3_epr(vₓₓₓ, xxx);
        const vₓₓᵧxxy = is_point_on_bezier_extension_3_epr(vₓₓᵧ, xxy);
        const vₓᵧᵧxyy = is_point_on_bezier_extension_3_epr(vₓᵧᵧ, xyy);
        const vᵧᵧᵧyyy = is_point_on_bezier_extension_3_epr(vᵧᵧᵧ, yyy);
        const vₓₓxx = is_point_on_bezier_extension_3_epr(vₓₓ, xx);
        const vₓᵧxy = is_point_on_bezier_extension_3_epr(vₓᵧ, xy);
        const vᵧᵧyy = is_point_on_bezier_extension_3_epr(vᵧᵧ, yy);
        const vₓx = is_point_on_bezier_extension_3_epr(xe, vₓ);
        const vᵧy = is_point_on_bezier_extension_3_epr(ye, vᵧ);
        const q1 = is_point_on_bezier_extension_3_fes(vₓₓₓxxx, vₓₓᵧxxy);
        const q2 = is_point_on_bezier_extension_3_fes(vₓᵧᵧxyy, vᵧᵧᵧyyy);
        const q3 = is_point_on_bezier_extension_3_fes(q1, q2);
        const q4 = is_point_on_bezier_extension_3_fes(vₓₓxx, vₓᵧxy);
        const q5 = is_point_on_bezier_extension_3_fes(q4, vᵧᵧyy);
        const q6 = is_point_on_bezier_extension_3_fes(q3, q5);
        const q7 = is_point_on_bezier_extension_3_fes(vₓx, vᵧy);
        const q8 = is_point_on_bezier_extension_3_fes(q7, v);
        const h = is_point_on_bezier_extension_3_fes(q6, q8);
        return is_point_on_bezier_extension_3_sign(h) === 0; // <= calculation was exact
    }
}

//# sourceMappingURL=is-point-on-bezier-extension-3.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/simultaneous-properties/is-point-on-bezier-extension/is-point-on-bezier-extension.js




/**
 * Returns `true` if the given point is on the given bezier curve where the
 * parameter `t` is allowed to extend to ±∞, i.e. `t` is an element of
 * `(-∞, +∞)`, `false` otherwise.
 *
 * @param ps an order 0,1,2 or 3 bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0],[1,1],[2,1],[2,0]]`
 * @param p a point with coordinates given as [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 * expansions; if only double precision coordinates need to be provided then
 * wrap them in a one element array, e.g. for a point with `x` and `y` coordinates
 * of `1` and `2` set `p === [[1],[2]]`.
 */
function isPointOnBezierExtension(ps, p) {
    if (ps.length === 4) {
        return isPointOnBezierExtension3(ps, p);
    }
    if (ps.length === 3) {
        return isPointOnBezierExtension2(ps, p);
    }
    if (ps.length === 2) {
        return isPointOnBezierExtension1(ps, p);
    }
    if (ps.length === 1) {
        const x = e_compress_eCompress(p[0]);
        const y = e_compress_eCompress(p[1]);
        return (x.length === 1 && y.length === 1 &&
            x[0] === ps[0][0] && y[0] === ps[0][1]);
    }
    throw new Error('The given bezier curve must be of order <= 3');
}

//# sourceMappingURL=is-point-on-bezier-extension.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/bezier-bezier-intersection/bezier-bezier-intersection-boundless.js


/**
 * Returns the intersection between any of two linear, quadratic or cubic bezier
 * curves without limiting the `t` parameter value of the first given curve
 * in [0,1], i.e. `t ∈ [-∞,+∞]`.
 *
 * * if the two curves have an infinite number of intersections `undefined` is returned
 * * the second bezier curve's parameter `t` values are returned *ordered* by `t` value
 *
 * * **precondition:** the bezier curves must be of lowest possible
 * representable order, i.e. cubics are really cubics, etc. (else
 * use [[reduceOrderIfPossible]] first)
 *
 * @param ps1 an order 1,2 or 3 bezier curve given as an array of its control
 * points, e.g. `[[1,2],[3,4],[5,7],[0,0]]`
 * @param ps2 an order 1,2 or 3 bezier curve given as an array of its control
 * points, e.g. `[[1,2],[3,4],[5,7],[0,0]]`
 *
 * @internal but still exported for backwards compatibility
 */
function bezierBezierIntersectionBoundless(ps1, ps2) {
    const { coeffs, errBound, getPExact } = getCoeffsBezBez(ps1, ps2);
    return allRootsCertified(coeffs, 0, 1, errBound, getPExact, true);
}

//# sourceMappingURL=bezier-bezier-intersection-boundless.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/boxes/intersect-boxes.js
const intersect_boxes_min = Math.min;
const intersect_boxes_max = Math.max;
/**
 * Returns the intersection of 2 given axis-aligned rectangular boxes (or
 * `undefined` if they don't intersect).
 *
 * * **exact**: not susceptible to floating point round-off
 * * **closed**: interpret boxes as being closed (i.e. they contain their border).
 *
 * @param a an axis-aligned rectangular box (given by an array of two points,
 * e.g. `[[1,2], [3,4]]`)
 * @param b another box
 *
 * @doc mdx
 */
function intersectBoxes(a, b) {
    let [[ax0, ay0], [ax1, ay1]] = a;
    let [[bx0, by0], [bx1, by1]] = b;
    // Swap so smaller coordinate comes first
    if (ax0 > ax1) {
        [ax0, ax1] = [ax1, ax0];
    }
    if (bx0 > bx1) {
        [bx0, bx1] = [bx1, bx0];
    }
    if (ay0 > ay1) {
        [ay0, ay1] = [ay1, ay0];
    }
    if (by0 > by1) {
        [by0, by1] = [by1, by0];
    }
    if (!(ax0 <= bx1 && ax1 >= bx0 &&
        by0 <= ay1 && by1 >= ay0)) {
        // they don't intersect
        return undefined;
    }
    return [
        [intersect_boxes_max(ax0, bx0), intersect_boxes_max(ay0, by0)],
        [intersect_boxes_min(ax1, bx1), intersect_boxes_min(ay1, by1)]
    ];
}

//# sourceMappingURL=intersect-boxes.js.map
;// CONCATENATED MODULE: ./src/get-critical-points/get-other-t.ts

// TODO - could this come from flo-bezier3
function getOtherTs(ps1, ps2, ts2) {
    if (ts2 === undefined) {
        // infinite number of intersections
        return undefined;
    }
    if (ts2.length === 0) {
        return [];
    }
    const ts1 = bezierBezierIntersectionBoundless(ps2, ps1);
    if (ts1 === undefined) {
        // infinite number of intersections
        return undefined;
    }
    if (ts1.length === 0) {
        return [];
    }
    const is1 = ts1.map(ri => getIntervalBox(ps1, [ri.tS, ri.tE]));
    const is2 = ts2.map(ri => getIntervalBox(ps2, [ri.tS, ri.tE]));
    const xPairs = [];
    for (let i = 0; i < ts1.length; i++) {
        const box1 = is1[i];
        for (let j = 0; j < ts2.length; j++) {
            const box2 = is2[j];
            const box = intersectBoxes(box1, box2);
            if (box !== undefined) {
                // TODO important - combine boxes to make sense, i.e. combine better
                // e.g. two odd multiplicity boxes should combine to a single even, etc. etc.
                const x1 = { ri: ts1[i], box, kind: 1 };
                const x2 = { ri: ts2[j], box, kind: 1 };
                xPairs.push([x1, x2]);
            }
        }
    }
    return xPairs;
}


;// CONCATENATED MODULE: ./src/geometry/do-convex-polygons-intersect.ts
/**
 * Adapted from https://stackoverflow.com/a/12414951/2010061.
 * Returns true if there is any intersection between the 2 polygons, false otherwise
 * Uses the Separating Axis Theorem.
 *
 * @param polygonA an array of connected points that form a closed polygon
 * @param polygonB an array of connected points that form a closed polygon
 * @param closed set to false to compare open polygons (not containing their
 * boundary) or true to compare closed polygons
 */
function doConvexPolygonsIntersect(polygonA, polygonB, closed) {
    // for each polygon, look at each edge of the polygon, and determine if 
    // it separates the two shapes
    for (const polygon of [polygonA, polygonB]) {
        const len = polygon.length;
        for (let i = 1; i < len + 1; i++) {
            // grab 2 consecutive vertices to create an edge
            const p1 = polygon[i - 1];
            const p2 = polygon[i % len];
            // find the vector perpendicular to this edge
            const normal = [p2[1] - p1[1], p1[0] - p2[0]];
            let minA = Number.POSITIVE_INFINITY;
            let maxA = Number.NEGATIVE_INFINITY;
            // for each vertex in the first shape, project it onto the line 
            // perpendicular to the edge and keep track of the min and max of 
            // these values
            for (let k = 0; k < polygonA.length; k++) {
                const projected = normal[0] * polygonA[k][0] +
                    normal[1] * polygonA[k][1];
                if (projected < minA) {
                    minA = projected;
                }
                if (projected > maxA) {
                    maxA = projected;
                }
            }
            // for each vertex in the second shape, project it onto the line 
            // perpendicular to the edge and keep track of the min and max of 
            // these values
            let minB = Number.POSITIVE_INFINITY;
            let maxB = Number.NEGATIVE_INFINITY;
            for (let k = 0; k < polygonB.length; k++) {
                const projected = normal[0] * polygonB[k][0] +
                    normal[1] * polygonB[k][1];
                if (projected < minB) {
                    minB = projected;
                }
                if (projected > maxB) {
                    maxB = projected;
                }
            }
            // if there is no overlap between the projections, the edge we are 
            // looking at separates the two polygons, and we know there is no 
            // overlap
            if (closed) {
                if (maxA < minB || maxB < minA) {
                    return false;
                }
            }
            if (!closed) {
                if (maxA <= minB || maxB <= minA) {
                    return false;
                }
            }
        }
    }
    return true;
}


;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/global-properties/classification/is-cubic-really-quad.js

// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗
const is_cubic_really_quad_tp = basic_two_product_twoProduct;
const is_cubic_really_quad_fes = fastExpansionSum;
const is_cubic_really_quad_esign = e_sign_eSign;
const is_cubic_really_quad_ediff = eDiff;
const is_cubic_really_quad_u = Number.EPSILON / 2;
const is_cubic_really_quad_abs = Math.abs;
/**
 * Returns `true` if the given cubic bezier curve is really a quadratic (or
 * lower order) curve in disguise, i.e. it can be represent by a quadratic
 * bezier curve, `false` otherwise.
 *
 * * **exact**: not susceptible to floating point round-off
 *
 * @param ps an order 0,1,2 or 3 bezier curve given as an array of its control
 * points, e.g. `[[1,2],[3,4],[5,6],[7,8]]`
 *
 * @doc mdx
 */
function isCubicReallyQuad(ps) {
    const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;
    // The line below is unrolled (uses a toHybridQuadratic condition (points same?))
    //if ((x3 + 3*x1) - (x0 + 3*x2) === 0 && 
    //    (y3 + 3*y1) - (y0 + 3*y2) === 0) {
    // Calculate an approximation of the above with error bounds and use it as
    // a fast filter.
    const u1 = 3 * x1;
    const u1_ = is_cubic_really_quad_abs(3 * x1); // the absolute error in u1
    const u2 = x3 + u1;
    const u2_ = u1_ + is_cubic_really_quad_abs(u2); // the absolute error in u2
    const v1 = 3 * x2;
    const v1_ = is_cubic_really_quad_abs(3 * x2); // the absolute error in v1
    const v2 = x0 + v1;
    const v2_ = v1_ + is_cubic_really_quad_abs(v2); // the absolute error in v2
    const w = u2 - v2;
    const w_ = u2_ + v2_ + is_cubic_really_quad_abs(w); // the absolute error in w
    // if w cannot possibly be zero, i.e. if the error is smaller than the value
    if (is_cubic_really_quad_abs(w) - is_cubic_really_quad_u * w_ > 0) {
        // fast filter 1 passed
        return false;
    }
    const q1 = 3 * y1;
    const q1_ = is_cubic_really_quad_abs(3 * y1); // the absolute error in q1
    const q2 = y3 + q1;
    const q2_ = q1_ + is_cubic_really_quad_abs(q2); // the absolute error in q2
    const r1 = 3 * y2;
    const r1_ = is_cubic_really_quad_abs(3 * y2); // the absolute error in r1
    const r2 = y0 + r1;
    const r2_ = r1_ + is_cubic_really_quad_abs(r2); // the absolute error in r2
    const s = q2 - r2;
    const s_ = q2_ + r2_ + is_cubic_really_quad_abs(s); // the absolute error in s
    if (is_cubic_really_quad_abs(s) - is_cubic_really_quad_u * s_ > 0) {
        // fast filter 2 passed
        return false;
    }
    // unable to filter - go slow and exact
    return (is_cubic_really_quad_esign(is_cubic_really_quad_ediff(is_cubic_really_quad_fes([x3], is_cubic_really_quad_tp(3, x1)), is_cubic_really_quad_fes([x0], is_cubic_really_quad_tp(3, x2)))) === 0 &&
        is_cubic_really_quad_esign(is_cubic_really_quad_ediff(is_cubic_really_quad_fes([y3], is_cubic_really_quad_tp(3, y1)), is_cubic_really_quad_fes([y0], is_cubic_really_quad_tp(3, y2)))) === 0);
}

//# sourceMappingURL=is-cubic-really-quad.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/global-properties/classification/is-quad-really-line.js

// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗
const is_quad_really_line_ediff = eDiff;
const is_quad_really_line_esign = e_sign_eSign;
const is_quad_really_line_ts = basic_two_sum_twoSum;
const { abs: is_quad_really_line_abs } = Math;
/**
 * Returns `true` if the given quadratic bezier curve is really a linear curve
 * (or a point), i.e. if all control points collinear *and* it can be converted
 * to an order 1 bezier curve (a line) such that the
 * same `(x,y)` point is returned for the same `t` value, `false` otherwise.
 *
 * * the required condition is met if: `x0 + x2 = 2*x1` and `y0 + y2 = 2*y1`
 * * **exact**: not susceptible to floating point round-off
 *
 * @param ps a quadratic bezier curve given as an array of its control
 * points, e.g. `[[1,2],[5,6],[7,8]]`
 *
 * @doc mdx
 */
function isQuadReallyLine(ps) {
    const [[x0, y0], [x1, y1], [x2, y2]] = ps;
    //if (x0 + x2 === 2*x1) && (y0 + y2 === 2*y1)
    // Calculate an approximation of the above with error bounds and use it as
    // a fast filter.
    const q = x0 + x2;
    const _q_ = is_quad_really_line_abs(q); // the absolute error bound in q (after multipliciation by `u`)
    const w = q - 2 * x1;
    const w_ = _q_ + is_quad_really_line_abs(w); // the absolute error bound in w
    // if w cannot possibly be zero, i.e. if the error is smaller than the value
    if (is_quad_really_line_abs(w) - w_ > 0) {
        // fast filter passed
        return false;
    }
    const r = y0 + y2;
    const _r_ = is_quad_really_line_abs(r); // the absolute error bound in r (after multipliciation by `u`)
    const z = r - 2 * y1;
    const z_ = _r_ + is_quad_really_line_abs(z); // the absolute error bound in w
    // if the error is smaller than the value
    if (is_quad_really_line_abs(z) - z_ > 0) {
        // fast filter passed
        return false;
    }
    // unable to filter - go slow and exact
    return (is_quad_really_line_esign(is_quad_really_line_ediff(is_quad_really_line_ts(x0, x2), [2 * x1])) === 0 &&
        is_quad_really_line_esign(is_quad_really_line_ediff(is_quad_really_line_ts(y0, y2), [2 * y1])) === 0);
}

//# sourceMappingURL=is-quad-really-line.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/global-properties/classification/is-really-point.js
/**
 * Returns `true` if the given bezier curve has all control points coincident,
 * `false` otherwise.
 *
 * @param ps an order 0,1,2 or 3 bezier curve given as an array of its control
 * points, e.g. `[[0,0],[1,1],[2,1],[2,0]]`
 *
 * @doc
 */
function isReallyPoint(ps) {
    const x = ps[0][0];
    const y = ps[0][1];
    for (let i = 1; i < ps.length; i++) {
        if (x !== ps[i][0] || y !== ps[i][1]) {
            return false;
        }
    }
    return true;
}

//# sourceMappingURL=is-really-point.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/transformation/reduce-order-if-possible.js




/**
 * Returns a reduced order version of the given bezier curve *if* it can be
 * represented as such without loss.
 *
 * Crucially, the reduced order bezier will have exactly the same `t` values
 * at specific `x` and `y` coordinates as the original.
 *
 * @param ps an order 0,1,2 or 3 bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0],[1,1],[2,1],[2,0]]`
 *
 * @doc mdx
 */
function reduceOrderIfPossible(ps) {
    if (ps.length === 4 && isCubicReallyQuad(ps)) {
        ps = cubicToQuadratic(ps);
    }
    if (ps.length === 3 && isQuadReallyLine(ps)) {
        ps = [ps[0], ps[2]];
    }
    if (ps.length === 2 && isReallyPoint(ps)) {
        ps = [ps[0]];
    }
    return ps;
}

//# sourceMappingURL=reduce-order-if-possible.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/get-endpoint-intersections/ensure-range.js
const ensure_range_eps = Number.EPSILON;
const ensure_range_u = ensure_range_eps / 2;
/**
 * @param t
 * @param min1Sign
 *
 * @internal
 */
function ensureRange(t, min1Sign) {
    return (min1Sign < 0
        ? (t < 1 ? t : 1 - ensure_range_u)
        : min1Sign === 0
            ? 1
            : (t > 1 ? t : 1 + ensure_range_eps));
}

//# sourceMappingURL=ensure-range.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/get-endpoint-intersections/er-estimate.js

/**
 * Estimates the result of the given expansion rational.
 *
 * * the sign of the returned result is guaranteed to be correct
 * * the result is guaranteed accurate to within 2 ulps
 *
 * @param a
 *
 * @internal
 */
function erEstimate(a) {
    return eEstimate(eDiv(a[0], a[1], 2));
}

//# sourceMappingURL=er-estimate.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/get-endpoint-intersections/er-sign.js

/**
 * Returns the sign of the given expansion rational.
 *
 * @param a
 *
 * @internal
 */
function erSign(a) {
    return e_sign_eSign(a[0]) * e_sign_eSign(a[1]);
}

//# sourceMappingURL=er-sign.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/get-endpoint-intersections/get-ab.js




/** @internal */
function getAB(getTransform) {
    return (psA, psB) => {
        const xyA = toPowerBasisExact(psA);
        const xyB = toPowerBasisExact(psB);
        const xyAR = toPowerBasisExact(psA.slice().reverse());
        const xyBR = toPowerBasisExact(psB.slice().reverse());
        const d = getTransform(xyA, xyB);
        const d_AR = getTransform(xyAR, xyB);
        const d_BR = getTransform(xyA, xyBR);
        const d_ARBR = getTransform(xyAR, xyBR);
        // Get the *certified* sign of `tA_B0 - 1`.
        const sgn_tA_B0_min1 = -erSign(d_AR);
        const sgn_tA_B1_min1 = -erSign(d_ARBR);
        const _tA_B0 = erEstimate(d);
        const _tA_B1 = erEstimate(d_BR);
        const tA_B0 = ensureRange(_tA_B0, sgn_tA_B0_min1);
        const tA_B1 = ensureRange(_tA_B1, sgn_tA_B1_min1);
        return [tA_B0, tA_B1];
    };
}

//# sourceMappingURL=get-ab.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/get-endpoint-intersections/get-transform-1.js

/** @internal */
function getTransform1(_xyA, _xyB) {
    // Both `_xyB[0][0]` and `_xyB[1][0]` can't be zero else we would have had
    // a lower order bezier curve. Also, if `_xyB[0][0]` is zero 
    // then `_xyA[0][0]` will also be zero (and same with the y coordinate)
    const coord = e_sign_eSign(_xyA[0][0]) === 0 ? 1 : 0;
    const xyA = _xyA[coord];
    const xyB = _xyB[coord];
    return getTransformedTs1(xyA, xyB);
}
/**
 * Given two algebraically identical bezier curves (but with possibly different
 * endpoints) return the transformation parameters (the `c` and `d` in
 * `t = cx + d`) for transforming the second curve into the first so that it has
 * exactly the same control points but such that the parameter `t` values run
 * from `t0` to `t1` where `t0` and `t1` can be obtained via `t0 = -d/c`
 * and `t1 = (1 - d)/c` (or in reverse: `t0_ = d` and `t1_ = c + d`).
 *
 * * **precondition**: the given pair of bezier curves must be algebraically
 * identical, e.g. `ps = [[1,1],[2,2],[3,2],[3,-1]]`
 * and `ps_ = [[-1,-21],[-3.25,-29.25],[-6.625,-40.3125],[-11.546875,-55.03125]]`
 *
 * * **precondition**: the given pair of bezier curves are in lowest possible
 * order
 *
 * @internal
 */
function getTransformedTs1(A, B) {
    const [p1, p0] = A;
    const [, r0] = B;
    // The (over-determined) set of equations used to solve `c` and `d`
    // (1)   r1 = c*p1       => c = r1/p1
    // (2)   r0 = d*p1 + p0  => d = (r0 - p0)/p1
    //---------------
    // Calculate `d`
    //---------------
    // (1)   d = (r0 - p0)/p1
    // the *exact* `d` is given as the rational number `N/D`
    // where `N` and `D` are [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf) expansions
    return [eDiff(r0, p0), p1];
}

//# sourceMappingURL=get-transform-1.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/get-endpoint-intersections/get-ab1.js


/** @internal */
const getAB1 = getAB(getTransform1);

//# sourceMappingURL=get-ab1.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/get-endpoint-intersections/er-compare.js

/**
 * Compares two expansion rationals.
 *
 * @internal
 */
function erCompare(a, b) {
    return (eCompare(eMult(a[0], b[1]), eMult(a[1], b[0])) *
        e_sign_eSign(a[1]) *
        e_sign_eSign(b[1]));
}

//# sourceMappingURL=er-compare.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/scale-to-int/scale-floatss-to-bigintss.js


// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗ Otherwise code is too slow❗
const scale_floatss_to_bigintss_exponent = exponent_exponent;
const scale_floatss_to_bigintss_bitLength = bit_length_bitLength;
const b0 = 0n; // so tests are not tripped up - awaiting better support
/**
 * Returns the result of scaling the given array of array of floats by the
 * *same* power of two such that all floats become bigints.
 *
 * * can be used to scale polynomials (with coefficients given as Shewchuk
 * expansions)
 *
 * @param ass an array of an array of double precision floating point numbers
 *
 * @doc
 */
function scaleFloatssToBigintss(ass) {
    let e = -1024;
    for (let i = 0; i < ass.length; i++) {
        const c = ass[i];
        for (let j = 0; j < c.length; j++) {
            const a = c[j];
            if (a === 0) {
                continue;
            }
            const scaleFactor = -scale_floatss_to_bigintss_exponent(a) + scale_floatss_to_bigintss_bitLength(a) - 1;
            if (scaleFactor > e) {
                e = scaleFactor;
            }
        }
    }
    // check for the trivial case
    if (e === 0) {
        return ass.map(as => as.map(a => BigInt(a)));
    }
    if (e > 0) {
        return ass.map(as => as.map(a => {
            if (a === 0) {
                return b0;
            }
            const scalePower = -scale_floatss_to_bigintss_exponent(a) + scale_floatss_to_bigintss_bitLength(a) - 1;
            // we first scale `a` to an integer without overflow and then
            // convert it to a bigint before multiplying
            return BigInt(a * 2 ** scalePower) * 2n ** BigInt(e - scalePower);
        }));
    }
    // overflow / underflow cannot occur
    return ass.map(as => as.map(a => BigInt(a * 2 ** e)));
}

//# sourceMappingURL=scale-floatss-to-bigintss.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/gcd/bigint/b-integer-gcd.js
/**
 * Computes and returns the greatest common divisor of two integers a and b,
 * using the [Euclidean Algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm).
 *
 * @doc
 */
function bGcdInt(a, b) {
    a = a < 0n ? -a : a;
    b = b < 0n ? -b : b;
    // The below 2 commented lines represent Euclid's original algorithm.
    //if (a === b) { return a; }
    //return a > b ? gcdInt(a - b, b) : gcdInt(a, b - a);
    if (a === 0n) {
        return b;
    }
    if (b === 0n) {
        return a;
    }
    while (b !== 0n) {
        const t = b;
        b = a % b;
        a = t;
    }
    return a;
}
/**
 * Naively computes and returns the greatest common divisor of 2 or more
 * integers by taking each integer in turn and calculating the GCD of that
 * integer and the previously calculated GCD (where the first GCD is simply
 * taken as the first number).
 *
 * @param vals the integers for which the GCD is to be calculated
 *
 * @doc
 */
function bGcdInts(vals) {
    const vals_ = vals.slice();
    const len = vals_.length;
    // make array of numbers all positive
    for (let i = 0; i < len; i++) {
        vals_[i] = vals_[i] < 0n ? -vals_[i] : vals_[i];
    }
    let a = vals_[0];
    for (let i = 1; i < len; i++) {
        a = bGcdInt(a, vals_[i]);
    }
    return a;
}
/**
 * * ❗ don't use - too slow - use [[bGcdInts]] instead ❗
 *
 * Computes and returns the greatest common divisor of 2 or more integers by
 * calculating GCDs rescursively using a tree (Divide and Conquer).
 *
 * * It turns out this method is *slower* than the naive method
 */ /*
function bGcdIntsTree(vals: bigint[]): bigint {
   const vals_ = vals.slice();

   // make array of numbers all positive
   for (const i=0; i<vals_.length; i++) {
       vals_[i] = vals_[i] < 0n ? -vals_[i] : vals_[i];
   }
   
   // Divide and conquer
   while (vals_.length > 1) {
       const newVals = [];
       const len = vals_.length;
       for (const i=0; i<len-1; i += 2) {
           newVals.push(bGcdInt(vals_[i], vals_[i+1]));
       }
       if (len % 2 !== 0) {
           newVals.push(vals_[len-1]);
       }

       vals_ = newVals;
   }
   
   return vals_[0];
}
*/

//# sourceMappingURL=b-integer-gcd.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/get-endpoint-intersections/bigint-to-expansion.js

const maxSafe = BigInt(2 ** 53);
/**
 * Returns the [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf) expansion of the given bigint.
 *
 * * it is assumed that the given bigint doesn't cause floating point overflow
 *
 * @internal
 */
function bigintToExpansion(b) {
    if (b === 0n) {
        return [0];
    }
    const e = [];
    let i = 0;
    let q = b;
    while (q !== 0n) {
        q = b / maxSafe;
        const r = b % maxSafe;
        e.push(Number(r) * 2 ** (i * 53));
        b = q;
        i++;
    }
    return e_compress_eCompress(e);
}

//# sourceMappingURL=bigint-to-expansion.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/get-endpoint-intersections/b-sqrt.js
const { round, sqrt: b_sqrt_sqrt } = Math;
/**
 * Returns the square root of a bigint.
 *
 * * see https://stackoverflow.com/a/53684036/2010061
 *
 * * **precondition**: the given bigint must be a perfect square
 *
 * @internal
 */
function bSqrt(v) {
    if (v <= 1n) {
        if (v < 0n) {
            throw new Error('square root of negative numbers are not allowed');
        }
        return v;
    }
    let x0 = BigInt(round(b_sqrt_sqrt(Number(v))));
    while (true) {
        const x1 = (x0 + v / x0) >> 1n;
        if (x1 === x0) {
            return x0;
        }
        x0 = x1;
    }
}

//# sourceMappingURL=b-sqrt.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/get-endpoint-intersections/b-abs.js
/** @internal */
function bAbs(n) {
    return n < 0n ? -n : n;
}

//# sourceMappingURL=b-abs.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/get-endpoint-intersections/sum-bigints.js
/** @internal */
function sumBigints(vs) {
    let total = 0n;
    for (let i = 0; i < vs.length; i++) {
        total += vs[i];
    }
    return total;
}

//# sourceMappingURL=sum-bigints.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/get-endpoint-intersections/calc-exact-square-root.js





/**
 * * **precondition**: the given value must be a perfect square
 *
 * @param a the rational value for which the square root is sought given as
 * `[N,D]` to represent the value `N/D` where `N` and `D` are [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 * expansions
 *
 * @internal
 */
function calcExactSquareRoot(a) {
    const [NN, DD] = scaleFloatssToBigintss(a).map(sumBigints);
    const gcd = bGcdInt(NN, DD);
    // the *exact* positive root `c` is given as the rational number `N/D` 
    // where `N` and `D` are [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf) expansions
    const N = bigintToExpansion(bSqrt(bAbs(NN / gcd)));
    const D = bigintToExpansion(bSqrt(bAbs(DD / gcd)));
    return [N, D];
}

//# sourceMappingURL=calc-exact-square-root.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/get-endpoint-intersections/get-transform-2.js



/** @internal */
function getTransform2(xyA, xyB) {
    const [D1x, D2x] = getTransformedTs2(xyA[0], xyB[0]);
    const [D1y, D2y] = getTransformedTs2(xyA[1], xyB[1]);
    if (erCompare(D1x, D1y) === 0 ||
        erCompare(D1x, D2y) === 0) {
        return D1x;
    }
    if (erCompare(D2x, D1y) === 0 ||
        erCompare(D2x, D2y) === 0) {
        return D2x;
    }
    throw new Error('An unexpected error occured.');
}
/**
 * @param A A coordinate (x or y) of a bezier curve in power basis
 * @param B A coordinate (x or y) of another bezier curve in power basis
 *
 * @internal
 */
function getTransformedTs2(A, B) {
    const [p2, p1] = A;
    const [r2, r1] = B;
    // The (over-determined) set of equations used to solve `c` and `d`
    // (1)   r2 = cc*p2
    // (2)   r1 = c*p1 + 2*c*d*p2
    // (3)   r0 = dd*p2 + d*p1 + p0
    // Note that since `r2,r1,r0,p2,p1,p0` are rational we must have 
    // (non-trivially) that `c` is rational and thus `d` also rational.
    //-----------------------------------
    // Calculate `c` *exactly* using (1)
    //-----------------------------------
    // the *exact* positive root `c` is given as the rational number `N/D` 
    // where `N` and `D` are [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf) expansions
    const [N, D] = calcExactSquareRoot([r2, p2]);
    //-----------------------------------
    // Calculate `d` *exactly* using (2)
    //-----------------------------------
    // (2)   r1 = c*p1 + 2*c*d*p2  =>
    //       r1 = c*(p1 + 2*d*p2)  =>
    // dA = (r1/c - p1)/(2*p2)
    //    = r1/(c*2*p2) - c*p1/(c*2*p2)
    //    = (r1 - c*p1)/(c*2*p2)
    //    = (r1 - N*p1/D)/(N*2*p2/D)
    //    = (D*r1 - N*p1)/(N*2*p2)
    // dB = (r1/(-c) - p1)/(2*p2)
    //    = r1/(-c*2*p2) - c*p1/(c*2*p2)
    //    = (-r1 - c*p1)/(c*2*p2)
    //    = (-r1 - N*p1/D)/(N*2*p2/D)
    //    = (-r1*D - N*p1)/(N*2*p2)
    return [
        [eDiff(eMult(r1, D), eMult(p1, N)), eMult(N, eMultBy2(p2))],
        [eDiff(eMult(r1, eNegativeOf(D)), eMult(p1, N)), eMult(N, eMultBy2(p2))]
    ].sort(erCompare);
}

//# sourceMappingURL=get-transform-2.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/get-endpoint-intersections/get-ab2.js





/** @internal */
function getAB2(psA, psB) {
    const _xyA = toPowerBasisExact(psA);
    // Both `_xyB[0][0]` and `_xyB[1][0]` can't be zero else we would have had
    // a lower order bezier curve. Also, if `_xyB[0][0]` is zero 
    // then `_xyA[0][0]` will also be zero (and same with the y coordinate)
    const coord = e_sign_eSign(_xyA[0][0]) === 0 ? 0 : e_sign_eSign(_xyA[1][0]) === 0 ? 1 : -1;
    if (coord !== -1) {
        const psA0c = psA[0][coord];
        const psA2c = psA[2][coord];
        const psB0c = psB[0][coord];
        const psB2c = psB[2][coord];
        return getAB1([[psA0c, psA0c], [psA2c, psA2c]], [[psB0c, psB0c], [psB2c, psB2c]]);
    }
    return getAB(getTransform2)(psA, psB);
}

//# sourceMappingURL=get-ab2.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/get-endpoint-intersections/b-sign.js
/** @internal */
function bSign(v) {
    return v > 0n ? 1n : v < 0n ? -1n : 0n;
}

//# sourceMappingURL=b-sign.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/get-endpoint-intersections/b-cbrt.js


const { round: b_cbrt_round, cbrt } = Math;
/**
 * Returns the cube root of a bigint.
 *
 * * see https://stackoverflow.com/a/53684036/2010061
 *
 * * **precondition**: the given bigint must be a perfect cube
 *
 * @internal
 */
function bCbrt(n) {
    const sgn = bSign(n);
    n = bAbs(n);
    if (n <= 1n) {
        return sgn * n;
    }
    let x0 = BigInt(b_cbrt_round(cbrt(Number(n))));
    while (true) {
        const x1 = (2n * x0 + n / (x0 * x0)) / 3n;
        if (x1 === x0) {
            return sgn * x0;
        }
        x0 = x1;
    }
}

//# sourceMappingURL=b-cbrt.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/get-endpoint-intersections/calc-exact-cube-root.js




/**
 * * **precondition**: the given value must be a perfect cube
 *
 * @param a the rational value for which the square root is sought given as
 * `[N,D]` to represent the value `N/D` where `N` and `D` are [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 * expansions
 *
 * @internal
 */
function calcExactCubeRoot(a) {
    const [NN, DD] = scaleFloatssToBigintss(a).map(sumBigints);
    const gcd = bGcdInt(NN, DD);
    // the *exact* positive root `c` is given as the rational number `N/D` 
    // where `N` and `D` are [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf) expansions
    const N = bigintToExpansion(bCbrt(NN / gcd));
    const D = bigintToExpansion(bCbrt(DD / gcd));
    return [N, D];
}

//# sourceMappingURL=calc-exact-cube-root.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/get-endpoint-intersections/get-transform-3.js


/** @internal */
function getTransform3(xyA, xyB) {
    // Both `_xyB[0][0]` and `_xyB[1][0]` can't be zero else we would have had
    // a lower order bezier curve. Also, if `_xyB[0][0]` is zero 
    // then `_xyA[0][0]` will also be zero (and same with the y coordinate)
    const coord = e_sign_eSign(xyA[0][0]) === 0 ? 1 : 0;
    const xyA_ = xyA[coord];
    const xyB_ = xyB[coord];
    return getTransformedTs3(xyA_, xyB_);
}
/**
 * Given two algebraically identical bezier curves (but with possibly different
 * endpoints) return the transformation parameters (the `c` and `d` in
 * `t = cx + d`) for transforming the second curve into the first so that it has
 * exactly the same control points but such that the parameter `t` values run
 * from `t0` to `t1` where `t0` and `t1` can be obtained via `t0 = -d/c`
 * and `t1 = (1 - d)/c` (or in reverse: `t0_ = d` and `t1_ = c + d`).
 *
 * * **precondition**: the given pair of bezier curves must be algebraically
 * identical, e.g. `ps = [[1,1],[2,2],[3,2],[3,-1]]`
 * and `ps_ = [[-1,-21],[-3.25,-29.25],[-6.625,-40.3125],[-11.546875,-55.03125]]`
 *
 * * **precondition**: the given pair of bezier curves are in lowest possible
 * order
 *
 * @internal
 */
function getTransformedTs3(A, B) {
    const [p3, p2] = A;
    const [r3, r2] = B;
    // The (over-determined) set of equations used to solve `c` and `d`
    // (1)   r3 = p3*ccc
    // (2)   r2 = 3*cc*p3*d + cc*p2
    // (3)   r1 = 3*c*p3*dd + 2*c*p2*d + c*p1
    // (4)   r0 = p3*ddd + p2*dd + p1*d + p0
    //-------------------------
    // Calculate `c` *exactly*
    //-------------------------
    const C = calcExactCubeRoot([r3, p3]);
    //-------------------------
    // Calculate `d` *exactly*
    //-------------------------
    // (2)   3*cc*p3*d + cc*p2 = r2
    //  =>   d = (r2/cc - p2)/(3*p3)
    const NN = eSquare(C[0]);
    return [
        eDiff(eMult(r2, eSquare(C[1])), eMult(p2, NN)),
        eMult(scaleExpansion2(3, p3), NN)
    ];
}
/** @internal */
function eSquare(v) {
    return eMult(v, v);
}

//# sourceMappingURL=get-transform-3.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/get-endpoint-intersections/get-ab3.js


/** @internal */
const getAB3 = getAB(getTransform3);

//# sourceMappingURL=get-ab3.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/sub-1-ulp.js
const { EPSILON: sub_1_ulp_eps } = Number;
const sub_1_ulp_u = sub_1_ulp_eps / 2;
const es = (sub_1_ulp_eps ** 2) / 2;
const ups = sub_1_ulp_u + es;
/**
 * Subtract one unit in the last place (ulp) from the given number
 *
 * * subnormal numbers (and 0) are returned unaltered
 * @internal
 */
function sub1Ulp(n) {
    return n > 0 ? n - n * ups : n + n * ups;
}

//# sourceMappingURL=sub-1-ulp.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/add-1-ulp.js
const { EPSILON: add_1_ulp_eps } = Number;
const add_1_ulp_u = add_1_ulp_eps / 2;
const add_1_ulp_es = (add_1_ulp_eps ** 2) / 2;
const add_1_ulp_ups = add_1_ulp_u + add_1_ulp_es;
/**
 * Add one unit in the last place (ulp) to the given number
 *
 * * subnormal numbers (and 0) are returned unaltered
 * @internal
 */
function add1Ulp(n) {
    return n > 0 ? n + n * add_1_ulp_ups : n - n * add_1_ulp_ups;
}

//# sourceMappingURL=add-1-ulp.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/get-endpoint-intersections/get-endpoint-intersections.js










/**
 * Returns the intersection range (given as 2 intersections (`X`s)) where the
 * endpoints of the two given *algebraically identical* curves
 * overlap (provided they overlap, else an empty array is returned).
 *
 * * **precondition:** the two given curves must be *algebraically identical*
 * (i.e. identical except possibly for endpoints)
 *
 * * **precondition**: not all bezier control points collinear
 *
 * @param psA an order 1,2 or 3 bezier curve
 * @param psB another bezier curve
 *
 * @internal but still exported for backwards compatibility
 */
function getEndpointIntersections(psA, psB, orderAlreadyReduced = false) {
    if (!orderAlreadyReduced) {
        psA = reduceOrderIfPossible(psA);
        psB = reduceOrderIfPossible(psB);
    }
    // `psB.length` should equal `psB.length` (due to precondition)
    const getABs = [, , getAB1, getAB2, getAB3];
    const [tA_B0, tA_B1] = getABs[psA.length](psA, psB);
    const [tB_A0, tB_A1] = getABs[psA.length](psB, psA);
    //------------------------------------------------
    // Perform a simple unrolled sweep line algorithm
    //------------------------------------------------
    const infos = [
        { tA: tA_B0, tB: 0, bez: 'B', start: true },
        { tA: tA_B1, tB: 1, bez: 'B', start: false },
        { tA: 0, tB: tB_A0, bez: 'A', start: true },
        { tA: 1, tB: tB_A1, bez: 'A', start: false }
    ].sort((a, b) => a.tA - b.tA);
    if (infos[1].tA === infos[2].tA) {
        const info = infos[1];
        const tA = info.tA; // `tA` will be either exactly `0` or exactly `1`
        const tB = info.tB; // `tB` will be either exactly `0` or exactly `1`
        const box = getIntervalBox(psA, [tA, tA]);
        return [{
                p: box[0], kind: 4, box,
                t1: tA, ri1: { tS: tA, tE: tA, multiplicity: 1 },
                t2: tB, ri2: { tS: tB, tE: tB, multiplicity: 1 }
            }];
    }
    if (infos[0].bez === infos[1].bez) {
        return [];
    }
    const start = infos[1];
    const end = infos[2];
    const [tSAMin, tSAMax] = getMinMaxT(start.tA);
    const [tSBMin, tSBMax] = getMinMaxT(start.tB);
    const [tEAMin, tEAMax] = getMinMaxT(end.tA);
    const [tEBMin, tEBMax] = getMinMaxT(end.tB);
    const boxSA = getIntervalBox(psA, [tSAMin, tSAMax]);
    const boxSB = getIntervalBox(psB, [tSBMin, tSBMax]);
    const boxEA = getIntervalBox(psA, [tEAMin, tEAMax]);
    const boxEB = getIntervalBox(psB, [tEBMin, tEBMax]);
    const boxS = intersectBoxes(boxSA, boxSB);
    const boxE = intersectBoxes(boxEA, boxEB);
    const riSA = { tS: tSAMin, tE: tSAMax, multiplicity: 1 };
    const riSB = { tS: tSBMin, tE: tSBMax, multiplicity: 1 };
    const riEA = { tS: tEAMin, tE: tEAMax, multiplicity: 1 };
    const riEB = { tS: tEBMin, tE: tEBMax, multiplicity: 1 };
    return [
        {
            p: getPFromBox(boxS), kind: 5, box: boxS,
            t1: mid(riSA), ri1: riSA,
            t2: mid(riSB), ri2: riSB
        }, {
            p: getPFromBox(boxE), kind: 5, box: boxE,
            t1: mid(riEA), ri1: riEA,
            t2: mid(riEB), ri2: riEB
        }
    ];
}
/** @internal */
function sub2Ulp(v) {
    return sub1Ulp(sub1Ulp(v));
}
/** @internal */
function add2Ulp(v) {
    return add1Ulp(add1Ulp(v));
}
/** @internal */
function getMinMaxT(t) {
    if (t === 0 || t === 1) {
        return [t, t];
    }
    const tMin = sub2Ulp(t);
    const tMax = add2Ulp(t);
    return [tMin, tMax];
}

//# sourceMappingURL=get-endpoint-intersections.js.map
;// CONCATENATED MODULE: ./src/get-critical-points/get-intersection.ts


/**
 *
 * @param curveA
 * @param curveB
 * @param expMax
 * @param isANextB is curveB the next curve after curveA, i.e. is A's next B
 */
function getIntersection(curveA, curveB, expMax, isANextB) {
    const ps1 = curveA.ps;
    const ps2 = curveB.ps;
    const xs = [];
    let ris2 = bezierBezierIntersectionBoundless(ps1, ps2);
    if (ris2 === undefined) {
        // the curves have an infinte number of intersections
        // some reasonable error bound -> to be fine-tuned, but cannot
        // break the algorithm (unless its too small), only make it run slower.
        const errBound = 2 ** (expMax - 47);
        const xPairs = getEndpointIntersections(ps1, ps2);
        for (const xPair of xPairs) {
            const p1 = evalDeCasteljau(ps1, xPair.ri1.tS);
            const box = [
                [p1[0] - errBound, p1[1] - errBound],
                [p1[0] + errBound, p1[1] + errBound],
            ];
            const ri1 = { x: { ri: xPair.ri1, kind: 5, box }, curve: curveA }; // exact overlap endpoint
            const ri2 = { x: { ri: xPair.ri2, kind: 5, box }, curve: curveB }; // exact overlap endpoint
            xs.push([ri1, ri2]);
        }
        return xs;
    }
    if (isANextB) {
        // we are not interested in zero t values (they are interface points)
        ris2 = ris2.filter(t => t.tS > 0);
    }
    if (ris2.length === 0) {
        return [];
    }
    const xPairs = getOtherTs(ps1, ps2, ris2);
    if (xPairs === undefined || xPairs.length === 0) {
        return [];
    }
    for (const xPair of xPairs) {
        const x1 = { x: xPair[0], curve: curveA };
        const x2 = { x: xPair[1], curve: curveB };
        xs.push([x1, x2]);
    }
    return xs;
}


;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/local-properties-at-t/evaluate/double/eval-de-casteljau-with-err.js



// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗
const eval_de_casteljau_with_err_evalDeCasteljau = evalDeCasteljau;
const eval_de_casteljau_with_err_evalDeCasteljauError = evalDeCasteljauError;
const eval_de_casteljau_with_err_1 = error_analysis_(1);
/**
 * Returns the resulting point of evaluating the given bezier curve at the given
 * parameter `t` including a coordinate-wise error bound.
 *
 * * uses [De Casteljau's algorithm](https://en.wikipedia.org/wiki/De_Casteljau%27s_algorithm)
 * in double precision floating point arithmetic
 *
 * The resulting point is returned as `{ p: number[], pE: number[] }`,
 * where `p` is the point `[x,y]` and `pE` is the corresponding coordinate-wise
 * absolute error bound of the calculation.
 *
 * @param ps an order 1,2 or 3 bezier curve, e.g. `[[0,0],[1,1],[2,1],[2,0]]`
 * @param t the parameter value where the bezier should be evaluated
 *
 * @doc mdx
 **/
function evalDeCasteljauWithErr(ps, t) {
    const p = eval_de_casteljau_with_err_evalDeCasteljau(ps, t);
    const pE = eval_de_casteljau_with_err_evalDeCasteljauError(ps, [0, t]);
    if (ps.length === 4) {
        return { p, pE: pE.map(e => 9 * eval_de_casteljau_with_err_1 * e) };
    }
    if (ps.length === 3) {
        return { p, pE: pE.map(e => 6 * eval_de_casteljau_with_err_1 * e) };
    }
    if (ps.length === 2) {
        return { p, pE: pE.map(e => 3 * eval_de_casteljau_with_err_1 * e) };
    }
    if (ps.length === 1) {
        return { p: ps[0], pE: [0, 0] };
    }
    throw new Error('The given bezier curve must be of order <= 3.');
}

//# sourceMappingURL=eval-de-casteljau-with-err.js.map
;// CONCATENATED MODULE: ./src/get-critical-points/make-simple-x.ts

/**
 *
 * @param t
 * @param curve
 * @param kind
 */
function makeSimpleX(t, curve, kind) {
    const ps = curve.ps;
    if (t === 0) {
        // we have the exact point
        const pS = ps[0];
        const box = [ps[0], ps[0]];
        return { x: { ri: { tS: t, tE: t, multiplicity: 1 }, box, kind }, curve };
    }
    else if (t === 1) {
        // we have the exact point
        const pE = ps[ps.length - 1];
        const box = [pE, pE];
        return { x: { ri: { tS: t, tE: t, multiplicity: 1 }, box, kind }, curve };
    }
    // there will be some error in calculating the point
    const { p, pE } = evalDeCasteljauWithErr(ps, t);
    const box = [
        [p[0] - pE[0], p[1] - pE[1]],
        [p[0] + pE[0], p[1] + pE[1]]
    ];
    return { x: { ri: { tS: t, tE: t, multiplicity: 1 }, box, kind }, curve };
}


;// CONCATENATED MODULE: ./src/get-critical-points/get-curves-intersections.ts










/**
 * Returns the pairs of intersection `t` values between the curves. Interface
 * intersections may not be returned - they should already be caught.
 *
 * @param curveA
 * @param curveB
 */
function getCurvesIntersections(expMax) {
    return (curveA, curveB) => {
        const psA = curveA.ps;
        const psB = curveB.ps;
        if (psA.length === 2 && psB.length === 2) {
            return getLineLineIntersections(curveA, curveB, expMax);
        }
        if (curveA.next === curveB || curveB.next === curveA) {
            // curves are connected at endpoints
            // closed bounding boxes are guaranteed to intersect - don't check
            // check open bounding boxes
            const aabbsIntersectOpen = areBoxesIntersecting(false, 
            // const aabbsIntersectOpen = areBoxesIntersecting(true,
            getBoundingBox_(psA), getBoundingBox_(psB));
            if (!aabbsIntersectOpen) {
                return checkEndpoints(curveA, curveB);
            }
            // check open bounding hulls
            const bbHullA = getBoundingHull(psA);
            const bbHullB = getBoundingHull(psB);
            const hullsIntersectOpen = doConvexPolygonsIntersect(bbHullA, bbHullB, false);
            if (!hullsIntersectOpen) {
                return checkEndpoints(curveA, curveB);
            }
            // neither aabbs nor hulls can split the curves
            return curveB.next === curveA
                ? getIntersection(curveB, curveA, expMax, true) // B-->A
                : getIntersection(curveA, curveB, expMax, true); // A-->B
        }
        // curves are not connected at endpoints
        // check closed bounding boxes
        let possiblyIntersecting = areBoxesIntersecting(true, getBoundingBox_(psA), getBoundingBox_(psB));
        if (!possiblyIntersecting) {
            return undefined;
        }
        // check closed bounding hulls
        const bbHullA = getBoundingHull(psA);
        const bbHullB = getBoundingHull(psB);
        possiblyIntersecting = doConvexPolygonsIntersect(bbHullA, bbHullB, true);
        if (!possiblyIntersecting) {
            return undefined;
        }
        return getIntersection(curveA, curveB, expMax, false);
    };
}
/**
 * Returns an un-ordered pair of intersections (excluding interface intersections,
 * in which case `undefined` is returned) between curveA and curveB.
 *
 * * **precondition:** curveA.next === curveB || curveB.next === curveA
 * * **precondition:** every intersection will be at an endpoint of at least
 * one of the curves
 *
 * @param curveA
 * @param curveB
 */
function checkEndpoints(curveA, curveB) {
    if (curveB.next === curveA) {
        if (curveA.next === curveB) {
            // if this is a very simple loop with only 2 beziers in it
            return undefined;
        }
        // else swap the curves to make the algorithm simpler
        [curveA, curveB] = [curveB, curveA];
    }
    // At this point A-->B (curveA's next === curveB)
    // There is thus an intersection at curveA(t=1) and curveB(t=0)
    const psA = curveA.ps;
    const psB = curveB.ps;
    // Is last point (i.e. at `t` === 1) of curveB on curveA?
    // if (isPointOnBezierExtension(psA, psB[psB.length-1])) {
    if (isPointOnBezierExtension(psA, psB[psB.length - 1].map(c => [c]))) {
        // Check if they are in same k family (this *is* necessary for two curves
        // in same k-family joined end to end, e.g. ---A--->|---B---> in which
        // case ...)
        const xPairs = getOtherTs(psA, psB, [createRootExact(1)]);
        if (xPairs === undefined || xPairs.length === 0) {
            return undefined;
        }
        const xPair = xPairs[0];
        return [[
                { x: xPair[0], curve: curveA },
                makeSimpleX(1, curveB, 1)
            ]];
    }
}
function getLineLineIntersections(curveA, curveB, expMax) {
    let psA = curveA.ps;
    let psB = curveB.ps;
    const bbA = getBoundingBox_(psA);
    const bbB = getBoundingBox_(psB);
    // if (equal(psA,[[4,8],[4,7]]) && equal(psB,[[4,6],[4,8]])) {
    //     console.log('testing');
    // }
    if (curveA.next !== curveB && curveB.next !== curveA) {
        // the two line curves are not consecutive in the loop
        if (areBoxesIntersecting(true, bbA, bbB)) {
            const xs = getIntersection(curveA, curveB, expMax, false);
            return xs.length ? xs : undefined;
        }
        return undefined;
    }
    // the two line curves are consecutive in the loop
    const swap = curveB.next === curveA;
    if (swap) {
        [curveA, curveB] = [curveB, curveA];
        [psA, psB] = [psB, psA];
    }
    const orientation = orient2d_orient2d(psA[0], psA[1], psB[1]);
    if (orientation !== 0) {
        // they cannot intersect
        return undefined;
    }
    // they are in the same k family - they can either go in the
    // same direction or go back on top of each other
    // if going in same direction
    if (!areBoxesIntersecting(false, bbA, bbB)) {
        // they cannot intersect
        return undefined;
    }
    // it is a line going back on itself 
    // - return endpoint intersections
    const lenCurveA = squared_distance_between_squaredDistanceBetween(psA[0], psA[1]);
    const lenCurveB = squared_distance_between_squaredDistanceBetween(psB[0], psB[1]);
    let tPair;
    if (lenCurveA > lenCurveB) {
        const t0 = mid(closestPointOnBezierCertified(psA, psB[1])[0].ri);
        tPair = [t0, 1];
    }
    else {
        const t1 = mid(closestPointOnBezierCertified(psB, psA[0])[0].ri);
        tPair = [0, t1];
    }
    return [[
            makeSimpleX(1, curveA, 5),
            makeSimpleX(0, curveB, 5), // exact overlap endpoint
        ], [
            makeSimpleX(tPair[0], curveA, 5),
            makeSimpleX(tPair[1], curveB, 5) // exact overlap endpoint
        ]];
}


;// CONCATENATED MODULE: ./src/get-critical-points/get-intersections.ts



/**
 * Find and return all one-sided intersections on all given loops as a map from
 * each curve to an array of intersections on the curve, ordered by t value.
 * @param loops
 */
function getIntersections(loops, expMax) {
    const curves = [];
    for (const loop of loops) {
        for (const curve of loop.curves) {
            curves.push(curve);
        }
    }
    // Filter curves so that we eliminate those that can definitely not intersect
    const _xs = sweepLine(curves, curve => getBoundingBox_(curve.ps)[0][0], curve => getBoundingBox_(curve.ps)[1][0], getCurvesIntersections(expMax));
    const xs = [];
    for (const _x of _xs) {
        for (const x of _x.u) {
            xs.push(x);
        }
    }
    return xs;
}


;// CONCATENATED MODULE: ./src/get-critical-points/set-intersection-next-values.ts
/**
 * Set each intersection on the given original loop's `next` and `prev` value.
 *
 * @param xPairs
 */
function setIntersectionNextValues(xPairs) {
    const xsByLoop = new Map();
    for (const xPair of xPairs) {
        for (const x_ of xPair) {
            const loop = x_.curve.loop;
            const xs_ = xsByLoop.get(loop) || [];
            if (!xs_.length) {
                xsByLoop.set(loop, xs_);
            }
            xs_.push(x_);
        }
    }
    for (const item of xsByLoop) {
        const xs = item[1];
        if (!xs || !xs.length) {
            continue;
        }
        xs.sort((xA, xB) => {
            let res = xA.curve.idx - xB.curve.idx;
            if (res !== 0) {
                return res;
            }
            res = xA.x.ri.tS - xB.x.ri.tS;
            if (res !== 0) {
                return res;
            }
            return xA.in_ !== undefined ? -1 : +1;
        });
        const len = xs.length;
        for (let i = 0; i < len; i++) {
            xs[i].next = xs[(i + 1) % len];
        }
    }
}


;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/to-power-basis/to-power-basis/double/to-power-basis-with-running-error.js
const to_power_basis_with_running_error_abs = Math.abs;
/**
 * Returns the power basis representation of a bezier curve of order cubic or
 * less including a coefficient-wise absolute error bound.
 *
 * * intermediate calculations are done in double precision
 * * the error bound need to be multiplied by `γ(1) === u/(1-u)`
 * where `u = Number.EPSILON/2` before use
 * * returns the resulting power basis x and y coordinate polynomials from
 * highest power to lowest, e.g. if `x(t) = at^2 + bt + c`
 * and `y(t) = dt^2 + et + f` then  the result is returned
 * as `[[a,b,c],[d,e,f]]`
 *
 * @param ps an order 0,1,2 or 3 bezier curve given by an ordered array of its
 * control points, e.g. `[[0,0],[1,1],[2,1],[2,0]]`
 *
 * @doc
 */
function toPowerBasisWithRunningError(ps) {
    if (ps.length === 4) {
        return toPowerBasis3WithRunningError(ps);
    }
    if (ps.length === 3) {
        return toPowerBasis2WithRunningError(ps);
    }
    if (ps.length === 2) {
        return toPowerBasis1WithRunningError(ps);
    }
    if (ps.length === 1) {
        return toPowerBasis0WithRunningError(ps);
    }
    throw new Error('The given bezier curve must be of order <= 3.');
}
/** @internal */
function toPowerBasis3WithRunningError(ps) {
    const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;
    // ----------------------------
    // xx3 = (x3 - x0) + 3*(x1 - x2)
    // ----------------------------
    const xa = x3 - x0;
    const _xa_ = to_power_basis_with_running_error_abs(xa);
    const xb = x1 - x2;
    const _xb_ = to_power_basis_with_running_error_abs(xb);
    const xc = 3 * xb;
    const xc_ = 6 * _xb_; // === 3*_xb_ + 3*abs(xc)
    const xx3 = xa + xc;
    const xx3_ = _xa_ + xc_ + to_power_basis_with_running_error_abs(xx3);
    // ----------------------------
    // xx2 = 3*((x2 + x0) - 2*x1)
    // ----------------------------
    const xd = x2 + x0;
    const _xd_ = to_power_basis_with_running_error_abs(xd);
    const xe = xd - 2 * x1;
    const _xe_ = _xd_ + to_power_basis_with_running_error_abs(xe);
    const xx2 = 3 * xe;
    const xx2_ = 6 * _xe_; // 3*_xe_ + abs(xx2)
    // ----------------------------
    // xx1 = 3*(x1 - x0)
    // ----------------------------
    const xg = x1 - x0;
    const _xg_ = to_power_basis_with_running_error_abs(xg);
    const xx1 = 3 * xg;
    const xx1_ = 6 * _xg_; // 3*_xg_ + abs(3*xg)
    // ------------------------------
    // yy3 = (y3 - y0) + 3*(y1 - y2)
    // ------------------------------
    const ya = y3 - y0;
    const _ya_ = to_power_basis_with_running_error_abs(ya);
    const yb = y1 - y2;
    const _yb_ = to_power_basis_with_running_error_abs(yb);
    const yc = 3 * yb;
    const yc_ = 6 * _yb_; // === 3*_yb_ + 3*abs(yc)
    const yy3 = ya + yc;
    const yy3_ = _ya_ + yc_ + to_power_basis_with_running_error_abs(yy3);
    // ----------------------------
    // yy2 = 3*((y2 + y0) - 2*y1)
    // ----------------------------
    const yd = y2 + y0;
    const _yd_ = to_power_basis_with_running_error_abs(yd);
    const ye = yd - 2 * y1;
    const _ye_ = _yd_ + to_power_basis_with_running_error_abs(ye);
    const yy2 = 3 * ye;
    const yy2_ = 6 * _ye_; // 3*_ye_ + abs(yy2)
    // ----------------------------
    // yy1 = 3*(y1 - y0)
    // ----------------------------
    const yg = y1 - y0;
    const _yg_ = to_power_basis_with_running_error_abs(yg);
    const yy1 = 3 * yg;
    const yy1_ = 6 * _yg_; // 3*_yg_ + abs(3*yg)
    return {
        coeffs: [[xx3, xx2, xx1, x0], [yy3, yy2, yy1, y0]],
        errorBound: [[xx3_, xx2_, xx1_, 0], [yy3_, yy2_, yy1_, 0]]
    };
}
/** @internal */
function toPowerBasis2WithRunningError(ps) {
    const [[x0, y0], [x1, y1], [x2, y2]] = ps;
    // ---------------------
    // xx2 = (x2 + x0) - 2*x1
    // ---------------------
    const xa = x2 + x0;
    const _xa_ = to_power_basis_with_running_error_abs(xa);
    const xx2 = xa - 2 * x1;
    const xx2_ = _xa_ + to_power_basis_with_running_error_abs(xx2);
    // ---------------------
    // xx1 = 2*(x1 - x0)
    // ---------------------
    const xx1 = 2 * (x1 - x0);
    const xx1_ = to_power_basis_with_running_error_abs(xx1);
    // ---------------------
    // yy2 = (y2 + y0) - 2*y1
    // ---------------------
    const ya = y2 + y0;
    const _ya_ = to_power_basis_with_running_error_abs(ya);
    const yy2 = ya - 2 * y1;
    const yy2_ = _ya_ + to_power_basis_with_running_error_abs(yy2);
    // ---------------------
    // yy1 = 2*(y1 - y0)
    // ---------------------
    const yy1 = 2 * (y1 - y0);
    const yy1_ = to_power_basis_with_running_error_abs(yy1);
    return {
        coeffs: [[xx2, xx1, x0], [yy2, yy1, y0]],
        errorBound: [[xx2_, xx1_, 0], [yy2_, yy1_, 0]]
    };
}
/** @internal */
function toPowerBasis1WithRunningError(ps) {
    const [[x0, y0], [x1, y1]] = ps;
    const xx1 = x1 - x0;
    const xx1_ = to_power_basis_with_running_error_abs(xx1);
    const yy1 = y1 - y0;
    const yy1_ = to_power_basis_with_running_error_abs(yy1);
    return {
        coeffs: [[xx1, x0], [yy1, y0]],
        errorBound: [[xx1_, 0], [yy1_, 0]]
    };
}
/** @internal */
function toPowerBasis0WithRunningError(ps) {
    const [[x0, y0]] = ps;
    return {
        coeffs: [[x0], [y0]],
        errorBound: [[0], [0]]
    };
}

//# sourceMappingURL=to-power-basis-with-running-error.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/self-intersection/get-coefficients/double/get-coeffs-bez3-with-running-error.js


const get_coeffs_bez3_with_running_error_abs = Math.abs;
const get_coeffs_bez3_with_running_error_1 = error_analysis_(1);
/**
 * Returns a polynomial in 1 variable (including coefficientwise error bound)
 * whose roots are the parameter values of the self-intersection points of the
 * given cubic bezier curve.
 *
 * The returned polynomial coefficients are given densely as an array of double
 * precision floating point numbers from highest to lowest power,
 * e.g. `[5,-3,0]` represents the polynomial `5x^2 - 3x`.
 *
 * * intermediate calculations are done in double precision and this is
 * reflected in the error bound
 * * the error bound returned need **not** be scaled before use
 * * adapted from [Indrek Mandre](http://www.mare.ee/indrek/misc/2d.pdf)
 *
 * @param ps a cubic bezier curve.
 *
 * @internal
 */
function getCoeffsBez3WithRunningError(ps) {
    const { coeffs: [[a3, a2, a1], [b3, b2, b1]], errorBound: [[a3_, a2_], [b3_, b2_]] } = toPowerBasis3WithRunningError(ps);
    const _a3 = get_coeffs_bez3_with_running_error_abs(a3);
    const _a2 = get_coeffs_bez3_with_running_error_abs(a2);
    const _a1 = get_coeffs_bez3_with_running_error_abs(a1);
    const _b3 = get_coeffs_bez3_with_running_error_abs(b3);
    const _b2 = get_coeffs_bez3_with_running_error_abs(b2);
    const _b1 = get_coeffs_bez3_with_running_error_abs(b1);
    const a2b3 = a2 * b3;
    const a3b2 = a3 * b2;
    const a3b1 = a3 * b1;
    const a1b3 = a1 * b3;
    const a2b1 = a2 * b1;
    const a1b2 = a1 * b2;
    // Note: a variable prepended with and underscore is an absolute value,
    // postpended with an underscore denotes an absolute error (before 
    // multiplication by the round-off unit `u`) - both underscores present 
    // means it is both an absolute value and a round-off error.
    const _a2b3 = get_coeffs_bez3_with_running_error_abs(a2b3);
    const _a3b2 = get_coeffs_bez3_with_running_error_abs(a3b2);
    const _a3b1 = get_coeffs_bez3_with_running_error_abs(a3b1);
    const _a1b3 = get_coeffs_bez3_with_running_error_abs(a1b3);
    const _a2b1 = get_coeffs_bez3_with_running_error_abs(a2b1);
    const _a1b2 = get_coeffs_bez3_with_running_error_abs(a1b2);
    const a2b3_ = a2_ * _b3 + _a2 * b3_ + _a2b3;
    const a3b2_ = a3_ * _b2 + _a3 * b2_ + _a3b2;
    const a3b1_ = a3_ * _b1 + _a3b1;
    const a1b3_ = _a1 * b3_ + _a1b3;
    const a2b1_ = a2_ * _b1 + _a2b1;
    const a1b2_ = _a1 * b2_ + _a1b2;
    const f4 = a2b3 - a3b2;
    const _f4 = get_coeffs_bez3_with_running_error_abs(f4);
    const f4_ = a2b3_ + a3b2_ + _f4;
    const f5 = a1b3 - a3b1;
    const _f5 = get_coeffs_bez3_with_running_error_abs(f5);
    const f5_ = a1b3_ + a3b1_ + _f5;
    const f6 = a2b1 - a1b2;
    const _f6 = get_coeffs_bez3_with_running_error_abs(f6);
    const f6_ = a2b1_ + a1b2_ + _f6;
    //const u2 = -2*a2*a3*b2*b3 + a2*a2*b3*b3 + a3*a3*b2*b2
    //const u2 = a2b3*(-2*a3b2 + a2b3) + a3b2*a3b2
    //const u2 = (a2b3 - a3b2)*(a2b3 - a3b2)
    const u2 = f4 * f4;
    const u2_ = 2 * f4_ * _f4 + get_coeffs_bez3_with_running_error_abs(u2);
    //const u1 = -a1*a3*b2*b3 - a2*a3*b1*b3 + a1*a2*b3*b3 + b1*b2*a3*a3
    //const u1 = a1*b3*-a3*b2 + a1*b3*a2*b3 + a3*b1*-a2*b3 + a3*b1*a3*b2
    //const u1 = a1b3*(a2b3 - a3b2) - a3b1*(a2b3 - a3b2)
    //const u1 = a1b3*f4 - a3b1*f4 = f4*(a1b3 - a3b1);
    const u1 = f4 * f5;
    const u1_ = f4_ * _f5 + _f4 * f5_ + get_coeffs_bez3_with_running_error_abs(u1);
    //const u0 = -a1*a2*b2*b3 - a2*a3*b1*b2 - 2*a1*a3*b1*b3 + a1*a1*b3*b3 + a3*a3*b1*b1 + a1*a3*b2*b2 + b1*b3*a2*a2
    //const u0 = 
    //       a2b3*(a2b1 - a1b2) - a3b2*(a2b1 - a1b2) +
    //       a1b3*(-2*a3b1 + a1b3) + a3b1*a3b1;
    //const u0 = 
    //       f6*f4 + 
    //       (a1b3 - a3b1)*(a1b3 - a3b1);
    //const u0 = f6*f4 + f5*f5;
    const g7 = f6 * f4;
    const g7_ = f6_ * _f4 + _f6 * f4_ + get_coeffs_bez3_with_running_error_abs(g7);
    const g9 = f5 * f5;
    const g9_ = 2 * _f5 * f5_ + get_coeffs_bez3_with_running_error_abs(g9);
    const u0 = g7 + g9;
    const u0_ = g7_ + g9_ + get_coeffs_bez3_with_running_error_abs(u0);
    // Solve: u2*t**2 + u1*t + u0 = 0
    return {
        coeffs: [u2, u1, u0],
        errBound: [u2_, u1_, u0_].map(c => get_coeffs_bez3_with_running_error_1 * c)
    };
}

//# sourceMappingURL=get-coeffs-bez3-with-running-error.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/self-intersection/get-coefficients/exact/get-coeffs-bez3-exact.js


// We *have* to do the below to improve performance with bundlers❗ The assignee is a getter❗ The assigned is a pure function❗
const get_coeffs_bez3_exact_epr = expansionProduct;
const get_coeffs_bez3_exact_fes = fastExpansionSum;
const get_coeffs_bez3_exact_ediff = eDiff;
/**
 * Returns an error-free polynomial in 1 variable whose roots are the parameter
 * values of the self-intersection points of the given cubic bezier curve.
 *
 * The returned polynomial coefficients are given densely as an array of
 * [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf) floating point expansions from highest to lowest power,
 * e.g. `[[5],[-3],[0]]` represents the polynomial `5x^2 - 3x`.
 *
 * * the returned polynomial coefficients are exact (i.e. error-free)
 * * adapted from [Indrek Mandre](http://www.mare.ee/indrek/misc/2d.pdf)
 *
 * @param ps a cubic bezier curve.
 *
 * @internal
 */
function getCoeffsBez3Exact(ps) {
    const [[a3, a2, a1], [b3, b2, b1]] = toPowerBasis3Exact(ps);
    const a2b3 = get_coeffs_bez3_exact_epr(a2, b3);
    const a3b2 = get_coeffs_bez3_exact_epr(a3, b2);
    const a3b1 = get_coeffs_bez3_exact_epr(a3, b1);
    const a1b3 = get_coeffs_bez3_exact_epr(a1, b3);
    const a2b1 = get_coeffs_bez3_exact_epr(a2, b1);
    const a1b2 = get_coeffs_bez3_exact_epr(a1, b2);
    const f4 = get_coeffs_bez3_exact_ediff(a2b3, a3b2);
    const f5 = get_coeffs_bez3_exact_ediff(a1b3, a3b1);
    const f6 = get_coeffs_bez3_exact_ediff(a2b1, a1b2);
    //const u2 = -2*a2*a3*b2*b3 + a2*a2*b3*b3 + a3*a3*b2*b2
    const u2 = get_coeffs_bez3_exact_epr(f4, f4);
    //const u1 = -a1*a3*b2*b3 - a2*a3*b1*b3 + a1*a2*b3*b3 + b1*b2*a3*a3
    const u1 = get_coeffs_bez3_exact_epr(f4, f5);
    //const u0 = -a1*a2*b2*b3 - a2*a3*b1*b2 - 2*a1*a3*b1*b3 + a1*a1*b3*b3 + a3*a3*b1*b1 + a1*a3*b2*b2 + b1*b3*a2*a2
    const g7 = get_coeffs_bez3_exact_epr(f4, f6);
    const g9 = get_coeffs_bez3_exact_epr(f5, f5);
    const u0 = get_coeffs_bez3_exact_fes(g7, g9);
    // Solve: u2*t**2 + u1*t + u0 = 0
    return [u2, u1, u0];
}

//# sourceMappingURL=get-coeffs-bez3-exact.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/self-intersection/bezier-self-intersection.js





const bezier_self_intersection_edif = eDiff;
const bezier_self_intersection_epr = expansionProduct;
const bezier_self_intersection_sce = scaleExpansion2;
const bezier_self_intersection_td = node_twoDiff;
const bezier_self_intersection_ts = node_twoSum;
const bezier_self_intersection_qno = node_ddNegativeOf;
const bezier_self_intersection_qaq = node_ddAddDd;
const bezier_self_intersection_qm2 = node_ddMultBy2;
const qdivq = node_ddDivDd;
const bezier_self_intersection_fes = fastExpansionSum;
const bezier_self_intersection_ge = growExpansion;
const bezier_self_intersection_eps = Number.EPSILON;
const eps2 = 2 * bezier_self_intersection_eps;
const bezier_self_intersection_abs = Math.abs;
const bezier_self_intersection_1 = error_analysis_(1);
/**
 * Returns the unique self-intersection parameter `t` values of the given
 * bezier curve if they exist, else return `[]` (see also the `inRange`
 * parameter below).
 *
 * * only cubic (or higher order) bezier curves can have unique self-intersections
 * * this algorithm is mathematically guaranteed accurate to within an absolute
 * error of `4 * Number.EPSILON` for the returned `t` values satisfying `|t| <= 1`
 * or a relative error of the same `4 * Number.EPSILON` otherwise.
 * * **special case:** a cusp is considered a degenerate self-intersection and
 * the (duplicate) `t` values will be returned
 *
 * @param ps a bezier curve given as an array of its control points
 * @param inRange if `inRange === true` (the default) then return the two `t`
 * parameter values only if both are in [0,1] else return `[]`.
 * If `inRange === false` then return the (0,1 or 2) `t` values in `[0,1]` even
 * if only one is in that range.
 *
 * @doc mdx
 */
function bezierSelfIntersection(ps, inRange = true) {
    if (ps.length < 4) {
        // lines and quadratics don't have uniqure self-intersections.
        return [];
    }
    // First get fast naively calculated coefficients
    const { coeffs: [a, b, c], errBound: [a_, b_, c_] } = getCoeffsBez3WithRunningError(ps);
    // if error in `a` cannot discern it from zero
    if (bezier_self_intersection_abs(a) <= a_) {
        // it is rare to get here 
        // check for sure if a === 0 exactly
        const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;
        //const a3 = (x3 - x0) + 3*(x1 - x2);
        //const a2 = (x2 + x0) - 2*x1;
        //const b3 = (y3 - y0) + 3*(y1 - y2);
        //const b2 = (y2 + y0) - 2*y1;
        const a3 = bezier_self_intersection_fes(bezier_self_intersection_td(x3, x0), bezier_self_intersection_sce(3, (bezier_self_intersection_td(x1, x2))));
        const a2 = bezier_self_intersection_ge(bezier_self_intersection_ts(x2, x0), -2 * x1);
        const b3 = bezier_self_intersection_fes(bezier_self_intersection_td(y3, y0), bezier_self_intersection_sce(3, (bezier_self_intersection_td(y1, y2))));
        const b2 = bezier_self_intersection_ge(bezier_self_intersection_ts(y2, y0), -2 * y1);
        const a2b3 = bezier_self_intersection_epr(a2, b3);
        const a3b2 = bezier_self_intersection_epr(a3, b2);
        if (eCompare(a2b3, a3b2) === 0) {
            // a === 0 => no roots possible! (also b === 0 always if a === 0)
            // This type of curve is usually shaped like an S where both 
            // extreme curvatures are identical...
            // ...this is an explicit cubic curve!
            return [];
        }
    }
    // `Discr` = discriminant = b^2 - 4ac
    // calculate `Discr` and its absolute error Discr_
    const bb = b * b;
    const bb_ = 2 * b_ * bezier_self_intersection_abs(b) + bezier_self_intersection_1 * bb; // the error in b**2
    const ac4 = 4 * a * c;
    const ac4_ = 4 * (a_ * bezier_self_intersection_abs(c) + bezier_self_intersection_abs(a) * c_) + bezier_self_intersection_1 * bezier_self_intersection_abs(ac4);
    const Discr = bb - ac4;
    const Discr_ = bb_ + ac4_ + bezier_self_intersection_1 * bezier_self_intersection_abs(Discr);
    // if the discriminant is smaller than negative the error bound then
    // certainly there are no roots, i.e. no cusp and no self-intersections
    if (Discr < -Discr_) {
        // discriminant is definitely negative
        return [];
    }
    // if the discriminant is definitely positive
    if (Discr > Discr_) {
        // calculate roots naively as a fast pre-filter
        const { est: D, err: D_ } = node_sqrtWithErr(Discr, Discr_);
        let q1;
        if (b >= 0) {
            // const r1 = (-b - D) / 2*a;
            // const r2 = (2*c) / (-b - D);
            q1 = -b - D;
        }
        else {
            // const r2 = (-b + D) / 2*a;
            // const r1 = (2*c) / (-b + D);
            q1 = -b + D;
        }
        const q1_ = b_ + D_ + bezier_self_intersection_1 * bezier_self_intersection_abs(q1);
        const { est: r1, err: r1_ } = node_divWithErr(q1, 2 * a, q1_, 2 * a_);
        const { est: r2, err: r2_ } = node_divWithErr(2 * c, q1, 2 * c_, q1_);
        // the actual 'filter' follows
        if (inRange) {
            // IF at least one root is not in [0,1]
            // THEN no self-intersection (in [0,1])
            if (r1 + r1_ < 0 || r1 - r1_ > 1 ||
                r2 + r2_ < 0 || r2 - r2_ > 1) {
                return [];
            }
        }
        else {
            // IF both roots not in [0,1] 
            // THEN no self-intersection (in [0,1])
            if ((r1 + r1_ < 0 || r1 - r1_ > 1) &&
                (r2 + r2_ < 0 || r2 - r2_ > 1)) {
                return [];
            }
        }
    }
    // we need to check exactly - (a !== 0) at this point - tested for earlier
    let [A, B, C] = getCoeffsBez3Exact(ps);
    // exact - Discr = b^2 - 4ac
    const eDiscr = bezier_self_intersection_edif(bezier_self_intersection_epr(B, B), bezier_self_intersection_sce(4, bezier_self_intersection_epr(A, C)));
    const sgnDiscr = e_sign_eSign(eDiscr);
    if (sgnDiscr < 0) {
        // sgn < 0 => no real roots => no cusp or double point for t in [0,1]
        return [];
    }
    if (sgnDiscr > 0) {
        const D = node_ddSqrt(eToDd(eDiscr));
        A = eToDd(A);
        B = eToDd(B);
        C = eToDd(C);
        let nBD;
        if (e_sign_eSign(B) >= 0) {
            nBD = bezier_self_intersection_qno(bezier_self_intersection_qaq(B, D));
            //t1 = (-B - D) / (2*A);
            //t2 = (2*C) / (-B - D);
        }
        else {
            nBD = bezier_self_intersection_qaq(bezier_self_intersection_qno(B), D);
            //t1 = (2*C) / (-B + D);
            //t2 = (-B + D) / (2*A);
        }
        let t1 = eEstimate(qdivq(nBD, bezier_self_intersection_qm2(A))); // max 1 ulps out
        let t2 = eEstimate(qdivq(bezier_self_intersection_qm2(C), nBD)); // max 1 ulps out
        if (inRange) {
            // if any root is outside the range => no double point for t in [0,1]
            if (t1 < -eps2 || t1 > 1 + eps2 ||
                t2 < -eps2 || t2 > 1 + eps2) {
                return [];
            }
        }
        else {
            // if both roots are outside the range => no double point for t in [0,1]
            if ((t1 < -eps2 || t1 > 1 + eps2) &&
                (t2 < -eps2 || t2 > 1 + eps2)) {
                return [];
            }
        }
        // coerce to 0/1
        //t1 = (t1 >= -eps4 && t1 < 0)
        //    ? 0
        //    : (t1 > 1 && t1 <= 1 + eps4) ? 1 : t1;
        //t2 = (t2 >= -eps4 && t2 < 0)
        //    ? 0
        //    : (t2 > 1 && t2 <= 1 + eps4) ? 1 : t2;
        [t1, t2] = t1 < t2 ? [t1, t2] : [t2, t1];
        return t1 >= 0 - eps2 && t1 <= 1 + eps2
            ? t2 >= 0 - eps2 && t2 <= 1 + eps2
                ? [t1, t2]
                : [t1]
            : t2 >= 0 - eps2 && t2 <= 1 + eps2
                ? [t2]
                : [];
    }
    // sign === 0 => cusp
    // set t = b/d = b/-2a
    const d = eMultByNeg2(A);
    const sgnB = e_sign_eSign(B);
    const sgnD = e_sign_eSign(d);
    // if result is negative the cusp is outside the bezier endpoints
    const sgn_ = sgnB * sgnD;
    if (sgn_ < 0) {
        return [];
    }
    // if result is > 1 the cusp is outside the bezier endpoints
    if (eCompare(eAbs(B), eAbs(d)) > 0) {
        return [];
    }
    const qB = eToDd(B);
    const qd = eToDd(d);
    const qt = qdivq(qB, qd);
    const t = qt[1] + qt[0];
    return [t, t];
}

//# sourceMappingURL=bezier-self-intersection.js.map
;// CONCATENATED MODULE: ./src/get-critical-points/get-self-intersections.ts

const get_self_intersections_eps = Number.EPSILON;
/**
 * @param loops
 */
function getSelfIntersections(loops) {
    const xs = [];
    for (const loop of loops) {
        for (const curve of loop.curves) {
            const ps = curve.ps;
            const ts = bezierSelfIntersection(ps);
            // if (ts === undefined) { continue; }  // there is no self-intersection
            if (ts.length === 0) {
                continue;
            }
            // if a cusp (or extremely close to it)
            const kind = ts[0] === ts[1]
                ? 3 /*cusp*/
                : 2 /*self-intersection*/;
            // TODO - fix box - must combine 2 boxes and bezierSelfIntersection must return intervals
            const t0S = ts[0] - get_self_intersections_eps;
            const t0E = ts[0] + get_self_intersections_eps;
            const t1S = ts[1] - get_self_intersections_eps;
            const t1E = ts[1] + get_self_intersections_eps;
            const box0 = getIntervalBox(ps, [t0S, t0E]); // ts are within 1 upls accurate
            const box1 = getIntervalBox(ps, [t1S, t1E]); // ts are within 1 upls accurate
            xs.push([
                // TODO - multiplicity relevant??
                { x: { ri: { tS: t0S, tE: t0E, multiplicity: 1 }, box: box0, kind }, curve },
                { x: { ri: { tS: t1S, tE: t1E, multiplicity: 1 }, box: box1, kind }, curve }
            ]);
        }
    }
    return xs;
}


;// CONCATENATED MODULE: ./src/get-critical-points/get-interface-intersections.ts

function getInterfaceIntersections(loops) {
    /** all one-sided Xs from */
    const xs = [];
    // Get interface points
    for (const loop of loops) {
        for (const curve of loop.curves) {
            xs.push([
                makeSimpleX(1, curve, 4),
                makeSimpleX(0, curve.next, 4), // interface
            ]);
        }
    }
    return xs;
}


;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/to-power-basis/to-power-basis-2nd-derivative/double/to-power-basis-2nd-derivative.js
/**
 * Returns the 2nd derivative of the power basis representation of a
 * bezier curve of order cubic or less (with intermediate calculations done in
 * double precision).
 *
 * * returns the resulting power basis x and y coordinate polynomials from
 * highest power to lowest, e.g. if `x(t) = at^2 + bt + c`
 * and `y(t) = dt^2 + et + f` then  the result is returned
 * as `[[a,b,c],[d,e,f]]`
 *
 * @param ps an order 0,1,2 or 3 bezier curve given by an ordered array of its
 * control points, e.g. `[[0,0],[1,1],[2,1],[2,0]]`
 *
 * @doc
 */
function toPowerBasis_2ndDerivative(ps) {
    if (ps.length === 4) {
        const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;
        return [[
                6 * ((x3 - x0) + 3 * (x1 - x2)),
                6 * ((x2 + x0) - 2 * x1)
            ], [
                6 * ((y3 - y0) + 3 * (y1 - y2)),
                6 * ((y2 + y0) - 2 * y1)
            ]];
    }
    if (ps.length === 3) {
        const [[x0, y0], [x1, y1], [x2, y2]] = ps;
        return [[
                2 * (x2 - 2 * x1 + x0)
            ], [
                2 * (y2 - 2 * y1 + y0)
            ]];
    }
    if (ps.length <= 2) {
        return [[0], [0]];
    }
    throw new Error('The given bezier curve must be of order <= 3.');
}

//# sourceMappingURL=to-power-basis-2nd-derivative.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/to-power-basis/to-power-basis-3rd-derivative/double/to-power-basis-3rd-derivative.js
/**
 * Returns the 3rd derivative of the power basis representation of a bezier
 * curve of order cubic or less (with intermediate calculations done in
 * double precision).
 *
 * * returns the resulting power basis x and y coordinate polynomials from
 * highest power to lowest, e.g. if `x(t) = at^2 + bt + c`
 * and `y(t) = dt^2 + et + f` then  the result is returned
 * as `[[a,b,c],[d,e,f]]`
 *
 * @param ps an order 0,1,2 or 3 bezier curve given by an ordered array of its
 * control points, e.g. `[[0,0],[1,1],[2,1],[2,0]]`
 *
 * @doc
 */
function toPowerBasis_3rdDerivative(ps) {
    if (ps.length === 4) {
        const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;
        return [[
                6 * ((x3 - x0) + 3 * (x1 - x2))
            ], [
                6 * ((y3 - y0) + 3 * (y1 - y2))
            ]];
    }
    if (ps.length <= 3) {
        return [[0], [0]];
    }
    throw new Error('The given bezier curve must be of order <= 3.');
    // Side note: if x0,x1,x2,x3 <= X (for some X) and t is an element of [0,1], 
    // then max(dddx)(t) <= 48*X for all t.
}

//# sourceMappingURL=to-power-basis-3rd-derivative.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/get-curvature-extrema/get-abs-curvature-extrema-polys.js



/**
 * Returns the polynomials whose zeros are the `t` values of the local
 * minima / maxima of the absolute curvature for the given bezier curve.
 *
 * The polynomials are in the form `p1*p2` where the zeros
 * of `p1` are the inflection points and the zeros of `p2` are the other minima /
 * maxima.
 *
 * * **precondition:** must be a `true` cubic bezier (not degenerate to line or
 * quadratic)
 * * see [MvG](https://math.stackexchange.com/a/1956264/130809)
 * * **non-exact:** due to floating point roundof during calculation
 *
 * @param ps an order 1,2 or 3 bezier curve given as an array of its control
 * points, e.g. `[[0,0],[1,1],[2,1],[2,0]]`
 *
 * @internal
 */
function getAbsCurvatureExtremaPolys(ps) {
    // It is a real cubic - use the excellent answer from the description:
    // dd(kappa^2)/dt === (x′′y′ − x′y′′)*((x′′′y′ − x′y′′′)(x′2 + y′2) − 3(x′x′′ + y′y′′)(x′′y′ − x′y′′))
    // Inflection points at: (x′′y′ − x′y′′) === 0
    // Max abs curvature at: ((x′′′y′ − x′y′′′)(x′2 + y′2) − 3(x′x′′ + y′y′′)(x′′y′ − x′y′′)) === 0
    const [[dx2, dx1, dx0], [dy2, dy1, dy0]] = toPowerBasis_1stDerivative(ps); // max bitlength increase === 5
    const [[ddx1, ddx0], [ddy1, ddy0]] = toPowerBasis_2ndDerivative(ps); // max bitlength increase === 6
    const [[dddx], [dddy]] = toPowerBasis_3rdDerivative(ps); // max bitlength increase === 6
    // ((x′′′y′ − x′y′′′)(x′2 + y′2) − 3(x′x′′ + y′y′′)(x′′y′ − x′y′′))
    // or 
    // x′′′x′x′y′ + x′′′y′y′y′ - y′′′x′x′x′ - y′′′x′y′y′ + 
    // 3(x′′y′′x′x′ - x′′x′′x′y′ - x′′y′′y′y′ + y′′y′′x′y′)
    // The above line becomes
    // ((dddx*dy(t) − dx(t)*dddy)(dx(t)dx(t) + dy(t)dy(t)) − 3(dx(t)ddx(t) + dy(t)ddy(t))(ddx(t)dy(t) − dx(t)ddy(t)))
    // or 
    // dddx*dxt**2*dyt + dddx*dyt**3 - dddy*dxt**3 - dddy*dxt*dyt**2 - 
    // 3*ddxt**2*dxt*dyt + 3*ddxt*ddyt*dxt**2 - 3*ddxt*ddyt*dyt**2 + 3*ddyt**2*dxt*dyt
    // which becomes: (after substituting e.g. dy(t) = dy2*t^2 + dy1*t + dy0, etc. using Python and
    // then expanding and collecting terms)
    const dddx_dy1 = dddx * dy1;
    const dddy_dx1 = dddy * dx1;
    const ddx0_dy0 = ddx0 * dy0;
    const ddx0_dy1 = ddx0 * dy1;
    const ddy1_ddy1 = ddy1 * ddy1;
    const ddx1_dy0 = ddx1 * dy0;
    const ddy0_dx0 = ddy0 * dx0;
    const ddy0_dx1 = ddy0 * dx1;
    const ddy1_dx0 = ddy1 * dx0;
    const dx0_dx1 = dx0 * dx1;
    const dx0_dx2 = dx0 * dx2;
    const dx0_dy2 = dx0 * dy2;
    const dx1_dx1 = dx1 * dx1;
    const dx1_dx2 = dx1 * dx2;
    const dx1_dy1 = dx1 * dy1;
    const dx2_dy0 = dx2 * dy0;
    const dx2_dy2 = dx2 * dy2;
    const dx2_dx2 = dx2 * dx2;
    const dy0_dy1 = dy0 * dy1;
    const dy0_dy2 = dy0 * dy2;
    const dy1_dy1 = dy1 * dy1;
    const dy1_dy2 = dy1 * dy2;
    const dy2_dy2 = dy2 * dy2;
    const ss = dddx * dy0 - dddy * dx0;
    const uu = dddx_dy1 - dddy_dx1;
    const vv = ddx0 * dx0 + ddy0 * dy0;
    const ww = ddx0 * dx1 + ddx1 * dx0 + ddy0 * dy1 + ddy1 * dy0;
    const xx = ddx0_dy0 - ddy0_dx0;
    const yy = ddx0_dy1 + ddx1_dy0 - ddy0_dx1 - ddy1_dx0;
    const qq = dx0 * dx0 + dy0 * dy0;
    const rr = dx0_dx1 + dy0_dy1;
    // t6 cancels! see https://math.stackexchange.com/a/1956264/130809
    const z1 = dx1_dy1 + dx2_dy0;
    const z2 = dy0_dy2 + dy1_dy1;
    const z3 = dx0_dx2 + dx1_dx1;
    const z4 = dx1 * dy2 + dx2 * dy1;
    const z5 = dx2_dx2 - dy2_dy2;
    const z6 = dx1_dx2 - dy1_dy2;
    const z7 = dx0_dy2 + dx1_dy1;
    const z8 = dx0_dx1 - dy0_dy1;
    const z9 = dx0 * dy1 + dx1 * dy0;
    const x1 = dy0_dy2 + z2;
    const x2 = dx0_dx2 + z3;
    const x3 = dx0_dy2 + z1;
    const x4 = dx1_dy1 + z1;
    const x5 = x2 - x1;
    const x6 = z1 + dx2_dy0;
    const x7 = z7 + dx2_dy0;
    const x8 = 2 * ddy0_dx1 + ddy1_dx0;
    const t5 = dx2_dx2 * (dddx_dy1 - 3 * dddy_dx1) +
        dy2_dy2 * (3 * dddx_dy1 - dddy_dx1) +
        2 * ((dx2_dy2) * ((dddx * dx1 - dddy * dy1) + 3 * (ddy0 * ddy1 - ddx0 * ddx1)) + 3 * ddx1 * ddy1 * z6) +
        3 * (z4 * (ddy1_ddy1 - ddx1 * ddx1) + z5 * (ddx0 * ddy1 + ddy0 * ddx1));
    const t4 = dddx * (dy2 * (x2 + 3 * z2) + dx2 * x4) -
        dddy * (dx0 * (3 * dx2_dx2 + dy2_dy2) + dx1 * (3 * dx1_dx2 + 2 * dy1_dy2) + dx2 * x1) +
        3 * (ddx0 * ((ddy0 * z5 - ddx0 * dx2_dy2) + 2 * (ddy1 * z6 - ddx1 * z4)) +
            ddx1 * (2 * ddy0 * z6 + ddy1 * (2 * (dx0_dx2 - dy0_dy2) + (dx1_dx1 - dy1_dy1)) - ddx1 * x7) +
            ddy0 * (ddy0 * dx2_dy2 + 2 * ddy1 * z4) +
            ddy1_ddy1 * x3);
    const t3 = dddx * (2 * dx0 * z4 + dx1 * x6 + dy1 * (4 * dy0_dy2 + x1)) -
        dddy * (2 * dx0 * (3 * dx1_dx2 + dy1_dy2) + dx1 * (dx1_dx1 + 2 * dy0_dy2) + dy1 * x6) +
        3 * (ddx0 * (2 * (ddy0 * z6 - ddx1 * x7) + ddy1 * x5 - ddx0 * z4) +
            ddx1 * (2 * ddy1 * z8 - ddx1 * z9) +
            ddy0 * (ddy0 * z4 + 2 * ddy1 * x3 + ddx1 * x5) +
            ddy1_ddy1 * z9);
    const t2 = dddx * (dx0 * (dx0_dy2 + 2 * z1) + dy0 * (dx1_dx1 + 3 * z2)) -
        dddy * (dx0 * (3 * z3 + x1) + dy0 * x4) +
        3 * (ddx0 * (ddy0 * x5 - ddx0 * x3 + 2 * (ddy1 * z8 - ddx1 * z9)) +
            ddx1 * (dx0 * (x8 - ddx1 * dy0) - dy0 * (2 * ddy0 * dy1 + ddy1 * dy0)) +
            ddy0 * (ddy0 * z1 + dx0 * (2 * ddy1 * dy1 + ddy0 * dy2)) +
            ddy1 * dy0 * x8);
    const t1 = (qq * uu + 2 * rr * ss) - 3 * (vv * yy + ww * xx);
    const t0 = ss * qq - 3 * vv * xx;
    const r3 = ddx1 * dy2 - ddy1 * dx2;
    const r2 = ddx0 * dy2 + ddx1 * dy1 - ddy0 * dx2 - ddy1 * dx1;
    const r1 = ddx0_dy1 + ddx1_dy0 - ddy0_dx1 - ddy1_dx0;
    const r0 = ddx0_dy0 - ddy0_dx0;
    return {
        inflectionPoly: [r3, r2, r1, r0],
        otherExtremaPoly: [t5, t4, t3, t2, t1, t0]
    };
}

//# sourceMappingURL=get-abs-curvature-extrema-polys.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/global-properties/classification/is-collinear.js

// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗
const { orient2d: is_collinear_orient2d } = node_operators;
/**
 * Returns `true` if the given bezier curve has all control points collinear,
 * `false` otherwise.
 *
 * * if you need to know whether a given bezier curve can be converted to an
 * order 1 bezier curve (a line) such that the same `(x,y)` point is returned
 * for the same `t` value then use e.g. [[isQuadReallyLine]] instead.
 *
 * * **exact** not susceptible to floating point round-off
 *
 * @param ps an order 0,1,2 or 3 bezier curve given as an array of its control
 * points, e.g. `[[1,2],[3,4],[5,6],[7,8]]`
 *
 * @doc mdx
 */
function isCollinear(ps) {
    if (ps.length === 4) {
        // Cubic bezier
        return (is_collinear_orient2d(ps[0], ps[1], ps[2]) === 0 &&
            is_collinear_orient2d(ps[1], ps[2], ps[3]) === 0 &&
            // The below check is necessary for if ps[1] === ps[2]
            is_collinear_orient2d(ps[0], ps[2], ps[3]) === 0);
    }
    if (ps.length === 3) {
        // Quadratic bezier
        return is_collinear_orient2d(ps[0], ps[1], ps[2]) === 0;
    }
    if (ps.length <= 2) {
        // Line (or point)
        return true;
    }
    throw new Error('The given bezier curve must be of order <= 3.');
}
/**
 * Returns `true` if the given bezier curve has all control points the
 * same `y` value (possibly self-overlapping), `false` otherwise.
 *
 * @param ps An order 0, 1, 2 or 3 bezier curve.
 *
 * @doc
 */
function isHorizontal(ps) {
    const y = ps[0][1];
    for (let i = 1; i < ps.length; i++) {
        if (ps[i][1] !== y) {
            return false;
        }
    }
    return true;
}
/**
 * Returns `true` if the given bezier curve has all control points the
 * same `x` value (possibly self-overlapping), `false` otherwise.
 *
 * @param ps An order 0, 1, 2 or 3 bezier curve.
 *
 * @doc
 */
function isVertical(ps) {
    const x = ps[0][0];
    for (let i = 1; i < ps.length; i++) {
        if (ps[i][0] !== x) {
            return false;
        }
    }
    return true;
}

//# sourceMappingURL=is-collinear.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/get-curvature-extrema/get-curvature-extrema-quadratic-poly.js
/**
 * Returns the polynomial whose zero is the t value of maximum absolute
 * curvature for the given *quadratic* bezier curve.
 *
 * * **precondition:** the given parabola is not degenerate to a line
 * * **non-exact:** there is floating point roundof during calculation
 * * see e.g. [math.stackexchange](https://math.stackexchange.com/a/2971112)'s
 * answer by [KeithWM](https://math.stackexchange.com/a/2971112/130809)
 *
 * @param ps an order 2 bezier curve given as an array of control points,
 * e.g. `[[0,0],[1,1],[2,1]]`
 *
 * @internal
 */
function getCurvatureExtremaQuadraticPoly(ps) {
    // Find the point of max curvature (of the parabola)
    // calculate t*
    const [[x0, y0], [x1, y1], [x2, y2]] = ps;
    const x10 = x1 - x0;
    const x21 = x2 - x1;
    const wx = x21 - x10;
    const y10 = y1 - y0;
    const y21 = y2 - y1;
    const wy = y21 - y10;
    const n = x0 * (wx - x1) - x1 * (x21 - x1) +
        y0 * (wy - y1) - y1 * (y21 - y1);
    const d = wx * wx + wy * wy;
    return [d, -n];
}

//# sourceMappingURL=get-curvature-extrema-quadratic-poly.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/get-curvature-extrema/get-curvature-extrema.js






/**
 * Returns the parameter `t` values (in `[0,1]`) of local minimum / maximum
 * absolute curvature for the given bezier curve.
 *
 * If there are an infinite number of such `t` values (such as is the case for a
 * line), an empty array is returned.
 *
 * * see [MvG](https://math.stackexchange.com/a/1956264/130809)'s excellent
 * answer on math.stackexchange
 *
 * @param ps an order 1,2 or 3 bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 *
 * @doc mdx
 */
function getCurvatureExtrema(ps) {
    if (isCollinear(ps)) {
        return { minima: [], maxima: [], inflections: [] };
    }
    if (ps.length === 4 && isCubicReallyQuad(ps)) {
        ps = cubicToQuadratic(ps);
    }
    if (ps.length === 3) {
        const poly = getCurvatureExtremaQuadraticPoly(ps);
        const maxima = allRoots(poly, 0, 1);
        return {
            minima: [],
            maxima,
            inflections: []
        };
    }
    const polys = getAbsCurvatureExtremaPolys(ps);
    const p1 = polys.inflectionPoly;
    const p2 = polys.otherExtremaPoly;
    const ts = allRoots(p2, 0, 1);
    // get second derivative (using product rule) to see if it is a local 
    // minimum or maximum, i.e. diff(p1*p2) = p1'*p2 + p1*p2' = dp1*p2 + p1*dp2
    // = p1*dp2 (since dp1*p2 === 0)
    const dp2 = differentiate(p2);
    const minima = [];
    const maxima = [];
    for (let i = 0; i < ts.length; i++) {
        const t = ts[i];
        const dp2_ = Horner(dp2, t);
        const p1_ = Horner(p1, t);
        const secondDerivative = p1_ * dp2_;
        if (secondDerivative >= 0) {
            minima.push(t);
        }
        else {
            maxima.push(t);
        }
    }
    const inflections = allRoots(p1, 0, 1);
    return { minima, maxima, inflections };
}

//# sourceMappingURL=get-curvature-extrema.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/local-properties-at-t/curvature.js



/**
 * Returns the curvature `κ` of the given linear, quadratic or cubic bezier
 * curve at a specific given parameter value `t`.
 *
 * * returns `Number.NaN` at a cusp - this can be tested for with `Number.isNaN`
 *
 * @param ps an order 1,2 or 3 bezier curve, e.g. `[[0,0],[1,1],[2,1],[2,0]]`
 * @param t the parameter value where the curvature should be evaluated
 *
 * @doc mdx
 */
function curvature(ps, t) {
    const [dX, dY] = toPowerBasis_1stDerivative(ps);
    const [ddX, ddY] = toPowerBasis_2ndDerivative(ps);
    const dx = Horner(dX, t);
    const dy = Horner(dY, t);
    const ddx = Horner(ddX, t);
    const ddy = Horner(ddY, t);
    const a = dx * ddy - dy * ddx;
    const b = Math.sqrt((dx * dx + dy * dy) ** 3);
    return a / b;
}
/**
 * Alias for [[κ]].
 *
 * Returns the curvature `κ` of the given linear, quadratic or cubic bezier
 * curve at a specific given parameter value `t`.
 *
 * * **alias**: [[curvature]]
 *
 * @param ps an order 1, 2 or 3 bezier curve, e.g. `[[0,0],[1,1],[2,1],[2,0]]`
 * @param t the parameter value where the curvature should be evaluated
 *
 * @doc
 */
const κ = (/* unused pure expression or super */ null && (curvature));

//# sourceMappingURL=curvature.js.map
;// CONCATENATED MODULE: ./src/get-critical-points/get-excessive-curvatures.ts


const { abs: get_excessive_curvatures_abs } = Math;
function getExcessiveCurvatures(expMax, loops) {
    /** all one-sided Xs from */
    const xs = [];
    // return xs;
    // Get interface points
    for (const loop of loops) {
        for (const curve of loop.curves) {
            const ps = curve.ps;
            const extrema = getCurvatureExtrema(ps);
            const { minima, maxima } = extrema;
            const minmaxs = [0, 1, ...minima, ...maxima];
            for (let t of minmaxs) {
                //const k = eeCurvature(ps,[t]);
                const k = get_excessive_curvatures_abs(curvature(ps, t));
                if (k > 10000000 * 2 ** -expMax) {
                    xs.push([
                        makeSimpleX(t, curve, 7),
                        makeSimpleX(t, curve, 7), // excessive curvature
                    ]);
                }
            }
        }
    }
    return xs;
}


;// CONCATENATED MODULE: ./src/loop/get-min-y.ts


/**
 *
 */
const get_min_y_getMinY = memoize(function getMinY(loop) {
    const curves = loop.curves;
    let bestY = getYBoundsTight(curves[0].ps).minY;
    let bestCurve = curves[0];
    for (let i = 1; i < curves.length; i++) {
        const ps = loop.curves[i].ps;
        const minY = getYBoundsTight(ps).minY;
        const v = minY.box[0][1];
        const x = bestY.box[0][1];
        if (v < x || (v === x && minY.ts[0] > bestY.ts[0])) {
            bestY = minY;
            bestCurve = loop.curves[i];
        }
    }
    return { curve: bestCurve, y: bestY };
});


;// CONCATENATED MODULE: ./src/get-critical-points/get-extreme.ts


/**
 * Get an extreme point (point with minimum y value) of the given loop.
 * @param loop
 */
function getExtreme(loop) {
    const { curve, y } = get_min_y_getMinY(loop);
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


;// CONCATENATED MODULE: ./src/get-critical-points/get-extremes.ts

// TODO - include all interface points close to the extreme - they are the only
// important interface points - or are they??
/**
 *
 * @param loops
 */
function getExtremes(loops) {
    const extremes = new Map();
    const xs = [];
    for (const loop of loops) {
        const xPair = getExtreme(loop);
        xs.push(xPair);
        extremes.set(loop, xPair);
    }
    return { extremes, xs };
}


;// CONCATENATED MODULE: ./src/loop/normalize/to-grid.ts

/**
 * Sends a onto a fixed-spacing grid with 2**significantFigures divisions. Each
 * division is 2**maxExp / 2**significantFigures wide.
 * @param a
 * @param expMax log2(max extent of grid in positive and negative directions)
 *
 * @param significantFigures
 */
function toGrid(a, expMax, significantFigures) {
    const expA = Math.floor(Math.log2(Math.abs(a)));
    const expDif = expMax - expA;
    const newSig = significantFigures - expDif + 1;
    if (newSig <= 0) {
        return 0;
    }
    if (significantFigures >= 53) {
        return a;
    }
    return reduce_significand_reduceSignificand(a, newSig);
}


;// CONCATENATED MODULE: ./src/calc-containers/send-containers-to-grid.ts

/**
 * Returns the containers from the given containers by sending their boxes to a
 * grid with a smaller bitlength.
 *
 * @param containers
 * @param expMax
 * @param containerDim
 */
function sendContainersToGrid(containers, expMax, containerDim) {
    /**
     * The exponent difference between expMax and the distance of critical
     * points from the sides of the containers. This value cannot be higher
     * than ⌈sqrt(n)⌉ where n is the number of intersections in a container.
     * Assume n < 100 - this is a (mild) limitation of the algorithm
     */
    const expContainer = Math.log2(containerDim);
    const expContainerAdj = expContainer - 3; // 2**-3 === 1/8 of container
    const containers_ = containers.map(container => {
        const box = container.box.map(p => p.map(c => {
            return toGrid(c, expMax, expMax - expContainerAdj);
        }));
        return { ...container, box };
    });
    return containers_;
}


;// CONCATENATED MODULE: ./src/calc-containers/get-container-in-outs/get-in-outs-via-sides/compare-in-out.ts


const { abs: compare_in_out_abs } = Math;
/**
 *
 * @param inOutA
 * @param inOutB
 */
function compareOrderedInOut(inOutA, inOutB) {
    // First compare side indexes - side indexes are the coursest ordering
    const sideA = inOutA.side;
    const sideB = inOutB.side;
    let res = sideA - sideB;
    if (res !== 0) {
        return res;
    }
    // Could not resolve by side indexes (they are the same)
    // Compare by side `t` values
    const xA = inOutA.sideX;
    const xB = inOutB.sideX;
    res = xA.ri.tS - xB.ri.tS;
    const errBound = 2 * 4 * Number.EPSILON; // is factor of 2 necessary?
    if (compare_in_out_abs(res) >= errBound) {
        return res;
    }
    // At this point we zoom in once more (compensated once) to add an 
    // additional 49 bits accuracy
    // TODO - first check if they are in the same k family - this will speed
    // up the algorithm in those cases.
    if (!xA.compensated) { // else the root is already compensated once
        xA.compensated = 1; // compensate once - in future we can compensate more times if necessary
        // there should be only 1 root in the 4u interval
        // TODO - getPExact called too often - cache it!
        xA.riExp = refineK1(xA.ri, xA.getPExact())[0];
    }
    if (!xB.compensated) { // else the root is already compensated once
        xB.compensated = 1; // compensate once - in future we can compensate more times if necessary
        // there should be only 1 root in the 4u interval
        // TODO - getPExact called too often - cache it!
        xB.riExp = refineK1(xB.ri, xB.getPExact())[0];
    }
    //console.log('compensated')
    //console.log('xA', expEst(xA.riExp.tS), ' - ', expEst(xA.riExp.tE));
    //console.log('xB', expEst(xB.riExp.tS), ' - ', expEst(xB.riExp.tE));
    res = eCompare(xA.riExp.tS, xB.riExp.tS);
    if (res !== 0) {
        return res;
    }
    // At this stage it is either the same curve (mathematically, if endpoints
    // and direction is ignored) or even the once compenensated roots cannot be
    // resolved. In future we can cascade compensations to ensure resolution
    // but we are already about a quadrillionth of a quadrillionth of a unit
    // accurate at this stage.
    res = inOutB.dir - inOutA.dir;
    if (res !== 0) {
        return res;
    }
    // At this stage they are both in or both out
    // We reverse sort the ins in comparison to the outs
    return inOutA.dir === 1
        ? inOutA.idx - inOutB.idx
        : inOutB.idx - inOutA.idx;
}


;// CONCATENATED MODULE: ./src/calc-containers/filter-containers.ts
/**
 * Returns the containers that is the given containers filtered so that those
 * having only interface intersections or only a single (given as a pair) even
 * multiple intersection are not included.
 * @param containers
 */
function filterContainers(containers) {
    const containers_ = containers.filter(container => {
        const xs = container.xs;
        if (container.xs.length === 2) {
            const _x_ = xs[0];
            if (_x_.x.kind === 1 && _x_.x.ri.multiplicity % 2 === 0) {
                // multiple even intersection - exclude
                return false;
            }
        }
        for (const x of container.xs) {
            if (x.x.kind !== 4) {
                // include container if any __X__ is not an interface
                return true;
            }
        }
        return false; // exclude container
    });
    return containers_;
}


;// CONCATENATED MODULE: ./src/calc-containers/get-containers.ts















/**
 *
 * @param containerDim
 */
function getContainers(loops, containerDim, expMax) {
    const xs1 = getIntersections(loops, expMax);
    const xs2 = getSelfIntersections(loops);
    const xs3 = getInterfaceIntersections(loops);
    const { extremes, xs: xs4 } = getExtremes(loops);
    const xs5 = getExcessiveCurvatures(expMax, loops);
    let xPairs = [...xs1, ...xs2, ...xs3, ...xs4, ...xs5];
    // console.log('general  ', xs1);
    // console.log('self     ', xs2);
    // console.log('interface', xs3);
    // console.log('topmost  ', xs4);
    // console.log('excessive  ', xs5);
    if (typeof _debug_ !== 'undefined') {
        for (const xPair of xs1) {
            _debug_.generated.elems.intersection.push(...xPair);
        }
        for (const xPair of xs2) {
            _debug_.generated.elems.intersection.push(...xPair);
        }
        for (const xPair of xs3) {
            _debug_.generated.elems.intersection.push(...xPair);
        }
        for (const xPair of xs4) {
            _debug_.generated.elems.intersection.push(...xPair);
        }
        for (const xPair of xs5) {
            _debug_.generated.elems.intersection.push(...xPair);
        }
    }
    // initialize the containers with one of the one-sided intersections
    // console.log(xPairs)
    let containers = xPairs.map(xPair => ({
        xs: xPair,
        box: [
            // TODO xs[0].box -> combine xs[0] and xs[1] boxes
            [xPair[0].x.box[0][0] - containerDim, xPair[0].x.box[0][1] - containerDim],
            [xPair[0].x.box[1][0] + containerDim, xPair[0].x.box[1][1] + containerDim]
        ],
        inOuts: undefined // to be set later
    }));
    // iterate, combining containers that overlap on each iteration 
    while (true) {
        /** container intersections as an array of Container pairs */
        const is = sweepLine(containers, getLeftMost, getRightMost, areContainersIntersecting);
        // if there are no more intersections between containers we're done
        if (!is.length) {
            break;
        }
        const graph = new Map();
        addEdges(graph, is);
        const connectedContainers = getConnectedComponents(graph);
        const isolatedContainers = getIsolatedComponents(containers, connectedContainers);
        containers = [
            ...mergeContainers(connectedContainers),
            ...isolatedContainers
        ];
    }
    containers = filterContainers(containers);
    containers = sendContainersToGrid(containers, expMax, containerDim);
    // console.log(xPairs.map(xp => xp[0].x.kind).filter(k => k === 7).length);
    if (typeof _debug_ !== 'undefined') {
        _debug_.generated.elems.container = containers;
    }
    // Add the other half of the intersections too - all intersections has 
    // exactly one opposite curve intersection (t values come in pairs)
    // Also, set inOuts on each container, and `idx`
    let ioIdx = 0;
    for (const container of containers) {
        for (const x of container.xs) {
            x.container = container;
        }
        let inOuts;
        ({ inOuts, ioIdx } = getContainerInOuts(container, ioIdx));
        container.inOuts = inOuts;
    }
    // remove xs not belonging to a container (caused by filterContainers)
    xPairs = xPairs.filter(x => x[0].container !== undefined);
    setIntersectionNextValues(xPairs);
    // Connect container ins and outs
    for (const container of containers) {
        for (const out of container.inOuts) {
            if (out.dir === -1) {
                continue;
            }
            let _x_ = out._x_;
            // move to next 'in' __X__
            while (true) {
                _x_ = _x_.next;
                if (_x_.in_ !== undefined) {
                    break;
                }
            }
            out.next = _x_.in_;
            out.idx = out.next.idx;
        }
    }
    for (const container of containers) {
        container.inOuts.sort(compareOrderedInOut);
    }
    // set `next` and `prev` around container for each `inOut` for each `container`
    for (const container of containers) {
        const inOuts = container.inOuts;
        let prevInOut = inOuts[inOuts.length - 1];
        for (let i = 0; i < inOuts.length; i++) {
            const inOut = inOuts[i];
            inOut.prevAround = prevInOut;
            prevInOut.nextAround = inOut;
            prevInOut = inOut;
        }
    }
    return { extremes, containers };
}
function getLeftMost(container) {
    return container.box[0][0];
}
function getRightMost(container) {
    return container.box[1][0];
}


;// CONCATENATED MODULE: ./src/calc-paths/get-outermost-in-and-out.ts
/**
 * Get initial an intersection for the given loop. The loop must be such that
 * an extreme point on the loop forms part of an outermost loop that is outside
 * all other component loops that is formed by this loop and all other loops it
 * may intersect. This extreme point is guaranteed by the initial ordering of
 * the loops by their minimum y value.
 * @param loop
 * @param parent
 */
function getOutermostInAndOut(container) {
    const inOuts = container.inOuts;
    const firstInOut = inOuts[0];
    const lastInOut = inOuts[inOuts.length - 1];
    // set 'loop' direction
    if (firstInOut.dir === 1) {
        firstInOut.orientation = -1; // anti-clockwise
        return firstInOut;
    }
    else {
        lastInOut.orientation = +1;
        return lastInOut;
    }
}


;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/transformation/reverse.js
/**
 * Returns the given points (e.g. bezier curve) in reverse order.
 *
 * Implementation details:
 * ```
 * const reverse = ps => ps.slice().reverse()
 * ```
 *
 * @param ps a bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0],[1,1],[2,1],[2,0]]`
 *
 * @doc
 */
function reverse(ps) {
    return ps.slice().reverse();
}

//# sourceMappingURL=reverse.js.map
;// CONCATENATED MODULE: ./src/loop/loop.ts
function isPoint(ps) {
    if (ps.length === 2) {
        return (ps[0][0] === ps[1][0] && ps[0][1] === ps[1][1] // p[0] === p[1]
        );
    }
    if (ps.length === 3) {
        return (ps[0][0] === ps[1][0] && ps[0][1] === ps[1][1] && // p[0] === p[1]
            ps[1][1] === ps[2][1] && ps[1][1] === ps[2][1] // p[1] === p[2]
        );
    }
    return (ps[0][0] === ps[1][0] && ps[0][1] === ps[1][1] && // p[0] === p[1]
        ps[1][1] === ps[2][1] && ps[1][1] === ps[2][1] && // p[1] === p[2]
        ps[2][1] === ps[3][1] && ps[2][1] === ps[3][1] // p[2] === p[3]
    );
}
/**
 * @param beziers a pre-ordered array of bezier curves to add initially.
 * @param idx an optional index to assign to the loop - it can be anything
 */
function loopFromBeziers(beziers = [], idx) {
    const curves = [];
    const loop = { beziers, curves, idx };
    if (!beziers.length) {
        return loop;
    }
    let prev = undefined;
    let j = 0;
    for (let i = 0; i < beziers.length; i++) {
        if (isPoint(beziers[i])) {
            continue;
        }
        const curve = {
            loop,
            ps: beziers[i],
            prev: prev,
            next: undefined,
            idx: j
        };
        if (prev) {
            prev.next = curve;
        }
        prev = curve;
        curves.push(curve);
        j++;
    }
    // close loop
    const lastCurve = curves[curves.length - 1];
    curves[0].prev = lastCurve;
    lastCurve.next = curves[0];
    lastCurve.ps[lastCurve.ps.length - 1] = curves[0].ps[0];
    return loop;
}


;// CONCATENATED MODULE: ./src/loop/reverse-orientation.ts


/**
 * Returns a completely reversed loop of the given bezier loop.
 * @param loop
 */
function reverseOrientation(loop) {
    const beziers = [];
    const curves = loop.curves;
    for (let i = curves.length - 1; i >= 0; i--) {
        const curve = reverse(curves[i].ps);
        beziers.push(curve);
    }
    return loopFromBeziers(beziers, undefined);
}


;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/global-properties/classification/is-self-overlapping.js

/**
 * Returns `true` if the given bezier has all control points collinear and
 * it is self-overlapping, i.e. if it intersects itself at an infinite number
 * of points.
 *
 * * a bezier curve can only intersect itself at an infinite number of
 * points if its locus is a 'self-overlapping line'.
 *
 * @param ps an order 0,1,2 or 3 bezier curve given as an array of its control
 * points, e.g. `[[1,2],[3,4],[5,6],[7,8]]`
 *
 * @doc mdx
 */
function isSelfOverlapping(ps) {
    if (!isCollinear(ps)) {
        return false;
    }
    // Check if control points are non-strict monotone
    const xs = ps.map(p => p[0]);
    const ys = ps.map(p => p[1]);
    return !(isMonotone(xs) && isMonotone(ys));
}
/**
 * Returns true if the given array of numbers are non-strict monotone increasing.
 * @param xs an array of numbers
 *
 * @internal
 */
function isMonotoneIncreasing(xs) {
    for (let i = 1; i < xs.length; i++) {
        if (xs[i - 1] > xs[i]) {
            return false;
        }
    }
    return true;
}
/**
 * Returns true if the given array of numbers are non-strict monotone decreasing.
 * @param xs an array of numbers
 *
 * @internal
 */
function isMonotoneDecreasing(xs) {
    for (let i = 1; i < xs.length; i++) {
        if (xs[i - 1] < xs[i]) {
            return false;
        }
    }
    return true;
}
/**
 * @param xs
 *
 * @internal
 */
function isMonotone(xs) {
    return isMonotoneIncreasing(xs) || isMonotoneDecreasing(xs);
}

//# sourceMappingURL=is-self-overlapping.js.map
;// CONCATENATED MODULE: ./node_modules/flo-vector2d/node/distance-and-length/to-length.js
/**
 * Returns the given 2-vector scaled to the given length.
 * @param p a vector
 * @param length the length to scale to
 */
function toLength(p, length) {
    const c = length / Math.sqrt(p[0] * p[0] + p[1] * p[1]);
    return [c * p[0], c * p[1]];
}

//# sourceMappingURL=to-length.js.map
;// CONCATENATED MODULE: ./node_modules/flo-vector2d/node/index.js
//==================================
// 2d vector pure functions library
//==================================





























/**
 * Three 2d points are a counter-clockwise turn if ccw > 0, clockwise if
 * ccw < 0, and colinear if ccw === 0 because ccw is a determinant that gives
 * twice the signed area of the triangle formed by the points a, b and c.
 * * **certified**
 * @param A The first point
 * @param B The second point
 * @param C The third point
 */
const ccw = (/* unused pure expression or super */ null && (orient2d));
/**
 * Returns the second 2-vector minus the first.
 * @param p the first vector
 * @param q the second vector
  */
function node_fromTo(p, q) {
    return [q[0] - p[0], q[1] - p[1]];
}
/**
 * Performs linear interpolation between two 2d points and returns the
 * resulting point.
 * @param p the first point.
 * @param q the second point.
 * @param t the interpolation fraction (often in [0,1]).
 */
function interpolate(p, q, t) {
    return [
        p[0] + (q[0] - p[0]) * t,
        p[1] + (q[1] - p[1]) * t
    ];
}
/**
 * Returns the mean of two 2d points.
 * @param ps the two points
 */
function mean(ps) {
    const p = ps[0];
    const q = ps[1];
    return [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
}
/**
* Returns true if two 2-vectors are identical (by value), false otherwise.
* @param a a 2d vector
* @param b another 2d vector
*/
function equal(a, b) {
    return (a[0] === b[0] && a[1] === b[1]);
}
/**
 * Returns the closest point to the array of 2d points or if the array is empty
 * returns undefined.
 * @param p
 * @param ps
 */
function getClosestTo(p, ps) {
    let closestPoint = undefined;
    let closestDistance = Number.POSITIVE_INFINITY;
    for (let i = 0; i < ps.length; i++) {
        const q = ps[i];
        const d = squaredDistanceBetween(p, q);
        if (d < closestDistance) {
            closestPoint = q;
            closestDistance = d;
        }
    }
    return closestPoint;
}
/**
 * Returns the closest point to the array of 2d points by providing a distance
 * function. If the given array is empty, returns undefined.
 * @param p
 * @param ps
 * @param f a function that takes the object and returns a point in order to
 * apply the Euclidian distance.
 */
function getObjClosestTo(p, ps, f) {
    let closestObj = undefined; // Closest Point
    let closestDistance = Number.POSITIVE_INFINITY;
    for (let i = 0; i < ps.length; i++) {
        const o = ps[i];
        const d = squaredDistanceBetween(p, f(o));
        if (d < closestDistance) {
            closestObj = o;
            closestDistance = d;
        }
    }
    return closestObj;
}

//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/simultaneous-properties/equal.js
/**
 * Returns `true` if the two given bezier curves are exactly equal when compared
 * by value (deep equality), `false` otherwise
 *
 * @param ps1 an order 0,1,2 or 3 bezier curve given as an ordered array of its
 * control points, e.g. `[[0,0],[1,1],[2,1],[2,0]]`
 * @param ps2 another bezier curve
 *
 * @doc
 */
function equal_equal(ps1, ps2) {
    if (ps1 === ps2) {
        return true;
    }
    if (ps1.length !== ps2.length) {
        return false;
    }
    for (let i = 0; i < ps1.length; i++) {
        if (ps1[i][0] !== ps2[i][0] || ps1[i][1] !== ps2[i][1]) {
            return false;
        }
    }
    return true;
}

//# sourceMappingURL=equal.js.map
;// CONCATENATED MODULE: ./src/loop/normalize/are-all-points-different.ts
/**
 * Returns true if all points in the given array are different, false otherwise.
 * @param ps An array of points.
 */
function areAllPointsDifferent(ps) {
    for (let i = 0; i < ps.length - 1; i++) {
        for (let j = i + 1; j < ps.length; j++) {
            if (ps[i][0] === ps[j][0] && ps[i][1] === ps[j][1]) {
                return false;
            }
        }
    }
    return true;
}


;// CONCATENATED MODULE: ./src/loop/normalize/fix-bezier-by-point-spacing.ts

// import { lengthSquaredUpperBound, isLine, isCubicReallyQuad, toQuadraticFromCubic } from "flo-bezier3";


const { abs: fix_bezier_by_point_spacing_abs } = Math;
/**
 * Returns the same bezier if its points are well-spaced, e.g. all points not
 * coincident, etc., else fix it, if possible, and return the fixed bezier,
 * else return undefined.
 * @param ps A bezier
 */
function fixBezierByPointSpacing(ps, gridSpacing, sendToGrid) {
    if (ps === undefined) {
        return undefined;
    }
    // Early filter - if all points coincide, we're done - degenerate to point
    if (isReallyPoint(ps)) {
        return undefined; // Cannot fix
    }
    if (ps.length === 2) {
        // obviously no need to fix a line (that is not degenerate to a point)
        return ps;
    }
    if (ps.length === 3) {
        // Early filter - if no points coincide, we're done - well spaced
        if (areAllPointsDifferent(ps)) {
            // but if it s a line masquerading as a quadratic or cubic bezier
            // then make it line
            // return isLine(ps) ? [ps[0], ps[2]] : ps;
            return isCollinear(ps) ? [ps[0], ps[2]] : ps;
        }
        // Is the quadratic bezier overlapping onto itself? 
        if (arePsEqual(ps[0], ps[2])) {
            // a quadratic with equal endpoints (and not degenerate to a point)
            return undefined; // better to just remove it
            // return [ps[0], ps[1]];
        }
        // At this point not all points same and not all points different and 
        // not endpoints coincide, so either:
        // * point 0 and 1 coincide
        // * point 1 and 2 coincide
        // but in that case we simply have a line
        return [ps[0], ps[2]];
    }
    // ---- at this point we must have a cubic
    // Early filter - if no points coincide, we're done - well spaced
    if (areAllPointsDifferent(ps)) {
        const ps_ = checkCubicForLineOrQuad(ps);
        if (ps_ === undefined) {
            return undefined;
        }
        if (equal_equal(ps_, ps)) {
            return ps;
        }
        return fixBezierByPointSpacing(ps_, gridSpacing, sendToGrid);
    }
    if (arePsEqual(ps[0], ps[3])) {
        // we should simply handle this case for cubics - lines and quadratics 
        // degenerate into a point and a self-overlapping curve respectively.
        // if (isCollinear(ps)) { return [ps[0], ps[3]]; }
        if (isCollinear(ps)) {
            return undefined;
        }
        // if (arePsEqual(ps[1], ps[2])) {
        //     // it is a cubic degenerated to a line
        //     return [ps[0], ps[2]];
        // }
        // no need to fix anything - it is a loop - it cannot be a line or a
        // quadratic (they don't make loops)
        return ps;
    }
    if (isCollinear(ps)) {
        return [ps[0], ps[3]];
    }
    // At this point, either:
    // * point 0, 1 and 2 coincide
    // * point 1, 2 and 3 coincide
    // * points 0,1 AND points 2,3 coincide
    // * only point 0 and point 1 coincide
    // * only point 0 and point 2 coincide
    // * only point 1 and point 2 coincide
    // * only point 1 and point 3 coincide
    // * only point 2 and point 3 coincide
    // If point 0, 1 and 2 coincide OR point 1, 2 and 3 coincide OR
    // points 0,1 AND points 2,3 coincide we have a line
    if ((arePsEqual(ps[0], ps[1]) &&
        arePsEqual(ps[1], ps[2])) ||
        (arePsEqual(ps[1], ps[2]) &&
            arePsEqual(ps[2], ps[3])) ||
        (arePsEqual(ps[0], ps[1]) &&
            arePsEqual(ps[2], ps[3]))) {
        return fixBezierByPointSpacing([ps[0], ps[ps.length - 1]], gridSpacing, sendToGrid);
        /*
        // Check if first and last point are sufficiently far apart to split
        // the bezier into a line so that all points differ.

        // TODO2 - is below maybe not correct?
        //if ((ps[0][0] - ps[3][0]) > (3+1)*gridSpacing ||
        //    (ps[0][1] - ps[3][1]) > (3+1)*gridSpacing) {
        if (abs(ps[0][0] - ps[3][0]) > (3+1)*gridSpacing ||
            abs(ps[0][1] - ps[3][1]) > (3+1)*gridSpacing) {

            return [ps[0], ps[ps.length-1]];
        } else {
            // Points are not sufficiently far apart to resolve onto grid -
            // cannot fix it - it is basically a point.

            return undefined;
        }*/
    }
    // At this point, either:
    // * only point 0 and point 1 coincides
    // * only point 0 and point 2 coincides        
    // * only point 1 and point 2 coincides
    // * only point 1 and point 3 coincides
    // * only point 2 and point 3 coincides
    // If points 0,2 OR points 1,3 OR points 1,2 coincide we're done - they
    // are not problematic
    if (arePsEqual(ps[0], ps[2]) ||
        arePsEqual(ps[1], ps[3]) ||
        arePsEqual(ps[1], ps[2])) {
        // these kinds of cubics cannot be quadratics and the case for a line
        // has already been checked - we're done
        return ps;
    }
    // At this point, either:
    // * only point 0 and point 1 coincides
    // * only point 2 and point 3 coincides
    // it is a cubic with a cusp at an endpoint - these are fine for our
    // algorithm but lets move them a little apart for later alogorithms 
    // operating on our returned result.
    if (arePsEqual(ps[0], ps[1])) {
        // Move point 1 towards point 2 without surpassing it and ensuring it
        // will be on a new grid point
        // If squared distance between the points < 4 * gridSpacing just 
        // move them onto each other - this shouldn't affect the overall 
        // accuracy of the algorithm and it ensures the move > gridSpacing.
        if (squared_distance_between_squaredDistanceBetween(ps[1], ps[2]) < 4 * gridSpacing) {
            return [ps[0], ps[2], ps[2], ps[3]]; // cannot be a line or quad
        }
        else {
            const v = toLength(node_fromTo(ps[1], ps[2]), 2 * gridSpacing);
            const p1 = translate(ps[1], v);
            return checkCubicForLineOrQuad([
                ps[0],
                sendToGrid(p1),
                ps[2],
                ps[3]
            ]);
        }
    }
    if (arePsEqual(ps[2], ps[3])) {
        // Move point 2 towards point 1 without surpassing it and ensuring it
        // will be on a new grid point
        // If squared distance between the points < 4 * gridSpacing just 
        // move them onto each other - this shouldn't affect the overall 
        // accuracy of the algorithm and it ensures the move > gridSpacing.
        if (squared_distance_between_squaredDistanceBetween(ps[2], ps[1]) < 4 * gridSpacing) {
            return [
                ps[0],
                ps[1],
                ps[1],
                ps[3]
            ]; // cannot be a line or quad
        }
        else {
            const v = toLength(node_fromTo(ps[2], ps[1]), 2 * gridSpacing);
            const p2 = translate(ps[2], v);
            return checkCubicForLineOrQuad([
                ps[0],
                ps[1],
                sendToGrid(p2),
                ps[3]
            ]);
        }
    }
}
function checkCubicForLineOrQuad(ps) {
    // return isLine(ps)
    return isCollinear(ps)
        ? [ps[0], ps[3]]
        : isCubicReallyQuad(ps)
            ? cubicToQuadratic(ps)
            : ps;
}
/** Returns true if the points are the same */
function arePsEqual(p1, p2) {
    return p1[0] === p2[0] && p1[1] === p2[1];
}


;// CONCATENATED MODULE: ./src/loop/normalize/fix-beziers.ts



function sendToGrid(expMax, maxBitLength) {
    return (p) => [
        toGrid(p[0], expMax, maxBitLength),
        toGrid(p[1], expMax, maxBitLength)
    ];
}
function sendToGridNoop(p) { return p; }
/**
 * Returns the grid-aligned loop derived from the given input loop.
 *
 * Also ensures that:
 * * All points are coerced onto a grid.
 * * All bezier points of a single curve are seperated.
 * @param expMax The exponent, e, such that 2^e > all bezier coordinate points.
 * @param maxBitLength
 */
function fixBeziers(expMax, maxBitLength, doSendToGrid = true) {
    /** The actual control point grid spacing */
    const gridSpacing = 2 ** expMax * 2 ** (-maxBitLength);
    const sendToGrid_ = doSendToGrid
        ? sendToGrid(expMax, maxBitLength)
        : sendToGridNoop;
    return (loop) => {
        const newPss = [];
        for (let i = 0; i < loop.length; i++) {
            let ps = loop[i].slice();
            // Get endpoint of last good bezier or else the original start point
            const len = newPss.length;
            const prevGoodBezier = newPss[len - 1];
            const prevGoodBezierEndpoint = prevGoodBezier
                ? prevGoodBezier[prevGoodBezier.length - 1]
                : sendToGrid_(loop[0][0]); // Bit-align original start point
            // Set the start point to the previous good bezier's endpoint
            ps[0] = prevGoodBezierEndpoint;
            // Align to grid before doing any further checks
            ps = ps.map(p => sendToGrid_(p));
            // Check if ps degenerates into a self-overlapping line
            if (isSelfOverlapping(ps)) {
                // Change into a line with endponts that of the original bezier
                ps = [ps[0], ps[ps.length - 1]];
            }
            ps = fixBezierByPointSpacing(ps, gridSpacing, sendToGrid_);
            if (ps !== undefined) {
                newPss.push(ps);
            }
        }
        const len = newPss.length;
        if (!len) {
            return [];
        }
        // Connect the last bezier end-point to the first bezier start-point.
        const ps = newPss[len - 1];
        ps[ps.length - 1] = newPss[0][0];
        return newPss;
    };
}


;// CONCATENATED MODULE: ./src/loop/normalize/normalize-loop.ts



/**
 * Returns new loops from the given loops by aligning the 53-bit double
 * precision coordinates to 46-bit coordinates. This speeds up the algorithm
 * considerably.
 *
 * The following guarantees are put in place for the returned loops:
 * * All points are coerced onto a grid. In other words, such that the
 *   significand of all coordinates are reduced to a specified number of bits
 *   and the significant bits of all points 'overlap'.
 *
 * * No curves are disguised as higher order curves (this includes the case
 *   that no bezier is of zero length and the case where there are an infinite
 *   number of self-intersections). The curves are simply deflated exactly.
 *
 * * No cusps (this includes the case that all bezier end-points of each curve
 *   are seperated. (this prevents infinite curvature at the endpoints, etc).
 *   (this condition is not necessary for this algorithm but may help algorithms
 *    down the line that needs such guarantees)
 * @param bezierLoops
 * @param maxBitLength
 * @param expMax
 * @param doScramble
 * @param doSendToGrid
 */
function normalizeLoops(bezierLoops, maxBitLength, expMax, doScramble = false, doSendToGrid = true) {
    const fixBeziers_ = fixBeziers(expMax, maxBitLength, doSendToGrid);
    let loops = bezierLoops.slice();
    // just for testing purposes
    loops = doScramble ? scrambleLoops(loops, maxBitLength, expMax, 1) : loops;
    loops = loops.map(fixBeziers_);
    loops = loops.filter(loop => loop.length > 0);
    return loops;
}
/** Just for testing purposes - not used in the actual algorithm */
function scrambleLoops(loops, maxBitLength, expMax, mult = 0.02) {
    const loops_ = [];
    for (const loop of loops) {
        const loop_ = [];
        for (const bez of loop) {
            const bez_ = bez.map(v => v.map(c => {
                let c_ = 0;
                let ii = 0;
                let mblc;
                let mbl = 0;
                while (true) {
                    if (++ii > 10) {
                        break;
                    }
                    c_ = (c + Math.random()) * (1 + ((Math.random() - 0.7) * mult));
                    c_ = toGrid(c_, expMax, maxBitLength);
                    const bl = bit_length_bitLength(c_);
                    if (bl > mbl) {
                        mbl = bl;
                        mblc = c_;
                    }
                }
                return mblc;
            }));
            loop_.push(bez_);
        }
        loops_.push(loop_);
    }
    return loops_;
}


;// CONCATENATED MODULE: ./src/loop/normalize/get-max-coordinate.ts

/**
 * Returns the maximum control point coordinate value (x or y) within any loop.
 * @param loops The array of loops
 */
const getMaxCoordinate = memoize((loops) => {
    let max = 0;
    for (const loop of loops) {
        for (const ps of loop) {
            for (const p of ps) {
                for (const c of p) {
                    const c_ = Math.abs(c);
                    if (c_ > max) {
                        max = c_;
                    }
                }
            }
        }
    }
    return max;
});


;// CONCATENATED MODULE: ./node_modules/flo-poly/node/calculus/double/integrate.js
/**
 * Returns the result of integrating the given polynomial in double precision.
 *
 * @param p a polynomial with coefficients given densely as an array of double
 * floating point numbers from highest to lowest power, e.g. `[5,-3,0]`
 * represents the polynomial `5x^2 - 3x`
 * @param c the constant of intergration
 *
 * @example
 * ```typescript
 * integrate([3, 2, 1]); //=> [1, 1, 1, c]
 * ```
 *
 * @doc
 */
function integrate(p, c) {
    const result = [];
    const d = p.length - 1;
    for (let i = 0; i < d + 1; i++) {
        result.push(p[i] / (d + 1 - i));
    }
    result.push(c);
    return result;
}

//# sourceMappingURL=integrate.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/basic/double/add.js

// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗ Otherwise code is too slow❗
const add_removeLeadingZeros = removeLeadingZeros;
/**
 * Returns the result of adding two polynomials in double precision.
 *
 * @param p1 a polynomial with coefficients given densely as an array of double
 * floating point numbers from highest to lowest power, e.g. `[5,-3,0]`
 * represents the polynomial `5x^2 - 3x`
 * @param p2 another polynomial
 *
 * @example
 * ```typescript
 * add([1,2,3],[3,4]); //=> [1,5,7]
 * ```
 *
 * @doc
 */
function add_add(p1, p2) {
    // Initialize result array  
    const d1 = p1.length - 1;
    const d2 = p2.length - 1;
    const Δd = d1 - d2;
    const Δd1 = Δd < 0 ? +Δd : 0;
    const Δd2 = Δd > 0 ? -Δd : 0;
    const d = Math.max(d1, d2);
    // Add coefficients
    const result = [];
    for (let i = 0; i < d + 1; i++) {
        const c1 = p1[i + Δd1] || 0;
        const c2 = p2[i + Δd2] || 0;
        result.push(c1 + c2);
    }
    // Ensure the result is a valid polynomial representation
    return add_removeLeadingZeros(result);
}

//# sourceMappingURL=add.js.map
;// CONCATENATED MODULE: ./src/loop/get-loop-area.ts


/**
 * Returns the area of the given Loop.
 * * see e.g. https://mathinsight.org/greens_theorem_find_area
 */
function getLoopArea(loop) {
    let totalArea = 0;
    for (const curve of loop.curves) {
        const ps = curve.ps;
        const [x, y] = toPowerBasis(ps);
        const [dx, dy] = toPowerBasis_1stDerivative(ps);
        const xdy = multiply(x, dy);
        const ydx = negate(multiply(y, dx));
        const poly = integrate(add_add(xdy, ydx), 0);
        const area = Horner(poly, 1);
        totalArea += area;
    }
    return -totalArea / 2;
}


;// CONCATENATED MODULE: ./src/svg/beziers-to-svg-path-str.ts
/**
 * Returns an SVG path string representation of the given bezier loop.
 * @param beziers An array of bezier curves each given as an array of
 * control points.
 */
function beziersToSvgPathStr(beziers) {
    let str = '';
    for (let i = 0; i < beziers.length; i++) {
        const ps = beziers[i];
        if (i === 0) {
            str = 'M ' +
                ps[0][0].toString() + ' ' +
                ps[0][1].toString() + '\n';
        }
        if (ps.length === 4) {
            str += 'C ' +
                ps[1][0].toString() + ' ' +
                ps[1][1].toString() + ' ' +
                ps[2][0].toString() + ' ' +
                ps[2][1].toString() + ' ' +
                ps[3][0].toString() + ' ' +
                ps[3][1].toString() + ' ' + '\n';
        }
        else if (ps.length === 3) {
            str += 'Q ' +
                ps[1][0].toString() + ' ' +
                ps[1][1].toString() + ' ' +
                ps[2][0].toString() + ' ' +
                ps[2][1].toString() + ' ' + '\n';
        }
        else if (ps.length === 2) {
            str += 'L ' +
                ps[1][0].toString() + ' ' +
                ps[1][1].toString() + ' ' + '\n';
        }
    }
    return str + ' z' + '\n';
}


;// CONCATENATED MODULE: ./src/svg/loops-to-svg-path-str.ts

/**
 * Returns an SVG path string representation of the given bezier loops.
 * @param loops An array of loops having an array of bezier curves each given as
 * an array of control points.
 */
function loopsToSvgPathStr(loops) {
    let str = '';
    for (const loop of loops) {
        str = str + beziersToSvgPathStr(loop) + '\n';
    }
    return str;
}


;// CONCATENATED MODULE: ./src/calc-paths/simplify-paths.ts















/**
 * Uses the algorithm of Lavanya Subramaniam: PARTITION OF A NON-SIMPLE POLYGON
 * INTO SIMPLE POLYGONS;
 *
 * see http://www.cis.southalabama.edu/~hain/general/Theses/Subramaniam_thesis.pdf
 * but modified to use bezier curves (as opposed to polygons) and to additionally
 * take care of paths with multiple subpaths, i.e. such as disjoint nested paths.
 *
 * Also takes care of all special cases.
 *
 * @param loops an array of possibly intersecting paths
 * @param maxCoordinate optional - if not provided, it will be calculated - a
 * wrong value could cause the algorithm to fail
 */
function simplifyPaths(bezierLoops, maxCoordinate) {
    let timingStart;
    if (typeof _debug_ !== 'undefined') {
        timingStart = performance.now();
    }
    // bezierLoops = bezierLoops.map(loopFromBeziers).map(reverseOrientation).map(loops => loops.beziers);
    // console.log(loopsToSvgPathStr(bezierLoops));
    /**
     * All bezier coordinates will be truncated to this (bit-aligned) bitlength.
     * Higher bitlengths would increase the running time of the algorithm
     * considerably.
     */
    const maxBitLength = 46;
    // const maxBitLength = 32;
    maxCoordinate = maxCoordinate || getMaxCoordinate(bezierLoops);
    /** The exponent, e, such that 2**e >= all bezier coordinate points. */
    const expMax = Math.ceil(Math.log2(maxCoordinate));
    const gridSpacing = 2 ** expMax * 2 ** (-maxBitLength);
    /**
     * A size (based on the max value of the tangent) for the containers holding
     * critical points.
     */
    const containerSizeMultiplier = 2 ** 6;
    // const containerSizeMultiplier = 2**34;
    const containerDim = gridSpacing * containerSizeMultiplier;
    bezierLoops = normalizeLoops(bezierLoops, maxBitLength, expMax, false, true);
    // console.log(bezierLoops)
    addDebugInfo1(bezierLoops);
    bezierLoops.sort(orderLoopAscendingByMinY);
    const loops = bezierLoops.map((loop, i) => loopFromBeziers(loop, i));
    const { extremes } = getContainers(loops, containerDim, expMax);
    const root = createRootInOut();
    const takenLoops = new Set();
    const takenOuts = new Set(); // Taken intersections
    for (const loop of loops) {
        if (takenLoops.has(loop)) {
            continue;
        }
        takenLoops.add(loop);
        const parent = getTightestContainingLoop(root, loop);
        const container = extremes.get(loop)[0].container;
        if (!container.inOuts.length) {
            continue;
        }
        const initialOut = getOutermostInAndOut(container);
        // Each loop generated will give rise to one componentLoop. 
        initialOut.parent = parent;
        initialOut.windingNum = parent.windingNum + initialOut.orientation;
        initialOut.children = new Set();
        completePath(expMax, getOutermostInAndOut(container), takenLoops, takenOuts);
    }
    const loopTrees = splitLoopTrees(root);
    const outSets = loopTrees.map(getLoopsFromTree);
    const loopss = outSets.map(outSet => outSet.map((out, idx) => loopFromOut(out, outSet[0].orientation, idx)));
    /**
     * Arbitrarily choose min. loop area to be equal to one square pixel on a
     * 4096 x 4096 grid.
     */
    // const minLoopArea = (2**expMax * 2**(-12))**2;
    const minLoopArea = (2 ** expMax * 2 ** (-16)) ** 2;
    const loopss_ = [];
    for (let i = 0; i < loopss.length; i++) {
        const loops = loopss[i].filter((loop) => Math.abs(getLoopArea(loop)) > minLoopArea);
        if (loops.length) {
            loops.sort((loopA, loopB) => {
                return orderLoopAscendingByMinY(loopA.beziers, loopB.beziers);
            });
            loopss_.push(loops);
        }
    }
    addDebugInfo2(loopss_);
    if (typeof _debug_ !== 'undefined') {
        const timing = _debug_.generated.timing;
        timing.simplifyPaths = performance.now() - timingStart;
    }
    // console.log(loopsToSvgPathStr(loopss_[0].map(loop => loop.beziers)));
    return loopss_;
}
/**
 *
 * @param out
 * @param orientation
 * @param idx identifies the loop during debugging
 */
function loopFromOut(out, orientation, idx) {
    const loop = orientation < 0
        ? loopFromBeziers(out.beziers, idx)
        : reverseOrientation(loopFromBeziers(out.beziers, idx));
    return loop;
}
function addDebugInfo2(loopss) {
    if (typeof _debug_ === 'undefined') {
        return;
    }
    for (const loops of loopss) {
        _debug_.generated.elems.loop.push(...loops);
        _debug_.generated.elems.loops.push(loops);
        //console.log(loopsToSvgPathStr(loops.map(loop => loop.beziers)));
    }
    // Don't delete below commented lines - it is for creating test cases.
    // if (typeof document === 'undefined') { return; }
    // let g = document.getElementsByTagName('g')[0];
    // let invariants = loopss.map(loops => {
    //    return loops.map(loop => {
    //        let centroid = getLoopCentroid(loop);
    //        let area     = getLoopArea(loop);
    //        let bounds   = simplifyBounds(getLoopBounds(loop));
    //        //drawFs.crossHair(g, centroid, 'thin10 red nofill', 1, 0);
    //        return { centroid, area, bounds };
    //    });
    // });
    // console.log(JSON.stringify(invariants, undefined, '    '));
}
function addDebugInfo1(loops) {
    if (typeof _debug_ === 'undefined') {
        return;
    }
    // Modifies the displayed SVG to reflect changes caused by `normalizeLoops`.
    if (typeof document !== 'undefined') {
        const pathStr = loopsToSvgPathStr(loops);
        const $svg = document.getElementsByClassName('shape')[0];
        $svg.setAttributeNS(null, 'd', pathStr);
    }
    for (const loop of loops) {
        _debug_.generated.elems.loopPre.push(...loops);
        _debug_.generated.elems.loopsPre.push(loops);
        for (const ps of loop) {
            const lbb = getBoundingBox_(ps);
            const tbb = getBoundingBoxTight(ps);
            const bhull = getBoundingHull(ps);
            _debug_.generated.elems.bezier_.push(ps);
            _debug_.generated.elems.looseBoundingBox_.push(lbb);
            _debug_.generated.elems.tightBoundingBox_.push(tbb);
            _debug_.generated.elems.boundingHull_.push(bhull);
        }
    }
}
function createRootInOut() {
    return {
        dir: undefined,
        idx: 0,
        parent: undefined,
        children: new Set(),
        windingNum: 0,
        p: undefined,
        _x_: undefined,
        container: undefined
    };
}

// TODO - Handle case where bezier tangentially touches container edge. 
// Simply move the container boundary 1/8th or 1/16th inward and try again. 
// This case is truly extremely rare and not hard to fix completely.

;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/default-class.js
const DEFAULT_CLASS = 'red thin10 nofill ';

//# sourceMappingURL=default-class.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/xmlns.js
const XMLNS = 'http://www.w3.org/2000/svg';

//# sourceMappingURL=xmlns.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/circle.js


/**
 * Draws a circle
 * @param g An SVG group element wherein to draw the circle.
 * @param circle
 * @param classes
 * @param delay
 */
function circle(g, circle, classes = DEFAULT_CLASS, delay) {
    const c = circle.center;
    const r = circle.radius;
    const $circle = document.createElementNS(XMLNS, 'circle');
    $circle.setAttributeNS(null, "cx", c[0].toString());
    $circle.setAttributeNS(null, "cy", c[1].toString());
    $circle.setAttributeNS(null, "r", r.toString());
    $circle.setAttributeNS(null, "class", classes);
    g.appendChild($circle);
    if (delay) {
        setTimeout(() => $circle.remove(), delay);
    }
    return [$circle];
}

//# sourceMappingURL=circle.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/dot.js

/**
 * Draws a dot.
 */
function dot_dot(g, p, r = 3, color = 'red', delay) {
    const [$dot] = circle(g, { center: p, radius: r }, 'dot ' + color, delay);
    if (delay) {
        setTimeout(() => $dot.remove(), delay);
    }
    return [$dot];
}

//# sourceMappingURL=dot.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/line.js



/**
 *
 * @param snap
 * @param l
 * @param classes
 */
function line(g, l, classes = DEFAULT_CLASS, delay = 0, controlPointClass = undefined, controlPointRadius = 0) {
    const $line = document.createElementNS(XMLNS, 'line');
    $line.setAttributeNS(null, "x1", l[0][0].toString());
    $line.setAttributeNS(null, "y1", l[0][1].toString());
    $line.setAttributeNS(null, "x2", l[1][0].toString());
    $line.setAttributeNS(null, "y2", l[1][1].toString());
    $line.setAttributeNS(null, "class", classes);
    g.appendChild($line);
    let $dots = [];
    if (controlPointClass !== undefined) {
        for (const p of l) {
            $dots.push(...dot_dot(g, p, controlPointRadius, controlPointClass, delay));
        }
    }
    for (const $ of $dots) {
        g.appendChild($);
    }
    const $svgs = [$line, ...$dots];
    if (delay) {
        setTimeout(() => { for (const $ of $svgs) {
            $.remove();
        } }, delay);
    }
    return $svgs;
}

//# sourceMappingURL=line.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/cross-hair.js



/**
 * Draws a crosshair.
 */
function crossHair(g, p, classes = DEFAULT_CLASS, r = 3, delay) {
    const circle_ = { center: p, radius: r };
    const $circle = circle(g, circle_, classes);
    const l1 = [[p[0] - r, p[1]], [p[0] + r, p[1]]];
    const l2 = [[p[0], p[1] - r], [p[0], p[1] + r]];
    const $l1 = line(g, l1, classes);
    const $l2 = line(g, l2, classes);
    if (delay) {
        setTimeout(() => {
            $circle.forEach(e => e.remove());
            $l1.forEach(e => e.remove());
            $l2.forEach(e => e.remove());
        }, delay);
    }
    return [...$circle, ...$l1, ...$l2];
}

//# sourceMappingURL=cross-hair.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/rect.js


function rect(g, rect, classes = DEFAULT_CLASS, delay) {
    const [[x0, y0], [x1, y1]] = rect;
    const x = x0 < x1 ? x0 : x1;
    const y = y0 < y1 ? y0 : y1;
    const width = Math.abs(x0 - x1);
    const height = Math.abs(y0 - y1);
    const $rect = document.createElementNS(XMLNS, 'rect');
    $rect.setAttributeNS(null, "x", x.toString());
    $rect.setAttributeNS(null, "y", y.toString());
    $rect.setAttributeNS(null, "width", width.toString());
    $rect.setAttributeNS(null, "height", height.toString());
    if (classes) {
        $rect.setAttributeNS(null, "class", classes);
    }
    g.appendChild($rect);
    if (delay) {
        setTimeout(() => $rect.remove(), delay);
    }
    return [$rect];
}

//# sourceMappingURL=rect.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/polygon.js


/**
 * Draws a polygon
 * @param g
 * @param poly the polygon specified as an array of points - the last point does
 * not have to be specified
 * @param class_
 * @param delay
 */
function polygon(g, poly, class_ = DEFAULT_CLASS, delay) {
    const $path = document.createElementNS(XMLNS, 'path');
    let d = `M${poly[0][0]} ${poly[0][1]} L`;
    for (let i = 0; i < poly.length; i++) {
        d += `${poly[i][0]} ${poly[i][1]} `;
    }
    d += ' z';
    $path.setAttributeNS(null, "d", d);
    if (class_) {
        $path.setAttributeNS(null, "class", class_);
    }
    g.appendChild($path);
    if (delay) {
        setTimeout(() => $path.remove(), delay);
    }
    return [$path];
}

//# sourceMappingURL=polygon.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/loop.js


function loop(g, curves, class_ = DEFAULT_CLASS, delay) {
    if (!curves.length) {
        return [];
    }
    const $path = document.createElementNS(XMLNS, 'path');
    let d = `M${curves[0][0][0]} ${curves[0][0][1]} `;
    for (let i = 0; i < curves.length; i++) {
        const curve = curves[i];
        d += `${getType(curve.length)} `;
        for (let j = 1; j < curve.length; j++) {
            d += `${curve[j][0]} ${curve[j][1]} `;
        }
    }
    d += ' z';
    $path.setAttributeNS(null, "d", d);
    if (class_) {
        $path.setAttributeNS(null, "class", class_);
    }
    g.appendChild($path);
    if (delay) {
        setTimeout(() => $path.remove(), delay);
    }
    return [$path];
}
function getType(len) {
    if (len === 2) {
        return 'L';
    }
    if (len === 3) {
        return 'Q';
    }
    if (len === 4) {
        return 'C';
    }
}

//# sourceMappingURL=loop.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/polyline.js


function polyline(g, poly, class_ = DEFAULT_CLASS, delay) {
    if (poly.length < 2) {
        return [];
    }
    const $path = document.createElementNS(XMLNS, 'path');
    let d = `M${poly[0][0]} ${poly[0][1]} L`;
    for (let i = 0; i < poly.length; i++) {
        d += `${poly[i][0]} ${poly[i][1]} `;
    }
    $path.setAttributeNS(null, "d", d);
    if (class_) {
        $path.setAttributeNS(null, "class", class_);
    }
    g.appendChild($path);
    if (delay) {
        setTimeout(() => $path.remove(), delay);
    }
    return [$path];
}

//# sourceMappingURL=polyline.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/quad-bezier.js




function quadBezier(g, ps, class_ = DEFAULT_CLASS, delay = 0, controlPointClass = undefined, controlPointRadius = 0, lineCLass = undefined) {
    const [[x0, y0], [x1, y1], [x2, y2]] = ps;
    const $path = document.createElementNS(XMLNS, 'path');
    $path.setAttributeNS(null, "d", `M${x0} ${y0} Q${x1} ${y1} ${x2} ${y2}`);
    if (class_) {
        $path.setAttributeNS(null, "class", class_);
    }
    let $dots = [];
    if (controlPointClass !== undefined) {
        for (const p of ps) {
            $dots.push(...dot_dot(g, p, controlPointRadius, controlPointClass, delay));
        }
    }
    let $lines = [];
    if (lineCLass !== undefined) {
        for (let i = 0; i < ps.length - 1; i++) {
            $lines.push(...line(g, [ps[i], ps[i + 1]], lineCLass, delay));
        }
    }
    const $svgs = [$path, ...$dots, ...$lines];
    for (const $ of $svgs) {
        g.appendChild($);
    }
    if (delay) {
        setTimeout(() => { for (const $ of $svgs) {
            $.remove();
        } }, delay);
    }
    return $svgs;
}

//# sourceMappingURL=quad-bezier.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/cubic-bezier.js





function cubicBezier(g, ps, class_ = DEFAULT_CLASS, delay = 0, controlPointClass = undefined, controlPointRadius = 0, lineCLass = undefined) {
    const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;
    if (x0 === x3 && x1 === x3 && x2 === x3 &&
        y0 === y3 && y1 === y3 && y2 === y3) {
        return crossHair(g, [x0, y0], class_, 0.2, delay);
    }
    const $path = document.createElementNS(XMLNS, 'path');
    $path.setAttributeNS(null, "d", `M${x0} ${y0} C${x1} ${y1} ${x2} ${y2} ${x3} ${y3}`);
    $path.setAttributeNS(null, "class", class_);
    let $dots = [];
    if (controlPointClass !== undefined) {
        for (const p of ps) {
            $dots.push(...dot_dot(g, p, controlPointRadius, controlPointClass, delay));
        }
    }
    let $lines = [];
    if (lineCLass !== undefined) {
        for (let i = 0; i < ps.length - 1; i++) {
            $lines.push(...line(g, [ps[i], ps[i + 1]], lineCLass, delay));
        }
    }
    const $svgs = [$path, ...$dots, ...$lines];
    for (const $ of $svgs) {
        g.appendChild($);
    }
    if (delay) {
        setTimeout(() => { for (const $ of $svgs) {
            $.remove();
        } }, delay);
    }
    return $svgs;
}

//# sourceMappingURL=cubic-bezier.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/bezier.js




/**
 * Draws a bezier.
 *
 * @param g
 * @param bezier
 * @param class_
 * @param delay
 * @param controlPointClass a dot at each control point will be drawn if specified
 * @param lineClass a line to each control point will be drawn if specified
 * @returns
 */
function bezier(g, bezier, class_ = DEFAULT_CLASS, delay = 0, controlPointClass = undefined, controlPointRadius = 0, lineClass = undefined) {
    if (bezier.length === 2) {
        return line(g, bezier, class_, delay, controlPointClass, controlPointRadius);
    }
    else if (bezier.length === 3) {
        return quadBezier(g, bezier, class_, delay, controlPointClass, controlPointRadius, lineClass);
    }
    else if (bezier.length === 4) {
        return cubicBezier(g, bezier, class_, delay, controlPointClass, controlPointRadius, lineClass);
    }
    return [];
}

//# sourceMappingURL=bezier.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/beziers.js

const COLORS = ['red', 'green', 'cyan', 'blue'];
/**
 * Draws beziers.
 * @param snap
 * @param beziers
 * @param delay
 */
function beziers(g, beziers, classes, delay) {
    const alternateColors = classes === undefined;
    const $beziers = [];
    for (let i = 0; i < beziers.length; i++) {
        const ps = beziers[i];
        const color = COLORS[i % COLORS.length];
        const class_ = alternateColors
            ? 'thin5 nofill ' + color
            : classes;
        $beziers.push(...bezier(g, ps, class_));
    }
    if (delay) {
        setTimeout(() => $beziers.forEach(e => e.remove()), delay);
    }
    return $beziers;
}

//# sourceMappingURL=beziers.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/evaluate-bezier.js
/**
 * Returns an estimate of evaluating the given bezier at the given t value.
 * @param ps An order 1, 2 or bezier
 * @param t The parameter ∈ [0,1]
 */
function evaluateBezier(ps, t) {
    const s = 1 - t;
    if (ps.length === 4) {
        // cubic
        const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;
        const x = x0 * s ** 3 + 3 * x1 * s ** 2 * t + 3 * x2 * s * t ** 2 + x3 * t ** 3;
        const y = y0 * s ** 3 + 3 * y1 * s ** 2 * t + 3 * y2 * s * t ** 2 + y3 * t ** 3;
        return [x, y];
    }
    if (ps.length === 3) {
        // quadratic
        const [[x0, y0], [x1, y1], [x2, y2]] = ps;
        const x = x0 * s ** 2 + 2 * x1 * s * t + x2 * t ** 2;
        const y = y0 * s ** 2 + 2 * y1 * s * t + y2 * t ** 2;
        return [x, y];
    }
    if (ps.length === 2) {
        // line
        const [[x0, y0], [x1, y1]] = ps;
        const x = x0 * s + x1 * t;
        const y = y0 * s + y1 * t;
        return [x, y];
    }
    return [NaN, NaN];
}

//# sourceMappingURL=evaluate-bezier.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/split-at.js
/**
 * Returns 2 new beziers split at the given t parameter, i.e. for the ranges
 * [0,t] and [t,1].
 * @param ps
 * @param t
 */
function splitAt(ps, t) {
    if (ps.length === 2) {
        return splitLineAt(ps, t);
    }
    else if (ps.length === 3) {
        return splitQuadAt(ps, t);
    }
    else if (ps.length === 4) {
        return splitCubicAt(ps, t);
    }
    return [];
}
/**
 * Returns 2 new cubic beziers split at the given t parameter, i.e. for the ranges
 * [0,t] and [t,1]. Uses de Casteljau's algorithm.
 *
 * A loose bound on the accuracy of the resultant points is given by:
 * |δP| = 2n*max_k(|b_k|)η, where n = 3 (cubic), b_k are the control points
 * abd η is Number.EPSILON.
 * @param ps A cubic bezier curve
 * @param t The t parameter where the curve should be split
 */
function splitCubicAt(ps, t) {
    const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;
    const s = 1 - t;
    const t2 = t * t;
    const t3 = t2 * t;
    const s2 = s * s;
    const s3 = s2 * s;
    /** The split point */
    const p = [
        t3 * x3 + 3 * s * t2 * x2 + 3 * s2 * t * x1 + s3 * x0,
        t3 * y3 + 3 * s * t2 * y2 + 3 * s2 * t * y1 + s3 * y0
    ];
    const ps1 = [
        [x0, y0],
        [t * x1 + s * x0,
            t * y1 + s * y0],
        [t2 * x2 + 2 * s * t * x1 + s2 * x0,
            t2 * y2 + 2 * s * t * y1 + s2 * y0],
        p
    ];
    const ps2 = [
        p,
        [t2 * x3 + 2 * t * s * x2 + s2 * x1,
            t2 * y3 + 2 * t * s * y2 + s2 * y1],
        [t * x3 + s * x2,
            t * y3 + s * y2],
        [x3, y3]
    ];
    return [ps1, ps2];
}
function splitQuadAt(ps, t) {
    const [[x0, y0], [x1, y1], [x2, y2]] = ps;
    const s = 1 - t;
    /** The split point */
    const p = [
        s * s * x0 + 2 * s * t * x1 + t * t * x2,
        s * s * y0 + 2 * s * t * y1 + t * t * y2
    ];
    const ps1 = [
        [x0, y0],
        [s * x0 + t * x1,
            s * y0 + t * y1],
        p
    ];
    const ps2 = [
        p,
        [s * x1 + t * x2,
            s * y1 + t * y2],
        [x2, y2]
    ];
    return [ps1, ps2];
}
function splitLineAt(ps, t) {
    const [[x0, y0], [x1, y1]] = ps;
    const s = 1 - t;
    /** The split point */
    const p = [
        s * x0 + t * x1,
        s * y0 + t * y1
    ];
    const ps1 = [
        [x0, y0],
        p
    ];
    const ps2 = [
        p,
        [x1, y1]
    ];
    return [ps1, ps2];
}

//# sourceMappingURL=split-at.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/bezier-from-bezier-piece.js


/**
 * Returns a new bezier from the given bezier by limiting its t range.
 *
 * Duplicated here so we don't circularly depend on flo-bezier.
 *
 * Uses de Casteljau's algorithm.
 *
 * @param ps a bezier
 * @param tRange a t range
 */
function bezierFromBezierPiece(ps, tRange) {
    // If tRange = [0,1] then return original bezier.
    if (tRange[0] === 0 && tRange[1] === 1) {
        return ps;
    }
    // If tRange[0] === tRange[1] then return a single point degenerated bezier.
    if (tRange[0] === tRange[1]) {
        const p = evaluateBezier(ps, tRange[0]);
        return [p, p, p, p];
    }
    if (tRange[0] === 0) {
        return splitAt(ps, tRange[1])[0];
    }
    if (tRange[1] === 1) {
        return splitAt(ps, tRange[0])[1];
    }
    // At this stage we know the t range is not degenerate and tRange[0] !== 0 
    // and tRange[1] !== 1
    return splitAt(splitAt(ps, tRange[0])[1], (tRange[1] - tRange[0]) / (1 - tRange[0]))[0];
}

//# sourceMappingURL=bezier-from-bezier-piece.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/bezier-piece.js





/**
 * Draws a bezier piece, i.e. a bezier within a specified t range.
 * @param snap
 * @param bezierPiece
 * @param class
 * @param delay
 */
function bezierPiece(g, ps_, tRange, class_ = DEFAULT_CLASS, delay) {
    const $elems = (tRange[0] === tRange[1])
        // Draw crosshair if t range bounds are equal.
        ? crossHair(g, evaluateBezier(ps_, tRange[0]), class_, 1.5)
        : bezier(g, bezierFromBezierPiece(ps_, tRange), class_);
    if (delay) {
        setTimeout(() => $elems.forEach(e => e.remove()), delay);
    }
    return $elems;
}

//# sourceMappingURL=bezier-piece.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/text.js


/**
 * Draws text
 * @param g a SVG group element wherein to draw
 * @param p
 * @param str
 * @param fontSize
 * @param classes
 * @param delay
 */
function text_text(g, p, str, fontSize, classes = DEFAULT_CLASS, delay) {
    const $text = document.createElementNS(XMLNS, 'text');
    $text.setAttributeNS(null, "x", p[0].toString());
    $text.setAttributeNS(null, "y", p[1].toString());
    $text.setAttributeNS(null, "font-size", fontSize.toString());
    $text.setAttributeNS(null, "class", classes);
    $text.textContent = str;
    g.appendChild($text);
    if (delay) {
        setTimeout(() => $text.remove(), delay);
    }
    return [$text];
}

//# sourceMappingURL=text.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw-fs.js














const drawFs = {
    circle: circle,
    crossHair: crossHair,
    dot: dot_dot,
    line: line,
    rect: rect,
    beziers: beziers,
    bezier: bezier,
    bezierPiece: bezierPiece,
    quadBezier: quadBezier,
    cubicBezier: cubicBezier,
    polygon: polygon,
    loop: loop,
    polyline: polyline,
    text: text_text
};

//# sourceMappingURL=draw-fs.js.map
;// CONCATENATED MODULE: ./src/debug/draw-elem/draw-min-y.ts


function drawMinY(g, pos) {
    const p = evalDeCasteljau(pos.curve.ps, pos.t);
    // const ps = toCubic(pos.curve.ps);
    //console.log('x: ', getX(ps));
    //console.log('y: ', getY(ps));
    //console.log('t: ', pos.t);
    const $elems = drawFs.crossHair(g, p, 'red thin10 nofill');
    return $elems;
}


;// CONCATENATED MODULE: ./src/loop/get-loop-centroid.ts



/**
 * Returns the approximate centroid of the given loop
 *
 * * **precondition**: loop must be a jordan curve (i.e. closed and simple)
 *
 * see https://sites.math.washington.edu/~king/coursedir/m324a10/as/centroid-green.pdf
 */
function getLoopCentroid(loop) {
    const A = getLoopArea(loop);
    let cx = 0;
    let cy = 0;
    for (const curve of loop.curves) {
        const ps = curve.ps;
        const [x, y] = toPowerBasis(ps);
        const [dx, dy] = toPowerBasis_1stDerivative(ps);
        const polyX = integrate(multiply(multiply(x, x), dy), 0);
        const polyY = integrate(multiply(multiply(y, y), dx), 0);
        const _x = Horner(polyX, 1);
        const _y = Horner(polyY, 1);
        cx += _x;
        cy += _y;
    }
    const a = 1 / (2 * A);
    return [-a * cx, a * cy];
}


;// CONCATENATED MODULE: ./src/point-on-shape/point-on-shape.ts

/**
 * Represents a point on the shape boundary.
 */
class PointOnShape {
    /**
     * @param curve	The [[ICurve]] on the shape boundary this points belong to.
     * @param t The bezier parameter value on the curve to identify the point
     * coordinates.
     */
    constructor(curve, t) {
        this.curve = curve;
        this.t = t;
        // Cache
        this.p_ = undefined;
    }
    /**
     * The planar point coordinates of this [[PointOnShape]].
     */
    get p() {
        return this.p_ === undefined
            ? this.p_ = evalDeCasteljau(this.curve.ps, this.t)
            : this.p_;
    }
}


;// CONCATENATED MODULE: ./src/loop/get-loop-bounds.ts



const INF = Number.POSITIVE_INFINITY;
/**
 * Returns the bounds of the given loop - used in tests only.
 */
const get_loop_bounds_getLoopBounds = memoize(function (loop) {
    const extremes = [
        [
            { bezier: undefined, t: undefined, val: INF },
            { bezier: undefined, t: undefined, val: INF }
        ],
        [
            { bezier: undefined, t: undefined, val: -INF },
            { bezier: undefined, t: undefined, val: -INF }
        ]
    ];
    loop.curves.forEach(function (curve) {
        const ps = curve.ps;
        const bounds = getBounds_(ps);
        {
            {
                const v = bounds.box[0][0];
                const x = extremes[0][0].val;
                if (v < x || (v === x && bounds.ts[0][0] > extremes[0][0].t)) {
                    extremes[0][0] = {
                        bezier: curve,
                        t: bounds.ts[0][0],
                        val: v
                    };
                }
            }
            {
                const v = bounds.box[0][1];
                const x = extremes[0][1].val;
                if (v < x || (v === x && bounds.ts[0][1] > extremes[0][1].t)) {
                    extremes[0][1] = {
                        bezier: curve,
                        t: bounds.ts[0][1],
                        val: v
                    };
                }
            }
        }
        {
            {
                const v = bounds.box[1][0];
                const x = extremes[1][0].val;
                if (v > x || (v === x && bounds.ts[1][0] > extremes[1][0].t)) {
                    extremes[1][0] = {
                        bezier: curve,
                        t: bounds.ts[1][0],
                        val: v
                    };
                }
            }
            {
                const v = bounds.box[1][1];
                const x = extremes[1][1].val;
                if (v > x || (v === x && bounds.ts[1][1] > extremes[1][1].t)) {
                    extremes[1][1] = {
                        bezier: curve,
                        t: bounds.ts[1][1],
                        val: v
                    };
                }
            }
        }
    });
    return {
        minX: new PointOnShape(extremes[0][0].bezier, extremes[0][0].t),
        minY: new PointOnShape(extremes[0][1].bezier, extremes[0][1].t),
        maxX: new PointOnShape(extremes[1][0].bezier, extremes[1][0].t),
        maxY: new PointOnShape(extremes[1][1].bezier, extremes[1][1].t)
    };
});


;// CONCATENATED MODULE: ./src/loop/simplify-bounds.ts
/** Used in tests only - not used in algorithm */
function simplifyBounds(bounds) {
    return {
        minX: bounds.minX.p[0],
        minY: bounds.minY.p[1],
        maxX: bounds.maxX.p[0],
        maxY: bounds.maxY.p[1],
    };
}


;// CONCATENATED MODULE: ./src/debug/draw-elem/default-class.ts
const default_class_DEFAULT_CLASS = 'red thin10 nofill ';


;// CONCATENATED MODULE: ./src/debug/draw-elem/xmlns.ts
const xmlns_XMLNS = 'http://www.w3.org/2000/svg';


;// CONCATENATED MODULE: ./src/debug/draw-elem/draw-shape.ts



// TODO - move to flo-draw
/**
 * Draws an SVG shape
 * @param g
 * @param shape the shape specified as an array of bezier curves
 *
 * * the last point does not have to be specified
 *
 * @param class_
 * @param delay
 */
function drawShape(g, beziers, class_ = default_class_DEFAULT_CLASS, delay) {
    const $path = document.createElementNS(xmlns_XMLNS, 'path');
    const d = beziersToSvgPathStr(beziers);
    $path.setAttributeNS(null, "d", d);
    if (class_) {
        $path.setAttributeNS(null, "class", class_);
    }
    g.appendChild($path);
    if (delay) {
        setTimeout(() => $path.remove(), delay);
    }
    return [$path];
}


;// CONCATENATED MODULE: ./src/debug/draw-elem/draw-loop.ts






function drawLoop(g, loop) {
    const centroid = getLoopCentroid(loop);
    const area = getLoopArea(loop);
    const bounds = simplifyBounds(get_loop_bounds_getLoopBounds(loop));
    drawFs.crossHair(g, centroid, 'thin10 red nofill', 1, 500);
    return drawShape(g, loop.curves.map(curve => curve.ps), 'red thin10 fill30', undefined);
}


;// CONCATENATED MODULE: ./src/debug/draw-elem/draw-loops.ts

function drawLoops(g, loops) {
    const $svgs = [];
    for (const loop of loops) {
        $svgs.push(...drawLoop(g, loop));
    }
    return $svgs;
}


;// CONCATENATED MODULE: ./src/debug/draw-elem/draw-circle-percent.ts
function drawCirclePercent(g, center, radiusPercent, classes) {
    const XMLNS = 'http://www.w3.org/2000/svg';
    const $circle = document.createElementNS(XMLNS, 'circle');
    $circle.setAttributeNS(null, "cx", center[0].toString());
    $circle.setAttributeNS(null, "cy", center[1].toString());
    $circle.setAttributeNS(null, "r", radiusPercent.toString() + '%');
    $circle.setAttributeNS(null, "class", classes);
    g.appendChild($circle);
    return $circle;
}


;// CONCATENATED MODULE: ./src/debug/draw-elem/draw-intersection.ts

function drawIntersection(g, x) {
    return [drawCirclePercent(g, x.x.box[0], 0.7, 'purple thin5 nofill')];
}


;// CONCATENATED MODULE: ./src/debug/draw-elem/draw-container.ts

function drawContainer(g, container, classes, delay = 0) {
    const rect = container.box;
    const xs = container.xs;
    const scale = 2 ** 0 * 0.0125;
    // intersections
    const $circles = [];
    for (let i = 0; i < xs.length; i++) {
        const x = xs[i];
        $circles.push(...drawFs.circle(g, { center: x.x.box[0], radius: scale }, 'thin2 red nofill', delay));
    }
    // text showing intersection ordering
    const $texts = [];
    const inOuts = container.inOuts;
    for (let i = 0; i < inOuts.length; i++) {
        const inOut = inOuts[i];
        const p = inOut.p.slice();
        const color = inOut.dir === -1 ? 'red' : 'blue';
        const size = scale * (1 + (0.5 * i));
        if (inOut.idx !== undefined) {
            $texts.push(...drawFs.text(g, p, inOut.idx.toString(), scale * 8, `thin5 nofill ${color}`, delay));
        }
        $circles.push(...drawFs.dot(g, inOut.p, size, `thin2 nofill ${color}`, delay));
    }
    // container rect
    const $outline = drawFs.rect(g, rect, 'thin2 blue nofill', delay);
    return [
        ...$outline,
        ...$circles,
        ...$texts
    ];
}


;// CONCATENATED MODULE: ./src/debug/draw-elem/draw-loose-bounding-box.ts

/** @internal */
function drawLooseBoundingBox(g, box, classes = 'thin5 brown nofill', delay = 0) {
    const [[x0, y0], [x1, y1]] = box;
    box = [[x0, y0], [x1, y0], [x1, y1], [x0, y1]];
    const $box = drawFs.polygon(g, box, classes, delay);
    return $box;
}


;// CONCATENATED MODULE: ./src/debug/draw-elem/draw-tight-bounding-box.ts

/** @internal */
function drawTightBoundingBox(g, box, classes = 'thin5 pinker nofill', delay = 0) {
    const $box = drawFs.polygon(g, box, classes, delay);
    return $box;
}


;// CONCATENATED MODULE: ./src/debug/draw-elem/draw-bounding-hull.ts

/** @internal */
function drawBoundingHull(g, hull, classes = 'thin5 black nofill', delay = 0) {
    const $polygon = drawFs.polygon(g, hull, classes, delay);
    return $polygon;
}


;// CONCATENATED MODULE: ./src/debug/draw-elem/draw-loop-pre.ts

function drawLoopPre(g, loop) {
    //const centroid = getLoopCentroid(loop);
    //const area     = getLoopArea(loop);
    //const bounds   = simplifyBounds(getLoopBounds(loop));
    //drawFs.crossHair(g, centroid, 'thin10 red nofill', 1, 0);
    return drawShape(g, loop, 'red thin10 fill30', undefined);
}


;// CONCATENATED MODULE: ./src/debug/draw-elem/draw-loops-pre.ts

function drawLoopsPre(g, loops) {
    const $svgs = [];
    for (const loop of loops) {
        $svgs.push(...drawLoopPre(g, loop));
    }
    return $svgs;
}


;// CONCATENATED MODULE: ./src/debug/draw-elem/draw-elem.ts











const drawElemFunctions = {
    minY: drawMinY,
    loop: drawLoop,
    loopPre: drawLoopPre,
    loopsPre: drawLoopsPre,
    loops: drawLoops,
    intersection: drawIntersection,
    container: drawContainer,
    bezier_: drawFs.bezier,
    looseBoundingBox_: drawLooseBoundingBox,
    tightBoundingBox_: drawTightBoundingBox,
    boundingHull_: drawBoundingHull,
};


;// CONCATENATED MODULE: ./src/debug/debug.ts

/**
 * Returns a new debug object by spreading boolean operation debug information
 * onto the given (possibly undefined) debug object.
 * @param debug a (possibly undefined) debug object
 */
function enableDebugForBooleanOp(debugOn) {
    if (!debugOn) {
        window._debug_ = undefined;
        return;
    }
    const debug = window._debug_;
    const debug_ = {
        ...debug,
        generated: {
            ...(!debug ? {} : !debug.generated ? {} : debug.generated),
            elems: {
                ...(!debug ? {} : !debug.generated ? {} : !debug.generated.elems ? {} : debug.generated.elems),
                minY: [],
                loop: [],
                loopPre: [],
                loopsPre: [],
                loops: [],
                intersection: [],
                container: [],
                bezier_: [],
                looseBoundingBox_: [],
                tightBoundingBox_: [],
                boundingHull_: [],
            },
            timing: {
                ...(!debug ? {} : !debug.generated ? {} : !debug.generated.timing ? {} : debug.generated.timing),
                normalize: 0,
                simplifyPaths: 0,
            }
        },
        fs: {
            ...(!debug ? {} : !debug.fs ? {} : debug.fs),
            drawElem: {
                ...(!debug ? {} : !debug.fs ? {} : !debug.fs.drawElem ? {} : debug.fs.drawElem),
                ...drawElemFunctions
            }
        }
    };
    window._debug_ = debug_;
}


;// CONCATENATED MODULE: ./src/svg/path-state.ts
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


;// CONCATENATED MODULE: ./src/svg/path-segment/z.ts
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
function z(s) {
    const ps = [
        s.p,
        s.initialPoint
    ];
    s.prev2ndCubicControlPoint = undefined;
    s.prev2ndQuadraticControlPoint = undefined;
    return ps;
}


;// CONCATENATED MODULE: ./src/svg/path-segment/c.ts
/**
 * @hidden
 * C and c: (from www.w3.org)
 *
 * params: x1 y1 x2 y2 x y
 *
 * Draws a cubic Bézier curve from the current point to (x,y)
 * using (x1,y1) as the control point at the beginning of the
 * curve and (x2,y2) as the control point at the end of the
 * curve. C (uppercase) indicates that absolute coordinates
 * will follow; c (lowercase) indicates that relative
 * coordinates will follow. Multiple sets of coordinates may
 * be specified to draw a polybézier. At the end of the
 * command, the new current point becomes the final (x,y)
 * coordinate pair used in the polybézier.
 */
function c(s) {
    const ps = [
        s.p,
        [s.vals[0], s.vals[1]],
        [s.vals[2], s.vals[3]],
        [s.vals[4], s.vals[5]]
    ];
    s.prev2ndCubicControlPoint = ps[2];
    s.prev2ndQuadraticControlPoint = undefined;
    return ps;
}


;// CONCATENATED MODULE: ./src/svg/path-segment/s.ts
/**
 * @hidden
 * S and s: (from www.w3.org)
 *
 * params: x2 y2 x y
 *
 * Draws a cubic Bézier curve from the current point to (x,y). The first control
 * point is assumed to be the reflection of the second control point on the
 * previous command relative to the current point. (If there is no previous
 * command or if the previous command was not an C, c, S or s, assume the first
 * control point is coincident with the current point.) (x2,y2) is the second
 * control point (i.e., the control point at the end of the curve). S
 * (uppercase) indicates that absolute coordinates will follow; s (lowercase)
 * indicates that relative coordinates will follow. Multiple sets of coordinates
 * may be specified to draw a polybézier. At the end of the command, the new
 * current point becomes the final (x,y) coordinate pair used in the polybézier.
 */
function s(s) {
    const p = s.prev2ndCubicControlPoint
        ? [(s.p[0] - s.prev2ndCubicControlPoint[0]) + s.p[0],
            (s.p[1] - s.prev2ndCubicControlPoint[1]) + s.p[1]]
        : s.p;
    const ps = [
        s.p,
        p,
        [s.vals[0], s.vals[1]],
        [s.vals[2], s.vals[3]]
    ];
    s.prev2ndCubicControlPoint = ps[2];
    s.prev2ndQuadraticControlPoint = undefined;
    return ps;
}


;// CONCATENATED MODULE: ./src/svg/path-segment/l.ts
/**
 * @hidden
 * L and l: (from www.w3.org)
 *
 * params: x y
 *
 * Draw a line from the current point to the given (x,y) coordinate which
 * becomes the new current point. L (uppercase) indicates that absolute
 * coordinates will follow; l (lowercase) indicates that relative coordinates
 * will follow. A number of coordinates pairs may be specified to draw a
 * polyline. At the end of the command, the new current point is set to the
 * final set of coordinates provided.
 */
function l(s) {
    const ps = [
        s.p,
        s.vals
    ];
    s.prev2ndCubicControlPoint = undefined;
    s.prev2ndQuadraticControlPoint = undefined;
    return ps;
}


;// CONCATENATED MODULE: ./src/svg/path-segment/h.ts
/**
 * @hidden
 * H and h: (from www.w3.org)
 *
 * params: x
 *
 * Draws a horizontal line from the current point (cpx, cpy) to (x, cpy). H
 * (uppercase) indicates that absolute coordinates will follow; h (lowercase)
 * indicates that relative coordinates will follow. Multiple x values can be
 * provided (although usually this doesn't make sense). At the end of the
 * command, the new current point becomes (x, cpy) for the final value of x.
 */
function h(s) {
    const ps = [
        s.p,
        [s.vals[0], s.p[1]]
    ];
    s.prev2ndCubicControlPoint = undefined;
    s.prev2ndQuadraticControlPoint = undefined;
    return ps;
}


;// CONCATENATED MODULE: ./src/svg/path-segment/v.ts
/**
 * @hidden
 * V and v: (from www.w3.org)
 *
 * params: y
 *
 * Draws a vertical line from the current point (cpx, cpy) to (cpx, y). V
 * (uppercase) indicates that absolute coordinates will follow; v (lowercase)
 * indicates that relative coordinates will follow. Multiple y values can be
 * provided (although usually this doesn't make sense). At the end of the
 * command, the new current point becomes (cpx, y) for the final value of y.
 */
function v(s) {
    const ps = [
        s.p,
        [s.p[0], s.vals[0]]
    ];
    s.prev2ndCubicControlPoint = undefined;
    s.prev2ndQuadraticControlPoint = undefined;
    return ps;
}


;// CONCATENATED MODULE: ./src/svg/path-segment/q.ts
/**
 * @hidden
 * Q and q: (from www.w3.org)
 *
 * params: x1 y1 x y
 *
 * Draws a quadratic Bézier curve from the current point to (x,y) using (x1,y1)
 * as the control point. Q (uppercase) indicates that absolute coordinates will
 * follow; q (lowercase) indicates that relative coordinates will follow.
 * Multiple sets of coordinates may be specified to draw a polybézier. At the
 * end of the command, the new current point becomes the final (x,y) coordinate
 * pair used in the polybézier.
 */
function q(s) {
    const QP1 = [s.vals[0], s.vals[1]];
    const QP2 = [s.vals[2], s.vals[3]];
    s.prev2ndCubicControlPoint = undefined;
    s.prev2ndQuadraticControlPoint = QP1;
    const ps = [s.p, QP1, QP2];
    return ps;
}


;// CONCATENATED MODULE: ./src/svg/path-segment/t.ts
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
function t(s) {
    const p = s.prev2ndQuadraticControlPoint
        ? [(s.p[0] - s.prev2ndQuadraticControlPoint[0]) + s.p[0],
            (s.p[1] - s.prev2ndQuadraticControlPoint[1]) + s.p[1]]
        : s.p;
    const QP1 = p;
    const QP2 = [s.vals[0], s.vals[1]];
    s.prev2ndCubicControlPoint = undefined;
    s.prev2ndQuadraticControlPoint = QP1;
    return [s.p, QP1, QP2];
}


;// CONCATENATED MODULE: ./src/svg/arc-to-cubic-curves.ts
// TODO - a work in progress - currently using a different (less accurate?) 
// function.
/**
 * @hidden
 * Get an array of corresponding cubic bezier curve parameters for given arc
 * curve paramters.
 */
function arcToCubicCurves(
/** the start point */
pS, 
/** radius x */
rx, 
/** radius y */
ry, 
/** x-axis rotation - in degrees */
rotationAngle, largeArcFlag, sweepFlag, pE) {
    return [[
            pS,
            pE
        ]];
}
/**
 * @param x
 * @param y
 * @param angleRad
 */
function arc_to_cubic_curves_rotate(x, y, angleRad) {
    const X = x * Math.cos(angleRad) - y * Math.sin(angleRad);
    const Y = x * Math.sin(angleRad) + y * Math.cos(angleRad);
    return { x: X, y: Y };
}
/**
 * @param degrees
 */
function degToRad(degrees) {
    return (Math.PI * degrees) / 180;
}


;// CONCATENATED MODULE: ./src/svg/path-segment/a.ts

/**
 * @hidden
 * A and a: (from www.w3.org)
 *
 * params: rx ry x-axis-rotation large-arc-flag sweep-flag x y
 *
 * Draws an elliptical arc from the current point to (x, y). The size and
 * orientation of the ellipse are defined by two radii (rx, ry) and an
 * x-axis-rotation, which indicates how the ellipse as a whole is rotated
 * relative to the current coordinate system. The center (cx, cy) of the ellipse
 * is calculated automatically to satisfy the constraints imposed by the other
 * parameters. large-arc-flag and sweep-flag contribute to the automatic
 * calculations and help determine how the arc is drawn.
 */
function a(s) {
    s.prev2ndCubicControlPoint = undefined;
    s.prev2ndQuadraticControlPoint = undefined;
    const curves = arcToCubicCurves(s.p, s.vals[0], s.vals[1], s.vals[2], s.vals[3], s.vals[4], [s.vals[5], s.vals[6]]);
    const lastPs = curves[curves.length - 1];
    s.p = lastPs[lastPs.length - 1]; // Update current point
    return curves;
}


;// CONCATENATED MODULE: ./src/svg/get-beziers-from-raw-paths.ts










const pathFs = {
    //a, // elliptical arc
    c: c,
    h: h,
    l: l,
    q: q,
    s: s,
    t: t,
    v: v,
    z: z // close path
};
/**
 * Returns order 1, 2 and 3 beziers from the given SVG DOM element. If a path
 * data tag is not "C, Q or L, etc", i.e. if it is not an absolute bezier
 * coordinate then it is converted into one.
 * @param paths An SVG element
 */
function getBeziersFromRawPaths(paths) {
    if (paths.length === 0) {
        return []; // A shape is not described   
    }
    if (paths[0].type.toLowerCase() !== 'm') {
        throw new Error('Invalid SVG - every new path must start with an M or m.');
    }
    const s = new PathState();
    const beziersArrays = [];
    let beziers = [];
    let prevType = undefined;
    for (let i = 0; i < paths.length; i++) {
        const pathSeg = paths[i];
        const type = pathSeg.type.toLowerCase();
        s.vals = pathSeg.values;
        // If pathSeg was lowercase, it is relative - make absolute
        if (pathSeg.type === type) {
            if (type === 'v') {
                s.vals[0] += s.p[1];
            }
            else if (type === 'a') {
                s.vals[5] += s.p[0];
                s.vals[6] += s.p[1];
            }
            else {
                for (let i = 0; i < s.vals.length; i++) {
                    s.vals[i] += s.p[i % 2];
                }
            }
        }
        if (type === 'm') {
            if (beziers.length) {
                // This is a subpath, close as if the previous command was a 
                // Z or z.
                if (prevType !== 'z') {
                    beziers.push(z(s));
                }
                // Start new path
                beziersArrays.push(beziers);
                beziers = [];
            }
            s.initialPoint = s.p = s.vals;
            prevType = type;
            continue;
        }
        if (type === 'a') {
            beziers.push(...a(s));
        }
        else {
            const f = pathFs[type];
            if (!f) {
                throw new Error('Invalid SVG - command not recognized.');
            }
            const ps = f(s);
            s.p = ps[ps.length - 1]; // Update current point
            beziers.push(ps);
        }
        prevType = type;
    }
    if (beziers.length > 0) {
        // This is a subpath, close as if the previous command was a Z or z.
        if (prevType !== 'z') {
            beziers.push(z(s));
        }
        // Start new path
        beziersArrays.push(beziers);
    }
    return beziersArrays;
}


;// CONCATENATED MODULE: ./src/svg/path-data-polyfill/parse-number.ts
/**
 * @hidden
 * Parse a number from an SVG path. This very closely follows genericParseNumber(...) from
 * Source/core/svg/SVGParserUtilities.cpp.
 * Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-PathDataBNF
 * @param source
 */
function parseNumber(source) {
    let exponent = 0;
    let integer = 0;
    let frac = 1;
    let decimal = 0;
    let sign = 1;
    let expsign = 1;
    const startIndex = source._currentIndex;
    source._skipOptionalSpaces();
    // Read the sign.
    if (source._currentIndex < source._endIndex && source._string[source._currentIndex] === "+") {
        source._currentIndex += 1;
    }
    else if (source._currentIndex < source._endIndex && source._string[source._currentIndex] === "-") {
        source._currentIndex += 1;
        sign = -1;
    }
    if (source._currentIndex === source._endIndex ||
        ((source._string[source._currentIndex] < "0" || source._string[source._currentIndex] > "9") &&
            source._string[source._currentIndex] !== ".")) {
        throw new Error('The first character of a number must be one of [0-9+-.].');
    }
    // Read the integer part, build right-to-left.
    const startIntPartIndex = source._currentIndex;
    while (source._currentIndex < source._endIndex &&
        source._string[source._currentIndex] >= "0" &&
        source._string[source._currentIndex] <= "9") {
        source._currentIndex += 1; // Advance to first non-digit.
    }
    if (source._currentIndex !== startIntPartIndex) {
        let scanIntPartIndex = source._currentIndex - 1;
        let multiplier = 1;
        while (scanIntPartIndex >= startIntPartIndex) {
            integer += multiplier * (Number(source._string[scanIntPartIndex]) - 0);
            scanIntPartIndex -= 1;
            multiplier *= 10;
        }
    }
    // Read the decimals.
    if (source._currentIndex < source._endIndex && source._string[source._currentIndex] === ".") {
        source._currentIndex += 1;
        if (source._currentIndex >= source._endIndex ||
            source._string[source._currentIndex] < "0" ||
            source._string[source._currentIndex] > "9") {
            throw new Error('There must be a least one digit following the .');
        }
        while (source._currentIndex < source._endIndex &&
            source._string[source._currentIndex] >= "0" &&
            source._string[source._currentIndex] <= "9") {
            frac *= 10;
            decimal += (Number(source._string.charAt(source._currentIndex))) / frac;
            source._currentIndex += 1;
        }
    }
    // Read the exponent part.
    if (source._currentIndex !== startIndex &&
        source._currentIndex + 1 < source._endIndex &&
        (source._string[source._currentIndex] === "e" || source._string[source._currentIndex] === "E") &&
        (source._string[source._currentIndex + 1] !== "x" && source._string[source._currentIndex + 1] !== "m")) {
        source._currentIndex += 1;
        // Read the sign of the exponent.
        if (source._string[source._currentIndex] === "+") {
            source._currentIndex += 1;
        }
        else if (source._string[source._currentIndex] === "-") {
            source._currentIndex += 1;
            expsign = -1;
        }
        if (source._currentIndex >= source._endIndex ||
            source._string[source._currentIndex] < "0" ||
            source._string[source._currentIndex] > "9") {
            throw new Error('There must be an exponent.');
        }
        while (source._currentIndex < source._endIndex &&
            source._string[source._currentIndex] >= "0" &&
            source._string[source._currentIndex] <= "9") {
            exponent *= 10;
            exponent += (Number(source._string[source._currentIndex]));
            source._currentIndex += 1;
        }
    }
    let number = integer + decimal;
    number *= sign;
    if (exponent) {
        number *= Math.pow(10, expsign * exponent);
    }
    if (startIndex === source._currentIndex) {
        throw new Error('Internal error: startIndex === source._currentIndex');
    }
    source._skipOptionalSpacesOrDelimiter();
    return number;
}


;// CONCATENATED MODULE: ./src/svg/path-data-polyfill/source.ts

/** @hidden */
const COMMAND_MAP = {
    Z: "Z", M: "M", L: "L", C: "C", Q: "Q", A: "A", H: "H", V: "V", S: "S", T: "T",
    z: "Z", m: "m", l: "l", c: "c", q: "q", a: "a", h: "h", v: "v", s: "s", t: "t"
};
/** @hidden */
class Source {
    constructor(string) {
        this._string = string;
        this._currentIndex = 0;
        this._endIndex = this._string.length;
        this._prevCommand = undefined;
        this._skipOptionalSpaces();
    }
    parseSegment() {
        const char = this._string[this._currentIndex];
        let command = COMMAND_MAP[char];
        if (command === undefined) {
            if (this._prevCommand === undefined) {
                throw new Error('Implicit command not allowed for first commands.');
            }
            // Check for remaining coordinates in the current command.
            if ((char === "+" || char === "-" || char === "." || (char >= "0" && char <= "9")) &&
                this._prevCommand !== "Z") {
                if (this._prevCommand === "M") {
                    command = "L";
                }
                else if (this._prevCommand === "m") {
                    command = "l";
                }
                else {
                    command = this._prevCommand;
                }
            }
            else {
                throw new Error('Remaining coordinates not found for implicit command');
            }
        }
        else {
            this._currentIndex += 1;
        }
        this._prevCommand = command;
        let values = undefined;
        const cmd = command.toUpperCase();
        if (cmd === "H" || cmd === "V") {
            values = [parseNumber(this)];
        }
        else if (cmd === "M" || cmd === "L" || cmd === "T") {
            values = [parseNumber(this), parseNumber(this)];
        }
        else if (cmd === "S" || cmd === "Q") {
            values = [parseNumber(this), parseNumber(this), parseNumber(this), parseNumber(this)];
        }
        else if (cmd === "C") {
            values = [
                parseNumber(this),
                parseNumber(this),
                parseNumber(this),
                parseNumber(this),
                parseNumber(this),
                parseNumber(this)
            ];
        }
        else if (cmd === "A") {
            values = [
                parseNumber(this),
                parseNumber(this),
                parseNumber(this),
                this._parseArcFlag(),
                this._parseArcFlag(),
                parseNumber(this),
                parseNumber(this)
            ];
        }
        else if (cmd === "Z") {
            this._skipOptionalSpaces();
            values = [];
        }
        if (values === undefined) {
            throw new Error('Unknown command');
        }
        else {
            return { type: command, values };
        }
    }
    hasMoreData() {
        return this._currentIndex < this._endIndex;
    }
    initialCommandIsMoveTo() {
        // If the path is empty it is still valid, so return true.
        if (!this.hasMoreData()) {
            return true;
        }
        const command = COMMAND_MAP[this._string[this._currentIndex]];
        return command === "M" || command === "m";
    }
    _isCurrentSpace() {
        const char = this._string[this._currentIndex];
        return char <= " " && (char === " " || char === "\n" || char === "\t" || char === "\r" || char === "\f");
    }
    _skipOptionalSpaces() {
        while (this._currentIndex < this._endIndex && this._isCurrentSpace()) {
            this._currentIndex += 1;
        }
        return this._currentIndex < this._endIndex;
    }
    _skipOptionalSpacesOrDelimiter() {
        if (this._currentIndex < this._endIndex &&
            !this._isCurrentSpace() &&
            this._string[this._currentIndex] !== ",") {
            return false;
        }
        if (this._skipOptionalSpaces()) {
            if (this._currentIndex < this._endIndex && this._string[this._currentIndex] === ",") {
                this._currentIndex += 1;
                this._skipOptionalSpaces();
            }
        }
        return this._currentIndex < this._endIndex;
    }
    _parseArcFlag() {
        if (this._currentIndex >= this._endIndex) {
            throw new Error('Unable to parse arc flag');
        }
        let flag = undefined;
        const flagChar = this._string[this._currentIndex];
        this._currentIndex += 1;
        if (flagChar === "0") {
            flag = 0;
        }
        else if (flagChar === "1") {
            flag = 1;
        }
        else {
            throw new Error('Unable to parse arc flag - arc flag must be 0 or 1');
        }
        this._skipOptionalSpacesOrDelimiter();
        return flag;
    }
}


;// CONCATENATED MODULE: ./src/svg/path-data-polyfill/parse-path-data-string.ts

/**
 * @hidden
 * @param string
 */
function parsePathDataString(string) {
    if (!string.length) {
        return [];
    }
    const source = new Source(string);
    const pathData = [];
    if (!source.initialCommandIsMoveTo()) {
        throw new Error('Path must start with m or M');
    }
    while (source.hasMoreData()) {
        pathData.push(source.parseSegment());
    }
    return pathData;
}


;// CONCATENATED MODULE: ./src/svg/get-paths-from-str.ts


/**
 * Returns an array of loops with each loop consisting of an array of beziers
 * and each bezier in turn consisting of an array of control points from the
 * given SVG path string. An array of loops are returned (as opposed to a single
 * loop) since an SVG path may have sub-paths.
 * @param str The SVG path string, e.g. 'M1 1 C 5 1 5 2 4 2 C 3 3 1 3 1 1 z'
 */
function getPathsFromStr(str) {
    return getBeziersFromRawPaths(parsePathDataString(str));
}


;// CONCATENATED MODULE: ./src/index.ts













var __webpack_exports__areBoxesIntersectingDd = __webpack_exports__.Rf;
var __webpack_exports__beziersToSvgPathStr = __webpack_exports__.A3;
var __webpack_exports__doConvexPolygonsIntersect = __webpack_exports__.X7;
var __webpack_exports__enableDebugForBooleanOp = __webpack_exports__.At;
var __webpack_exports__getIntersections = __webpack_exports__.Q8;
var __webpack_exports__getLoopArea = __webpack_exports__.QP;
var __webpack_exports__getLoopCentroid = __webpack_exports__.C2;
var __webpack_exports__getPathsFromStr = __webpack_exports__.Jt;
var __webpack_exports__loopFromBeziers = __webpack_exports__.bQ;
var __webpack_exports__simplifyPaths = __webpack_exports__.FU;
var __webpack_exports__sweepLine = __webpack_exports__.Dw;
export { __webpack_exports__areBoxesIntersectingDd as areBoxesIntersectingDd, __webpack_exports__beziersToSvgPathStr as beziersToSvgPathStr, __webpack_exports__doConvexPolygonsIntersect as doConvexPolygonsIntersect, __webpack_exports__enableDebugForBooleanOp as enableDebugForBooleanOp, __webpack_exports__getIntersections as getIntersections, __webpack_exports__getLoopArea as getLoopArea, __webpack_exports__getLoopCentroid as getLoopCentroid, __webpack_exports__getPathsFromStr as getPathsFromStr, __webpack_exports__loopFromBeziers as loopFromBeziers, __webpack_exports__simplifyPaths as simplifyPaths, __webpack_exports__sweepLine as sweepLine };
