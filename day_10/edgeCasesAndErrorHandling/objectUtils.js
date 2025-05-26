function isObjectEmpty(obj) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj))
    throw new Error("Invalid input");
  return Object.keys(obj).length === 0;
}

function mergeObjects(obj1, obj2) {
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) {
    throw new Error("Invalid input");
  }

  return { ...obj1, ...obj2 };
}

function getNestedValue(obj, path) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    throw new Error("Invalid object input");
  }
  if (typeof path !== "string" && !Array.isArray(path)) {
    throw new Error("Invalid path input");
  }
  if (Object.keys(obj).length === 0) {
    throw new Error("Cannot get values from an empty object");
  }

  const keys = typeof path === "string" ? path.split(".") : path;

  // * Using For loop
  //   let nestedValue = obj;
  //   for (let i = 0; i < keys.length; i++) {
  //     if (nestedValue[keys[i]]) {
  //       nestedValue = nestedValue[keys[i]];
  //     } else {
  //       throw new Error("Invalid path");
  //     }
  //   }

  // * Using reduce method
  const nestedValue = keys.reduce((acc, key) => {
    if (acc && acc.hasOwnProperty(key)) {
      return acc[key];
    } else {
      throw new Error("Invalid path");
    }
  }, obj);
  return nestedValue;
}

module.exports = { isObjectEmpty, mergeObjects, getNestedValue };
