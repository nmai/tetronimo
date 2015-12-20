'use strict'

/**
 * Filters out "dirty" input.
 *
 * This is the poor man's version of http://underscorejs.org/docs/underscore.html#section-83
 *
 * Factory-style.
 */
function debounce(callback, delay) {
  let timer = void(0)
  return function () {
      clearTimeout(timer)
      timer = setTimeout(callback, delay)
  }
}

/**
 * Knuth-Fisher-Yates Shuffle Algorithm
 *
 * Note: shuffles in place, so the original array gets modified.
 */
function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}