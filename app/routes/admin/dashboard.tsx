import {Header, StatsCard, TripCard} from "../../../components";
import {dashboardStats, user, allTrips} from "~/constants";

const {totalUser, userJoined, totalTrips, tripsCreated, userRole} = dashboardStats;

const Dashboard= () =>{

    return (
        <main className="dashboard wrapper">
            <Header
                title={`Hello ${user?.name ?? 'Guest'}`}
                description="Track activity"
            />
            <section className="flex flex-col gap-6">
                <div className="gird gird-cols-1 md:gird-cols-3 gap-6 w-full">
                    <StatsCard
                        headerTitle="Total Users"
                        total = {totalUser}
                        currentMonthCount={userJoined.currentMonth}
                        lastMonthCount = {userJoined.lastMonth}
                    /><StatsCard
                        headerTitle="Total Trips"
                        total = {totalTrips}
                        currentMonthCount={tripsCreated.currentMonth}
                        lastMonthCount = {tripsCreated.lastMonth}
                    /><StatsCard
                        headerTitle="Active Users Today"
                        total = {userRole.total}
                        currentMonthCount={userRole.currentMonth}
                        lastMonthCount = {userRole.lastMonth}
                    />
                </div>
            </section>
            <section className="container">
                <h1 className="text-xl font-semibold text-dark-100">
                    Created Trips</h1>
                <div className="trip-grid">
                    {allTrips.slice(0, 4).map(({id,name, imageUrls,
                                               itinerary, tags, estimatedPrice}) => (
                        <TripCard
                            key={id}
                            id={id.toString()}
                            name = {name}
                            imageUrl={imageUrls[0]}
                            location={itinerary?.[0]?.location ?? ''}
                            tags={tags}
                            price={estimatedPrice}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Dashboard;