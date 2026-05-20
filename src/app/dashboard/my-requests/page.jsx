import MyRequestCard from "@/components/MyRequestCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const MyRequestsPage =async () => {
    const {user}=await auth.api.getSession({
        headers:await headers()
    })
    const res=await fetch(`http://localhost:8000/request/${user?.email}`)
    const myRequests=await res.json()
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* HEADER */}

        <div className="mb-10">
          <h1 className="section-title">
            My <span className="gradient-text">Requests</span>
          </h1>

          <p className="section-subtitle mt-3">
            Track your adoption requests, monitor approval status, and manage
            your upcoming pet pickups.
          </p>
        </div>

        {/* REQUEST CARDS */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* CARD */}
            {
                myRequests.map(request=><MyRequestCard key={request._id} request={request}></MyRequestCard>)
            }
    
        </div>
      </div>
    </section>
  );
};

export default MyRequestsPage;
