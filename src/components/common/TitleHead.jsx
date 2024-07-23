export const TitleHead = ({title,decription})=>{
    
    return (
        <>
            <div className="pb-8 flex flex-col justify-center items-center">
            <p className="text-4xl font-bold inline border-b-4 p-2 border-gray-500">
              {title}
            </p>
            <p className="py-6">{decription}</p>
          </div>
        </>
    )
}