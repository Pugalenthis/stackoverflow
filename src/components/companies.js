import "../styles/companies.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';

export function Companies(){
    return(
        <div className="companies-container">
            <div className="company">
             <hr />
             <div className="row">
                 <div className="col-2">
                     <img src="https://i.stack.imgur.com/bWQMU.png?s=128" alt="" />
                 </div>
                 <div className="col-10">
                     <h6 className="companyname">creative assembly</h6>
                     <div className="row companylocation">
                     <LocationOnIcon /><span>Bengaluru,India.</span> 
                       <p className="company-info">Creative Assembly is one of India's leading games development studios, founded in 1987 and located in West Sussex, UK and Sofia, Bulgaria. With a heritage of award-winning AAA titles, including</p>
                     </div>
                </div>
                </div>
             </div>

             <div className="company">
             <hr />
             <div className="row">
                 <div className="col-2">
                     <img src="https://i.stack.imgur.com/ujxgd.png?s=128" alt="" />
                 </div>
                 <div className="col-10">
                     <h6 className="companyname">About You</h6>
                     <div className="row companylocation">
                     <LocationOnIcon /><span>Chennai,India.</span> 
                       <p className="company-info">About You is one of India's leading games development studios, founded in 1987 and located in West Sussex, UK and Sofia, Bulgaria. With a heritage of award-winning AAA titles, including</p>
                     </div>
                </div>
                </div>
             </div>


             <div className="company">
             <hr />
             <div className="row">
                 <div className="col-2">
                     <img src="https://i.stack.imgur.com/D9dZw.png?s=128" alt="" />
                 </div>
                 <div className="col-10">
                     <h6 className="companyname">Good game studios</h6>
                     <div className="row companylocation">
                     <LocationOnIcon /><span>Hyderabad,India.</span> 
                       <p className="company-info">Good game studios is one of India's leading games development studios, founded in 1987 and located in West Sussex, UK and Sofia, Bulgaria. With a heritage of award-winning AAA titles, including</p>
                     </div>
                </div>

                </div>
             </div>

             <div className="company">
             <hr />
             <div className="row">
                 <div className="col-2">
                     <img src="https://i.stack.imgur.com/4YrrA.png?s=128" alt="" />
                 </div>
                 <div className="col-10">
                     <h6 className="companyname">Code payments</h6>
                     <div className="row companylocation">
                     <LocationOnIcon /><span>Delhi,India.</span> 
                       <p className="company-info">Code payments is one of India's leading games development studios, founded in 1987 and located in West Sussex, UK and Sofia, Bulgaria. With a heritage of award-winning AAA titles, including</p>
                     </div>
                </div>
                </div>
             </div>

        </div>
    )
}