module.exports = {
  globals: {
    "ts-jest": {
      tsConfigFile: "tsconfig.e2e.json"
    }
  },
  moduleFileExtensions: ["js", "ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  roots: ["<rootDir>/__e2e__"],
  testRegex: "(/__e2e__/.*|(\\.|/)(e2e))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  verbose: false,
  notify: true
};
