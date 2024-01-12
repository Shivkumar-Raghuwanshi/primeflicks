"use client";

import React from "react";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "@/atoms/modalAtoms";
import { Button } from "@/components/ui/button";

const page = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  return (
    <div className="text-white">
      page
      <Button onClick={() => setShowModal(true)}>modal</Button>
    </div>
  );
};

export default page;
