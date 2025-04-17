import { Input } from "@heroui/input";

import { SearchIcon } from "../../../assets/icons";

const Landing = () => {
  return (
    <section className="h-screen bg-[url('/lost-phone.jpg')]  bg-center bg-cover bg-no-repeat">
      <div className="pt-24 max-w-xl flex-1 mx-auto ">
        <form className="flex-1">
          <Input
            aria-label="Search..."
            classNames={{
              inputWrapper: "bg-default-200",
              input: "text-sm",
            }}
            labelPlacement="outside"
            placeholder="Search..."
            size="lg"
            startContent={
              <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="search"
          />
        </form>
      </div>
    </section>
  );
};

export default Landing;
