import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test" className="">
        <div
          className="relative w-full h-80 "
        >
          <img
            src="https://images.pexels.com/photos/30353224/pexels-photo-30353224/free-photo-of-sleek-apple-devices-on-black-background.jpeg"
            alt=""
           
            className="absolute object-cover rounded-lg w-"
          />
          <Image
            src="https://images.pexels.com/photos/7667442/pexels-photo-7667442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={200} // You can adjust this to match the image's dimensions
            height={150} // Adjust as needed to preserve the aspect ratio
            sizes="25vw"
          />
        </div>
      </Link>
    </div>
  );
};

export default ProductList;
