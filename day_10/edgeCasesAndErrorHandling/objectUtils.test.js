const {
  isObjectEmpty,
  mergeObjects,
  getNestedValue,
} = require("./objectUtils");

// TODO: Test cases for isObjectExmpty
test("An empty object should return true", () => {
  expect(isObjectEmpty({})).toBeTruthy();
});

test("A non-empty object should return false", () => {
  expect(isObjectEmpty({ name: "Ammu" })).toBeFalsy();
});

test("A non-object variable should return Invalid input", () => {
  expect(() => isObjectEmpty([1, 2, 3])).toThrow("Invalid input");
});

test("A null value instead of object should return Invalid input", () => {
  expect(() => isObjectEmpty(null)).toThrow("Invalid input");
});

// TODO: Test cases for mergeObjects
test("Object1 and Object2 should be merged together", () => {
  expect(mergeObjects({ name: "Yokesh" }, { age: 20 })).toEqual({
    name: "Yokesh",
    age: 20,
  });
});

test("Passing a String as a first parameter", () => {
  expect(() => mergeObjects("Yokesh", { age: 20 })).toThrow("Invalid input");
});

test("Passing a Number as a second parameter", () => {
  expect(() => mergeObjects({ name: "Yokesh" }, 20)).toThrow("Invalid input");
});

test("Passing null as a first parameter", () => {
  expect(() => mergeObjects(null, { age: 20 })).toThrow("Invalid input");
});

test("Passing null as a second parameter", () => {
  expect(() => mergeObjects({ name: "Ammu" }, null)).toThrow("Invalid input");
});

// TODO: Test cases for getNestedValue
test('A non-object input for object parameter should throw "Invalid object input"', () => {
  expect(() => getNestedValue("users", "details.address")).toThrow(
    "Invalid object input"
  );
});

test('A null input for object parameter should throw "Invalid object input"', () => {
  expect(() => getNestedValue(null, "details.address")).toThrow(
    "Invalid object input"
  );
});

test('An Array input for object parameter should throw "Invalid object input"', () => {
  expect(() =>
    getNestedValue(["users", "details", "address"], "details.address")
  ).toThrow("Invalid object input");
});

test('A path input that is neither a string nor an array should throw "Invalid path input"', () => {
  expect(() =>
    getNestedValue(
      { name: "Yokesh", age: 20 },
      { address: "No.123 fake street" }
    )
  ).toThrow("Invalid path input");
});

test('An empty-object input should throw "Cannot get values from an empty object"', () => {
  expect(() => getNestedValue({}, "details.address")).toThrow(
    "Cannot get values from an empty object"
  );
});

test('A wrong keys for the path parameter as a string type should throw "Invalid path"', () => {
  expect(() =>
    getNestedValue(
      { name: "Yokesh", address: { street: "No.123 fake street" } },
      "details.street"
    )
  ).toThrow("Invalid path");
});

test('A wrong keys for the path parameter as an array type should throw "Invalid path"', () => {
  expect(() =>
    getNestedValue(
      { name: "Yokesh", address: { street: "No.123 fake street" } },
      ["details", "street"]
    )
  ).toThrow("Invalid path");
});

test("An non-empty object with a string type path should return nestedValue", () => {
  expect(
    getNestedValue(
      {
        name: "Yokesh",
        address: { street: "No.123 fake street", city: "Fake city" },
      },
      "address.street"
    )
  ).toBe("No.123 fake street");
});

test("An non-empty object with an array type path should return nestedValue", () => {
  expect(
    getNestedValue(
      {
        name: "Yokesh",
        address: { street: "No.123 fake street", city: "Fake city" },
      },
      ["address", "city"]
    )
  ).toBe("Fake city");
});
