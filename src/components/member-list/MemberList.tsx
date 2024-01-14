import React from "react";
import classnames from "classnames/bind";
import styles from "./memberList.module.scss";
import Image from "next/image";

import member1 from "/public/team1-free-img.png";
import member2 from "/public/team2-free-img.png";
import member3 from "/public/team3-free-img.png";
import member4 from "/public/team4free-img.png";
import member5 from "/public/team5-free-img.png";
import member6 from "/public/team6-free-img.png";

const cx = classnames.bind(styles);

const memberList = [
  {
    id: 1,
    imge: member1,
    name: "Harvey Spector",
    position: "Founder - CEO",
  },

  {
    id: 2,
    imge: member2,
    name: "Harvey Spector",
    position: "Founder - CEO",
  },
  {
    id: 3,
    imge: member3,
    name: "Harvey Spector",
    position: "Founder - CEO",
  },
  {
    id: 4,
    imge: member4,
    name: "Harvey Spector",
    position: "Founder - CEO",
  },
  {
    id: 5,
    imge: member5,
    name: "Harvey Spector",
    position: "Founder - CEO",
  },
  {
    id: 6,
    imge: member6,
    name: "Harvey Spector",
    position: "Founder - CEO",
  },
];

const MemberList = () => {
  return (
    <ul className={cx("member-list")}>
      {memberList.map((member) => (
        <li className={cx("member-item")} key={member.id}>
          <div className={cx("member")}>
            <Image
              src={member.imge}
              alt="member 1"
              style={{ width: "92px", height: "auto" }}
              priority
            />
            <div className={cx("member-infor")}>
              <h4>{member.name}</h4>
              <p>{member.position}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MemberList;
