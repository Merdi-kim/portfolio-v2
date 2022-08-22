const ArticleCard = () => {
  return (
    <div className="flex-none flex h-64  w-[100%] bg-gray-100 overflow-hidden rounded-lg">
      <div className="flex-none w-full sm:w-[50%] md:w-full lg:w-[50%] rounded-lg">
        <img
          src="https://cdn-blog.novoresume.com/articles/how-to-find-a-job-after-rehab/bg-mid.png"
          alt="article cover"
          className="w-full h-full"
        />
      </div>

      <div className=" overflow-hidden p-4 hidden sm:block md:hidden lg:block">
        <h2 className="font-bold mb-4">
          Smart contracts best practices | solidity best practices
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
