import React from 'react'
import Image from 'next/image'

const lexfer = () => {
    return (
        <div style={{width:"50%", height:"50%"}}>
            <Image
                src="/descarga 2.jpeg" 

                //respoonsive
                layout='responsive'
                width="100" 
                height="70"
                
                //fill
                // layout='fill'
                // objectFit="cover"
                // objectPosition="bottom center"
                
                loading={
                    // photo.length === index+1 ? 'eager' : 'lazy'
                    'eager'
                }
                
                alt="photo"
                quality={100}
            />
        </div>
    )
}

export default lexfer
