import { gql, useQuery } from "@apollo/client";

const HELLO_QUERY = gql`
  query Query($name: String) {
    hello(name: $name)
  }
`;

export default function Hello() {
  //   const { data, loading, error } = useQuery(HELLO_QUERY);
  const { data, loading, error } = useQuery(HELLO_QUERY, {
    variables: { name: "Jacob" },
  });
  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("HELLO_QUERY error", error);
  }

  return (
    <div>
      {loading && "Loading..."}
      {error && "Error (check console logs)"}
      {!loading && !error && data?.hello}
    </div>
  );
}
