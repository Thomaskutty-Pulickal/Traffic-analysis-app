interface CardProps {
  count: number;
  title: string;
}

const Card = ({ count, title }: CardProps) => (
  <div className="bg-white p-4 rounded-2xl shadow-md text-center">
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    <p className="text-4xl font-bold text-indigo-600">{count}</p>
  </div>
);

export default Card;
