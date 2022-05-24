export default function PresidentItem({ candidate, index }) {
  return (
    <div className="flex w-full px-2 my-2 justify-center md:w-1/2">
      <div className="card bg-dark text-white border-none w-full">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHEPdb29fPSoo9_J4GVnt5iq6AsmOOaNaCA&usqp=CAU"
          className="card-img w-full object-cover h-[300px]"
          alt="..."
        />
        <div
          className={`card-img-overlay flex 
          ${(index + 1) % 2 === 0 && 'flex-row-reverse pl-10'} 
          justify-end items-center pr-10`}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwOxMZcCNv_3YbLNOOqRZzX-LYYdhrgOlZ0A&usqp=CAU"
            className="rounded-full h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] lg:h-[140px] lg:w-[140px] mr-6 object-cover"
          ></img>
          <div
            className={`flex flex-column justify-end items-end 
            ${(index + 1) % 2 === 0 && '!items-start mr-10'} `}
          >
            <p className="card-title font-bold">
              {candidate.fullName} (D)
              {candidate.isWinner && <i className="fa-solid fa-circle-check"></i>}
            </p>
            <p className="card-title">Electoral College</p>
            <p className="card-title text-[40px] leading-10 font-[500]">306</p>
            <p className="card-title">Votes</p>

            <p className="card-text font-[500]">
              <span className="pr-4">{candidate.votePct}%</span>
              {candidate.vote.toLocaleString('en-EN')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
