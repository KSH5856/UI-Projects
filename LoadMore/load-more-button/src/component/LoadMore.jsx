import { useEffect, useState } from "react";
import "./LoadMore.css";

export const LoadMore = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(10);
  const [btnDisable, setBtnDisable] = useState(false);

  const loadData = async (l = 10) => {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products?limit=${l}`);
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (e) {
      console.err(e);
    }
  };

  const loadDataWithLimit = () => {
    const newLimit = limit + 50;
    if(limit === products.total){
        setBtnDisable(true);
    }
    else if (newLimit > products?.total) {
        setBtnDisable(false);
        setLimit(products.total);
        loadData(products.total);
    } else {
        setBtnDisable(false);
        setLimit(newLimit);
        loadData(newLimit);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {loading ? (
        <div>Data processing please wait</div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div className="container">
            {products &&
              products?.products?.map((product, index) => {
                return (
                  <div key={index} className="card">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={product.images[0]}
                        width={100}
                        alt={product.images[0]}
                      />
                    </div>
                    <div>
                      <span
                        style={{
                          fontWeight: 700,
                        }}
                      >
                        No:
                      </span>{" "}
                      {product.id}
                    </div>
                    <div>
                      <span
                        style={{
                          fontWeight: 700,
                        }}
                      >
                        Title:
                      </span>{" "}
                      {product.title}
                    </div>
                    <div>
                      <span
                        style={{
                          fontWeight: 700,
                        }}
                      >
                        Description:
                      </span>{" "}
                      {product.description}
                    </div>
                  </div>
                );
              })}
          </div>

          <button
            className="btn"
            disabled={btnDisable}
            onClick={() => loadDataWithLimit()}
          >
            Load More
          </button>
          {btnDisable && <div style={{margin:'10px auto'}}>No more records to fetch</div>}
        </div>
      )}
    </>
  );
};
