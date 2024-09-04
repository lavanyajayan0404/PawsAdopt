import React from 'react'

import blog1 from '../../img/blog-1.jpg';
import blog2 from '../../img/blog-2.jpg';
import user from '../../img/user.jpg';
import "./Blog.css"
export default function BlogDetails() {
  return (
    <div className='maincon1'>
        <div class="container py-5 maincon">
    <div class="row g-5">
        <div class="col-lg-8 " >
            <div class="mb-5">
                <img class="img-fluid w-50 rounded mb-5 column" src={blog1} alt=""/>
                <h1 class="text-uppercase mb-4">Diam dolor est labore duo ipsum clita sed et lorem tempor duo</h1>
                <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut
                    magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet
                    amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
                    sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et
                    aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren
                    sit stet no diam kasd vero.</p>
                <p>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores
                    vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit
                    nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore
                    ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et,
                    clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat
                    justo dolore sit invidunt.</p>
                <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                    invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                    lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                    rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
                    sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
                    lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                    sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos.</p>
            </div>
            <div class="mb-5 divclass" >
                <h3 class="text-uppercase border-start border-5 border-primary ps-3 mb-4">3 Comments</h3>
                <div class="d-flex mb-4">
                    <img src={user} class="img-fluid" />
                    <div class="ps-3">
                        <h6><a href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                        <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                            accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
                        <button class="btn btn-sm btn-light">Reply</button>
                    </div>
                </div>
                <div class="d-flex mb-4">
                    <img  src={user} class="img-fluid"/>
                    <div class="ps-3">
                        <h6><a href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                        <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                            accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
                        <button class="btn btn-sm btn-light">Reply</button>
                    </div>
                </div>
                <div class="d-flex ms-5 mb-4">
                    <img src={user} class="img-fluid" />
                    <div class="ps-3">
                        <h6><a href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                        <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                            accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
                        <button class="btn btn-sm btn-light">Reply</button>
                    </div>
                </div>
            </div>
            </div>
            </div>
        
</div>

</div>
  )
}
