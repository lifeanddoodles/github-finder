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
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error:', error);
  }
};

export const formatAmount = (value: number) => {
  return new Intl.NumberFormat().format(value);
};
