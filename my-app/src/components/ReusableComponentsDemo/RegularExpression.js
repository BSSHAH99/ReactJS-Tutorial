export const isEmpty = (value, isBoolean) =>
  value !== undefined ? value : isBoolean ? false : "";

export const capitalize = (string) => string[0].toUpperCase() + string.slice(1);

export const camelCaseSpace = (string) =>
  string.replace(/([a-z])([A-Z])/g, "$1 $2");

export const objectValues = (list) => Object.values(list);

export const objectKeys = (list) => Object.keys(list);

export const findIndex = (list, findingId) =>
  list.findIndex(({ id }) => id === findingId);

export const alphabeticalSorting = (object) =>
  Object.entries(object)
    .sort()
    .reduce(
      (obj, [k, v]) => ({
        ...obj,
        [k]: v,
      }),
      {}
    );
