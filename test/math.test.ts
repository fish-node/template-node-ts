import {add, minus, multi} from "../src/math";

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("adds 1 - 2 to equal -1", () => {
  expect(minus(1, 2)).toBe(-1);
});

test("adds 1 * 2 to equal 2", () => {
  expect(multi(1, 2)).toBe(2);
});
