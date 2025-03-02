/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var curr_val = init
    return {
        increment: () => {
            return ++curr_val;
        },
        decrement: () => {
            return --curr_val;
        },
        reset: () => {
            curr_val = init;
            return curr_val;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */