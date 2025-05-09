import { GHENT, RUSE, UNVERSITY_RUSE } from "../../common/utils";
import { IEducation } from "../education.init";

export const masters: IEducation = {
    occupation: "Software Engineering (Master's degree)",
    institution: UNVERSITY_RUSE,
    place: RUSE,
    icon: '/education/university_ruse.png',
    period: {
        start: new Date(2017, 8),
        end: new Date(2018, 6)
    },
    body: [
        `References 📌`,
        ``
    ],
    references: [
        { value: UNVERSITY_RUSE, href: "https://www.uni-ruse.bg/en" },
    ]
}