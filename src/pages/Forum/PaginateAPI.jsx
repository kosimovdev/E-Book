





const PaginateAPI = ({ data, paginate}) => {

    let paginateDots = [];

    for (let i = 1; i <= data.total_pages; i++) {
        paginateDots.push(i);
    }
    return (
        <div>
            {
                data?.data?.map((item) => {
                    return (
                        <div key={item.id} className=" p-4 shadow border my-2 hover:bg-gray-200">
                            {item.email}
                        </div>
                    )
                })
            }

            <div className="p-4 rounded border flex gap-x-2 justify-center">
                {
                    paginateDots.map((item) => {
                        return (
                            <button onClick={() => paginate(item)}  key={item} className="hover:bg-gray-300 focus:bg-white focus:ring-2 rounded-lg p-2 border w-8 grid place-content-center h-8">
                                {item}
                            </button>
                        )
                    })
                }
            </div>


        </div>
    )
};

export default PaginateAPI;