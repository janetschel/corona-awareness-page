const makeApiRequestToRKIData = async (url: string) => {
  const response = await (await fetch(url)).json();
  const data: number = response.features[0].attributes.value; // strange API design?

  return data;
};

const makeIncidentRequest = async (url: string) => {
  const response = await (await fetch(url)).json();
  const data: number = response.features[0].attributes.cases7_per_100k; // this should work

  return data;
}

const Api = {
  makeApiRequestToRKIData,
  makeIncidentRequest
}

export default Api;
