import { useQuery } from "@apollo/react-hooks";
import { GET_PEOPLE } from "../_helpers/queries";

function usePeople() {
    const { data, loading, error, fetchMore } = useQuery(GET_PEOPLE, {
        notifyOnNetworkStatusChange: true,
    });

    if (loading && data === 'undefined') return { loading, people: [] };

    const loadMore = () => {
        return fetchMore({
            query: GET_PEOPLE,
            notifyOnNetworkStatusChange: true,
            variables: {
                cursor: data.allPeople.pageInfo.endCursor,
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {

                const newEdges = fetchMoreResult.allPeople.edges;
                const pageInfo = fetchMoreResult.allPeople.pageInfo;
                return newEdges.length ? {
                    allPeople: {
                        __typename: previousResult.allPeople.__typename,
                        edges: [...previousResult.allPeople.edges, ...newEdges],
                        pageInfo,
                    },
                } : previousResult;
            },
        });
    };
    return {
        people: data?.allPeople.edges.map(({ node }) => node),
        hasNextPage: data?.allPeople.pageInfo.hasNextPage,
        loading,
        loadMore,
        error
    };
}

export default usePeople