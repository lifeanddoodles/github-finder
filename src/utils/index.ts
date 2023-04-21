import { errorHandling } from '../data/texts';

export enum METHOD_VERB {
  GET = 'GET',
  POST = 'POST',
}

export const request = async (
  url: string,
  data?: object,
  verb?: METHOD_VERB,
) => {
  try {
    const response = await fetch(url, {
      method: verb || METHOD_VERB.GET,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(errorHandling.consoleLabel, error);
    throw new Error(errorHandling.errorFetchRequest);
  }
};

export const formatAmount = (value: number) => {
  return new Intl.NumberFormat().format(value);
};
