interface IOperationsServiceRequest {
  operator: string;
  num1: number;
  num2: number;
}

interface IOperationServiceResponse {
  result: number | string;
}

export class OperationService {
  constructor() {}

  async execute({
    operator,
    num1,
    num2,
  }: IOperationsServiceRequest): Promise<IOperationServiceResponse> {
    let result: number | string;

    switch (operator) {
      case "sum":
        result = num1 + num2;
        break;

      case "sub":
        result = num1 - num2;
        break;

      case "mult":
        result = num1 * num2;
        break;

      case "div":
        result = num1 / num2;
        break;

      default:
        result = "Sorry, please enter a valid operator!";
    }

    return {
      result,
    };
  }
}
