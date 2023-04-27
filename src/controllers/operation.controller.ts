import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { OperationService } from "../services/operation";

export async function operation(request: FastifyRequest, reply: FastifyReply) {
  const operationBodySchema = z.object({
    operator: z.string(),
    num1: z.number(),
    num2: z.number(),
  });
  const { operator, num1, num2 } = operationBodySchema.parse(request.body);

  const operationService = new OperationService();

  try {
    const result = await operationService.execute({
      operator,
      num1,
      num2,
    });

    return reply.status(200).send(result);
  } catch (error) {
    if (error instanceof Error) {
      return reply.code(400).send({ message: error.message });
    }
    throw error;
  }
}
