import React from 'react'
import lenovoLogo from '../../assets/Lenovo_Global_Corporate_Logo.png'
import fujitsuLogo from '../../assets/fujitsu-logo.png'
import nutanixLogo from '../../assets/Nutanix_Logo.png'
import aocLogo from '../../assets/aoc-logo.png'
import netscoutLogo from '../../assets/NetScout_logo.png'

export default function Partners(){
    return (
        <section className="partners">
          <div>
            <img src={lenovoLogo}/>
          </div>
          <div>
            <img src={nutanixLogo}/>
          </div>
          <div>
            <img src={fujitsuLogo}/>
          </div>
          <div>
            <img src={aocLogo}/>
          </div>
          <div>
            <img src={netscoutLogo}/>
          </div>
        </section>
        );
  }