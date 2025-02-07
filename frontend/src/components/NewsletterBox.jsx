

const NewsletterBox = () => {
    return (
        <div className=" flex flex-col text-center" >
            <p className="text-2xl font-medium">Subscribe now & get 20% off</p>
            <form className="mt-3" >
                <input type="email" className="w-2/5 border-2 h-[35px] border-black rounded-lg " />
                <button type="submit" className="border-2 w-[100px] h-[39px] text-white bg-black rounded-lg">SUBSCRIBE</button>
            </form>
        </div>
    );
};

export default NewsletterBox;