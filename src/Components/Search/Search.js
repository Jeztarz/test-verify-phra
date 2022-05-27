import "./Search.css";
import Button from "react-bootstrap/Button";
function Search() {
  return (
    <div className="searchBar">
      <input type="search" placeholder="Search" />
      <Button variant="primary" size="lg">
        ค้นหา
      </Button>
    </div>
  );
}

export default Search;
