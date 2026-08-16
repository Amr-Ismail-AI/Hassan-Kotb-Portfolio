interface Props {
  title: string;
}

const SectionTitle = ({ title }: Props) => {
  return (
    <div className="flex w-full items-center gap-4">
      <h2 className="shrink-0 font-titleFont text-2xl font-semibold text-text-primary">
        {title}
      </h2>
      <div className="h-[2px] flex-1 bg-gradient-to-r from-blue to-transparent" />
    </div>
  );
};

export default SectionTitle;