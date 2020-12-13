type IndexProps = {
  message: string;
};

export async function getEdgeProps() {
  return {
    props: {
      message: "Hello",
    } as IndexProps,
  };
}

export default function Index({ message }: IndexProps) {
  return (
    <div>
      <p>{message}</p>
      <div className="bg-orange-lightest border-l-4 border-orange text-orange-dark p-4" role="alert">
        <p className="font-bold">Tailwind enabled?</p>
        <p>You should see an alert box here</p>
      </div>
    </div>
  );
}
