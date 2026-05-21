import MyRequestCard from "@/components/MyRequestCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyRequestsPage = async () => {
  const { user } = await auth.api.getSession({
    headers: await headers(),
  });
  const res = await fetch(`http://localhost:8000/request/${user?.email}`);
  const myRequests = await res.json();
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
        {myRequests.length == 0 ? (
          <div className="flex flex-col items-center justify-center rounded-[32px] border border-[var(--border-color)] bg-[var(--surface)] px-6 py-20 text-center shadow-[var(--shadow-md)]">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[var(--surface-soft)] text-5xl">
              🐾
            </div>

            <h2 className="heading-font text-3xl font-bold text-[var(--text-primary)]">
              No adoption requests yet 
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* CARD */}
            {myRequests.map((request) => (
              <MyRequestCard
                key={request._id}
                request={request}
              ></MyRequestCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyRequestsPage;
