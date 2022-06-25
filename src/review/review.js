import React, { useState, useEffect } from "react";
import "./review.style.scss";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

function Review({ firstTestimonies, lastTestimonies }) {
  const [testimonies, setTestimonies] = useState([]);

  useEffect(() => {
    const getTestimonies = async () => {
      const collectionRef = collection(db, "messages");
      const data = await getDocs(collectionRef);

      setTestimonies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getTestimonies();
  }, []);
  const filteredTestimony = testimonies.filter((testimony) => testimony.pic);
  return (
    <div className='review-cont px-4 mx-4 mt-5'>
      {firstTestimonies &&
        filteredTestimony.slice(0, 6).map((testimony) => (
          <div className='person d-flex flex-column px-sm-3 mx-3 mb-2 align-items-start'>
            <img src={testimony.pic} alt='' className='mb-4' />
            <h4>
              {testimony.firstName} {testimony.lastName}
            </h4>
            <div className='state-role d-flex justify-content-between align-items-center'>
              <span className='pe-2'>{testimony.location}</span>
              <span
                className={`role px-3 ${
                  testimony.role === "customer" ? "customer" : "vendor"
                }`}
              >
                {testimony.role}
              </span>
            </div>
            <p className='pt-4 me-2'>{testimony.message}</p>
          </div>
        ))}
      {lastTestimonies &&
        filteredTestimony
          .slice(6, filteredTestimony.length)
          .map((testimony) => (
            <div className='person d-flex flex-column px-sm-3 mx-3 mb-2 align-items-start'>
              <img src={testimony.pic} alt='' className='mb-4' />
              <h4>
                {testimony.firstName} {testimony.lastName}
              </h4>
              <div className='state-role d-flex justify-content-between align-items-center'>
                <span className='pe-2'>{testimony.location}</span>
                <span
                  className={`role px-3 ${
                    testimony.role === "customer" ? "customer" : "vendor"
                  }`}
                >
                  {testimony.role}
                </span>
              </div>
              <p className='pt-4 me-2'>{testimony.message}</p>
            </div>
          ))}
    </div>
  );
}

export default Review;
