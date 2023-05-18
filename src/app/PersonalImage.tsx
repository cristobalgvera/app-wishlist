import Image from "next/image";

export function PersonalImage() {
  return (
    <figure className="rounded-xl overflow-hidden animate-wiggle animate-infinite animate-ease-in-out animate-duration-[2000ms]">
      <Image
        src="https://pkhitboxveivjistmbnq.supabase.co/storage/v1/object/public/items-media/personal-images/Cristobal%20y%20Daniela.webp"
        alt="Foto personal Cristóbal y Daniela"
        width={600}
        height={600}
        priority={true}
      />
    </figure>
  );
}
