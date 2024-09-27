export const printObject = (argument: any) => {
  console.log(argument);
};

export function genericFunction<T>(argument: T): T {
  return argument;
}

export const genericFunction2 = <T>(argument: T): T => {
  return argument;
};
