export default function Pagination({ page, lastPage, setPage }) {
  const scrollTop = () => {
    scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  function handleNextPage() {
    setPage((prevState) => prevState + 1);
    scrollTop();
  }

  function handlePrevPage() {
    setPage((prevState) => prevState - 1);
    scrollTop();
  }

  return (
    <div className="flex justify-center items-center gap-4 my-4 md:text-xl">
      {page <= 1 ? null : (
        <button className="bg-color-blue rounded border-2 border-color-black p-0.5 px-2 hover:bg-color-1 hover:text-color-white transition-all" onClick={handlePrevPage}>Prev</button>
      )}
      <p className="text-color-font"> {page} of {lastPage} </p>
      {page >= lastPage ? null : (
        <button className="bg-color-blue rounded border-2 border-color-black p-0.5 px-2 hover:bg-color-1 hover:text-color-white transition-all" onClick={handleNextPage}>Next</button>
      )}
    </div>
  );
}
