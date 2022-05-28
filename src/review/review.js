import React from "react";
import "./review.style.scss";

const reviewData = [
  {
    url: "/assets/ladies.svg",
    name: "Joseph Ike",
    state: "Ibadan",
    role: "vendor",
    message:
      "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  },
    {
      url: "/assets/ladies.svg",
      name: "Joseph Ike",

      state: "Ibadan",
      role: "vendor",
      message:
        "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
    },
    {
      url: "/assets/ladies.svg",
      name: "Joseph Ike",

      state: "Ibadan",
      role: "vendor",
      message:
        "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
    },
    {
      url: "/assets/ladies.svg",
      name: "Joseph Ike",

      state: "Ibadan",
      role: "vendor",
      message:
        "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
    },
    {
      url: "/assets/ladies.svg",
      name: "Joseph Ike",

      state: "Ibadan",
      role: "vendor",
      message:
        "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
    },
    {
      url: "/assets/ladies.svg",
      name: "Joseph Ike",

      state: "Ibadan",
      role: "vendor",
      message:
        "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
    },
];

function Review() {
  return (
    <div className='review-cont'>
      {reviewData.map((item) => (

          <div className='person d-flex flex-column px-sm-3 mx-3 align-items-start'>
            <img src={item.url} alt='' className='mb-4' />
            <h4>{item.name}</h4>
            <div className='state-role d-flex justify-content-between align-items-center'>
              <span className="pe-3">{item.state}</span>
              <span className="role px-3">{item.role}</span>
            </div>
            <p className="pt-4 me-2">{item.message}</p>
          </div>

      ))}
    </div>
  );
}

export default Review;
