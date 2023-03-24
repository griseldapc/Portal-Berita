const Card = () => {
  return (
    <div className="p-12">
      <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-900 text-gray-50">
        <img
          src="images/berita.jpg"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase text-violet-400">
            (Category)
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            (Headline Berita)
          </h2>
        </div>
        <p className="text-gray-100">(tgl rilis berita)</p>
      </div>
    </div>
  );
};
export default Card;
