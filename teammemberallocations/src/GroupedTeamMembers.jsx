import { useState } from 'react';

const GroupedTeamMembers = ({employees, selectedTeam, setTeam}) => {

    const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

    function groupTeamMembers(){

    }

    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">
                    <h1>Grouped Team Members</h1>
                </div>
            </div>
        </main>
    );
};
export default GroupedTeamMembers