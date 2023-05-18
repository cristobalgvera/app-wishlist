import Image from "next/image";

export function PersonalImage() {
  return (
    <figure className="rounded-xl overflow-hidden">
      <Image
        src="https://pkhitboxveivjistmbnq.supabase.co/storage/v1/object/public/items-media/personal-images/Cristobal%20y%20Daniela.webp"
        alt="Foto personal Cristóbal y Daniela"
        width={500}
        height={500}
        priority={true}
      />
    </figure>
  );
}
