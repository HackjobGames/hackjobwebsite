export const About = () => {
  return (
    <div>
      <div className='row gx-0'>
        <h1 className='col-8 d-flex align-items-center justify-content-center'>
          Frog Fight Now Available on Steam!
        </h1>
        <div className='col-4 d-flex align-items-center justify-content-center py-4 pe-5' >
          <a href='https://store.steampowered.com/app/1666970/Frog_Fight/'>
            <img className='w-100 cursor-pointer' src='https://partner.steamgames.com/public/images/steam_logo_white_small.png'/>
          </a>
        </div>
      </div>
      <div className=" d-flex align-items-center justify-content-center embed-responsive embed-responsive-16by9">
        <iframe height={480} width={854} className="embed-responsive-item" src="https://www.youtube.com/embed/KsVOkCW2Afg?rel=0"></iframe>
      </div>
    </div>
  )
} 