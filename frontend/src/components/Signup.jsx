import Image from "next/image";

export const Signup = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center border border-black">
      <div className="w-[384px] h-fit border border-black flex flex-col items-center justify-between gap-[32px]">
        <Image
          alt=""
          className=" object-scale-down  "
          src={"/Geld.png"}
          width={92}
          height={34}
        />
        <input
          type="text"
          placeholder="Name"
          className="w-[384px] h-[48px] text-[16px] leading-6 font-normal  bg-[#D1D5DB] border border-[#D1D5DB] rounded-lg border border-black"
        />
        <input
          type="text"
          placeholder="Email"
          className="w-[384px] h-[48px] text-[16px] leading-6 font-normal  bg-[#D1D5DB] border border-[#D1D5DB] rounded-lg border border-black "
        />
        <input
          type="text"
          placeholder="Password"
          className="w-[384px] h-[48px] text-[16px] leading-6 font-normal  bg-[#D1D5DB] border border-[#D1D5DB] rounded-lg border border-black "
        />
        <input
          type="text"
          placeholder="Repassword"
          className="w-[384px] h-[48px] text-[16px] leading-6 font-normal  bg-[#D1D5DB] border border-[#D1D5DB] rounded-lg border border-black "
        />
      </div>
    </div>
  );
};
