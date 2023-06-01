import React from 'react'
import Image from 'next/image'
type Props = {}

function about_us({}: Props) {
  return (
    <div className='py-3 px-3 flex flex-col'>
       <div> <Image src="/sislogo.png.jpg" alt='sis'
        width={120}
        height={120}
        />
        </div>
        <div>
        <h3>who we are</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Laboriosam quaerat, dicta vero asperiores temporibus dolorem nostrum rerum molestiae
             facilis harum omnis! Beatae 
            laboriosam molestias velit libero in? Laudantium, corrupti accusamus.</p>
        </div>
    </div>
  )
}

export default about_us;