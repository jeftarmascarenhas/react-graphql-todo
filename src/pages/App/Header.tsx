import React from "react";

import Header from "../../components/Header";

import { todoMutatios } from "../../graphql/operations/mutations";

export default function () {
  return <Header addTodo={todoMutatios.addTodo} />;
}
