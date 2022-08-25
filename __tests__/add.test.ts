import { add } from "../functions/add";

describe(".add", () => {
  test("add two number", () => {
    expect(add(2)(5)).toBe(7);
  });
});
