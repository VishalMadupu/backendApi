
import React, { useState, useEffect } from "react";
import UserCard from "./components/user";
import Pagination from "./components/pagination";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?_limit=20&_page=${currentPage}`
        );
        const data = await response.json();
        setUsers(data);
        setTotalPages(Math.ceil(data.length / 20));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <h1>This is user data which is from API</h1>
      {loading? (
        <p>Loading...</p>
      ) : (
        <div>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}

export default App;