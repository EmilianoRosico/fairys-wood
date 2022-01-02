import React from "react";
import Image from "next/image";
import Link from "next/link";

function Card({ picture }) {
  return (
    <div className="col-sm-3">
      <div className="card">
        <Link href={picture} passHref>
          <a target="_blank">
            <Image
              src={picture}
              className="card-img-top"
              alt="..."
              width={3024}
              height={4032}
            />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Card;