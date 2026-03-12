import React, { useEffect, useRef, useState } from "react";
import FeedPhotos from "./FeedPhotos";
import FeedModal from "./FeedModal";

const TOTAL = 6;

const Feed = ({ user }) => {
  const [modal, setModal] = useState(null);

  const [pages, setPage] = useState([1]);
  const infinite = useRef(false); // ✅
  const loadingApi = useRef(false); // guard síncrono
  const [awaitApi, setAwaitApi] = useState(false);

  useEffect(() => {
    function carregarMais() {
      if (awaitApi || infinite.current || loadingApi.current) return;

      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        if (!awaitApi && !loadingApi.current) {
          loadingApi.current = true;
          setAwaitApi(true);
          //prev[prev.length - 1] + 1 é mais robusto porque usa o último número real da lista
          //para gerar a próxima página,
          //enquanto prev.length + 1 depende apenas do tamanho do array e pode gerar número errado se faltar
          //ou repetir páginas.
          setPage((prev) => [...prev, prev[prev.length - 1] + 1]);
        } else {
          infinite.current = true;
        }
      }
    }

    window.addEventListener("scroll", carregarMais);
    window.addEventListener("wheel", carregarMais);

    return () => {
      window.removeEventListener("scroll", carregarMais);
      window.removeEventListener("wheel", carregarMais);
    };
  }, [awaitApi, infinite, setPage]);

  return (
    <>
      {modal && <FeedModal modal={modal} setModal={setModal} />}

      {pages.map((page) => {
        return (
          <FeedPhotos
            key={page}
            setModal={setModal}
            page={page}
            total={TOTAL}
            setPage={setPage}
            infinite={infinite}
            loadingApi={loadingApi}
            setAwaitApi={setAwaitApi}
            user={user}
          />
        );
      })}
    </>
  );
};

export default Feed;
