function OneCard({image,title,style}){
    return(
        <div className="mt-20 max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition ease-in-out hover:-translate-y-1 hover:scale-105" style={style}>
                    <a href="#">
                        <img class="rounded-t-lg" src={image} alt="" />
                    </a>
                    <span style={{ fontSize: '1.25rem', fontWeight: 'bold', marginLeft:"1.5rem"  }}>{title}</span>
                  <div className="p-5">
                        <a href="#" className="custom-button inline-flex items-center px-3 py-2 text-sm ">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                   </div>
                </div>
    )
}

export default OneCard;