import "./Search.css";
import Button from "react-bootstrap/Button";
function Search() {
  return (
    <div className="searchBar">

<form class="form-search form-inline">
<input type="search" class="search-query" placeholder="Search" />
    </form>


      

      <Button variant="primary" size="lg">
        ค้นหา
      </Button>
    </div>
  );
}

export default Search;
