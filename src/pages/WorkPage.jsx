import { GroupSelector } from "@/components/GroupSelector";
import { useState, useEffect } from "react";
import WebDevView from "./subViews/WebDevView";
import GameDevView from "./subViews/GameDevView";
import OtherView from "./subViews/OtherView";

export default function WorkPage() {
  const [view, setView] = useState(1);
  const views = {
    1: <WebDevView/>,
    2: <GameDevView/>,
    3: <OtherView/>,
  };
  return (
    <section className="min-h-dvh  py-4 md:py-16 px-4 md:px-24 flex flex-col items-center justify-start gap-8">
        <GroupSelector view={view} setView={setView} />
      {view && views[view]}
    </section>
  );
}
