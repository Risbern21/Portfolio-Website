import HomeBtn from "@/components/HomeBtn";
export default function Subpageslayout({ children }) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-8 xs:px-16 lg:px-32 py-20">
      <button>
        <HomeBtn/>
      </button>
      {children}
    </main>
  );
}
