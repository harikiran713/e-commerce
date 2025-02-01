

const Title = ({text1,text2}) => {
    return (
        <div className=" flex flex-row gap-2">
            <p className="text-gray-500">{text1}</p>
            <p className="text-gray-700">{text2}</p>
           
            
        </div>
    );
};

export default Title;