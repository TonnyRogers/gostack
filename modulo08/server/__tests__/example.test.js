function sum(a, b) {
  return a + b;
}

test('if i call sum function whit 5 and 5 values it should return 10', () => {
  const result = sum(5, 5);

  expect(result).toBe(10);
});
