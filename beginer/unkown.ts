function process(obj: unknown) {
  if (
    typeof obj === "object" &&
    !!obj &&
    "log" in obj &&
    typeof obj.log === "function"
  ) {
    obj.log();
  }
}
