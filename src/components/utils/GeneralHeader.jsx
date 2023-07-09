
export const GeneralHeader = ({page}) => {

  let pageClass = page.page;
  return (
    <div>
        <div className={`flex justify-center items-center h-96 w-full p-2 ${pageClass}`}>
        <h1 className="text-6xl text-white font-extrabold uppercase opacity-90">{page.title}</h1>
        </div>
    </div>
    
    
  )
}
