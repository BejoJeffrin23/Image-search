"use client";
import { useState, useEffect } from "react";
import { fetchImages } from "../utils/api";
import ImageGrid from "../components/ImageGrid";
import Pagination from "../components/Pagination";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

const Home = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("car");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const perPage = 50;

  useEffect(() => {
    const getImages = async () => {
      const data = await fetchImages(query, page, perPage);
      setImages(data.photos);
      setTotalPages(Math.ceil(data.total_results / perPage));
    };
    getImages();
  }, [query, page]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem("search") as HTMLInputElement;
    setQuery(input.value);
    setPage(1);
  };

  const handlePage = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem("page") as HTMLInputElement;
    setPage(input.value);
  };

  return (
    <>
      <div className="container mx-auto">
        <Header />
        <div className="flex flex-col md:flex-row mt-20 justify-between items-center md:items-start space-y-4 md:space-y-0">
          <div className="w-full md:w-auto">
            <form onSubmit={handleSearch} className={styles.searchForm}>
              <input
                type="text"
                name="search"
                defaultValue={query}
                className="w-full md:w-auto"
              />
              <button
                type="submit"
                className="w-full md:w-auto !bg-black text-white py-2 px-4 mt-2 md:mt-0"
              >
                Search
              </button>
            </form>
          </div>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
          <div className="w-full md:w-auto">
            <form onSubmit={handlePage} className={styles.searchForm}>
              {/* <h1 className="text-center md:text-left mb-2 md:mb-0">
              Go to page
            </h1> */}
              <input
                type="number"
                name="page"
                defaultValue={page}
                className="w-full md:w-16"
              />
              <button
                type="submit"
                className="w-full md:w-auto !bg-black text-white py-2 px-4 mt-2 md:mt-0"
              >
                Go
              </button>
            </form>
          </div>
        </div>

        <ImageGrid images={images} />

        <div className="flex flex-col md:flex-row mt-20 justify-between items-center md:items-start space-y-4 md:space-y-0">
          <div className="w-full md:w-auto"></div>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
          <div className="w-full md:w-auto">
            <form onSubmit={handlePage} className={styles.searchForm}>
              {/* <h1 className="text-center md:text-left mb-2 md:mb-0">
              Go to page
            </h1> */}
              <input
                type="number"
                name="page"
                defaultValue={page}
                className="w-full md:w-16"
              />
              <button
                type="submit"
                className="w-full md:w-auto !bg-black text-white py-2 px-4 mt-2 md:mt-0"
              >
                Go
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#71e471]">
        <h1 className="text-center py-4">Images , Vectors and Videos</h1>
      </div>

      <div className="w-full bg-black">
        <h1 className="text-center py-1  pt-4 text-2xl text-white">
          My Image Search
        </h1>
        <h1 className="text-center py-1 text-white">
          Changing the world once image at a time
        </h1>
      </div>
    </>
  );
};

export default Home;
