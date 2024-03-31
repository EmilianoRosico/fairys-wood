import React from "react";
import Image from "next/image";
import Link from "next/link";

function Card({ picture }) {
  return (
    <div className="col-sm-3">
      <div className="card zoom border-0 text-center mb-3">
        <Link href={`/fq${picture}`} passHref legacyBehavior>
          <a target="_blank" rel="noreferrer">
            <Image
              src={picture}
              className="card-img-top"
              alt="..."
              width={304}
              height={405}
            />
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .zoom {
          }
          .zoom:hover {
            opacity: 0.5;
            transition: 0.4s; /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
          }
        `}
      </style>
    </div>
  );
}

export default Card;
