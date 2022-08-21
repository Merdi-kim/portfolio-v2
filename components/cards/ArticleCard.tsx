const ArticleCard = () => {
  return (
    <div className="flex h-64  w-[100%] bg-red-400 border-solid border-2 border-primary rounded-lg">
      <img
        src="https://cdn-blog.novoresume.com/articles/how-to-find-a-job-after-rehab/bg-mid.png"
        alt=""
        className="flex-none w-full sm:w-[50%] md:w-full lg:w-[50%] rounded-lg"
      />
      <div className=" overflow-hidden p-4 hidden">
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

//overflow-hidden p-4 hidden sm:block md:hidden lg:block
