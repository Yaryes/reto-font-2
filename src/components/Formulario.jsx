import checkImg from '/img/icon-list.svg'

export const Formulario = () => {
  return (
    <>
        <div className="p-3">
            <h1 className="text-3xl mt-12 text-center font-bold mb-8 -ml-3
                text-zinc-800 text-[47px]">Stay updated!</h1>
            <span className="text-[16px]">Join 60,000+ product managers receiving monthly 
                updates on:</span>
            <div className="mt-4 flex">
                <img src={checkImg} alt="Checkmark" className="mr-2" />
                <span className="text-[16px]">Product discovery and building what matters</span>
            </div>
            <div className="mt-3 flex">
                <img src={checkImg} alt="Checkmark" className="mr-2" />
                <span className="text-[16px]">Measuring to ensure updates are a success</span>
            </div>
            <div className="mt-3 flex">
                <img src={checkImg} alt="Checkmark" className="mr-2" />
                <span className="text-[16px]">And much more!</span>
            </div>
            <div className='mt-8'>
                <span className="text-[12px] font-bold">Email address:</span>
            </div>
            <div class="mb-5">
                <input type="text" id="base-input" placeholder='email@example.cl' className="mt-2 block w-full p-2.5 placeholder-gray-500 rounded-lg border-slate-7000 border-2"/>
            </div>
            <div>
            <button class="bg-indigo-950 text-white font-bold border border-blue-700 mt-2 block w-full p-2.5 rounded-lg ">
                Suscribete Bolitin Informativo
            </button>
            </div>
        </div>
    </>
  )
}
