import { add } from "./math";

it("Should sum 2+2 = 4", () => {
  expect(add([2, 2])).toBe(4);
});

it("Should sum -4+2 = -2", () => {
  expect(add([-4, 2])).toBe(-2);
});
