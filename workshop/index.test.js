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

test("Test every() returns true if every element satisfies the condition", () => {
  const result = every([1,2,3,4], (x) => x > 0);
  const expected = true;
  equal(result, expected);
}
)

test("Test every() should return false if ANY element fails the test", () => {
  const result = every([-1, 0, 1, 2], (x) => x > 0);
  const expected = false;
  equal(result, expected)
})

// Testing some()
test("Some returns true if at least one element in the array satisfies the condition", () => {
  const result = some([1, 2, 3], (x) => x > 2);
  const expected = true;
  equal(result, expected)
})

test("Some returns false if no elements in the array satisfy the condition", () => {
  const result = some([1, 2, 3], (x) => x < 0);
  const expected = false;
  equal(result, expected);
})

// Testing find()

test("Find() loops over each element in the array and calls the function with each one", () => {
  const result = find([1, 2, 3], (x) => (x) === 2);
  const expected = 2;
  equal(result, expected);
})

test("If find() returns false for every element then undefined is returned", () => {
  const result = find([1, 2, 3], (x) => x > 10);
  const expected = undefined;
  equal(result, expected);
  
})

// Testing reduce()

test("reduce() returns a single value", () => {
  const result = reduce([1,2,3], (total, x) => total + x, 0);
  const expected = 6;
  equal(result, expected, "function should return a single value");
})

test("reduce() should call the fn for each element and use the return value as the new accumulator", () => {
  const result = reduce([1,2], (total, x) => total + x, 0);
  const expected = 3;
  equal(result, expected);
  
})
