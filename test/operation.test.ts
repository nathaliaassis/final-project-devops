import { beforeEach, describe, expect, it } from "vitest";
import { OperationService } from "../src/services/operation";

let authenticateService: OperationService;

describe("@Authenticate Service: ", () => {
  beforeEach(async () => {
    authenticateService = new OperationService();
  });

  it("should be able to sum numbers", async () => {
    const { result } = await authenticateService.execute({
      operator: "sum",
      num1: 12,
      num2: 12,
    });

    expect(result).toEqual(24);
  });

  it("should be able to substract numbers", async () => {
    const { result } = await authenticateService.execute({
      operator: "sub",
      num1: 20,
      num2: 12,
    });

    expect(result).toEqual(8);
  });

  it("should be able to multiply numbers", async () => {
    const { result } = await authenticateService.execute({
      operator: "mult",
      num1: 20,
      num2: 2,
    });

    expect(result).toEqual(40);
  });

  it("should be able to divide numbers", async () => {
    const { result } = await authenticateService.execute({
      operator: "div",
      num1: 20,
      num2: 10,
    });

    expect(result).toEqual(5);
  });

  it("should return a message when user passes an invalid operator", async () => {
    const { result } = await authenticateService.execute({
      operator: "invalid operator",
      num1: 20,
      num2: 10,
    });

    expect(result).toBe("Sorry, please enter a valid operator!");
  });
});
