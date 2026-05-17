import Image from "next/image";

export default function Home() {
  return (
   <div className="pet-card w-100 h-100 mt-20">
    <p className="gradient-text">Hello pawnest</p>
    <button className="btn-primary">Adopt me</button>
    <button className="btn-secondary">View Details</button>
   </div>
  );
}
