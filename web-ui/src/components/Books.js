import { gql, useQuery } from "@apollo/client";
import Book from "./Book";

const BOOKS_QUERY = gql`
  query Books {
    books {
      title
      year
      id
    }
  }
`;

export default function Books() {
  const { data, error, loading } = useQuery(BOOKS_QUERY);

  if (error) {
    console.error("BOOKS_QUERY error", error);
  }

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td>Loading...</td>
            </tr>
          )}
          {error && (
            <tr>
              <td>Check console for error logs</td>
            </tr>
          )}
          {!loading &&
            !error &&
            data?.books.map((book) => <Book book={book} key={book.id} />)}
        </tbody>
      </table>
    </div>
  );
}
