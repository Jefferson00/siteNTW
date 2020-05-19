import React from 'react';
import Header from '../../header';
import Presentation from './presentation'
import Highlight from './highligtht'
import Institutional from './institutional'
import Cases from './cases'
import Partners from './partners'
import Footer from '../../footer'

export default function Home(){
    return(
        <div>
        <Header></Header>
        <Presentation></Presentation>
        <Highlight></Highlight>
        <Institutional></Institutional>
        <Cases></Cases>
        <Partners></Partners>
        <Footer></Footer>
        </div>
    );
}

