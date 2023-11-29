import { useEffect } from "react";
import { Link } from "react-router-dom";
import {  useStoreActions, useStoreState } from "easy-peasy";
function Nav() {
  const posts = useStoreState((state) => state.posts);
  const search = useStoreState((state) => state.search);

  const setSearch = useStoreActions((actions) => actions.setSearch);
  const setSearchResults = useStoreActions((actions) => actions.setSearchResults);

  useEffect(() => {
    const filteredResults = posts.filter((post) =>
    ((post.body).toLowerCase()).includes(search.toLowerCase())
    || ((post.title).toLowerCase()).includes(search.toLowerCase()));
      setSearchResults(filteredResults.reverse());
  
}, [posts, search, setSearchResults])

  return (
    <nav className="Nav">
      <form
        className="searchForm"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="search">Search</label>
        <input
          id={search}
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li>
          <Link style={{ padding: "1rem" }} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link style={{ padding: "1rem" }} to="/post">
            Post
          </Link>
        </li>
        <li>
          <Link style={{ padding: "1rem" }} to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
