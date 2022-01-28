const dataAttribute = "data-hook";

export const withValue = (hook, value) => {
  return `${hook}_${value}`;
};

export const hook = (hook, value) => {
  if (!hook) {
    return {};
  }
  return {
    [dataAttribute]: value ? withValue(hook, value) : hook,
  };
};
