import test from 'ava';
import App from '../app';

function add(x, y) {
    App();
    return x + y;
}

test("1 + 2 is equal to 3", t => {
    t.is(add(1, 2), 3, "1 + 2 = 3");
})