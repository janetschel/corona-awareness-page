const makeApiRequestToRKIData = async (url: string) => {
  const response = await (await fetch(url)).json();
  const data: number = response.features[0].attributes.value; // strange API design?

  return data;
};

const Api = {
  makeApiRequestToRKIData,
}

export default Api;
