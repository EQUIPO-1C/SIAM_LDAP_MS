import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, gql, HttpLink } from '@apollo/client';

const client = new ApolloClient({
    link: new HttpLink({uri: 'http://localhost:5000/graphql', fetch }),
    cache: new InMemoryCache()
});

const LOGIN_MUTATION = gql`
  mutation loginSiamUser($siamLogin: SiamLoginInput){
      loginSiamUser(siamLogin: $siamLogin) {
          token
          role
      }
  }
`;

async function logInit(username: string, password: string) {
    const response = await client.mutate({
        mutation: LOGIN_MUTATION,
        variables: {
            siamLogin: {
                username: username,
                password: password
            }
        }
    });
    return response;
}

export default logInit;