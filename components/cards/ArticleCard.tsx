const ArticleCard = () => {
  return (
    <div className="flex h-[98%] w-full border-solid border-2 border-red-600 rounded-lg">
      <img
        src="https://cdn-blog.novoresume.com/articles/how-to-find-a-job-after-rehab/bg-mid.png"
        alt=""
        className="flex-none w-1/2 md:w-full lg:w-1/2 h-full rounded-lg bg-gray-300"
      />
      <div className=" overflow-hidden p-4 md:hidden lg:block">
        <h2 className="font-bold mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          reprehenderit aut optio
        </h2>
        <p className="font-light text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          tenetur, saepe, fugit dolor dicta vitae maiores adipisci quod
          praesentium excepturi, atque eligendi nemo sunt animi nostrum quidem
          ad exercitationem voluptas.
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
