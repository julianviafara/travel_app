import {Header} from "../../../components";

const Dashboard= () =>{
    const user = {name: 'Julian'};

    return (
        <main className="dashboard wrapper">
            <Header
                title={`Hello ${user?.name ?? 'Guest'}`}
                description="Track activity"
            />
            Dashboard content
        </main>
    );
}

export default Dashboard;