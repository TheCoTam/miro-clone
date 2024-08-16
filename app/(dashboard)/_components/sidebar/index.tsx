import List from "./list";
import NewButton from "./new-button";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 bg-teal-800 text-white h-full w-[60px] flex p-3 flex-col gap-y-4">
      <List />
      <NewButton />
    </aside>
  );
};

export default Sidebar;
