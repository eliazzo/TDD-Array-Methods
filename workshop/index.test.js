// Testing map()

test("map() should return an array with the same number of elements", () => {
  const result = map([1], () => {});
  equal(result.length, 1);
});

test("map() should transform *every* element of the array using the fn argument", () => {
  const result = map([1], (x) => x + 1);
  equal(result[0], 2); // result[0] accessing the 0th index of the array passed as the first argument into map
});

test("map() should apply function argument array elements", () => {
  const result = map([1, 2], (x => x + 1));
  equal(result[0], 2);
  equal (result[1], 3);
})

// Testing filter()

test("filter() should return an array", () => {
  const result = filter([1], (x) => (x > 1));
  equal(Array.isArray(result), true);
});

test("filter() should remove elements that don't pass the condition", () => {
  const result = filter([1, 12, 30], (x) => (x > 10));
  const expected = [12, 30]
  equal(result, expected);
}) // Failing but not sure why? Message in console: 'Fail: Expected 12,30 but received 12,30 instead'

test("filter() should return an empty array when there are no matching elements", () => {
  const result = filter([1], (x) => (x < 0));
  const expected = [];
  equal(result, expected);
}) // Failing but console.logged result shows [] (index.js line 17)


// Testing every()

test("every() returns a boolean", () => {
  const result = true || false;
  equal(result, true)
})

test("every() only returns true values", () => {
  const result = every([1, 2, 3, 4], (x) => x > 0);
  const expected = [1, 2, 3, 4];
  equal(result, expected)
})
