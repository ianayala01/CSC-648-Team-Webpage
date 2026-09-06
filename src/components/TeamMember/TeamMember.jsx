import './TeamMember.css'

function TeamMember({photo, name, role, bio}) {
    return (
        <div className="team-member">
            <img src={photo} alt={name} />
            <h2>{name}</h2>
            <h3 class="role">{role}</h3>
            <p>{bio}</p>
        </div>
    );
}

export default TeamMember;