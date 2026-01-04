import WorkItem from "@/components/WorkItem";
import React from "react";

const GameDevView = () => {
  return (
    <>
      <h1>Game Developer</h1>
      <section className="w-full md:max-w-8/10 flex flex-col md:grid md:grid-cols-3 items-center justify-center gap-8">
        <WorkItem className="col-span-2 row-span-2 max-h-full h-full" />
        <WorkItem />
        <WorkItem />
      </section>
    </>
  );
};

export default GameDevView;
