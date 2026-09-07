import genericPfp from '../assets/Team/generic-icon.png'

import RohitBio from '../components/TeamMember/bios/RohitBio'
import RohitPfp from '../assets/Team/Rohit.jpg'

import IanPfp from '../assets/Team/Ian.jpg'
import IanBio from '../components/TeamMember/bios/IanBio'

import NuradilBio  from '../components/TeamMember/bios/NuradilBio'

import ObaidullahBio from '../components/TeamMember/bios/ObaidullahBio'
import ObaidullahPfp from '../assets/Team/Obaidullah.jpg'

const team = [
    {
        name: "Rohit Vennelakanti",
        role: "Team Lead",
        photo: RohitPfp,
        bio: RohitBio
    },

    {
        name: "Fanta Phommachith",
        role: "Scrum Master",
        photo: genericPfp,
        bio: "<bio>"
    },

    {
        name: "Ali Coklu",
        role: "Backend-Lead",
        photo: genericPfp,
        bio: "<bio>"
    },

    {
        name: "Nuradil Kumarov",
        role: "Github Master",
        photo: genericPfp,
        bio: NuradilBio
    },

    {
        name: "Obaidullah Darwishi",
        role: "AI Master",
        photo: ObaidullahPfp,
        bio: ObaidullahBio
    },

    {
        name: "Ian Ayala",
        role: "Frontend-Lead",
        photo: IanPfp,
        bio: IanBio
    }
];

export default team;