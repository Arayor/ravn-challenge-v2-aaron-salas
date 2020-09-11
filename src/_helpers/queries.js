import { gql } from "apollo-boost";

export const GET_PEOPLE = gql`
query getPeople($cursor: String){
    allPeople(first:5, after: $cursor){
        edges{
            node{
                id
                name
                birthYear
                eyeColor
                hairColor
                skinColor
                species{
                    name
                }
                homeworld{
                    name
                }
                vehicleConnection{
                    vehicles{
                      id
                      name
                    }
                }
            }
        }
        pageInfo{
            endCursor
            hasNextPage
        }
    }
}
`;
