const Header = ({selectedTeam, teamMemberCount}) => {
    return (
        <header className='Header'>
            <h1>{selectedTeam}: {teamMemberCount}</h1>
        </header>
    );
};
export default Header