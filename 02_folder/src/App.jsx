import React from 'react'
import Card from './components/Card';

const App = () => {

  const jobs = [
  {
    logo: "https://imgs.search.brave.com/bf1P-vlw8u2JaFLbmyz3EjS4LPeN2LDSuv3vcUlezgI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWlibS1pY29uLXN2/Zy1kb3dubG9hZC1w/bmctMjgyMTIwLnBu/Zz9mPXdlYnAmdz0y/NTY",
    company: "IBM",
    posted: "5 days ago",
    position: "Senior Product Designer",
    tag1: "Remote",
    tag2: "Senior Level",
    salary: "$100/hr",
    location: "Mumbai, India"
  },
  {
    logo: "https://imgs.search.brave.com/1NjKNCJLYkxjPLrKnWVPWI9kpKaExy3iB_VnIqxTbJc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDYv/ODYxLzY0Ny9zbWFs/bC9nb29nbGUtbG9n/by10cmFuc3BhcmVu/dC1iYWNrZ3JvdW5k/LWZyZWUtcG5nLnBu/Zw",
    company: "Google",
    posted: "2 weeks ago",
    position: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    salary: "$85/hr",
    location: "Bangalore, India"
  },
  {
    logo: "https://imgs.search.brave.com/BTkju2Opf17i7A7IjNaxZV8lx6lsLbycvNH5JW7wrr0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L21pY3Jvc29mdC13/aW5kb3ctbG9nby1l/bWJsZW0tMC5wbmc",
    company: "Microsoft",
    posted: "1 week ago",
    position: "Backend Engineer",
    tag1: "Hybrid",
    tag2: "Mid Level",
    salary: "$95/hr",
    location: "Hyderabad, India"
  },
  {
    logo: "https://imgs.search.brave.com/wTWNc2I09nNsLp9tvvevZNzuhzljGJ28oJ1jR2RBzCg/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOGVhYTQyYWM2/NjA3ZWJmZWNjMGY1/NWVkYzFlOWUwZTdi/ODkzYjFkMTFmYTUz/ODczZmMwMzc2ODkx/YWZmMWIwYS9wcmVz/cy5hYm91dGFtYXpv/bi5jb20v",
    company: "Amazon",
    posted: "3 days ago",
    position: "Cloud Architect",
    tag1: "Remote",
    tag2: "Senior Level",
    salary: "$120/hr",
    location: "Pune, India"
  },
  {
    logo: "https://imgs.search.brave.com/Alhb3GhgjoPmrNi1KJoonNzNBpKwJCkZHKFYg01xFcQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYTJmNzg1NTAy/OWU3ZDg4NjAxYjQ5/OTY2NWVlZDk1MzVi/MjEzZmI4OGE3MWI4/NmU1YmM3NWUxYjNh/NGJlYjIwZi93d3cu/bWV0YS5jb20v",
    company: "Meta",
    posted: "4 weeks ago",
    position: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Junior Level",
    salary: "$70/hr",
    location: "Delhi, India"
  },
  {
    logo: "https://imgs.search.brave.com/Oe0kJngKejXBB4stS_2DxZ9cEla8OtZq8EKrkTQ581E/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYzVjN2RiZWFk/ZDNkM2VhYWQ1MTI3/Mjc2ZDc5NjQ2Njgw/YjEyYzcxOTc0Y2Zh/NmE1YmNkYzE5NWJk/M2Q4NTBjZi9hYm91/dC5uZXRmbGl4LmNv/bS8",
    company: "Netflix",
    posted: "6 days ago",
    position: "Data Scientist",
    tag1: "Remote",
    tag2: "Senior Level",
    salary: "$130/hr",
    location: "Remote, India"
  },
  {
    logo: "https://imgs.search.brave.com/IsfVgrnFVKTAI0TKeADtKR67yAXN_za40StBku3Kum4/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZmUzMWYwMTE5/MDQxMGYyMGY3OGJj/ZjZmMmUyNzFmZDhh/NjJjYWM3MzY0YTlj/NzA0ZmM2M2U4NDY0/OTQ4MDkxOC93d3cu/YWRvYmUuY29tLw",
    company: "Adobe",
    posted: "1 day ago",
    position: "Product Manager",
    tag1: "Full Time",
    tag2: "Mid Level",
    salary: "$110/hr",
    location: "Mumbai, India"
  },
  {
    logo: "https://imgs.search.brave.com/2eHJQzcZ9OXGrTlr2j0wC_lVkdCE61qztdG-KNwJPLk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2VjL2U0/L2I1L2VjZTRiNTk3/ZjgyYzA5NzBiOWE5/MmFjNWQ5MjA3NzAx/LmpwZw",
    company: "Spotify",
    posted: "2 days ago",
    position: "Mobile App Developer",
    tag1: "Hybrid",
    tag2: "Junior Level",
    salary: "$90/hr",
    location: "Gurgaon, India"
  },
  {
    logo: "https://imgs.search.brave.com/GGR__RXNQzncAkOBJ29ZLZtw8B61VZwazR_d77fRRcc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMTg0ZmZmMDQ4/ZDZjZDdlYWY0OWM1/MGNkNjk0YmY0ZTYx/N2FlMmZlYjUwNDhk/MDUwYzQ2MzhjYmE0/YzkzM2IzNi93d3cu/dGVzbGEuY29tLw",
    company: "Tesla",
    posted: "3 weeks ago",
    position: "AI Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    salary: "$150/hr",
    location: "Remote, India"
  },
  {
    logo: "https://imgs.search.brave.com/ZI7_HuRllzcuzsFLrATfMM58fBSZK_DYE0lmwu4c_cU/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvODg0ZTA2OGRk/NjEzNDQyY2ZiZTc1/ZjE3OTU1MjNkYjEx/ZWNhNjYwNjhmODZi/MDM5YjUxMWYxZTgy/MmE5NWZhNy93d3cu/em9vbS5jb20v",
    company: "Zoom",
    posted: "4 days ago",
    position: "Customer Lead Manager",
    tag1: "Full Time",
    tag2: "Fresher",
    salary: "$60/hr",
    location: "Chennai, India"
  },
];


  return (
    <>
      <div className="parent min-h-screen w-full p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {jobs.map(function (elem,idx) {
          return <div key={idx}>
          <Card company={elem.company} position={elem.position} posted={elem.posted} tag1={elem.tag1} tag2={elem.tag2} salary={elem.salary} location={elem.location} logo={elem.logo} />
          </div>
        })}
      </div>
    </>
  );
}

export default App