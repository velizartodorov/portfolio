import { GHENT, RUSE, UNIVERSITY_RUSE } from "../../common/utils";
import { IEducation } from "../education.init";

export const bachelor: IEducation = {
    occupation: "Computer Engineering (Bachelor's degree)",
    institution: UNIVERSITY_RUSE,
    place: RUSE,
    icon: '/education/university_ruse.png',
    period: {
        start: new Date(2013, 8),
        end: new Date(2017, 6)
    },
    body: [
        `References 📌`,
        ``
    ],
    references: [
        { value: UNIVERSITY_RUSE, href: "https://www.uni-ruse.bg/en" },
    ]
}