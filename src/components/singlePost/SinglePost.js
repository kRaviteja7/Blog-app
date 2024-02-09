import React from 'react'
import './singlePost.css'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SinglePost = () => {
  return (
    <div className='singlePost'>
        <div className='singlePostWrapper'>
            <img className='singlePostImg'
                src='https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/16:9/w_1280,c_limit/IMG%20Worlds%20of%20Adventure%20-%201.jpg'
                alt=''
            />
            <h1 className='singlePostTitle'>
                Raviteja
                <div className='singlePostEdit'>
                    <FaRegEdit className='singlePostIcon'/>
                    <MdDelete className='singlePostIcon'/>
                </div>
            </h1>
            <div className='singlePostInfo'>
                <span className='singlePostAuthor'>Author: <b>Safak</b></span>
                <span className='singlePostAuthor'>1 hr ago</span>
            </div>
            <p className='singlePostDesc'>
                Treat Myself is the third major-label studio album by American 
                singer-songwriter Meghan Trainor (pictured). Epic Records released it 
                on January 31, 2020, after delaying it for over a year while Trainor wrote more songs.
                 She worked with producers including Mike Sabath and Tyler Johnson, and featured artists including 
                 Nicki Minaj and the Pussycat Dolls. The album is a pop, doo-wop, funk, and R&B album,
                  with themes such as female duality, body image, self-esteem issues, and relationships. 
                  Trainor promoted it with public appearances and televised performances. Treat Myself includes the singles
                   "No Excuses", "Wave", and "Nice to Meet Ya". Some reviewers thought the album effectively showcased Trainor's artistic range; 
                   others criticized its production choices and lyrical themes. It debuted at number 25 on the US Billboard 200 and peaked within the 
                   top 40 in Australia, Canada, New Zealand, Scotland, Spain, and Switzerland. 
                (This article is part of a featured topic: Meghan Trainor albums.)
            </p>
        </div>
    </div>
  )
}

export default SinglePost