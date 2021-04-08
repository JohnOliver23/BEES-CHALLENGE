import Prismic from 'prismic-javascript';

export const apIEndpoint = 'https://abinbevchallenge.cdn.prismic.io/api/v2';

export const client = (req = null) => {
  return Prismic.client(apIEndpoint);
};

export const getBeers = async () => {
  const result = client()
    .query([Prismic.Predicates.at('document.type', 'beers')])
    .then(res => res)
    .catch(err => {
      console.log(err.response);
      return err.response;
    });
  return result;
};
