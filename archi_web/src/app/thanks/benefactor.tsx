export default function Benefactor({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className={"group z-10 mb-4 rounded-lg text-center lg:mb-16"}>
      <h2 className={"font-semibold lg:mb-2 lg:text-2xl"}>{name}</h2>
      <p className={"m-0 max-w-[30ch] text-sm opacity-50"}>{description}</p>
    </div>
  );
}
