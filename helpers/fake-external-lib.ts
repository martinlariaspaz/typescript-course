export const isDivElement = (element: unknown): element is HTMLDivElement => {
  return element instanceof HTMLDivElement;
};

export const isBodyElement = (element: unknown): element is HTMLBodyElement => {
  return element instanceof HTMLBodyElement;
};

export const fetchUser = async (id: string) => {
  return {
    id,
    firstName: "John",
    lastName: "Doe",
  };
};

export const fetchPost = async (id: string) => {
  return {
    id,
    title: "Hello World",
    body: "This is a post that is great and is excessively long, much too long for an excerpt.",
  };
};

export const getAnimatingState = (): string => {
  if (Math.random() > 0.5) {
    return "before-animation";
  }

  if (Math.random() > 0.5) {
    return "animating";
  }

  return "after-animation";
};
