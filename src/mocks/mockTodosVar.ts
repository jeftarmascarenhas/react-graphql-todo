import { Todos } from "../graphql/models/Todo";
import { createMockReactiveVar } from "../utils/createMockReactiveVar";

export const mockTodosVar = createMockReactiveVar<Todos>([]);
