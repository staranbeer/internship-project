import Card, { CardProps } from "../util/Card";

const Main = ({ data }: { data: CardProps[] }) => {
  console.log(data);
  return (
    <main className="p-5 flex-1 bg-gray-100 lg:overflow-scroll">
      <div className=" break-inside-avoid space-y-5 max-w-4xl mx-auto justify-center   gap-12 lg:columns-3  md:columns-2  columns-1">
        {data.map((card: CardProps) => {
          return (
            <Card
              id={card.id}
              date={card.date}
              key={card.id}
              title={card.title}
              image={card.image}
              description={card.description}
              photographer={card.photographer}
              keywords={card.keywords}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Main;
