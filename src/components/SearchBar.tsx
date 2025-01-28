"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";


const SearchBar = () => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <form
      className="flex items-center justify-between gap-4 bg-gray-200 p-2 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Search for Products"
        className="flex-1 bg-transparent outline-none"
      />
      <button className="cursor-pointer">
        <Image
          src="/search.png"
          alt="search"
          width={24}
          height={24}
          className="mr-2 p-[3px]"
        />
      </button>
    </form>
  );
};

export default SearchBar;
