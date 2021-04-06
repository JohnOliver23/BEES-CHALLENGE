import Prismic from 'prismic-javascript';

export const apIEndpoint = 'https://abinbevchallenge.cdn.prismic.io/api/v2';

export const client = (req = null) => {
  return Prismic.client(apIEndpoint);
};
