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
