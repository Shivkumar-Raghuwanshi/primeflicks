"use client";

// import React from "react";
// import { useRecoilState } from "recoil";
// import { modalState, movieState } from "@/atoms/modalAtoms";
// import { Button } from "@/components/ui/button";
// import Modal from "@/components/Modal";
// import Banner from "@/components/home/banner/Banner";
// import { fetchNetflixOriginals } from "../api/getData/getData";

// const page = async () => {
//   const [showModal, setShowModal] = useRecoilState(modalState);
//   const netflixOriginals = await fetchNetflixOriginals();
//   return (
//     <div className="text-white ">
//       <Banner netflixOriginals={netflixOriginals} />
//       <Button type="button" onClick={() => setShowModal(true)}>
//         modal
//       </Button>
//       <div>{showModal && <Modal />}</div>
//     </div>
//   );
// };

// export default page;
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "@/atoms/modalAtoms";
import { Button } from "@/components/ui/button";
import Modal from "@/components/Modal";
import Banner from "@/components/home/banner/Banner";
import { fetchNetflixOriginals } from "../api/getData/getData";

const Page = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [netflixOriginals, setNetflixOriginals] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchNetflixOriginals();
      setNetflixOriginals(data);
    };
    fetchData();
  }, []);

  return (
    <div className="text-white ">
      {netflixOriginals && <Banner netflixOriginals={netflixOriginals} />}
      <Button type="button" onClick={() => setShowModal(true)}>
        modal
      </Button>
      <div>{showModal && <Modal />}</div>
    </div>
  );
};

export default Page;
