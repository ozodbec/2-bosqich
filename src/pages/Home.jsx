import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchArticles } from "../features/counterSlice";
import { Card, Button } from "flowbite-react";
import { fetchData } from "../my-utils/request";
import { Link } from "react-router-dom";

function Home() {
  // const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  // const { articles, loading, error } = useSelector((state) => state.articles);

  // useEffect(() => {
  //   dispatch(fetchArticles());
  // }, [dispatch]);
  useEffect(() => {
    fetchData()
      .then((data) => {
        console.log(data);
        setArticles(data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      {articles.length ? (
        <div className="flex flex-col gap-3">
          {articles.map((item) => (
            <Card key={item.id} className="max-w-full flex">
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <img
                    width="50px"
                    height="50px"
                    className="rounded-full"
                    src={item.author.avatar}
                    alt=""
                  />
                  <h1 className="tracking-tight text-gray-900 dark:text-white">
                    {item.author.name}
                  </h1>
                </div>
                <h1 className="tracking-tight text-gray-900 dark:text-white">
                  {item.createdDate}
                </h1>
              </div>
              <div>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
              <Button>
               <div className="flex items-start">
              <Link 
              to={"/cards"}
              >Read More</Link>
                <svg
                  className="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
               </div>
              </Button>
            </Card>
          ))}
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default Home;

