import SearchForm from "../../components/SearchForm";

const Home = async ({ searchParams }: { searchParams: Promise<{ query?: string }> }) => {
  const query = (await searchParams).query
  return (
    <section className="pink_container">
      <h1 className="heading">Connect with people here </h1>
      <p className="sub-heading !max-w-3xl">Submit Ideas, Vote for ideas and Submit Imaginations</p>
      <SearchForm query={query} />
    </section>
  );
}

export default Home;