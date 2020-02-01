import { TodoItem } from "./TodoItem.js";

describe("TodoItem", () => {
  let item;

  beforeEach(() => {
    // при заходе в очередной it, мы пересоздаем item,
    // чтобы манипуляции предыдущих тестов не создавали
    // нам нежелательного состояния тестируемого объекта

    item = new TodoItem();
  });

  describe("when created", () => {
    it("should have an empty text", () => {
      expect(item.text).toBe("");
    });

    it("should not be completed", () => {
      expect(item.completed).toBe(false);
    });
  });

  describe("text property", () => {
    it.todo("should accept strings");
    it.todo("should cast non-strings to strings");
  });

  describe("completed property", () => {
    it.todo("should accept booleans");
    it.todo("should cast non-booleans to booleans");
  });
});

