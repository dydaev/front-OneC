export const isValideEmail = (fieldValue: string): boolean =>
  /^\w+\.*\w*\@[a-z0-9]+\.([a-z0-9]+\.)*[a-z]{2,4}$/.test(fieldValue);

export const isValidePhone = (fieldValue: string): boolean =>
  /^\+\d{12}$/.test(fieldValue) ||
  /^\+\d{2}\(0\d{2}\)\d{3}\-\d{2}\-\d{2}$/.test(fieldValue);
