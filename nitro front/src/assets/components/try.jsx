import { useEffect, useState } from "react";
import "./App.css";



function App() {
  const [data, setData] = useState([]);
  const [search, setsearch] = useState("");
  const [sortBy, setsortBy] = useState(null);
  const [categoryId, setcategoryId] = useState(null);
  useEffect(() => {
    fetch("https://northwind.vercel.app/api/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div>
        <h6>search</h6>
        <input
          type="text"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
   
        <h6>sort</h6>
        <button onClick={() => setsortBy({ filed: "name", asc: true })}>
          A-z
        </button>
        <button onClick={() => setsortBy({ filed: "name", asc: false })}>
          z-A
        </button>
        <button onClick={() => setsortBy({ filed: "unitPrice", asc: true })}>
          Up
        </button>
        <button onClick={() => setsortBy({ filed: "unitPrice", asc: false })}>
          Down
        </button>
        <button onClick={() => setsortBy(null)}>Default</button>
       
        <h6>filter by category</h6>
        <button onClick={() => setcategoryId(3)}>3</button>
        <button onClick={() => setcategoryId(1)}>1</button>
        <button onClick={() => setcategoryId(2)}>2</button>
        <button onClick={() => setcategoryId(4)}>4</button>
        <button onClick={() => setcategoryId(null)}>All</button>
      </div>
      {data &&
        data
          .filter(
            (x) =>
              x.name.toLowerCase().includes(search.toLowerCase()) &&
              (x.categoryId === categoryId || categoryId === null)
          )
          .sort((a, b) => {
            if (sortBy && sortBy.asc) {
              return a[sortBy.filed] > b[sortBy.filed]
                ? 1
                : b[sortBy.filed] > a[sortBy.filed]
                ? -1
                : 0;
            } else if (sortBy && sortBy.asc === false) {
              return a[sortBy.filed] < b[sortBy.filed]
                ? 1
                : b[sortBy.filed] < a[sortBy.filed]
                ? -1
                : 0;
            } else {
              return 0;
            }
          })
          .map((x) => <div key={x._id}>
          <div>{x.name}</div>
          <div>{x.unitPrice}</div>
        </div>)}
    </>
  );
}

export default App;