import { sum, mult, splitIntoWords } from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
  //перед каждым тестом перезаписывает переменные
  a = 1;
  b = 2;
  c = 3;
});
test.skip("sum should be correct", () => {
  //action
  const result1 = sum(a, b);
  a = 100;
  const result2 = sum(a, b);

  //expect result
  expect(result1).toBe(3);
  expect(result2).toBe(102);
});
test("multiply should be correct", () => {
  //action
  const result1 = mult(a, b);
  const result2 = mult(b, c);

  //expect result
  expect(result1).toBe(2);
  expect(result2).toBe(6);
});
test("split into words should be correct", () => {
  //data
  const sentence1 = "Hello my friend!";
  const sentence2 = "JS - is programming  language";
  //action
  const result1 = splitIntoWords(sentence1);
  const result2 = splitIntoWords(sentence2);
  //expect result
  expect(result1.length).toBe(3);
  expect(result1[0]).toBe("hello");
  expect(result1[1]).toBe("my");
  expect(result1[2]).toBe("friend");

  expect(result2.length).toBe(4);
  expect(result2[1]).toBe("is");
  expect(result2[2]).toBe("programming");
});
